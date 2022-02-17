"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6397],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6622:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return g}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(1198),l=["components"],u={toc:[{value:"Do&#39;s",id:"dos",children:[],level:3},{value:"Don&#39;ts",id:"donts",children:[],level:3},{value:"When to use",id:"when-to-use",children:[],level:3},{value:"When not to use",id:"when-not-to-use",children:[],level:3}]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling."),(0,a.kt)("p",null,"Accordions contain labels with the relevant information. Users can click on the accordion to read additional information. For this reason, accordion labels (collapsed state) should be as descriptive and concise as possible."),(0,a.kt)("h3",{id:"dos"},"Do's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use labels that are representative of the content inside the (initially hidden) container"),(0,a.kt)("li",{parentName:"ul"},"order logically (such as 1st quarter, 2nd quarter, 3rd quarter, 4th quarter)"),(0,a.kt)("li",{parentName:"ul"},"make sure this component is required in order to shorten the page")),(0,a.kt)("h3",{id:"donts"},"Don'ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use unless users will benefit from hidden information"),(0,a.kt)("li",{parentName:"ul"},"don't use actionable items (i.e. forms, accordions, buttons, CTAs, etc.) or pictures in the content container as they will have decreased visibility"),(0,a.kt)("li",{parentName:"ul"},"don't hide important information that should be present at all times"),(0,a.kt)("li",{parentName:"ul"},"don't use long labels, ideally keep it to one line, maximum 2")),(0,a.kt)("h3",{id:"when-to-use"},"When to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when you need to present multiple sections of content in a simple way on one page, without overwhelming the user (especially applicable to mobile)"),(0,a.kt)("li",{parentName:"ul"},"when it\u2019s not critical for every user to read every section of content, adding value"),(0,a.kt)("li",{parentName:"ul"},"when you can make extensive and complex content easier to digest through descriptive labels")),(0,a.kt)("h3",{id:"when-not-to-use"},"When not to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use when pages are short (reading time: under 3 minutes)"),(0,a.kt)("li",{parentName:"ul"},"don't use when information would be better structured horizontally (does not need comparison between sections) - use tabs instead")))}s.isMDXComponent=!0;var c=n(342),p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.ZP,{id:"components-accordion--default&args=variant:styled;fluid:false;styled:false",height:"400",mdxType:"Iframe"}," "))}m.isMDXComponent=!0;var f;f="AccordionJSDoc";var v=["components"],h={title:"Accordion",description:"EEA Button Component",hide_table_of_contents:!0},b=void 0,y={unversionedId:"Components/Accordion",id:"Components/Accordion",title:"Accordion",description:"EEA Button Component",source:"@site/docs/5-Components/0-Accordion.mdx",sourceDirName:"5-Components",slug:"/Components/Accordion",permalink:"/volto-eea-design-system/docs/Components/Accordion",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Accordion",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Site Footer",permalink:"/volto-eea-design-system/docs/Templates/SiteFooter"},next:{title:"Blockquote",permalink:"/volto-eea-design-system/docs/Components/Blockquote"}},g=[],k={toc:g};function w(e){var t=e.components,n=(0,o.Z)(e,v);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{usage:(0,a.kt)(s,{mdxType:"Usage"}),showcase:(0,a.kt)(m,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}w.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(2263),l=["components"];function u(){return(0,i.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:u};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"frameWrapper"},(0,a.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:u()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return g}});var r=n(7462),o=n(3366),a=n(7294),i=n(3905),l=n(2389),u=n(9443);var s=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var t,n,r,o=e.lazy,i=e.block,l=e.defaultValue,u=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=u?u:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===l?l:null!=(t=null!=l?l:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),k=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,a.useState)(y),x=T[0],E=T[1],O=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=k[m];null!=D&&D!==x&&h.some((function(e){return e.value===D}))&&E(D)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==x&&(C(t),E(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:N,onClick:N},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},h=["components"];function b(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var y={toc:[],getValues:b};function g(e){var t=e.components,n=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,i.kt)(v,{value:"usage",mdxType:"TabItem"},n.usage),(0,i.kt)(v,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,i.kt)(v,{value:"api",mdxType:"TabItem"},n.api)))}g.isMDXComponent=!0}}]);