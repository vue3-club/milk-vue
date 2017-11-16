<template>
  <div :class="inputCls">
    <label :class="labelCls" :for="label">
      <slot></slot>
    </label>
    <div :class="`${prefixCls}-control`">
      <input
        :id="label"
        :placeholder="placeholder"
        ref="input"
        :type="type"
        :autofocus="autofocus"
        :clicktofocus="clickToFocus"
        :value="value"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput"
        @focus="handleFocus"
      >
    </div>
  </div>
</template>

<script>
  const prefixCls = 'vm-input'
  const listPrefixCls = 'vm-list'

  export default {
    name: 'VInput',
    props: {
      placeholder: String,
      autofocus: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      clickToFocus: {
        type: Boolean,
        default: false
      },
      label: String,
      clear: Boolean,
      readonly: Boolean,
      disabled: Boolean
    },
    data() {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      inputCls() {
        return {
          [`${listPrefixCls}-item`]: true,
          [`${prefixCls}-item`]: true
        }
      },
      labelCls() {
        return {
          [`${prefixCls}-label`]: true,
          [`${prefixCls}-label-5`]: true
        }
      }
    },
    watch: {
      clickToFocus() {
        if (this.clickToFocus) {
          this.$refs.input.focus()
        }
      }
    },
    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value)
      },
      handleFocus(event) {
        this.$emit('focus', event)
      },
      handleBlur(event) {
        this.$emit('blur', event)
      }
    }
  }
</script>
