(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-556cf06e"],{"0366":function(t,r,n){var e=n("1c0b");t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},"057f":function(t,r,n){var e=n("fc6a"),o=n("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(r){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(e(t))}},"1c0b":function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1c7e":function(t,r,n){var e=n("b622"),o=e("iterator"),i=!1;try{var c=0,a={next:function(){return{done:!!c++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(u){}t.exports=function(t,r){if(!r&&!i)return!1;var n=!1;try{var e={};e[o]=function(){return{next:function(){return{done:n=!0}}}},t(e)}catch(u){}return n}},"1dde":function(t,r,n){var e=n("d039"),o=n("b622"),i=n("2d00"),c=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[],n=r.constructor={};return n[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"24ae":function(t,r,n){t.exports=n.p+"img/janken_gu.5de51267.png"},"25e0":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"game"}},[t.resultMessage?n("div",{staticClass:"result"},[n("h2",[t._v(t._s(t.resultMessage))]),n("button",{on:{click:t.start}},[t._v("もう一度")])]):t._e(),n("div",{staticClass:"imgArea"},[n("img",{attrs:{src:t.src,alt:""}})]),n("ul",[n("li",[n("button",{staticClass:"button",attrs:{type:"button",value:"0"},on:{click:t.onSelected}},[t._v("グー")])]),n("li",[n("button",{staticClass:"button",attrs:{type:"button",value:"1"},on:{click:t.onSelected}},[t._v("チョキ")])]),n("li",[n("button",{staticClass:"button",attrs:{type:"button",value:"2"},on:{click:t.onSelected}},[t._v("パー")])])])])},o=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630");function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function c(t,r){if(t){if("string"===typeof t)return i(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,r):void 0}}function a(t,r){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||r&&t&&"number"===typeof t.length){n&&(t=n);var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(u)throw i}}}}var u={name:"game",props:["scores"],data:function(){return{src:"",imgList:[n("24ae"),n("c99d"),n("76d1")],timer:null,resultMessage:""}},created:function(){this.start()},methods:{changeImg:function(t){if(t&&Math.abs(t)<=this.imgList.length)this.src=this.imgList[t];else{var r=Math.floor(Math.random()*this.imgList.length);this.src=this.imgList[r]}},start:function(){var t=this;this.reset(),this.timer=setInterval((function(){t.changeImg()}),100)},onSelected:function(t){clearInterval(this.timer);var r,n=t.target,e=parseInt(n.value,10),o=parseInt(this.imgList.indexOf(this.src),10),i=this.decisionJanken(e,o),c=document.querySelectorAll(".button"),u=a(c);try{for(u.s();!(r=u.n()).done;){var s=r.value;s.setAttribute("disabled",!0)}}catch(f){u.e(f)}finally{u.f()}this.resultMessage=1==i?"勝ち":2==i?"引き分け":"負け",this.$parent.$data.scores.push({message:this.resultMessage}),n.classList.add("is-selected")},reset:function(){var t,r=document.querySelectorAll(".button"),n=a(r);try{for(n.s();!(t=n.n()).done;){var e=t.value;e.removeAttribute("disabled"),e.classList.remove("is-selected")}}catch(o){n.e(o)}finally{n.f()}this.resultMessage=""},decisionJanken:function(t,r){var n=0;switch(t){case r:n=2;break;case(r+1)%3:break;case(r+2)%3:n=1;break}return n}}},s=u,f=(n("fad5"),n("2877")),l=Object(f["a"])(s,e,o,!1,null,"d7254eae",null);r["default"]=l.exports},"2a62":function(t,r,n){var e=n("825a");t.exports=function(t){var r=t["return"];if(void 0!==r)return e(r.call(t)).value}},"35a1":function(t,r,n){var e=n("f5df"),o=n("3f8c"),i=n("b622"),c=i("iterator");t.exports=function(t){if(void 0!=t)return t[c]||t["@@iterator"]||o[e(t)]}},"4df4":function(t,r,n){"use strict";var e=n("0366"),o=n("7b0b"),i=n("9bdd"),c=n("e95a"),a=n("50c4"),u=n("8418"),s=n("35a1");t.exports=function(t){var r,n,f,l,d,v,b=o(t),p="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,g=void 0!==y,m=s(b),w=0;if(g&&(y=e(y,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(r=a(b.length),n=new p(r);r>w;w++)v=g?y(b[w],w):b[w],u(n,w,v);else for(l=m.call(b),d=l.next,n=new p;!(f=d.call(l)).done;w++)v=g?i(l,y,[f.value,w],!0):f.value,u(n,w,v);return n.length=w,n}},"65f0":function(t,r,n){var e=n("861d"),o=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,r){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?e(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},"746f":function(t,r,n){var e=n("428f"),o=n("5135"),i=n("e538"),c=n("9bf2").f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||c(r,t,{value:i.f(t)})}},"76d1":function(t,r,n){t.exports=n.p+"img/janken_pa.1abe7c36.png"},8418:function(t,r,n){"use strict";var e=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},"8dce":function(t,r,n){},"9bdd":function(t,r,n){var e=n("825a"),o=n("2a62");t.exports=function(t,r,n,i){try{return i?r(e(n)[0],n[1]):r(n)}catch(c){throw o(t),c}}},a4d3:function(t,r,n){"use strict";var e=n("23e7"),o=n("da84"),i=n("d066"),c=n("c430"),a=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),b=n("825a"),p=n("7b0b"),h=n("fc6a"),y=n("c04e"),g=n("5c6c"),m=n("7c73"),w=n("df75"),S=n("241c"),A=n("057f"),x=n("7418"),O=n("06cf"),j=n("9bf2"),k=n("d1e7"),_=n("9112"),I=n("6eeb"),M=n("5692"),P=n("f772"),E=n("d012"),L=n("90e3"),C=n("b622"),J=n("e538"),$=n("746f"),N=n("d44e"),T=n("69f3"),F=n("b727").forEach,q=P("hidden"),B="Symbol",D="prototype",Q=C("toPrimitive"),U=T.set,W=T.getterFor(B),z=Object[D],G=o.Symbol,H=i("JSON","stringify"),K=O.f,R=j.f,V=A.f,X=k.f,Y=M("symbols"),Z=M("op-symbols"),tt=M("string-to-symbol-registry"),rt=M("symbol-to-string-registry"),nt=M("wks"),et=o.QObject,ot=!et||!et[D]||!et[D].findChild,it=a&&f((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=K(z,r);e&&delete z[r],R(t,r,n),e&&t!==z&&R(z,r,e)}:R,ct=function(t,r){var n=Y[t]=m(G[D]);return U(n,{type:B,tag:t,description:r}),a||(n.description=r),n},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ut=function(t,r,n){t===z&&ut(Z,r,n),b(t);var e=y(r,!0);return b(n),l(Y,e)?(n.enumerable?(l(t,q)&&t[q][e]&&(t[q][e]=!1),n=m(n,{enumerable:g(0,!1)})):(l(t,q)||R(t,q,g(1,{})),t[q][e]=!0),it(t,e,n)):R(t,e,n)},st=function(t,r){b(t);var n=h(r),e=w(n).concat(bt(n));return F(e,(function(r){a&&!lt.call(n,r)||ut(t,r,n[r])})),t},ft=function(t,r){return void 0===r?m(t):st(m(t),r)},lt=function(t){var r=y(t,!0),n=X.call(this,r);return!(this===z&&l(Y,r)&&!l(Z,r))&&(!(n||!l(this,r)||!l(Y,r)||l(this,q)&&this[q][r])||n)},dt=function(t,r){var n=h(t),e=y(r,!0);if(n!==z||!l(Y,e)||l(Z,e)){var o=K(n,e);return!o||!l(Y,e)||l(n,q)&&n[q][e]||(o.enumerable=!0),o}},vt=function(t){var r=V(h(t)),n=[];return F(r,(function(t){l(Y,t)||l(E,t)||n.push(t)})),n},bt=function(t){var r=t===z,n=V(r?Z:h(t)),e=[];return F(n,(function(t){!l(Y,t)||r&&!l(z,t)||e.push(Y[t])})),e};if(u||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=L(t),n=function(t){this===z&&n.call(Z,t),l(this,q)&&l(this[q],r)&&(this[q][r]=!1),it(this,r,g(1,t))};return a&&ot&&it(z,r,{configurable:!0,set:n}),ct(r,t)},I(G[D],"toString",(function(){return W(this).tag})),I(G,"withoutSetter",(function(t){return ct(L(t),t)})),k.f=lt,j.f=ut,O.f=dt,S.f=A.f=vt,x.f=bt,J.f=function(t){return ct(C(t),t)},a&&(R(G[D],"description",{configurable:!0,get:function(){return W(this).description}}),c||I(z,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:G}),F(w(nt),(function(t){$(t)})),e({target:B,stat:!0,forced:!u},{for:function(t){var r=String(t);if(l(tt,r))return tt[r];var n=G(r);return tt[r]=n,rt[n]=r,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:vt,getOwnPropertySymbols:bt}),e({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(p(t))}}),H){var pt=!u||f((function(){var t=G();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));e({target:"JSON",stat:!0,forced:pt},{stringify:function(t,r,n){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!at(t))return d(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!at(r))return r}),o[1]=r,H.apply(null,o)}})}G[D][Q]||_(G[D],Q,G[D].valueOf),N(G,B),E[q]=!0},a630:function(t,r,n){var e=n("23e7"),o=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:c},{from:o})},b0c0:function(t,r,n){var e=n("83ab"),o=n("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";e&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b727:function(t,r,n){var e=n("0366"),o=n("44ad"),i=n("7b0b"),c=n("50c4"),a=n("65f0"),u=[].push,s=function(t){var r=1==t,n=2==t,s=3==t,f=4==t,l=6==t,d=7==t,v=5==t||l;return function(b,p,h,y){for(var g,m,w=i(b),S=o(w),A=e(p,h,3),x=c(S.length),O=0,j=y||a,k=r?j(b,x):n||d?j(b,0):void 0;x>O;O++)if((v||O in S)&&(g=S[O],m=A(g,O,w),t))if(r)k[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:u.call(k,g)}else switch(t){case 4:return!1;case 7:u.call(k,g)}return l?-1:s||f?f:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},c99d:function(t,r,n){t.exports=n.p+"img/janken_choki.51ef3fcb.png"},d28b:function(t,r,n){var e=n("746f");e("iterator")},e01a:function(t,r,n){"use strict";var e=n("23e7"),o=n("83ab"),i=n("da84"),c=n("5135"),a=n("861d"),u=n("9bf2").f,s=n("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[r]=!0),r};s(d,f);var v=d.prototype=f.prototype;v.constructor=d;var b=v.toString,p="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;u(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,r=b.call(t);if(c(l,t))return"";var n=p?r.slice(7,-1):r.replace(h,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,r,n){var e=n("b622");r.f=e},e8b5:function(t,r,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},e95a:function(t,r,n){var e=n("b622"),o=n("3f8c"),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},fad5:function(t,r,n){"use strict";n("8dce")},fb6a:function(t,r,n){"use strict";var e=n("23e7"),o=n("861d"),i=n("e8b5"),c=n("23cb"),a=n("50c4"),u=n("fc6a"),s=n("8418"),f=n("b622"),l=n("1dde"),d=l("slice"),v=f("species"),b=[].slice,p=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,r){var n,e,f,l=u(this),d=a(l.length),h=c(t,d),y=c(void 0===r?d:r,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(l,h,y);for(e=new(void 0===n?Array:n)(p(y-h,0)),f=0;h<y;h++,f++)h in l&&s(e,f,l[h]);return e.length=f,e}})}}]);
//# sourceMappingURL=chunk-556cf06e.716c6663.js.map