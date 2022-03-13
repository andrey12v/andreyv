(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,n,t){e.exports={login:"Login_login__12d9m",actions:"Login_actions__3hdQ6"}},,function(e,n,t){e.exports={control:"Input_control__3GoaS",invalid:"Input_invalid__32cg7"}},,function(e,n,t){e.exports={card:"Card_card__192IF"}},function(e,n,t){e.exports={button:"Button_button__2jIq8"}},function(e,n,t){e.exports={home:"Home_home__24xEA"}},function(e,n,t){e.exports={nav:"Navigation_nav__1Ab4v"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__1tAry"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(6),o=t.n(i),l=(t(16),t(2)),s=t(7),u=t.n(s),r=t(0),d=function(e){return Object(r.jsx)("div",{className:"".concat(u.a.card," ").concat(e.className),children:e.children})},j=t(3),b=t.n(j),g=t(8),v=t.n(g),f=function(e){return Object(r.jsx)("button",{type:e.type||"button",className:"".concat(v.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},O=a.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),h=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],i=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(r.jsx)(O.Provider,{value:{isLoggedIn:a,onLogout:function(){i(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},x=O,m=t(5),p=t.n(m),_=a.a.forwardRef((function(e,n){var t=Object(c.useRef)(),a=function(){t.current.focus()};return Object(c.useImperativeHandle)(n,(function(){return{focus:a}})),Object(r.jsxs)("div",{className:"".concat(p.a.control," ").concat(!1===e.isValid?p.a.invalid:""),children:[Object(r.jsx)("label",{htmlFor:e.id,children:e.label}),Object(r.jsx)("input",{ref:t,type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})})),L=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},I=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},N=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),a=t[0],i=t[1],o=Object(c.useReducer)(L,{value:"",isValid:null}),s=Object(l.a)(o,2),u=s[0],j=s[1],g=Object(c.useReducer)(I,{value:"",isValid:null}),v=Object(l.a)(g,2),O=v[0],h=v[1],m=Object(c.useContext)(x),p=Object(c.useRef)(),N=Object(c.useRef)(),y=u.isValid,U=O.isValid;Object(c.useEffect)((function(){i(y&&U)}),[y,U]);return Object(r.jsx)(d,{className:b.a.login,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?m.onLogin(u.value,O.value):y?N.current.focus():p.current.focus()},children:[Object(r.jsx)(_,{id:"email",ref:p,label:"E-Mail",type:"email",isValid:y,value:u.value,onChange:function(e){j({type:"USER_INPUT",val:e.target.value})},onBlur:function(){j({type:"INPUT_BLUR"})}}),Object(r.jsx)(_,{id:"password",ref:N,label:"Password",type:"password",isValid:U,value:O.value,onChange:function(e){h({type:"USER_INPUT",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})}}),Object(r.jsx)("div",{className:b.a.actions,children:Object(r.jsx)(f,{type:"submit",className:b.a.btn,children:"Login"})})]})})},y=t(9),U=t.n(y),C=function(e){var n=Object(c.useContext)(x);return Object(r.jsxs)(d,{className:U.a.home,children:[Object(r.jsx)("h1",{children:"Welcome back!"}),Object(r.jsx)(f,{onClick:n.onLogout,children:"logout"})]})},R=t(10),V=t.n(R),P=function(){var e=Object(c.useContext)(x);return Object(r.jsx)("nav",{className:V.a.nav,children:Object(r.jsxs)("ul",{children:[e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("b",{children:"Users"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("b",{children:"Admin"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},B=t(11),S=t.n(B),E=function(e){return Object(r.jsxs)("header",{className:S.a["main-header"],children:[Object(r.jsx)("h1",{children:"A Typical Page"}),Object(r.jsx)(P,{onLogout:e.onLogout})]})};var T=function(){var e=Object(c.useContext)(x);return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(E,{}),Object(r.jsxs)("main",{children:[!e.isLoggedIn&&Object(r.jsx)(N,{}),e.isLoggedIn&&Object(r.jsx)(C,{})]})]})};o.a.render(Object(r.jsx)(h,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7c051597.chunk.js.map