<template>
  <div :class="wrapCls" @click="$emit('click')">
    <label
      v-if="$slots.default"
      :class="labelCls"
      :for="$attrs.name"
      @click="toDoFocus">
      <slot></slot>
    </label>
    <div :class="`${prefixCls}-control`">
      <textarea
        ref="textarea"
        v-bind="bindAttr"
        :disabled="disabled"
        :rows="textRows"
        v-model="inputValue"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange"
      >
      </textarea>
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
    <span
      v-if="count && textRows>1"
      :class="`${prefixCls}-count`"
    >
      <span>{{value ? characterLength : 0}}</span>{{`/${count}`}}
    </span>
  </div>
</template>

<script>
  const prefixCls = 'vm-textarea'; //输入框类名前置
  const listPrefixCls = 'vm-list'; //输入框排版list类名前置

  export default {
    name: 'VTextarea',
    props: {
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
      // 自动高度
      autoHeight: Boolean,
      // 计数
      count: Number,
      // 错误标识点击事件
      errorClick: Function
    },
    data() {
      return {
        prefixCls: prefixCls, // 输入框类名前置【模板用】
        listPrefixCls: listPrefixCls,// 输入框列表类名前置【模板用】
        focus: false,// 输入框是否聚焦
        inputValue: this.value // 绑定输入框值
      }
    },
    watch: {
      // 监听父级作用域 value 值的变化
      value: function (val) {
        this.inputValue = val
      }
    },
    updated: function () {
      this.$nextTick(function () {
        if (this.autoHeight && this.focus) {
          const textareaDom = this.$refs.textarea;
          textareaDom.style.height = '';
          textareaDom.style.height = `${textareaDom.scrollHeight}px`;
        }
      })
    },
    computed: {
      // 输入框类集合
      wrapCls() {
        return {
          [`${listPrefixCls}-item`]: true,
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-single-line`]: this.textRows === 1 && !this.autoHeight,
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
      characterLength() {
        const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
        return this.inputValue.replace(regexAstralSymbols, '_').length;
      },
      // 文本行数
      textRows() {
        return this.$attrs.rows || 1;
      },
      // 绑定属性
      bindAttr() {
        let attrs = this.$attrs;
        if (this.count) {
          attrs.maxLength = this.count;
        }
        return attrs;
      }
    },
    methods: {
      // 格式化内容
      formatValue(value) {
        return value;
      },
      // 处理input事件
      handleInput(event) {
        let value = event.target ? event.target.value : event;
        value = this.formatValue(value);

        this.inputValue = value;
        this.$emit('change', value);
        if (this.$listeners.input) {
          this.$emit('input', value);
        }
      },
      // 处理change事件
      handleChange(event) {
        let value = event.target ? event.target.value : event;
        value = this.formatValue(value);

        this.inputValue = value;
        if (this.$listeners.change) {
          this.$emit('change', value);
        }
      },
      // 点击标签聚焦
      toDoFocus() {
        this.clickToFocus && this.$refs.textarea.focus();
      },
      // 清除输入框内容
      handleClear() {
        this.handleChange("");
        this.inputValue = "";
      },
      // 处理聚焦事件
      handleFocus() {
        this.focus = true;
        this.$emit("focus");
      },
      // 处理失焦事件
      handleBlur() {
        this.focus = false;
        this.$emit("blur");
      }
    }
  }
</script>
