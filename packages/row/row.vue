<template>
  <div :class="classNames">
    <slot v-if="$slots.default"></slot>
  </div>
</template>

<script>
  const prefixCls = 'vm-flexbox';

  export default {
    name: 'VRow',
    props: {
      direction: String,
      wrap: String,
      justify: String,
      align: String,
      alignContent: String,
      gutter: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        classNames: {
          [prefixCls]: true,
          [`${prefixCls}-dir-${this.direction}`]: this.direction,
          [`${prefixCls}-${this.wrap}`]: this.wrap,
          [`${prefixCls}-justify-${this.justify}`]: this.justify,
          [`${prefixCls}-align-${this.align}`]: this.align,
          [`${prefixCls}-align-content-${this.alignContent}`]: this.alignContent
        }
      }
    }
  };
</script>
