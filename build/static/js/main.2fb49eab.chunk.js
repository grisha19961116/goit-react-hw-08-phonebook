(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{136:function(e,t,n){e.exports={filter_form:"Filter_filter_form__1ChpP"}},138:function(e,t,n){e.exports={loader:"Loader_loader__3G5A0"}},155:function(e,t,n){},20:function(e,t,n){e.exports={contact_table:"ContactTable_contact_table__2QUUP",contact_name:"ContactTable_contact_name__2L-RQ",contact_number:"ContactTable_contact_number__3i8v6",input_hidden:"ContactTable_input_hidden__3UPS8",input_active:"ContactTable_input_active__3MUFz",contact_update:"ContactTable_contact_update__3pFrY",contact_delete:"ContactTable_contact_delete__2zHtl"}},295:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),i=n.n(a),o=n(9),s=n.n(o),c=(n(150),n(23)),u=n(11),l=n(130),d=n(56),p=(n(154),n(155),n(15));function b(){var e,t=[],n=Math.PI/5,r=3.5,a=.25,i=.01,o=document.getElementById("canvas"),s=o.getContext("2d");function c(){this.r=Math.random()*r*r+r,this.rp=Math.PI/Math.random(),this.rd=2*Math.random()-1,this.c=.25*Math.random()+a,this.x=Math.random()*o.width,this.y=Math.random()*o.height,this.e=0,this.d=!1}function u(){c.call(this),this.y=Math.random()*o.height/2,this.r=Math.random()*r*r+10.5,this.falling=!1}function l(e){var t=e.o;s.save(),s.beginPath(),s.translate(t.x,t.y),s.rotate(t.rp),t.rp+=.01*t.rd,s.moveTo(0,0-t.r);for(var r=0;r<5;r++)s.rotate(n),s.lineTo(0,0-t.r*t.c),s.rotate(n),s.lineTo(0,0-t.r)}function d(){s.stroke(),s.fill(),s.restore()}function p(){o.width=window.innerWidth,o.height=window.innerHeight}function b(t){e&&t.clientX>e.x-2*e.r&&t.clientX<e.x+2*e.r&&t.clientY>e.y-2*e.r&&t.clientY<e.y+2*e.r&&(e.falling||(e.falling=!0,e.e=1,e.r*=2,e.vy=.001,t.clientX>o.width/2?e.vx=-(.01*Math.random()+.01):e.vx=.01*Math.random()+.01))}p(),c.prototype.shine=function(){this.d?this.e-=i*this.r/50:this.e+=i,this.e>.99&&!1===this.d&&(this.d=!0),l({o:this}),s.strokeStyle="rgba(255, 209, 143, "+this.e+")",s.shadowColor="rgba(255, 209, 143, "+this.e+")",s.fillStyle="rgba(255, 209, 143, "+this.e+")",s.lineWidth=2*this.c,s.shadowBlur=this.r/r,s.shadowOffsetX=0,s.shadowOffsetY=0,d()},u.prototype.shine=function(){this.d?this.e-=i*this.r/25:this.e+=.05,this.e>.99&&!1===this.d&&(this.d=!0),l({o:this}),s.strokeStyle="rgba(221, 19, 255, "+2*this.e+")",s.shadowColor="rgba(221, 19, 255, "+2*this.e+")",s.fillStyle="rgba(221, 19, 255, "+2*this.e+")",s.lineWidth=2*this.c,s.shadowBlur=50,s.shadowOffsetX=0,s.shadowOffsetY=0,d()},u.prototype.fall=function(){this.e-=.005,this.r-=this.r*i,s.save(),s.translate(this.x+this.vx,this.y+this.vy),s.scale(1,Math.pow(this.e,2)),s.beginPath(),s.rotate(this.rp),this.rp+=.1,s.moveTo(0,0-this.r);for(var e=0;e<5;e++)s.rotate(n),s.lineTo(0,0-this.r*this.c),s.rotate(n),s.lineTo(0,0-this.r);this.vx+=this.vx,this.vy+=1.3*this.vy,s.strokeStyle="rgba(255, 210, 93, "+1/this.e+")",s.shadowColor="rgba(255, 210, 93, "+1/this.e+")",s.fillStyle="rgba(255, 210, 93, "+1/this.e+")",s.shadowBlur=100,d()},document.addEventListener("resize",p,!1),o.addEventListener("mousemove",b,!1),o.addEventListener("touchstart",b,!1),function n(){p(),s.clearRect(0,0,o.width,o.height),t.length<25&&t.push(new c);for(var r=0;r<t.length;r++)t[r].shine(),!0===t[r].d&&t[r].e<0&&t.splice(r,1);!e&&.2>Math.random()&&(e=new u),e&&(e.falling?e.fall():e.shine(),e.e<i&&(e=null)),requestAnimationFrame(n,o)}()}var h=n(22),m=n(6),f=n.n(m),_=n(8),v=n(40),j=n(20),g=n.n(j),O=n(29),x=O.a({email:O.b("Enter your email").email("Enter a valid email").required("Email is required"),name:O.b("Enter your NickName").max(15,"Nickname can not  be more than 15 charts").required("Nickname is required"),password:O.b("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),w=O.a({email:O.b("Enter your email").email("Enter a valid email").required("Email is required"),password:O.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(20,"Password should be less 20 characters").required("Password is required")}),y=O.a({name:O.b("Enter your name").required("Name is required").min(3,"Minimal length 3").max(14,"Maximal length 14"),number:O.b("Enter your number").matches("^[0-9]+$","Phone number is not valid").required("Number is required").min(10,"Number should has 10 characters").max(10,"Number should has 10 characters")}),k=function(e){return y.validate(e).catch((function(e){var t=e.errors;if(""!==t[0])return c.b.error("\ud83d\ude80 ".concat(t[0],"!"),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1}))},C=function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=e.some((function(e){return e.name===t})),o=e.some((function(e){return e.number===n}));return r&&i&&c.b.warn("\u26a0\ufe0f You have contact with same name!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),a&&o&&c.b.error("\ud83d\ude80 Number has been using!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!o},N=n(43),I=function(e){return e.contacts},E=function(e){return e.filter},S=Object(N.a)([I],(function(e){return e})),B=Object(N.a)([I,E],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),L=n(13),P=Object(L.a)("contacts/add",(function(e){return{payload:e}})),T=Object(L.a)("contacts/remove",(function(e){return{payload:e}})),M=Object(L.a)("contacts/update",(function(e){return{payload:e}})),F=Object(L.a)("contacts/get",(function(e){return{payload:e}})),q=Object(L.a)("contacts/loading",(function(e){return{payload:e}})),H=n(120);H.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var A=function(){var e=Object(_.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("/users/signup",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(_.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("/users/login",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(_.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("/users/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(_.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(_.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.delete("/contacts/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(_.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.patch("/contacts/".concat(t),n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(_.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){var t=e.message;return c.b.error("\ud83d\ude80 ".concat(t,"!"),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},Y=function(e){return function(){var t=Object(_.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(q(!0)),t.next=4,V(e);case 4:r=t.sent,n(P(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),W(t.t0);case 11:return t.prev=11,n(q(!1)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},J=function(e){return function(){var t=Object(_.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(q(!0)),t.next=4,z(e);case 4:n(T(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),W(t.t0);case 10:return t.prev=10,n(q(!1)),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(_.a)(f.a.mark((function n(r){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(q(!0)),n.next=4,U(e,t);case 4:a=n.sent,r(M(a)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),W(n.t0);case 11:return n.prev=11,r(q(!1)),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}()},G=Object(a.createRef)(),Z=function(){var e=Object(u.c)(B),t=Object(u.c)(E),n=Object(a.useState)(null),i=Object(v.a)(n,2),o=i[0],s=i[1],c=Object(a.useState)(!1),l=Object(v.a)(c,2),d=l[0],p=l[1],b=Object(u.b)(),m=function(){var e=Object(_.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||o===t){e.next=2;break}return e.abrupt("return");case 2:return G.current=null,p(!1),s(""),e.t0=b,e.next=8,J(t);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var n=Object(_.a)(f.a.mark((function n(r,a,i){var c,u,l,m,_,v,j,O,x,w,y,N,I,E,S,B,L,P;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t){n.next=2;break}return n.abrupt("return");case 2:if(!o||o===r){n.next=4;break}return n.abrupt("return");case 4:if(c=document.getElementById(a+"td-name"),u=document.getElementById(a+"td-number"),l=document.getElementsByClassName(g.a.contact_update),m=document.getElementsByClassName(g.a.contact_delete),_=document.getElementById(a+"first"),v=document.getElementById(a+"second"),_&&v&&(G.current={inputName:_,inputNumber:v}),j=G.current,O=j.inputName,x=j.inputNumber,w=O.value,y=x.value,N={name:w,number:y},I=[].concat(Object(h.a)(Array.from(l)),Object(h.a)(Array.from(m))),_||v||(c.append(O),u.append(x)),s(r),p(E=!(E=d)),E&&(I.map((function(e){if(e.id===a+"td-update")return e.style.backgroundColor="rgb(247, 171, 7)",e.textContent="Done",null;e.style.pointerEvents="none"})),O.classList.remove(g.a.input_hidden),x.classList.remove(g.a.input_hidden),O.classList.add(g.a.input_active),x.classList.add(g.a.input_active)),E){n.next=58;break}return n.prev=23,n.next=26,k(N);case 26:if(n.sent){n.next=29;break}return n.abrupt("return",p(E));case 29:n.next=34;break;case 31:n.prev=31,n.t0=n.catch(23),console.log(n.t0);case 34:if(S=i.theName,B=i.theNumber,S!==w||B===y){n.next=40;break}if(L=C(e,w,y,!1,!0),p(E),L){n.next=40;break}return n.abrupt("return");case 40:if(S!==w&&B===y&&C(e,w,y,!0,!1),S===w||B===y){n.next=46;break}if(P=C(e,w,y),p(E),P){n.next=46;break}return n.abrupt("return");case 46:return I.map((function(e){e.id===a+"td-update"&&(e.style.backgroundColor="rgb(12, 247, 63)",e.textContent="Update"),e.style.pointerEvents=""})),n.t1=b,n.next=50,Q(r,N);case 50:n.t2=n.sent,(0,n.t1)(n.t2),O.classList.remove(g.a.input_active),x.classList.remove(g.a.input_active),O.classList.add(g.a.input_hidden),x.classList.add(g.a.input_hidden),G.current=null,s(null);case 58:case"end":return n.stop()}}),n,null,[[23,31]])})));return function(e,t,r){return n.apply(this,arguments)}}();return 0!==e.length?Object(r.jsx)("table",{className:g.a.contact_table,children:Object(r.jsx)("tbody",{children:e.map((function(e,t){var n=e.id,a=e.name,i=e.number;return Object(r.jsxs)("tr",{className:g.a.contact_tbody_tr,children:[Object(r.jsxs)("td",{id:t+"td-name",className:g.a.contact_name,children:[a,Object(r.jsx)("input",{id:t+"first",className:g.a.input_hidden,type:"text",defaultValue:a})]}),Object(r.jsxs)("td",{id:t+"td-number",className:g.a.contact_number,children:[i,Object(r.jsx)("input",{id:t+"second",className:g.a.input_hidden,type:"tel",defaultValue:i})]}),Object(r.jsx)("td",{id:t+"td-update",className:g.a.contact_update,onClick:function(){return j(n,t,{theName:a,theNumber:i})},children:"Update"}),Object(r.jsx)("td",{id:t+"td-delete",className:g.a.contact_delete,onClick:function(){return m(n)},children:"Delete"})]},t)}))})}):null},K=n(37),$=n(327),ee=n(326),te=n(51),ne=n.n(te),re=n(120),ae=function(e){re.defaults.headers.common.Authorization="Bearer ".concat(e)},ie=function(){re.defaults.headers.common.Authorization=""},oe=function(e){return e.logIn.token},se=function(e){return e.logIn.name},ce=function(e){return e.logIn.email};var ue=function(){var e=Object(u.c)(S),t=Object(u.c)(oe),n=Object(u.b)(),i=function(){var e=Object(_.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,Y(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){null===t&&""===t||(ae(t),n(function(){var e=Object(_.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(q(!0)),e.next=4,X();case 4:n=e.sent,t(F(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),W(e.t0);case 11:return e.prev=11,t(q(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()))}),[n,t]);var o=Object(K.a)({initialValues:{name:"",number:""},validationSchema:y,onSubmit:function(t){var n=t.name,r=t.number,a={name:n,number:r};if(C(e,n,r))return o.values.name="",o.values.number="",i(a)}});return Object(r.jsxs)("form",{className:ne.a.add_contact_form,onSubmit:o.handleSubmit,children:[Object(r.jsxs)("div",{className:ne.a.add_contact_input_wrapper,children:[Object(r.jsx)(ee.a,{className:ne.a.add_contact_input,id:"name",name:"name",label:"Name...",value:o.values.name,onChange:o.handleChange,error:o.touched.name&&Boolean(o.errors.name),helperText:o.touched.name&&o.errors.name}),Object(r.jsx)(ee.a,{className:ne.a.add_contact_input,id:"number",name:"number",label:"Number...",type:"tel",value:o.values.number,onChange:o.handleChange,error:o.touched.number&&Boolean(o.errors.number),helperText:o.touched.number&&o.errors.number})]}),Object(r.jsx)($.a,{className:ne.a.add_contact_button,color:"primary",variant:"contained",type:"submit",children:"Create"})]})},le=Object(L.a)("signIn/success",(function(e){return{payload:e}})),de=Object(L.a)("signIn/error",(function(e){return{payload:e}})),pe=Object(L.a)("signOut/success",(function(e){return{payload:e}})),be=Object(L.a)("signOut/error",(function(e){return{payload:e}})),he=function(e){return function(){var t=Object(_.a)(f.a.mark((function t(n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,t.next=4,D();case 4:ie(),n(pe()),r=!0,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),r=!1,n(be());case 13:return t.prev=13,!0===r&&c.b.info("\ud83d\udc4b Goodby darling <<".concat(e,">> !"),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!1===r&&c.b.error("\ud83d\ude80 Server error!",{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.finish(13);case 17:case"end":return t.stop()}}),t,null,[[1,9,13,17]])})));return function(e){return t.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(_.a)(f.a.mark((function t(n){var r,a,i,o,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,t.next=4,R(e);case 4:a=t.sent,i=a.token,o=a.user,s=o.name,u=o.email,ae(i),n(le({name:s,token:i,email:u})),r=s,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(1),r=null,n(de());case 18:return t.prev=18,r&&c.b.success("\ud83e\udd1f Hello darling <<".concat(r,">> !"),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!r&&c.b.error("\ud83d\ude80 Wrong credentials!",{position:"top-center",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.finish(18);case 22:case"end":return t.stop()}}),t,null,[[1,14,18,22]])})));return function(e){return t.apply(this,arguments)}}()},fe=function(e){return function(){var t=Object(_.a)(f.a.mark((function t(n){var r,a,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.email,t.prev=1,t.next=4,A(e);case 4:i=t.sent,o=i.token,ae(o),n(le({name:r,token:o,email:a})),c.b.success("\ud83e\udd84 Hello darling ".concat(r," !"),{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),n(de()),c.b.warn("\u26a0\ufe0f".concat(a," Is right email?"),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},_e=n(77),ve=n.n(_e),je=function(){var e=Object(u.b)(),t=function(){var t=Object(_.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,fe(n);case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(K.a)({initialValues:{name:"",email:"",password:""},validationSchema:x,onSubmit:function(e){t(e)}});return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:ve.a.signIn_form,onSubmit:n.handleSubmit,children:[Object(r.jsxs)("div",{className:ve.a.signIn_input_wrapper,children:[Object(r.jsx)(ee.a,{id:"name",name:"name",label:"Name...",value:n.values.name,onChange:n.handleChange,error:n.touched.name&&Boolean(n.errors.name),helperText:n.touched.name&&n.errors.name}),Object(r.jsx)(ee.a,{id:"email",name:"email",label:"Email...",value:n.values.email,onChange:n.handleChange,error:n.touched.email&&Boolean(n.errors.email),helperText:n.touched.email&&n.errors.email}),Object(r.jsx)(ee.a,{id:"password",name:"password",label:"Password...",type:"password",value:n.values.password,onChange:n.handleChange,error:n.touched.password&&Boolean(n.errors.password),helperText:n.touched.password&&n.errors.password})]}),Object(r.jsx)($.a,{className:ve.a.signIn_button,color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})},ge=n(52),Oe=n.n(ge),xe=function(){var e=Object(u.b)(),t=function(){var t=Object(_.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,me(n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=Object(u.c)(ce),a=Object(K.a)({initialValues:{email:""!==n?n:"",password:""},validationSchema:w,onSubmit:function(e){return t(e)}});return Object(r.jsxs)("form",{className:Oe.a.signIn_form,onSubmit:a.handleSubmit,children:[Object(r.jsxs)("div",{className:Oe.a.signIn_input_wrapper,children:[Object(r.jsx)(ee.a,{className:Oe.a.signIn_input,id:"email",name:"email",label:"Email...",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(r.jsx)(ee.a,{className:Oe.a.signIn_input,id:"password",name:"password",label:"Password...",type:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password})]}),Object(r.jsx)($.a,{className:Oe.a.signIn_button,color:"primary",variant:"contained",type:"submit",children:"Submit"})]})},we=n(91),ye=n.n(we),ke=n(78),Ce=n.n(ke),Ne=function(e){var t=e.to,n=e.text,a=e.onClick;return Object(r.jsx)("div",{className:Ce.a.link_wrapper,children:Object(r.jsx)(d.b,{className:Ce.a.link_style,activeClassName:"SignOut"!==n?Ce.a.link_active_style:"",to:t,onClick:a&&a,children:n})})},Ie=function(){var e=Object(u.c)(oe),t=Object(u.c)(se),n=Object(u.b)(),a=function(){var e=Object(_.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,he(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:ye.a.navigation__wrapper,children:[""!==e&&Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)("span",{className:ye.a.usr_name,children:"<<".concat(t,">>")}),Object(r.jsx)(Ne,{to:"/login",text:"SignOut",onClick:a,name:t})]}),""===e&&Object(r.jsx)(Ne,{to:"/login",text:"LogIn"}),""===e&&Object(r.jsx)(Ne,{to:"/register",text:"Register"})]})},Ee=n(136),Se=n.n(Ee),Be=Object(L.a)("filter/addFilter",(function(e){return{payload:e}})),Le=function(){var e=Object(u.b)(),t=Object(K.a)({initialValues:{name:""},onChange:function(){}});return Object(r.jsx)("form",{className:Se.a.filter_form,onChangeCapture:function(t){return function(t){return e(Be(t))}(t.target.value)},children:Object(r.jsx)(ee.a,{fullWidth:!0,id:"name",name:"name",value:t.values.name,onChangeCapture:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name})})},Pe=(n(274),n(137)),Te=n.n(Pe),Me=n(138),Fe=n.n(Me),qe=function(){return Object(r.jsx)(Te.a,{className:Fe.a.loader,type:"Puff",color:"#0ca0f5",height:100,width:100,timeout:3e5})},He=function(e){return e.isLoading},Ae=n(61),Re=n.n(Ae);var De,Ve,ze=function(){var e=Object(u.c)(oe),t=Object(u.c)(He);return window.addEventListener("DOMContentLoaded",b),Object(a.useEffect)((function(){return window.addEventListener("DOMContentLoaded",b),function(){return window.removeEventListener("DOMContentLoaded",b)}}),[]),Object(r.jsx)(p.b,{path:"/",children:Object(r.jsxs)("div",{className:Re.a.wrapped_content_absolute,children:[Object(r.jsx)(Ie,{}),Object(r.jsxs)(p.d,{children:[""!==e&&Object(r.jsx)(p.b,{exact:!0,path:"/",children:Object(r.jsx)(p.a,{to:"/contacts"})}),""===e&&Object(r.jsx)(p.b,{exact:!0,path:"/contacts",children:Object(r.jsx)(p.a,{to:"/login"})}),Object(r.jsxs)(p.b,{exact:!0,path:"/login",children:[Object(r.jsx)(xe,{}),""!==e&&Object(r.jsx)(p.a,{to:"/contacts"})]}),Object(r.jsxs)(p.b,{exact:!0,path:"/register",children:[Object(r.jsx)(je,{}),""!==e&&Object(r.jsx)(p.a,{to:"/contacts"})]}),""!==e&&Object(r.jsxs)(p.b,{exact:!0,path:"/contacts",children:[Object(r.jsx)("h2",{className:Re.a.title__form,children:"Form Contact "}),Object(r.jsx)(ue,{}),Object(r.jsx)("h2",{className:Re.a.title_list,children:"Contacts list"}),Object(r.jsx)("h3",{className:Re.a.title_list_warn,children:"* Contact updates are only available with an empty filter *"}),Object(r.jsx)(Le,{}),Object(r.jsx)(Z,{}),t&&Object(r.jsx)(qe,{})]})]})]})})},Ue=n(19),Xe=n(58),We=n(76),Ye=n(139),Je=n(140),Qe=n.n(Je),Ge=n(24),Ze={name:"",token:"",email:""},Ke=Object(L.b)(Ze,(De={},Object(Ge.a)(De,le,(function(e,t){return t.payload})),Object(Ge.a)(De,de,(function(){return Ze})),Object(Ge.a)(De,pe,(function(e,t){return{name:"",token:"",email:e.email}})),Object(Ge.a)(De,be,(function(){return Ze})),De)),$e=Object(L.b)([],(Ve={},Object(Ge.a)(Ve,M,(function(e,t){var n,r=t.payload;e.find((function(e,t){e.id===r.id&&(n=t)}));var a=Object(h.a)(e);return a[n]=r,a})),Object(Ge.a)(Ve,P,(function(e,t){var n=t.payload;return[].concat(Object(h.a)(e),[n])})),Object(Ge.a)(Ve,T,(function(e,t){var n=t.payload;return Object(h.a)(e.filter((function(e){return e.id!==n})))})),Object(Ge.a)(Ve,F,(function(e,t){return t.payload})),Ve)),et=Object(L.b)("",Object(Ge.a)({},Be,(function(e,t){return t.payload}))),tt=Object(L.b)(!1,Object(Ge.a)({},q,(function(e,t){return t.payload}))),nt={key:"token",storage:Qe.a},rt=Object(Ue.combineReducers)({contacts:$e,filter:et,isLoading:tt,logIn:Object(We.a)(nt,Ke)}),at=Object(Ye.composeWithDevTools)({}),it=Object(Ue.createStore)(rt,at(Object(Ue.applyMiddleware)(Xe.a))),ot=Object(We.b)(it);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l.a,{loading:null,persistor:ot,children:Object(r.jsx)(u.a,{store:it,children:Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("canvas",{id:"canvas"}),Object(r.jsx)(ze,{})]}),Object(r.jsx)(c.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})})}),document.getElementById("root"))},51:function(e,t,n){e.exports={add_contact_form:"ContactForm_add_contact_form__2TE_D",add_contact_input:"ContactForm_add_contact_input__21tSg",add_contact_input_wrapper:"ContactForm_add_contact_input_wrapper__2pPwe",add_contact_button:"ContactForm_add_contact_button__11Kfc"}},52:function(e,t,n){e.exports={signIn_form:"SignIn_signIn_form__3Cnst",signIn_input:"SignIn_signIn_input__3OMgB",signIn_input_wrapper:"SignIn_signIn_input_wrapper__2zZ4j",signIn_button:"SignIn_signIn_button__FSTgP"}},61:function(e,t,n){e.exports={wrapped_content_absolute:"App_wrapped_content_absolute__3jJMr",title__form:"App_title__form__zw0sX",title_list:"App_title_list__2x-B5","rainbow-text-animation-rev":"App_rainbow-text-animation-rev__M0FD1","rainbow-text-animation":"App_rainbow-text-animation__1iuVF",title_list_warn:"App_title_list_warn__O_bx1","rainbow-text-simple-animation-rev":"App_rainbow-text-simple-animation-rev__2I5Cv","rainbow-text-simple-animation":"App_rainbow-text-simple-animation__3wXe_"}},77:function(e,t,n){e.exports={signIn_form:"RegistrationForm_signIn_form__fQZla",signIn_input:"RegistrationForm_signIn_input__3lCIE",signIn_input_wrapper:"RegistrationForm_signIn_input_wrapper__vtfu9",signIn_button:"RegistrationForm_signIn_button__2EnFm"}},78:function(e,t,n){e.exports={link_wrapper:"NavigationLink_link_wrapper__1T7mh",link_style:"NavigationLink_link_style__2da1T",link_active_style:"NavigationLink_link_active_style__3Vfxo"}},91:function(e,t,n){e.exports={navigation__wrapper:"NavigationLinks_navigation__wrapper__1Drd3",usr_name:"NavigationLinks_usr_name__3bI5L"}}},[[295,1,2]]]);
//# sourceMappingURL=main.2fb49eab.chunk.js.map