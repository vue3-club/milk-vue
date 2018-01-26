<template>
<div :class="`${prefixCls}-container`">
  <transition name="vm-fade">
    <div :class="`${prefixCls}-mask`" v-show="show"></div>
  </transition>
  <transition name="vm-float">
    <div :class="`${prefixCls}-wrap`" v-show="show" @click.self="hideActionsheet('modal')">
      <div role="document" :class="`${prefixCls} ${prefixCls}-normal`">
        <div :class="`${prefixCls}-content`">
          <button aria-label="Close" :class="`${prefixCls}-close`">
            <span :class="`${prefixCls}-close-x`"></span>
          </button>
          <div :class="`${prefixCls}-body`">
            <div>
              <div :class="`${prefixCls}-message`">{{message}}</div>
              <div :class="`${prefixCls}-button-list`" role="group">
                <div :class="`${prefixCls}-button-list-item`" role="button" v-for="(option, index) in options" @click="hideActionsheet('option')">{{option}}</div>
                <div :class="`${prefixCls}-button-list-item ${prefixCls}-cancel-button`" role="button" @click="hideActionsheet('cancle')">{{cancelText}}<span :class="`${prefixCls}-cancel-button-mask`"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>
<script>
const prefixCls = 'vm-actionsheet';
export default {
  name: 'VActionsheet',
  data() {
    return {
      prefixCls: prefixCls
    }
  },
  props: {
    show: Boolean,
    message: String,
    options: Array,
    cancelText: String,
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    hideActionsheet(type) {
      if(type === 'modal') { // 点击modal层关闭
        if(this.maskClosable) {
          this.$emit('update:show', false)
        }
      }else if(type === 'cancle'){ // 点击cancel关闭
        this.$emit('update:show', false)
      }else { // 点击option关闭
        this.$emit('update:show', false)
      }
    }
  }
};
</script>
