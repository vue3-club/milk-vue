<template>
  <div :class="`${prefixCls}-item`" ref="item">
    <div :class="`${prefixCls}-item-title`" @click="toggleAccordion">
      <span>{{label}}</span>
      <i :class="arrowCls"></i>
    </div>
    <div :class="contentCls" ref="content" :style="`height: ${height}px;`">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VAccordionItem',
  props: {
    label: String,
    active: String
  },
  data() {
    return{
      prefixCls: 'vm-accordion',
      currentName: this.name,
      show: false,
      height: 0,
      accordion: false
    }
  },
  computed: {
    arrowCls() {
      return {
        [this.prefixCls + '-arrow']: true,
        [this.prefixCls + '-arrow-vertical']: this.show === false,
        [this.prefixCls + '-arrow-vertical-up']: this.show === true
      };
    },
    contentCls() {
      return {
        [this.prefixCls + '-item-content']: true,
        [this.prefixCls + '-item-inactive']: this.show === false
      }
    },
  },
  watch: {
    show() {
      this.height = this.show ? this.$refs.content.scrollHeight : 0;
    }
  },
  methods: {
    toggleAccordion() {
      this.$parent.$emit('click', this);
      if(this.accordion){
        this.show = !this.show;
        this.$parent.updateActiveItem(this);
      }else {
        this.show = !this.show;
        this.height = this.show ? this.$refs.content.scrollHeight : 0;
      }
    }
  },
  mounted() {
    this.$parent.initItems();
    this.accordion = this.$parent.getProps() === 'true' ? true : false;
    if(this.active === 'true') {
      this.toggleAccordion();
    }
  }
}
</script>

