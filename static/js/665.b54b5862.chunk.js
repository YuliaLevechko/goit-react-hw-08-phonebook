"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[665],{4665:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(4942),a=n(1413),c=n(9439),o=n(2791),i=n(4420),s=n(3553),u=function(e){return e.contacts.contacts},l=function(e){return e.filter},m=(0,s.P1)([u,l],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),d={form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",label:"ContactForm_label__-cVXI",btn:"ContactForm_btn__wll+u"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},_=n(1470),f=n(184),b=function(){var e=(0,i.I0)(),t=(0,i.v9)(u),n=(0,o.useState)({name:"",number:""}),s=(0,c.Z)(n,2),l=s[0],m=s[1],b=function(e){m((0,a.Z)((0,a.Z)({},l),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,f.jsxs)("form",{className:d.contact,onSubmit:function(n){n.preventDefault(),t&&t.some((function(e){return e.name.toLowerCase()===l.name.toLowerCase()||e.number===l.number}))?alert("Contact with the same name or number already exists!"):(e((0,_.R5)((0,a.Z)((0,a.Z)({},l),{},{id:h()}))),m({name:"",number:""}))},children:[(0,f.jsx)("h3",{children:"Name"}),(0,f.jsx)("input",{className:d.inpute,type:"text",name:"name",value:l.name,onChange:b,required:!0,placeholder:"Name"}),(0,f.jsx)("h3",{children:"Number"}),(0,f.jsx)("input",{className:d.inpute,type:"tel",name:"number",value:l.number,onChange:b,required:!0,placeholder:"Phone number"}),(0,f.jsx)("button",{className:d.add,type:"submit",children:"Add contact"})]})},p={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",itemName:"ContactList_itemName__6OYsD"},v=function(){var e=(0,i.I0)(),t=(0,i.v9)(m);return(0,f.jsx)("ul",{className:p.item,children:t&&t.map((function(t){return(0,f.jsxs)("li",{className:p.list,children:[(0,f.jsxs)("div",{className:p.block,children:[t.name," : ",t.number]}),(0,f.jsx)("button",{className:p.delete,onClick:function(){return n=t.id,void e((0,_.$k)(n));var n},children:"Delete"})]},t.id)}))})},x=n(4731),C={label:"Filter_label__vEd1E",input:"Filter_input__N7T3z"},j=function(){var e=(0,i.I0)(),t=(0,i.v9)(l);return(0,f.jsx)("input",{className:C.search,type:"text",value:t,onChange:function(t){e((0,x.T)(t.target.value))},placeholder:"Search contacts"})},N=function(){var e=(0,i.v9)((function(e){return e.contacts})),t=e.error,n=e.contacts,r=(0,i.I0)();return(0,o.useEffect)((function(){r((0,_.VC)())}),[r]),(0,f.jsxs)("div",{className:"container",children:[t&&(0,f.jsxs)("p",{children:[" ",t," "]}),(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(b,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)("h4",{children:"Find contacts by name"}),(0,f.jsx)(j,{}),n&&(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=665.b54b5862.chunk.js.map