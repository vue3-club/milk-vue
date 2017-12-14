<template>
  <div
    :class="prefixCls"
    v-bind="$attrs"
  >
    <div v-if="$slots.header" :class="`${prefixCls}-header`">
      <slot name="header"></slot>
    </div>
    <div v-if="$slots.default" :class="`${prefixCls}-body`">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" :class="`${prefixCls}-footer`">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VList',
    data() {
      return {
        prefixCls: 'vm-list'
      };
    }
  };
</script>
