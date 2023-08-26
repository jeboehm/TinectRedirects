<?php declare(strict_types=1);

namespace Tinect\Redirects\Message;

use Doctrine\DBAL\Connection;
use Shopware\Core\Defaults;
use Shopware\Core\Framework\DataAbstractionLayer\Doctrine\RetryableQuery;
use Shopware\Core\Framework\Uuid\Uuid;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler(priority: 100)]
class TinectRedirectUpdateHandler
{
    public function __construct(
        private readonly Connection $connection
    ) {
    }

    public function __invoke(TinectRedirectUpdateMessage $message): void
    {
        $query = new RetryableQuery(
            $this->connection,
            $this->connection->prepare('INSERT INTO `tinect_redirects_redirect` (`id`, `source`, `sales_channel_domain_id`, `created_at`)
                      VALUES (:id, :source, :salesChannelDomainId, :createdAt)
                      ON DUPLICATE KEY UPDATE `count` = count + 1')
        );

        $params = [
            'id' => Uuid::fromHexToBytes($message->getId()),
            'source' => $message->getSource(),
            'salesChannelDomainId' => null,
            'createdAt' => (new \DateTime())->format(Defaults::STORAGE_DATE_TIME_FORMAT),
        ];

        if (\is_string($message->getSalesChannelDomainId())) {
            $params['salesChannelDomainId'] = Uuid::fromHexToBytes($message->getSalesChannelDomainId());
        }

        $query->execute($params);
    }
}