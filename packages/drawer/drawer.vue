<template>
  <div :class="warpCls">
    <div :class="`${prefixCls}-sideBar`"></div>
    <div :class="`${prefixCls}-overlay`"></div>
  </div>
</template>
<script>
  const prefixCls = 'vm-drawer';
  export default {
    name: 'VDrawer',
    props: {

    },
    data() {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      // 元素类集合
      warpCls() {
        return {}
      }
    }
  }
</script>
