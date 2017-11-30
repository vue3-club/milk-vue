<template>
  <svg
    :class="svgCls"
    :style="style"
    @click="$emit('click')"
  >
    <use :href="`#${this.type}`"/>
  </svg>
</template>

<script>
  import loadSprite from 'loadSprite'

  export default {
    name: 'VIcon',
    props: {
      type: {
        type: String,
        required: true
      },
      size: String,
      color: {
        type: String,
        default: '#000'
      }
    },
    beforeCreate() {
      loadSprite();
    },
    computed: {
      svgCls() {
        const prefixCls = 'vm-icon'
        return [
          this.$attrs.class || '',
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: this.type,
            [`${prefixCls}-${this.size}`]: this.size
          }
        ]
      },
      style() {
        return {
          ['color']: this.color
        }
      }
    }
  };
</script>
