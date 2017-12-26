<template>
  <div class="v-popover" :class="cssClass">
		<span
      ref="trigger"
      class="trigger"
      style="display: inline-block;"
      :aria-describedby="popoverId"
    >
			<slot/>
		</span>
    <div
      ref="popover"
      :id="popoverId"
      :class="[popoverBaseClass, popoverClass, cssClass]"
      :style="{
				display: isOpen ? '' : 'none'
			}"
      :aria-hidden="isOpen ? 'false' : 'true'"
    >
      <div :class="popoverWrapperClass">
        <div ref="arrow" :class="popoverArrowClass"></div>
        <div
          ref="inner"
          :class="popoverInnerClass"
          style="position: relative;"
        >
          <slot name="popover"/>
          <ResizeObserver v-if="handleResize" @notify="$_handleResize"/>
        </div>
      </div>
    </div>
    <div v-if="popShow" class="vm-popover-mask"/>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { VPopover, VClosePopover } from 'v-tooltip';

  Vue.directive('close-popover', VClosePopover);

  export default {
    name: 'VPopover',
    mixins: [VPopover],
    data() {
      return {
        popShow: false
      };
    },
    methods: {
      show({ event, skipDelay = false, force = false } = {}) {
        if (force || !this.disabled) {
          this.$_scheduleShow(event);
          this.$emit('show');
        }
        this.$emit('update:open', true);
        this.popShow = !this.disabled && true;
      },
      hide({ event, skipDelay = false } = {}) {
        this.$_scheduleHide(event);
        this.$emit('hide');
        this.$emit('update:open', false);
        this.popShow = !this.disabled && false;
      }
    }
  };
</script>
