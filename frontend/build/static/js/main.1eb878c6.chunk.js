(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(s,t){},116:function(s,t){},144:function(s,t){},149:function(s,t,n){"use strict";n.r(t);var e=n(1),r=n.n(e),a=n(68),o=n.n(a),i=n(15),c=n(8),u=n(13),l=Object(e.createContext)(),d=function(s){var t=s.children,n=Object(e.useState)((function(){return window.sessionStorage.getItem("token")})),a=Object(u.a)(n,2),o=a[0],i=a[1],c={isAuth:o,activateAuth:function(s){i(!0),window.sessionStorage.setItem("token",s)},removeAuth:function(){i(!1),window.sessionStorage.removeItem("token")}};return r.a.createElement(l.Provider,{value:c},t)},f=(l.Consumer,n(14)),m=n(78),p=(n(35),n(3)),b=n(4);function v(){var s=Object(p.a)(["\n\tfont-family: Montserrat;\n\tfont-size: 16px;\n\tborder-radius: 3px;\n\tborder: 0;\n\theight: 34px;\n\twidth: 90px;\n\tfont-size: 16px;\n\tbackground-color: #c86740;\n\tcolor: #e6e6e6;\n\tfont-weight: bold;\n\ttext-align: center;\n\tpadding: 5px;\n\t&:hover {\n\t\tbackground-color: #9b5134;\n\t\tcolor: #aeaeae;\n\t}\n"]);return v=function(){return s},s}function h(){var s=Object(p.a)(["\n\tcolor: #ededed;\n\tmargin-left: 15px;\n\tfont-weight: bold;\n"]);return h=function(){return s},s}function g(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]);return g=function(){return s},s}function x(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmin-height: 50px;\n\theight: 50px;\n\twidth: 100vw;\n\tpadding: 0 20px;\n\tbackground-color: #242424;\n"]);return x=function(){return s},s}function E(){var s=Object(p.a)(["\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tobject-fit: cover;\n\theight: 35px;\n\twidth: 35px;\n"]);return E=function(){return s},s}var j=b.c.img(E()),w=b.c.div(x()),O=b.c.span(g()),y=b.c.p(h()),k=Object(b.c)(f.a)(v()),I=function(s){var t=s.username,n=Object(e.useContext)(l).removeAuth;return r.a.createElement(w,null,r.a.createElement(O,null,r.a.createElement(j,{src:"https://citas.in/media/authors/diego-maradona.detail.jpg"}),r.a.createElement(y,null,t)),r.a.createElement(k,{to:"/",onClick:n},"Log out"))};function z(){var s=Object(p.a)(["\n\tcolor: #4a4a4a;\n    text-align: center;\n    text-decoration: none;\n"]);return z=function(){return s},s}function S(){var s=Object(p.a)(["\n\tfont-size: 18px;\n\tcolor: #ededed;\n"]);return S=function(){return s},s}function N(){var s=Object(p.a)(["\n\tfont-size: 24px;\n\tfont-weight: bold;\n\tmargin: 0 0 10px 0;\n\tcolor: #ededed;\n"]);return N=function(){return s},s}function _(){var s=Object(p.a)(["\n\tbackground-color: #3c3c3c;\n\tpadding: 15px 15px 15px 15px;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-y: auto;\n"]);return _=function(){return s},s}var C=b.c.div(_()),M=b.c.h1(N()),A=b.c.h1(S()),U=Object(b.c)(f.a)(z());function q(){var s=Object(p.a)(["\n\tfont-size: 15px;\n\tcolor: #ededed;\n"]);return q=function(){return s},s}function R(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\toverflow-x: hidden;\n"]);return R=function(){return s},s}function L(){var s=Object(p.a)(["\n\tmargin: 0 8px 0 0;\n\tborder-radius: 50%;\n\theight: auto;\n\toverflow: hidden;\n\tobject-fit: cover;\n\theight: 30px;\n\twidth: 30px;\n\tmin-width: 30px;\n\tmin-height: 30px;\n"]);return L=function(){return s},s}function F(){var s=Object(p.a)(["\n\tborder-radius: 4px;\n\tpadding: 2% 4%;\n\tmargin: 5px 0;\n\tfont-size: 14px;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\t&:hover {\n\t\tbackground-color: #393939;\n\t}\n\t&[disabled] {\n\t\topacity: 0.5;\n\t}\n"]);return F=function(){return s},s}var $=b.c.div(F()),B=b.c.img(L()),P=b.c.div(R()),D=b.c.h1(q()),Q=function(s){var t=s.disabled,n=void 0!==t&&t,e=s.children,a=s.title,o=s.img,i=void 0===o||o,c=s.userImage,u=void 0===c?"https://citas.in/media/authors/diego-maradona.detail.jpg":c;return r.a.createElement($,{disabled:n},r.a.createElement(P,null,i&&r.a.createElement(B,{src:u}),r.a.createElement(D,null,a)),e)},T=n(26),W=n.n(T),J=n(32),Y=function(){var s=Object(J.a)(W.a.mark((function s(t){var e,r,a,o,i,c,u,l,d;return W.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=n(92),r=n(124),a=[],o=function(s){var n=l(!0);u(n,s);var e=r("https://moran.mtprz.dev/ws/signaling");return e.on("connect",(function(){e.on("signal",(function(n){var r=n.id,o=n.offerOrAnswer,u=n.peerId;if("offer"===o.type&&r===t){var l=c(!1,s);i(l,e,u),l.signal(o),a.push({id:u,peer:l})}else if("answer"===o.type&&r===t){a.filter((function(s){return s.id===u}))[0].peer.signal(o)}})),e.on("joiner",(function(t){console.log("A new user has joined this room");var n=c(!0,s);i(n,e,t),a.push({id:t,peer:n})})),e.on("left",(function(s){console.log("A user has left the channel");var t=a.indexOf(s);t>-1&&(a[t].peer.destroy(),a.splice(t,1),console.log(a))}))})),e},i=function(s,n,e){s.on("signal",(function(s){n.emit("signal",{id:e,offerOrAnswer:s,peerId:t})})),s.on("connect",(function(){console.log("A peer has just connected")})),s.on("error",(function(s){console.log(s)})),s.on("stream",(function(s){var t=l(!1);u(t,s)}))},c=function(s,t){return new e({initiator:s,trickle:!1,stream:t,config:{iceServers:[{urls:["stun:stun.l.google.com:19302"]},{urls:"turn:webrtcweb.com:7788",username:"muazkh",credential:"muazkh"}]}})},u=function(s,t){"srcObject"in s?s.srcObject=t:s.src=window.URL.createObjectURL(t),s.play()},l=function(s){var t=document.getElementById("videos"),n=document.createElement("video");return n.muted=s,n.playsInline=!0,n.autoPlay=!0,t.appendChild(n),n},s.prev=8,s.next=11,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 11:return d=s.sent,s.abrupt("return",o(d));case 15:s.prev=15,s.t0=s.catch(8),console.log("Error: ".concat(s.t0.message));case 18:case"end":return s.stop()}}),s,null,[[8,15]])})));return function(t){return s.apply(this,arguments)}}(),G=function(s){var t=s.server,n=s.channels,a=s.username,o=function(s){var t=Object(e.useState)(),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(e.useEffect)((function(){Y(s).then((function(s){return a(s)}))}),[s]),[r,a]}(a),i=Object(u.a)(o,1)[0];return n?r.a.createElement(C,{className:"column is-2"},r.a.createElement(M,null,t.name),r.a.createElement("div",null,r.a.createElement(A,null,"Chats"),r.a.createElement("div",null,r.a.createElement(Q,{img:!1,title:"chat-1"}),r.a.createElement(Q,{img:!1,title:"chat-2"}),r.a.createElement(Q,{img:!1,title:"memes"}))),r.a.createElement("div",null,r.a.createElement(A,null,"Channels (voice)"),n.map((function(s,n){return r.a.createElement(U,{to:"/".concat(t.id,"/").concat(s._id),onClick:function(){i.emit("left",{id:a}),i.emit("join",{id:a,room:s._id})},key:n},r.a.createElement(Q,{img:!1,title:s.name}))})))):r.a.createElement(C,{className:"column is-2"},r.a.createElement(M,null,"Server"),r.a.createElement("div",null,r.a.createElement("p",null,"Loading...")))};function H(){var s=Object(p.a)(["\n    from {\n        width: 0%;\n        left: 50%;\n    }\n    to {\n        width: 70%;\n        left: 15%;\n    }\n"]);return H=function(){return s},s}function K(){var s=Object(p.a)(["\n    from {\n        transform: scale(1);\n    }\n    to {\n        transform: scale(1.1);\n    }\n"]);return K=function(){return s},s}function V(){var s=Object(p.a)(["\n    from {\n        filter: blur(0.2px);\n        border: 1px solid #ededed;\n    }\n\n    to {\n        filter: blur(0);\n        border: 1px solid rgb(140, 136, 168);\n    }\n"]);return V=function(){return s},s}function X(){var s=Object(p.a)(["\n    from {\n        background-color: inherit;\n\t\tborder: 1px solid inherit;\n    }\n\n    to {\n\t\tbackground-color: #3b3b3b;\n\t\tborder: 1px solid #9b5134;\n    }\n"]);return X=function(){return s},s}function Z(){var s=Object(p.a)(["\n\t\tanimation: "," "," "," forwards;\n\t"]);return Z=function(){return s},s}function ss(){var s=Object(p.a)(["\n\t\tanimation: "," "," "," forwards;\n    "]);return ss=function(){return s},s}function ts(){var s=Object(p.a)(["\n\t\tanimation: "," "," "," forwards; /* => forwards makes the animation stay as it finishes */\n    "]);return ts=function(){return s},s}var ns=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.time,n=void 0===t?"0.5s":t,e=s.type,r=void 0===e?"ease":e;return Object(b.b)(ts(),n,es,r)},es=Object(b.d)(X()),rs=(Object(b.d)(V()),Object(b.d)(K())),as=Object(b.d)(H());function os(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder-top: 1px solid #3c3c3c;\n\tpadding: 3%;\n\tflex-grow: 1;\n"]);return os=function(){return s},s}function is(){var s=Object(p.a)(["\n\tborder: 0;\n\theight: 38px;\n\tbackground-color: #5e5e5e;\n\tborder-radius: 4px;\n\twidth: 100%;\n\tcolor: #ededed;\n\tfont-weight: bolder;\n\tfont-size: 16px;\n\tpadding: 10px;\n\tfont-family: Montserrat;\n"]);return is=function(){return s},s}function cs(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return cs=function(){return s},s}function us(){var s=Object(p.a)(["\n\tfont-size: 25px;\n\tfont-weight: bold;\n"]);return us=function(){return s},s}function ls(){var s=Object(p.a)(["\n\tpadding: 0 5% 0 5%;\n\toverflow-y: auto;\n\tword-wrap: break-word;\n\tflex-grow: 1;\n\tcolor: #b7b7b7;\n"]);return ls=function(){return s},s}function ds(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 12px 12px 12px 38px;\n\tbackground-color: #282828;\n\tcolor: #ededed;\n\tborder-bottom: 1px solid #3c3c3c;\n\tborder-top: 1px solid #3c3c3c;\n\tflex-grow: 1;\n"]);return ds=function(){return s},s}function fs(){var s=Object(p.a)(["\n\tpadding: 2%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #282828;\n\theight: calc(100vh - 60px - 50px);\n\tborder-top: 1px solid;\n\tborder-left: 1px solid;\n"]);return fs=function(){return s},s}function ms(){var s=Object(p.a)(["\n\tpadding: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: #282828;\n\theight: calc(100vh - 60px - 50px);\n"]);return ms=function(){return s},s}function ps(){var s=Object(p.a)(["\n\tmargin: 0;\n"]);return ps=function(){return s},s}var bs=b.c.div(ps()),vs=b.c.div(ms()),hs=b.c.div(fs()),gs=b.c.div(ds()),xs=b.c.div(ls()),Es=b.c.p(us()),js=b.c.button(cs(),(function(s){return!s.disabled&&ns({time:"0.2s"})})),ws=b.c.input(is()),Os=b.c.div(os()),ys=n(43),ks=function(s){var t=s.channel,n=Object(e.useState)(!0),a=Object(u.a)(n,2),o=a[0],i=a[1],c=o?ys.a:ys.b;return r.a.createElement(bs,{className:"columns"},r.a.createElement(vs,{className:"column ".concat(o?"is-11":"is-8")},r.a.createElement(gs,null,r.a.createElement(Es,null,t?"".concat(t.name,"'s chat"):"Channel's name"),r.a.createElement(js,{onClick:function(){return i(!o)}},r.a.createElement(c,{size:"20px",color:"#ededed"}))),r.a.createElement(xs,null,"ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"),r.a.createElement(Os,null,r.a.createElement(ws,{type:"text",placeholder:"Your message on chat"}))),r.a.createElement(hs,{id:"videos",className:"column ".concat(o?"is-1":"is-4")}))};function Is(){var s=Object(p.a)(["\n\theight: 60px;\n\tpadding: 7px;\n\toverflow-x: auto;\n\toverflow-y: hidden;\n\tbackground-color: #282828;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return Is=function(){return s},s}var zs=b.c.div(Is());function Ss(){var s=Object(p.a)(["\n\t\t\t {\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: -7px;\n\t\t\t\t\theight: 3px;\n\t\t\t\t\tbackground: #ededed;\n\t\t\t\t\tborder-radius: 0px 0px 7px 7px;\n\t\t\t\t\t",";\n\t\t\t\t}\n\t\t\t\ttransform: scale(1.1);\n\t\t\t}\n\t\t"]);return Ss=function(){return s},s}function Ns(){var s=Object(p.a)(["\n\t\t\t {\n\t\t\t\t&:hover {\n\t\t\t\t\t",";\n\t\t\t\t}\n\t\t\t}\n\t\t"]);return Ns=function(){return s},s}function _s(){var s=Object(p.a)(["\n\tmargin: 0 4px 0 4px;\n\tdisplay: inline-flex;\n\tborder-radius: 18%;\n\tposition: relative;\n\t",";\n\t",";\n"]);return _s=function(){return s},s}function Cs(){var s=Object(p.a)(["\n\tborder-radius: 20%;\n\tborder: 1px solid #3c3b3b;\n\toverflow: hidden;\n\tobject-fit: cover;\n\twidth: 42px;\n\theight: 42px;\n\tmin-width: 42px;\n\tmin-height: 42px;\n"]);return Cs=function(){return s},s}var Ms=b.c.img(Cs()),As=Object(b.c)(f.a)(_s(),(function(s){return!s.currentserver&&Object(b.b)(Ns(),function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.time,n=void 0===t?"0.8s":t,e=s.type,r=void 0===e?"ease":e;return Object(b.b)(ss(),n,rs,r)}({time:"0.1s"}))}),(function(s){return s.currentserver&&Object(b.b)(Ss(),function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.time,n=void 0===t?"0.2s":t,e=s.type,r=void 0===e?"ease":e;return Object(b.b)(Z(),n,as,r)}({time:"0.2s"}))})),Us=function(s){var t=s._id,n=Object(u.a)(s.channels,1)[0],e=s.currentserver,a=void 0!==e&&e,o=s.img,i=void 0===o?"https://upload.wikimedia.org/wikipedia/commons/8/8f/Indio_Solari_2_color.jpg":o;return console.log(a),r.a.createElement(As,{currentserver:a,to:"/".concat(t,"/").concat(n._id)},r.a.createElement(Ms,{src:i}))},qs=function(s){var t=s.currentServer,n=void 0===t?null:t,e=s.servers;return r.a.createElement(zs,{className:"column is-12"},e.map((function(s,t){return r.a.createElement(Us,Object.assign({},s,{currentserver:n===e[t]._id,key:t}))})))};function Rs(){var s=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return Rs=function(){return s},s}var Ls=b.c.div(Rs()),Fs=function(s){var t=s.servers,n=s.channel,e=s.currentServer;return r.a.createElement(Ls,{className:"column is-paddingless is-8"},r.a.createElement(qs,{servers:t,currentServer:e}),r.a.createElement(ks,{channel:n}))};function $s(){var s=Object(p.a)(["\n\tmargin: 25px 0 0 0;\n\toverflow-y: auto;\n\toverflow-x: auto;\n"]);return $s=function(){return s},s}function Bs(){var s=Object(p.a)(["\n\toverflow-y: auto;\n"]);return Bs=function(){return s},s}function Ps(){var s=Object(p.a)(["\n\tposition: fixed;\n\tfont-size: 20px !important;\n\tfont-weight: bold;\n\tmargin: 0 0 4px 0;\n\tcolor: #ededed;\n"]);return Ps=function(){return s},s}function Ds(){var s=Object(p.a)(["\n\tfont-size: 15px !important;\n\tmargin: 9px 0 8px 4px;\n\tcolor: #ededed;\n"]);return Ds=function(){return s},s}function Qs(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return Qs=function(){return s},s}function Ts(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return Ts=function(){return s},s}var Ws=b.c.div(Ts()),Js=b.c.button(Qs(),(function(s){return!s.disabled&&ns({time:"0.2s"})})),Ys=b.c.h2(Ds()),Gs=b.c.h1(Ps()),Hs=b.c.div(Bs()),Ks=b.c.div($s()),Vs=n(18),Xs=function(s){var t=s.friends;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Gs,null,"Friends"),r.a.createElement(Ks,null,r.a.createElement(Hs,null,r.a.createElement(Ys,null,"Online"),t.map((function(s,t){return r.a.createElement(Q,{key:t,title:s.username},r.a.createElement(Ws,null,r.a.createElement(Js,null,r.a.createElement(Vs.c,{color:"#b7b7b7",size:"15px"}))))})),r.a.createElement(Ys,null,"Offline"),["Agustin","Santiago","Manuel","Agustin","Santiago","Manuel"].map((function(s,t){return r.a.createElement(Q,{key:t,title:s,disabled:!0},r.a.createElement(Ws,null,r.a.createElement(Js,null,r.a.createElement(Vs.c,{size:"15px"}))))})))))},Zs=n(151);function st(){var s=Object(p.a)(["\n\tquery filterUsers($username: String!) {\n\t\tfilterUsers(username: $username) {\n\t\t\t_id\n\t\t\tusername\n\t\t}\n\t}\n"]);return st=function(){return s},s}var tt=Object(i.b)(st()),nt=function(s){var t=s.username,n=s.children;return r.a.createElement(Zs.b,{query:tt,variables:{username:t}},n)};function et(){var s=Object(p.a)(["\n\tmutation($userId: ID!) {\n\t\taddFriend(userId: $userId) {\n\t\t\t_id\n\t\t\tusername\n\t\t}\n\t}\n"]);return et=function(){return s},s}var rt=Object(i.b)(et()),at=function(s){var t=s.children;return r.a.createElement(Zs.a,{mutation:rt},t)};function ot(){var s=Object(p.a)(["\n    display: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return ot=function(){return s},s}function it(){var s=Object(p.a)(["\n    overflow-y: auto;\n\tcolor: #ededed;\n"]);return it=function(){return s},s}function ct(){var s=Object(p.a)(["\n    font-family: Montserrat;\n    font-size: 22px;\n    font-weight: bold;\n\tcolor: #ededed;\n\tmargin: 0 0 5px 0;\n"]);return ct=function(){return s},s}var ut=b.c.h1(ct()),lt=b.c.div(it()),dt=b.c.button(ot(),(function(s){return!s.disabled&&ns({time:"0.2s"})})),ft=function(s){var t=s.users,n=s.friends,e=s.onClick;return r.a.createElement("div",null,r.a.createElement(ut,null,"Results"),r.a.createElement(lt,null,t&&t.length>0?t.map((function(s,t){var a=s.username,o=s._id,i=n.includes(o)?Vs.c:Vs.d;return r.a.createElement(Q,{key:t,title:a},r.a.createElement(dt,{onClick:function(){e({userId:o})}},r.a.createElement(i,{color:"#b7b7b7",size:"15px"})))})):r.a.createElement("h1",null,"No users found")))};function mt(){var s=Object(p.a)(["\n    font-family: Montserrat;\n    font-size: 22px;\n    font-weight: bold;\n\tcolor: #ededed;\n\tmargin: 0 0 5px 0;\n"]);return mt=function(){return s},s}var pt=b.c.h1(mt()),bt=function(s){var t=s.keyword,n=s.friends;return r.a.createElement(at,null,(function(s){var e=function(t){var n=t.userId;s({variables:{userId:n}}).catch((function(s){return s}))};return r.a.createElement(nt,{username:t},(function(s){var t=s.loading,a=s.data;return t?r.a.createElement(pt,null,"Results"):r.a.createElement(ft,{users:a&&a.filterUsers,friends:n,onClick:e})}))}))};function vt(){var s=Object(p.a)(["\n\tborder: 0;\n\tbackground-color: #5e5e5e;\n\tborder-radius: 4px;\n\tcolor: #ededed;\n\tfont-weight: bold;\n\theight: 32px;\n\twidth: 100%;\n\tpadding: 5px 10px;\n\tfont-family: Montserrat;\n"]);return vt=function(){return s},s}function ht(){var s=Object(p.a)(["\n\tposition: absolute;\n\ttop: -8px;\n\tleft: 20px;\n\tborder-radius: 50px !important;\n\tborder: 2px solid #dbdbdb;\n\tcolor: #ffffff !important;\n\tbackground-color: #cc6b44 !important;\n"]);return ht=function(){return s},s}function gt(){var s=Object(p.a)(["\n\tpadding: 6% 6% 6% 6%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return gt=function(){return s},s}function xt(){var s=Object(p.a)([""]);return xt=function(){return s},s}function Et(){var s=Object(p.a)(["\n\tfont-size: 15px !important;\n\tmargin: 9px 0 8px 4px;\n\tcolor: #ededed;\n"]);return Et=function(){return s},s}function jt(){var s=Object(p.a)(["\n\tpadding: 4px;\n\tborder: 1px solid #4b4b4b;\n\tbackground-color: #424242;\n"]);return jt=function(){return s},s}function wt(){var s=Object(p.a)(["\n\tleft: -20px;\n\twidth: 240px;\n\tpadding: 0;\n"]);return wt=function(){return s},s}function Ot(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 0;\n\theight: 30px;\n\twidth: 30px;\n\tpadding: 1px;\n\tborder-radius: 3px;\n\tbackground-color: inherit;\n\t&:hover {\n\t\t",";\n\t}\n"]);return Ot=function(){return s},s}function yt(){var s=Object(p.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t&[disabled] {\n\t\topacity: 0.5;\n\t}\n"]);return yt=function(){return s},s}var kt=b.c.div(yt()),It=b.c.button(Ot(),(function(s){return!s.disabled&&ns({time:"0.2s"})})),zt=b.c.div(wt()),St=b.c.div(jt()),Nt=b.c.h2(Et()),_t=b.c.div(xt()),Ct=b.c.div(gt()),Mt=b.c.span(ht()),At=b.c.input(vt()),Ut=n(77),qt=function(s){var t=s.friendRequests,n=s.addNewFriend,e=s.friendSearchInput;return r.a.createElement(_t,null,r.a.createElement(At,Object.assign({placeholder:"Find new friends",type:"text"},e)),r.a.createElement(Ct,null,r.a.createElement("div",{className:"dropdown is-up is-hoverable"},r.a.createElement(Ut.a,{color:"#b7b7b7",size:"30px",className:"dropdown-trigger"},r.a.createElement("button",{className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu4"},r.a.createElement("span",null,r.a.createElement(Nt,{className:"is-marginless"},"Friend Requests")),r.a.createElement("span",{className:"icon is-small"},r.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))),r.a.createElement(zt,{className:"dropdown-menu",id:"dropdown-menu4",role:"menu"},r.a.createElement(St,{className:"dropdown-content is-paddingless"},r.a.createElement("div",{className:"dropdown-item is-paddingless"},r.a.createElement(at,null,(function(s,e){var a=e.loading;return t.length>0?t.map((function(t,e){var o=t.username,i=t._id;return r.a.createElement(Q,{key:e,title:o},r.a.createElement(kt,{disabled:a},r.a.createElement(It,{disabled:a,onClick:function(){!function(t){var e=t.userId,r=t.username;s({variables:{userId:e}}).then((function(){n({_id:e,username:r})})).catch((function(s){return s}))}({userId:i,username:o})}},r.a.createElement(Vs.b,{size:"15px"})),r.a.createElement(It,{disabled:a},r.a.createElement(Vs.a,{size:"15px"}))))})):r.a.createElement(Nt,null,"You don't have friend requests")}))))),t.length>0&&r.a.createElement(Mt,{className:"tag"},t.length)),r.a.createElement(Vs.e,{color:"#b7b7b7",size:"30px",onClick:function(){alert("Settings!")}})))};function Rt(){var s=Object(p.a)(["\n\tpadding: 11px 11px 0 11px;\n\tbackground-color: #3c3c3c;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tflex-grow: 1;\n"]);return Rt=function(){return s},s}var Lt=b.c.div(Rt()),Ft=function(s){var t=Object(e.useState)(s),n=Object(u.a)(t,2),r=n[0],a=n[1];return{value:r,onChange:function(s){return a(s.target.value)}}},$t=function(s){var t=s.friends,n=s.friendRequests,e=s.addNewFriend,a=(s.removeFriend,Ft("")),o=t.map((function(s){return s._id}));return r.a.createElement(Lt,{className:"column is-2"},a.value?r.a.createElement(bt,{keyword:a.value,friends:o}):r.a.createElement(Xs,{friends:t}),r.a.createElement(qt,{friendRequests:n,addNewFriend:e,friendSearchInput:a}))};function Bt(){var s=Object(p.a)(["\n\tdisplay: flex;\n    margin: 0;\n    height: -webkit-calc(100% - 50px);\n    height: -moz-calc(100% - 50px);\n    height: calc(100% - 50px);\n    font-family: Montserrat;\n"]);return Bt=function(){return s},s}function Pt(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\theight: 100vh;\n"]);return Pt=function(){return s},s}var Dt=b.c.div(Pt()),Qt=b.c.div(Bt()),Tt=function(s){var t=s.data,n=s.server,a=s.channel,o=Object(e.useState)(t),i=Object(u.a)(o,2),c=i[0],l=i[1];return r.a.createElement(Dt,null,r.a.createElement(I,{username:c.username}),r.a.createElement(Qt,null,r.a.createElement(G,{server:n&&{id:n._id,name:n.name},channels:n&&n.channels,username:c.username}),r.a.createElement(Fs,{servers:c.servers,channel:a,currentServer:n._id}),r.a.createElement($t,{friends:c.friends,friendRequests:c.friendRequests,addNewFriend:function(s){var t=c.friends,n=c.friendRequests;t.push(s);var e=n.indexOf(s);e&&n.shift(e,1),l(Object(m.a)({},c))}})))};function Wt(){var s=Object(p.a)(["\n\tanimation: rotate 2s linear infinite;\n\tmargin: -25px 0 0 -25px;\n\twidth: 50px;\n\theight: 50px;\n\n\t& .path {\n\t\tstroke: #c86740;\n\t\tstroke-linecap: round;\n\t\tanimation: dash 1.5s ease-in-out infinite;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes dash {\n\t\t0% {\n\t\t\tstroke-dasharray: 1, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t50% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -35;\n\t\t}\n\t\t100% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -124;\n\t\t}\n\t}\n"]);return Wt=function(){return s},s}function Jt(){var s=Object(p.a)(["\n    font-family: Montserrat;\n    font-size: 30px;\n\tfont-weight: bold;\n    margin: 25px 0 0 0;\n\tcolor: #ededed;\n"]);return Jt=function(){return s},s}function Yt(){var s=Object(p.a)(["\n\tdisplay: flex;\n    flex-direction: column;\n\theight: 100vh;\n\twidth: 100vw;\n\tjustify-content: center;\n\talign-items: center;\n    background-color: #373737;\n"]);return Yt=function(){return s},s}var Gt=b.c.div(Yt()),Ht=b.c.h1(Jt()),Kt=b.c.svg(Wt()),Vt=function(s){var t=s.message,n=void 0===t?"Loading":t;return r.a.createElement(Gt,null,r.a.createElement(Kt,{viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})),r.a.createElement(Ht,null,n))};function Xt(){var s=Object(p.a)(["\n\tquery getMe {\n\t\tgetMe {\n\t\t\t_id\n\t\t\tusername\n\t\t\tservers {\n\t\t\t\t_id\n\t\t\t\tname\n\t\t\t\tchannels {\n\t\t\t\t\t_id\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t\tfriendRequests {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]);return Xt=function(){return s},s}var Zt=Object(i.b)(Xt()),sn=function(s){var t=s.children;return r.a.createElement(Zs.b,{query:Zt,fetchPolicy:"network-only"},t)},tn=r.a.memo((function(s){var t=s.serverId,n=s.channelId,e=s.navigate;return r.a.createElement(sn,null,(function(s){var a=s.loading,o=s.error,i=s.data;if(a)return r.a.createElement(Vt,{message:"Loading..."});if(o)return"Internal server error";var c=t?i.getMe.servers.filter((function(s){return s._id===t}))[0]:i.getMe.servers[0]._id,u=n&&c?c.channels.filter((function(s){return s._id===n}))[0]:i.getMe.servers[0].channels[0]._id;return t&&n||e("/".concat(c,"/").concat(u)),r.a.createElement(Tt,{data:i.getMe,server:c,channel:u})}))}),(function(s,t){return s.serverId===t.serverId&&s.channelId===t.channelId}));function nn(){var s=Object(p.a)(["\n\tmutation logIn($input: UserCredentials!) {\n\t\tlogIn(input: $input)\n\t}\n"]);return nn=function(){return s},s}var en=Object(i.b)(nn()),rn=function(s){var t=s.children;return r.a.createElement(Zs.a,{mutation:en},t)};function an(){var s=Object(p.a)(["\n\ttext-decoration: none;\n"]);return an=function(){return s},s}function on(){var s=Object(p.a)(["\n\tcolor: red;\n\tfont-size: 14px;\n"]);return on=function(){return s},s}function cn(){var s=Object(p.a)(["\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tpadding: 8px 0;\n\tfont-family: Montserrat;\n\tcolor: #ededed;\n"]);return cn=function(){return s},s}function un(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100vh;\n\tpadding: 0;\n\tbackground-color: #373737;\n"]);return un=function(){return s},s}function ln(){var s=Object(p.a)(["\n\tanimation: rotate 2s linear infinite;\n\twidth: 18px;\n\theight: 18px;\n\n\t& .path {\n\t\tstroke: #ededed;\n\t\tstroke-linecap: round;\n\t\tanimation: dash 1.5s ease-in-out infinite;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\t@keyframes dash {\n\t\t0% {\n\t\t\tstroke-dasharray: 1, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t50% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -35;\n\t\t}\n\t\t100% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -124;\n\t\t}\n\t}\n"]);return ln=function(){return s},s}function dn(){var s=Object(p.a)(["\n\tbackground-color: #373737;\n"]);return dn=function(){return s},s}function fn(){var s=Object(p.a)(["\n\tborder: 1px solid #ededed;\n\tbackground-color: #ededed;\n\tborder-radius: 4px;\n\theight: 35px;\n\twidth: 100%;\n\tpadding: 5px 10px;\n\tfont-family: Montserrat;\n\tmargin: 8px 0;\n\t&[disabled] {\n\t\topacity: 0.3;\n\t}\n\t&:hover {\n\t\tbackground-color: #e8e8e8;\n\t}\n"]);return fn=function(){return s},s}function mn(){var s=Object(p.a)(["\n\tfont-family: Montserrat;\n\tfont-size: 12px;\n\tcolor: #ededed;\n"]);return mn=function(){return s},s}function pn(){var s=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tborder-radius: 3px;\n\tpadding: 5%;\n\tbackground-color: #2d2d2d;\n\t-webkit-box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);\n\t-moz-box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);\n\tbox-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);\n"]);return pn=function(){return s},s}var bn=b.c.form(pn()),vn=b.c.span(mn()),hn=b.c.input(fn()),gn=b.c.div(dn()),xn=b.c.svg(ln()),En=b.c.div(un()),jn=b.c.h2(cn()),wn=b.c.span(on()),On=Object(b.c)(f.a)(an());function yn(){var s=Object(p.a)(["\n    background-color: #c86740;\n    border: 0;\n    border-radius: 3px;\n    color: #ffffff;\n    height: 32px;\n    display: block;\n    width: 100%;\n    margin: 8px 0;\n    text-align: center;\n    font-family: Montserrat;\n    &[disabled] {\n        opacity: .3;\n    }\n"]);return yn=function(){return s},s}var kn=b.c.button(yn()),In=function(s){var t=s.children,n=s.onClick,e=s.disabled;return r.a.createElement(kn,{disabled:e,onClick:n},t)},zn=function(s){var t=s.disabled,n=s.onSubmit,e=s.error,a=s.title,o=Ft(""),i=Ft(""),c=Ft(""),u=function(){var s=Object(J.a)(W.a.mark((function s(t){return W.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.preventDefault(),s.next=3,n({username:o.value,email:i.value,password:c.value});case 3:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}();return r.a.createElement(gn,null,r.a.createElement(En,{className:"column is-4 is-offset-4"},r.a.createElement(bn,{disabled:t,onSubmit:u},r.a.createElement(jn,null,a),r.a.createElement(hn,Object.assign({disabled:t,placeholder:"Username"},o)),"Sign Up"===a&&r.a.createElement(hn,Object.assign({disabled:t,placeholder:"Email",type:"email"},i)),r.a.createElement(hn,Object.assign({disabled:t,placeholder:"Password",type:"password"},c)),e&&r.a.createElement(wn,null,e),r.a.createElement(In,{disabled:t},t?r.a.createElement(xn,{viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})):a),"Login"===a?r.a.createElement(vn,null,"New here?",r.a.createElement(On,{to:"/signup"}," Create an account")):r.a.createElement(vn,null,"Already have an account?",r.a.createElement(On,{to:"/login"}," Login here")))))},Sn=function(){var s=Object(e.useContext)(l).activateAuth;return r.a.createElement(rn,null,(function(t,n){var e=n.loading,a=n.error&&"Wrong username or password";return r.a.createElement(zn,{onSubmit:function(n){var e=n.username,r=n.password;t({variables:{input:{username:e,password:r}}}).then((function(t){var n=t.data.logIn;s(n)})).catch((function(s){return s}))},disabled:e,error:a,title:"Login"})}))};function Nn(){var s=Object(p.a)(["\n    mutation signUp($input: UserInput!) {\n        signUp(input: $input)\n    }\n"]);return Nn=function(){return s},s}var _n=Object(i.b)(Nn()),Cn=function(s){var t=s.children;return r.a.createElement(Zs.a,{mutation:_n},t)},Mn=function(){var s=Object(e.useContext)(l).activateAuth;return r.a.createElement(Cn,null,(function(t,n){var e=n.loading,a=n.error,o=a&&a.graphQLErrors&&a.graphQLErrors[0].message;return r.a.createElement(zn,{onSubmit:function(n){var e=n.username,r=n.email,a=n.password;t({variables:{input:{username:e,email:r,password:a}}}).then((function(t){var n=t.data.signUp;s(n)})).catch((function(s){return s}))},disabled:e,error:o,title:"Sign Up"})}))},An=n(44),Un=n.n(An);function qn(){var s=Object(p.a)(["\n  \thtml, body {\n\t\theight: 100%;\n        width: 100%;\n        margin: 0;\n  \t}\n\n\t@font-face {\n        font-family: 'Montserrat';\n        src: local('Montserrat'), local('Montserrat'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"]);return qn=function(){return s},s}var Rn=Object(b.a)(qn(),Un.a,Un.a),Ln=new i.a({uri:"https://moran.mtprz.dev/api",request:function(s){var t=window.sessionStorage.getItem("token"),n=t||"";s.setContext({headers:{authorization:n}})},onError:function(s){var t=s.graphQLErrors;t&&"User must be authorized"===t[0].message&&(window.sessionStorage.removeItem("token"),window.location.href="/")}});o.a.render(r.a.createElement(d,null,r.a.createElement(c.a,{client:Ln},r.a.createElement((function(){var s=Object(e.useContext)(l).isAuth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Rn,null),r.a.createElement(f.c,null,!s&&r.a.createElement(Sn,{path:"/login"}),!s&&r.a.createElement(Mn,{path:"/signup"}),!s&&r.a.createElement(f.b,{noThrow:!0,from:"/",to:"/login"}),s&&r.a.createElement(tn,{path:"/"}),s&&r.a.createElement(tn,{path:"/:serverId/:channelId"}),s&&r.a.createElement(f.b,{noThrow:!0,from:"/login",to:"/"}),s&&r.a.createElement(f.b,{noThrow:!0,from:"/signup",to:"/"})))}),null))),document.getElementById("app"))},44:function(s,t,n){s.exports=n.p+"static/media/Montserrat-Regular.ee653992.ttf"},80:function(s,t,n){s.exports=n(149)}},[[80,1,2]]]);
//# sourceMappingURL=main.1eb878c6.chunk.js.map