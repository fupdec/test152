(function(){"use strict";var n={639:function(n,e,t){var r=t(144),o=t(1096),a=t(9870),i=t(6904),l=t(1550),c=t(1692),s=t(4614),u=t(5617),f=function(){var n=this,e=n._self._c;return e(o.Z,[e("div",{staticClass:"app-wrap"},[e("div",{staticClass:"app"},[e("b",[n._v("Пожалуйста, оцените удобство работы с приложением")]),e(l.Z,{staticClass:"my-4",attrs:{min:1,color:"amber"},model:{value:n.rating,callback:function(e){n.rating=e},expression:"rating"}}),e(i.Z,{ref:"form",on:{submit:function(n){n.preventDefault()}},model:{value:n.valid,callback:function(e){n.valid=e},expression:"valid"}},[e(s.Z,{attrs:{rules:[n=>!!n||"Пожалуйста заполните это поле"],placeholder:"Введите электронный адрес","background-color":"#fff",outlined:""},model:{value:n.email,callback:function(e){n.email=e},expression:"email"}}),n.rating<5?e(u.Z,{attrs:{placeholder:"Поделитесь мыслями, что можно было бы улучшить (не обязательно)","background-color":"#fff",outlined:""},model:{value:n.comment,callback:function(e){n.comment=e},expression:"comment"}}):n._e(),e(a.Z,{attrs:{disabled:n.loading,color:"teal",dark:"",block:""},on:{click:n.send}},[n._v("Отправить отзыв")])],1)],1)]),e(c.Z,{attrs:{timeout:3e3,color:n.msgColor},model:{value:n.snackbar,callback:function(e){n.snackbar=e},expression:"snackbar"}},["success"==n.msgColor?e("div",[n._v("Спасибо за отзыв!")]):e("div",[n._v("При отправке отзыва произошла ошибка")])])],1)},d=[],v={name:"App",data:()=>({rating:5,email:"",comment:"",valid:!1,loading:!1,snackbar:!1,msgColor:null}),methods:{async send(){if(this.$refs.form.validate(),!this.valid)return;this.snackbar=!1,this.loading=!0;const n="https://beta.elcomspb.ru/api/test";let e=await fetch(n);this.loading=!1;let t=await e.json();this.msgColor="failure"==t.res?"error":t.res,this.snackbar=!0}}},p=v,m=t(1001),b=(0,m.Z)(p,f,d,!1,null,null,null),h=b.exports,g=t(3806),k=t(8103);r.ZP.use(g.Z);var y=new g.Z({theme:{themes:{light:{primary:k.Z.teal.base,accent:k.Z.grey.darken4}}}});r.ZP.config.productionTip=!1,new r.ZP({vuetify:y,render:n=>n(h)}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(u=0;u<n.length;u++){r=n[u][0],o=n[u][1],a=n[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){n.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=n.length;u>0&&n[u-1][2]>a;u--)n[u]=n[u-1];n[u]=[r,o,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],l=r[1],c=r[2],s=0;if(i.some((function(e){return 0!==n[e]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var u=c(t)}for(e&&e(r);s<i.length;s++)a=i[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(u)},r=self["webpackChunktest152"]=self["webpackChunktest152"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(639)}));r=t.O(r)})();
//# sourceMappingURL=app.6dc85431.js.map