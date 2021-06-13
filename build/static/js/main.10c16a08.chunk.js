(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var c=function(t){return t.auth.isLogedIn},r=function(t){return t.auth.user.email}},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"f",(function(){return v.d})),n.d(e,"d",(function(){return v.b})),n.d(e,"e",(function(){return v.c})),n.d(e,"b",(function(){return g.a})),n.d(e,"c",(function(){return g.b}));var c,r,a,u,o=n(3),i=n(8),s=n(2),b=n(5),j={name:null,email:null},f=Object(s.c)(j,(c={},Object(o.a)(c,b.l,(function(t,e){return e.payload.user})),Object(o.a)(c,b.f,(function(t,e){return e.payload.user})),Object(o.a)(c,b.i,(function(t,e){return j})),Object(o.a)(c,b.c,(function(t,e){return e.payload})),c)),d=Object(s.c)(null,(r={},Object(o.a)(r,b.l,(function(t,e){return e.payload.token})),Object(o.a)(r,b.f,(function(t,e){return e.payload.token})),Object(o.a)(r,b.i,(function(){return null})),r)),O=function(t,e){return e.payload},l=Object(s.c)(null,(a={},Object(o.a)(a,b.j,O),Object(o.a)(a,b.d,O),Object(o.a)(a,b.g,O),Object(o.a)(a,b.a,O),a)),h=Object(s.c)(!1,(u={},Object(o.a)(u,b.l,(function(){return!0})),Object(o.a)(u,b.f,(function(){return!0})),Object(o.a)(u,b.c,(function(){return!0})),Object(o.a)(u,b.j,(function(){return!1})),Object(o.a)(u,b.g,(function(){return!1})),Object(o.a)(u,b.a,(function(){return!1})),Object(o.a)(u,b.i,(function(){return!1})),u)),p=Object(i.b)({user:f,isLogedIn:h,token:d,error:l}),v=n(32),g=n(20)},30:function(t,e,n){"use strict";n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return f}));var c=n(15),r=n.n(c),a=n(23),u=n(16),o=n.n(u),i=n(12),s=n(6),b=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.f),t.prev=1,t.next=4,o.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(s.g)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(s.e)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},j=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(Object(s.b)()),o.a.post("/contacts",c).then((function(e){var n=e.data;t(Object(s.c)(n)),Object(i.b)("Contact was successfully added")})).catch((function(e){t(Object(s.a)(e.message)),Object(i.b)("Something went wrong. Please, retry")}))}},f=function(t){return function(e){e(Object(s.i)()),o.a.delete("/contacts/".concat(t)).then((function(){e(Object(s.j)(t)),Object(i.b)("Contact was successfully removed")})).catch((function(t){e(Object(s.h)(t.message)),Object(i.b)("Something went wrong. Please, retry")}))}}},32:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return l}));var c=n(15),r=n.n(c),a=n(23),u=n(16),o=n.n(u),i=n(12),s=n(5);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var b=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},j=function(){o.a.defaults.headers.common.Authorization=""},f=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.k)()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:c=e.sent,b(c.data.token),n(Object(s.l)(c.data)),Object(i.b)("You have been successfully signed up!",{autoClose:2e3}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n(Object(s.j)(e.t0.message)),Object(i.b)("Something went wrong. Please, retry");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(s.e)()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:c=e.sent,b(c.data.token),n(Object(s.f)(c.data)),Object(i.b)("Hey!You are logged in!",{autoClose:2e3}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),n(Object(s.d)(e.t0.message)),Object(i.b)("Wrong email or password");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(s.h)()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:j(),e(Object(s.i)()),Object(i.b)("You are logged out. Bye!",{autoClose:2e3}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(s.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return b(a),e(Object(s.b)()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,e(Object(s.c)(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(s.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},40:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return s.d})),n.d(e,"a",(function(){return O.a})),n.d(e,"g",(function(){return O.c})),n.d(e,"f",(function(){return l.c})),n.d(e,"d",(function(){return l.a})),n.d(e,"e",(function(){return l.b}));var c,r,a=n(3),u=n(33),o=n(8),i=n(2),s=n(6),b=Object(i.c)([],(c={},Object(a.a)(c,s.g,(function(t,e){return e.payload})),Object(a.a)(c,s.c,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(a.a)(c,s.j,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),j=Object(i.c)("",Object(a.a)({},s.d,(function(t,e){return e.payload}))),f=Object(i.c)(!1,(r={},Object(a.a)(r,s.f,(function(){return!0})),Object(a.a)(r,s.g,(function(){return!1})),Object(a.a)(r,s.e,(function(){return!1})),Object(a.a)(r,s.b,(function(){return!0})),Object(a.a)(r,s.c,(function(){return!1})),Object(a.a)(r,s.a,(function(){return!1})),Object(a.a)(r,s.i,(function(){return!0})),Object(a.a)(r,s.j,(function(){return!1})),Object(a.a)(r,s.h,(function(){return!1})),r)),d=Object(o.b)({items:b,filter:j,loading:f}),O=n(30),l=n(42)},42:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return o}));var c=n(28),r=function(t){return t.contacts.items},a=function(t){return t.contacts.loading},u=function(t){return t.contacts.filter},o=Object(c.a)([r,u],(function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))}))},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return O})),n.d(e,"a",(function(){return l}));var c=n(2),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),f=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getCurrentUserRequest"),O=Object(c.b)("auth/getCurrentUserSuccess"),l=Object(c.b)("auth/getCurrentUserError")},6:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return b})),n.d(e,"j",(function(){return j})),n.d(e,"h",(function(){return f})),n.d(e,"d",(function(){return d}));var c=n(2),r=Object(c.b)("contacts/fetchContactRequest"),a=Object(c.b)("contacts/fetchContactSuccess"),u=Object(c.b)("contacts/fetchContactError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/removeContactRequest"),j=Object(c.b)("contacts/removeContactSuccess"),f=Object(c.b)("contacts/removeContactError"),d=Object(c.b)("contacts/addFilter")},65:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){},90:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(25),u=n.n(a),o=n(18),i=n(10),s=n(53),b=n(7),j=n(12),f=(n(64),n(65),n(1)),d=function(t){var e=t.children;return Object(f.jsx)("div",{className:"Container",children:e})},O=n(20);function l(){var t=Object(i.c)(O.a);return Object(f.jsxs)("nav",{className:"NavList",children:[Object(f.jsx)(o.b,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink--active",children:"Main"}),t&&Object(f.jsx)(o.b,{exact:!0,to:"/contacts",className:"NavLink",activeClassName:"NavLink--active",children:"Contacts"})]})}var h=function(){return Object(f.jsxs)("nav",{className:"NavList",children:[Object(f.jsx)(o.b,{exact:!0,to:"/login",className:"NavLink",activeClassName:"NavLink--active",children:"Login"}),Object(f.jsx)(o.b,{exact:!0,to:"/register",className:"NavLink",activeClassName:"NavLink--active",children:"Register"})]})},p=n(22),v=n.p+"static/media/monster-icon.5289c9b1.png";n(87);function g(){var t=Object(i.b)(),e=Object(i.c)(p.c),n=Object(c.useCallback)((function(){return t(Object(p.e)())}),[t]);return Object(f.jsxs)("div",{className:"UserMenu",children:[Object(f.jsx)("img",{className:"AvatarImg",src:v,alt:"",width:"40"}),Object(f.jsx)("span",{className:"User",children:e}),Object(f.jsx)("button",{type:"button",onClick:n,children:"Logout"})]})}n(88);function m(){var t=Object(i.c)(p.b);return Object(f.jsxs)("header",{className:"Header",children:[Object(f.jsx)(l,{}),t?Object(f.jsx)(g,{}):Object(f.jsx)(h,{})]})}var x=n(52),k=n(30),y=n(32),C=n(26),w=n(34);function N(t){t.component,t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(w.a)(t,["component","isAuthenticated","redirectTo","children"]),r=Object(i.c)(O.a);return Object(f.jsx)(b.b,Object(C.a)(Object(C.a)({},c),{},{children:r?n:Object(f.jsx)(b.a,{to:e})}))}function L(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(w.a)(t,["isAuthenticated","redirectTo","children"]),r=Object(i.c)(O.a);return Object(f.jsx)(b.b,Object(C.a)(Object(C.a)({},c),{},{children:r&&c.restricted?Object(f.jsx)(b.a,{to:e}):n}))}n(89),n(90);var S=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,124))})),E=Object(c.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,123))})),R=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,125))})),T=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,126))}));function A(){var t=Object(i.b)();return Object(c.useEffect)((function(){console.log("hi"),t(Object(y.a)()),t(Object(k.b)())}),[t]),Object(f.jsxs)(d,{children:[Object(f.jsx)(m,{}),Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(x.a,{}),children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(L,{exact:!0,path:"/",children:Object(f.jsx)(S,{})}),Object(f.jsx)(N,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(E,{})}),Object(f.jsx)(L,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(f.jsx)(R,{})}),Object(f.jsx)(L,{path:"/register",restricted:!0,redirectTo:"/",children:Object(f.jsx)(T,{})}),Object(f.jsx)(b.a,{to:"/"})]})}),Object(f.jsx)(j.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var q=n(33),z=n(2),U=n(55),P=n.n(U),B=n(19),I=n(56),H=n.n(I),M=n(40),Y={key:"auth",storage:H.a,whitelist:["token"],blacklist:["filter"]},F=[].concat(Object(q.a)(Object(z.d)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),[P.a]),J=Object(z.a)({reducer:{auth:Object(B.g)(Y,p.a),contacts:M.c},middleware:F,devTools:!1}),W={store:J,persistor:Object(B.h)(J)};n(93);u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{store:W.store,children:Object(f.jsx)(s.a,{loading:null,persistor:W.persistor,children:Object(f.jsx)(o.a,{children:Object(f.jsx)(A,{})})})})}),document.getElementById("root"))}},[[94,5,6]]]);
//# sourceMappingURL=main.10c16a08.chunk.js.map