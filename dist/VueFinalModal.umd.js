!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=function(e){return function(e,t){return a(e.querySelectorAll(t)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},l=function(e){return e==document.activeElement},c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}var n,o,i;return n=e,(o=[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||l(this.lastElement())?(this.firstElement().focus(),void e.preventDefault()):void 0;l(this.firstElement())&&(this.lastElement().focus(),e.preventDefault())}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=s(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}])&&t(n.prototype,o),i&&t(n,i),e}(),d="enter",f="entering",u="leave",v="leavng";var h={type:[String,Object,Array],default:""},p={name:"VueFinalModal",props:{name:{type:String,default:null},value:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:h,overlayClass:h,contentClass:h,styles:h,overlayStyle:h,contentStyle:h,lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(t){var n=e(t);return"boolean"===n||"string"===n||t.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1}},data:function(){return{modalStackIndex:null,visible:!1,visibility:{modal:!1,overlay:!1},overlayTransitionState:null,modalTransitionState:null,stopEvent:!1,params:{}}},computed:{api:function(){return this[this.$_options.key]},isComponentReadyToBeDestroyed:function(){return(this.hideOverlay||this.overlayTransitionState===u)&&this.modalTransitionState===u},calculateZIndex:function(){return"boolean"==typeof this.zIndex?this.attach?"unset":this.zIndexBase+2*(this.modalStackIndex||0):this.zIndex}},watch:{value:function(e){this.stopEvent?this.stopEvent=!1:(this.mounted(),e||this.close())},lockScroll:"handleLockScroll",hideOverlay:function(e){this.value&&!e&&(this.visibility.overlay=!0)},attach:"mounted",isComponentReadyToBeDestroyed:function(e){e&&(this.visible=!1)}},created:function(){this.api.modals.push(this)},mounted:function(){this.$focusTrap=new c,this.mounted()},beforeDestroy:function(){var e=this;this.close(),this.$el.remove();var t=this.api.modals.findIndex((function(t){return t===e}));this.api.modals.splice(t,1)},methods:{mounted:function(){var e=this;if(this.value){var t=this.getAttachElement();if(t||!1===this.attach){if(!1!==this.attach&&t.appendChild(this.$el),this.modalStackIndex=this.api.openedModals.length-1,this.handleLockScroll(),this.api.openedModals.filter((function(t){return t!==e})).forEach((function(e,n){e.getAttachElement()===t&&(e.modalStackIndex=n,e.visibility.overlay=!1)})),this.emitEvent("before-open",!1))return;this.visible=!0,this.$nextTick((function(){e.startTransitionEnter()}))}else!1!==t&&console.warn("Unable to locate target ".concat(this.attach))}},close:function(){if(!this.emitEvent("before-close",!0)){if(this.api.openedModals.length>0){var e=this.api.openedModals[this.api.openedModals.length-1];e.handleLockScroll(),(e.focusRetain||e.focusTrap)&&e.$refs.vfmContainer.focus(),!e.hideOverlay&&(e.visibility.overlay=!0)}this.startTransitionLeave()}},startTransitionEnter:function(){this.visibility.overlay=!0,this.visibility.modal=!0},startTransitionLeave:function(){this.visibility.overlay=!1,this.visibility.modal=!1},handleLockScroll:function(){this.value&&(this.lockScroll?this.api.lockScroll():this.api.unlockScroll())},getAttachElement:function(){return!1!==this.attach&&("string"==typeof this.attach?!!window&&window.document.querySelector(this.attach):this.attach)},beforeOverlayEnter:function(){this.overlayTransitionState=f},afterOverlayEnter:function(){this.overlayTransitionState=d},beforeOverlayLeave:function(){this.overlayTransitionState=v},afterOverlayLeave:function(){this.overlayTransitionState=u},beforeModalEnter:function(){this.modalTransitionState=f},afterModalEnter:function(){this.modalTransitionState=d,(this.focusRetain||this.focusTrap)&&this.$refs.vfmContainer.focus(),this.focusTrap&&this.$focusTrap.enable(this.$refs.vfmContainer),this.$emit("opened",this.createModalEvent({type:"opened"}))},beforeModalLeave:function(){this.modalTransitionState=v,this.$focusTrap.enabled()&&this.$focusTrap.disable()},afterModalLeave:function(){this.modalTransitionState=u,this.modalStackIndex=null,0===this.api.openedModals.length&&this.lockScroll&&this.api.unlockScroll();var e=!1,t=this.createModalEvent({type:"closed",stop:function(){e=!0}});this.$emit("closed",t),e||(this.params={})},onClickContainer:function(){this.$emit("click-outside",this.createModalEvent({type:"click-outside"})),this.clickToClose&&this.$emit("input",!1)},onEsc:function(e){27===e.keyCode&&this.visible&&this.escToClose&&this.$emit("input",!1)},createModalEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({ref:this},e)},emitEvent:function(e,t){var n=!1,o=this.createModalEvent({type:e,stop:function(){n=!0}});return this.$emit(e,o),!!n&&(this.stopEvent=!0,this.$emit("input",t),!0)},toggle:function(e,t){var n="boolean"==typeof e?e:!this.value;n&&2===arguments.length&&(this.params=t),this.$emit("input",n)}}};var m,y=function(e,t,n,o,i,a,r,s,l,c){"boolean"!=typeof r&&(l=s,s=r,r=!1);var d,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=d):t&&(d=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(f.functional){var u=f.render;f.render=function(e,t){return d.call(t),u(e,t)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,d):[d]}return n},b="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var g={};const S=y({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.ssr||e.visible?n("div",{directives:[{name:"show",rawName:"v-show",value:!e.ssr||e.visible,expression:"!ssr || visible"}],staticClass:"vfm vfm--inset",class:[!1===e.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":e.preventClick}],style:{zIndex:e.calculateZIndex},on:{keydown:e.onEsc}},[n("transition",{attrs:{name:e.overlayTransition},on:{"before-enter":e.beforeOverlayEnter,"after-enter":e.afterOverlayEnter,"before-leave":e.beforeOverlayLeave,"after-leave":e.afterOverlayLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOverlay&&e.visibility.overlay,expression:"!hideOverlay && visibility.overlay"}],staticClass:"vfm__overlay vfm--overlay vfm--absolute vfm--inset",class:e.overlayClass,style:e.overlayStyle})]),e._v(" "),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeModalEnter,"after-enter":e.afterModalEnter,"before-leave":e.beforeModalLeave,"after-leave":e.afterModalLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.modal,expression:"visibility.modal"}],ref:"vfmContainer",staticClass:"vfm__container vfm--absolute vfm--inset vfm--outline-none",class:e.classes,style:e.styles,attrs:{"aria-expanded":e.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1"},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClickContainer(t)}}},[n("div",{ref:"vfmContent",staticClass:"vfm__content",class:[e.contentClass,{"vfm--prevent-auto":e.preventClick}],style:e.contentStyle},[e._t("default",null,{params:e.params})],2)])])],1):e._e()},staticRenderFns:[]},(function(e){e&&e("data-v-ccc9a2f4_0",{source:".vfm--fixed[data-v-ccc9a2f4]{position:fixed}.vfm--absolute[data-v-ccc9a2f4]{position:absolute}.vfm--inset[data-v-ccc9a2f4]{top:0;right:0;bottom:0;left:0}.vfm--overlay[data-v-ccc9a2f4]{background-color:rgba(0,0,0,.5)}.vfm--prevent-none[data-v-ccc9a2f4]{pointer-events:none}.vfm--prevent-auto[data-v-ccc9a2f4]{pointer-events:auto}.vfm--outline-none[data-v-ccc9a2f4]:focus{outline:0}.vfm-enter-active[data-v-ccc9a2f4],.vfm-leave-active[data-v-ccc9a2f4]{transition:opacity .2s}.vfm-enter[data-v-ccc9a2f4],.vfm-leave-to[data-v-ccc9a2f4]{opacity:0}",map:void 0,media:void 0})}),p,"data-v-ccc9a2f4",false,undefined,!1,(function(e){return function(e,t){return function(e,t){var n=b?t.media||"default":e,o=g[n]||(g[n]={ids:new Set,styles:[]});if(!o.ids.has(e)){o.ids.add(e);var i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===m&&(m=document.head||document.getElementsByTagName("head")[0]),m.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(i),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,r=document.createTextNode(i),s=o.element.childNodes;s[a]&&o.element.removeChild(s[a]),s.length?o.element.insertBefore(r,s[a]):o.element.appendChild(r)}}}(e,t)}}),void 0,void 0);var k=function(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE)};function E(e){return function(){return{isScrollLocked:!1,get openedModals(){return this.modals.filter((function(e){return e.value}))},modals:[],show:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this.toggle.apply(this,[e,!0].concat(n))},hide:function(e){this.toggle(e,!1)},hideAll:function(){this.openedModals.forEach((function(e){e.$emit("input",!1)}))},toggle:function(e){var t=this.modals.find((function(t){return t.name===e}));if(void 0!==t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t.toggle.apply(t,o)}},lockScroll:function(){var t,n,o;this.isScrollLocked||(e.isMobile?(t=document.body,o="hidden",(n="overflow")&&k(t)&&(t.style[n]=o)):window.addEventListener("wheel",this.lockScrollListener,{passive:!1}),this.isScrollLocked=!0)},unlockScroll:function(){var t,n;e.isMobile?(t=document.body,(n="overflow")&&k(t)&&(t.style[n]="")):window.removeEventListener("wheel",this.lockScrollListener),this.isScrollLocked=!1},lockScrollListener:function(e){e.preventDefault()}}}}var w=M,T=M,O=M,x=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,C=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function M(e){e||(e={});var t=e.ua;if(t||"undefined"==typeof navigator||(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"!=typeof t)return!1;var n=e.tablet?C.test(t):x.test(t);return!n&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==t.indexOf("Macintosh")&&-1!==t.indexOf("Safari")&&(n=!0),n}w.isMobile=T,w.default=O;var _={componentName:"VueFinalModal",key:"$vfm",isMobile:w()};return function(){return{install:function(e,t){var n=Object.assign({},_,t),o=e.prototype[n.key];e.options.components[n.componentName]?console.warn(o?"[vue-final-modal] Duplicate registration API key and componentName of VueFinalModal.":"[vue-final-modal] Duplicate registration componentName of VueFinalModal."):(o||function(e,t){var n=E(t)();Object.defineProperty(e.prototype,t.key,{get:function(){return n}})}(e,n),function(e,t){e.component(t.componentName,i(i({},S),{},{props:i(i({},S.props),{},{$_options:{type:Object,default:function(){return t}}})}))}(e,n))}}}}));
//# sourceMappingURL=VueFinalModal.umd.js.map
