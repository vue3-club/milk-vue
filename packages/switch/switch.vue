<template>
  <label
    :class="warpCls">
    <input
      v-bind="$attrs"
      type="checkbox"
      :class="`${prefixCls}-checkbox`"
      :disabled="disabled"
      :checked="isChecked"
      @change="onChange"
      @click="onClick"
    />
    <div
      :class="switchCls"
      :style="switchSyl"
      @click="onSwitchClick"
    ></div>
  </label>
</template>
<script>
  const prefixCls = 'vm-switch';

  export default {
    name: 'VSwitch',
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      platform: {
        type: String,
        default: 'ios'
      },
      modelValue: {
        type: Boolean,
        default: undefined
      },
      checked: Boolean,
      disabled: Boolean,
      switchStyle: Object,
      color: String
    },
    data() {
      return {
        prefixCls: prefixCls,
        isChecked: this.getChecked
      };
    },
    watch: {
      checked(val) {
        if (val !== this.isChecked) {
          this.toggle();
        }
      },
      modelValue() {
        this.isChecked = this.getChecked;
      }
    },
    computed: {
      // 元素类集合
      warpCls() {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-android`]: this.platform !== 'ios'
        };
      },
      // 元素类集合
      switchCls() {
        return {
          'checkbox': true,
          [`${prefixCls}-disabled`]: this.disabled
        };
      },
      // 元素类集合
      switchSyl() {
        const resStyle = this.switchStyle || {};
        if (this.color && this.isChecked) {
          resStyle.backgroundColor = this.color;
        }
        return resStyle;
      },
      // 获取选中状态
      getChecked() {
        return this.modelValue === undefined ? this.checked : this.modelValue;
      }
    },
    methods: {
      toggle() {
        this.isChecked = !this.isChecked;
        this.$emit('input', this.isChecked);
      },
      onChange() {
        this.toggle();
        this.$emit('change', this.isChecked);
      },
      onClick(event) {
        if (!this.disabled) {
          this.$emit('click', event);
        }
      },
      onSwitchClick(event) {
        if (!this.disabled) {
          this.$emit('click', event);
        }
      }
    },
    mounted() {
      this.isChecked = this.getChecked;
    }
  };
</script>
