"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3591],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4246:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return g}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(1198),i=["components"],u={toc:[{value:"Layout Grid",id:"layout-grid",children:[{value:"Columns",id:"columns",children:[],level:3},{value:"Gutters",id:"gutters",children:[],level:3},{value:"Don\u2019ts",id:"donts",children:[],level:3},{value:"Breakpoints",id:"breakpoints",children:[],level:3}],level:2}]};function s(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"layout-grid"},"Layout Grid"),(0,o.kt)("p",null,"The responsive layout grid is made up of three elements: columns, gutters, and margins."),(0,o.kt)("h3",{id:"columns"},"Columns"),(0,o.kt)("p",null,"Content is placed in the areas of the screen that contain columns. The number of columns displayed in the grid is determined by the breakpoint range, a range of predetermined screen sizes. A breakpoint can correspond with mobile, tablet, or other screen type."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9717).Z})),(0,o.kt)("br",null),(0,o.kt)("p",null,"On mobile, at a breakpoint of 480px, this layout grid uses 4 columns."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4316).Z})),(0,o.kt)("br",null),(0,o.kt)("p",null,"On tablet, at a breakpoint of 834px, this layout grid uses 8 columns."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1077).Z}),"   "),(0,o.kt)("br",null),"On desktop, at a breakpoint of 1024px, this layout grid uses 12 columns.",(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1359).Z})),(0,o.kt)("h3",{id:"gutters"},"Gutters"),(0,o.kt)("p",null,"A gutter is the space between columns that helps separate content. Gutter widths are fixed values at each breakpoint range. Wider gutters are more appropriate for larger screens, as they create more open space between columns."),(0,o.kt)("br",null),(0,o.kt)("p",null,"On mobile, at a breakpoint of 480px, this layout grid uses 20px gutters.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(4316).Z}),"   "),(0,o.kt)("br",null),(0,o.kt)("p",null,"On tablet, at a breakpoint of 7687px, this layout grid uses 20px gutters.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(1077).Z}),"   "),(0,o.kt)("br",null),(0,o.kt)("p",null,"On desktop, at a breakpoint of 1024px, this layout grid uses 20px gutters.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(1359).Z}),"   "),(0,o.kt)("h3",{id:"donts"},"Don\u2019ts"),(0,o.kt)("p",null,"Do not make gutters too large or the same width as the columns. Oversized gutters will not leave enough room for content and may prevent a layout from appearing unified."),(0,o.kt)("h3",{id:"breakpoints"},"Breakpoints"),(0,o.kt)("p",null,"A breakpoint is the screen size threshold determined by specific layout requirements. At a given breakpoint range, the layout adjusts to suit the screen size and orientation.\n\u0395\u0395\u0391 provides responsive layouts based on 4-column, 8-column, and 12-column grids, available for use across different screens, devices, and orientations.\nEach breakpoint range determines the number of columns, and recommended margins and gutters for each display size."),(0,o.kt)("table",{style:{textAlign:"center"}},(0,o.kt)("thead",{style:{width:"700px"}},(0,o.kt)("th",null),(0,o.kt)("th",null,"Breakpoints"),(0,o.kt)("th",null,"Columns"),(0,o.kt)("th",null,"Gutters"),(0,o.kt)("th",null,"Margins")),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{style:{fontWeight:"bold"}},"Mobile"),(0,o.kt)("td",null,"320-480"),(0,o.kt)("td",null,"4"),(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"30")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{fontWeight:"bold"}},"Tablet"),(0,o.kt)("td",null,"481-768"),(0,o.kt)("td",null,"8"),(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"40")),(0,o.kt)("tr",null,(0,o.kt)("td",{style:{fontWeight:"bold"}},"Desktop"),(0,o.kt)("td",null,"1025 and above"),(0,o.kt)("td",null,"12"),(0,o.kt)("td",null,"20"),(0,o.kt)("td",null,"140")))))}s.isMDXComponent=!0;var c=n(342),p=["components"],d={toc:[{value:"Columns 12",id:"columns-12",children:[],level:2},{value:"Columns 12 With Col",id:"columns-12-with-col",children:[],level:2}]};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"columns-12"},"Columns 12"),(0,o.kt)(c.ZP,{id:"layout-grid-layout-grid--basic-12",mdxType:"Iframe"}," "),(0,o.kt)("h2",{id:"columns-12-with-col"},"Columns 12 With Col"),(0,o.kt)(c.ZP,{id:"layout-grid-layout-grid--grid-examples",height:"700",mdxType:"Iframe"}," "))}m.isMDXComponent=!0;var f;f="AccordionJSDoc";var b=["components"],v={title:"Grid",description:"EEA Button Component",hide_table_of_contents:!0},h=void 0,k={unversionedId:"Templates/Grid",id:"Templates/Grid",title:"Grid",description:"EEA Button Component",source:"@site/docs/4-Templates/1-Grid.mdx",sourceDirName:"4-Templates",slug:"/Templates/Grid",permalink:"/volto-eea-design-system/docs/Templates/Grid",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Grid",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Spacing",permalink:"/volto-eea-design-system/docs/Guidelines/spacing"},next:{title:"Site Header",permalink:"/volto-eea-design-system/docs/Templates/SiteHeader"}},g=[],y={toc:g};function w(e){var t=e.components,n=(0,a.Z)(e,b);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{usage:(0,o.kt)(s,{mdxType:"Usage"}),showcase:(0,o.kt)(m,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}w.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(2263),i=["components"];function u(){return(0,l.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"frameWrapper"},(0,o.kt)("iframe",{style:{height:(n.height?n.height:300)+"px"},src:u()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return g}});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),i=n(2389),u=n(9443);var s=function(){var e=(0,o.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var t,n,r,a=e.lazy,l=e.block,i=e.defaultValue,u=e.values,m=e.groupId,f=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===i?i:null!=(t=null!=i?i:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),y=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,o.useState)(k),x=T[0],O=T[1],E=[],Z=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==x&&v.some((function(e){return e.value===C}))&&O(C)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==x&&(Z(t),O(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},f)},v.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},null!=n?n:t)}))),a?(0,o.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function f(e){var t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}var b=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},v=["components"];function h(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var k={toc:[],getValues:h};function g(e){var t=e.components,n=(0,a.Z)(e,v);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(f,{defaultValue:"usage",values:h(n),mdxType:"Tabs"},(0,l.kt)(b,{value:"usage",mdxType:"TabItem"},n.usage),(0,l.kt)(b,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,l.kt)(b,{value:"api",mdxType:"TabItem"},n.api)))}g.isMDXComponent=!0},1359:function(e,t,n){t.Z=n.p+"assets/images/desktop-mid-grid-cf22e84cd5e2e398b4b0c3572af2f69c.png"},9717:function(e,t,n){t.Z=n.p+"assets/images/grid1-457ba1455e379f92f8f5ac31a3b4fe06.png"},4316:function(e,t,n){t.Z=n.p+"assets/images/mobile-mid-grid-3369be7b492d17f9c74f682146952309.png"},1077:function(e,t,n){t.Z=n.p+"assets/images/tablet-mid-grid-4d2b1819a441a7299ffeb138fff9c84b.png"}}]);