<template>
	<div 
		class="vm-tab-pane" 
		v-show="show"
		role="tabpanel"
		:style="paneStyle"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'VTabPane',
  props: {
    paneStyle: String,
    name: String,
    label: String
  },
  data() {
    return {
      show: true,
      currentName: this.name
    };
  },
  watch: {
    name(val) {
      this.currentName = val;
      this.$parent.updateNav();
    }
  },
  mounted() {
    this.$parent.updateNav();
  },
  destroyed() {
    this.$parent.updateNav();
  }
};

</script>

<style lang="less" scoped>
	.vm-tab-pane{
		flex-shrink: 0;
    width: 100%;
    transition: opacity .3s;
    opacity: 1;
	}    
</style>
