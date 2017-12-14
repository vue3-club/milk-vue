<script>
  import VCheckbox from '../checkbox';

  export default {
    name: 'VRadio',
    mixins: [VCheckbox],
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
