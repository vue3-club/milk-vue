<template>
  <div :class="warpCls">
    <div :class="`${prefixCls}-bar`" :style="portionStyle"></div>
  </div>
</template>

<script>
const prefixCls = 'vm-progress';

export default {
  name: 'VProgress',
  props: {
    inactive: Boolean,
    percent: {
      type: Number,
      required: true,
      default: 0,
      validator: value => value >= 0 && value <= 100
    },
    position: {
      type: String,
      default: 'fixed'
    },
    unfilled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      prefixCls: prefixCls
    };
  },
  computed: {
    warpCls() {
      return {
        [`${prefixCls}-outer`]: true,
        [`${prefixCls}-hide-outer`]: !this.unfilled,
        [`${prefixCls}-fixed-outer`]: this.position === 'fixed'
      }
    },
    portionStyle() {
      return {
        width: this.percent + '%'
      }
    }
  }
};
</script>
