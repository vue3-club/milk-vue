<template>
  <div :class="prefixCls" ref="accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VAccordion',
  data() {
    return {
      prefixCls: 'vm-accordion',
      items: []
    }
  },
  methods: {
    getProps() {
      let attr = this.$attrs.accordion ? this.$attrs.accordion : 'false';
      return attr;
    },
    getItems() {
      return this.$children.filter(item => item.$options.name === 'VAccordionItem');
    },
    initItems() {
      let items = this.getItems();
      let activeItems = items.filter(item => item.active === 'true');
      if(this.getProps() === 'true' && activeItems.length > 1) {
        activeItems.forEach((e, index) => {
          if(index != 0) {
            e.active = 'false';
          }
        });
      }
    },
    updateActiveItem(currentTarget) {
      this.$children.forEach((child, index) => {
        if(child._uid != currentTarget._uid) {
          child.show = false;
        }
      });
    }
  }
}
</script>

