(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,e,n){"use strict";n.r(e);n(88),n(89);var r={data:function(){return{words:["egg","bag","rose","chair","bat","fish","notebook","pencil","dog","desk"],solvedWords:[],typingText:""}},computed:{currentWord:function(){var t=this,e=this.words.filter(function(e){return!t.solvedWords.includes(e)});return e[Math.floor(Math.random()*e.length)]},currentWordNumber:function(){return this.solvedWords.length+1},isTypingCorrect:function(){if(this.typingText==this.currentWord)return this.solvedWords.push(this.currentWord),this.typingText="",this.words.length==this.solvedWords.length&&(this.solvedWords=[],this.trying=!1,alert("全問正解！")),!0;var t=this.typingText.length;return this.typingText===this.currentWord.slice(0,t)}}},o=n(39),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._v("\n    第"+t._s(t.currentWordNumber)+"問\n    "),n("h1",{domProps:{textContent:t._s(t.currentWord)}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.typingText,expression:"typingText"}],staticClass:"form-control",attrs:{id:"input-typing",type:"text"},domProps:{value:t.typingText},on:{input:function(e){e.target.composing||(t.typingText=e.target.value)}}}),t._v("\n    "+t._s(t.typingText)+"\n    "+t._s(t.solvedWords)+"\n")])},[],!1,null,null,null);e.default=component.exports}}]);