<!-- 我的  -->
<template lang="html">
  <div class="">
    <Header :title="title"></Header>
    <div class="gray-body">
      <div class="notice" v-if="noticeInfo">
        <div class="notice-img">
          <img src="../../assets/images/notice.png" alt="">
        </div>
        <div class="notice-txt" @click.stop.prevent="$router.push(`noticeDetail/${noticeInfo.id}`)">
          {{noticeInfo.title}}
        </div>
        <div class="moreNotice" @click.stop.prevent="$router.push('notice')">
          <img src="../../assets/images/moreNotice.png" alt="">
        </div>
      </div>
      <div class="userInfo" v-if="personInfo">
        <div class="avatar">
          <img src="../../assets/images/default-image.png" alt="">
        </div>
        <div class="userDetail">
          <div class="mobile">
            {{personInfo.mobilePhone|formatMobile}}
          </div>
          <div class="level" @click.stop.prevent="$router.push('member')">
            <div class="level-box">
              <img src="../../assets/images/level.png" alt="" class="level-img">{{personInfo.groupName}} >>
            </div>
            <div class="level-box" @click.stop.prevent="$router.push('growValue')">
              <img src="../../assets/images/growTree.png" alt="" class="level-img">{{personInfo.growthValue}} >>
            </div>
          </div>
        </div>
      </div>
      <div class="accountBox">
        <!-- 占位框 -->
      </div>
      <div class="userAccount">
        <div class="account" @click.stop.prevent="$router.push('asset')">
          <div class="userInfo-img">
            <img src="../../assets/images/self-account.png" alt="">
          </div>
          <div class="">账户资产</div>
        </div>
        <div class="current" @click.stop.prevent="$router.push('current')">
          <div class="userInfo-img">
            <img src="../../assets/images/self-current.png" alt="">
          </div>
          <div class="">灵活猫</div>
        </div>
        <div class="invite" @click.stop.prevent="$router.push('invite')">
          <div class="userInfo-img">
            <img src="../../assets/images/self-invite.png" alt="">
          </div>
          <div class="">我的邀请</div>
        </div>
        <div class="balance" @click.stop.prevent="$router.push('balance')">
          <div class="userInfo-img">
            <img src="../../assets/images/self-balance.png" alt="">
          </div>
          <div class="">余额</div>
        </div>
      </div>
      <Suduku :suduku="suduku"></Suduku>
      <div class="logOut" @click.stop.prevent="logout">
        安全退出
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Suduku from './suduku.vue'
import { formatMobile } from '@/lib/js/filters'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Personal',
  components: {
    Header,
    Footer,
    Suduku
  },
  data () {
    return {
      title: '我的',
      suduku: [
        {
          title: '抽奖号码',
          imgUrl: require('../../assets/images/self-lottery.png'),
          txt: '',
          path: 'luckdraw'
        },
        {
          title: '我的任务',
          imgUrl: require('../../assets/images/self-task.png'),
          txt: '做任务，得成长值',
          path: 'task'
        },
        {
          title: '投资记录',
          imgUrl: require('../../assets/images/self-investRecord.png'),
          txt: '',
          path: 'investRecord'
        },
        {
          title: '猫小票',
          imgUrl: require('../../assets/images/self-catTickets.png'),
          txt: '竞猜赢大奖',
          path: 'catTickets'
        },
        {
          title: '我的猫粮',
          imgUrl: require('../../assets/images/self-catGrain.png'),
          txt: '猫粮兑好礼',
          path: 'catGrain'
        },
        {
          title: '红包卡券',
          imgUrl: require('../../assets/images/self-tickets.png'),
          txt: '',
          path: 'cashTickets'
        },
        {
          title: '安全中心',
          imgUrl: require('../../assets/images/self-safe.png'),
          txt: '',
          path: 'safe'
        },
        {
          title: '常见问题',
          imgUrl: require('../../assets/images/self-faq.png'),
          txt: '',
          path: 'description/faq'
        },
        {
          title: '关于我们',
          imgUrl: require('../../assets/images/self-about.png'),
          txt: '猫友的专属客服',
          path: 'aboutUs'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      noticeInfo: ({ globalVal }) => globalVal.noticeInfo,
      personInfo: ({ auth }) => auth.personInfo
    })
  },
  methods: {
    ...mapActions(['logoutAction', 'getNoticeInfo', 'getPersonInfo']),
    logout () {
      this.logoutAction()
    }
  },
  filters: {
    formatMobile
  },
  mounted () {
    this.getNoticeInfo()
    this.getPersonInfo()
  }
}
</script>

<style lang="less" scoped>
@import '../../style/mixin.less';

.notice {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  .bg(#fff2e3);
  .color(#7d3b03);
  .fontSize(32px);
  .height(54px);
}

.notice-img {
  display: flex;
  // flex: 1;
  align-items: center;
  width: 40px;
  margin-right: 23px;

  img {
    .size(40px, 38px);
  }
}

.notice-txt {
  margin-right: auto;
}

.moreNotice {
  display: flex;
  align-items: center;
  .size(44px, 12px);

  img {
    .size(44px, 12px);
  }
}

.userInfo {
  display: flex;
  flex: 1;
  padding: 60px 35px;
  align-items: center;
  justify-content: space-between;
  background: @main-color;
  .color(#fff);
}

.avatar {
  .size(200px, 200px);
  margin-right: 35px;
  border-radius: 50%;

  img {
    width: 100%;
  }
}

.mobile {
  margin-bottom: 30px;
  .fontSize(48px);
}

.level {
  .fontSize(36px);
}

.level-box {
  display: inline-block;
  margin-right: 50px;
}

.level-img {
  .size(36px, 36px);
  margin-right: 16px;
}

.userDetail {
  .width(652px);
  margin-right: auto;
}

.accountBox {
  height: 100px;
  background: @main-color;
}

.userAccount {
  display: flex;
  flex: 1;
  height: 250px;
  margin: -100px 0 16px;
  padding: 60px 35px 50px;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
  background: #fff;
  text-align: center;
  .fontSize(38px);
  .color(#333);
}

.userInfo-img {
  margin-bottom: 30px;

  img {
    height: 76px;
    width: auto;
  }
}

.logOut {
  .size(900px, 120px);
  margin: 21px auto 68px;
  .bg(@main-color);
  .border-radius(18px);
  .fontSize(52px);
  .text-center;
  line-height: 120px;
  .color(#fff);
}
</style>
