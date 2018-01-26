<template>
  <pull-to-refresh
    prefixCls='vm-pull-to-refresh'
    :direction="direction"
    :distanceToRefresh="distanceToRefresh"
    :refreshing="refreshing"
    :onRefresh="onRefresh"
    :indicator="Object.assign(INDICATOR, indicator)"
  >
    <slot></slot>
  </pull-to-refresh>
</template>

<script>
import PullToRefresh from 'v-pull-to-refresh';

const INDICATOR = {
  activate: '松开立即刷新',
  deactivate: '下拉可以刷新',
  release: '加载中',
  finish: '完成刷新',
};

export default {
  name: 'VPullToRefresh',
  data () {
    return {
      INDICATOR
    }
  },
  props: {
    direction: {
      type: String,
      default: 'down'
    },
    distanceToRefresh: {
      type: Number,
      default: 25
    },
    refreshing: false,
    indicator: Object,
    className: String,
    onRefresh: Function
  },
  components: {
    PullToRefresh
  }
}
</script>
