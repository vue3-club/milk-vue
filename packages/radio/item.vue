<script>
  import VCheckboxItem from '../checkbox/item.vue';

  export default {
    name: 'VRadioItem',
    mixins: [VCheckboxItem],
    props: {
      type: { // 选框类型,默认 checkbox
        type: String,
        default: 'radio'
      },
      prefixCls: {
        type: String,
        default: 'vm-radio'
      }
    }
  };
</script>
