<!-- 会员 -->
<template lang="html">
  <div>
    <HeaderBar :header-bar="headerBar"></HeaderBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/headerBar.vue'

export default {
  name: 'Member',
  components: {
    HeaderBar
  },
  data () {
    return {
      headerBar: {
        title: '会员等级',
        imgUrl: require('../../assets/images/doubt.png'),
        goBackUrl: require('../../assets/images/goBack.png'),
        path: 'description',
        params: { title: 'memberAddRate' },
        goBack: true,
        showIcon: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
