(this["webpackJsonphabbit-tracker"]=this["webpackJsonphabbit-tracker"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a(7),c=a.n(n),i=a(9),s=a(2),h=a(3),j=a(5),b=a(4),o=a(0),l=function(){return Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Job"})]})})},u=function(t){var e=t.characterData.map((function(e,a){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.job}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(o.jsx)("tbody",{children:e})},d=function(t){var e=t.characterData,a=t.removeCharacter;return Object(o.jsxs)("table",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{characterData:e,removeCharacter:a})]})},m=a(8),O=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var a=e.target,r=a.name,n=a.value;t.setState(Object(m.a)({},r,n))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"job",children:"Job"}),Object(o.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(o.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(r.Component),v=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(i.a)(t.state.characters),[e])})},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this.state.characters;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{characterData:t,removeCharacter:this.removeCharacter}),Object(o.jsx)(O,{handleSubmit:this.handleSubmit})]})}}]),a}(r.Component);a(15);c.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bf1ac7a2.chunk.js.map