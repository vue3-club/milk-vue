<template>
  <label
    v-if="warpLabel"
    :class="`${prefixCls}-wrapper`">
    <span :class="warpCls">
      <input
        v-bind="$attrs"
        :class="`${prefixCls}-input`"
        :type="type"
        :disabled="disabled"
        :value="value"
        :checked="isChecked"
        @change="onChange"
        @click="onClick"
      />
      <span :class="`${prefixCls}-inner`"></span>
    </span>
    <slot></slot>
  </label>
  <span v-else :class="warpCls">
      <input
        v-bind="$attrs"
        :class="`${prefixCls}-input`"
        :type="type"
        :disabled="disabled"
        :value="value"
        :checked="isChecked"
        @change="onChange"
        @click="onClick"
      />
      <span :class="`${prefixCls}-inner`"></span>
    </span>
</template>
<script>
  export default {
    name: 'VCheckbox',
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      warpLabel: { // 是否显示 label ,默认显示
        type: Boolean,
        default: true
      },
      type: { // 选框类型,默认 checkbox
        type: String,
        default: 'checkbox'
      },
      disabled: Boolean,
      value: { // 选框值
        default: null
      },
      checked: { // 是否选中
        type: Boolean,
        default: false
      },
      modelValue: { // model值
        default: undefined
      },
      prefixCls: {
        type: String,
        default: 'vm-checkbox'
      }
    },
    watch: {
      checked(val) {
        if (val !== this.isChecked) {
          this.toggle();
        }
      }
    },
    computed: {
      // 元素类集合
      warpCls() {
        return {
          [`${this.prefixCls}`]: true,
          [`${this.prefixCls}-checked`]: this.isChecked,
          [`${this.prefixCls}-disabled`]: this.disabled
        };
      },
      // 是否已选中
      isChecked() {
        // 无默认选中项
        if (this.modelValue === undefined) {
          return this.checked;
        }
        // 多选框
        if (Array.isArray(this.modelValue)) {
          return this.modelValue.indexOf(this.value) > -1;
        }
        // 单选框
        if (this.isRadio && this.value) {
          return this.modelValue === this.value;
        }
        return !!this.modelValue;
      },
      // 是否是单选框
      isRadio() {
        return this.type === 'radio';
      }
    },
    methods: {
      onChange(event) {
        this.toggle();
        this.$emit('change', event);
      },
      onClick(event) {
        if (!this.disabled) {
          setTimeout(function(_this, _event) {
            _this.$emit('click', _event);
          }, 0, this, event);
        }
      },
      toggle() {
        let value;
        if (this.isRadio) {
          value = this.value || true;
        } else if (Array.isArray(this.modelValue)) {
          value = this.modelValue.slice(0);
          if (this.isChecked) {
            value.splice(value.indexOf(this.value), 1);
          } else {
            value.push(this.value);
          }
        } else {
          value = !this.isChecked;
        }
        this.$emit('input', value);
        return value;
      }
    },
    mounted() {
      if (this.checked && !this.isChecked) {
        this.toggle();
      }
    }
  };
</script>
