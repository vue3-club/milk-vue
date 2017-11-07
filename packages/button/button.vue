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
  data () {
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

<style lang="less">
  @import '../../style/mixins.less';

  @buttonPrefixCls: vm-button;
  .@{buttonPrefixCls} {
    display: block;
    outline: 0 none;
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    font-size: @button-font-size;
    height: @button-height;
    line-height: @button-height;
    border-radius: @radius-md;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;

    // default
    width: 100%;
    color: @color-text-base;
    background-color: @fill-base;

    .hairline('all', @border-color-base, @radius-md);

    &:active {
      background-color: @fill-tap;
    }

    &&-disabled {
      color: fade(@color-text-base, 30%);
      opacity: 0.6;
    }

    &-primary {
      color: @color-text-base-inverse;
      background-color: @primary-button-fill;
      .hairline('all', @primary-button-fill, @radius-md);

      &:active {
        color: fade(@color-text-base-inverse, 30%);
        background-color: @primary-button-fill-tap;
      }

      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base-inverse, 60%);
        opacity: 0.4;
      }
    }

    &-inline {
      width: auto;
      display: inline-block;
      padding: 0 @h-spacing-lg;
    }

    &-small {
      font-size: @button-font-size-sm;
      height: @button-height-sm;
      line-height: @button-height-sm;
      padding: 0 @h-spacing-lg;
      border-radius: @radius-md;
    }

    &-ghost {
      color: @ghost-button-color;
      background-color: transparent;
      .hairline('all', @ghost-button-color, @radius-md);

      &:active {
        color: @ghost-button-fill-tap;
        background-color: transparent;
        .hairline('all', @ghost-button-fill-tap, @radius-md);
      }

      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base, 10%);
        .hairline('all', fade(@color-text-base, 10%), @radius-md);
        opacity: 1; // override default opacity: 0.6
      }
    }

    &-warning {
      color: @color-text-base-inverse;
      background-color: @warning-button-fill;

      &:active {
        color: fade(@color-text-base-inverse, 30%);
        background-color: @warning-button-fill-tap;
      }

      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base-inverse, 60%);
        opacity: 0.4;
      }
    }
  }
</style>


