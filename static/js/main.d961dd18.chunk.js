(this["webpackJsonphabit-tracker"]=this["webpackJsonphabit-tracker"]||[]).push([[0],{14:function(e,n){e.exports={getNestedVal:function(e,n){return n.reduce((function(e,n,c){return e[n]}),e)},getInnerObj:function(e,n){var c=n.slice(0,n.length-1);return this.getNestedVal(e,c)},setNestedVal:function(e,n,c){return n.reduce((function(e,n,t,r){return t===r.length-1?(e[n]=c,e):e[n]}),e)}}},15:function(e,n,c){},16:function(e,n,c){"use strict";c.r(n);var t=c(1),r=c(2),a=c(4),d=c.n(a),s=c(5),i=c(6),u=c(8),h=c(7),l=c(0);var y=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Weekly Occurence: "}),Object(l.jsxs)("label",{htmlFor:"mondayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"mondayId",name:"weeklyOccurrence.monday",checked:e.monday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Monday"})]}),Object(l.jsxs)("label",{htmlFor:"tuesdayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"tuesdayId",name:"weeklyOccurrence.tuesday",checked:e.tuesday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Tuesday"})]}),Object(l.jsxs)("label",{htmlFor:"wednesdayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"wednesdayId",name:"weeklyOccurrence.wednesday",checked:e.wednesday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Wednesday"})]}),Object(l.jsxs)("label",{htmlFor:"thursdayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"thursdayId",name:"weeklyOccurrence.thursday",checked:e.thursday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Thursday"})]}),Object(l.jsxs)("label",{htmlFor:"fridayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"fridayId",name:"weeklyOccurrence.friday",checked:e.friday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Friday"})]}),Object(l.jsxs)("label",{htmlFor:"saturdayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"saturdayId",name:"weeklyOccurrence.saturday",checked:e.saturday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Saturday"})]}),Object(l.jsxs)("label",{htmlFor:"sundayId",children:[Object(l.jsx)("input",{type:"checkbox",id:"sundayId",name:"weeklyOccurrence.sunday",checked:e.sunday,onChange:function(n){return e.onChange(n)}}),Object(l.jsx)("span",{children:"Sunday"})]})]})},j=c(14).setNestedVal,b=function(e){Object(u.a)(c,e);var n=Object(h.a)(c);function c(e){var t;return Object(s.a)(this,c),(t=n.call(this,e)).state={name:e.name,numberOfDays:e.numberOfDays,weeklyOccurrence:{monday:e.weeklyOccurrence.monday,tuesday:e.weeklyOccurrence.tuesday,wednesday:e.weeklyOccurrence.wednesday,thursday:e.weeklyOccurrence.thursday,friday:e.weeklyOccurrence.friday,saturday:e.weeklyOccurrence.saturday,sunday:e.weeklyOccurrence.sunday},dailyOccurrence:e.dailyOccurrence,reminder:e.reminder,reminderTimes:e.reminderTimes},t}return Object(i.a)(c,[{key:"handleInputChange",value:function(e){var n=e.target,c="checkbox"===n.type?n.checked:n.value,r=n.name,a=Object(t.a)({},this.state),d=r.split(".");j(a,d,c),this.setState(a)}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Habit Template"}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:"habitNameId",children:[Object(l.jsx)("span",{children:"Name:"}),Object(l.jsx)("input",{type:"text",id:"habitNameId",name:"name",value:this.state.name,onChange:function(n){return e.handleInputChange(n)}})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:"numberOfDaysId",children:[Object(l.jsx)("span",{children:"Number of Days:"}),Object(l.jsx)("input",{type:"number",id:"numberOfDaysId",name:"numberOfDays",value:this.state.numberOfDays,onChange:function(n){return e.handleInputChange(n)}})]})}),Object(l.jsx)("div",{children:Object(l.jsx)(y,Object(t.a)(Object(t.a)({},this.state.weeklyOccurrence),{},{onChange:function(n){return e.handleInputChange(n)}}))}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:"dailyOccurrenceId",children:[Object(l.jsx)("span",{children:"Daily Occurrence:"}),Object(l.jsx)("input",{type:"number",id:"dailyOccurrenceId",name:"dailyOccurrence",value:this.state.dailyOccurrence,onChange:function(n){return e.handleInputChange(n)}})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:"reminderId",children:[Object(l.jsx)("span",{children:"Reminder:"}),Object(l.jsx)("input",{type:"checkbox",id:"reminderId",name:"reminder",checked:this.state.reminder,onChange:function(n){return e.handleInputChange(n)}})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:"reminderTimesId",children:[Object(l.jsx)("span",{children:"Reminder Time:"}),Object(l.jsx)("input",{type:"text",id:"reminderTimesId",name:"reminderTimes",value:this.state.reminderTimes,onChange:function(n){return e.handleInputChange(n)}})]})})]})}}]),c}(r.Component);c(15);d.a.render(Object(l.jsx)(b,Object(t.a)({},{name:"Push ups",numberOfDays:32,weeklyOccurrence:{monday:!1,tuesday:!1,wednesday:!0,thursday:!1,friday:!0,saturday:!1,sunday:!1},dailyOccurrence:2,reminder:!0,reminderTimes:"8:30 PM"})),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d961dd18.chunk.js.map