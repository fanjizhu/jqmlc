<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
  </div>
</template>
<script>
const COMPONENT_NAME = 'loading'

export default {
  name: COMPONENT_NAME
}

</script>
<style lang="less" scoped>
  .mf-loading-container {
    img {
      width: 80px;
      height: 80px;
      display: block
    }
  }

</style>
