(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{112:function(s,n){},114:function(s,n){},142:function(s,n){},147:function(s,n,t){"use strict";t.r(n);var e=t(1),r=t.n(e),a=t(67),i=t.n(a),o=t(13),c=t(8),u=t(21),l=Object(e.createContext)(),d=function(s){var n=s.children,t=Object(e.useState)((function(){return window.sessionStorage.getItem("token")})),a=Object(u.a)(t,2),i=a[0],o=a[1],c={isAuth:i,activateAuth:function(s){window.sessionStorage.setItem("token",s),o(!0)},removeAuth:function(){window.sessionStorage.removeItem("token"),o(!1)}};return r.a.createElement(l.Provider,{value:c},n)},f=(l.Consumer,t(15)),m=t(4),p=t(6);function v(){var s=Object(m.a)(["\n\tcolor: #4a4a4a;\n    text-align: center;\n    text-decoration: none;\n"]);return v=function(){return s},s}function b(){var s=Object(m.a)(["\n\theight: 85%;\n\toverflow-y: auto;\n"]);return b=function(){return s},s}function g(){var s=Object(m.a)(["\n\tfont-size: 20px !important;\n\tmargin: 0 0 10px 0;\n"]);return g=function(){return s},s}function h(){var s=Object(m.a)(["\n\tborder-top-right-radius: 5px;\n\tmargin-top: 35px;\n\tpadding: 15px 15px 15px 15px;\n\tbox-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return h=function(){return s},s}var x=p.c.div(h()),E=p.c.h1(g()),j=p.c.div(b()),O=Object(p.c)(f.a)(v());function w(){var s=Object(m.a)(["\n\tfont-size: 15px;\n"]);return w=function(){return s},s}function y(){var s=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: hidden;\n"]);return y=function(){return s},s}function k(){var s=Object(m.a)(["\n\tborder: 1px solid #ddd;\n\tmargin: 0 8px 0 0;\n\tborder-radius: 50%;\n\theight: auto;\n\toverflow: hidden;\n\tobject-fit: cover;\n\theight: 30px;\n\twidth: 30px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n"]);return k=function(){return s},s}function I(){var s=Object(m.a)(["\n\tborder-radius: 4px;\n\tpadding: 2% 4%;\n\tmargin: 5px 0;\n\tfont-size: 14px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center !important;\n\t&:hover {\n\t\tbackground-color: #f0f0f0;\n\t}\n\t&[disabled] {\n\t\topacity: 0.5;\n\t}\n"]);return I=function(){return s},s}var N=p.c.div(I()),z=p.c.img(k()),M=p.c.div(y()),S=p.c.h1(w()),C=function(s){var n=s.disabled,t=void 0!==n&&n,e=s.children,a=s.title,i=s.userImage,o=void 0===i?"https://citas.in/media/authors/diego-maradona.detail.jpg":i;return r.a.createElement(N,{disabled:t},r.a.createElement(M,null,r.a.createElement(z,{src:o}),r.a.createElement(S,null,a)),e)},_=t(26),U=t.n(_),A=t(32),L=function(){var s=Object(A.a)(U.a.mark((function s(n){var e,r,a,i,o,c,u,l,d;return U.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=t(90),r=t(122),a=[],i=function(s){u(document.getElementById("localVideo"),s);var t=r("http://localhost:3333/ws/signaling");return t.on("connect",(function(){t.on("signal",(function(s){var e=s.id,r=s.data,i=s.peerId,u=JSON.parse(r);if("offer"===u.type&&e===n){var l=c(!1);o(l,t,i),l.signal(u),a.push({id:i,peer:l})}else if("answer"===u.type&&e===n){a.filter((function(s){return s.id===i}))[0].peer.signal(u)}})),t.on("joiner",(function(s){console.log("A new user has joined this room");var n=c(!0);o(n,t,s),a.push({id:s,peer:n})})),t.on("left",(function(s){console.log("A user has left the channel");var n=a.indexOf(s);n>-1&&(a[n].peer.destroy(),a.splice(n,1),console.log(a))}))})),t},o=function(s,t,e){s.on("signal",(function(s){var r=JSON.stringify(s);t.emit("signal",{id:e,offerOrAnswer:r,peerId:n})})),s.on("connect",(function(){console.log("A peer has just connected")})),s.on("error",(function(s){console.log(s)})),s.on("data",(function(s){document.getElementById("messages").textContent+=s+"\n"})),s.on("stream",(function(s){var n=l();u(n,s)}))},c=function(s){return new e({initiator:s,trickle:!1,config:{iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:"turn:webrtcweb.com:7788",username:"muazkh",credential:"muazkh"}]}})},u=function(s,n){"srcObject"in s?s.srcObject=n:s.src=window.URL.createObjectURL(n),s.play()},l=function(){var s=document.getElementById("videos"),n=document.createElement("video");return s.appendChild(n),n},s.prev=8,s.next=11,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 11:return d=s.sent,s.abrupt("return",i(d));case 15:s.prev=15,s.t0=s.catch(8),console.log("Error: ".concat(s.t0.message));case 18:case"end":return s.stop()}}),s,null,[[8,15]])})));return function(n){return s.apply(this,arguments)}}(),q=function(s){var n=s.server,t=s.channels,a=Object(e.useContext)(l).username,i=function(s){var n=Object(e.useState)(""),t=Object(u.a)(n,2),r=t[0],a=t[1];return Object(e.useEffect)((function(){L(s).then((function(s){return a(s)}))}),[s]),[r,a]}(a),o=Object(u.a)(i,1)[0];return t?r.a.createElement(x,{className:"column is-2 has-background-light"},r.a.createElement(E,null,n.name),r.a.createElement(j,null,t.map((function(s,t){return r.a.createElement(O,{to:"/".concat(n.id,"/").concat(s._id),onClick:function(){o.emit("left",{id:a}),o.emit("join",{id:a,room:s._id})},key:t},r.a.createElement(C,{title:s.name}))})))):r.a.createElement(x,{className:"column is-2 has-background-light"},r.a.createElement(E,null,"Server"),r.a.createElement(j,null,r.a.createElement("p",null,"Loading...")))};t(40);function F(){var s=Object(m.a)(["\n    from {\n        transform: scale(1);\n    }\n    to {\n        transform: scale(1.1);\n    }\n"]);return F=function(){return s},s}function R(){var s=Object(m.a)(["\n    from {\n        filter: blur(0.2px);\n        border: 1px solid #ededed;\n    }\n\n    to {\n        filter: blur(0);\n        border: 1px solid rgb(140, 136, 168);\n    }\n"]);return R=function(){return s},s}function $(){var s=Object(m.a)(["\n    from {\n        background-color: inherit;\n\t\tborder: 1px solid #e6e6e6;\n    }\n\n    to {\n\t\tbackground-color: #e6e6e6;\n\t\tborder: 1px solid #d9d9d9;\n    }\n"]);return $=function(){return s},s}function B(){var s=Object(m.a)(["\n\t\tanimation: "," "," "," forwards;\n\t"]);return B=function(){return s},s}function J(){var s=Object(m.a)(["\n\t\tanimation: "," "," "," forwards;\n    "]);return J=function(){return s},s}function T(){var s=Object(m.a)(["\n\t\tanimation: "," "," "," forwards; /* => forwards makes the animation stay as it finishes */\n    "]);return T=function(){return s},s}var D=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=s.time,t=void 0===n?"0.5s":n,e=s.type,r=void 0===e?"ease":e;return Object(p.b)(T(),t,Q,r)},P=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=s.time,t=void 0===n?"0.2s":n,e=s.type,r=void 0===e?"ease":e;return Object(p.b)(J(),t,V,r)},Q=Object(p.d)($()),V=Object(p.d)(R()),W=Object(p.d)(F());function Y(){var s=Object(m.a)(["\n\tpadding: 0 5% 5% 5%;\n"]);return Y=function(){return s},s}function G(){var s=Object(m.a)(["\n\tborder: 1px solid #ededed;\n\tbackground-color: #ededed;\n\tborder-radius: 4px;\n\theight: 35px;\n\twidth: 100%;\n\tpadding: 5px 10px;\n\tfont-family: BalooPaaji;\n\t&:hover {\n\t\tbackground-color: #e8e8e8;\n\t}\n\t&:focus {\n\t\t",";\n\t}\n"]);return G=function(){return s},s}function H(){var s=Object(m.a)(["\n\tfont-size: 20px;\n"]);return H=function(){return s},s}function K(){var s=Object(m.a)(["\n\tpadding: 0 5% 0 5%;\n\toverflow-y: auto;\n\tword-wrap: break-word;\n\theight: 75%;\n"]);return K=function(){return s},s}function X(){var s=Object(m.a)(["\n\tpadding: 12px 12px 12px 38px;\n\tbackground-color: #d1d1d1;\n"]);return X=function(){return s},s}function Z(){var s=Object(m.a)(["\n\tmargin-top: 70px;\n"]);return Z=function(){return s},s}var ss=p.c.div(Z()),ns=p.c.div(X()),ts=p.c.div(K()),es=p.c.h1(H()),rs=p.c.input(G(),P()),as=p.c.div(Y()),is=function(s){var n=s.channel;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ss,{className:"column is-paddingless is-5 has-background-grey-lighter"},r.a.createElement(ns,null,r.a.createElement(es,null,n?"".concat(n.name,"'s chat"):"Channel's name")),r.a.createElement(ts,null,"ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"),r.a.createElement(as,null,r.a.createElement(rs,{type:"text",placeholder:"Your message on chat"}))),r.a.createElement(ss,{id:"videos",className:"column is-3 has-background-grey-lighter"},r.a.createElement("video",{id:"localVideo",autoPlay:!0,muted:!0,playsInline:!0})))};function os(){var s=Object(m.a)(["\n\tborder: 1px solid #e8e8e8;\n\tbackground-color: #ededed;\n\tborder-radius: 4px;\n\theight: 35px;\n\twidth: 100%;\n\tpadding: 5px 10px;\n\tfont-family: BalooPaaji;\n\t&:hover {\n\t\tbackground-color: #e8e8e8;\n\t}\n\t&:focus {\n\t\t",";\n\t}\n"]);return os=function(){return s},s}function cs(){var s=Object(m.a)(["\n\tposition: absolute;\n\ttop: -5px;\n\tleft: 18px;\n\tborder-radius: 50px !important;\n\tborder: 2px solid #dbdbdb;\n\tcolor: #ffffff !important;\n\tbackground-color: rgb(140, 136, 168) !important;\n"]);return cs=function(){return s},s}function us(){var s=Object(m.a)(["\n\tpadding: 6% 6% 0 6%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return us=function(){return s},s}function ls(){var s=Object(m.a)(["\n\tfont-size: 15px !important;\n\tmargin: 9px 0 8px 4px;\n"]);return ls=function(){return s},s}function ds(){var s=Object(m.a)(["\n\toverflow-y: auto;\n"]);return ds=function(){return s},s}function fs(){var s=Object(m.a)(["\n\tleft: -20px;\n\twidth: 240px;\n\tpadding: 0;\n"]);return fs=function(){return s},s}function ms(){var s=Object(m.a)(["\n\tposition: fixed;\n\tfont-size: 20px !important;\n\tmargin: 0 0 4px 0;\n"]);return ms=function(){return s},s}function ps(){var s=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return ps=function(){return s},s}function vs(){var s=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return vs=function(){return s},s}function bs(){var s=Object(m.a)(["\n\tborder-top-left-radius: 5px;\n\tmargin-top: 35px;\n\tpadding: 15px 15px 15px 15px;\n\tbox-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return bs=function(){return s},s}var gs=p.c.div(bs()),hs=p.c.div(vs()),xs=p.c.button(ps(),(function(s){return!s.disabled&&D({time:"0.2s"})})),Es=p.c.h1(ms()),js=p.c.div(fs()),Os=p.c.div(ds()),ws=p.c.h2(ls()),ys=p.c.div(us()),ks=p.c.span(cs()),Is=p.c.input(os(),P()),Ns=t(149);function zs(){var s=Object(m.a)(["\n\tquery filterUsers($username: String!) {\n\t\tfilterUsers(username: $username) {\n\t\t\t_id\n\t\t\tusername\n\t\t}\n\t}\n"]);return zs=function(){return s},s}var Ms=Object(o.b)(zs()),Ss=function(s){var n=s.username,t=s.children;return r.a.createElement(Ns.b,{query:Ms,variables:{username:n}},t)};function Cs(){var s=Object(m.a)(["\n\tmutation($userId: ID!) {\n\t\taddFriend(userId: $userId) {\n\t\t\t_id\n\t\t\tusername\n\t\t}\n\t}\n"]);return Cs=function(){return s},s}var _s=Object(o.b)(Cs()),Us=function(s){var n=s.children;return r.a.createElement(Ns.a,{mutation:_s},n)},As=t(17);function Ls(){var s=Object(m.a)(["\n    display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return Ls=function(){return s},s}function qs(){var s=Object(m.a)(["\n    overflow-y: auto;\n"]);return qs=function(){return s},s}function Fs(){var s=Object(m.a)(["\n    font-family: BalooPaaji;\n    font-size: 22px;\n"]);return Fs=function(){return s},s}var Rs=p.c.h1(Fs()),$s=p.c.div(qs()),Bs=p.c.button(Ls(),(function(s){return!s.disabled&&D({time:"0.2s"})})),Js=function(s){var n=s.users,t=s.onClick;return r.a.createElement("div",null,r.a.createElement(Rs,null,"Results"),r.a.createElement($s,null,n.length>0?n.map((function(s,n){var e=s.username,a=s._id;return r.a.createElement(C,{key:n,title:e},r.a.createElement(Bs,{onClick:function(){t({userId:a})}},r.a.createElement(As.e,{size:"15px"})))})):r.a.createElement("h1",null,"No users found")))},Ts=function(s){var n=Object(e.useState)(s),t=Object(u.a)(n,2),r=t[0],a=t[1];return{value:r,onChange:function(s){return a(s.target.value)}}},Ds=t(76),Ps=function(s){var n=s.friends,t=s.friendRequests,e=Ts("");return r.a.createElement(gs,{className:"column is-2 has-background-light"},e.value?r.a.createElement(Us,null,(function(s){var n=function(n){var t=n.userId;s({variables:{userId:t}}).then((function(s){return console.log(s)})).catch((function(s){return console.log(s)}))};return r.a.createElement(Ss,{username:e.value},(function(s){var t=s.loading,e=s.data;return t?r.a.createElement("h1",{style:{"font-size":"22px"}},"Results"):r.a.createElement(Js,{onClick:n,users:e&&e.filterUsers})}))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(Es,null,"Friends"),r.a.createElement("div",{style:{marginTop:"25px"}},r.a.createElement(Os,null,r.a.createElement(ws,null,"Online"),n.map((function(s,n){return r.a.createElement(C,{key:n,title:s.username},r.a.createElement(hs,null,r.a.createElement(xs,null,r.a.createElement(As.a,{size:"15px"})),r.a.createElement(xs,null,r.a.createElement(As.d,{size:"15px"}))))})),r.a.createElement(ws,null,"Offline"),["Agustin","Santiago","Manuel","Agustin","Santiago","Manuel"].map((function(s,n){return r.a.createElement(C,{key:n,title:s,disabled:!0},r.a.createElement(hs,null,r.a.createElement(xs,{disabled:!0},r.a.createElement(As.a,{size:"15px"})),r.a.createElement(xs,null,r.a.createElement(As.d,{size:"15px"}))))}))))),r.a.createElement("div",null,r.a.createElement(Is,Object.assign({placeholder:"Find new friends",type:"text"},e)),r.a.createElement(ys,null,r.a.createElement("div",{className:"dropdown is-up is-hoverable"},r.a.createElement(Ds.a,{size:"30px",className:"dropdown-trigger"},r.a.createElement("button",{className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu4"},r.a.createElement("span",null,r.a.createElement(ws,{className:"is-marginless"},"Friend Requests")),r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),r.a.createElement(js,{className:"dropdown-menu",id:"dropdown-menu4",role:"menu"},r.a.createElement("div",{className:"dropdown-content is-paddingless"},r.a.createElement("div",{className:"dropdown-item is-paddingless"},r.a.createElement(Us,null,(function(s){return t.length>0?t.map((function(n,t){var e=n.username,a=n._id;return r.a.createElement(C,{key:t,title:e},r.a.createElement(hs,null,r.a.createElement(xs,{onClick:function(){!function(n){var t=n.userId;s({variables:{userId:t}}).catch((function(s){return s}))}({userId:a})}},r.a.createElement(As.c,{size:"15px"})),r.a.createElement(xs,null,r.a.createElement(As.b,{size:"15px"}))))})):r.a.createElement("h1",null,"You don't have friend requests")}))))),t.length>0&&r.a.createElement(ks,{className:"tag"},t.length)),r.a.createElement(As.f,{size:"30px",onClick:function(){alert("Settings!")}}))))};function Qs(){var s=Object(m.a)(["\n\tfont-family: BalooPaaji;\n\tcolor: #8c88a8;\n\tfont-size: 16px;\n\tborder-radius: 8px;\n\tbackground-color: inherit;\n\tborder: 1px solid #8c88a8;\n\tpadding: 10px;\n\t&:hover{\n\t\tborder: 1px solid #464646;\n\t\tcolor: #464646;\n\t}\n"]);return Qs=function(){return s},s}function Vs(){var s=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 15px;\n\ttext-align: left !important;\n"]);return Vs=function(){return s},s}function Ws(){var s=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center !important;\n\tmargin: 0 400px 0 0;\n\theight: 10vh;\n\tpadding: 8px;\n\tborder: 2px solid #ededed;\n"]);return Ws=function(){return s},s}function Ys(){var s=Object(m.a)(["\n\tborder: 1px solid #ddd;\n\tborder-radius: 50%;\n\theight: auto;\n\toverflow: hidden;\n    margin: 0 0 0 10px;\n\tobject-fit: cover;\n\theight: 45px;\n\twidth: 45px;\n"]);return Ys=function(){return s},s}var Gs=p.c.img(Ys()),Hs=p.c.nav(Ws()),Ks=p.c.span(Vs()),Xs=p.c.button(Qs()),Zs=function(s){var n=s.username,t=s.email,a=Object(e.useContext)(l).removeAuth;return r.a.createElement(Hs,{className:"navbar is-fixed-bottom is-white",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(Gs,{src:"https://citas.in/media/authors/diego-maradona.detail.jpg"}),r.a.createElement("a",{href:"www.google.com",role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(Ks,{className:"navbar-item"},r.a.createElement("p",{className:"is-size-5"},n),r.a.createElement("p",{className:"is-size-7"},t))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(Xs,{onClick:a,href:"www.google.com"},"Log out")))))};function sn(){var s=Object(m.a)(["\n\theight: 60px;\n\tpadding: 5px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\tposition: fixed;\n\tborder-radius: 0 0 12px 12px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n"]);return sn=function(){return s},s}var nn=p.c.div(sn());function tn(){var s=Object(m.a)(["\n\t\t\t {\n\t\t\t\ttransform: scale(1.1);\n\t\t\t}\n\t\t"]);return tn=function(){return s},s}function en(){var s=Object(m.a)(["\n\tmargin: 0 4px 0 4px;\n\tborder-radius: 20%;\n\t&:hover {\n\t\t",";\n\t}\n\t","\n"]);return en=function(){return s},s}function rn(){var s=Object(m.a)(["\n\tborder-radius: 20%;\n\toverflow: hidden;\n\tobject-fit: cover;\n\twidth: 50px;\n\theight: 50px;\n\tmin-width: 40px;\n\tmin-height: 40px;\n\tmax-height: 100%;\n\tmax-width: 100%;\n"]);return rn=function(){return s},s}var an=p.c.img(rn()),on=Object(p.c)(f.a)(en(),function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=s.time,t=void 0===n?"0.8s":n,e=s.type,r=void 0===e?"ease":e;return Object(p.b)(B(),t,W,r)}({time:"0.1s"}),(function(s){return s.currentserver&&Object(p.b)(tn())})),cn=function(s){var n=s._id,t=s.currentserver,e=void 0!==t&&t,a=s.img,i=void 0===a?"https://upload.wikimedia.org/wikipedia/commons/8/8f/Indio_Solari_2_color.jpg":a;return r.a.createElement(on,{currentserver:e,to:"/".concat(n)},r.a.createElement(an,{src:i}))},un=function(s){var n=s.currentServer,t=void 0===n?null:n,e=s.servers,a=void 0===e?[1,2,3,4,5,6,7,8,9,10,11,12]:e;return r.a.createElement(nn,{className:"has-background-light column is-6 is-offset-3"},a.map((function(s,n){return r.a.createElement(cn,Object.assign({},s,{currentserver:t===a[n]._id,key:n}))})))};function ln(){var s=Object(m.a)(["\n\tanimation: rotate 2s linear infinite;\n\tmargin: -25px 0 0 -25px;\n\twidth: 50px;\n\theight: 50px;\n\n\t& .path {\n\t\tstroke: #5652bf;\n\t\tstroke-linecap: round;\n\t\tanimation: dash 1.5s ease-in-out infinite;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes dash {\n\t\t0% {\n\t\t\tstroke-dasharray: 1, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t50% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -35;\n\t\t}\n\t\t100% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -124;\n\t\t}\n\t}\n"]);return ln=function(){return s},s}function dn(){var s=Object(m.a)(["\n    font-family: BalooPaaji;\n    font-size: 30px;\n    margin: 25px 0 0 0;\n"]);return dn=function(){return s},s}function fn(){var s=Object(m.a)(["\n\tdisplay: flex;\n    flex-direction: column;\n\theight: 100vh;\n\twidth: 100vw;\n\tjustify-content: center;\n\talign-items: center;\n    background-color: #ededed;\n"]);return fn=function(){return s},s}var mn=p.c.div(fn()),pn=p.c.h1(dn()),vn=p.c.svg(ln()),bn=function(s){var n=s.message,t=void 0===n?"Loading":n;return r.a.createElement(mn,null,r.a.createElement(vn,{viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})),r.a.createElement(pn,null,t))};function gn(){var s=Object(m.a)(["\n\tquery getMe {\n\t\tgetMe {\n\t\t\t_id\n\t\t\tusername\n\t\t\temail\n\t\t\tservers {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t\tchannels {\n\t\t\t\t\t_id\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t\tfriendRequests {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]);return gn=function(){return s},s}var hn=Object(o.b)(gn()),xn=function(s){var n=s.children;return r.a.createElement(Ns.b,{query:hn},n)},En=function(s){var n=s.serverId,t=s.channelId;return r.a.createElement(xn,null,(function(s){var e=s.loading,a=s.error,i=s.data;if(console.log("render breo",i),e)return r.a.createElement(bn,{message:"Loading..."});if(a)return"Internal server error";var o=n?i.getMe.servers.filter((function(s){return s._id===n}))[0]:null,c=t&&o?o.channels.filter((function(s){return s._id===t}))[0]:null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(un,{servers:i.getMe.servers,currentServer:n}),r.a.createElement("div",{className:"columns is-marginless",style:{backgroundColor:"rgb(140, 136, 168)",height:"100vh",fontFamily:"BalooPaaji"}},r.a.createElement(q,{server:o&&{id:n,name:o.name},channels:o&&o.channels}),r.a.createElement(is,{channel:c}),r.a.createElement(Ps,{friends:i.getMe.friends,friendRequests:i.getMe.friendRequests})),r.a.createElement(Zs,{username:i.getMe.username,email:i.getMe.email}))}))};function jn(){var s=Object(m.a)(["\n\tmutation logIn($input: UserCredentials!) {\n\t\tlogIn(input: $input)\n\t}\n"]);return jn=function(){return s},s}var On=Object(o.b)(jn()),wn=function(s){var n=s.children;return r.a.createElement(Ns.a,{mutation:On},n)};function yn(){var s=Object(m.a)(["\n\ttext-decoration: none;\n"]);return yn=function(){return s},s}function kn(){var s=Object(m.a)(["\n\tcolor: red;\n\tfont-size: 14px;\n"]);return kn=function(){return s},s}function In(){var s=Object(m.a)(["\n\tfont-size: 22px;\n\tfont-weight: 500;\n\tpadding: 8px 0;\n\tfont-family: BalooPaaji;\n"]);return In=function(){return s},s}function Nn(){var s=Object(m.a)(["\n\tpadding: 16px;\n\tborder-radius: 3px;\n\tbackground-color: #f7f7f7;\n"]);return Nn=function(){return s},s}function zn(){var s=Object(m.a)(["\n\tborder: 1px solid #ededed;\n\tbackground-color: #ededed;\n\tborder-radius: 4px;\n\theight: 35px;\n\twidth: 100%;\n\tpadding: 5px 10px;\n\tfont-family: BalooPaaji;\n\tmargin: 8px 0;\n\t&[disabled] {\n\t\topacity: 0.3;\n\t}\n\t&:hover {\n\t\tbackground-color: #e8e8e8;\n\t}\n\t&:focus {\n\t\t",";\n\t}\n"]);return zn=function(){return s},s}function Mn(){var s=Object(m.a)(["\n\tfont-family: BalooPaaji;\n\tfont-size: 12px;\n"]);return Mn=function(){return s},s}function Sn(){var s=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding: 0 40%;\n\theight: 100vh;\n\tbackground-color: #e0e0e0;\n"]);return Sn=function(){return s},s}var Cn=p.c.form(Sn()),_n=p.c.span(Mn()),Un=p.c.input(zn(),P()),An=p.c.div(Nn()),Ln=p.c.h2(In()),qn=p.c.span(kn()),Fn=Object(p.c)(f.a)(yn());function Rn(){var s=Object(m.a)(["\n    background: #8d00ff;\n    border: 0;\n    border-radius: 3px;\n    color: #fff;\n    height: 32px;\n    display: block;\n    width: 100%;\n    margin: 8px 0;\n    text-align: center;\n    font-family: BalooPaaji;\n    &[disabled] {\n        opacity: .3;\n    }\n"]);return Rn=function(){return s},s}var $n=p.c.button(Rn()),Bn=function(s){var n=s.children,t=s.onClick,e=s.disabled;return r.a.createElement($n,{disabled:e,onClick:t},n)},Jn=function(s){var n=s.disabled,t=s.onSubmit,e=s.error,a=s.title,i=Ts(""),o=Ts(""),c=Ts(""),u=function(){var s=Object(A.a)(U.a.mark((function s(n){return U.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n.preventDefault(),s.next=3,t({username:i.value,email:o.value,password:c.value});case 3:case"end":return s.stop()}}),s)})));return function(n){return s.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Cn,{disabled:n,onSubmit:u},r.a.createElement(An,null,r.a.createElement(Ln,null,a),r.a.createElement(Un,Object.assign({disabled:n,placeholder:"Username"},i)),"Sign Up"===a&&r.a.createElement(Un,Object.assign({disabled:n,placeholder:"Email",type:"email"},o)),r.a.createElement(Un,Object.assign({disabled:n,placeholder:"Password",type:"password"},c)),e&&r.a.createElement(qn,null,e),r.a.createElement(Bn,{disabled:n},n?"Loading":a),"Login"===a?r.a.createElement(_n,null,"New here?",r.a.createElement(Fn,{to:"/signup"}," Create an account")):r.a.createElement(_n,null,"Already have an account?",r.a.createElement(Fn,{to:"/login"}," Login here")))))},Tn=function(){var s=Object(e.useContext)(l).activateAuth;return r.a.createElement(wn,null,(function(n,t){var e=t.loading,a=t.error&&"Wrong username or password";return r.a.createElement(Jn,{onSubmit:function(t){var e=t.username,r=t.password;n({variables:{input:{username:e,password:r}}}).then((function(n){var t=n.data.logIn;s(t)})).catch((function(s){return s}))},disabled:e,error:a,title:"Login"})}))};function Dn(){var s=Object(m.a)(["\n    mutation signUp($input: UserInput!) {\n        signUp(input: $input)\n    }\n"]);return Dn=function(){return s},s}var Pn=Object(o.b)(Dn()),Qn=function(s){var n=s.children;return r.a.createElement(Ns.a,{mutation:Pn},n)},Vn=function(){var s=Object(e.useContext)(l).activateAuth;return r.a.createElement(Qn,null,(function(n,t){var e=t.loading,a=t.error,i=a&&a.graphQLErrors&&a.graphQLErrors[0].message;return r.a.createElement(Jn,{onSubmit:function(t){var e=t.username,r=t.email,a=t.password;n({variables:{input:{username:e,email:r,password:a}}}).then((function(n){var t=n.data.signUp;s(t)})).catch((function(s){return s}))},disabled:e,error:i,title:"Sign Up"})}))},Wn=t(43),Yn=t.n(Wn);function Gn(){var s=Object(m.a)(["\n  \thtml, body {\n\t\theight: 100%;\n  \t}\n\n\t@font-face {\n        font-family: 'BalooPaaji';\n        src: local('BalooPaaji'), local('BalooPaaji'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);return Gn=function(){return s},s}var Hn=Object(p.a)(Gn(),Yn.a,Yn.a),Kn=new o.a({uri:"http://localhost:3333/api",request:function(s){var n=window.sessionStorage.getItem("token"),t=n||"";s.setContext({headers:{authorization:t}})},onError:function(s){var n=s.graphQLErrors;n&&"User must be authorized"===n[0].message&&(window.sessionStorage.removeItem("token"),window.location.href="/")}});i.a.render(r.a.createElement(d,null,r.a.createElement(c.a,{client:Kn},r.a.createElement((function(){var s=Object(e.useContext)(l).isAuth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Hn,null),r.a.createElement(f.c,null,!s&&r.a.createElement(Tn,{path:"/login"}),!s&&r.a.createElement(Vn,{path:"/signup"}),!s&&r.a.createElement(f.b,{noThrow:!0,from:"/",to:"/login"}),s&&r.a.createElement(En,{path:"/"}),s&&r.a.createElement(En,{path:"/:serverId"}),s&&r.a.createElement(En,{path:"/:serverId/:channelId"}),s&&r.a.createElement(f.b,{noThrow:!0,from:"/login",to:"/"}),s&&r.a.createElement(f.b,{noThrow:!0,from:"/signup",to:"/"})))}),null))),document.getElementById("app"))},43:function(s,n,t){s.exports=t.p+"static/media/BalooPaaji-Regular.ee653992.ttf"},78:function(s,n,t){s.exports=t(147)}},[[78,1,2]]]);
//# sourceMappingURL=main.4844cecb.chunk.js.map