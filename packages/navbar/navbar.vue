<template>
  <div :class="warpCls" v-bind="$attrs">
    <div :class="`${prefixCls}-left`">
      <v-icon v-if="icon" :type="icon" @click="$emit('icon-click')"></v-icon>
      <slot name="left"></slot>
    </div>
    <div :class="`${prefixCls}-title`">
      <slot v-if="$slots.default"></slot>
      <template v-else-if="title">{{title}}</template>
    </div>
    <div :class="`${prefixCls}-right`">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>

  const prefixCls = 'vm-navBar';

  export default {
    name: 'VNavBar',
    props: {
      icon: String,
      title: String,
      mode: {
        type: String,
        validator: function (value) {
          return value && value === 'light' ? 'light' : 'dark';
        }
      }
    },
    data() {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      // 元素类集合
      warpCls() {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${this.mode}`]: this.mode,
        }
      }
    }
  }
</script>
