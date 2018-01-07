<template>
  <div
    v-bind="$attrs"
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
        let resStyle = {};
        if (this.gutter) {
          resStyle.padding = `0 ${this.gutter / 2}px`;
        }
        return resStyle;
      },
      classNames() {
        return [
          `${prefixCls}-item`,
          {
            [`${prefixCls}-item-flex`]: !this.span && !this.offset,
            [`${prefixCls}-item-span-${this.span}`]: this.span,
            [`${prefixCls}-item-offset-${this.offset}`]: this.offset
          }
        ];
      }
    }
  };
</script>
