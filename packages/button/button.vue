<template>
  <component
    v-bind="$attrs"
    role="buttonType"
    :is="tag"
    :disabled="disabled"
    :class="classNames"
    @click="handleClick"
  >
    <v-icon v-if="iconType!=''" :type="iconType"></v-icon>
    <slot v-if="$slots.default"></slot>
  </component>
</template>

<script>
  import Icon from '../icon';

  const prefixCls = 'vm-button';

  export default {
    name: 'VButton',
    components: {
      [Icon.name]: Icon
    },
    props: {
      type: String,
      size: {
        type: String,
        default: 'normal'
      },
      disabled: Boolean,
      loading: Boolean,
      inline: Boolean,
      icon: String,
      tag: {
        type: String,
        default: 'button'
      }
    },
    computed: {
      iconType() {
        return this.loading ? 'loading' : this.icon || '';
      }
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
      };
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  };
</script>

