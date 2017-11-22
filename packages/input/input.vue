<template>
  <div :class="inputCls" @click="$emit('click')">
    <label
      :class="labelCls"
      :for="$attrs.name"
      @click="toDoFocus">
      <slot></slot>
    </label>
    <div :class="`${prefixCls}-control`">
      <input
        ref="input"
        v-bind="$attrs"
        :type="inputType"
        :disabled="disabled"
        v-model="inputValue"
        @input="handleInput"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      >
    </div>
    <div
      v-if="hasExtra"
      :class="`${prefixCls}-extra`"
    >
      <v-icon v-if="error" type="exclamation-circle"></v-icon>
      <v-icon v-else-if="clear" type="cross-circle-o" style="color:#c9c9c9" @click="handleClear"></v-icon>
      <span v-else>{{extra}}</span>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'vm-input'; //输入框类名前置
  const listPrefixCls = 'vm-list'; //输入框排版list类名前置

  export default {
    name: 'VInput',
    props: {
      // 输入框类型 默认 'text'
      type: {
        type: String,
        default: 'text'
      },
      // 点击标签输入框是否聚焦
      clickToFocus: {
        type: Boolean,
        default: false
      },
      // 父级作用域的'value'值
      value: String,
      // 是否显示错误提示信息
      error: {
        type: Boolean,
        default: false
      },
      // 标签文案长度 1-10
      labelNumber: {
        type: [String, Number],
        default: 5
      },
      // 标签文案对齐方式
      labelAlign: String,
      // 右侧注释文案
      extra: String,
      // 是否显示清除按钮
      clear: Boolean,
      // 受否禁用
      disabled: Boolean
    },
    data() {
      return {
        prefixCls: prefixCls, // 输入框类名前置【模板用】
        inputValue: this.value // 绑定输入框值
      }
    },
    watch: {
      // 监听父级作用域 value 值的变化
      value: function (val) {
        this.inputValue = val
      }
    },
    computed: {
      // 输入框类集合
      inputCls() {
        return {
          [`${listPrefixCls}-item`]: true,
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-error`]: this.error,
        }
      },
      // 输入框标题类集合
      labelCls() {
        return {
          [`${prefixCls}-label`]: true,
          [`${prefixCls}-label-${this.labelNumber}`]: true,
          [`${prefixCls}-label-${this.labelAlign}`]: this.labelAlign,
          [`${prefixCls}-label-disabled`]: this.disabled
        }
      },
      // 是否有注释信息
      hasExtra() {
        return this.$slots.extra ||
          this.extra ||
          this.error ||
          (this.inputValue && this.clear);
      },
      // 获取输入框类型
      inputType() {
        let inputType = 'text';
        let type = this.type;
        if (type === 'bankCard' || type === 'phone') {
          inputType = 'tel';
        } else if (type === 'password') {
          inputType = 'password';
        } else if (type === 'digit') {
          inputType = 'number';
        } else if (type !== 'text' && type !== 'number') {
          inputType = type;
        }
        return inputType;
      }
    },
    methods: {
      // 输入内容格式化
      handleInput(event) {
        let value = event.target.value;
        const type = this.type;

        switch (type) {
          case 'text':// 默认
            break;
          case 'bankCard': // 银行卡
            value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
            break;
          case 'phone': // 手机号
            value = value.replace(/\D/g, '').substring(0, 11);
            const valueLen = value.length;
            if (valueLen > 3 && valueLen < 8) {
              value = `${value.substr(0, 3)} ${value.substr(3)}`;
            } else if (valueLen >= 8) {
              value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
            }
            break;
          case 'number': // 数字
            value = value.replace(/\D/g, '');
            break;
          case 'password': // 密码
            break;
          default:
            break;
        }
        this.inputValue = value;
        if (this.$listeners.input) {
          this.$emit('input', value)
        }
      },
      // 点击标签聚焦
      toDoFocus() {
        this.clickToFocus && this.$refs.input.focus()
      },
      // 清除输入框内容
      handleClear() {
        this.inputValue = "";
      }
    }
  }
</script>
