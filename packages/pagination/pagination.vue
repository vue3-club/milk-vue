<template>
  <v-row align="center" :class="prefixCls" v-bind="$attrs">
    <v-col v-if="hasButton" :class="`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`">
      <v-button inline :disabled="currentPage<=1" @click="onClick(currentPage-1)">{{prevText}}</v-button>
    </v-col>
    <v-col v-else-if="$slots.prev" :class="`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-prev`">
      <slot name="prev"></slot>
    </v-col>
    <v-col v-if="hasNumber" :class="`${prefixCls}-wrap`">
      <span class="active">{{currentPage}}</span>/<span>{{total}}</span>
    </v-col>
    <v-col v-else-if="hasPointer" :class="`${prefixCls}-wrap`">
      <div
        v-for="index in total"
        :key="`dot-${index}`"
        :class="{
          [`${prefixCls}-wrap-dot`]: true,
          [`${prefixCls}-wrap-dot-active`]: (index) === currentPage
        }"
      >
        <span/>
      </div>
    </v-col>
    <v-col v-else :class="`${prefixCls}-wrap`">
      <slot name="next"></slot>
    </v-col>
    <v-col v-if="hasButton" :class="`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`">
      <v-button inline :disabled="currentPage>=total" @click="onClick(currentPage+1)">{{nextText}}</v-button>
    </v-col>
    <v-col v-else-if="$slots.next" :class="`${prefixCls}-wrap-btn ${prefixCls}-wrap-btn-next`">
      <slot name="next"></slot>
    </v-col>
  </v-row>
</template>
<script>
  import VButton from '../button';
  import VRow from '../row';
  import VCol from '../col';

  const prefixCls = 'vm-pagination';
  const MODE_NORMAL = 'normal';
  const MODE_BUTTON = 'button';
  const MODE_NUMBER = 'number';
  const MODE_POINTER = 'pointer';
  const modeList = [MODE_NORMAL, MODE_BUTTON, MODE_NUMBER, MODE_POINTER];

  export default {
    name: 'VPagination',
    components: { VButton, VRow, VCol },
    model: {
      prop: 'current',
      event: 'change'
    },
    props: {
      mode: {
        type: String,
        default: 'normal',
        validator: function(value) {
          return value && modeList.indexOf(value) !== -1;
        }
      },
      current: {
        type: Number,
        default: 1
      },
      prevText: {
        type: String,
        default: '上页'
      },
      nextText: {
        type: String,
        default: '下页'
      },
      total: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        prefixCls: prefixCls,
        currentPage: this.current
      };
    },
    watch: {
      current(value) {
        this.currentPage = value;
      }
    },
    computed: {
      hasButton() {
        console.log(this.mode);
        return [MODE_NORMAL, MODE_BUTTON].indexOf(this.mode) > -1;
      },
      hasNumber() {
        return [MODE_NORMAL, MODE_NUMBER].indexOf(this.mode) > -1;
      },
      hasPointer() {
        return [MODE_POINTER].indexOf(this.mode) > -1;
      }
    },
    methods: {
      onClick(page) {
        this.currentPage = page;
        this.$emit('change', page);
      }
    }
  };
</script>
