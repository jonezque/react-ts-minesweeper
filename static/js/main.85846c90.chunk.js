(this["webpackJsonpminesweeper-rt"]=this["webpackJsonpminesweeper-rt"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),u=n(0),c=n.n(u),i=n(8),o=n.n(i),a=(n(14),n(6)),l=n(2),f=function(e){for(var t=e.value;t.length<3;)t="0"+t;return Object(r.jsx)("span",{style:{background:"black",color:"red",padding:"2px 5px"},children:t})},s=20,d=function(e){var t=e.mineCount,n=e.time,u=e.columns,c=e.reset;return Object(r.jsxs)("div",{style:{padding:"5px",minWidth:16*u+"px",display:"flex",justifyContent:"space-between"},children:[Object(r.jsx)(f,{value:t+""}),Object(r.jsx)("button",{className:"smile-button",onClick:c}),Object(r.jsx)(f,{value:n+""})]})},v=n(5),b=function(e,t,n){n.beginPath(),n.clearRect(0,0,e*s,t*s),n.strokeStyle="darkgrey";for(var r=0;r<e;++r)for(var u=0;u<t;++u)n.moveTo(r*s,u*s),n.lineTo(r*s+s,u*s),n.lineTo(r*s+s,u*s+s),n.lineTo(r*s,u*s+s),n.lineTo(r*s,u*s);n.stroke(),n.closePath()},j=c.a.memo((function(e){var t=e.columns,n=e.rows,c=e.startGame,i=e.mines,o=e.numbers,a=e.openFields,f=e.markCell,d=e.marked,j=e.revealMines,x=Object(u.useRef)(null),y=Object(u.useState)(-1),O=Object(l.a)(y,2),m=O[0],h=O[1],p=Object(u.useState)(-1),g=Object(l.a)(p,2),k=g[0],C=g[1];return Object(u.useEffect)((function(){var e=x.current.getContext("2d");b(t,n,e),-1!==m&&-1!==k&&function(e,t,n){n.beginPath(),n.strokeStyle="black",n.moveTo(e*s,t*s),n.lineTo(e*s+s,t*s),n.lineTo(e*s+s,t*s+s),n.lineTo(e*s,t*s+s),n.lineTo(e*s,t*s),n.stroke(),n.closePath()}(m,k,e)}),[m,k,i,t,n]),Object(u.useEffect)((function(){var e=x.current,t=function(e){j||c(m,k)};e.addEventListener("click",t);var n=function(e){e.preventDefault(),j||f(m,k)};return e.addEventListener("contextmenu",n),function(){e.removeEventListener("click",t),e.removeEventListener("contextmenu",n)}}),[m,k,c,j,f]),Object(u.useEffect)((function(){var e=x.current;e.height=n*s,e.width=t*s;var r=e.getContext("2d");b(t,n,r),r.textBaseline="middle",r.textAlign="center",r.font="16px Arial",r.fillStyle="grey";var u=function(e){j||(h(Math.floor(e.offsetX/16)),C(Math.floor(e.offsetY/16)))};e.addEventListener("mousemove",u);var c=function(){j||(h(-1),C(-1))};return e.addEventListener("mouseleave",c),function(){e.removeEventListener("mousemove",u),e.removeEventListener("mouseleave",c)}}),[t,j,n]),Object(u.useEffect)((function(){var e,t=x.current.getContext("2d"),n=Object(v.a)(a);try{var r=function(){var n=e.value,r=n.x,u=n.y;if(i.find((function(e){return e.x===r&&e.y===u})))return{v:void 0};var c=o.find((function(e){return e.x===r&&e.y===u}));if(!c)return{v:void 0};t.fillStyle="grey",0!==c.value?t.fillText(c.value+"",r*s+10,u*s+10):t.fillRect(r*s,u*s,s,s)};for(n.s();!(e=n.n()).done;){var u=r();if("object"===typeof u)return u.v}}catch(c){n.e(c)}finally{n.f()}}),[o,a,i,m,k,t,n,j]),Object(u.useEffect)((function(){if(j){var e=x.current.getContext("2d");e.fillStyle="red";var t,n=Object(v.a)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value,u=r.x,c=r.y;e.fillRect(u*s,c*s,s,s)}}catch(o){n.e(o)}finally{n.f()}}}),[i,j]),Object(u.useEffect)((function(){var e,t=x.current.getContext("2d"),n=Object(v.a)(d);try{for(n.s();!(e=n.n()).done;){var r=e.value,u=r.x,c=r.y;t.fillText("!",u*s+10,c*s+10)}}catch(i){n.e(i)}finally{n.f()}}),[d,m,k,j]),Object(r.jsx)("div",{style:{padding:"5px"},children:Object(r.jsx)("div",{style:{width:16*t+"px",height:16*n+"px"},children:Object(r.jsx)("canvas",{ref:x,style:{width:"100%",height:"100%"}})})})})),x=function e(t,n,r,u,c,i){var o=[];0===n||0===r||i.find((function(e){return e.x===n-1&&e.y===r-1}))||o.push({x:n-1,y:r-1}),0===r||i.find((function(e){return e.x===n&&e.y===r-1}))||o.push({x:n,y:r-1}),n===c-1||0===r||i.find((function(e){return e.x===n+1&&e.y===r-1}))||o.push({x:n+1,y:r-1}),0===n||i.find((function(e){return e.x===n-1&&e.y===r}))||o.push({x:n-1,y:r}),n===c-1||i.find((function(e){return e.x===n+1&&e.y===r}))||o.push({x:n+1,y:r}),0===n||r===u-1||i.find((function(e){return e.x===n-1&&e.y===r+1}))||o.push({x:n-1,y:r+1}),r===u-1||i.find((function(e){return e.x===n&&e.y===r+1}))||o.push({x:n,y:r+1}),n===c-1||r===u-1||i.find((function(e){return e.x===n+1&&e.y===r+1}))||o.push({x:n+1,y:r+1}),i.push.apply(i,o);for(var a=function(){var n=f[l],r=t.find((function(e){return e.x===n.x&&e.y===n.y}));0===(null===r||void 0===r?void 0:r.value)&&e(t,n.x,n.y,u,c,i)},l=0,f=o;l<f.length;l++)a()},y=function(){var e=Object(u.useRef)(null),t=Object(u.useRef)(null),n=Object(u.useRef)(null),c=Object(u.useRef)(-1),i=Object(u.useState)(10),o=Object(l.a)(i,2),f=o[0],s=o[1],v=Object(u.useState)([]),b=Object(l.a)(v,2),y=b[0],O=b[1],m=Object(u.useState)(0),h=Object(l.a)(m,2),p=h[0],g=h[1],k=Object(u.useState)(10),C=Object(l.a)(k,2),S=C[0],E=C[1],T=Object(u.useState)(10),w=Object(l.a)(T,2),N=w[0],L=w[1],M=Object(u.useState)([]),R=Object(l.a)(M,2),I=R[0],F=R[1],P=Object(u.useState)([]),A=Object(l.a)(P,2),B=A[0],D=A[1],G=Object(u.useState)([]),J=Object(l.a)(G,2),z=J[0],W=J[1],X=Object(u.useState)(!1),Y=Object(l.a)(X,2),q=Y[0],H=Y[1],K=Object(u.useState)(!1),Q=Object(l.a)(K,2),U=Q[0],V=Q[1],Z=Object(u.useCallback)((function(){clearInterval(c.current),g(0),O([]),D([]),W([]),F([]),V(!1)}),[]);Object(u.useEffect)((function(){e.current&&t.current&&n.current&&(e.current.value="10",t.current.value="10",n.current.value="10")}),[]);var $=Object(u.useCallback)((function(e,t){if(!I.length){for(var n=e+t*N,r=new Set([n]);r.size!==f+1;)r.add(Math.floor(Math.random()*S*N));r.delete(n),F(Array.from(r).map((function(e){return{x:e%N,y:Math.floor(e/N)}}))),g((function(e){return 1})),c.current=setInterval((function(){g((function(e){return e+1}))}),1e3)}y.find((function(n){return n.x===e&&n.y===t}))||(z.find((function(n){return n.x===e&&n.y===t}))||(W((function(n){return[].concat(Object(a.a)(n),[{x:e,y:t}])})),H(!0)))}),[I,f,S,N,z,y]),_=Object(u.useCallback)((function(e,t){if(!z.find((function(n){return n.x===e&&n.y===t}))){var n=y.findIndex((function(n){return n.x===e&&n.y===t}));-1!==n?O((function(e){return e.filter((function(e,t){return t!==n}))})):y.length!==f&&O((function(n){return[].concat(Object(a.a)(n),[{x:e,y:t}])}))}}),[f,y,z]);return Object(u.useEffect)((function(){for(var e=[],t=function(t){for(var n=function(n){if(I.find((function(e){return e.x===t&&e.y===n})))return"continue";var r=0;0!==n&&0!==t&&(I.find((function(e){return e.x===t-1&&e.y===n-1}))&&r++);0!==n&&(I.find((function(e){return e.x===t&&e.y===n-1}))&&r++);0!==n&&t!==N-1&&(I.find((function(e){return e.x===t+1&&e.y===n-1}))&&r++);0!==t&&(I.find((function(e){return e.x===t-1&&e.y===n}))&&r++);t!==N-1&&(I.find((function(e){return e.x===t+1&&e.y===n}))&&r++);0!==t&&n!==S-1&&(I.find((function(e){return e.x===t-1&&e.y===n+1}))&&r++);n!==S-1&&(I.find((function(e){return e.x===t&&e.y===n+1}))&&r++);t!==N-1&&n!==S-1&&(I.find((function(e){return e.x===t+1&&e.y===n+1}))&&r++);e.push({x:t,y:n,value:r})},r=0;r<S;++r)n(r)},n=0;n<N;++n)t(n);D(e)}),[N,I,S]),Object(u.useEffect)((function(){if(z.length&&q){H(!1);var e=z[z.length-1],t=e.x,n=e.y;if(I.find((function(e){return e.x===t&&e.y===n})))return alert("you lost"),void V(!0);var r=B.find((function(e){return e.x===t&&e.y===n}));if(r&&0===r.value){var u=Object(a.a)(z);x(B,t,n,S,N,u),W(u)}}}),[z,B,I,S,N,q]),Object(u.useEffect)((function(){z.length+f===S*N&&(alert("win"),clearInterval(c.current))}),[z,f,S,N]),Object(r.jsxs)("div",{style:{background:"#eeeeee",display:"inline-flex",flexDirection:"column"},children:[Object(r.jsx)(d,{mineCount:f-y.length,time:p,columns:N,reset:Z}),Object(r.jsx)(j,{rows:S,columns:N,startGame:$,mines:I,numbers:B,openFields:z,marked:y,markCell:_,revealMines:U}),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"100px 50px"},children:[Object(r.jsxs)("label",{style:{display:"contents"},children:["mine count:",Object(r.jsx)("input",{ref:n})]}),Object(r.jsxs)("label",{style:{display:"contents"},children:["rows:",Object(r.jsx)("input",{ref:e})]}),Object(r.jsxs)("label",{style:{display:"contents"},children:["columns:",Object(r.jsx)("input",{ref:t})]}),Object(r.jsx)("button",{style:{gridColumn:"1 / span 2"},onClick:function(){var r,u,c;Z();var i=Number(null===(r=e.current)||void 0===r?void 0:r.value),o=Number(null===(u=t.current)||void 0===u?void 0:u.value),a=Number(null===(c=n.current)||void 0===c?void 0:c.value);Number.isNaN(i)||Number.isNaN(o)||Number.isNaN(a)||i*o<a?alert("bad values"):(s(a),E(i),L(o))},children:"update"})]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,u=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),u(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.85846c90.chunk.js.map