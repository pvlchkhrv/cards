(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{16:function(e,t,n){e.exports={superInput:"InputText_superInput__2h3wO",errorInput:"InputText_errorInput__3F9WG",error:"InputText_error__2lDLV"}},20:function(e,t,n){e.exports={default:"Button_default__3_qLI",red:"Button_red__3mhUf"}},27:function(e,t,n){e.exports={checkbox:"Checkbox_checkbox__VqnP0",spanClassName:"Checkbox_spanClassName__13gmc"}},37:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__2kMJy"}},43:function(e,t,n){},44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(18),a=n.n(s),o=(n(43),n(44),n(8)),i=n(4),u=n(0),j=function(){return Object(u.jsx)("div",{children:"PROFILE PAGE"})},d=function(){return Object(u.jsx)("div",{children:"404. PAGE NOT FOUND"})},b=function(){return Object(u.jsx)("div",{children:"NEW PASSWORD PAGE"})},l=function(){return Object(u.jsx)("div",{children:"TEST PAGE"})},h=n(12),O=n(5),p=n(3),g=n(24),x=n.n(g),f=n(36),v=n(14),E=n.n(v),S=E.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),R=function(e,t){return S.post("auth/register",{email:e,password:t})},C="AUTH/IS_REGISTER",m="AUTH/IS_ERROR_MESSAGE",T=function(e){return{type:"AUTH/IS_REGISTER",value:e}},P={isRegister:!1,isErrorMessage:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(p.a)(Object(p.a)({},e),{},{isRegister:t.value});case m:return Object(p.a)(Object(p.a)({},e),{},{isErrorMessage:t.value});default:return e}},k=function(e){var t=e.onClick,n=e.onChangeMail,r=e.onChangePassword,c=e.isRegister,s=e.isErrorMessage,a=e.mail,o=e.password;return Object(u.jsxs)("div",{children:["MY REGISTER PAGE",Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{value:a,type:"text",placeholder:"E-mail",onChange:n})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{value:o,type:"password",placeholder:"Password",onChange:r})})]}),Object(u.jsx)("button",{onClick:t,children:"Sign Up"}),c?Object(u.jsx)(i.a,{to:je.LOGIN}):Object(u.jsx)("div",{children:s})]})},_=function(){console.log("render Container");var e=Object(O.c)((function(e){return e.register.isRegister})),t=Object(O.c)((function(e){return e.register.isErrorMessage})),n=Object(O.b)(),c=Object(r.useState)(""),s=Object(h.a)(c,2),a=s[0],o=s[1],i=Object(r.useState)(""),j=Object(h.a)(i,2),d=j[0],b=j[1];return Object(u.jsx)("div",{children:Object(u.jsx)(k,{onClick:function(){n(function(e,t){return function(){var n=Object(f.a)(x.a.mark((function n(r){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e,t);case 3:c=n.sent,r(T(!0)),console.log(c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r({type:"AUTH/IS_ERROR_MESSAGE",value:n.t0.response.data.error});case 11:return n.prev=11,r(T(!1)),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}()}(a,d))},onChangeMail:function(e){o(e.currentTarget.value)},onChangePassword:function(e){b(e.currentTarget.value)},isRegister:e,isErrorMessage:t,mail:a,password:d})})},y=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(_,{})})},A=n(15),I=n(16),N=n.n(I),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,s=e.error,a=(e.className,e.spanClassName),o=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(N.a.error," ").concat(a||""),j="".concat(N.a.input," ").concat(s?N.a.errorInput:N.a.superInput," ").concat(N.a.className);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(p.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:j},o)),s&&Object(u.jsx)("span",{className:i,children:s})]})},G=n(27),L=n.n(G),U=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),s=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(L.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(p.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:a},s)),c&&Object(u.jsx)("span",{className:L.a.spanClassName,children:c})]})},D=n(20),W=n.n(D),F=function(e){var t=e.red,n=e.className,r=Object(A.a)(e,["red","className"]),c="".concat(W.a.button," ").concat(t?W.a.red:W.a.default," ").concat(n);return Object(u.jsx)("button",Object(p.a)({className:c},r))},H=function(e){var t=e.onClick,n=e.onChangeEmail,r=e.onChangePassword,c=e.onChangeChecked;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:" LOGIN "}),Object(u.jsx)("div",{children:Object(u.jsx)(M,{type:"email",placeholder:"Enter email",onChangeText:n})}),Object(u.jsx)("div",{children:Object(u.jsx)(M,{type:"password",placeholder:"Enter password",onChangeText:r})}),Object(u.jsx)("div",{children:Object(u.jsx)(U,{onChangeChecked:c,children:"remember me"})}),Object(u.jsx)("div",{children:Object(u.jsx)(F,{onClick:t,children:"Submit"})})]})},B=E.a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),J=function(e,t,n){return B.post("auth/login",{email:e,password:t,rememberMe:n})},K="SET_USER_DATA",q={user:{},isAuth:!1},V=function(e,t,n){return function(r){J(e,t,n).then((function(e){var t;console.log(e.data),r((t=e.data,{type:K,payload:t}))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t)}))}},$=function(e){var t=Object(O.c)((function(e){return e.login.isAuth})),n=Object(O.b)(),c=Object(r.useState)("panich2303@gmail.com"),s=Object(h.a)(c,2),a=s[0],o=s[1],j=Object(r.useState)("1234567"),d=Object(h.a)(j,2),b=d[0],l=d[1],p=Object(r.useState)(!1),g=Object(h.a)(p,2),x=g[0],f=g[1];return t?Object(u.jsx)(i.a,{to:je.PROFILE}):Object(u.jsx)("div",{children:Object(u.jsx)(H,{onClick:function(){n(V(a,b,x))},onChangeEmail:o,onChangePassword:l,onChangeChecked:f})})},Y=E.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),z=function(e){return Y.post("/auth/forgot",{email:e,from:"pvlchkhrv@gmail.com",message:"<div>password recover link: <a href='https://neko-back.herokuapp.com/2.0/set-new-password/$token$'>Link</a></div>"})},Q={status:"idle",isError:!1},X=function(e){return{type:"APP/SET-ERROR",isError:e}},Z=function(e){return{type:"APP/SET-STATUS",status:e}},ee="AUTH/SET-SUCCESS-MESSAGE",te="AUTH/SET-ERROR-MESSAGE",ne="AUTH/SET-IS-REGISTERED",re={isRegistered:!1,successMessage:"",errorMessage:""},ce=function(e){return{type:ne,isRegistered:e}},se=function(e){return function(t){t(Z("loading")),z(e).then((function(e){var n;t(ce(!0)),t((n=e.data.info,{type:ee,successMessage:n})),t(Z("succeed")),t(X(!1))})).catch((function(e){var n;t(Z("failed")),t(X(!0)),t((n=e.response.data.error,{type:te,errorMessage:n})),t(ce(!1))}))}},ae=function(e){var t=e.onClick,n=e.onChange;return Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)("div",{children:Object(u.jsx)(M,{type:"text",onChange:n})}),Object(u.jsx)("div",{children:Object(u.jsx)(F,{type:"submit",children:"Restore"})})]})},oe=function(e){var t=e.onClick,n=e.onChange,r=e.appStatus,c=e.errorMessage,s=e.successMessage;return console.log("render PageFrom"),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Restore Password Page"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(ae,{onClick:t,onChange:n}),"loading"===r&&Object(u.jsx)("div",{children:"Loading..."}),"failed"===r&&Object(u.jsx)("div",{children:c}),"succeed"===r&&Object(u.jsx)("div",{children:s})]})]})},ie=function(){console.log("render Page");var e=Object(O.c)((function(e){return e.app.status})),t=Object(O.c)((function(e){return e.restorePassword.isRegistered})),n=Object(O.c)((function(e){return e.restorePassword.errorMessage})),c=Object(O.c)((function(e){return e.restorePassword.successMessage})),s=Object(r.useState)(""),a=Object(h.a)(s,2),o=a[0],j=a[1],d=Object(O.b)();return t?Object(u.jsx)(i.a,{to:je.SET_NEW_PASSWORD}):Object(u.jsx)("div",{children:Object(u.jsx)(oe,{onClick:function(){d(se(o)),j("")},onChange:function(e){j(e.currentTarget.value)},appStatus:e,errorMessage:n,successMessage:c})})},ue=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(ie,{})})},je={LOGIN:"/login",REGISTER:"/register",PROFILE:"/profile",ERROR:"/error",RESTORE_PASSWORD:"/restore-password",SET_NEW_PASSWORD:"/set-new-password",TEST:"/test"},de=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(i.a,{to:"/login"})}}),Object(u.jsx)(i.b,{path:je.LOGIN,render:function(){return Object(u.jsx)($,{})}}),Object(u.jsx)(i.b,{path:je.REGISTER,render:function(){return Object(u.jsx)(y,{})}}),Object(u.jsx)(i.b,{path:je.REGISTER,render:function(){return Object(u.jsx)(y,{})}}),Object(u.jsx)(i.b,{path:je.PROFILE,render:function(){return Object(u.jsx)(j,{})}}),Object(u.jsx)(i.b,{path:je.RESTORE_PASSWORD,render:function(){return Object(u.jsx)(ue,{})}}),Object(u.jsx)(i.b,{path:je.SET_NEW_PASSWORD,render:function(){return Object(u.jsx)(b,{})}}),Object(u.jsx)(i.b,{path:je.TEST,render:function(){return Object(u.jsx)(l,{})}}),Object(u.jsx)(i.b,{render:function(){return Object(u.jsx)(d,{})}})]})})},be=n(37),le=n.n(be),he=function(){return Object(u.jsxs)("div",{className:le.a.headerContainer,children:[Object(u.jsx)(o.b,{to:je.LOGIN,children:"Login"}),Object(u.jsx)(o.b,{to:je.REGISTER,children:"Register"}),Object(u.jsx)(o.b,{to:je.PROFILE,children:"Profile"}),Object(u.jsx)(o.b,{to:je.RESTORE_PASSWORD,children:"Restore Password"}),Object(u.jsx)(o.b,{to:je.SET_NEW_PASSWORD,children:"Set New Password"}),Object(u.jsx)(o.b,{to:je.TEST,children:"Demo"})]})};var Oe=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(he,{}),Object(u.jsx)(de,{})]})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},ge=n(21),xe={},fe={},ve={},Ee=n(38),Se=Object(ge.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(p.a)(Object(p.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{isError:t.isError});default:return Object(p.a)({},e)}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(p.a)(Object(p.a)({},e),{},{user:t.payload,isAuth:!0});default:return e}},register:w,profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":default:return e}},restorePassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(p.a)(Object(p.a)({},e),{},{isRegistered:t.isRegistered});case te:return Object(p.a)(Object(p.a)({},e),{},{errorMessage:t.errorMessage});case ee:return Object(p.a)(Object(p.a)({},e),{},{successMessage:t.successMessage});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":default:return e}},test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":default:return e}}}),Re=Object(ge.c)(Se,Object(ge.a)(Ee.a));window.store=Re,a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O.a,{store:Re,children:Object(u.jsx)(Oe,{})})}),document.getElementById("root")),pe()}},[[70,1,2]]]);
//# sourceMappingURL=main.2360ef7e.chunk.js.map