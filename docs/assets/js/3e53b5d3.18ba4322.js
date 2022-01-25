"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2718],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3539:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return w},default:function(){return E},frontMatter:function(){return g},metadata:function(){return T},toc:function(){return C}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(1198),u=["components"],i={toc:[{value:"Do&#39;s",id:"dos",children:[],level:2},{value:"Don&#39;ts",id:"donts",children:[],level:2},{value:"When to use",id:"when-to-use",children:[],level:2},{value:"When not to use",id:"when-not-to-use",children:[],level:2}]};function s(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tables are used to structure complex data in an organised way that is more user friendly and discoverable."),(0,o.kt)("h2",{id:"dos"},"Do's"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reduce the table width to fit the content"),(0,o.kt)("li",{parentName:"ul"},"Align content left to right within cells"),(0,o.kt)("li",{parentName:"ul"},"Use a dash ( - ) in null data cells"),(0,o.kt)("li",{parentName:"ul"},"Adjusts the styling to render a small/large table")),(0,o.kt)("h2",{id:"donts"},"Don'ts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don't spell out numbers"),(0,o.kt)("li",{parentName:"ul"},"Don't use colour alone to convey information")),(0,o.kt)("h2",{id:"when-to-use"},"When to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use when you want to show structured information, or static data"),(0,o.kt)("li",{parentName:"ul"},"Use when you want to help users to compare information")),(0,o.kt)("h2",{id:"when-not-to-use"},"When not to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you don't have any relationship among content you want to present")))}s.isMDXComponent=!0;var c=n(342),p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.ZP,{id:"components-table--default",mdxType:"Iframe"}," "))}m.isMDXComponent=!0;var v,f=["components"],b=(v="TableJSDoc",function(e){return console.warn("Component "+v+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),h={toc:[{value:"API",id:"api",children:[],level:2},{value:"Setup",id:"setup",children:[{value:"Automatic",id:"automatic",children:[],level:3},{value:"Manual",id:"manual",children:[],level:3}],level:2}]};function y(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)(b,{mdxType:"TableJSDoc"}),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"data-ecl-table-sort-toggle")," attribute on table headings for which you want to activate sorting."),(0,o.kt)("p",null,"There are 2 ways to initialise the component for sort table."),(0,o.kt)("h3",{id:"automatic"},"Automatic"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},'data-ecl-auto-init="Table"')," attribute to component's markup:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<table data-ecl-auto-init="Table" class="ecl-table">\n  ...\n</table>\n')),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ECL")," library's ",(0,o.kt)("inlineCode",{parentName:"p"},"autoInit()")," (",(0,o.kt)("inlineCode",{parentName:"p"},"ECL.autoInit()"),") when your page is ready or other custom event you want to hook onto."),(0,o.kt)("h3",{id:"manual"},"Manual"),(0,o.kt)("p",null,"Get target element, create an instance and invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"init()"),"."),(0,o.kt)("p",null,"Given you have 1 element with an attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"data-ecl-table")," on the page:"))}y.isMDXComponent=!0;var k=["components"],g={title:"Table",description:"EEA Button Component",hide_table_of_contents:!0},w=void 0,T={unversionedId:"Components/Table",id:"Components/Table",title:"Table",description:"EEA Button Component",source:"@site/docs/5-Components/23-Table.mdx",sourceDirName:"5-Components",slug:"/Components/Table",permalink:"/volto-eea-design-system/docs/Components/Table",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"Table",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Tab",permalink:"/volto-eea-design-system/docs/Components/Tab"},next:{title:"Resources",permalink:"/volto-eea-design-system/docs/Resources/intro"}},C=[],x={toc:C};function E(e){var t=e.components,n=(0,r.Z)(e,k);return(0,o.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{usage:(0,o.kt)(s,{mdxType:"Usage"}),showcase:(0,o.kt)(m,{mdxType:"Showcase"}),api:(0,o.kt)(y,{mdxType:"Api"}),mdxType:"EEATabs"}))}E.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(2263),u=["components"];function i(){return(0,l.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:i};function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"frameWrapper"},(0,o.kt)("iframe",{src:i()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return k}});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),u=n(2389),i=n(9443);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var t,n,a,r=e.lazy,l=e.block,u=e.defaultValue,i=e.values,m=e.groupId,v=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=i?i:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),g=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,o.useState)(y),C=T[0],x=T[1],E=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=g[m];null!=N&&N!==C&&b.some((function(e){return e.value===N}))&&x(N)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==C&&(D(t),x(a),null!=m&&w(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},v)},b.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":C===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function v(e){var t=(0,u.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}var f=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},b=["components"];function h(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var y={toc:[],getValues:h};function k(e){var t=e.components,n=(0,r.Z)(e,b);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(v,{defaultValue:"usage",values:h(n),mdxType:"Tabs"},(0,l.kt)(f,{value:"usage",mdxType:"TabItem"},n.usage),(0,l.kt)(f,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,l.kt)(f,{value:"api",mdxType:"TabItem"},n.api)))}k.isMDXComponent=!0}}]);