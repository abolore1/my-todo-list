(this["webpackJsonpall-app"]=this["webpackJsonpall-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),s=n(7),c=n.n(s),r=n(8),i=n(2),d=n(3),l=n(5),h=n(4),u=n(0),j=function(t){var e=t.todos,n=t.deleteTodo,o=e.length?e.map((function(t){return Object(u.jsx)("div",{className:"collection-item",children:Object(u.jsxs)("h5",{children:[t.content,Object(u.jsx)("i",{style:{cursor:"pointer",fontSize:35},className:"right material-icons red-text",onClick:function(){n(t.id)},children:"delete"})]})},t.id)})):Object(u.jsxs)("h5",{className:"center ",children:[Object(u.jsx)("em",{children:"you have no todo's left"}),"  "]});return Object(u.jsx)("div",{className:"todos collection",style:{fontFamily:"Fantasy",letterSpacing:1,width:"100%"},children:o})},b=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={content:""},t.handleChange=function(e){return t.setState({content:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),""===t.state.content?alert("Input Todo!!!"):(t.props.addTodo(t.state),t.setState({content:""}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("input",{type:"text",onChange:this.handleChange,placeholder:"Add To-do",autoFocus:!0,value:this.state.content}),Object(u.jsx)("button",{className:"btn right",style:{fontFamily:"Algerian",borderRadius:5},children:"Add Todo"})]})})}}]),n}(a.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={hours:new Date},t.displayDate=function(){var e,n,o=new Date,a=o.getHours(),s=o.getMinutes(),c=o.getSeconds();a<12?(n="Good morning",e="AM"):a>=12&&a<=16?(n="Good afternoon",e="PM"):a>16&&a<=18?(n="Good evening",e="PM"):(n="Good Night",e="PM"),t.setState({hours:o,hr:a,timeOfDay:n,mn:s,tm:c,period:e})},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.displayDate()}),1e3)}},{key:"render",value:function(){var t=this.state,e=t.hours,n=t.hr,o=t.timeOfDay,a=t.mn,s=t.tm,c=t.period;return Object(u.jsx)("div",{className:"time-font2",children:Object(u.jsxs)("h6",{children:[Object(u.jsx)("span",{children:o})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[e.toDateString()," ",n,":",a,":",s,c]})]})})}}]),n}(a.a.Component),f=(n(14),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.addTodo=function(e){e.id=Math.random();var n=[].concat(Object(r.a)(t.state.todos),[e]);t.setState({todos:n})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"todo-app container",style:{fontFamily:"sans-serif"},children:[Object(u.jsxs)("nav",{className:"nav-wrapper ",style:{backgroundColor:"#009999",borderRadius:8},children:[Object(u.jsx)("h3",{className:"white-text center",children:" Todo's List"}),Object(u.jsx)("div",{className:"right white-text ",children:Object(u.jsx)(p,{})})]}),Object(u.jsx)(j,{todos:this.state.todos,deleteTodo:this.deleteTodo}),Object(u.jsx)(b,{addTodo:this.addTodo})]})}}]),n}(o.Component));c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.410d553a.chunk.js.map