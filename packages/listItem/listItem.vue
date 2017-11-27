<template>
  <div
    :class="listCls"
    v-bind="$attrs"
  >
    <div v-if="$slots.thumb" :class="`${prefixCls}-thumb`">
      <slot name="thumb"></slot>
    </div>
    <div :class="lineCls">
      <div v-if="$slots.default" :class="`${prefixCls}-content`">
        <slot name="default"></slot>
        <div v-if="this.brief" :class="`${prefixCls}-brief`">
          {{this.brief}}
        </div>
      </div>
      <div v-if="$slots.extra" :class="`${prefixCls}-extra`">
        <slot name="extra"></slot>
      </div>
      <div v-if="this.arrow" :class="arrowCls" :aria-hidden="true"></div>
    </div>
  </div>
</template>

<script>
  const prefixCls = 'vm-list';
  export default {
    name: 'VListItem',
    props: {
      arrow: String,
      error: Boolean, // 右侧是否显示错误样式
      align: {  // 子元素垂直对齐
        type: String,
        default: 'middle'
      },
      wrap: Boolean, // 是否换行，默认文字超出被隐藏
      multipleLine: Boolean, // 是否多行
      brief:String
    },
    data() {
      return {
        prefixCls: prefixCls,
        listCls: {
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-disabled`]: this.$attrs.disabled,
          [`${prefixCls}-item-error`]: this.error,
          [`${prefixCls}-item-top`]: this.align === 'top',
          [`${prefixCls}-item-middle`]: this.align === 'middle',
          [`${prefixCls}-item-bottom`]: this.align === 'bottom'
        },
        lineCls: {
          [`${prefixCls}-line`]: true,
          [`${prefixCls}-line-multiple`]: this.multipleLine,
          [`${prefixCls}-line-wrap`]: this.wrap,
        },
        arrowCls: {
          [`${prefixCls}-arrow`]: true,
          [`${prefixCls}-arrow-horizontal`]: this.arrow === 'horizontal',
          [`${prefixCls}-arrow-vertical`]: this.arrow === 'down' || this.arrow === 'up',
          [`${prefixCls}-arrow-vertical-up`]: this.arrow === 'up',
        }
      }
    }
  };
</script>
