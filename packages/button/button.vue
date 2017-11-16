<template>
  <button :disabled="disabled"
          role="buttonType"
          :class="classNames"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  const prefixCls = 'vm-button'

  export default {
    name: 'VButton',
    props: {
      type: String,
      size: String,
      disabled: Boolean,
      loading: Boolean,
      inline: Boolean
    },
    data() {
      return {
        active: false,
        classNames: {
          [prefixCls]: true,
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-${this.size}`]: this.size,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-loading`]: this.loading,
          [`${prefixCls}-inline`]: this.inline,
          [`${prefixCls}-active`]: this.active
        }
      }
    }
  }
</script>

