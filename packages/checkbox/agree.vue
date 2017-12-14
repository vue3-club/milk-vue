<template>
  <div @click="onClick" :class="`${prefixCls}-agree`">
    <v-checkbox
      :class="`${prefixCls}-agree-label`"
      ref="checkbox"
      type="checkbox"
      v-bind="$attrs"
      v-model="modelValue"></v-checkbox>
    <slot></slot>
  </div>
</template>
<script>
  import VCheckbox from './checkbox.vue';

  const prefixCls = 'vm-checkbox';

  export default {
    name: 'VAgreement',
    components: { VCheckbox },
    model: {
      prop: 'agreeValue',
      event: 'input'
    },
    props: {
      agreeValue: { // model值
        default: undefined
      },
      brief: String
    },
    data() {
      return {
        prefixCls: prefixCls,
        modelValue: this.agreeValue
      };
    },
    watch: {
      // 绑定 modelValue & agreeValue
      agreeValue(val) {
        this.modelValue = val;
      }
    },
    methods: {
      onClick() {
        this.$emit('input', this.$refs.checkbox.onChange());
        this.$emit('click');
      }
    }
  };
</script>
