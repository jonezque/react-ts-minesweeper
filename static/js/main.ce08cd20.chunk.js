(this["webpackJsonpminesweeper-rt"]=this["webpackJsonpminesweeper-rt"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),u=n.n(c),i=n(8),o=n.n(i),l=(n(14),n(6)),a=n(2),f=function(e){for(var t=e.value;t.length<3;)t="0"+t;return Object(r.jsx)("span",{style:{background:"black",color:"red",padding:"2px 5px"},children:t})},s=20,d=function(e){var t=e.mineCount,n=e.time,c=e.columns,u=e.reset;return Object(r.jsxs)("div",{style:{padding:"5px",minWidth:16*c+"px",display:"flex",justifyContent:"space-between"},children:[Object(r.jsx)(f,{value:t+""}),Object(r.jsx)("button",{className:"smile-button",onClick:u}),Object(r.jsx)(f,{value:n+""})]})},v=n(5),b=function(e,t,n){n.beginPath(),n.clearRect(0,0,e*s,t*s),n.strokeStyle="darkgrey";for(var r=0;r<e;++r)for(var c=0;c<t;++c)n.moveTo(r*s,c*s),n.lineTo(r*s+s,c*s),n.lineTo(r*s+s,c*s+s),n.lineTo(r*s,c*s+s),n.lineTo(r*s,c*s);n.stroke(),n.closePath()},j=u.a.memo((function(e){var t=e.columns,n=e.rows,u=e.startGame,i=e.mines,o=e.numbers,l=e.openFields,f=e.markCell,d=e.marked,j=e.revealMines,x=Object(c.useRef)(null),y=Object(c.useState)(-1),O=Object(a.a)(y,2),m=O[0],h=O[1],p=Object(c.useState)(-1),g=Object(a.a)(p,2),k=g[0],C=g[1];return console.log(m,k),Object(c.useEffect)((function(){var e=x.current.getContext("2d");b(t,n,e),-1!==m&&-1!==k&&function(e,t,n){n.beginPath(),n.strokeStyle="black",n.moveTo(e*s,t*s),n.lineTo(e*s+s,t*s),n.lineTo(e*s+s,t*s+s),n.lineTo(e*s,t*s+s),n.lineTo(e*s,t*s),n.stroke(),n.closePath()}(m,k,e)}),[m,k,i,t,n]),Object(c.useEffect)((function(){console.log("asd",m,k);var e=x.current,t=function(e){j||(console.log("s",m,k),u(m,k))};e.addEventListener("click",t);var n=function(e){e.preventDefault(),j||f(m,k)};return e.addEventListener("contextmenu",n),function(){e.removeEventListener("click",t),e.removeEventListener("contextmenu",n)}}),[m,k,u,j,f]),Object(c.useEffect)((function(){var e=x.current;e.height=n*s,e.width=t*s;var r=e.getContext("2d");b(t,n,r),r.textBaseline="middle",r.textAlign="center",r.font="16px Arial",r.fillStyle="grey";var c=function(e){j||(h(Math.floor(e.offsetX/16)),C(Math.floor(e.offsetY/16)))};e.addEventListener("mousemove",c);var u=function(){j||(h(-1),C(-1))};return e.addEventListener("mouseleave",u),function(){e.removeEventListener("mousemove",c),e.removeEventListener("mouseleave",u)}}),[t,j,n]),Object(c.useEffect)((function(){var e,t=x.current.getContext("2d"),n=Object(v.a)(l);try{var r=function(){var n=e.value,r=n.x,c=n.y;if(i.find((function(e){return e.x===r&&e.y===c})))return{v:void 0};var u=o.find((function(e){return e.x===r&&e.y===c}));if(!u)return{v:void 0};t.fillStyle="grey",0!==u.value?t.fillText(u.value+"",r*s+10,c*s+10):t.fillRect(r*s,c*s,s,s)};for(n.s();!(e=n.n()).done;){var c=r();if("object"===typeof c)return c.v}}catch(u){n.e(u)}finally{n.f()}}),[o,l,i,m,k,t,n,j]),Object(c.useEffect)((function(){if(j){var e=x.current.getContext("2d");e.fillStyle="red";var t,n=Object(v.a)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value,c=r.x,u=r.y;e.fillRect(c*s,u*s,s,s)}}catch(o){n.e(o)}finally{n.f()}}}),[i,j]),Object(c.useEffect)((function(){var e,t=x.current.getContext("2d"),n=Object(v.a)(d);try{for(n.s();!(e=n.n()).done;){var r=e.value,c=r.x,u=r.y;t.fillText("!",c*s+10,u*s+10)}}catch(i){n.e(i)}finally{n.f()}}),[d,m,k,j]),Object(r.jsx)("div",{style:{padding:"5px"},children:Object(r.jsx)("div",{style:{width:16*t+"px",height:16*n+"px"},children:Object(r.jsx)("canvas",{ref:x,style:{width:"100%",height:"100%"}})})})})),x=function e(t,n,r,c,u,i){var o=[];0===n||0===r||i.find((function(e){return e.x===n-1&&e.y===r-1}))||o.push({x:n-1,y:r-1}),0===r||i.find((function(e){return e.x===n&&e.y===r-1}))||o.push({x:n,y:r-1}),n===u-1||0===r||i.find((function(e){return e.x===n+1&&e.y===r-1}))||o.push({x:n+1,y:r-1}),0===n||i.find((function(e){return e.x===n-1&&e.y===r}))||o.push({x:n-1,y:r}),n===u-1||i.find((function(e){return e.x===n+1&&e.y===r}))||o.push({x:n+1,y:r}),0===n||r===c-1||i.find((function(e){return e.x===n-1&&e.y===r+1}))||o.push({x:n-1,y:r+1}),r===c-1||i.find((function(e){return e.x===n&&e.y===r+1}))||o.push({x:n,y:r+1}),n===u-1||r===c-1||i.find((function(e){return e.x===n+1&&e.y===r+1}))||o.push({x:n+1,y:r+1}),i.push.apply(i,o);for(var l=function(){var n=f[a],r=t.find((function(e){return e.x===n.x&&e.y===n.y}));0===(null===r||void 0===r?void 0:r.value)&&e(t,n.x,n.y,c,u,i)},a=0,f=o;a<f.length;a++)l()},y=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useRef)(null),u=Object(c.useRef)(-1),i=Object(c.useState)(10),o=Object(a.a)(i,2),f=o[0],s=o[1],v=Object(c.useState)([]),b=Object(a.a)(v,2),y=b[0],O=b[1],m=Object(c.useState)(0),h=Object(a.a)(m,2),p=h[0],g=h[1],k=Object(c.useState)(10),C=Object(a.a)(k,2),S=C[0],E=C[1],T=Object(c.useState)(10),w=Object(a.a)(T,2),N=w[0],L=w[1],M=Object(c.useState)([]),R=Object(a.a)(M,2),I=R[0],F=R[1],P=Object(c.useState)([]),A=Object(a.a)(P,2),B=A[0],D=A[1],G=Object(c.useState)([]),J=Object(a.a)(G,2),z=J[0],W=J[1],X=Object(c.useState)(!1),Y=Object(a.a)(X,2),q=Y[0],H=Y[1],K=Object(c.useState)(!1),Q=Object(a.a)(K,2),U=Q[0],V=Q[1],Z=Object(c.useCallback)((function(){clearInterval(u.current),g(0),O([]),D([]),W([]),F([]),V(!1)}),[]);Object(c.useEffect)((function(){e.current&&t.current&&n.current&&(e.current.value="10",t.current.value="10",n.current.value="10")}),[]);var $=Object(c.useCallback)((function(e,t){if(!I.length){for(var n=e+t*N,r=new Set([n]);r.size!==f+1;)r.add(Math.floor(Math.random()*S*N));r.delete(n),F(Array.from(r).map((function(e){return{x:e%N,y:Math.floor(e/N)}}))),g((function(e){return 1})),u.current=setInterval((function(){g((function(e){return e+1}))}),1e3)}y.find((function(n){return n.x===e&&n.y===t}))||(z.find((function(n){return n.x===e&&n.y===t}))||(W((function(n){return[].concat(Object(l.a)(n),[{x:e,y:t}])})),H(!0)))}),[I,f,S,N,z,y]),_=Object(c.useCallback)((function(e,t){if(!z.find((function(n){return n.x===e&&n.y===t}))){var n=y.findIndex((function(n){return n.x===e&&n.y===t}));-1!==n?O((function(e){return e.filter((function(e,t){return t!==n}))})):y.length!==f&&O((function(n){return[].concat(Object(l.a)(n),[{x:e,y:t}])}))}}),[f,y,z]);return Object(c.useEffect)((function(){for(var e=[],t=function(t){for(var n=function(n){if(I.find((function(e){return e.x===t&&e.y===n})))return"continue";var r=0;0!==n&&0!==t&&(I.find((function(e){return e.x===t-1&&e.y===n-1}))&&r++);0!==n&&(I.find((function(e){return e.x===t&&e.y===n-1}))&&r++);0!==n&&t!==N-1&&(I.find((function(e){return e.x===t+1&&e.y===n-1}))&&r++);0!==t&&(I.find((function(e){return e.x===t-1&&e.y===n}))&&r++);t!==N-1&&(I.find((function(e){return e.x===t+1&&e.y===n}))&&r++);0!==t&&n!==S-1&&(I.find((function(e){return e.x===t-1&&e.y===n+1}))&&r++);n!==S-1&&(I.find((function(e){return e.x===t&&e.y===n+1}))&&r++);t!==N-1&&n!==S-1&&(I.find((function(e){return e.x===t+1&&e.y===n+1}))&&r++);e.push({x:t,y:n,value:r})},r=0;r<S;++r)n(r)},n=0;n<N;++n)t(n);D(e)}),[N,I,S]),Object(c.useEffect)((function(){if(z.length&&q){H(!1);var e=z[z.length-1],t=e.x,n=e.y;if(I.find((function(e){return e.x===t&&e.y===n})))return alert("you lost"),void V(!0);var r=B.find((function(e){return e.x===t&&e.y===n}));if(r&&0===r.value){var c=Object(l.a)(z);x(B,t,n,S,N,c),W(c)}}}),[z,B,I,S,N,q]),Object(c.useEffect)((function(){z.length+f===S*N&&(alert("win"),clearInterval(u.current))}),[z,f,S,N]),Object(r.jsxs)("div",{style:{background:"#eeeeee",display:"inline-flex",flexDirection:"column"},children:[Object(r.jsx)(d,{mineCount:f-y.length,time:p,columns:N,reset:Z}),Object(r.jsx)(j,{rows:S,columns:N,startGame:$,mines:I,numbers:B,openFields:z,marked:y,markCell:_,revealMines:U}),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"100px 50px"},children:[Object(r.jsxs)("label",{style:{display:"contents"},children:["mine count:",Object(r.jsx)("input",{ref:n})]}),Object(r.jsxs)("label",{style:{display:"contents"},children:["rows:",Object(r.jsx)("input",{ref:e})]}),Object(r.jsxs)("label",{style:{display:"contents"},children:["columns:",Object(r.jsx)("input",{ref:t})]}),Object(r.jsx)("button",{style:{gridColumn:"1 / span 2"},onClick:function(){var r,c,u;Z();var i=Number(null===(r=e.current)||void 0===r?void 0:r.value),o=Number(null===(c=t.current)||void 0===c?void 0:c.value),l=Number(null===(u=n.current)||void 0===u?void 0:u.value);Number.isNaN(i)||Number.isNaN(o)||Number.isNaN(l)||i*o<l?alert("bad values"):(s(l),E(i),L(o))},children:"update"})]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),u(e),i(e)}))};o.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.ce08cd20.chunk.js.map