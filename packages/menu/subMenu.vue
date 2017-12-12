<template>
  <v-list>

  </v-list>
</template>
<script>
  const prefixCls = 'vm-sub-menu';

  export default {
    name: 'VMenu',
    props: {
      icon: String,
      title: String
    },
    data() {
      return {
        prefixCls: prefixCls
      };
    },
    computed: {
      // 元素类集合
      warpCls() {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${this.mode}`]: this.mode
        };
      }
    }
  };
</script>
