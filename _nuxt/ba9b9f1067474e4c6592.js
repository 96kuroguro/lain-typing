(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(t,e,n){var content=n(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("14789364",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("1fb806ba",content,!0,{sourceMap:!1})},192:function(t,e,n){"use strict";var r=n(188);n.n(r).a},193:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"div[data-v-33fffccc]{font-size:40px;margin-top:20px;text-align:center}span[data-v-33fffccc]{display:inline-block}.list-leave-active[data-v-33fffccc]{transition:all .5s;position:absolute}.list-enter-active[data-v-33fffccc]{transition:all .5s}.list-enter[data-v-33fffccc],.list-leave-to[data-v-33fffccc]{opacity:0;transform:translateY(100px)}",""])},194:function(t,e,n){"use strict";var r=n(189);n.n(r).a},195:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"div[data-v-702be1d8]{font-size:50px;margin:70px auto 0;text-align:center;position:relative;display:table}",""])},200:function(t,e,n){"use strict";n.r(e);var r={name:"Strings",data:function(){return{style:{},currentString:[],keyListener:null}},computed:{storeString:function(){return this.$store.state.strings}},watch:{storeString:function(){this.currentString=this.storeString}},mounted:function(){var t=this;this.keyListener=function(e){t.keyDown(e.key)},window.addEventListener("keydown",this.keyListener),this.$store.commit("choice")},destroyed:function(){window.removeEventListener("keydown",this.keyListener)},methods:{keyDown:function(code){var t=this.currentString;if(code!==t[0])return this.$store.commit("typeMiss"),!1;t.shift(),this.$store.commit("typeSuccess"),t[0]||this.stageClear()},stageClear:function(){this.$store.commit("choice"),this.$store.commit("stageSuccess"),this.$store.state.typeSuccessCount%3==0&&(this.$store.state.interval<20?this.$store.commit("decrementInterval",1):this.$store.commit("decrementInterval",5))}}},o=(n(192),n(42)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style},[n("transition-group",{attrs:{name:"list",tag:"p"}},t._l(t.currentString,function(e){return n("span",{key:e},[t._v(t._s(e))])}),0)],1)},[],!1,null,"33fffccc",null).exports,l=(n(20),{name:"DisplayString",components:{},data:function(){return{style:{}}},computed:{string:function(){return this.$store.state.displayString.split("")}}}),f=(n(194),{name:"GameDisplay",components:{Strings:c,DisplayString:Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style},t._l(t.string,function(e,i){return n("span",{key:i,attrs:{index:i}},[t._v(t._s(e))])}),0)},[],!1,null,"702be1d8",null).exports},data:function(){return{style:{},klass:[]}},computed:{missCount:function(){return this.$store.state.missCount}},watch:{missCount:function(){var t=this;this.klass=["damaged"],setTimeout(function(){t.klass=[]},200)}}}),d=Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gameDisplay",class:this.klass,style:this.style},[e("display-string"),this._v(" "),e("strings"),this._v(" "),e("div",{staticClass:"text-muted text-center"},[this._v("↑のアルファベットの文字をタイプしてください")])],1)},[],!1,null,null,null);e.default=d.exports}}]);