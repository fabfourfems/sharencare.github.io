(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a.p+"static/media/ShareNCareLogo.df16f1df.png"},247:function(e,t,a){e.exports=a(541)},252:function(e,t,a){},253:function(e,t,a){},541:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),l=(a(252),a(17)),c=a(18),s=a(20),u=a(19),m=a(21),d=a(65),h=a(58),p={home:"/",signin:"/signin",signup:"/signup",foodbank:"/foodbank",res:"/res",data:"/data"},f=(a(253),a(122)),b=a.n(f),v=a(123),E=a.n(v),y=a(124),g=a.n(y),k=a(30),O=a.n(k),j=a(121),w=a.n(j),C={nav:{position:"static",backgroundColor:"#303C6C",color:"white"},rtext:{color:"white",marginLeft:"1000px"},login:{color:"white"}},x=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{style:C.nav},r.a.createElement(E.a,null,r.a.createElement("img",{src:w.a,height:"60px",alt:"logo"}),r.a.createElement(g.a,{style:C.rtext},r.a.createElement(h.b,{to:p.signin},r.a.createElement(O.a,{style:C.login},"My Portal"))))))}}]),t}(n.Component),I={nav:{position:"static",backgroundColor:"#303C6C",color:"white"},rtext:{color:"white",marginLeft:"900px"},navbutton:{color:"white",textDecoration:"underline",textTransform:"none"},login:{color:"white",textDecoration:"underline"}},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({name:e.name})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{style:I.nav},r.a.createElement(E.a,null,r.a.createElement("img",{src:w.a,height:"60px",alt:"logo"}),r.a.createElement(g.a,{style:I.rtext},this.name),r.a.createElement(O.a,{style:I.login},"Logout"))))}}]),t}(n.Component),S=a(66),N=a.n(S),R=a(67),P=a.n(R),D=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"homecard"},r.a.createElement(N.a,{id:"homecardbackground"},r.a.createElement(P.a,null,r.a.createElement("h2",null,this.props.name),r.a.createElement("h4",null,this.props.address),r.a.createElement("p",null," Mission:"),r.a.createElement("p",null," ",this.props.mission," "),r.a.createElement("br",null),r.a.createElement(h.b,{to:p.foodbank},r.a.createElement(O.a,{id:"seemore",variant:"contained",onClick:function(){return e.props.setFoodBank(e.props.info)}},"See More")))))}}]),t}(n.Component),M=Object(d.e)(D),A=a(50),F=a.n(A),W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-bar"},r.a.createElement(F.a,{value:this.props.value,placeholder:"Please enter a zipcode",onChange:function(t){e.props.onSearchQuery(t)},type:"search",label:"Zipcode",margin:"normal",variant:"outlined",style:{width:"100%"}}))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={foodBankInfo:e.foodBankInfo},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({foodBankInfo:e.foodBankInfo})}},{key:"makeCards",value:function(e){var t=this,a=[];return e?Object.keys(this.state.foodBankInfo).map(function(n,o){var i=t.state.foodBankInfo[n];Object.keys(i).map(function(e,t){0==t&&(i=i[e])}),console.log(i),i.Zipcode==e&&a.push(r.a.createElement(M,{key:o,name:i.Name,address:i.Address,mission:i.Mission,info:i,setFoodBank:t.props.setFoodBank}))}):Object.keys(this.state.foodBankInfo).map(function(e,n){var o=t.state.foodBankInfo[e];Object.keys(o).map(function(e,t){0==t&&(o=o[e])}),a.push(r.a.createElement(M,{key:n,name:o.Name,address:o.Address,mission:o.Mission,info:o,setFoodBank:t.props.setFoodBank}))}),a}},{key:"render",value:function(){var e=this.makeCards(this.props.zipcode);return r.a.createElement("div",null,e)}}]),t}(n.Component),H=a(171),K=a(239),Q=a.n(K),z=a(245),L=a(240),G=a(172),V=a(68),Z=a(6),_=a.n(Z),J=a(92),T=a(169),q=a.n(T),Y=a(244),$=a.n(Y),X=a(91),ee=a.n(X),te=a(79),ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getRowClassName=function(e){var t=e.index,n=a.props,r=n.classes,o=n.rowClassName,i=n.onRowClick;return _()(r.tableRow,r.flexContainer,o,Object(V.a)({},r.tableRowHover,-1!==t&&null!=i))},a.cellRenderer=function(e){var t=e.cellData,n=e.columnIndex,o=void 0===n?null:n,i=a.props,l=i.columns,c=i.classes,s=i.rowHeight,u=i.onRowClick;return r.a.createElement(q.a,{component:"div",className:_()(c.tableCell,c.flexContainer,Object(V.a)({},c.noClick,null==u)),variant:"body",style:{height:s},align:null!=o&&l[o].numeric?"right":"left"},t)},a.headerRenderer=function(e){var t,n=e.label,o=e.columnIndex,i=e.dataKey,l=e.sortBy,c=e.sortDirection,s=a.props,u=s.headerHeight,m=s.columns,d=s.classes,h=s.sort,p=(t={},Object(V.a)(t,te.c.ASC,"asc"),Object(V.a)(t,te.c.DESC,"desc"),t),f=m[o].disableSort||null==h?n:r.a.createElement($.a,{active:i===l,direction:p[c]},n);return r.a.createElement(q.a,{component:"div",className:_()(d.tableCell,d.flexContainer,d.noClick),variant:"head",style:{height:u},align:m[o].numeric?"right":"left"},f)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.columns,o=Object(G.a)(t,["classes","columns"]);return r.a.createElement(te.a,null,function(t){var i=t.height,l=t.width;return r.a.createElement(te.d,Object.assign({className:a.table,height:i,width:l},o,{rowClassName:e.getRowClassName}),n.map(function(t,n){var o,i=t.cellContentRenderer,l=void 0===i?null:i,c=t.className,s=t.dataKey,u=Object(G.a)(t,["cellContentRenderer","className","dataKey"]);return o=null!=l?function(t){return e.cellRenderer({cellData:l(t),columnIndex:n})}:e.cellRenderer,r.a.createElement(te.b,Object.assign({key:s,headerRenderer:function(t){return e.headerRenderer(Object(L.a)({},t,{columnIndex:n}))},className:_()(a.flexContainer,c),cellRenderer:o,dataKey:s},u))}))})}}]),t}(r.a.PureComponent);ae.defaultProps={headerHeight:56,rowHeight:56};var ne=Object(J.withStyles)(function(e){return{table:{fontFamily:e.typography.fontFamily},flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box"},tableRow:{cursor:"pointer"},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"}}})(ae),re=[["Frozen yoghurt",159,6],["Ice cream sandwich",237,9],["Eclair",262,16],["Cupcake",305,3.7],["Gingerbread",356,6]],oe=0;function ie(e,t,a){return{id:oe+=1,item:e,catgory:t,expiration_date:a}}for(var le=[],ce=0;ce<200;ce+=1){var se=re[Math.floor(Math.random()*re.length)];le.push(ie.apply(void 0,Object(z.a)(se)))}var ue=function(){return r.a.createElement(ee.a,{style:{height:300,width:"100%"}},r.a.createElement(ne,{rowCount:le.length,rowGetter:function(e){var t=e.index;return le[t]},onRowClick:function(e){return console.log(e)},columns:[{width:500,label:"Item",dataKey:"item"},{width:500,label:"Category",dataKey:"category"},{width:500,label:"Expriration Date",dataKey:"expiration_date"}]}))};H.b.addAdapter(Q.a);var me=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("h2",{id:"title"},"Supply Tracker"),r.a.createElement(H.a,{id:"categorychart",data:[["Produce",16],["Canned Food",100],["Pantry Goods",50]]})),r.a.createElement("div",{id:"lowon"},r.a.createElement(N.a,null,r.a.createElement(P.a,{id:"setOrange",className:"content"},r.a.createElement("h1",null,"Low On"),r.a.createElement("h3",null,"Produce"))),r.a.createElement(N.a,{id:"expiring"},r.a.createElement(P.a,{id:"setYellow",className:"content"},r.a.createElement("h1",null,"Expiring Soon"),r.a.createElement("h3",null,"50 items expiring soon"),r.a.createElement(O.a,{variant:"contained"},"Find out what"))))),r.a.createElement("div",{className:"table"},r.a.createElement(O.a,{variant:"contained",id:"add"},"Add Item"),r.a.createElement(ue,null)),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component),de=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onSearchQuery=function(e){a.setState({searchQuery:e.target.value})},a.state={searchQuery:"",foodBankInfo:e.foodBankInfo},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{onSearchQuery:this.onSearchQuery}),r.a.createElement(U,{zipcode:this.state.searchQuery,foodBankInfo:this.state.foodBankInfo,setFoodBank:this.props.setFoodBank}))}}]),t}(n.Component),he=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authUnsub=this.props.firebase.auth().onAuthStateChanged(function(t){t&&(e.mounted=!0,e.props.history.push(p.res))}),this.state={email:"",password:""}}},{key:"componentWillUnmount",value:function(){this.authUnsub(),this.mounted=!1}},{key:"signin",value:function(){var e=this;this.props.firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(t){e.props.routes.push(p.res)}).catch(function(e){var t=e.code,a=e.message;window.alert("error code: ".concat(t,"\nerror message: ").concat(a))})}},{key:"render",value:function(){var e=this,t={width:"100%"};return r.a.createElement("div",{className:"form"},r.a.createElement("h3",null,"Sign in"),r.a.createElement(F.a,{label:"Email Address",placeholder:"example@gmail.com",type:"email",name:"email",margin:"normal",variant:"outlined",style:t,onChange:function(t){e.setState({email:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(F.a,{label:"Password",type:"password",name:"Password",margin:"normal",variant:"outlined",style:t,onChange:function(t){e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",color:"primary",className:"continue",onClick:function(){return e.signin()}},"Continue"))}}]),t}(n.Component),pe=Object(d.e)(he),fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authUnsub=this.props.firebase.auth().onAuthStateChanged(function(t){t&&(e.mounted=!0,e.props.history.push(p.res))}),this.state={email:"",password:"",passwordConfirmation:""}}},{key:"componentWillUnmount",value:function(){this.authUnsub(),this.mounted=!1}},{key:"signup",value:function(){var e=this;this.state.password===this.state.passwordConfirmation?this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(function(t){var a=t.user;e.props.firebase.database().ref("foodbanks/".concat(a.uid,"/created")).set(!0);e.props.history.push(p.res)}).catch(function(e){var t=e.code,a=e.message;window.alert("error code: ".concat(t,"\nerror message: ").concat(a))}):window.alert("passwords do not match!")}},{key:"render",value:function(){var e=this,t={width:"100%"};return r.a.createElement("div",{className:"form"},r.a.createElement("h3",null,"Create an account"),r.a.createElement(F.a,{label:"Email Address",placeholder:"example@gmail.com",type:"email",name:"email",margin:"normal",variant:"outlined",style:t,onChange:function(t){e.setState({email:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(F.a,{label:"Password",type:"password",name:"Password",margin:"normal",variant:"outlined",style:t,onChange:function(t){e.setState({password:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(F.a,{label:"Confirm password",type:"password",name:"Confirm password",margin:"normal",variant:"outlined",style:t,onChange:function(t){e.setState({passwordConfirmation:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",color:"primary",className:"continue",onClick:function(){return e.signup()}},"Continue"))}}]),t}(n.Component),be=Object(d.e)(fe),ve=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.firebase.auth().currentUser}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(me,null))}}]),t}(n.Component),Ee=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"foodcard"},r.a.createElement(N.a,{id:"foodcardbackground"},r.a.createElement(P.a,null,r.a.createElement("h4",null,"Apples"),r.a.createElement("h4",null,"Quantity: 50"))))}}]),t}(n.Component),ye=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"",address:"",mission:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){console.log(this.props.info),this.setState({name:e.name,address:e.address,mission:e.mission})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,this.name),r.a.createElement("p",null,"Mission:"),r.a.createElement("p",null,this.mission),r.a.createElement("p",null,"Location:"),r.a.createElement("p",null,this.address),r.a.createElement("p",{className:"paragraph"},"What we need"),r.a.createElement(Ee,null),r.a.createElement("p",{className:"paragraph"},"What we have"),r.a.createElement(Ee,null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(O.a,null,"Give!"),r.a.createElement(O.a,null,"Volunteer!")))}}]),t}(n.Component),ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).setFoodBank=function(e){a.setState({info:e})},a.state={foodBankInfo:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.database().ref("foodbanks").on("value",function(t){t&&e.setState({foodBankInfo:t.val(),info:{}})})}},{key:"signin",value:function(){return r.a.createElement(pe,{firebase:this.props.firebase})}},{key:"signup",value:function(){return r.a.createElement(be,{firebase:this.props.firebase})}},{key:"browseView",value:function(){return r.a.createElement(de,{foodBankInfo:this.state.foodBankInfo,setFoodBank:this.setFoodBank})}},{key:"foodbankHome",value:function(){return r.a.createElement(ve,{firebase:this.props.firebase})}},{key:"foodbankInfo",value:function(){return r.a.createElement(ye,{info:this.state.foodBankInfo})}},{key:"matchRoute",value:function(){var e=this;return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:p.signin,component:function(){return e.signin()}}),r.a.createElement(d.a,{exact:!0,path:p.signup,component:function(){return e.signup()}}),r.a.createElement(d.a,{exact:!0,path:p.home,component:function(){return e.browseView()}}),r.a.createElement(d.a,{exact:!0,path:p.foodbank,component:function(){return e.foodbankInfo()}}),r.a.createElement(d.a,{exact:!0,path:p.res,component:function(){return e.foodbankHome()}}))}},{key:"navbar",value:function(){return this.props.firebase.auth().currentUser?r.a.createElement(B,null):r.a.createElement(x,null)}},{key:"render",value:function(){return r.a.createElement(h.a,null,this.navbar(),this.matchRoute())}}]),t}(n.Component),ke=a(170),Oe=a.n(ke);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Oe.a.initializeApp({apiKey:"AIzaSyCvcEfWBtQI2-Kqtav1vgSZ_DaHfpbp3Gs",authDomain:"sharencare-a9b3e.firebaseapp.com",databaseURL:"https://sharencare-a9b3e.firebaseio.com",projectId:"sharencare-a9b3e",storageBucket:"sharencare-a9b3e.appspot.com",messagingSenderId:"342027257585"}),i.a.render(r.a.createElement(ge,{firebase:Oe.a}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[247,1,2]]]);
//# sourceMappingURL=main.3ab4587e.chunk.js.map