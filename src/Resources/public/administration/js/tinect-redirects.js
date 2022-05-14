!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bundles/tinectredirects/",i(i.s="4OKE")}({"4OKE":function(t,e,i){"use strict";i.r(e);var n=i("DA9F"),r=i.n(n),s=Shopware,a=s.Component,c=s.Mixin,l=Shopware.Data.Criteria;a.register("tinect-redirects-list",{template:r.a,inject:["repositoryFactory"],mixins:[c.getByName("listing")],data:function(){return{items:null,isLoading:!0,total:0,filter:{term:null,salesChannelDomainId:null,active:null}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return[{property:"active",dataIndex:"active",label:this.$tc("tinect-redirects.detail.activeLabel"),routerLink:"tinect.redirects.details"},{property:"source",dataIndex:"source",label:this.$tc("tinect-redirects.detail.sourceUrlLabel"),allowResize:!0,primary:!0},{property:"target",dataIndex:"target",label:this.$tc("tinect-redirects.detail.targetUrlLabel"),allowResize:!0},{property:"httpCode",dataIndex:"httpCode",label:this.$tc("tinect-redirects.detail.httpCodeLabel"),allowResize:!0}]},redirectRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect")}},methods:{getList:function(){var t=this;this.isLoading=!0;var e=new l;return e.addAssociation("salesChannelDomain"),this.filter.term&&e.setTerm(this.filter.term),this.filter.salesChannelDomainId&&e.addFilter(l.equals("salesChannelDomainId",this.filter.salesChannelDomainId)),this.filter.active&&e.addFilter(l.equals("active",this.filter.active)),e.addSorting(l.sort("active","ASC")),e.addSorting(l.sort("createdAt","DESC")),this.redirectRepository.search(e,Shopware.Context.api).then((function(e){t.items=e,t.total=e.total,t.isLoading=!1}))},resetFilter:function(){this.filter={term:null,salesChannelDomainId:null,active:null}}},watch:{filter:{deep:!0,handler:Shopware.Utils.debounce((function(){this.getList()}),400)}}});var o=i("FYrV"),d=i.n(o),u=Shopware,p=u.Component,m=u.Mixin;p.register("tinect-redirects-details",{template:d.a,inject:["repositoryFactory"],mixins:[m.getByName("notification")],props:{redirectId:{type:String,required:!1,default:null}},data:function(){return{redirect:null,isLoading:!0,processSuccess:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{redirectRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect")}},created:function(){this.getRedirect()},methods:{getRedirect:function(){var t=this;this.isLoading=!0,this.redirectRepository.get(this.redirectId,Shopware.Context.api).then((function(e){t.redirect=e,t.isLoading=!1}))},onClickSave:function(){var t=this;this.redirect.source!==this.redirect.target?(this.isLoading=!0,this.redirectRepository.save(this.redirect,Shopware.Context.api).then((function(){t.getRedirect(),t.isLoading=!1,t.processSuccess=!0})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:t.$tc("tinect-redirects.detail.errorTitle"),message:e})}))):this.createNotificationError({title:this.$tc("tinect-redirects.detail.errorTitle"),message:this.$tc("tinect-redirects.detail.errorSameUrlDescription")})},saveFinish:function(){this.processSuccess=!1}}});i("JsBU");Shopware.Module.register("tinect-redirects",{type:"plugin",name:"tinect-redirects",title:"tinect-redirects.general.title",description:"tinect-redirects.general.title",color:"#189eff",icon:"default-object-rocket",routes:{list:{component:"tinect-redirects-list",path:"list"},details:{component:"tinect-redirects-details",path:"details/:id",props:{default:function(t){return{redirectId:t.params.id}}},meta:{parentPath:"tinect.redirects.list"}},create:{component:"tinect-redirects-create",path:"create",meta:{parentPath:"tinect.redirects.list"}}},settingsItem:[{id:"tinect-redirects",path:"tinect.redirects.list",parent:"sw-settings",group:"plugins",to:"tinect.redirects.list",icon:"small-arrow-large-double-right",label:"tinect-redirects.general.title"}]});i("xJDv")},DA9F:function(t,e){t.exports='{% block tinect_redirects_list %}\n\t<sw-page class="tinect-redirects-list">\n\t\t<template slot="smart-bar-actions">\n\t\t\t{% block tinect_redirects_list_smarbar %}\n\t\t\t\t<sw-button variant="primary" :routerLink="{name: \'tinect.redirects.create\'}">\n\t\t\t\t\t{{ $t(\'tinect-redirects.list.createButton\') }}\n\t\t\t\t</sw-button>\n\t\t\t{% endblock %}\n\t\t</template>\n\t\t<template slot="smart-bar-header">\n            <h2>{{ $tc(\'tinect-redirects.general.title\') }} ({{ total }})</h2>\n        </template>\n\t\t<template slot="content">\n\t\t\t{% block tinect_redirects_list_content %}\n\t\t\t\t<sw-entity-listing\n\t\t\t\t\tv-if="items"\n\t\t\t\t\t:items="items"\n\t\t\t\t\t:repository="redirectRepository"\n\t\t\t\t\t:columns="columns"\n                    :isLoading="isLoading"\n\t\t\t\t\tdetailRoute="tinect.redirect.details">\n                    <template slot="column-source" slot-scope="{ item }">\n                        <router-link\n                            class="sw-data-grid__cell-value"\n                            :to="{ name: \'tinect.redirects.details\', params: { id: item.id } }"\n                        >\n                            <template v-if="item.salesChannelDomainId">\n                                {{ item.salesChannelDomain.url }}{{ item.source }}\n                            </template>\n                            <template v-else>\n                                {{ item.source }}\n                            </template>\n                        </router-link>\n                    </template>\n\n                    <template slot="detail-action" slot-scope="{ item }">\n                        <sw-context-menu-item class="sw-entity-listing__context-menu-show-action" :routerLink="{ name: \'tinect.redirects.details\', params: { id: item.id } }">\n                            {{ $tc(\'sw-customer.list.contextMenuEdit\') }}\n                        </sw-context-menu-item>\n                    </template>\n\t\t\t\t</sw-entity-listing>\n\t\t\t{% endblock %}\n\t\t</template>\n\n        <sw-sidebar slot="sidebar">\n            <sw-sidebar-item\n                icon="default-arrow-360-left"\n                :title="$tc(\'tinect-redirects.sidebar.refresh\')"\n                @click="onRefresh">\n            </sw-sidebar-item>\n\n            <sw-sidebar-item icon="default-action-filter"\n                             :title="$tc(\'tinect-redirects.sidebar.filter\')">\n                <sw-text-field :label="$tc(\'tinect-redirects.sidebar.filters.search\')" v-model="filter.term"></sw-text-field>\n\n                <sw-select-field :label="$t(\'tinect-redirects.detail.activeLabel\')"\n                                        v-model="filter.active">\n                    <option value=""></option>\n                    <option value="1">true</option>\n                    <option value="0">false</option>\n                </sw-select-field>\n\n                <sw-entity-single-select\n                    v-model="filter.salesChannelDomainId"\n                    :label="$tc(\'tinect-redirects.detail.salesChannelDomain\')"\n                    entity="sales_channel_domain"\n                    labelProperty="url"\n                    show-clearable-button\n                ></sw-entity-single-select>\n\n                <sw-button\n                    variant="ghost"\n                    @click="resetFilter">\n                    {{ $tc(\'tinect-redirects.sidebar.filters.resetFilter\') }}\n                </sw-button>\n            </sw-sidebar-item>\n\n        </sw-sidebar>\n\t</sw-page>\n{% endblock %}\n'},FYrV:function(t,e){t.exports='{% block tinect_redirects_details %}\n    <sw-page class="tinect-redirects-details">\n        <template slot="smart-bar-actions">\n            <sw-button :routerLink="{name: \'tinect.redirects.list\'}">\n                {{ $t(\'tinect-redirects.detail.cancelButton\') }}\n            </sw-button>\n\n            <sw-button-process :isLoading="isLoading"\n                               :processSuccess="processSuccess"\n                               variant="primary"\n                               @process-finish="saveFinish"\n                               @click="onClickSave">\n                {{ $t(\'tinect-redirects.detail.saveButton\') }}\n            </sw-button-process>\n        </template>\n\n        <template slot="content">\n            <sw-card-view>\n                <sw-card :isLoading="isLoading">\n\n                    <sw-checkbox-field :label="$t(\'tinect-redirects.detail.activeLabel\')"\n                                       v-model="redirect.active"></sw-checkbox-field>\n\n                    <sw-entity-single-select :label="$tc(\'tinect-redirects.detail.salesChannelDomain\')"\n                                             :value="redirect.salesChannelDomainId"\n                                             v-model="redirect.salesChannelDomainId"\n                                             entity="sales_channel_domain"\n                                             show-clearable-button\n                                             labelProperty="url"\n                    :helpText="$tc(\'tinect-redirects.detail.salesChannelDomainHelpText\')">\n                    </sw-entity-single-select>\n\n                    <sw-field :label="$t(\'tinect-redirects.detail.sourceUrlLabel\')"\n                              v-model="redirect.source"\n                              validation="required"></sw-field>\n\n                    <sw-field :label="$t(\'tinect-redirects.detail.targetUrlLabel\')"\n                              v-model="redirect.target"\n                              validation="required"></sw-field>\n\n                    <sw-select-number-field :label="$t(\'tinect-redirects.detail.httpCodeLabel\')"\n                                            v-model="redirect.httpCode"\n                                            validation="required">\n                        <option value=301>{{ $t(\'tinect-redirects.detail.httpCodeLabelValues.301\') }}</option>\n                        <option value=302>{{ $t(\'tinect-redirects.detail.httpCodeLabelValues.302\') }}</option>\n                    </sw-select-number-field>\n                </sw-card>\n            </sw-card-view>\n        </template>\n    </sw-page>\n{% endblock %}\n'},JsBU:function(t,e){Shopware.Component.extend("tinect-redirects-create","tinect-redirects-details",{methods:{getRedirect:function(){this.redirect=this.redirectRepository.create(Shopware.Context.api),this.redirect.httpCode=302,this.redirect.active=!1,this.isLoading=!1},onClickSave:function(){var t=this;this.redirect.source!==this.redirect.target?(this.isLoading=!0,this.redirectRepository.save(this.redirect,Shopware.Context.api).then((function(){t.isLoading=!1,t.$router.push({name:"tinect.redirects.details",params:{id:t.redirect.id}})})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:t.$tc("tinect-redirects.detail.errorTitle"),message:e})}))):this.createNotificationError({title:this.$tc("tinect-redirects.detail.errorTitle"),message:this.$tc("tinect-redirects.detail.errorSameUrlDescription")})}}})},xJDv:function(t,e){Shopware.Component.override("sw-import-export-edit-profile-modal",{created:function(){this.supportedEntities.push({value:"tinect_redirects_redirect",label:this.$tc("sw-import-export.profile.rlRedirectLabel")}),console.log(this.supportedEntities)}})}});