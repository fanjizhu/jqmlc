<!-- 投标详情 -->
<template lang="html">
  <div class="">
    <HeaderBar :headerBar="headerBar"></HeaderBar>
    <div class="gray-body">
      <div class="bid-info">
        <div class="bid-title">
          车贷0075 ( 新手标)
        </div>
        <div class="bid-rate">
          <div class="bid-rate-txt text-center">
            年化收益率
          </div>
          <div class="bid-rate-num text-center">
            <span>10</span><span class="bid-rate-simbol">%</span>
          </div>
        </div>
      </div>
      <div class="invest-info">
        <div class="can-invest">
          <div class="invest-txt">
            可投资金(元)
          </div>
          <div class="can-invest-num">
            392670.00
          </div>
        </div>
        <div class="least-invest">
          <div class="invest-txt">
            起购金额(元)
          </div>
          <div class="least-invest-num invest-num">
            1000
          </div>
        </div>
        <div class="invest-days">
          <div class="invest-txt">
            投资期限(天)
          </div>
          <div class="invest-days-num invest-num">
            30
          </div>
        </div>
      </div>
      <div class="bid-info-list">
        <router-link tag="div" :to="{ name: 'projectDetail', params: {fatId : 30} }" class="bid-info-items">
          <div class="bid-info-icon">
            <img src="../../assets/images/projectDetail.png" alt="">
          </div>
          <div class="">
            项目详情
          </div>
          <div class="bid-info-rightIcon">
            <img src="../../assets/images/right.png" alt="">
          </div>
        </router-link>
        <router-link tag="div" :to="{ name: 'loanInfo', params: {fatId : 30} }" class="bid-info-items">
          <div class="bid-info-icon">
            <img src="../../assets/images/borrowInfo.png" alt="">
          </div>
          <div class="">
            借款资料
          </div>
          <div class="bid-info-rightIcon">
            <img src="../../assets/images/right.png" alt="">
          </div>
        </router-link>
        <router-link tag="div" :to="{ name: 'auditStatus', params: {fatId : 30} }" class="bid-info-items">
          <div class="bid-info-icon">
            <img src="../../assets/images/audit.png" alt="">
          </div>
          <div class="">
            审核状态
          </div>
          <div class="bid-info-rightIcon">
            <img src="../../assets/images/right.png" alt="">
          </div>
        </router-link>

      </div>
      <div class="bid-description">
        <div class="bid-des-tabs">
          <div :class="['bid-des-tit', {tabActive:currentTab.name==tab.name}]" v-for="(tab,index) in tabs" :key="index"
            @click="currentTab = tab">
            {{tab.txt}}
          </div>
        </div>
        <component :is="currentTabComponent"></component>
      </div>
    </div>
    <div class="rob">
      <div class="rob-btn">
        开抢
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'
import CarDetail from './carDetail.vue'
import InvestRecord from './investRecord.vue'
import RepaymentRecord from './repayment.vue'

var tabs = [
  {
    name: 'carDetail',
    txt: '车辆情况说明',
    component: CarDetail
  },
  {
    name: 'investRecord',
    txt: '投标记录',
    component: InvestRecord
  },
  {
    name: 'repayment',
    txt: '还款记录',
    component: RepaymentRecord
  }
]

export default {
  name: 'Invest',
  components: {
    HeaderBar,
    CarDetail,
    InvestRecord,
    RepaymentRecord
  },
  data () {
    return {
      headerBar: {
        title: '投资详情',
        imgUrl: require('../../assets/images/protocol.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'description',
        params: { title: 'loanProtocol' },
        goBack: true,
        showIcon: true
      },
      tabs: tabs,
      currentTab: tabs[0]
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab.component
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.bid-info {
  padding: 0 35px;
  .bg(@main-color);
  .color(#fff);
}

.bid-title {
  padding: 19px 0 48px;
  .fontSize(34px);
}

.bid-rate {
  padding-bottom: 113px;
}

.bid-rate-txt {
  .fontSize(32px);
}

.bid-rate-num {
  margin-top: 30px;
  .fontSize(132px);
  line-height: 1;

  span {
    display: inline-block;
  }

  .bid-rate-simbol {
    .fontSize(48px);
  }
}

.invest-info {
  .size(100%, 180px);
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .bg(#fff);
  .fontSize(32px);
  line-height: 1;
}

.invest-txt {
  margin-bottom: 26px;
}

.can-invest-num {
  .fontSize(46px);
  .color(@orange);
}

.invest-num {
  .fontSize(46px);
}

.bid-info-list {
  margin-bottom: 20px;
  .bg(#fff);
}

.bid-info-items {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  height: 130px;
  border-bottom: 1px solid #efefef;
  /*no*/
  .fontSize(40px);
}

.bid-info-icon {
  .width(50px);
  margin-right: 24px;

  img {
    width: 100%;
    vertical-align: middle;
  }
}

.bid-info-rightIcon {
  .width(22px);
  margin-left: auto;

  img {
    width: 100%;
  }
}

.rob {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 150px;
  .bg(#fff);
}

.rob-btn {
  .size(970px, 120px);
  margin: 15px auto;
  .bg(@dark-color);
  .border-radius(18px);
  .color(#fff);
  .fontSize(42px);
  .text-center;
  line-height: 120px;
}

.bid-description {
  padding-bottom: 150px;
}

.bid-des-tabs {
  display: flex;
  flex: 1;
  height: 110px;
  justify-content: space-around;
  align-items: center;
  .bg(#fff);
  border-bottom: 1px solid #efefef;
  /*no*/
  .color(#999);
}

.bid-des-tit {
  .fontSize(42px);
  line-height: 110px;
}

.tabActive {
  .color(@main-color);
  border-bottom: 4px solid @main-color;
}
</style>
