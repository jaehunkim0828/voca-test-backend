(this["webpackJsonpvoca-test"]=this["webpackJsonpvoca-test"]||[]).push([[0],{33:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c(1),i=c(8),a=c.n(i),r=c(62),l=c(12),o=c(25),j=(c(33),c(9)),d=c.n(j),b=c(11),u=c(7),h=c(2),v=c(6),O=c.n(v),m=c(61),x=c(26),f=c(0);var p=Object(m.a)((function(e){var t,c,i="http://3.34.140.114/:5000/voca",a=e.cookies,r=Object(n.useRef)(),l=Object(n.useState)(!0),o=Object(h.a)(l,2),j=o[0],v=o[1],m=Object(n.useState)(!1),p=Object(h.a)(m,2),g=p[0],N=p[1],y=Object(n.useState)(""),w=Object(h.a)(y,2),S=w[0],D=w[1],F=Object(n.useState)(""),C=Object(h.a)(F,2),k=C[0],A=C[1],z=Object(n.useState)([]),B=Object(h.a)(z,2),W=B[0],I=B[1],T=Object(n.useState)(""),E=Object(h.a)(T,2),R=E[0],L=E[1],M=Object(n.useState)(""),q=Object(h.a)(M,2),J=q[0],P=q[1],_=Object(n.useState)([]),Q=Object(h.a)(_,2),Y=Q[0],K=Q[1],X=Object(n.useState)([]),Z=Object(h.a)(X,2),G=Z[0],H=Z[1],U=Object(n.useState)(""),V=Object(h.a)(U,2),$=V[0],ee=V[1],te=Object(n.useState)([]),ce=Object(h.a)(te,2),se=ce[0],ne=ce[1],ie=Object(n.useState)({}),ae=Object(h.a)(ie,2),re=ae[0],le=ae[1],oe=Object(n.useState)({}),je=Object(h.a)(oe,2),de=je[0],be=je[1],ue=Object(n.useState)(""),he=Object(h.a)(ue,2),ve=he[0],Oe=he[1],me=Object(n.useState)([]),xe=Object(h.a)(me,2),fe=xe[0],pe=xe[1],ge=function(e,t,c){for(var n,i=t.slice(),a=c.slice(),r=i.length;0!==r;){n=Math.floor(Math.random()*r),r--;var l=[i[n],i[r]];i[r]=l[0],i[n]=l[1];var o=[a[n],a[r]];a[r]=o[0],a[n]=o[1]}ne(i);for(var j={},d=0;d<i.length;d+=1)j=Object(s.a)(Object(s.a)({},j),{},Object(u.a)({},i[d],a[d]));D(e),le(j),N(!0),v(!0)},Ne=function(e){var t=e.target,c=t.value,n=t.name;be(Object(s.a)(Object(s.a)({},de),{},Object(u.a)({},n,c)))},ye=function(){var e,t=0,c=[];for(var s in re)if(re[s]===de[s]){var n={};n.question=s,n.answer=de[s],n.value="\uc815\ub2f5",c.push(n),t+=1}else{var i={};i.question=s,i.answer=de[s],i.value="\uc624\ub2f5",c.push(i)}e="".concat(c.length,"\uac1c \uc911\uc5d0 ").concat(t,"\uac1c \uc815\ub2f5"),pe(c),v(!1),Oe(e),be({})},we=function(){N(!1),v(!0)};return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post(i,{});case 2:t=e.sent,H(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){localStorage.removeItem("userId")}}),[]),Object(x.a)((function(e){return e.preventDefault()})),Object(f.jsx)("div",{style:{background:"#8FC0A9"},children:Object(f.jsx)("div",{id:"container",children:g?Object(f.jsx)("div",{children:"kor"===S?Object(f.jsx)("div",{children:j?Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(f.jsx)("span",{style:{fontSize:"1.5rem",color:"#FAF3DD"},children:"Test Word"}),Object(f.jsx)("span",{style:{fontSize:"0.8rem",color:"#FAF3DD"},children:" \ub2e8\uc5b4\uc2dc\ud5d8"})]}),Object(f.jsxs)("div",{className:"test-container",children:[Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist",children:[Object(f.jsx)("div",{className:"voca-element",children:"\ud55c\uae00"}),Object(f.jsx)("div",{className:"voca-element",children:"\uc601\uc5b4"})]}),Object(f.jsx)("hr",{className:"driver"})]}),se.map((function(e,t){return Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist",children:[Object(f.jsx)("div",{className:"voca-element",children:e},t),Object(f.jsx)("div",{className:"voca-element",children:Object(f.jsx)("input",{className:"test-inputs",name:e,onChange:Ne,autoComplete:"off"})})]}),Object(f.jsx)("hr",{className:"driver"})]})}))]}),Object(f.jsx)("div",{id:"finish-button-container",children:Object(f.jsx)("button",{className:"finish-button",onClick:ye,children:"\uc2dc\ud5d8\uc885\ub8cc"})})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(f.jsx)("span",{style:{fontSize:"1.5rem",color:"#FAF3DD"},children:"Test Result"}),Object(f.jsx)("span",{style:{fontSize:"0.8rem",color:"#FAF3DD"},children:" \uc2dc\ud5d8 \uacb0\uacfc"})]}),Object(f.jsxs)("div",{className:"test-container",children:[Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist-2",children:[Object(f.jsx)("div",{className:"voca-element",children:"\uc785\ub825\ud55c \ud55c\uae00"}),Object(f.jsx)("div",{className:"voca-element",children:"\uc785\ub825\ud55c \uc601\uc5b4"}),Object(f.jsx)("div",{className:"voca-element",children:"\uacb0\uacfc"})]}),Object(f.jsx)("hr",{className:"driver"})]}),fe.map((function(e,t){return Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist-2",children:[Object(f.jsx)("div",{className:"voca-element",children:e.question}),Object(f.jsx)("div",{className:"voca-element",children:e.answer}),Object(f.jsx)("div",{className:"voca-element",style:{color:"\uc815\ub2f5"===e.value?"#39A2DB":"#F55C47"},children:e.value})]}),Object(f.jsx)("hr",{className:"driver"})]})}))]}),Object(f.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[Object(f.jsx)("div",{style:{fontSize:"1.2rem",fontWeight:"600",color:"#FAF3DD"},children:ve}),Object(f.jsxs)("div",{className:"finish-button-container",children:[Object(f.jsx)("button",{className:"finish-button",onClick:function(){return ge("kor",W,Y)},children:"\uc7ac\uc2dc\ud5d8 \ubcf4\uae30"}),Object(f.jsx)("button",{className:"finish-button",onClick:we,children:"\ub3cc\uc544\uac00\uae30"})]})]})]})}):Object(f.jsx)("div",{children:j?Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(f.jsx)("span",{style:{fontSize:"1.5rem",color:"#FAF3DD"},children:"Test Word"}),Object(f.jsx)("span",{style:{fontSize:"0.8rem",color:"#FAF3DD"},children:" \ub2e8\uc5b4\uc2dc\ud5d8"})]}),Object(f.jsxs)("div",{className:"test-container",children:[Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist",children:[Object(f.jsx)("div",{className:"voca-element",children:"\uc601\uc5b4"}),Object(f.jsx)("div",{className:"voca-element",children:"\ud55c\uae00"})]}),Object(f.jsx)("hr",{className:"driver"})]}),se.map((function(e,t){return Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist",children:[Object(f.jsx)("div",{className:"voca-element",children:e},t),Object(f.jsx)("div",{className:"voca-element",children:Object(f.jsx)("input",{className:"test-inputs",name:e,onChange:Ne,autocomplete:"off"})})]}),Object(f.jsx)("hr",{className:"driver"})]})}))]}),Object(f.jsx)("div",{id:"finish-button-container",children:Object(f.jsx)("button",{className:"finish-button",onClick:ye,children:"\uc2dc\ud5d8\uc885\ub8cc"})})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(f.jsx)("span",{style:{fontSize:"1.5rem",color:"#FAF3DD"},children:"Test Result"}),Object(f.jsx)("span",{style:{fontSize:"0.8rem",color:"#FAF3DD"},children:" \uc2dc\ud5d8 \uacb0\uacfc"})]}),Object(f.jsxs)("div",{className:"test-container",children:[Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist-2",children:[Object(f.jsx)("div",{className:"voca-element",children:"\uc785\ub825\ud55c \uc601\uc5b4"}),Object(f.jsx)("div",{className:"voca-element",children:"\uc785\ub825\ud55c \ud55c\uae00"}),Object(f.jsx)("div",{className:"voca-element",children:"\uacb0\uacfc"})]}),Object(f.jsx)("hr",{className:"driver"})]}),fe.map((function(e,t){return Object(f.jsxs)("div",{style:{width:"90%"},children:[Object(f.jsxs)("div",{className:"row-testlist-2",children:[Object(f.jsx)("div",{className:"voca-element",children:e.question}),Object(f.jsx)("div",{className:"voca-element",children:e.answer}),Object(f.jsx)("div",{className:"voca-element",style:{color:"\uc815\ub2f5"===e.value?"#39A2DB":"#F55C47"},children:e.value})]}),Object(f.jsx)("hr",{className:"driver"})]})}))]}),Object(f.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[Object(f.jsx)("div",{style:{fontSize:"1.2rem",fontWeight:"600",color:"#FAF3DD"},children:ve}),Object(f.jsxs)("div",{className:"finish-button-container",children:[Object(f.jsx)("button",{className:"finish-button",onClick:function(){return ge("Eng",Y,W)},children:"\uc7ac\uc2dc\ud5d8 \ubcf4\uae30"}),Object(f.jsx)("button",{className:"finish-button",onClick:we,children:"\ub3cc\uc544\uac00\uae30"})]})]})]})})}):Object(f.jsxs)("div",{id:"page-1",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:{fontSize:"1.5rem",color:"#FAF3DD",marginBottom:"1rem"},children:"Enter the Words"}),Object(f.jsxs)("form",{id:"add-container",onSubmit:function(e){e.preventDefault(),r.current.focus();if(""===R||""===$)return window.alert("\ub2e8\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");if(!/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/.test(R))return window.alert("\ud55c\uae00\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.");if(!/[a-zA-Z]/.test($))return window.alert("\uc601\uc5b4\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.");(t=W).push(R),(c=Y).push($);for(var s={},n=0;n<W.length;n+=1)s.voca=t[n],s.engvoca=c[n];var l=G.slice();l.push(s),H(l),I(t),K(c),A(""),P(""),L(""),ee(""),O.a.post(i,{voca:R,engvoca:$,user_id:a.get("user")})},children:[Object(f.jsxs)("div",{style:{margin:"0 0 1rem 0"},children:[Object(f.jsx)("div",{style:{fontWeight:"600",fontSize:"1.3rem"},children:"\uc601\ub2e8\uc5b4 \uae30\ub85d\ud558\uae30"}),Object(f.jsx)("div",{style:{fontSize:"0.5rem"},children:"\ub2e8\uc5b4\uc7a5\uc5d0 \uc601\ub2e8\uc5b4\ub97c \uae30\uc785\ud558\uc2ed\uc2dc\uc694\x1c"})]}),Object(f.jsx)("div",{className:"voca-input",children:Object(f.jsx)("input",{placeholder:"\ud55c\uae00 \uc785\ub825",className:"input-style",name:"kor-input",ref:r,value:k,onChange:function(e){L(e.target.value),A(e.target.value)}})}),Object(f.jsx)("div",{style:{marginBottom:"4rem"},className:"voca-input",children:Object(f.jsx)("input",{placeholder:"\uc601\uc5b4 \uc785\ub825",className:"input-style",name:"eng-input",value:J,onChange:function(e){ee(e.target.value),P(e.target.value)}})}),Object(f.jsx)("button",{type:"submit",id:"Jbutton",children:"\uae30\ub85d\ud558\uae30"})]}),Object(f.jsxs)("div",{style:{width:"100%",background:"white",height:"9rem",borderRadius:"5px",display:"flex",flexDirection:"column",padding:"1rem 0",alignItems:"center",justifyContent:"space-around"},children:[Object(f.jsxs)("div",{style:{width:"100%",height:"3rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},children:[Object(f.jsx)("div",{style:{fontSize:"1.2rem",fontWeight:"600"},children:"\ub2e8\uc5b4 \uc2dc\ud5d8 \ubcf4\uae30"}),Object(f.jsx)("div",{style:{fontSize:"0.8rem"},children:"\uc5f4\uc2ec\ud788 \uacf5\ubd80\ud588\ub098\uc694? \uc601\ub2e8\uc5b4 \ud14c\uc2a4\ud2b8 \ubcf4\uae30"})]}),Object(f.jsxs)("div",{style:{width:"80%",display:"flex",justifyContent:"space-around"},children:[Object(f.jsx)("button",{className:"test-button",onClick:function(){return ge("kor",W,Y)},children:"\ud55c\uae00\uc2dc\ud5d8"}),Object(f.jsx)("button",{className:"test-button",onClick:function(){return ge("eng",Y,W)},children:"\uc601\uc5b4\uc2dc\ud5d8"})]})]})]}),Object(f.jsxs)("div",{className:"voca-container",children:[Object(f.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(f.jsx)("span",{style:{fontSize:"1.5rem",color:"#FAF3DD"},children:"My WordBook"}),Object(f.jsx)("span",{style:{fontSize:"0.8rem",color:"#FAF3DD"},children:" \ub0b4\uac00 \uae30\ub85d\ud55c \ub2e8\uc5b4"})]}),Object(f.jsxs)("div",{id:"vocabulary",children:[Object(f.jsxs)("div",{id:"vocabulary-intro",children:[Object(f.jsxs)("div",{className:"row-vocalist",children:[Object(f.jsx)("div",{className:"voca-element",children:"\ud55c\uae00"}),Object(f.jsx)("div",{className:"voca-element",children:"\uc601\uc5b4"}),Object(f.jsx)("div",{className:"voca-remove-cover",children:Object(f.jsx)("div",{className:"voca-remove-emty"})})]}),Object(f.jsx)("hr",{className:"driver"})]}),G.map((function(e,t){return Object(f.jsxs)("div",{style:{width:"100%"},children:[Object(f.jsxs)("div",{className:"row-vocalist",children:[Object(f.jsx)("div",{className:"voca-element",children:e.voca},t),Object(f.jsx)("div",{className:"voca-element",children:e.engvoca},t+"en"),Object(f.jsx)("div",{className:"voca-remove-cover",children:Object(f.jsx)("button",{className:"voca-remove",onClick:function(){return function(e,t){if(window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){I(W.filter((function(t){return t!==e}))),K(Y.filter((function(e){return e!==Y[t]})));var c=G.slice();return c.splice(t,1),void O.a.delete(i,{data:{voca:e.voca,engvoca:e.engvoca,userId:a.get("user")}}).then((function(e){return H(c)}))}}(e,t)},children:"\uc0ad\uc81c"})})]}),Object(f.jsx)("hr",{className:"driver"})]})}))]})]})]})})})}));var g=function(){var e=Object(l.c)(),t=Object(n.useState)({code:"",password:""}),c=Object(h.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(""),o=Object(h.a)(r,2),j=o[0],d=o[1],b=Object(n.useState)(""),v=Object(h.a)(b,2),m=v[0],x=v[1],p=function(e){var t=e.target,c=t.value,n=t.name;a(Object(s.a)(Object(s.a)({},i),{},Object(u.a)({},n,c)))};return Object(f.jsx)("div",{id:"login-container",children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{style:{fontSize:"1.5rem",color:"#FAF3DD",fontWeight:"600"},children:"Make my WordNote"}),Object(f.jsx)("div",{style:{fontSize:"0.8rem",color:"#FAF3DD",marginBottom:"1rem"},children:"\ub098\ub9cc\uc758 \ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694"})]}),Object(f.jsxs)("form",{id:"register-container",children:[Object(f.jsxs)("div",{id:"register-title",children:[Object(f.jsx)("div",{style:{fontWeight:"600",fontSize:"1.3rem"},children:"\ub098\ub9cc\uc758 \ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"}),Object(f.jsxs)("div",{id:"register-title-context",children:[Object(f.jsx)("div",{children:"\uacf5\ubd80\ud55c \uc601\uc5b4\ub2e8\uc5b4\ub97c \uae30\uc785\ud560 \ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4dc\uc138\uc694."}),Object(f.jsx)("div",{children:"\ub2e8\uc5b4\uc7a5 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub85c \ub098\ub9cc\uc758 \ub2e8\uc5b4\uc7a5\uc744 \uc0dd\uc131\ud560\uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(f.jsx)("div",{children:"\ub9cc\ub4e4\uc5b4\uc9c4  \ub2e8\uc5b4\uc7a5\uc758 \uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uba74"}),Object(f.jsx)("div",{children:"\uc5b8\uc81c\ub4e0\uc9c0 \ub2e4\uc2dc \ub4e4\uc5b4\uac08 \uc218 \uc788\ub3c4\ub85d\uc694"})]})]}),Object(f.jsxs)("div",{id:"register-text",children:[Object(f.jsxs)("div",{className:"register-text-row",children:[Object(f.jsx)("span",{className:"register-text-name",children:"\ub098\uc758 \ub2e8\uc5b4\uc7a5 \uc774\ub984: "}),Object(f.jsx)("input",{name:"code",placeholder:"\ub2e8\uc5b4\uc7a5 \uc785\ub825",value:j,className:"register-inputs",onChange:function(e){p(e),d(e.target.value)}})]}),Object(f.jsxs)("div",{className:"register-text-row",children:[Object(f.jsx)("span",{className:"register-text-name",children:"\ub2e8\uc5b4\uc7a5 \ube44\ubc00\ubc88\ud638: "}),Object(f.jsx)("input",{name:"password",placeholder:"\ube44\ubc00\ubc88\ud638 (\uc22b\uc790, 4\uc790\ub9ac)",type:"password",value:m,className:"register-inputs",onChange:function(e){p(e),x(e.target.value)}})]})]}),Object(f.jsx)("button",{id:"register-button",onClick:function(t){t.preventDefault(),0===i.code.length||0===i.password.length?window.alert("\ube48\uacf5\uac04\uc5c6\uac8c \ud574\uc8fc\uc138\uc694."):isNaN(i.password)||4!==i.password.length?window.alert("\ube44\ubc00\ubc88\ud638\ub294 \uc22b\uc790\uc640 4\uc790\ub9ac\ub85c \ub9de\ucdb0\uc8fc\uc138\uc694."):(d(""),x(""),O.a.post("http://3.34.140.114/:5000/user",i).then((function(t){e.success("\ub9cc\ub4e4\uae30 \uc131\uacf5")})).catch((function(t){return e.error("\uc774 \ub2e8\uc5b4\uc7a5\uc740 \uc774\ubbf8 \uc0dd\uc131\ub418\uc5b4 \uc788\ub294 \ub2e8\uc5b4\uc7a5\uc785\ub2c8\ub2e4.")})))},children:"\uc0c8\ub85c\uc6b4 \ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"})]})]})})};c(57);var N=Object(m.a)((function(e){var t="http://3.34.140.114/:5000/login",c=Object(n.useState)("\uc2e4\ud328"),i=Object(h.a)(c,2),a=i[0],r=i[1],l=Object(n.useState)({code:"",password:""}),o=Object(h.a)(l,2),j=o[0],v=o[1],m=function(e){var t=e.target,c=t.value,n=t.name;v(Object(s.a)(Object(s.a)({},j),{},Object(u.a)({},n,c)))},x=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t);case 2:r("\uc2e4\ud328");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e="\uc2e4\ud328";function c(){return(c=Object(b.a)(d.a.mark((function c(){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,O.a.post(t,{});case 2:c.sent.data&&(e="\uc131\uacf5"),r(e);case 5:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){}}),[]),Object(f.jsxs)("div",{style:{height:"100%"},children:[Object(f.jsxs)("div",{id:"nav",children:[Object(f.jsx)("button",{id:"logo",children:Object(f.jsxs)("a",{onClick:function(){return!!window.confirm("\ud53c\ub4dc\ubc31 \ud558\ub7ec \uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")},href:"https://docs.google.com/forms/d/e/1FAIpQLSe5f-w3Lw-m2J-WPaKTbdAveReoWglcXu53QhFCCYEFLAY87w/viewform?usp=sf_link",style:{textDecoration:"none",color:"#FAF3DD"},children:[Object(f.jsx)("div",{children:"Word Note"}),Object(f.jsx)("div",{style:{fontSize:"1.1rem",width:"100%",display:"flex",justifyContent:"center"},children:"\ub098\ub9cc\uc758 \ub2e8\uc5b4\uc7a5"})]})}),"\uc2e4\ud328"===a?Object(f.jsxs)("form",{className:"nav-login",onSubmit:function(e){e.preventDefault(),O.a.post(t,j).then((function(e){var t=e.data.userId;localStorage.setItem("userId",t),r("\uc131\uacf5")})).catch((function(e){window.alert("\uc544\uc774\ub514, \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.")}))},children:[Object(f.jsx)("input",{onChange:function(e){return m(e)},className:"login-inputs",placeholder:"\ub2e8\uc5b4\uc7a5 \uc785\ub825",name:"code",type:"text"}),Object(f.jsx)("input",{onChange:function(e){return m(e)},className:"login-inputs",placeholder:"\ube44\ubc00\ubc88\ud638 \uc785\ub825",name:"password",type:"password"}),Object(f.jsx)("button",{className:"login-button",type:"submit",children:"\ub85c\uadf8\uc778"})]}):Object(f.jsx)("div",{className:"logout-container",children:Object(f.jsx)("button",{className:"login-button",onClick:x,children:"\ub85c\uadf8\uc544\uc6c3"})})]}),Object(f.jsx)("div",{style:{height:"100%"},children:"\uc131\uacf5"===a?Object(f.jsx)(p,{}):Object(f.jsx)(g,{})})]})})),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))},w={timeout:3e3,position:l.b.BOTTOM_CENTER};a.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(l.a,Object(s.a)(Object(s.a)({template:o.a},w),{},{children:Object(f.jsx)(N,{})}))}),document.getElementById("root")),y()}},[[58,1,2]]]);
//# sourceMappingURL=main.1fcd755a.chunk.js.map