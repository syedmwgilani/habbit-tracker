(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{13:function(e,t){e.exports={getNestedVal:function(e,t){return t.reduce((function(e,t,a){return e[t]}),e)},getInnerObj:function(e,t){var a=t.slice(0,t.length-1);return this.getNestedVal(e,a)},setNestedVal:function(e,t,a){return t.reduce((function(e,t,n,c){return n===c.length-1?(e[t]=a,e):e[t]}),e)},generateUIDKey:function(e){for(var t=Math.floor(1e16*Math.random()).toString();e[t];)t=Math.floor(1e16*Math.random()).toString();return t},addPrefix:function(e,t,a){return e()?t:a+t},objectIsEmpty:function(e){return 0===Object.keys(e).length},dot:function(e){for(var t=!1,a=arguments.length,n=new Array(a>1?a-1:0),c=1;c<a;c++)n[c-1]=arguments[c];return n.reduce((function(a,n){return t?e:"undefined"===typeof a[n]||null===a[n]?(t=!0,e):a[n]}))}}},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(5),r=a(2),i=(a(19),a(0));function s(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Habit Tracker"})}),Object(i.jsxs)("nav",{children:[Object(i.jsx)(c.b,{className:"tab",to:"/habit-tracker/habits",children:"Habits"}),Object(i.jsx)(c.b,{className:"tab",to:"/habit-tracker/habit-template",children:"Habit Template"}),Object(i.jsx)(c.b,{className:"tab",to:"/habit-tracker/habit-templates",children:"Habit Templates"})]}),Object(i.jsx)(r.a,{}),Object(i.jsx)("footer",{children:Object(i.jsxs)("span",{children:["Explore more projects made by me ",Object(i.jsx)("a",{href:"https://github.com/syedmwgilani",title:"github",target:"_blank",rel:"noreferrer",children:"Github"}),"."]})})]})}var l=a(4),d=a(6),o=a(7),u=a(9),b=a(8),h=a(1),j=(a(21),a(13).addPrefix);function O(e){var t={width:(e.size<=100?e.size:100)+"%"};return Object(i.jsx)("div",{className:"inner-bar",style:t,children:Object(i.jsxs)("span",{className:"inner-bar-text",children:[e.name," ",e.size,"%"]})})}function y(e){return Object(i.jsx)("div",{className:"progress-bar",onClick:e.onClick,children:Object(i.jsx)(O,{size:e.progress,name:e.name})})}function m(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{progress:e.progress,onClick:e.onClick,name:e.name}),Object(i.jsxs)("p",{children:["Daily Occurence: ",e.dailyOccurrence]})]})}var p=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);var c=new Date,r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c.getDay()],i=(c.getMonth()+1).toString(),s=c.getDate().toString(),l=c.getFullYear()+"_"+j((function(){return i.length>1}),i,"0")+"_"+j((function(){return s.length>1}),s,"0"),o=j((function(){return i.length>1}),i,"0")+"/"+j((function(){return s.length>1}),s,"0")+"/"+c.getFullYear().toString().substr(-2),u=localStorage.getItem("activeHabitTemplates"),b=JSON.parse(u);console.log("LOADED activeHabitTemp: ",b);var h={};if(b){var O=localStorage.getItem("habits_"+l);if(null===O)h=Object.keys(b).reduce((function(e,t){if(b[t].weeklyOccurrence[r]){var a={};return a.name=b[t].name,a.dailyOccurrence=b[t].dailyOccurrence,a.progress=0,e[t]=a,e}return e}),{});else{var y=JSON.parse(O);h=Object.keys(b).reduce((function(e,t){var a=y[t];return a&&b[t].weeklyOccurrence[r]?(a.name=b[t].name,a.dailyOccurrence=b[t].dailyOccurrence,e[t]=a,e):b[t].weeklyOccurrence[r]?((a={}).name=b[t].name,a.dailyOccurrence=b[t].dailyOccurrence,a.progress=0,e[t]=a,e):e}),{})}}return n.state={dayOfTheWeek:r,dateKeyString:l,dateFormattedString:o,habits:h},console.log("CREATED Habit state: ",n.state),n.saveHabitLocalStorage(),n}return Object(o.a)(a,[{key:"saveHabitLocalStorage",value:function(){var e=JSON.stringify(this.state.habits);localStorage.setItem("habits_"+this.state.dateKeyString,e),console.log("SAVED Habits",e)}},{key:"incrementProgress",value:function(e){console.log("---\nCLICKED habits['".concat(e,"']"));var t=Object(l.a)({},this.state.habits),a=t[e],n=100/a.dailyOccurrence;a.progress=a.progress+n,console.log("UPDATED ",t[e]),this.setState({habits:t},this.saveHabitLocalStorage.bind(this))}},{key:"render",value:function(){var e=this,t=this.state.habits,a=Object.keys(t).map((function(a,n){return Object(i.jsx)("li",{children:Object(i.jsx)(m,Object(l.a)(Object(l.a)({},t[a]),{},{onClick:function(t){return e.incrementProgress(a)}}))},a)}));return Object(i.jsxs)("main",{className:"grid-wrapper",children:[Object(i.jsx)("div",{className:""}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsxs)("p",{children:[Object(i.jsxs)("b",{children:["Todays (",this.state.dateFormattedString,") Habits:"]})," ",this.state.dayOfTheWeek]}),Object(i.jsx)("ul",{children:a})]}),Object(i.jsx)("div",{className:""})]})}}]),a}(h.Component);var x=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Weekly Occurence: "}),Object(i.jsxs)("label",{htmlFor:"mondayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"mondayId",name:"weeklyOccurrence.Monday",checked:e.Monday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Monday"})]}),Object(i.jsxs)("label",{htmlFor:"tuesdayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"tuesdayId",name:"weeklyOccurrence.Tuesday",checked:e.Tuesday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Tuesday"})]}),Object(i.jsxs)("label",{htmlFor:"wednesdayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"wednesdayId",name:"weeklyOccurrence.Wednesday",checked:e.Wednesday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Wednesday"})]}),Object(i.jsxs)("label",{htmlFor:"thursdayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"thursdayId",name:"weeklyOccurrence.Thursday",checked:e.Thursday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Thursday"})]}),Object(i.jsxs)("label",{htmlFor:"fridayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"fridayId",name:"weeklyOccurrence.Friday",checked:e.Friday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Friday"})]}),Object(i.jsxs)("label",{htmlFor:"saturdayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"saturdayId",name:"weeklyOccurrence.Saturday",checked:e.Saturday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Saturday"})]}),Object(i.jsxs)("label",{htmlFor:"sundayId",children:[Object(i.jsx)("input",{type:"checkbox",id:"sundayId",name:"weeklyOccurrence.Sunday",checked:e.Sunday,onChange:function(t){return e.onChange(t)}}),Object(i.jsx)("span",{children:"Sunday"})]})]})},g=a(13),v=g.setNestedVal,f=g.generateUIDKey,k=g.dot,S=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:k("",e,"name"),weeklyOccurrence:{Monday:k(!1,e,"weeklyOccurrence","Monday"),Tuesday:k(!1,e,"weeklyOccurrence","Tuesday"),Wednesday:k(!1,e,"weeklyOccurrence","Wednesday"),Thursday:k(!1,e,"weeklyOccurrence","Thursday"),Friday:k(!1,e,"weeklyOccurrence","Friday"),Saturday:k(!1,e,"weeklyOccurrence","Saturday"),Sunday:k(!1,e,"weeklyOccurrence","Sunday")},dailyOccurrence:k(0,e,"dailyOccurrence")},n}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name,c=Object(l.a)({},this.state),r=n.split(".");v(c,r,a),this.setState(c)}},{key:"saveStateToLocalStorage",value:function(){var e=localStorage.getItem("activeHabitTemplates");e||(e=JSON.stringify({}),localStorage.setItem("activeHabitTemplates",e));var t=JSON.parse(e);t[f(t)]=this.state,localStorage.setItem("activeHabitTemplates",JSON.stringify(t))}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Habit Template"}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{htmlFor:"habitNameId",children:[Object(i.jsx)("span",{children:"Name:"}),Object(i.jsx)("input",{type:"text",id:"habitNameId",name:"name",value:this.state.name,onChange:function(t){return e.handleInputChange(t)}})]})}),Object(i.jsx)("div",{children:Object(i.jsx)(x,Object(l.a)(Object(l.a)({},this.state.weeklyOccurrence),{},{onChange:function(t){return e.handleInputChange(t)}}))}),Object(i.jsx)("div",{children:Object(i.jsxs)("label",{htmlFor:"dailyOccurrenceId",children:[Object(i.jsx)("span",{children:"Daily Occurrence:"}),Object(i.jsx)("input",{type:"number",id:"dailyOccurrenceId",name:"dailyOccurrence",value:this.state.dailyOccurrence,onChange:function(t){return e.handleInputChange(t)}})]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:function(t){return e.saveStateToLocalStorage()},children:"Save"})})]})}}]),a}(h.Component);function T(e){return Object(i.jsxs)("div",{children:[e.day,": ",e.vals]},e.keyVal)}var I=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(d.a)(this,a),n=t.call(this,e);var c=localStorage.getItem("activeHabitTemplates"),r=JSON.parse(c);return n.state={activeHabitTemp:r},console.log("CREATED HabitTemplates state: ",n.state),n}return Object(o.a)(a,[{key:"saveToLocalStorage",value:function(e){console.log("saveToLocalStorage "+e);var t=JSON.stringify(this.state[e]);localStorage.setItem("activeHabitTemplates",t)}},{key:"handleRemove",value:function(e,t){var a=Object(l.a)({},this.state[t]);console.log("handleRemove for "+t," ID: "+e),console.log("BEFORE DELETE state ",this.state[t]),delete a[e],"activeHabitTemp"===t&&this.setState({activeHabitTemp:a},this.saveToLocalStorage.bind(this,"activeHabitTemp"))}},{key:"render",value:function(){var e=this,t=this.state.activeHabitTemp,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=Object.keys(t).map((function(n){return Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{children:t[n].name}),Object(i.jsxs)("div",{children:["Daily Occurence: ",t[n].dailyOccurrence]}),Object(i.jsx)("ul",{children:a.map((function(e,a){return Object(i.jsx)("li",{children:Object(i.jsx)(T,{day:e,vals:t[n].weeklyOccurrence[e]+""})},a)}))}),Object(i.jsx)("button",{type:"button",onClick:function(){return e.handleRemove(n,"activeHabitTemp")},children:"Remove"})]},n)}));return Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("div",{className:"margin1"}),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(i.jsx)("h3",{children:"Habits Page"}),Object(i.jsx)("h4",{children:"Active Habits:"}),Object(i.jsx)("ul",{children:n})]}),Object(i.jsx)("div",{className:"margin2"})]})}}]),a}(h.Component),C=(a(22),document.getElementById("root"));Object(n.render)(Object(i.jsx)(c.a,{children:Object(i.jsx)(r.d,{children:Object(i.jsxs)(r.b,{path:"/habit-tracker/",element:Object(i.jsx)(s,{}),children:[Object(i.jsx)(r.b,{path:"habits",element:Object(i.jsx)(p,{})}),Object(i.jsx)(r.b,{path:"habit-template",element:Object(i.jsx)(S,{})}),Object(i.jsx)(r.b,{path:"habit-templates",element:Object(i.jsx)(I,{})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)("main",{style:{padding:"1rem",textAlign:"center"},children:Object(i.jsxs)("p",{children:["Sorry you have navigated to a page that does not exist. Try going to the ",Object(i.jsx)(c.b,{to:"/habit-tracker/habits",children:"Habits page"})," instead."]})})})]})})}),C)}},[[23,1,2]]]);
//# sourceMappingURL=main.b644ceaa.chunk.js.map