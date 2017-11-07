<template>
  <div :class="inputCls">
    <label :class="labelCls" :for="label"><slot></slot></label>
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
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    inputCls () {
      return {
        [`${listPrefixCls}-item`]: true,
        [`${prefixCls}-item`]: true
      }
    },
    labelCls () {
      return {
        [`${prefixCls}-label`]: true,
        [`${prefixCls}-label-5`]: true
      }
    }
  },
  watch: {
    clickToFocus () {
      if (this.clickToFocus) {
        this.$refs.input.focus()
      }
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleFocus (event) {
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins.less';

  @listPrefixCls: vm-list;
  @inputPrefixCls: vm-input;

  .@{listPrefixCls}-item {
    position: relative;
    display: flex;
    padding-left: @h-spacing-lg;
    min-height: @list-item-height;
    background-color: @fill-base;
    vertical-align: middle;
    overflow: hidden;
    transition: background-color 200ms;
    align-items: center;

    &.@{inputPrefixCls}-item {
      height: @list-item-height;
      padding-left: @h-spacing-lg;
      padding-right: @h-spacing-lg;
      .hairline('bottom');
    }

    .@{inputPrefixCls}-label {
      color: @color-text-base;
      font-size: @font-size-heading;
      margin-left: 0;
      margin-right: @h-spacing-sm;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      padding: 2 * @hd 0;

      &.@{inputPrefixCls}-label-5 {
        width: 5 * @input-label-width;
      }
    }

    .@{inputPrefixCls}-control {
      font-size: @input-font-size;
      flex: 1;

      input {
        color: @color-text-base;
        font-size: @font-size-heading;
        appearance: none;
        width: 100%;
        padding: 2 * @hd 0;
        border: 0;
        background-color: transparent;
        line-height: @line-height-base;
        box-sizing: border-box;

        &::placeholder {
          color: @color-text-placeholder;
          line-height: 1.2;
        }

        &:disabled {
          color: @color-text-disabled;
          background-color: #fff;
        }
      }
    }
  }
</style>
