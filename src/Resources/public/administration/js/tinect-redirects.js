/*! For license information please see tinect-redirects.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=(window.__sw__.assetPath + '/bundles/tinectredirects/'),r(r.s="fp4e")}({Fbqh:function(t,e){Shopware.Component.override("sw-import-export-edit-profile-modal",{created:function(){this.supportedEntities.push({value:"tinect_redirects_redirect",label:this.$tc("sw-import-export.profile.rlRedirectLabel")})}})},P8hj:function(t,e,r){"use strict";function n(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}r.r(e),r.d(e,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,i){l=r,d=i||{};var a=n(t,e);return m(a),function(e){for(var r=[],i=0;i<a.length;i++){var s=a[i];(c=o[s.id]).refs--,r.push(c)}e?m(a=n(t,e)):a=[];for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function m(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(y(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(y(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,r,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(l)return u;n.parentNode.removeChild(n)}if(f){var i=c++;n=s||(s=v()),e=b.bind(null,n,i,!1),r=b.bind(null,n,i,!0)}else n=v(),e=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,w=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function x(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),d.ssrId&&t.setAttribute(h,e.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},fp4e:function(t,e,r){"use strict";r.r(e);var n=Shopware,i=n.Component,o=n.Mixin,a=Shopware.Data.Criteria;i.register("tinect-redirects-index",{template:'{% block tinect_redirects_list %}\n\t<sw-page class="tinect-redirects-list">\n\t\t<template slot="smart-bar-actions">\n\t\t\t{% block tinect_redirects_list_smarbar %}\n\t\t\t\t<sw-button variant="primary" :routerLink="{name: \'tinect.redirects.create\'}">\n\t\t\t\t\t{{ $t(\'tinect-redirects.list.createButton\') }}\n\t\t\t\t</sw-button>\n\t\t\t{% endblock %}\n\t\t</template>\n\t\t<template slot="smart-bar-header">\n            <h2>{{ $tc(\'tinect-redirects.general.title\') }} ({{ total }})</h2>\n        </template>\n\t\t<template slot="content">\n\t\t\t{% block tinect_redirects_list_content %}\n                <tinect-redirects-list :items="items" :isLoading="isLoading">\n                </tinect-redirects-list>\n\t\t\t{% endblock %}\n\t\t</template>\n\n        <sw-sidebar slot="sidebar">\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'tinect-redirects.sidebar.refresh\')"\n                @click="onRefresh">\n            </sw-sidebar-item>\n\n            <sw-sidebar-item icon="regular-filter"\n                             :title="$tc(\'tinect-redirects.sidebar.filter\')">\n                <sw-text-field :label="$tc(\'tinect-redirects.sidebar.filters.search\')" v-model="filter.term"></sw-text-field>\n\n                <sw-select-field :label="$t(\'tinect-redirects.detail.activeLabel\')"\n                                        v-model="filter.active">\n                    <option value=""></option>\n                    <option value="1">true</option>\n                    <option value="0">false</option>\n                </sw-select-field>\n\n                <sw-select-number-field :label="$t(\'tinect-redirects.detail.hiddenLabel\')"\n                                        v-model="filter.hidden">\n                    <option value=1>true</option>\n                    <option value=0>false</option>\n                </sw-select-number-field>\n\n                <sw-entity-single-select\n                    v-model="filter.salesChannelDomainId"\n                    :label="$tc(\'tinect-redirects.detail.salesChannelDomain\')"\n                    entity="sales_channel_domain"\n                    labelProperty="url"\n                    show-clearable-button\n                ></sw-entity-single-select>\n\n                <sw-button\n                    variant="ghost"\n                    @click="resetFilter">\n                    {{ $tc(\'tinect-redirects.sidebar.filters.resetFilter\') }}\n                </sw-button>\n            </sw-sidebar-item>\n\n        </sw-sidebar>\n\t</sw-page>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[o.getByName("listing")],data:function(){return{items:null,isLoading:!0,total:0,filter:{term:null,salesChannelDomainId:null,active:null,hidden:0}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{redirectRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect")}},methods:{getList:function(){var t=this;this.isLoading=!0;var e=new a;return this.filter.term&&e.setTerm(this.filter.term),this.filter.salesChannelDomainId&&e.addFilter(a.equals("salesChannelDomainId",this.filter.salesChannelDomainId)),this.filter.active&&e.addFilter(a.equals("active",this.filter.active)),e.addFilter(a.equals("hidden",this.filter.hidden)),e.addSorting(a.sort("active","ASC")),e.addSorting(a.sort("createdAt","DESC")),this.redirectRepository.search(e,Shopware.Context.api).then((function(e){t.items=e,t.total=e.total,t.isLoading=!1}))},resetFilter:function(){this.filter={term:null,salesChannelDomainId:null,active:null,hidden:0}}},watch:{filter:{deep:!0,handler:Shopware.Utils.debounce((function(){this.getList()}),400)}}});function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function d(t,e,r,i){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new R(i||[]);return n(a,"_invoke",{value:S(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var f={};function p(){}function m(){}function v(){}var y={};u(y,o,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==e&&r.call(w,o)&&(y=w);var b=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function i(n,o,a,c){var l=h(t[n],t,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==s(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(l.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return I()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return m.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(d(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),u(b,l,"Generator"),u(b,o,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function l(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}var u=Shopware.Component,d=Shopware.Data.Criteria;u.register("tinect-redirects-list",{template:'{% block tinect_redirects_list %}\n    <sw-entity-listing\n        v-if="items"\n        :items="items"\n        :repository="redirectRepository"\n        :columns="columns"\n        :isLoading="isLoading"\n        :fullPage="isFullPage"\n        detailRoute="tinect.redirect.details">\n        <template slot="column-source" slot-scope="{ item }">\n            <router-link\n                class="sw-data-grid__cell-value"\n                :to="{ name: \'tinect.redirects.details\', params: { id: item.id} }"\n            >\n                <template v-if="item.salesChannelDomain">\n                    {{ item.salesChannelDomain.url }}{{ item.source }}\n                </template>\n                <template v-else>\n                    {{ item.source }}\n                </template>\n            </router-link>\n        </template>\n\n        <template slot="detail-action" slot-scope="{ item }">\n            <sw-context-menu-item class="sw-entity-listing__context-menu-show-action" :routerLink="{ name: \'tinect.redirects.details\', params: { id: item.id } }">\n                {{ $tc(\'sw-customer.list.contextMenuEdit\') }}\n            </sw-context-menu-item>\n        </template>\n    </sw-entity-listing>\n{% endblock %}\n',props:{items:{type:Array,required:!1,default:null},isLoading:{type:Boolean,required:!1,default:!1},isFullPage:{type:Boolean,required:!1,default:!0}},data:function(){return{firstEntryDate:null}},inject:["repositoryFactory"],created:function(){var t,e=this;return(t=c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new d).addAggregation(d.min("createdAt","createdAt")),r.setLimit(1),t.next=5,e.redirectRequestRepository.search(r,Shopware.Context.api).then((function(t){var r=new Date;e.firstEntryDate=Math.ceil((r-new Date(t.aggregations.createdAt.min))/864e5)}));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){l(o,n,i,a,s,"next",t)}function s(t){l(o,n,i,a,s,"throw",t)}a(void 0)}))})()},computed:{open:function(t){var e=this.$router.resolve({name:"tinect.redirects.details",params:{id:t}});window.location.replace(e.href)},columns:function(){return[{property:"active",dataIndex:"active",label:this.$tc("tinect-redirects.detail.activeLabel"),routerLink:"tinect.redirects.details"},{property:"source",dataIndex:"source",label:this.$tc("tinect-redirects.detail.sourceUrlLabel"),allowResize:!0,primary:!0},{property:"target",dataIndex:"target",label:this.$tc("tinect-redirects.detail.targetUrlLabel"),allowResize:!0},{property:"httpCode",dataIndex:"httpCode",label:this.$tc("tinect-redirects.detail.httpCodeLabel"),allowResize:!0},{property:"count",dataIndex:"count",label:this.$tc("tinect-redirects.list.countColumn",this.firstEntryDate),allowResize:!0}]},redirectRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect")},redirectRequestRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect_request")}}});r("lchO");function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,i){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new R(i||[]);return n(a,"_invoke",{value:S(t,r,s)}),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d={};function p(){}function m(){}function v(){}var y={};c(y,o,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(k([])));w&&w!==e&&r.call(w,o)&&(y=w);var b=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function i(n,o,a,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==h(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return i("throw",t,a,s)}))}s(c.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return I()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=u(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return m.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),c(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new L(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function p(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}var m=Shopware.Data.Criteria,v=Shopware,y=v.Component,g=v.Mixin;y.register("tinect-redirects-details",{template:'{% block tinect_redirects_details %}\n    <sw-page class="tinect-redirects-details">\n        <template slot="smart-bar-actions">\n            <sw-button :routerLink="{name: \'tinect.redirects.list\'}">\n                {{ $t(\'tinect-redirects.detail.cancelButton\') }}\n            </sw-button>\n\n            <sw-button-process :isLoading="isLoading"\n                               :processSuccess="processSuccess"\n                               variant="primary"\n                               @process-finish="saveFinish"\n                               @click="onClickSave">\n                {{ $t(\'tinect-redirects.detail.saveButton\') }}\n            </sw-button-process>\n        </template>\n\n        <template slot="content">\n            <sw-card-view>\n                <sw-card :isLoading="isLoading">\n                    <sw-container class="no-flex-grow-field">\n                        <sw-checkbox-field :label="$t(\'tinect-redirects.detail.activeLabel\')"\n                                           v-model="detail.active">\n                        </sw-checkbox-field>\n                    </sw-container>\n\n                    <sw-card>\n                        <sw-entity-single-select :label="$tc(\'tinect-redirects.detail.salesChannelDomain\')"\n                                                 :value="detail.salesChannelDomainId"\n                                                 v-model="detail.salesChannelDomainId"\n                                                 entity="sales_channel_domain"\n                                                 show-clearable-button\n                                                 labelProperty="url"\n                                                 :helpText="$tc(\'tinect-redirects.detail.salesChannelDomainHelpText\')">\n                        </sw-entity-single-select>\n\n                        <sw-field :label="$t(\'tinect-redirects.detail.sourceUrlLabel\')"\n                                  v-model="detail.source"\n                                  validation="required"></sw-field>\n                    </sw-card>\n\n                    <template v-if="hasSwUrlExt">\n                        <sw-url-ext-field :label="$t(\'tinect-redirects.detail.targetUrlLabel\')"\n                                          v-model="detail.target"\n                                          validation="required"></sw-url-ext-field>\n                    </template>\n                    <template v-else>\n                        <sw-field :label="$t(\'tinect-redirects.detail.targetUrlLabel\')"\n                                  v-model="detail.target"\n                                  validation="required"></sw-field>\n                    </template>\n\n                    <sw-select-number-field :label="$t(\'tinect-redirects.detail.httpCodeLabel\')"\n                                            v-model="detail.httpCode"\n                                            validation="required">\n                        <option value=301>{{ $t(\'tinect-redirects.detail.httpCodeLabelValues.301\') }}</option>\n                        <option value=302>{{ $t(\'tinect-redirects.detail.httpCodeLabelValues.302\') }}</option>\n                    </sw-select-number-field>\n\n                    <sw-container class="no-flex-grow-field">\n                        <sw-checkbox-field :helpText="$t(\'tinect-redirects.detail.hiddenHelpText\')"\n                                           :label="$t(\'tinect-redirects.detail.hiddenLabel\')"\n                                           v-model="detail.hidden">\n                        </sw-checkbox-field>\n                    </sw-container>\n\n                    <sw-text-editor :label="$t(\'tinect-redirects.detail.commentLabel\')" v-model="detail.comment"></sw-text-editor>\n                </sw-card>\n\n                <sw-card :isLoading="similarItemsIsLoading" v-if="similarItems">\n                    <template slot="title">\n                        {{ similarItems.total }} similar Entries\n                    </template>\n                    <sw-container>\n                        <tinect-redirects-list :items="similarItems" :isLoading="similarItemsIsLoading" :isFullPage="!1">\n                        </tinect-redirects-list>\n                    </sw-container>\n                </sw-card>\n\n                <sw-card v-if="detail">\n                    <template slot="title">\n                        {{ $tc(\'tinect-redirects.detail.countLabel\', redirectRequestsTotal) }}\n                    </template>\n                    <template>\n                        <sw-entity-listing\n                            :fullPage="false"\n                            :repository="redirectRequestRepository"\n                            :columns="redirectRequestColumns"\n                            :items="redirectRequests"\n                            @page-change="onPageChange"\n                            @column-sort="onSortColumn"\n                            :criteria-limit="limit"\n                            :sort-by="currentSortBy"\n                            :sort-direction="redirectRequestsSortDirection"\n                        >\n                            <template slot="column-createdAt" slot-scope="{ item }">\n                                {{ item.createdAt | date }}\n                            </template>\n                        </sw-entity-listing>\n                    </template>\n                </sw-card>\n            </sw-card-view>\n\n        </template>\n    </sw-page>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[g.getByName("notification"),g.getByName("listing")],props:{redirectId:{type:String,required:!1,default:null}},data:function(){return{detail:{},isLoading:!0,processSuccess:!1,similarItems:null,similarItemsIsLoading:!0,redirectRequests:null,redirectRequestsSortBy:"createdAt",redirectRequestsSortDirection:"DESC",redirectRequestsTotal:0}},metaInfo:function(){return{title:this.$createTitle()}},computed:{redirectRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect")},redirectRequestRepository:function(){return this.repositoryFactory.create("tinect_redirects_redirect_request")},redirectRequestColumns:function(){return[{property:"ipAddress",label:"tinect-redirects.detail.columnIpAddress",allowResize:!0},{property:"userAgent",label:"tinect-redirects.detail.columnUserAgent",allowResize:!0},{property:"createdAt",label:"tinect-redirects.detail.columnCreatedAt",allowResize:!0}]},redirectRequestCriteria:function(){var t=new m(this.page,this.limit);return t.addFilter(m.equals("redirectId",this.redirectId)),t.setTerm(this.term),t.addSorting(m.sort(this.redirectRequestsSortBy,this.redirectRequestsSortDirection,this.naturalSorting)),t},hasSwUrlExt:function(){return y.getComponentRegistry().has("sw-url-ext-field")}},created:function(){this.getRedirect()},methods:{getRedirect:function(){var t=this;this.isLoading=!0,this.redirectRepository.get(this.redirectId,Shopware.Context.api).then((function(e){t.detail=e,t.isLoading=!1;var r=new m;r.addFilter(m.equals("source",e.source)),r.addFilter(m.not("and",[m.equals("id",e.id)])),t.redirectRepository.search(r,Shopware.Context.api).then((function(e){t.similarItems=e,t.similarItemsIsLoading=!1}))}))},onClickSave:function(){var t=this;this.detail.source!==this.detail.target?(this.isLoading=!0,this.redirectRepository.save(this.detail,Shopware.Context.api).then((function(){t.getRedirect(),t.isLoading=!1,t.processSuccess=!0})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:t.$tc("tinect-redirects.detail.errorTitle"),message:e})}))):this.createNotificationError({title:this.$tc("tinect-redirects.detail.errorTitle"),message:this.$tc("tinect-redirects.detail.errorSameUrlDescription")})},saveFinish:function(){this.processSuccess=!1},getList:function(){var t,e=this;return(t=f().mark((function t(){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.addQueryScores(e.term,e.redirectRequestCriteria);case 2:return r=t.sent,t.abrupt("return",e.redirectRequestRepository.search(r).then((function(t){e.redirectRequests=t,e.redirectRequestsTotal=t.total})));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){p(o,n,i,a,s,"next",t)}function s(t){p(o,n,i,a,s,"throw",t)}a(void 0)}))})()}},watch:{"$route.params.id":{handler:function(t){this.detail&&this.detail.id!==t&&this.$router.go()}}}});r("ro4d");Shopware.Module.register("tinect-redirects",{type:"plugin",name:"tinect-redirects",title:"tinect-redirects.general.title",description:"tinect-redirects.general.title",color:"#189eff",icon:"regular-rocket",routes:{list:{component:"tinect-redirects-index",path:"list"},details:{component:"tinect-redirects-details",path:"details/:id",props:{default:function(t){return{redirectId:t.params.id}}},meta:{parentPath:"tinect.redirects.list"}},create:{component:"tinect-redirects-create",path:"create",meta:{parentPath:"tinect.redirects.list"}}},settingsItem:[{id:"tinect-redirects",path:"tinect.redirects.list",parent:"sw-settings",group:"plugins",to:"tinect.redirects.list",icon:"regular-double-chevron-right-s",label:"tinect-redirects.general.title"}]});r("Fbqh")},lchO:function(t,e,r){var n=r("zOEX");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r("P8hj").default)("528fb39e",n,!0,{})},ro4d:function(t,e){Shopware.Component.extend("tinect-redirects-create","tinect-redirects-details",{methods:{getRedirect:function(){this.detail=this.redirectRepository.create(Shopware.Context.api),this.detail.httpCode=302,this.detail.active=!1,this.detail.hidden=!1,this.isLoading=!1},onClickSave:function(){var t=this;this.detail.source!==this.detail.target?(this.isLoading=!0,this.redirectRepository.save(this.detail,Shopware.Context.api).then((function(){t.isLoading=!1,t.$router.push({name:"tinect.redirects.details",params:{id:t.detail.id}})})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:t.$tc("tinect-redirects.detail.errorTitle"),message:e})}))):this.createNotificationError({title:this.$tc("tinect-redirects.detail.errorTitle"),message:this.$tc("tinect-redirects.detail.errorSameUrlDescription")})}}})},zOEX:function(t,e,r){}});
//# sourceMappingURL=tinect-redirects.js.map