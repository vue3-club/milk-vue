<template>
  <div :class="[wrapClass]">
    <div :class="inputClass">
      <!-- placeholder元素 -->
      <div :class="placeholderClass" :style="{ width: placeholderWidth }">
        <span :class="placeholderWrapClass" ref="ph">
          <v-icon type="search" size="xs" :class="searchIconClass"></v-icon>
          <span :style="visible" v-text="defaultValue || placeholder"></span>
        </span>
      </div>
      <!-- 输入框 -->
      <input
        type="search"
        ref="input"
        :class="valueClass"
        :autofocus="autofocus"
        :disabled="disabled"
        :maxlength="maxLength"
        v-model="inputValue"
        @focus="handleFocus"
        @keyup.enter="handleSubmit"
        @blur="handleBlur">
      <!-- clear按钮 -->
      <a :class="clearClass" @click="handleClear">
        <v-icon type="cross-circle-o" size="xs" color="#ccc"></v-icon>
      </a>
    </div>
    <!-- 取消按钮 -->
    <div
      ref="cn"
      :class="cancelClass"
      :style="{ marginRight: marginRightWidth }"
      @click="handleCancel"
      v-text="cancelText">
    </div>
  </div>
</template>

<script>
  import Icon from '../icon';

  const prefixCls = 'vm-search-bar';

  export default {
    name: 'VSearchBar',
    components: { Icon },
    watch: {
      inputValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      },
      value(val) {
        this.inputValue = val;
      }
    },
    props: {
      value: {
        default: ''
      },
      defaultValue: String,
      placeholder: String,
      maxLength: Number,
      disabled: Boolean,
      autofocus: Boolean,
      cancelText: {
        default: '取消'
      },
      showCancelButton: Boolean
    },
    data() {
      return {
        isFocus: false,
        placeholderWidth: '',
        marginRightWidth: '',
        visibleCancel: false,
        inputValue: this.value
      };
    },
    mounted() {
      this.isActive();
    },
    computed: {
      wrapClass() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-start`]: this.isFocus
          }
        ];
      },
      inputClass() {
        return `${prefixCls}-input`;
      },
      placeholderClass() {
        return `${this.inputClass}-placeholder`;
      },
      placeholderWrapClass() {
        return `${this.placeholderClass}-wrap`;
      },
      cancelClass() {
        return [
          `${prefixCls}-cancel`,
          {
            [`${prefixCls}-cancel-show`]: this.visibleCancel
          }
        ];
      },
      searchIconClass() {
        return `${this.inputClass}-icon`;
      },
      valueClass() {
        return `${this.inputClass}-value`;
      },
      visible() {
        return {
          visibility: this.value.length > 0 ? 'hidden' : 'visible'
        };
      },
      clearClass() {
        return [
          `${this.inputClass}-clear`,
          {
            [`${this.inputClass}-clear-show`]: this.value.length > 0
          }
        ];
      }
    },
    methods: {
      // 聚焦事件
      handleFocus() {
        this.isActive(true);
        this.$emit('focus');
      },
      // 失焦事件
      handleBlur() {
        this.isFocus = true;
        this.visibleCancel = true;
        this.$emit('blur');
      },
      // 触发 clear 事件
      handleClear() {
        this.$emit('clear', this.inputValue);
        this.$refs.input.focus();
        this.resetValue();
      },
      // 触发 cancel 事件
      handleCancel() {
        this.$emit('cancel', this.inputValue);
        this.resetValue();
        this.isActive();
      },
      // 回传 input 的值，触发 change 事件
      handleInput(event) {
        this.$emit('input', event.target.value);
        this.$emit('change', this.inputValue);
      },
      // 触发 enter 事件
      handleSubmit() {
        this.$emit('submit', this.inputValue || this.defaultValue);
      },
      // 重置 input 的值
      resetValue() {
        this.inputValue = '';
        this.$emit('input', '');
      },
      // 判断组件是否 启动变化状态
      isActive(bol) {
        const flag = this.inputValue.length > 0 || this.showCancelButton;
        if (flag || bol) {
          this.isFocus = true;
          this.visibleCancel = true;
          // 获取取消按钮元素宽度设置偏移
          this.placeholderWidth = `${this.$refs.ph.offsetWidth + 0.5}px`;
          this.marginRightWidth = 0;
        } else {
          this.placeholderWidth = '100%';
          this.marginRightWidth = `-${this.$refs.cn.offsetWidth}px`;
        }
      }
    }
  };
</script>
