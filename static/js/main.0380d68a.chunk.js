(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(8),l=c.n(n),o=(c(13),c(14),c(15),c(4)),i=c(2),r=c(7),d=c(0),j=function(e){var t=e.todo,c=e.removeElement,a=e.completeTask;return Object(d.jsxs)("div",{className:"task-header",children:[Object(d.jsx)("input",{type:"checkbox",className:"task-checkbox",id:t.id}),Object(d.jsx)("label",{htmlFor:t.id,className:"task-label",onClick:function(){return a(t)},children:Object(d.jsx)("span",{style:t.completed?Object(r.a)({},{background:"url(/src/images/icon-check.svg) center no-repeat, linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}):null,className:"circle"})}),Object(d.jsx)("span",{className:"task",style:t.completed?Object(r.a)({},{textDecoration:"1px hsl(233, 14%, 35%) line-through",color:"hsl(233, 14%, 35%)"}):null,children:t.title}),Object(d.jsx)("span",{className:"cross",onClick:function(){return c(t)}})]})},u=c(19),m=function(){var e=s.a.useState([{id:Object(u.a)(),title:"Sample Todo",completed:!1}]),t=Object(i.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){console.log(c)}),[c]);var l=Object(a.useState)(!0),r=Object(i.a)(l,2),m=r[0],b=r[1],p=Object(a.useState)(!1),O=Object(i.a)(p,2),h=O[0],x=O[1],f=Object(a.useState)(!1),k=Object(i.a)(f,2),v=k[0],N=k[1],g=Object(a.useState)(0),C=Object(i.a)(g,2),y=C[0],S=C[1],F=function(e){var t=Object(o.a)(c),a=t.indexOf(e);t.splice(a,1),n(t)},T=function(e){var t,a=Object(o.a)(c),s=a.indexOf(e),l=a[s];for(l.completed?l.completed=!1:l.completed=!0,a[s]=l,n(a),S(0),t=0;t<c.length;t++)c[t].completed||S(y+1)};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"to-do-header",children:[Object(d.jsx)("h1",{children:"TODO"}),Object(d.jsx)("div",{className:"theme",onClick:function(){document.body.classList.toggle("theme-light")}})]}),Object(d.jsx)("div",{className:"input-task",children:Object(d.jsx)("input",{type:"text",className:"form-control add-task",placeholder:"Create a new todo...",onChange:function(){var e=document.querySelector(".add-task");e.addEventListener("keypress",(function(t){13===t.charCode&&e.value.length>0&&(n((function(t){return[].concat(Object(o.a)(t),[{id:Object(u.a)(),title:e.value,completed:!1}])})),e.value="")}))}})}),Object(d.jsx)("div",{children:m?c.map((function(e,t){return Object(d.jsx)(j,{todo:e,removeElement:F,completeTask:T},t)})):h?c.map((function(e,t){return e.completed?null:Object(d.jsx)(j,{todo:e,removeElement:F,completeTask:T},t)})):v?c.map((function(e,t){return e.completed?Object(d.jsx)(j,{todo:e,removeElement:F,completeTask:T},t):null})):void 0}),Object(d.jsxs)("div",{className:"task-status",children:[Object(d.jsxs)("form",{className:"status",children:[Object(d.jsx)("input",{type:"radio",className:"task-box",id:"all",name:"status",defaultChecked:!0}),Object(d.jsx)("label",{htmlFor:"all",className:"stat",onClick:function(){b(!0),x(!1),N(!1)},children:"All"}),Object(d.jsx)("input",{type:"radio",className:"task-box",id:"active",name:"status"}),Object(d.jsx)("label",{htmlFor:"active",className:"stat",onClick:function(){b(!1),x(!0),N(!1)},children:"Active "}),Object(d.jsx)("input",{type:"radio",className:"task-box",id:"completed",name:"status"}),Object(d.jsx)("label",{htmlFor:"completed",className:"stat",onClick:function(){b(!1),x(!1),N(!0)},children:"Completed"})]}),Object(d.jsx)("p",{className:"task-status-item",onClick:function(){var e,t=Object(o.a)(c);for(e=0;e<t.length;e++)t[e].completed&&t.splice(e,1);n(t)},children:"Clear completed"})]})]})};var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),a(e),s(e),n(e),l(e)}))};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.0380d68a.chunk.js.map