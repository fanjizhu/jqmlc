webpackJsonp([31],{FsDH:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"Catcoin",components:{HeaderBar:i("03U6").a},data:function(){return{headerBar:{title:"猫小票",imgUrl:"",goBackUrl:i("fRSK"),path:"",params:{},goBack:!0,showIcon:!1},catTickets:this.$store.state.catTickets,selectedTickets:[],selectedTicketsNum:{}}},methods:{selectTickets:function(t){this.selectedTickets.length>=5||(this.selectedTickets.push({id:t,imgUrl:i("li/w")("./catchoice"+t+".png")}),this.selectedTicketsNum.hasOwnProperty(t)?this.selectedTicketsNum[t]+=1:this.selectedTicketsNum[t]=1)},randomTickets:function(){this.selectedTickets=[],this.selectedTicketsNum={};for(var t=0;t<5;t++){var s=Math.round(7*Math.random())+1;this.selectedTickets.push({id:""+s,imgUrl:i("li/w")("./catchoice"+s+".png")}),this.selectedTicketsNum[s]?this.selectedTicketsNum[s]+=1:this.selectedTicketsNum[s]=1}},clearAllTickets:function(){this.selectedTickets=[],this.selectedTicketsNum={}}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{},[i("HeaderBar",{attrs:{headerBar:t.headerBar}}),t._v(" "),i("div",{staticClass:"gray-fixed"},[i("div",{staticClass:"catTicketsContainer"},[i("div",{staticClass:"catTicketsTitle"},[t._m(0),t._v(" "),i("div",{staticClass:"checkHistory",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.$router.push("winTickets")}}},[t._v("\n          参考往期中奖号码>>\n        ")])]),t._v(" "),i("div",{staticClass:"catTicketsList"},t._l(t.catTickets,function(s){return i("div",{key:s.id,staticClass:"catTicketsItemContainer",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.selectTickets(s.id)}}},[i("div",{class:["catTicketsItem",{"catTicketsItem-active":t.selectedTicketsNum[s.id]>0}]},[t.selectedTicketsNum[s.id]>0?i("div",{staticClass:"catTicketsItemNum"},[i("div",{staticClass:"catTicketsWord"},[t._v(t._s(t.selectedTicketsNum[s.id]))])]):t._e(),t._v(" "),i("img",{class:["img-responsive",s.imgSize],attrs:{src:s.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"catTicketsItemTit"},[i("div",[t._v(t._s(s.name))]),t._v(" "),t._m(1,!0)])])})),t._v(" "),i("div",{staticClass:"choiceContainer"},[t._m(2),t._v(" "),i("div",{staticClass:"choiceList"},t._l(t.selectedTickets,function(s,e){return i("div",{key:e,staticClass:"choiceItem"},[i("div",{staticClass:"choiceImg"},[i("img",{staticClass:"choiceImg",attrs:{src:s.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"choiceName"},[t._v(t._s(t.catTickets[s.id-1].name))])])})),t._v(" "),i("div",{staticClass:"choiceBtns"},[i("div",{staticClass:"ticketsBtn clearTiecktsBtn",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.clearAllTickets(s)}}},[t._v("\n            清除全部\n          ")]),t._v(" "),i("div",{staticClass:"ticketsBtn randomTicketsBtn",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.randomTickets(s)}}},[t._v("自动生成")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),i("div",{staticClass:"historyTicketsBox"},[i("div",{staticClass:"historyItem",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.$router.push("historyTickets")}}},[t._v("历史票码>>")]),t._v(" "),i("div",{staticClass:"currentItem orange",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.$router.push("currentTickets")}}},[t._v("本期票码>>")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"catTicketsTit"},[s("div",{staticClass:"icon"}),this._v(" "),s("div",{staticClass:"catTicketsTxt"},[this._v("自主选票")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"catCircle"},[s("img",{staticClass:"img-responsive ",attrs:{src:i("JADg"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"choiceTitBox"},[s("div",{staticClass:"choiceTit"},[this._v("我选中的猫小票")]),this._v(" "),s("div",{staticClass:"choiceTips"},[this._v("自动生成为系统随机生成")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"catTicketsTitle"},[s("div",{staticClass:"catTicketsTit"},[s("div",{staticClass:"icon"}),this._v(" "),s("div",{staticClass:"catTicketsTxt"},[this._v("确认选票")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"exchangeBox"},[s("div",{staticClass:"exchangeInfo"},[s("div",{staticClass:"catGrainSum orange"},[this._v("剩余猫粮 : 180000")]),this._v(" "),s("div",{staticClass:"exchangeDemand"},[this._v("10000猫粮兑换一注猫小票")])]),this._v(" "),s("div",{staticClass:"exchangeBtn"},[this._v("确认兑换")])])}]};var a=i("VU/8")(e,c,!1,function(t){i("pdWk")},"data-v-2075cf0e",null);s.default=a.exports},JADg:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADgklEQVRYhcWYzW/cRBiHn5m1LUxM1hEq2USCarg0hSNCaSlcEFX5uMMZIXEhgX+F0nLh0Du5A4qKemmhihBHoL10RJGSTTg4axyMvF6bgz1bx9pmvZtk87vZY8/76J2P90Pkec4k0lor4BrwJnAROA88Vw7/A/wJ/AHcAzaVUnqS+UUTIK11C/gQWAMuA6Lh/DlwH7gJbCilBscG0lq/A9wAVgCklLiui+u6OI6DZVlIKQHIsow0TUmShDiOieOYLMvMVA+AdaXUj1MBaa2fAa4DnwJYloXv+8zNzQ0BxinLMg4ODtjf3ydNU/P6G+ALpdR/jYG01ueA74DXhRAsLCwwPz+PEE1X6rDyPCcMQ4IgoLT3C/CBUurvsUAlzF3ggmVZLC4u4jjOVCB1JUnC7u6u8dZD4K061CEgrfWzwB1g1XEcOp0OrVbrRGCMBoMB3W6XJEkAtoC3lVL/mvH6ZrgOrNq2fSowAK1Wi06ng23bAKulzaGGHipP020hBMvLy42XSevD14xSqtF/SZKwvb1t9tRVc/pkOakEvgLwff/E9sxRchwH3/fN443yrhsu2UfARdu2abfbpw5j1G63zdKtUFy8Q6DPzAfTHu1pJISoOmANQJax6Q0pJZ7nzQzGyPM8c9Fe1lq/LIF3AeG67ky9YySEwHVdKOLjNQlcAczLM1HF9hUJvArM5GQ9TRXbr1jAi1AEz1Gq3zPjNO77UfdUxfZ5SZlcNY3gp6GKbe/sKJ4iSZF2VhOpmatiO7KAv4Dn0zQdGUzHxaZpY1lVleTtsQR+B0w6cCaq2P5NUlQHxHF8ZkAV2z9JYBPI4zhm0pLoJJTnuQHKgU2plHoE/JxlGVEUzRwoiiKzqe8rpR6ZY/81QK/Xm6mX8jyn1+uZx5vwJP3YAB70+33CMJwZUBiG9Pt9KGq2jSFQWVGuAwRBMJMTlyQJQRCYx89NVVuvOm4BH9u2zdLS0qkk+VBUHjs7O8Y7t5RSn5ixeuhYA7b6/T7dbpfBYGwpPhVMt9s1MFuUK2M080Jxb2/PwIwvFCtQLwDfA68JIfB9/1j59ohS+lfgfaXUXv3bo5oNLvAltWaD53mNwfI8J4oier2e8QpM02yogV2laMdcgGO1Yx5StGNuH2Vv0obVOnCJ5g0reNKw+vZEGlYj4BTwHkVLbwV4CZgvh0PgMcVFdw/4YdKW3v+L6as4Aiel2gAAAABJRU5ErkJggg=="},pdWk:function(t,s){}});
//# sourceMappingURL=31.6efc1714c6646aab9a82.js.map