(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),s=n.n(r),o=n(22),i=(n(70),n(71),n(4)),u=n(10),l=n(33),b=n.n(l),j=n(21),d=n.n(j),f=n(26),O=n(18),h=n.n(O),m=n(7),p=n(27),x=n.n(p);h.a.defaults.baseURL="https://connections-api.herokuapp.com";var v,g=function(e){h.a.defaults.headers.common.Authorization="Bearer ".concat(e)},_=function(){h.a.defaults.headers.common.Authorization=""},k=Object(m.c)("auth/register",function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,g(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),x.a.Notify.failure("".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),C=Object(m.c)("auth/login",function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/login",t);case 3:return n=e.sent,a=n.data,g(a.token),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),x.a.Notify.failure("".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),N=Object(m.c)("auth/logout",Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/users/logout");case 3:_(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),x.a.Notify.failure("".concat(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),w=Object(m.c)("auth/refresh",function(){var e=Object(f.a)(d.a.mark((function e(t,n){var a,c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.getState(),null!==(c=a.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return g(c),e.prev=5,e.next=8,h.a.get("/users/current");case 8:return r=e.sent,s=r.data,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(5),x.a.Notify.failure("".concat(e.t0));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}()),y={register:k,logOut:N,logIn:C,fetchCurrentUser:w},L={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserEmail:function(e){return e.auth.user.email}},I=n(5),S=Object(m.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(v={},Object(I.a)(v,y.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(I.a)(v,y.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(I.a)(v,y.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(I.a)(v,y.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0})),v)}).reducer,F=n(1),A=function(){var e=Object(i.c)(L.getIsLoggedIn);return Object(F.jsxs)("nav",{children:[Object(F.jsx)(o.b,{to:"/",exact:!0,className:b.a.link,activeClassName:b.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(F.jsx)(o.b,{to:"/contacts",className:b.a.link,activeClassName:b.a.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})},T=n(39),U=n.n(T),B=n(125);function q(){var e=Object(i.b)(),t=Object(i.c)(L.getUserEmail);return Object(F.jsxs)("div",{className:U.a.container,children:[Object(F.jsx)("span",{className:U.a.name,children:t}),Object(F.jsx)(B.a,{className:U.a.button,variant:"info",onClick:function(){return e(y.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var E=n(34),P=n.n(E);function D(){return Object(F.jsxs)("div",{children:[Object(F.jsx)(o.b,{to:"/register",className:P.a.link,activeClassName:P.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(F.jsx)(o.b,{to:"/login",className:P.a.link,activeClassName:P.a.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var R=n(55),M=n.n(R);function z(){var e=Object(i.c)(L.getIsLoggedIn);return Object(F.jsxs)("header",{className:M.a.header,children:[Object(F.jsx)(A,{}),e?Object(F.jsx)(q,{}):Object(F.jsx)(D,{})]})}var V=Object(m.b)("contacts/fetchContactsRequest"),J=Object(m.b)("contacts/fetchContactsSuccess"),H=Object(m.b)("contacts/fetchContactsError"),Y=Object(m.b)("contacts/addContactRequest"),K=Object(m.b)("contacts/addContactSuccess"),Q=Object(m.b)("contacts/addContactError"),W=Object(m.b)("contacts/deleteContactRequest"),X=Object(m.b)("contacts/deleteContactSuccess"),G=Object(m.b)("contacts/deleteContactError"),Z=Object(m.b)("contacts/changeFilter");h.a.defaults.baseURL="https://connections-api.herokuapp.com";var $,ee,te={fetchContacts:function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V()),e.prev=1,e.next=4,h.a.get("/contacts");case 4:n=e.sent,a=n.data,t(J(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(H(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContact:function(e,t){return function(n){var a={name:e,number:t};n(Y()),h.a.post("/contacts",a).then((function(e){var t=e.data;return n(K(t))})).catch((function(e){return n(Q(e.message))}))}},deleteContact:function(e){return function(t){t(W()),h.a.delete("/contacts/".concat(e)).then((function(){return t(X(e))})).catch((function(e){return t(G(e.message))}))}}},ne=te,ae=n(37),ce=function(e){return e.contacts.filter},re=function(e){return e.contacts.items},se=Object(ae.a)([re,ce],(function(e,t){console.log(t);var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),oe={getLoading:function(e){return e.contacts.loading},getAllContacts:re,getFilter:ce,getVisibleContacts:se},ie=n(29),ue=n(12),le=Object(m.d)([],($={},Object(I.a)($,J,(function(e,t){return t.payload})),Object(I.a)($,K,(function(e,t){var n=t.payload;return[].concat(Object(ie.a)(e),[n])})),Object(I.a)($,X,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),$)),be=Object(m.d)(!1,(ee={},Object(I.a)(ee,V,(function(){return!0})),Object(I.a)(ee,J,(function(){return!1})),Object(I.a)(ee,H,(function(){return!1})),Object(I.a)(ee,Y,(function(){return!0})),Object(I.a)(ee,K,(function(){return!1})),Object(I.a)(ee,Q,(function(){return!1})),Object(I.a)(ee,W,(function(){return!0})),Object(I.a)(ee,X,(function(){return!1})),Object(I.a)(ee,G,(function(){return!1})),ee)),je=Object(m.d)("",Object(I.a)({},Z,(function(e,t){return t.payload}))),de=Object(m.d)(null,{}),fe=Object(ue.b)({items:le,filter:je,loading:be,error:de}),Oe=n(28),he=n.n(Oe);function me(e){var t=e.name,n=e.number,a=e.id,c=e.onDelete;return Object(F.jsxs)(F.Fragment,{children:[t,": ",Object(F.jsxs)("span",{className:he.a.number,children:[" ",n," "]}),Object(F.jsx)("button",{className:he.a.button,onClick:function(){return c(a)},children:"Delete"})]})}var pe=n(56),xe=n.n(pe),ve=(n(118),function(){var e=Object(i.b)(),t=Object(i.c)(oe.getVisibleContacts),n=Object(i.c)(oe.getLoading),c=function(t){return e(ne.deleteContact(t))};return Object(a.useEffect)((function(){return e(ne.fetchContacts())}),[e]),Object(F.jsxs)("ul",{className:he.a.contactList,children:[n&&Object(F.jsx)("div",{className:he.a.loader,children:Object(F.jsx)(xe.a,{type:"Puff",color:"#00BFFF",height:50,width:50,timeout:3e3})}),t&&t.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){var t=e.id,n=e.name,a=e.number;return Object(F.jsx)("li",{className:he.a.name,children:Object(F.jsx)(me,{id:t,name:n,number:a,onDelete:c})},t)}))]})}),ge=n(8),_e=n(124),ke=n(25),Ce=n.n(ke),Ne=function(){var e=Object(a.useState)(""),t=Object(ge.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(ge.a)(r,2),o=s[0],u=s[1],l=Object(i.c)(oe.getAllContacts),b=Object(i.b)(),j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},d=function(){c(""),u("")};return Object(F.jsxs)("form",{className:Ce.a.form,onSubmit:function(e){e.preventDefault();var t=l.find((function(e){return e.name===n}));if(t)return x.a.Notify.failure("".concat(t.name," is already in contacts")),void d();!function(e,t){b(ne.addContact(e,t))}(n,o),d()},children:[Object(F.jsxs)("div",{className:Ce.a.labels,children:[Object(F.jsxs)("label",{className:Ce.a.name,children:["Name",Object(F.jsx)("input",{className:Ce.a.input,type:"text",name:"name",value:n,onChange:j})]}),Object(F.jsxs)("label",{className:Ce.a.name,children:["Number",Object(F.jsx)("input",{className:Ce.a.input,type:"tel",name:"number",value:o,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(F.jsx)("button",{className:Ce.a.button,type:"submit",children:"Add contact"},"submitBtn")]})},we=n(57),ye=n.n(we),Le=function(){var e=Object(a.useState)(!1),t=Object(ge.a)(e,2),n=t[0],c=t[1];return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B.a,{className:ye.a.button,variant:"primary",onClick:function(){return c(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(F.jsxs)(_e.a,{show:n,onHide:function(){return c(!1)},children:[Object(F.jsx)(_e.a.Header,{closeButton:!0,children:Object(F.jsx)(_e.a.Title,{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})}),Object(F.jsx)(_e.a.Body,{children:Object(F.jsx)(Ne,{})})]})]})},Ie=n(40),Se=n.n(Ie),Fe=function(){var e=Object(i.b)(),t=Object(i.c)(oe.getFilter);return Object(F.jsx)("div",{className:Se.a.filter,children:Object(F.jsxs)("label",{className:Se.a.label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(F.jsx)("input",{className:Se.a.input,type:"text",name:"filter",value:t,onChange:function(t){return e(Z(t.target.value))}})]})})},Ae=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(Le,{}),Object(F.jsx)(Fe,{}),Object(F.jsx)(ve,{})]})},Te=n(20),Ue=n.n(Te),Be=function(){return Object(F.jsx)("div",{className:Ue.a.container,children:Object(F.jsx)("h1",{className:Ue.a.title,children:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"})})};function qe(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(ge.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(ge.a)(s,2),u=o[0],l=o[1],b=Object(a.useState)(""),j=Object(ge.a)(b,2),d=j[0],f=j[1],O=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return r(a);case"email":return l(a);case"password":return f(a);default:return}};return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(y.register({name:c,email:u,password:d})),r(""),l(""),f("")},className:Ue.a.form,autoComplete:"off",children:[Object(F.jsxs)("label",{className:Ue.a.label,children:["\u0418\u043c\u044f",Object(F.jsx)("input",{type:"text",name:"name",value:c,onChange:O})]}),Object(F.jsxs)("label",{className:Ue.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(F.jsx)("input",{type:"email",name:"email",value:u,onChange:O})]}),Object(F.jsxs)("label",{className:Ue.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(F.jsx)("input",{type:"password",name:"password",value:d,onChange:O})]}),Object(F.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}function Ee(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(ge.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),o=Object(ge.a)(s,2),u=o[0],l=o[1],b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return r(a);case"password":return l(a);default:return}};return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(y.logIn({email:c,password:u})),r(""),l("")},className:Ue.a.form,autoComplete:"off",children:[Object(F.jsxs)("label",{className:Ue.a.label,children:["\u041f\u043e\u0447\u0442\u0430",Object(F.jsx)("input",{type:"email",name:"email",value:c,onChange:b})]}),Object(F.jsxs)("label",{className:Ue.a.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(F.jsx)("input",{type:"password",name:"password",value:u,onChange:b})]}),Object(F.jsx)("button",{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var Pe=n(61),De=n.n(Pe);function Re(e){var t=e.children;return Object(F.jsx)("div",{className:De.a.Container,children:t})}var Me=n(2),ze=n(9),Ve=["children","redirectTo"];function Je(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/":n,c=Object(ze.a)(e,Ve),r=Object(i.c)(L.getIsLoggedIn);return Object(F.jsx)(u.b,Object(Me.a)(Object(Me.a)({},c),{},{children:r?t:Object(F.jsx)(u.a,{to:a})}))}var He=["children","restricted","redirectTo"];function Ye(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,c=e.redirectTo,r=void 0===c?"/":c,s=Object(ze.a)(e,He),o=Object(i.c)(L.getIsLoggedIn)&&a;return Object(F.jsx)(u.b,Object(Me.a)(Object(Me.a)({},s),{},{children:o?Object(F.jsx)(u.a,{to:r}):t}))}function Ke(){var e=Object(i.b)();return Object(a.useEffect)((function(){e(y.fetchCurrentUser())}),[e]),Object(F.jsxs)(Re,{children:[Object(F.jsx)(z,{}),Object(F.jsxs)(u.d,{children:[Object(F.jsx)(Ye,{exact:!0,path:"/",children:Object(F.jsx)(Be,{})}),Object(F.jsx)(Ye,{exact:!0,path:"/register",restricted:!0,children:Object(F.jsx)(qe,{})}),Object(F.jsx)(Ye,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(F.jsx)(Ee,{})}),Object(F.jsx)(Je,{path:"/contacts",redirectTo:"/login",children:Object(F.jsx)(Ae,{})})]})]})}var Qe=n(24),We=n(62),Xe=n.n(We),Ge=Object(ie.a)(Object(m.f)({serializableCheck:{ignoredActions:[Qe.a,Qe.f,Qe.b,Qe.c,Qe.d,Qe.e]}})),Ze={key:"auth",storage:Xe.a,whitelist:["token"]},$e=Object(m.a)({reducer:{auth:Object(Qe.g)(Ze,S),contacts:fe},middleware:Ge,devTools:!1}),et=Object(Qe.h)($e),tt=(n(121),n(63));s.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(i.a,{store:$e,children:Object(F.jsx)(tt.a,{loading:null,persistor:et,children:Object(F.jsx)(o.a,{children:Object(F.jsx)(Ke,{})})})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={form:"views_form__3ACV4",label:"views_label__iNTbj",container:"views_container__tFixA",title:"views_title__TYDAf"}},25:function(e,t,n){e.exports={form:"Form_form__1ACFq",labels:"Form_labels__YSF9w",name:"Form_name__2P32h",input:"Form_input__2-2_S",button:"Form_button__3J-K1"}},28:function(e,t,n){e.exports={name:"Phonebook_name__39938",contactList:"Phonebook_contactList__3aA8R",number:"Phonebook_number__xyLkp",button:"Phonebook_button__3qd7Q",loader:"Phonebook_loader__7oS9d"}},33:function(e,t,n){e.exports={link:"Navigation_link__3iVqi",activeLink:"Navigation_activeLink__ETz15"}},34:function(e,t,n){e.exports={link:"AuthNav_link__2Xw2q",activeLink:"AuthNav_activeLink__24p5B"}},39:function(e,t,n){e.exports={container:"UserMenu_container__1lLCP",avatar:"UserMenu_avatar__sSDg9",name:"UserMenu_name__13Ii0",button:"UserMenu_button__PO1fS"}},40:function(e,t,n){e.exports={filter:"FilterInput_filter__1dqty",input:"FilterInput_input__2OjzB"}},55:function(e,t,n){e.exports={header:"AppBar_header__1UMas"}},57:function(e,t,n){e.exports={button:"NewContact_button__2Ivj6"}},61:function(e,t,n){e.exports={Container:"Container_Container__oCBmv"}},71:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.ecb1dd0a.chunk.js.map