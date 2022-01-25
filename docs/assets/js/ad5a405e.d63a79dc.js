"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6397],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6622:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return E},frontMatter:function(){return g},metadata:function(){return T},toc:function(){return C}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(1198),l=["components"],u={toc:[{value:"Do&#39;s",id:"dos",children:[],level:2},{value:"Don&#39;ts",id:"donts",children:[],level:2},{value:"When to use",id:"when-to-use",children:[],level:2},{value:"When not to use",id:"when-not-to-use",children:[],level:2}]};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling."),(0,a.kt)("p",null,"Accordions contain labels with the relevant information. Users can click on the accordion to read additional information. For this reason, accordion labels (collapsed state) should be as descriptive and concise as possible."),(0,a.kt)("h2",{id:"dos"},"Do's"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use labels that are representative of the content inside the (initially hidden) container"),(0,a.kt)("li",{parentName:"ul"},"order logically (such as 1st quarter, 2nd quarter, 3rd quarter, 4th quarter)"),(0,a.kt)("li",{parentName:"ul"},"make sure this component is required in order to shorten the page")),(0,a.kt)("h2",{id:"donts"},"Don'ts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use unless users will benefit from hidden information"),(0,a.kt)("li",{parentName:"ul"},"don't use actionable items (i.e. forms, accordions, buttons, CTAs, etc.) or pictures in the content container as they will have decreased visibility"),(0,a.kt)("li",{parentName:"ul"},"don't hide important information that should be present at all times"),(0,a.kt)("li",{parentName:"ul"},"don't use long labels, ideally keep it to one line, maximum 2")),(0,a.kt)("h2",{id:"when-to-use"},"When to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"when you need to present multiple sections of content in a simple way on one page, without overwhelming the user (especially applicable to mobile)"),(0,a.kt)("li",{parentName:"ul"},"when it\u2019s not critical for every user to read every section of content, adding value"),(0,a.kt)("li",{parentName:"ul"},"when you can make extensive and complex content easier to digest through descriptive labels")),(0,a.kt)("h2",{id:"when-not-to-use"},"When not to use"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"don't use when pages are short (reading time: under 3 minutes)"),(0,a.kt)("li",{parentName:"ul"},"don't use when information would be better structured horizontally (does not need comparison between sections) - use tabs instead")))}s.isMDXComponent=!0;var c=n(342),p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c.ZP,{id:"components-accordion--default&args=variant:styled;fluid:false;styled:false",mdxType:"Iframe"}," "))}m.isMDXComponent=!0;var v,f=["components"],h=(v="AccordionJSDoc",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),y={toc:[{value:"API",id:"api",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Automatic",id:"automatic",children:[],level:3},{value:"Manual",id:"manual",children:[],level:3}],level:2}]};function b(e){var t=e.components,n=(0,r.Z)(e,f);return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)(h,{mdxType:"AccordionJSDoc"}),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"There are 2 ways to initialise the component."),(0,a.kt)("h3",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},'data-ecl-auto-init="Accordion"')," attribute to component's markup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="ecl-accordion" data-ecl-accordion data-ecl-auto-init="Accordion">\n  ...\n</div>\n')),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ECL")," library's ",(0,a.kt)("inlineCode",{parentName:"p"},"autoInit()")," (",(0,a.kt)("inlineCode",{parentName:"p"},"ECL.autoInit()"),") when your page is ready or other custom event you want to hook onto."),(0,a.kt)("h3",{id:"manual"},"Manual"),(0,a.kt)("p",null,"Get target element, create an instance and invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"init()"),"."),(0,a.kt)("p",null,"Given you have 1 element with an attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"data-ecl-accordion")," on the page:"))}b.isMDXComponent=!0;var k=["components"],g={title:"Accordion",description:"EEA Button Component",hide_table_of_contents:!0},w=void 0,T={unversionedId:"Components/Accordion",id:"Components/Accordion",title:"Accordion",description:"EEA Button Component",source:"@site/docs/5-Components/0-Accordion.mdx",sourceDirName:"5-Components",slug:"/Components/Accordion",permalink:"/volto-eea-design-system/docs/Components/Accordion",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Accordion",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Page Footer",permalink:"/volto-eea-design-system/docs/Templates/PageFooter"},next:{title:"Blockquote",permalink:"/volto-eea-design-system/docs/Components/Blockquote"}},C=[],x={toc:C};function E(e){var t=e.components,n=(0,r.Z)(e,k);return(0,a.kt)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{usage:(0,a.kt)(s,{mdxType:"Usage"}),showcase:(0,a.kt)(m,{mdxType:"Showcase"}),api:(0,a.kt)(b,{mdxType:"Api"}),mdxType:"EEATabs"}))}E.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(2263),l=["components"];function u(){return(0,i.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"frameWrapper"},(0,a.kt)("iframe",{src:u()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(7462),r=n(3366),a=n(7294),i=n(3905),l=n(2389),u=n(9443);var s=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var t,n,o,r=e.lazy,i=e.block,l=e.defaultValue,u=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=u?u:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===l?l:null!=(t=null!=l?l:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),g=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,a.useState)(b),C=T[0],x=T[1],E=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=g[m];null!=D&&D!==C&&h.some((function(e){return e.value===D}))&&x(D)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),o=h[n].value;o!==C&&(N(t),x(o),null!=m&&w(m,o))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=E.indexOf(e.currentTarget)+1;n=E[o]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},v)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:O,onClick:O},null!=n?n:t)}))),r?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function v(e){var t=(0,l.Z)();return a.createElement(m,(0,o.Z)({key:String(t)},e))}var f=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)},h=["components"];function y(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var b={toc:[],getValues:y};function k(e){var t=e.components,n=(0,r.Z)(e,h);return(0,i.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(v,{defaultValue:"usage",values:y(n),mdxType:"Tabs"},(0,i.kt)(f,{value:"usage",mdxType:"TabItem"},n.usage),(0,i.kt)(f,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,i.kt)(f,{value:"api",mdxType:"TabItem"},n.api)))}k.isMDXComponent=!0}}]);