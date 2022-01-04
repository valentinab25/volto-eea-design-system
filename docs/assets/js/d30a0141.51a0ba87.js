"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[811],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,u(u({ref:t},c),{},{components:n})):o.createElement(h,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<r;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1438:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),u=n(1198),i=["components"],l={toc:[{value:"Do&#39;s",id:"dos",children:[],level:2},{value:"Don&#39;ts",id:"donts",children:[],level:2},{value:"When to use",id:"when-to-use",children:[],level:2},{value:"When not to use",id:"when-not-to-use",children:[],level:2},{value:"Do&#39;s",id:"dos-1",children:[],level:2},{value:"Don&#39;ts",id:"donts-1",children:[],level:2},{value:"When to use",id:"when-to-use-1",children:[],level:2},{value:"When not to use",id:"when-not-to-use-1",children:[],level:2},{value:"Do&#39;s",id:"dos-2",children:[],level:2},{value:"Don&#39;ts",id:"donts-2",children:[],level:2},{value:"When to use",id:"when-to-use-2",children:[],level:2},{value:"When not to use",id:"when-not-to-use-2",children:[],level:2},{value:"Do&#39;s",id:"dos-3",children:[],level:2},{value:"Don&#39;ts",id:"donts-3",children:[],level:2},{value:"When to use",id:"when-to-use-3",children:[],level:2},{value:"When not to use",id:"when-not-to-use-3",children:[],level:2}]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Buttons trigger an action in a web page. There are 4 variants of the button component with different levels of importance and usages."),(0,r.kt)("h1",{id:"primary-button"},"Primary Button"),(0,r.kt)("p",null,"Primary button is designed for users to perform the most important task in a web page. The visual design is more distinguishable from the secondary button."),(0,r.kt)("h2",{id:"dos"},"Do's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"make sure the button\u2018s microcopy represents the action such as \u201cSubmit\u201c or \u201cRegister\u201c"),(0,r.kt)("li",{parentName:"ul"},"use an icon only when it is necessary")),(0,r.kt)("h2",{id:"donts"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"don't assign an action that should be assigned for a CTA or other variations of buttons"),(0,r.kt)("li",{parentName:"ul"},"don't use an icon when it is not relevant or necessary to the action")),(0,r.kt)("h2",{id:"when-to-use"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"as a form button such as submit, or save"),(0,r.kt)("li",{parentName:"ul"},"perform a new task"),(0,r.kt)("li",{parentName:"ul"},"move to the next step"),(0,r.kt)("li",{parentName:"ul"},"as a primary action")),(0,r.kt)("h2",{id:"when-not-to-use"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use for navigation"),(0,r.kt)("li",{parentName:"ul"},"do not use for downloads"),(0,r.kt)("li",{parentName:"ul"},"do not use when the primary action is negative - use secondary button"),(0,r.kt)("li",{parentName:"ul"},"do not use when the action can't be undone, such as delete")),(0,r.kt)("h1",{id:"secondary-button"},"Secondary Button"),(0,r.kt)("p",null,'It is used to represent the secondary action in a web page. It is paired with a primary button. The secondary button serves as the negative action of the pair, such as \u201cDelete,\u201d "Cancel" or \u201cRemove\u201d.'),(0,r.kt)("h2",{id:"dos-1"},"Do's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'ensure the button functions a negative action, such as "Cancel", "Delete," "Remove" or "Replace" as the secondary action next to the primary button'),(0,r.kt)("li",{parentName:"ul"},"follow the order of the button group; right to the primary button"),(0,r.kt)("li",{parentName:"ul"},"use an icon only when it is necessary")),(0,r.kt)("h2",{id:"donts-1"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use for primary positive actions - Submit, Send, Accept, Apply"),(0,r.kt)("li",{parentName:"ul"},"do not use on its own"),(0,r.kt)("li",{parentName:"ul"},"don't use an icon when it is not relevant or necessary to the action")),(0,r.kt)("h2",{id:"when-to-use-1"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to indicate a negative action, to pair it with a primary button"),(0,r.kt)("li",{parentName:"ul"},"as a secondary action next to the primary button - such as Cancel, Reject"),(0,r.kt)("li",{parentName:"ul"},"next to the primary button if it is a yes and no scenario")),(0,r.kt)("h2",{id:"when-not-to-use-1"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use for navigation"),(0,r.kt)("li",{parentName:"ul"},"do not place it to the left side of the button group")),(0,r.kt)("h1",{id:"text-button"},"Text Button"),(0,r.kt)("p",null,"Text button is used in a web page with less prominent action. It can be grouped with other buttons or placed independently."),(0,r.kt)("h2",{id:"dos-2"},"Do's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'make sure the button represents a less important action, such as "Show more", "Expand" or "See details"')),(0,r.kt)("h2",{id:"donts-2"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use it when the action has high importance in the hierarchy")),(0,r.kt)("h2",{id:"when-to-use-2"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use with low emphasis in a button group"),(0,r.kt)("li",{parentName:"ul"},"use on pages/cards when the main focus should be the content and not the button"),(0,r.kt)("li",{parentName:"ul"},"when there is a single action intended")),(0,r.kt)("h2",{id:"when-not-to-use-2"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use for navigation purpose")),(0,r.kt)("h1",{id:"call-to-action-cta-button"},"Call to action (CTA) button"),(0,r.kt)("p",null,"Call to action button (CTA) captures users' attention in a web page. To perform an action or to visit another page for more information. The visual style has bright background colour and a high contrast label to indicate the importance of the action."),(0,r.kt)("h2",{id:"dos-3"},"Do's"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ensure the button directs to a pre-defined goal, such as 'Search by priority'")),(0,r.kt)("h2",{id:"donts-3"},"Don'ts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use more than once per page (except where the main action or user goal is repeated on the same page)")),(0,r.kt)("h2",{id:"when-to-use-3"},"When to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for promoting a message, or highly important content you want to draw users' attention")),(0,r.kt)("h2",{id:"when-not-to-use-3"},"When not to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do not use for site navigation purpose")))}s.isMDXComponent=!0;var c=n(342),p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"default-button"},"Default Button"),(0,r.kt)(c.ZP,{id:"components-button--default&args=",mdxType:"Iframe"}," "),(0,r.kt)("h1",{id:"primary-button"},"Primary Button"),(0,r.kt)(c.ZP,{id:"components-button--playground&args=label:Primary;variant:primary",mdxType:"Iframe"}," "),(0,r.kt)("h1",{id:"secondary-button"},"Secondary Button"),(0,r.kt)(c.ZP,{id:"components-button--playground&args=label:Secondary;variant:secondary",mdxType:"Iframe"}," "))}m.isMDXComponent=!0;var h=["components"],v={title:"Buttons",description:"EEA Button Component",hide_table_of_contents:!0},f=void 0,b={unversionedId:"Components/Buttons",id:"Components/Buttons",title:"Buttons",description:"EEA Button Component",source:"@site/docs/5-Components/2-Buttons.md",sourceDirName:"5-Components",slug:"/Components/Buttons",permalink:"/eea-design-system/docs/Components/Buttons",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Buttons",description:"EEA Button Component",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Breadcrumb",permalink:"/eea-design-system/docs/Components/Breadcrumb"},next:{title:"Card",permalink:"/eea-design-system/docs/Components/Cards"}},y=[],k={toc:y};function g(e){var t=e.components,n=(0,a.Z)(e,h);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{usage:(0,r.kt)(s,{mdxType:"ButtonUsage"}),showcase:(0,r.kt)(m,{mdxType:"ButtonShowcase"}),mdxType:"Tabs"}))}g.isMDXComponent=!0},342:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),u=n(2263),i=["components"];function l(){return(0,u.Z)().siteConfig.customFields.storyBookUrl}var s={toc:[],getUrl:l};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"frameWrapper"},(0,r.kt)("iframe",{src:l()+"/iframe.html?id="+n.id,title:"description"})))}c.isMDXComponent=!0},1198:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(7462),a=n(3366),r=n(7294),u=n(3905),i=n(2389),l=n(9443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),d="tabItem_vU9c";function m(e){var t,n,o,a=e.lazy,u=e.block,i=e.defaultValue,l=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=l?l:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,c.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===i?i:null!=(t=null!=i?i:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),g=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,r.useState)(y),N=T[0],x=T[1],D=[],C=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&x(E)}var O=function(e){var t=e.currentTarget,n=D.indexOf(t),o=f[n].value;o!==N&&(C(t),x(o),null!=m&&w(m,o))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=D.indexOf(e.currentTarget)+1;n=D[o]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":N===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:P,onFocus:O,onClick:O},null!=n?n:t)}))),a?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,i.Z)();return r.createElement(m,(0,o.Z)({key:String(t)},e))}var v=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)},f=["components"];function b(e){var t=[{label:"Usage",value:"usage"},{label:"Showcase",value:"showcase"}];return e.api&&t.push({label:"API",value:"api"}),e.playground&&t.push({label:"Playground",value:"playground"}),t}var y={toc:[],getValues:b};function k(e){var t=e.components,n=(0,a.Z)(e,f);return(0,u.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)(h,{defaultValue:"usage",values:b(n),mdxType:"Tabs"},(0,u.kt)(v,{value:"usage",mdxType:"TabItem"},n.usage),(0,u.kt)(v,{value:"showcase",mdxType:"TabItem"},n.showcase),(0,u.kt)(v,{value:"api",mdxType:"TabItem"},n.api)))}k.isMDXComponent=!0}}]);