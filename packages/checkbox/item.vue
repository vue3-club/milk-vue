<template>
  <v-list-item
    :brief="brief"
    :disabled="$attrs.disabled"
    @click="onClick"
  >
    <v-checkbox
      slot="thumb"
      ref="checkbox"
      :type="type"
      :prefixCls="prefixCls"
      v-bind="$attrs"
      v-model="modelValue"
      @change="onChange"
    ></v-checkbox>
    <slot></slot>
    <template slot="extra">
      <slot name="extra"></slot>
    </template>
  </v-list-item>
</template>
<script>
  import VCheckbox from './checkbox.vue';

  export default {
    name: 'VCheckboxItem',
    components: { VCheckbox },
    model: {
      prop: 'itemValue',
      event: 'input'
    },
    props: {
      itemValue: { // model值
        default: undefined
      },
      type: { // 选框类型,默认 checkbox
        type: String,
        default: 'checkbox'
      },
      prefixCls: {
        type: String,
        default: 'vm-checkbox'
      },
      brief: String
    },
    data() {
      return {
        modelValue: this.itemValue
      };
    },
    watch: {
      // 绑定 modelValue & itemValue
      itemValue(val) {
        this.modelValue = val;
      }
    },
    methods: {
      onClick() {
        this.onChange();
        this.$emit('click');
      },
      onChange() {
        this.$emit('input', this.$refs.checkbox.toggle());
        this.$emit('change');
      }
    }
  };
</script>
