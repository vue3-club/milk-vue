<template>
  <div
    :class="classNames"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'vm-flexbox';

  export default {
    name: 'VCol',
    props: {
      span: [Number, String],
      offset: [Number, String]
    },
    computed: {
      gutter() {
        return (this.$parent && Number(this.$parent.gutter)) || 0;
      },
      style() {
        return this.gutter
          ? { padding: `0 ${this.gutter / 2}px` }
          : {};
      },
      classNames() {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-span-${this.span}`]: this.span,
            [`${prefixCls}-item-offset-${this.offset}`]: this.offset
          }
        ];
      }
    }
  };
</script>
