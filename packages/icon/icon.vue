<template>
  <svg
    :class="svgCls"
    :style="style"
    @click="!disabled&&$emit('click')"
    v-bind="$attrs"
  >
    <use :href="`#${this.type}`"/>
  </svg>
</template>

<script>
  import loadSprite from 'loadSprite';

  export default {
    name: 'VIcon',
    props: {
      type: {
        type: String,
        required: true
      },
      size: String,
      color: String,
      disabled: Boolean
    },
    beforeCreate() {
      loadSprite();
    },
    computed: {
      svgCls() {
        const prefixCls = 'vm-icon';
        return [
          this.$attrs.class || '',
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: this.type,
            [`${prefixCls}-${this.size}`]: this.size,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      },
      style() {
        return {
          color: this.color
        };
      }
    }
  };
</script>
