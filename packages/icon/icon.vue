<template>
  <svg :class="cls" :style="style">
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
        return [
          'vm-icon',
          {
            [`vm-icon-${this.type}`]: this.type,
            [`vm-icon-${this.size}`]: this.size
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
