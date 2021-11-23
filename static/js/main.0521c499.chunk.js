(this["webpackJsonpdicing-with-death"]=this["webpackJsonpdicing-with-death"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(43),o=n.n(s),r=(n(60),n(3)),c=(n(61),n.p+"static/media/logo.c1ccbc7f.svg"),l=n(20),d=n(0);var g=function(e){var t=e.startGame,n=e.messagePool;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"DICING WITH DEATH"}),Object(d.jsxs)("div",{id:"instructions",children:[Object(d.jsx)("p",{className:"instructionsTitle",children:"INSTRUCTIONS"}),String(n.introMessages[0][0]).split("<<").map((function(e,t){return e.trim().length>0?Object(d.jsx)("span",{className:"intro",children:Object(d.jsx)(l.a,{children:e})},t):Object(d.jsx)("p",{className:"spacer"},t)}))]}),Object(d.jsxs)("div",{className:"startButtons",children:[Object(d.jsx)("div",{className:"startButton",onClick:function(){return t(2)},children:Object(d.jsx)("span",{children:"PLAY WITH 2 PEOPLE"})}),Object(d.jsx)("div",{className:"startButton",onClick:function(){return t(1)},children:Object(d.jsx)("span",{children:"PLAY WITH COMPUTER"})})]}),Object(d.jsx)("div",{id:"logo",style:{marginTop:"0.5em",width:"100%",zIndex:-1,backgroundImage:"url(".concat(c,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center"}})]})};var m=function(e){var t=e.messagePool,n=e.restartGame;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"DICING WITH DEATH"}),String(t.outroMessages[0][0]).split("<<").map((function(e){return e.trim().length>0?Object(d.jsx)("span",{children:Object(d.jsx)(l.a,{children:e})}):Object(d.jsx)("p",{className:"spacer"})})),Object(d.jsx)("div",{onClick:n,style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"5em",fontSize:"3em",border:"5px black solid",paddingLeft:"0.5em",paddingRight:"0.5em"},children:Object(d.jsx)("span",{children:"RESTART"})}),Object(d.jsx)("div",{id:"logo",style:{marginTop:"0.5em",width:"100%",zIndex:-1,backgroundImage:"url(".concat(c,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center"}})]})},u=n(4),h=function(e){var t=e.zoomLevel,n=e.squareCoords,i=e.squareNo,a=e.bgColor,s=e.image;return Object(d.jsx)("div",{className:"square",style:{width:"20%",height:"12.5%",position:"absolute",top:100*n.y*60/480+"%",left:100*n.x*60/300+"%",boxSizing:"border-box",border:"2px solid black",alignItems:"center",justifyContent:"center",display:"flex",fontSize:1*t+"em",backgroundColor:a,backgroundImage:"url(".concat(window.location.href+"/images/".concat(s,".png"),")"),backgroundRepeat:"no-repeat",backgroundPosition:"bottom right",backgroundSize:"50% 50%"},children:Object(d.jsx)("span",{className:"squareno",children:i+1})})},b=n.p+"static/media/p1-min.d14d5897.png",p=n.p+"static/media/p2-min.bf6abd3f.png",j=function(e){var t=e.resizing,n=e.boardDimensions,i=e.tokenNo,a=e.opPosition,s=e.position,o=e.zoomLevel;return Object(d.jsx)("div",{className:"token",style:{width:n.width/10*o,height:n.height/16*o,position:"absolute",transition:t?"none":"all 0.5s linear",top:o*n.height/8*.1+o*(2===i&&a===s?s.y*n.height/8+n.height/100:s.y*n.height/8),left:o*n.width/5*.1+o*(2===i&&a===s?s.x*n.width/5+n.height/25:s.x*n.width/5)},children:Object(d.jsx)("img",{style:{width:"80%"},src:2===i?p:b,alt:""})})},f=function(e){var t=e.image,n=e.boardDimensions,i=e.startPos,a=e.endPos,s=e.zoomLevel;return Object(d.jsx)("div",{className:"ladder",style:{width:100*(n.width/5-n.width/120)/n.width+"%",height:100*Math.sqrt(Math.pow(i.y-a.y,2)+Math.pow(i.x-a.x,2))*(n.height/8)/n.height+"%",marginLeft:17.5*n.width/5/n.width+"%",position:"absolute",display:"flex",flexDirection:"column",top:100*a.y*(n.height/8)/n.height+"%",left:100*a.x*(n.width/5)/n.width+"%",transformOrigin:"top center",transform:"translate(0,"+n.width/10*s+"px) rotate("+180*Math.atan((-i.x+a.x)/(i.y-a.y))/Math.PI+"deg)"},children:Object(d.jsx)("img",{style:{height:"100%",objectFit:"contain",zIndex:10},src:window.location.href+"images/".concat(t,".png"),alt:""})})},O=function(e){var t=e.boardDimensions,n=e.image,i=e.startPos,a=e.endPos,s=e.zoomLevel;return Object(d.jsx)("div",{className:"snake",style:{width:100*(t.width/5-t.width/120)/t.width+"%",height:100*Math.sqrt(Math.pow(i.y-a.y,2)+Math.pow(i.x-a.x,2))*(t.height/8)/t.height+"%",position:"absolute",display:"flex",marginLeft:20*t.width/5/t.width+"%",flexDirection:"column",top:100*a.y*(t.height/8)/t.height+"%",left:100*a.x*(t.width/5)/t.width+"%",transformOrigin:"top center",transform:"translate(0,"+t.width/10*s+"px) rotate("+180*Math.atan((-i.x+a.x)/(i.y-a.y))/Math.PI+"deg)"},children:Object(d.jsx)("img",{style:{height:"100%",objectFit:"contain",zIndex:10},src:window.location.href+"images/".concat(n,".png"),alt:""})})},x=function(e){var t=e.rollagains,n=e.dimensions,i=e.resizing,a=e.setResizing,s=e.tokenSquares,o=e.ladders,r=e.snakes,c=e.currentPlayer,l=Object(u.a)(Array(40)).map((function(e,t){var n=Math.floor(t/5);return{x:Math.floor(t/5)%2?4-t%5:t%5,y:n}})).reverse(),g={width:600,height:960},m=function(e){return t[e]?t[e][1].image+"-100-min":o[e]?o[e][2].image+"-100-min":r[e]?r[e][2].image+"-100-min":""};return Object(d.jsx)("div",{className:"boardViewport",children:Object(d.jsxs)("div",{className:"board",style:{width:"600px",height:"960px",top:-function(e){return e*(l[s[c]].y*g.height/8)-g.height/2+(g.height-n.height)/2}(1),left:-function(e){var t=e*(l[s[c]].x*g.width/5)-g.width/2;return t<=0?0:t<=g.width-n.width?g.width-n.width:t-n.width+g.width}(1),backgroundColor:"black",transition:i?"none":"all 0.5s ease-in-out",position:"absolute",overflow:"hidden"},children:[Object(u.a)(Array(5)).map((function(e,n){return Object(u.a)(Array(8)).map((function(e,i){return Object(d.jsx)(h,{bgColor:(a=8*n+i+1,t[a]?"lightblue":o[a]?"lightgreen":r[a]?"lightsalmon":"white"),image:m(8*n+i+1),boardDimensions:g,zoomLevel:1,squareCoords:l[8*n+i],squareNo:8*n+i},5*n+i);var a}))})),Object.keys(r).map((function(e,t){return l[e-1]&&l[r[e][0]-1]?Object(d.jsx)(O,{boardDimensions:g,zoomLevel:1,image:r[e][2].slimage,endPos:l[e-1],startPos:l[r[e][0]-1]},t):""})),Object.keys(o).map((function(e,t){return l[e-1]&&l[o[e][0]-1]?Object(d.jsx)(f,{boardDimensions:g,zoomLevel:1,image:o[e][2].slimage,startPos:l[e-1],endPos:l[o[e][0]-1]},t):""})),[1,0].map((function(e){return Object(d.jsx)(j,{resizing:i,setResizing:a,boardDimensions:g,zoomLevel:1,tokenNo:e+1,opPosition:l[s[e?0:1]],position:l[s[e]]},e)}))]})})},w=n.p+"static/media/d1-250-min.63f4f4c7.png",y=n.p+"static/media/d2-250-min.bb9831f1.png",v=n.p+"static/media/d3-250-min.e6a8930a.png",k=n.p+"static/media/d4-250-min.d4ef404a.png",S=n.p+"static/media/d5-250-min.78a2e630.png",I=n.p+"static/media/d6-250-min.37f21c63.png",C=function(e){var t=e.player,n=e.currentPlayer,a=e.disabled,s=e.handleDieClick,o=e.number,r={1:w,2:y,3:v,4:k,5:S,6:I};Object(i.useEffect)((function(){[w,y,v,k,S,I].forEach((function(e){var t=new Image;t.src=e,window[e]=t}))}),[]);return Object(d.jsxs)("div",{onClick:a?void 0:s,className:"die",style:{width:80,marginTop:10,height:80,color:function(e,t){return t?"white":e?"red":"yellow"}(t,a),position:"relative",alignItems:"center",justifyContent:"center"},children:[n===t?Object(d.jsx)("img",{style:{width:"100%"},src:r[o],alt:""}):Object(d.jsx)("span",{style:{position:"absolute",left:"12.5%",top:"35%",width:"75%"},children:"WAIT"}),Object(d.jsx)("span",{style:{position:"absolute",left:"12.5%",top:"35%",width:"75%",backgroundColor:"rgba(0,0,0,0.8)"},children:a?"":"ROLL"})]})},T=function(e){var t=e.clearMessage,n=e.message,i=e.colour,a=e.image,s=e.winner;return Object(d.jsxs)("div",{className:"messageBox",style:{width:230,marginTop:75,height:"auto",top:70,display:n?"flex":"none",border:"10px powderblue solid",backgroundColor:i,paddingLeft:10,paddingRight:10,fontWeight:600,textAlign:"center",color:"white",position:"absolute",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:100},onClick:function(){return t(s)},children:[a?Object(d.jsx)("img",{style:{width:"50%",objectFit:"contain",marginTop:"0.5em",marginBottom:"0.5em"},src:window.location.href+"images/".concat(a,"-250-min.png"),alt:""}):"",Object(d.jsx)("span",{children:n}),Object(d.jsx)("div",{className:"continue",children:"CONTINUE"})]})},M=n(6),P=n.p+"static/media/diesfx.46935df9.mp3",z=n.p+"static/media/slide1.286dfdec.mp3",N=n.p+"static/media/slide2.d167c7d8.mp3",D=n.p+"static/media/slide3.caf961fe.mp3",E=n.p+"static/media/slide4.bc928674.mp3",R=n.p+"static/media/up.552af750.mp3",L=n.p+"static/media/down.bec0ced8.mp3",q=n.p+"static/media/applause.1939815c.mp3",A=function(e){var t=Object(M.a)(P),n=Object(r.a)(t,1)[0],a=Object(M.a)(z),s=Object(r.a)(a,1)[0],o=Object(M.a)(N),c=Object(r.a)(o,1)[0],l=Object(M.a)(D),g=Object(r.a)(l,1)[0],m=Object(M.a)(E),h=Object(r.a)(m,1)[0],b=Object(M.a)(R),p=Object(r.a)(b,1)[0],j=Object(M.a)(L),f=Object(r.a)(j,1)[0],O=Object(M.a)(q),w=Object(r.a)(O,1)[0],y=[s,c,g,h],v=e.setConfetti,k=e.soundOn,S=e.ladders,I=e.snakes,A=e.rollagains,F=e.boardState,G=e.setBoardState,H=e.playerCount,B=e.tokenSquares,W=e.setTokenSquares,V=e.dieEnabled,U=e.setDieEnabled,Y=e.lastRoll,J=e.setLastRoll,K=e.currentPlayer,X=e.setCurrentPlayer,Z=e.message,Q=e.setMessage,$=e.resizing,_=e.setResizing,ee=e.dimensions,te=e.setDimensions,ne=e.firstResize,ie=e.setFirstResize,ae=e.setGameState;Object(i.useEffect)((function(){var e=!1,t=function(){clearTimeout(e),$||_(!0),document.querySelector(".boardViewport")&&te({width:document.querySelector(".boardViewport").clientWidth,height:document.querySelector(".boardViewport").clientHeight}),e=setTimeout((function(){return _(!1)}),100)};return ne||(t(),ie(!0)),window.addEventListener("load",t,!1),window.addEventListener("resize",t,!1),function(){window.removeEventListener("load",t,!1),window.removeEventListener("resize",t,!1)}}),[ee,$,_,ne,te,ie]);var se=function(){U(!1),k&&n();var e,t=0,i=setInterval((function(){if(t<5)e=Math.ceil(6*Math.random()),J(e),t+=1;else{if(G(1),k){var n=y[Math.floor(4*Math.random())];setTimeout(n,10)}clearInterval(i)}}),100)};return Object(i.useEffect)((function(){var e=function(e,t){var n=Object(u.a)(B);n[e]=t,W(n)},t=function(t){var n=500,i=!1;39===t?(v(!0),k&&setTimeout(w,100),i={winner:K+1,text:"Player ".concat(K+1," won!"),colour:"rgba(0, 0, 255, 0.7)",rollagain:!1}):S[t+1]?(k&&setTimeout(p,50),e(K,S[t+1][0]-1),i=S[t+1][2]):I[t+1]?(k&&setTimeout(f,50),e(K,I[t+1][0]-1),i=I[t+1][2]):A[t+1]?(console.log(A[t+1]),(i=A[t+1][1]).rollagain=!0,n=0):n=0,setTimeout((function(){i?Q(i):0===K&&1===H?(setTimeout((function(){return se()}),100),X(K?0:1)):(U(!0),X(K?0:1)),G(0)}),n)};1===F&&function(n){var i=B[K]+n,a=B[K],s=[];for(i>39&&(i=39);i!==a;)Math.ceil((i+1)/5)===Math.ceil((a+1)/5)?a=i:a%5===4?a+=1:a=5*Math.ceil((a+1)/5)-1,a<=39&&s.push(a);s.push(a),s.forEach((function(t,n){return setTimeout((function(){return e(K,t)}),500*n)})),setTimeout((function(){return t(s[s.length-1])}),500*s.length)}(Y)}),[F]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"DICING WITH DEATH"}),Object(d.jsx)(x,{rollagains:A,resizing:$,setResizing:_,dimensions:ee,currentPlayer:K,tokenSquares:B,ladders:S,snakes:I}),Object(d.jsx)(T,{clearMessage:function(e){e?(v(!1),ae(2)):(Q({}),1===H&&(!Z.rollagain&&0===K||Z.rollagain&&1===K)?setTimeout((function(){return se()}),100):U(!0),Z.rollagain||X(K?0:1))},winner:!!Z.winner,message:Z.text,colour:Z.colour,image:Z.image}),Object(d.jsxs)("div",{className:"dice",children:[Object(d.jsxs)("p",{id:"cplayer",children:["Current player:",Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{fontWeight:900,color:K?"red":"yellow"},children:K+1})]}),Object(d.jsx)(C,{player:0,currentPlayer:K,disabled:!V||0!==K,handleDieClick:se,number:Y}),Object(d.jsx)(C,{player:1,currentPlayer:K,disabled:!V||1!==K,handleDieClick:se,number:Y})]})]})},F=n(119),G=n(120),H=n(50),B=n(48),W=n.n(B),V=n(67),U=function(){var e=Object(H.a)(),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),o=Object(r.a)(s,2),l=o[0],u=o[1],h=Object(i.useState)(0),b=Object(r.a)(h,2),p=b[0],j=b[1],f=Object(i.useState)(!1),O=Object(r.a)(f,2),x=O[0],w=O[1],y=Object(i.useState)([0,0]),v=Object(r.a)(y,2),k=v[0],S=v[1],I=Object(i.useState)(!0),C=Object(r.a)(I,2),T=C[0],M=C[1],P=Object(i.useState)(1),z=Object(r.a)(P,2),N=z[0],D=z[1],E=Object(i.useState)(0),R=Object(r.a)(E,2),L=R[0],q=R[1],B=Object(i.useState)({}),U=Object(r.a)(B,2),Y=U[0],J=U[1],K=Object(i.useState)(0),X=Object(r.a)(K,2),Z=X[0],Q=X[1],$=Object(i.useState)(0),_=Object(r.a)($,2),ee=_[0],te=_[1],ne=Object(i.useState)(0),ie=Object(r.a)(ne,2),ae=ie[0],se=ie[1],oe=Object(i.useState)(0),re=Object(r.a)(oe,2),ce=re[0],le=re[1],de=Object(i.useState)(!1),ge=Object(r.a)(de,2),me=ge[0],ue=ge[1],he=Object(i.useState)(0),be=Object(r.a)(he,2),pe=be[0],je=be[1],fe=Object(i.useState)(0),Oe=Object(r.a)(fe,2),xe=Oe[0],we=Oe[1],ye=Object(i.useState)({width:600,height:960}),ve=Object(r.a)(ye,2),ke=ve[0],Se=ve[1],Ie=Object(i.useState)(!0),Ce=Object(r.a)(Ie,2),Te=Ce[0],Me=Ce[1],Pe=function(e){je(e),j(1)},ze=function(){u(!1),j(0),S([0,0]),M(!0),q(0),J({}),je(0),we(0)};Object(i.useEffect)((function(){if(!Z){var e={},t=V({delimiter:","});t.on("readable",(function(){for(var n;n=t.read();){var i=n[0];e["".concat(i,"Messages")]||(e["".concat(i,"Messages")]=[]),e["".concat(i,"Messages")].push([n[1],n[2],n[3]])}})),t.on("error",(function(e){console.error(e.message)}));fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT8mb7lgXCb2tO4IBhx7ERMI4s5KjVxFqiaV5SAZ52cMwsgcRnrTTx8nigACKv0o1cYA1c7woHGBvGF/pub?gid=0&single=true&output=csv").then((function(e){return e.text()})).then((function(n){!function(e,t){t.split("\n").forEach((function(t){return e.write(t)}))}(t,n),t.end(),Q(e);var i=function(e){return e[Math.floor(Math.random()*e.length)]},a=function(e,t){for(var n=e.length-1;n>0;n--){var i=Math.floor(Math.random()*(n+1)),a=e[n];e[n]=e[i],e[i]=a}return e.map((function(e){return{text:e[0],image:e[1],slimage:e[2],colour:t,rollagain:!1}}))};if(!ae){var s=["#654321","grey","black"],o=a(e.ladderMessages,"rgba(0, 128, 0, 0.8)");se({6:[16,i(s),o[0]],10:[19,i(s),o[1]],14:[23,i(s),o[2]],22:[30,i(s),o[3]],28:[36,i(s),o[4]],31:[39,i(s),o[5]]})}if(!ee){var r=["yellow","orange","coral","lightgreen"],c=a(e.snakeMessages,"rgba(255, 0, 0, 0.8)");te({7:[5,i(r),c[0]],13:[2,i(r),c[1]],20:[11,i(r),c[2]],27:[17,i(r),c[3]],29:[21,i(r),c[4]],37:[35,i(r),c[5]],38:[32,i(r),c[6]]})}if(!ce){var l=a(e.rollagainMessages,"rgba(255, 165, 0, 0.8)");le({2:[2,l[0]],4:[2,l[1]],8:[2,l[2]],12:[2,l[3]],17:[2,l[4]]})}}))}["ladder1.png","neg-4-100-min.png","pos-antibody-100-min.png","pos-tablets-100-min.png","ra-flowers-250-min.png","ladder2.png","neg-4-250-min.png","pos-antibody-250-min.png","pos-tablets-250-min.png","ra-grapes-100-min.png","neg-1-100-min.png","neg-5-100-min.png","pos-meds-100-min.png","ra-bear-100-min.png","ra-grapes-250-min.png","neg-1-250-min.png","neg-5-250-min.png","pos-meds-250-min.png","ra-bear-250-min.png","ra-sneakers-100-min.png","neg-2-100-min.png","neg-6-100-min.png","pos-soap-100-min.png","ra-bear-500-min.png","ra-sneakers-250-min.png","neg-2-250-min.png","neg-6-250-min.png","pos-soap-250-min.png","ra-dummy-100-min.png","snake1.png","neg-3-100-min.png","pos-antibiotics-100-min.png","pos-syringe-100-min.png","ra-dummy-250-min.png","snake2.png","neg-3-250-min.png","pos-antibiotics-250-min.png","pos-syringe-250-min.png","ra-flowers-100-min.png"].forEach((function(e){var t=new Image;t.src=window.location.href+"images/".concat(e),window[e]=t}))}),[Z,Q,ae,ee,ce]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{id:"container",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[function(e){return Z?0===e?Object(d.jsx)(g,{messagePool:Z,startGame:Pe}):1===e?Object(d.jsx)(A,{setConfetti:u,soundOn:Te,setGameState:j,boardState:xe,setBoardState:we,playerCount:pe,tokenSquares:k,setTokenSquares:S,dieEnabled:T,setDieEnabled:M,lastRoll:N,setLastRoll:D,currentPlayer:L,setCurrentPlayer:q,message:Y,setMessage:J,messagePool:Z,setMessagePool:Q,resizing:me,setResizing:ue,dimensions:ke,setDimensions:Se,firstResize:x,setFirstResize:w,snakes:ee,ladders:ae,rollagains:ce}):Object(d.jsx)(m,{messagePool:Z,restartGame:ze}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"DICING WITH DEATH"}),Object(d.jsx)("div",{id:"instructions",style:{position:"relative",height:"20em",width:"100%"},children:Object(d.jsx)("div",{id:"instructionsback",style:{position:"absolute",top:0,width:"100%",height:"100%",opacity:.4,zIndex:-1,backgroundImage:"url(".concat(c,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center"}})})]})}(p),Object(d.jsx)("div",{id:"volumecontrol",onClick:function(){Me(!Te)},children:Te?Object(d.jsx)(F.a,{style:{fontSize:40}}):Object(d.jsx)(G.a,{style:{fontSize:40}})})]}),l?Object(d.jsxs)("div",{id:"confetti",style:{zIndex:50},children:[Object(d.jsx)(W.a,{width:n,height:a}),"      "]}):""]})},Y=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,121)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),Y()},60:function(e,t,n){},61:function(e,t,n){},89:function(e,t){},91:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.0521c499.chunk.js.map