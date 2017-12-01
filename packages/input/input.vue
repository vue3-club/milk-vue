<template>
  <div :class="warpCls" @click="$emit('click')">
    <div :class="`${listPrefixCls}-line`">
      <label
        v-if="$slots.default"
        :class="labelCls"
        :for="$attrs.name"
        @click="toDoFocus">
        <slot></slot>
      </label>
      <div :class="`${prefixCls}-control`">
      <textarea
        v-if="this.type==='textarea'"
        ref="textarea"
        v-bind="$attrs"
        :disabled="disabled"
        v-model="inputValue"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      </textarea>
        <input
          v-else
          ref="input"
          v-bind="$attrs"
          :type="inputType"
          :disabled="disabled"
          v-model="inputValue"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        >
      </div>
      <div
        v-if="clear && inputValue && characterLength"
        :class="`${prefixCls}-clear`"
        @click="handleClear"
      >
      </div>
      <div
        v-if="error"
        :class="`${prefixCls}-error-extra`"
        @click="$emit('error-click')"
      >
      </div>
      <div
        v-if="$slots.extra"
        :class="`${prefixCls}-extra`"
      >
        <slot name="extra"></slot>
      </div>
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
      // 是否显示清除按钮
      clear: Boolean,
      // 受否禁用
      disabled: Boolean,
      // 错误标识点击事件
      errorClick: Function
    },
    data() {
      return {
        prefixCls: prefixCls, // 输入框类名前置【模板用】
        listPrefixCls:listPrefixCls,// 输入框列表类名前置【模板用】
        focus:false,// 输入框是否聚焦
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
      warpCls() {
        return {
          [`${listPrefixCls}-item`]: true,
          [`${prefixCls}-item`]: true,
          [`${listPrefixCls}-item-middle`]:true,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-error`]: this.error,
          [`${prefixCls}-focus`]: this.focus
        }
      },
      // 输入框标题类集合
      labelCls() {
        return {
          [`${prefixCls}-label`]: true,
          [`${prefixCls}-label-${this.labelNumber}`]: true,
          [`${prefixCls}-label-${this.labelAlign}`]: this.labelAlign
        }
      },
      characterLength(){
        const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
        return this.inputValue.replace(regexAstralSymbols, '_').length;
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
      // 格式化内容
      formatValue(value){
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
        return value;
      },
      // 处理input事件
      handleInput(event) {
        let value = event.target? event.target.value : event;
        value=this.formatValue(value);

        this.inputValue = value;
        this.$emit('change', value);
        if (this.$listeners.input) {
          this.$emit('input', value);
        }
      },
      // 处理change事件
      handleChange(event) {
        let value = event.target? event.target.value : event;
        value=this.formatValue(value);

        this.inputValue = value;
        if (this.$listeners.change) {
          this.$emit('change', value);
        }
      },
      // 点击标签聚焦
      toDoFocus() {
        this.clickToFocus && this.$refs.input.focus()
      },
      // 清除输入框内容
      handleClear() {
        this.handleChange("");
        this.inputValue = "";
      },
      // 处理聚焦事件
      handleFocus(){
        this.focus = true;
        this.$emit("focus");
      },
      // 处理失焦事件
      handleBlur(){
        this.focus = false;
        this.$emit("blur");
      }
    }
  }
</script>
