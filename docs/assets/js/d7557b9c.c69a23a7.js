"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return y},metadata:function(){return g},toc:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=n(1198),l=["components"],i={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No specific UX guidelines."))}s.isMDXComponent=!0;var c=n(342),p=["components"],m={toc:[]};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.ZP,{id:"components-segment--default",mdxType:"Iframe"}," "))}f.isMDXComponent=!0;var d;d="MenuJSDoc";var v=["components"],y={title:"Segment",description:"EEA Button Component",hide_table_of_contents:!0},b=void 0,g={unversionedId:"Components/Segment",id:"Components/Segment",title:"Segment",description:"EEA Button Component",source:"@site/docs/5-Components/21-Segment.mdx",sourceDirName:"5-Components",slug:"/Components/Segment",permalink:"/volto-eea-design-system/docs/Components/Segment",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Segment",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Progress",permalink:"/volto-eea-design-system/docs/Components/Progress"},next:{title:"Statistic",permalink:"/volto-eea-design-system/docs/Components/Statistic"}},h=[],w={toc:h};function T(e){var t=e.components,n=(0,o.Z)(e,v);return(0,a.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u.ZP,{usage:(0,a.kt)(s,{mdxType:"Usage"}),showcase:(0,a.kt)(f,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}T.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=n(2263),l=["components"];function i(){return(0,u.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:i};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"frameWrapper"},(0,a.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:i()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return h}});var r=n(7462),o=n(3366),a=n(7294),u=n(3905),l=n(2389),i=n(9443);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),m="tabItem_vU9c";function f(e){var t,n,r,o=e.lazy,u=e.block,l=e.defaultValue,i=e.values,f=e.groupId,d=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=i?i:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,c.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===l?l:null!=(t=null!=l?l:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=s(),w=h.tabGroupChoices,T=h.setTabGroupChoices,k=(0,a.useState)(g),E=k[0],x=k[1],O=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=w[f];null!=P&&P!==E&&y.some((function(e){return e.value===P}))&&x(P)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==E&&(C(t),x(r),null!=f&&T(f,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},d)},y.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":E===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:D,onClick:D},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},y=["components"];function b(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var g={toc:[],getValues:b};function h(e){var t=e.components,n=(0,o.Z)(e,y);return(0,u.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(d,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,u.kt)(v,{value:"usage",mdxType:"TabItem"},n.usage),(0,u.kt)(v,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,u.kt)(v,{value:"api",mdxType:"TabItem"},n.api)))}h.isMDXComponent=!0}}]);