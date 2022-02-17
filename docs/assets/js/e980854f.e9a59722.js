"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Developer Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",hide_table_of_contents:!1},l="Developer Guidelines",c={unversionedId:"Resources/developer-guidelines",id:"Resources/developer-guidelines",title:"Developer Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",source:"@site/docs/8-Resources/developer-guidelines.md",sourceDirName:"8-Resources",slug:"/Resources/developer-guidelines",permalink:"/volto-eea-design-system/docs/Resources/developer-guidelines",tags:[],version:"current",frontMatter:{title:"Developer Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"Utilities",permalink:"/volto-eea-design-system/docs/Utilities/intro"},next:{title:"Theming Guidelines",permalink:"/volto-eea-design-system/docs/Resources/theming-guidelines"}},p=[{value:"React components",id:"react-components",children:[{value:"Basic Rules",id:"basic-rules",children:[],level:3},{value:"Naming",id:"naming",children:[],level:3},{value:"Other",id:"other",children:[],level:3}],level:2},{value:"Storybook",id:"storybook",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-guidelines"},"Developer Guidelines"),(0,a.kt)("p",null,"In drafting the EEA Design System Developer's Guidelines, we have the following\nqualities as desirable aspects for the code we produce:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"maintainability"),". As a long lived software library, intended to be reused\nacross many EEA websites, the code should promote maintainability as one\nprimary aspect. This implies ",(0,a.kt)("strong",{parentName:"p"},"clean"),", ",(0,a.kt)("strong",{parentName:"p"},"simple"),", ",(0,a.kt)("strong",{parentName:"p"},"consistent")," with the\nunderlying Semantic-UI CSS library that we use and the rest of frameworks\nwhere that will integrate the EEA Design Systems (Volto, in particular).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"flexibility"),". A fine balance needs to be maintained between too many\nconfiguration options and not enough flexibility which prevents components\nfrom being reused. We aim to make components flexible, as to promote their\nreusability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"framework independent"),". To avoid complications, the EEA Design System CSS\nand React components should be developed independently of their final\nintegration system. The aim is to simplify reimplementation or porting to\nother systems.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"consistent with Semantic-UI ecosystem"),". By following similar development\npatterns and conventions as the semantic-ui-less and the semantic-ui-react\nlibraries use, we ensure that we promote an intuitive approach to development\nand maintenance for the developers experienced with EEA systems.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"prevent technical debt"),". Use best-practices, avoid hard coded and\nspaghetti code. Limit exposure to other third-party dependencies.\nRefactoring, if needed, should be prioritized as to avoid duplication of\nwork."))),(0,a.kt)("p",null,"Developers working on the EEA Design System should strive to follow the\nfollowing practical guidelines."),(0,a.kt)("h2",{id:"react-components"},"React components"),(0,a.kt)("h3",{id:"basic-rules"},"Basic Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One React component per file. Use JSX syntax."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/plone/volto/blob/master/.eslintrc"},"Volto's eslint\nconfiguration")," for\nlinting and Prettier integration"),(0,a.kt)("li",{parentName:"ul"},"Use best practice naming conventions, follow the closed library style\n(semantic-ui-less, semantic-ui-react)."),(0,a.kt)("li",{parentName:"ul"},"Configure editor to use Unix line endings (a must!).")),(0,a.kt)("h3",{id:"naming"},"Naming"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use .jsx extension for React components"),(0,a.kt)("li",{parentName:"ul"},"Filename: Use PascalCase for filenames. E.g., ItemCard.jsx. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Footer/theme-sites.js"},"Bad example")),(0,a.kt)("li",{parentName:"ul"},"Variable naming: Use PascalCase for React components and camelCase for their\ninstances."),(0,a.kt)("li",{parentName:"ul"},"Component Naming: Use the filename as the component name. For example,\nReservationCard.jsx should have a reference name of ReservationCard. However,\nfor root components of a directory, use index.jsx as the filename and use the\ndirectory name as the component name."),(0,a.kt)("li",{parentName:"ul"},"Use camelCase for prop names, or PascalCase if the prop value is a React component.")),(0,a.kt)("h3",{id:"other"},"Other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make components generic and flexible. Don't hardcode values, make them props."),(0,a.kt)("li",{parentName:"ul"},"Avoid using inline styles. Inline styles can be used in special cases in case\nthe style is derived from properties, for example setting background images\nor visibility of elements."),(0,a.kt)("li",{parentName:"ul"},"Don't place components inside ",(0,a.kt)("inlineCode",{parentName:"li"},"src/customizations"),". That's a special Volto\nlocation. Components should be worked on in ",(0,a.kt)("inlineCode",{parentName:"li"},"src/components"),". Only components\nthat override builtin Volto components need to be placed in\nsrc/customizations. EDW will do that when we make the integration with Volto."),(0,a.kt)("li",{parentName:"ul"},"Don't use long relative paths for imports. This rule also applies to .stories\nfiles. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Logo/Logo.jsx#L13"},"Bad example"),".\nUse imports relative to the package name, ex:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import someImage from '@eeacms/volto-eea-design-system/../theme/assets/someFile.png';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't namespace component names. Just use their simple functional name.\nAccordionEEA becomes Accordion. In our code, if we have conflicting imports,\nwe can do aliasing ",(0,a.kt)("inlineCode",{parentName:"li"},"import { Accordion as AccordionEEA } from '...'"),".\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Accordion/Accordion.js#L4"},"Bad example")),(0,a.kt)("li",{parentName:"ul"},"Use whitespace to separate and group imports from other code (for example\ncomponent declarations). ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Comment/Comment.js#L3-L4"},"Bad example")),(0,a.kt)("li",{parentName:"ul"},"Don't work on components integrated with Volto. Make components basic and\nflexible so that they are ready to be integrated with Volto. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eea/volto-eea-design-system/blob/40f78e362ca607ef3893fff3d03c8ed1b4447c11/src/customizations/components/theme/Navigation/Navigation.jsx"},"Bad example")),(0,a.kt)("li",{parentName:"ul"},"Subcomponents. Large composite components (for example the Footer) should be\nabstracted and split into multiple\n",(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/#sub-components"},"subcomponents"),". See the\nSemanticUI Card or Modal as example. The Footer could be implemented as\n",(0,a.kt)("inlineCode",{parentName:"li"},"Footer")," as wrapper component, ",(0,a.kt)("inlineCode",{parentName:"li"},"Footer.Section")," etc.")),(0,a.kt)("h2",{id:"storybook"},"Storybook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Place stories next to components"),(0,a.kt)("li",{parentName:"ul"},"Aim for realistic demo aspects, For example, a mix\nof short and long text. To properly understand the card component, we need to\nknow if its height is fixed, what happens when placed next to another\ncomponent, what the spacing between multiple cards are, etc."),(0,a.kt)("li",{parentName:"ul"},"Variations should be provided as separate stories."),(0,a.kt)("li",{parentName:"ul"},"Aim for a comprehensive but realistic set of control options. While we treat\nSemantic-UI as the basic building block, the EEA Design System should provide\nguidelines as to what combinations of props and variations are allowed,\nto ensure a consistent look and feel. One place to document these constraints\nis in the control options we have in Storybook.")))}d.isMDXComponent=!0}}]);