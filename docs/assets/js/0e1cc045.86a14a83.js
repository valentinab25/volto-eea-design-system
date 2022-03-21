"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4115],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9259:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=a(1198),i=["components"],s={toc:[{value:"Static",id:"static",children:[{value:"Styles",id:"styles",children:[],level:4},{value:"Map Objects",id:"map-objects",children:[],level:4},{value:"Colors",id:"colors",children:[],level:4},{value:"Text",id:"text",children:[],level:4}],level:3},{value:"Interactive Maps",id:"interactive-maps",children:[{value:"Pop-ups and markers",id:"pop-ups-and-markers",children:[],level:4}],level:3}]};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"static"},"Static"),(0,o.kt)("p",null,"There are five main design principles in map design. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"legibility "),(0,o.kt)("li",{parentName:"ul"},"visual contrast "),(0,o.kt)("li",{parentName:"ul"},"figure-ground organization "),(0,o.kt)("li",{parentName:"ul"},"hierarchical organization, and  "),(0,o.kt)("li",{parentName:"ul"},"balance ")),(0,o.kt)("p",null,"Together these principles form a system for seeing and understanding the relative importance of the content in the map and on the page.  "),(0,o.kt)("p",null,"What are the qualities of a good map? "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clear idea of what the map is trying to demonstrate "),(0,o.kt)("li",{parentName:"ul"},"easy to interpret legend or key "),(0,o.kt)("li",{parentName:"ul"},"good use of symbols to demonstrate a clear point"),(0,o.kt)("li",{parentName:"ul"},"good sources/metadata "),(0,o.kt)("li",{parentName:"ul"},"clear features not overcrowded")),(0,o.kt)("h4",{id:"styles"},"Styles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"do not use underlined text! This is difficult for low-vision users to read and indicates a possible hyperlink "),(0,o.kt)("li",{parentName:"ul"},"italics should be used as little as possible, for water labels and short labels only "),(0,o.kt)("li",{parentName:"ul"},"bolding of fonts is a good way to call out features, but avoid it for continuous, readable text"),(0,o.kt)("li",{parentName:"ul"},"although ALL CAPS labels stand out, they are harder to read and should be used sparingly")),(0,o.kt)("h4",{id:"map-objects"},"Map Objects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avoid overlapping points or annotations, when possible. Try to place them offset from a line "),(0,o.kt)("li",{parentName:"ul"},"there should be visible whitespace between symbols; touching symbols blend together for users with low vision "),(0,o.kt)("li",{parentName:"ul"},"there should be a 2x size difference in levels of information  ")),(0,o.kt)("h4",{id:"colors"},"Colors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"use a limited color palette."),"\u202fLimited color palette works the best for all UIs, and map UI is not an exception. It\u2019s much easier to create visual harmony with a limited color palette. You should use between 10 to 12 colors for a full-body color palette, depending on the complexity of your map. Choose colors for individuals with visual impairments such as color-blindness (i.e. don\u2019t use red-green color schemes)  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"try to use the same hue for similar features."),"\u202fFor example, features related to transportation (bus stops, railway stations, etc.) should share the same hue. The same hue will help users to decode visual elements without reading text, and this will help you to create a more cohesive UI. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"always consider accessibility."),"\u202fMany people have limited color vision, so you also need to take this into account when selecting colors to ensure that you have a proper\u202fcontrast ratio")),(0,o.kt)("h4",{id:"text"},"Text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"choose fonts that have a variety of styles, such as bold, extra bold, italic, bold italic light, etc to differentiate between different kinds of features on your map  "),(0,o.kt)("li",{parentName:"ul"},"use one version of fonts for the map body and one for the explainer text outside the map")),(0,o.kt)("h3",{id:"interactive-maps"},"Interactive Maps"),(0,o.kt)("p",null,"Interactive maps are high risk, high reward. Highly interactive maps can be too difficult for new users, yet they can also allow users to learn and explore at their own pace. It is always important to test designs on multiple people with varying degrees of technical expertise to see how they interact differently with the layout. Interactive map design should reflect what the cartographer is trying to convey (beauty vs. function) and never sacrifice visual hierarchy or great styling for interactivity. "),(0,o.kt)("p",null,"Tips for designing effective interactive maps:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"simplify the interface  "),(0,o.kt)("li",{parentName:"ul"},"panels should be the minimum possible size so they don\u2019t clutter the space "),(0,o.kt)("li",{parentName:"ul"},"don\u2019t innovate to the point where users don\u2019t know what to do  "),(0,o.kt)("li",{parentName:"ul"},"use panel opacity and margins to help them blend with your basemap and look cohesive  "),(0,o.kt)("li",{parentName:"ul"},"leave space for the maps to be used on mobile devices. This means avoiding permanent panels  ")),(0,o.kt)("h4",{id:"pop-ups-and-markers"},"Pop-ups and markers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keep pop-ups concise "),(0,o.kt)("li",{parentName:"ul"},"only one pop-up on the screen at a time (generally) "),(0,o.kt)("li",{parentName:"ul"},"cluster markers for better readability  "),(0,o.kt)("li",{parentName:"ul"},"use a legend when you have multiple types of markers  "),(0,o.kt)("li",{parentName:"ul"},"remove unnecessary padding and margins from popups "),(0,o.kt)("li",{parentName:"ul"},"use a slight shadow to \u201clift\u201d pop-ups off the map")))}u.isMDXComponent=!0;var p,c=["components"],d={title:"Maps",description:"EEA Map Component",hide_table_of_contents:!0},m=void 0,h={unversionedId:"Components/Visuals/Maps",id:"Components/Visuals/Maps",title:"Maps",description:"EEA Map Component",source:"@site/docs/5-Components/25-Visuals/2-Maps.mdx",sourceDirName:"5-Components/25-Visuals",slug:"/Components/Visuals/Maps",permalink:"/volto-eea-design-system/docs/Components/Visuals/Maps",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Maps",description:"EEA Map Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Charts",permalink:"/volto-eea-design-system/docs/Components/Visuals/Charts"},next:{title:"Utilities",permalink:"/volto-eea-design-system/docs/Utilities/intro"}},f=[],v=(p="Showcase",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),y={toc:f};function b(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.ZP,{usage:(0,o.kt)(u,{mdxType:"Usage"}),showcase:(0,o.kt)(v,{mdxType:"Showcase"}),mdxType:"EEATabs"}))}b.isMDXComponent=!0},1198:function(e,t,a){a.d(t,{ZP:function(){return k}});var n=a(7462),r=a(3366),o=a(7294),l=a(3905),i=a(2389),s=a(9443);var u=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=a(3616),c=a(6010),d="tabItem_vU9c";function m(e){var t,a,n,r=e.lazy,l=e.block,i=e.defaultValue,s=e.values,m=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=s?s:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,p.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===i?i:null!=(t=null!=i?i:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,o.useState)(b),x=N[0],T=N[1],E=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=g[m];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&T(O)}var M=function(e){var t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==x&&(C(t),T(n),null!=m&&w(m,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},h)},v.map((function(e){var t=e.value,a=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:M,onClick:M},null!=a?a:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,i.Z)();return o.createElement(m,(0,n.Z)({key:String(t)},e))}var f=function(e){var t=e.children,a=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},v=["components"];function y(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var b={toc:[],getValues:y};function k(e){var t=e.components,a=(0,r.Z)(e,v);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(h,{defaultValue:"usage",values:y(a),mdxType:"Tabs"},(0,l.kt)(f,{value:"usage",mdxType:"TabItem"},a.usage),(0,l.kt)(f,{value:"showcase",mdxType:"TabItem"},a.showcase),(0,l.kt)(f,{value:"api",mdxType:"TabItem"},a.api)))}k.isMDXComponent=!0}}]);