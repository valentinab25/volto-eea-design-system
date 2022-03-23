"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8995],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(f,u(u({ref:t},s),{},{components:n})):o.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var p=2;p<a;p++)u[p]=n[p];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1653:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return g}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),u=n(1198),l=["components"],i={toc:[{value:"Do\u2019s",id:"dos",children:[],level:3},{value:"Don\u2019ts",id:"donts",children:[],level:3}]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A popup (also known as an overlay) is a window or dialog that appears on top of the page content.\nA popup can be classified according to two dimensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"whether the user can interact with the rest of the page, and it is called 'Modal' when the content on the page is disabled until the user explicitly interacts with the overlay or 'Nonmodal' when users can still interact with the background content (for example, by selecting links or tapping buttons) while the overlay remains visible"),(0,a.kt)("li",{parentName:"ul"},"whether the background is dimmed the popup is called a 'Lightbox'")),(0,a.kt)("h3",{id:"dos"},"Do\u2019s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"present the content in the popup when it\u2019s contextually relevant to the user"),(0,a.kt)("li",{parentName:"ul"},"if you must present critical information (e.g., important warnings to prevent or correct errors) in a popup, be sure to show only one at a time")),(0,a.kt)("h3",{id:"donts"},"Don\u2019ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"do not show a popup before the main page content loads"),(0,a.kt)("li",{parentName:"ul"},"do not display a popup right after the user logs in"),(0,a.kt)("li",{parentName:"ul"},"you should not ask for feedback before people have done anything meaningful"),(0,a.kt)("li",{parentName:"ul"},"do not show multiple popups one after another")))}p.isMDXComponent=!0;var s=n(342),c=["components"],m={toc:[{value:"Button Popup",id:"button-popup",children:[],level:2},{value:"Image Popup",id:"image-popup",children:[],level:2}]};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"button-popup"},"Button Popup"),(0,a.kt)(s.ZP,{id:"components-popup--button-popup",height:"400",mdxType:"Iframe"}," "),(0,a.kt)("h2",{id:"image-popup"},"Image Popup"),(0,a.kt)(s.ZP,{id:"components-popup--image-popup",height:"400",mdxType:"Iframe"}," "))}d.isMDXComponent=!0;var f;f="MenuJSDoc";var v=["components"],h={title:"Popup",description:"EEA Button Component",hide_table_of_contents:!0},b=void 0,y={unversionedId:"Components/Popup",id:"Components/Popup",title:"Popup",description:"EEA Button Component",source:"@site/docs/5-Components/19-Popup.mdx",sourceDirName:"5-Components",slug:"/Components/Popup",permalink:"/volto-eea-design-system/docs/Components/Popup",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Popup",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Pagination",permalink:"/volto-eea-design-system/docs/Components/Pagination"},next:{title:"Progress",permalink:"/volto-eea-design-system/docs/Components/Progress"}},g=[],k={toc:g};function w(e){var t=e.components,n=(0,r.Z)(e,v);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u.ZP,{usage:(0,a.kt)(p,{mdxType:"Usage"}),showcase:(0,a.kt)(d,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}w.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),u=n(2263),l=["components"];function i(){return(0,u.Z)().siteConfig.customFields.storyBookUrl}var p={toc:[],getUrl:i};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"frameWrapper"},(0,a.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:i()+"/iframe.html?id="+n.id,title:"description"})))}s.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return g}});var o=n(7462),r=n(3366),a=n(7294),u=n(3905),l=n(2389),i=n(9443);var p=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),c=n(6010),m="tabItem_vU9c";function d(e){var t,n,o,r=e.lazy,u=e.block,l=e.defaultValue,i=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=i?i:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===l?l:null!=(t=null!=l?l:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=p(),k=g.tabGroupChoices,w=g.setTabGroupChoices,P=(0,a.useState)(y),T=P[0],x=P[1],E=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=k[d];null!=C&&C!==T&&h.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),o=h[n].value;o!==T&&(O(t),x(o),null!=d&&w(d,o))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=E.indexOf(e.currentTarget)+1;n=E[o]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,c.Z)("tabs__item",m,{"tabs__item--active":T===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:N,onFocus:D,onClick:D},null!=n?n:t)}))),r?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function f(e){var t=(0,l.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)},h=["components"];function b(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var y={toc:[],getValues:b};function g(e){var t=e.components,n=(0,r.Z)(e,h);return(0,u.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(f,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,u.kt)(v,{value:"usage",mdxType:"TabItem"},n.usage),(0,u.kt)(v,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,u.kt)(v,{value:"api",mdxType:"TabItem"},n.api)))}g.isMDXComponent=!0}}]);