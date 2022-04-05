"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4387],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5430:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),s=["components"],r={title:"Theming Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",hide_table_of_contents:!1},o=void 0,p={unversionedId:"Resources/theming-guidelines",id:"Resources/theming-guidelines",title:"Theming Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",source:"@site/docs/8-Resources/theming-guidelines.md",sourceDirName:"8-Resources",slug:"/Resources/theming-guidelines",permalink:"/volto-eea-design-system/docs/Resources/theming-guidelines",tags:[],version:"current",frontMatter:{title:"Theming Guidelines",description:"Several rules and guidelines for developers of the EEA Design System",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"Developer Guidelines",permalink:"/volto-eea-design-system/docs/Resources/developer-guidelines"}},m=[{value:"Theming best practices",id:"theming-best-practices",children:[{value:"Style directly the SUI components without introducing new markup or classes",id:"style-directly-the-sui-components-without-introducing-new-markup-or-classes",children:[],level:3},{value:"Use variables everywhere it is possible:",id:"use-variables-everywhere-it-is-possible",children:[],level:3},{value:"Remove or customize overrides",id:"remove-or-customize-overrides",children:[],level:3},{value:"Ensure that text is a minimum of 16px",id:"ensure-that-text-is-a-minimum-of-16px",children:[],level:3},{value:"Consider using container visibility classes for hiding elements",id:"consider-using-container-visibility-classes-for-hiding-elements",children:[],level:3},{value:"Don&#39;t add HTML tags to the css specificity selector",id:"dont-add-html-tags-to-the-css-specificity-selector",children:[],level:3},{value:"Add custom classes after the semantic ui classes",id:"add-custom-classes-after-the-semantic-ui-classes",children:[],level:3},{value:"Use Semantic UI naming style",id:"use-semantic-ui-naming-style",children:[],level:3},{value:"Keep important rules to a minimum and make sure they are well documented",id:"keep-important-rules-to-a-minimum-and-make-sure-they-are-well-documented",children:[],level:3},{value:"Use relative units in general",id:"use-relative-units-in-general",children:[],level:3},{value:"Think globally, act locally",id:"think-globally-act-locally",children:[{value:"Semantic UI global setting example",id:"semantic-ui-global-setting-example",children:[],level:4}],level:3},{value:"Check components design when having odd numbers or images",id:"check-components-design-when-having-odd-numbers-or-images",children:[],level:3},{value:"Code formatting",id:"code-formatting",children:[],level:3}],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"theming-best-practices"},"Theming best practices"),(0,l.kt)("h3",{id:"style-directly-the-sui-components-without-introducing-new-markup-or-classes"},"Style directly the SUI components without introducing new markup or classes"),(0,l.kt)("p",null,"Here is why we shouldn't introduce new markup to SUI components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Here is the generic markup defined by React Semantic UI documentation site\n",(0,l.kt)("a",{parentName:"p",href:"https://react.semantic-ui.com/modules/accordion/#types-standard"},"https://react.semantic-ui.com/modules/accordion/#types-standard"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Here is this component used within a package made by EEA:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eea/volto-accordion-block/blob/master/src/components/manage/Blocks/Accordion/View.jsx#L50"},"https://github.com/eea/volto-accordion-block/blob/master/src/components/manage/Blocks/Accordion/View.jsx#L50")),(0,l.kt)("p",{parentName:"li"},"  When the theme is added, we expect for the normal ",(0,l.kt)("inlineCode",{parentName:"p"},"Accordion")," component to look like it does now on the storybook\nwithout any modification to the component in the individual packages."))),(0,l.kt)("p",null,"Therefore, when theming the stock components do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Remove any extra html tag elements and stick to the normal component markup"),(0,l.kt)("li",{parentName:"ul"},"Remove any extra ",(0,l.kt)("inlineCode",{parentName:"li"},"eea classes"),", style the component class directly unless we have a new ",(0,l.kt)("inlineCode",{parentName:"li"},"eea variant")),(0,l.kt)("li",{parentName:"ul"},"Use the variables to modify the design of the component, use overrides only if styles are missing altogether, or\nthey are hard-coded"),(0,l.kt)("li",{parentName:"ul"},"If you add new styles, and they are presentational follow the convention of the semanticUI variables and name\nthem likewise")),(0,l.kt)("p",null,"Ex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"//if you have\n.styled.active.child {\n  padding: 0;\n}\n// then add the value with a variable\n@styledActiveChildPadding: 1rem;\n// and use it\n.styled.active.child {\n  padding: @styledActiveChildPadding;\n}\n")),(0,l.kt)("h3",{id:"use-variables-everywhere-it-is-possible"},"Use variables everywhere it is possible:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Make use of already added styles and override ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," instead of adding ",(0,l.kt)("inlineCode",{parentName:"p"},"overrides"),":"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/elements/button.less"},"https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/elements/button.less"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.variables"},"https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.variables"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Introduce new variables if needed for ",(0,l.kt)("inlineCode",{parentName:"p"},"presentational styles"),"; some examples include:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"border"),(0,l.kt)("li",{parentName:"ul"},"padding"),(0,l.kt)("li",{parentName:"ul"},"margin"),(0,l.kt)("li",{parentName:"ul"},"color"),(0,l.kt)("li",{parentName:"ul"},"background"),(0,l.kt)("li",{parentName:"ul"},"box-shadow"),(0,l.kt)("li",{parentName:"ul"},"font-size"),(0,l.kt)("li",{parentName:"ul"},"width"),(0,l.kt)("li",{parentName:"ul"},"height"),(0,l.kt)("li",{parentName:"ul"},"display"),(0,l.kt)("li",{parentName:"ul"},"position"),(0,l.kt)("li",{parentName:"ul"},"alignment"),(0,l.kt)("li",{parentName:"ul"},"text-decoration"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use variables also for link and buttons ",(0,l.kt)("inlineCode",{parentName:"p"},"states"),", ex:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"focus"),(0,l.kt)("li",{parentName:"ul"},"hover"),(0,l.kt)("li",{parentName:"ul"},"active")),(0,l.kt)("p",{parentName:"li"},"We will provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"primary")," button blue, but perhaps\nanother EEA website will have ",(0,l.kt)("inlineCode",{parentName:"p"},"green")," with a border\nas the ",(0,l.kt)("inlineCode",{parentName:"p"},"primary")," style."),(0,l.kt)("p",{parentName:"li"},"Having a design system that allows this level of customization through variables ensures that the design is flexible without adding any extra css to the final bundle.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If there aren't any, and you need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"media queries"),", define ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," for media queries, ex:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// button.variables\n@buttonTabletBreakpoint: @tabletBreakpoint;\n")),(0,l.kt)("p",{parentName:"li"},"This way, another design might choose to use a different breakpoint from the usual breakpoints.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If new variables are introduced, opt to use functionality naming instead of using color naming, ex:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// right\n.ui .primary .button {}\n// wrong\n.blue .button {}\n")))),(0,l.kt)("h3",{id:"remove-or-customize-overrides"},"Remove or customize overrides"),(0,l.kt)("p",null,"Delete overrides that modified variables, introduce overrides only when the style is hard-coded:"),(0,l.kt)("p",null,"  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.overrides"},"https://github.com/eea/volto-eea-design-system/blob/develop-itml/theme/themes/eea/elements/button.overrides")),(0,l.kt)("h3",{id:"ensure-that-text-is-a-minimum-of-16px"},"Ensure that text is a minimum of 16px"),(0,l.kt)("p",null,"Except for ",(0,l.kt)("inlineCode",{parentName:"p"},".small")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".tiny")," classes that make text small, we need to ensure that it is legible any time we have text by making it ",(0,l.kt)("inlineCode",{parentName:"p"},"16px or more"),"."),(0,l.kt)("h3",{id:"consider-using-container-visibility-classes-for-hiding-elements"},"Consider using container visibility classes for hiding elements"),(0,l.kt)("p",null,"If we have a custom component that we want visible only at specific browser widths, consider using the ",(0,l.kt)("inlineCode",{parentName:"p"},"utility classes")," available from the ",(0,l.kt)("inlineCode",{parentName:"p"},"container.overrides")," file."),(0,l.kt)("p",null,"They hide or show elements based on the combination of classes passed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"component.jsx")," file."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eea/volto-eea-design-system/blob/e7b5828c2f186f710546e6d106330b3b244ba903/theme/themes/eea/elements/container.overrides#L18"},(0,l.kt)("inlineCode",{parentName:"a"},"container.overrides"))," file for details."),(0,l.kt)("p",null,"Extra code way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@media screen and (max-width:768px) {\n  .component {\n    display: none;\n  }\n}\n")),(0,l.kt)("p",null,"Better way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Component className={"mobile hidden"}\n')),(0,l.kt)("h3",{id:"dont-add-html-tags-to-the-css-specificity-selector"},"Don't add HTML tags to the css specificity selector"),(0,l.kt)("p",null,"If we have:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".ui.button.basic\n")),(0,l.kt)("p",null,"  Avoid adding:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"button.ui.button.basic {}\ntable.ui.plain {}\n")),(0,l.kt)("p",null,"  Instead opt for variable overrides or add extra classes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".ui.table.eea-table-plain {\n  tag: style\n}\n")),(0,l.kt)("h3",{id:"add-custom-classes-after-the-semantic-ui-classes"},"Add custom classes after the semantic ui classes"),(0,l.kt)("p",null,"Wrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".ui.eea-button-action.button {}\n")),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".ui.button.eea-button-action {}\n")),(0,l.kt)("h3",{id:"use-semantic-ui-naming-style"},"Use Semantic UI naming style"),(0,l.kt)("p",null,"If you introduce a new variant of a Semantic UI component, ex new button variant:\nWrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".ui.button.eea-button-action {}\n")),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".ui.button.action {}\n")),(0,l.kt)("p",null,"If you add a new non-Semantic UI component:"),(0,l.kt)("p",null,"Wrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".eea-header {}\n.eea-header-action {}\n")),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".eea.header {}\n.eea.header .action {}\n")),(0,l.kt)("h3",{id:"keep-important-rules-to-a-minimum-and-make-sure-they-are-well-documented"},"Keep important rules to a minimum and make sure they are well documented"),(0,l.kt)("p",null,"In general ",(0,l.kt)("inlineCode",{parentName:"p"},"!important")," should be used for ",(0,l.kt)("inlineCode",{parentName:"p"},"utility classes")," only where you need to have the highest specificity."),(0,l.kt)("p",null,"If you need to add any css ",(0,l.kt)("inlineCode",{parentName:"p"},"!important")," rules, they need detailed comments on what is fixed and where/what to check for fix reproduction with a ",(0,l.kt)("inlineCode",{parentName:"p"},"FIXME comment"),".\nWrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},".ui.dropdown {\n  height: auto !important;\n}\n\n")),(0,l.kt)("p",null,"Better:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// FIXME reset left margin since help is a p tag\n.help {\n  margin-left: 0 !important;\n}\n")),(0,l.kt)("p",null,"Best:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// ### Used in login page form /login_form\n// FIXME reset left margin using !important since help is a p tag\n// with margin set to important\n.help {\n  margin-left: 0 !important;\n}\n")),(0,l.kt)("h3",{id:"use-relative-units-in-general"},"Use relative units in general"),(0,l.kt)("p",null,"Gutters/spacing are now measured using px instead of rem.\nSemanticUI uses rem."),(0,l.kt)("p",null,"So if designer set 20px, it must be transformed to rem units, by taking the base font-size of 16px then we get 20/16 = 1,25rem."),(0,l.kt)("p",null,"So that if in the future we change the base font-size the ",(0,l.kt)("inlineCode",{parentName:"p"},"gutters/spacing")," will also adjust.\nWrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@gutterWidth: 20px;\n")),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"@gutterWidth: 2rem;\n")),(0,l.kt)("h3",{id:"think-globally-act-locally"},"Think globally, act locally"),(0,l.kt)("p",null,"If you have a section repeated in several components, consider introducing a global variable that will be default for all the components where that section is present.\nEx:"),(0,l.kt)("p",null,"Many components have a ",(0,l.kt)("inlineCode",{parentName:"p"},"meta section"),".\nThis section can be aligned either ",(0,l.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"right"),"."),(0,l.kt)("p",null,"Therefore, we should introduce a global variable within the ",(0,l.kt)("inlineCode",{parentName:"p"},"site.variables")," add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"global")," variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// site.variables\n/* This adjusts the meta alignment across all elements */\n@metaAlign: left;\n")),(0,l.kt)("p",null,"Then use this global variable in each component where we have a ",(0,l.kt)("inlineCode",{parentName:"p"},"meta section"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// blockquote.variables\n/* This rule uses by default the global setting */\n@blockquoteMetaAlign: @metaAlign;\n")),(0,l.kt)("p",null,"If later the design calls to have the meta sections to the right,\nit's simply a job of changing one global variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// site.variables\n/* This adjusts the meta alignment across all elements */\n@metaAlign: right;\n")),(0,l.kt)("p",null,"The same is true with colors used in components, try to avoid custom values set on components only as they should be part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"site.variables")," color pallete."),(0,l.kt)("h4",{id:"semantic-ui-global-setting-example"},"Semantic UI global setting example"),(0,l.kt)("p",null,"We see this rule played out in many places within ",(0,l.kt)("inlineCode",{parentName:"p"},"site.variables"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// site.variables\n/*--------------\nForm Input\n---------------*/\n/* This adjusts the default form input across all elements */\n@inputBackground        : @white;\n")),(0,l.kt)("p",null,"Then within ",(0,l.kt)("inlineCode",{parentName:"p"},"form.variables")," we have several rules that make use of the global setting:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-less"},"// form.variables\n/* Text Area */\n@textAreaBackground: @inputBackground;\n\n/* Inverted */\n@invertedInputBackground: @inputBackground;\n")),(0,l.kt)("h3",{id:"check-components-design-when-having-odd-numbers-or-images"},"Check components design when having odd numbers or images"),(0,l.kt)("p",null,"As written down in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/eea/volto-eea-design-system/issues/13#issuecomment-1029066419"},"Card component issue"),", if your component accepts images consider how\nthey would adapt in case there is a mix between ",(0,l.kt)("inlineCode",{parentName:"p"},"portrait")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"landscapei")," images."),(0,l.kt)("p",null,"What about situations where you have an odd number of elements or the body of the components differ in size?"),(0,l.kt)("p",null,"The components need to be checked for such situations and to ensure they are flexible to deal with these mix and match elements."),(0,l.kt)("p",null,"Ex:"),(0,l.kt)("p",null,"If the card is ",(0,l.kt)("inlineCode",{parentName:"p"},"flex")," based and the parent ",(0,l.kt)("inlineCode",{parentName:"p"},"wrapper")," is flex as well, consider adding a max-height to the card ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"image wrapper")," so that they all keep a standard size."),(0,l.kt)("h3",{id:"code-formatting"},"Code formatting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CSS and less files should be formatted using prettier. Indent space will be\n2 spaces."),(0,l.kt)("li",{parentName:"ul"},"Files should be edited as Unix files, with LF line endings.")))}d.isMDXComponent=!0}}]);