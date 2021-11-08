(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{125:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(56),__webpack_require__(11),__webpack_require__(0),__webpack_require__(855);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),_excluded=["primary","size","backgroundColor","label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=_objectWithoutProperties(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button",Object.assign({type:"button",className:["storybook-button","storybook-button--"+size,mode].join(" "),style:{backgroundColor:backgroundColor}},props,{children:label}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},171:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));__webpack_require__(0);var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(125),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(858),__webpack_require__(20)),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:user?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogout,label:"Log out"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogin,label:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(11),__webpack_require__(0);var _Header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(171),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20);__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args))};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},467:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},468:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},469:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},470:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},471:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},472:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},473:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},474:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},494:function(module,exports,__webpack_require__){__webpack_require__(495),__webpack_require__(650),__webpack_require__(651),__webpack_require__(868),__webpack_require__(864),__webpack_require__(870),__webpack_require__(871),__webpack_require__(869),__webpack_require__(865),__webpack_require__(872),__webpack_require__(866),__webpack_require__(867),__webpack_require__(873),module.exports=__webpack_require__(850)},561:function(module,exports){},651:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(352)},850:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(352).configure)([__webpack_require__(851),__webpack_require__(853)],module,!1)}).call(this,__webpack_require__(207)(module))},851:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":852};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=851},852:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(11),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(228),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(467),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(468),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(469),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(470),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(471),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(472),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(473),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(474),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13__),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_5__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},853:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.tsx":854,"./stories/Header.stories.tsx":229,"./stories/Page.stories.tsx":874,"./stories/components/MyLabel.stories.tsx":875};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=853},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(11),__webpack_require__(0);var _Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(125),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20);__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},855:function(module,exports,__webpack_require__){var api=__webpack_require__(213),content=__webpack_require__(856);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},856:function(module,exports,__webpack_require__){(exports=__webpack_require__(214)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},858:function(module,exports,__webpack_require__){var api=__webpack_require__(213),content=__webpack_require__(859);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},859:function(module,exports,__webpack_require__){(exports=__webpack_require__(214)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},860:function(module,exports,__webpack_require__){var api=__webpack_require__(213),content=__webpack_require__(861);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},861:function(module,exports,__webpack_require__){(exports=__webpack_require__(214)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},862:function(module,exports,__webpack_require__){var api=__webpack_require__(213),content=__webpack_require__(863);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},863:function(module,exports,__webpack_require__){(exports=__webpack_require__(214)(!1)).push([module.i,'.label {\n  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\n    "Lucida Sans", Arial, sans-serif;\n}\n\n.normal {\n  font-size: 14px;\n}\n\n.h1 {\n  font-size: 30px;\n}\n\n.h2 {\n  font-size: 25px;\n}\n\n.h3 {\n  font-size: 20px;\n}\n\n.text-primary {\n  color: #3d5a80;\n}\n\n.text-secondary {\n  color: #98c1d9;\n}\n\n.text-tertiary {\n  color: #ee6c4c;\n}\n',""]),module.exports=exports},873:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(52),__webpack_require__(433),__webpack_require__(49),__webpack_require__(849);var client_api=__webpack_require__(882),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},874:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(11),__webpack_require__(0);var Header=__webpack_require__(171),jsx_runtime=(__webpack_require__(860),__webpack_require__(20)),Page_Page=function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};Page_Page.displayName="Page";try{Page_Page.displayName="Page",Page_Page.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:Page_Page.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Header_stories=__webpack_require__(229),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page_Page},function Template(args){return Object(jsx_runtime.jsx)(Page_Page,Object.assign({},args))});Page_stories_Template.displayName="Template";var LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},875:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic})),__webpack_require__.d(__webpack_exports__,"AllCaps",(function(){return AllCaps})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Tertiary})),__webpack_require__.d(__webpack_exports__,"CustomFontColor",(function(){return CustomFontColor}));__webpack_require__(11),__webpack_require__(862);var jsx_runtime=__webpack_require__(20);function MyLabel_MyLabel(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"No label":_ref$label,_ref$size=_ref.size,size=void 0===_ref$size?"normal":_ref$size,_ref$allCaps=_ref.allCaps,allCaps=void 0!==_ref$allCaps&&_ref$allCaps,_ref$color=_ref.color,color=void 0===_ref$color?"primary":_ref$color,fontColor=_ref.fontColor;return Object(jsx_runtime.jsx)("span",{className:"label "+size+" text-"+color,style:{color:fontColor},children:allCaps?label.toUpperCase():label})}MyLabel_MyLabel.displayName="MyLabel";try{MyLabel_MyLabel.displayName="MyLabel",MyLabel_MyLabel.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"This is the label to show",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"This is the size in which is shown",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"All words in uppercase",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Basic colors",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom font color",name:"fontColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:MyLabel_MyLabel.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"UI/MyLabel",component:MyLabel_MyLabel,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}};var MyLabel_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(MyLabel_MyLabel,Object.assign({},args))};MyLabel_stories_Template.displayName="Template";var Basic=MyLabel_stories_Template.bind({});Basic.args={size:"normal",allCaps:!1};var AllCaps=MyLabel_stories_Template.bind({});AllCaps.args={size:"normal",allCaps:!0};var Secondary=MyLabel_stories_Template.bind({});Secondary.args={size:"normal",color:"secondary"};var Tertiary=MyLabel_stories_Template.bind({});Tertiary.args={size:"normal",color:"tertiary"};var CustomFontColor=MyLabel_stories_Template.bind({});CustomFontColor.args={size:"h1",fontColor:"#5517ac"},Basic.parameters=Object.assign({storySource:{source:"(args) => (\n  <MyLabel {...args} />\n)"}},Basic.parameters),AllCaps.parameters=Object.assign({storySource:{source:"(args) => (\n  <MyLabel {...args} />\n)"}},AllCaps.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => (\n  <MyLabel {...args} />\n)"}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:"(args) => (\n  <MyLabel {...args} />\n)"}},Tertiary.parameters),CustomFontColor.parameters=Object.assign({storySource:{source:"(args) => (\n  <MyLabel {...args} />\n)"}},CustomFontColor.parameters)}},[[494,2,3]]]);