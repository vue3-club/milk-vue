<template>
  <svg :class="cls" :style="style" @click="$emit('click')">
    <use :href="href"/>
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
      href() {
        return `#${this.type}`
      },
      cls() {
        const prefixCls = 'vm-icon'
        return [
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
