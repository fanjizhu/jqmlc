<template lang="html">
    <div class="header">
      <div class="header-title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$attrs.title;
    }
  }
}
</script>

<style lang="less">
@import '../../style/mixin';

.header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 130px;
    // padding: 0 35px;
    background: @main-color;
    z-index: 1000;
}

.header-title {
    width: 100%;
    padding: 42px 0;
    font-size: 52px;
    .white;
    .text-center;
}
</style>
