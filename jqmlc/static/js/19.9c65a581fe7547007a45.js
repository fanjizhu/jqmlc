webpackJsonp([19],{5159:function(t,e){},BCN9:function(t,e){},"RlP/":function(t,e,s){"use strict";var a={name:"TicketsList",props:["data"],data:function(){return{catTickets:this.$store.state.catTickets}},methods:{imgLoad:function(t){return s("li/w")("./catchoice"+t+".png")}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ticketsListContainer"},t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"ticketsList"},[s("div",{class:["ticketsStatus",{"tickets-zj":1==e.draw_result,"tickets-wzj":0==e.draw_result,"tickets-wkj":2==e.draw_result}]},[t._v("\n      "+t._s(e.draw_result_desc)+"\n    ")]),t._v(" "),s("div",{staticClass:"ticketsImgList"},t._l(e.ticket_number,function(e,a){return s("div",{key:a,staticClass:"ticketsImgItem"},[s("div",{staticClass:"ticketsImg"},[s("img",{staticClass:"img-responsive",attrs:{src:t.imgLoad(e),alt:""}})]),t._v(" "),s("div",{staticClass:"ticketsTxt"},[t._v(t._s(t.catTickets[e-1].name))])])})),t._v(" "),s("div",{staticClass:"ticketsTimeBox"},[s("div",{staticClass:"ticketsTime"},[t._v("获取时间 : "+t._s(e.create_time))]),t._v(" "),s("div",{staticClass:"ticketsCost"},[t._v("消耗猫粮 : "+t._s(e.cost))])])])}))},staticRenderFns:[]};var r=s("VU/8")(a,i,!1,function(t){s("5159")},"data-v-12079bef",null);e.a=r.exports},aGeJ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("03U6"),r=s("RlP/"),c=s("bh5B"),n={name:"HistoryTickets",components:{HeaderBar:i.a,Scroll:c.a,TicketsList:r.a},data:function(){return{headerBar:{title:"本期票码",imgUrl:"",goBackUrl:s("fRSK"),path:"",params:{},goBack:!0,showIcon:!1},pullDownRefresh:!0,pullUpLoad:!0,pullUpLoadMoreTxt:"加载更多",pullUpLoadNoMoreTxt:"没有更多数据了",startY:0,items:[{cost:1e4,create_time:"2018-12-20",draw_result:"0",draw_result_desc:"未开奖",draw_status:1,ticket_number:"76114",user_id:2},{cost:1e4,create_time:"2018-12-20",draw_result:"0",draw_result_desc:"未开奖",draw_status:1,ticket_number:"23456",user_id:2},{cost:1e4,create_time:"2018-12-19",draw_result:"0",draw_result_desc:"未开奖",draw_status:1,ticket_number:"45678",user_id:2}]}},watch:{startY:function(){this.rebuildScroll()}},created:function(){console.log("数据初始化完毕")},computed:{},methods:{onPullingDown:function(){var t=this;console.log("pulling down and load data"),setTimeout(function(){t._isDestroyed||(Math.random()>.5?(t.items.unshift(new Date),console.log("有新数据")):(console.log("无新数据"),t.$refs.scroll.forceUpdate()))},2e3)},onPullingUp:function(){var t=this;console.log("pulling up and load data"),setTimeout(function(){if(!t._isDestroyed)if(Math.random()>.5){for(var e=[],s=0;s<10;s++)e.push(t.itemIndex);t.items=t.items.concat(e)}else t.$refs.scroll.forceUpdate()},1500)},rebuildScroll:function(){var t=this;a.default.nextTick(function(){t.$refs.scroll.destroy(),t.$refs.scroll.initScroll()})}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("HeaderBar",{attrs:{headerBar:t.headerBar}}),t._v(" "),s("div",{staticClass:"gray-fixed"},[s("div",{staticClass:"wrapper"},[s("scroll",{ref:"scroll",attrs:{pullDownRefresh:t.pullDownRefresh,pullUpLoad:t.pullUpLoad,startY:parseInt(t.startY)},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},[s("TicketsList",{attrs:{data:t.items}})],1)],1)])],1)},staticRenderFns:[]};var o=s("VU/8")(n,l,!1,function(t){s("BCN9")},"data-v-396fb1ea",null);e.default=o.exports}});
//# sourceMappingURL=19.9c65a581fe7547007a45.js.map