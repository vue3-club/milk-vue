<template>
  <v-list-item
    :brief="brief"
    :disabled="$attrs.disabled"
    @click="onClick"
  >
    <template slot="thumb">
      <v-checkbox
        v-if="align=='left'"
        ref="checkbox"
        :type="type"
        :prefixCls="prefixCls"
        :warp-label="false"
        v-bind="$attrs"
        v-model="modelValue"
        @change="onChange"
      ></v-checkbox>
      <slot v-else name="thumb"></slot>
    </template>
    <slot></slot>
    <template slot="extra">
      <slot v-if="align=='left'" name="extra"></slot>
      <v-checkbox
        v-else
        ref="checkbox"
        :type="type"
        :prefixCls="prefixCls"
        :warp-label="false"
        v-bind="$attrs"
        v-model="modelValue"
        @change="onChange"
      ></v-checkbox>
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
      brief: String,
      align: {
        type: String,
        default: 'left'
      }
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
        const newValue = this.$refs.checkbox.toggle();
        this.$emit('input', newValue);
        this.$emit('change', newValue);
      }
    }
  };
</script>
