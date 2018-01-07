<template>
  <div :class="cls">
    <div :class="`${prefixCls}-cover`" ref="cover"></div>
    <div 
      :class="`${prefixCls}-actions ${prefixCls}-actions-left`"
      ref="leftBtns"
    >
      <div v-for="(btn, i) in left" 
        :key="i" 
        :class="`${prefixCls}-btn`"
        :style="btn.style"
        role="button"
        @click="(e) => onBtnClick(e, btn)"
      >
        <div :class="`${prefixCls}-btn-text`">{{ btn.text || 'Click' }}</div>
      </div>
    </div>
    <div 
      :class="`${prefixCls}-actions ${prefixCls}-actions-right`"
      ref="rightBtns"
    >
      <div v-for="(btn, i) in right" 
        :key="i" 
        :class="`${prefixCls}-btn`"
        :style="btn.style"
        role="button"
        @click="(e) => onBtnClick(e, btn)"
      >
        <div :class="`${prefixCls}-btn-text`">{{ btn.text || 'Click' }}</div>
      </div>
    </div>
    <v-touch
      @panstart="onPanStart"
      @panmove="onPanMove"
      @panend="onPanEnd"
      :pan-options="{ direction: 'horizontal' }"
      @swipeleft="doOpenRight"
      @swiperight="doOpenLeft"
      :swipe-options="{ direction: 'horizontal' }"
    >
      <div :class="`${prefixCls}-content`" ref="content"><slot></slot></div>
    </v-touch>
  </div>
</template>


<script>
import VTouch from '../touch'

// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// http://caniuse.com/#search=match
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    } else {
      el = el.parentElement;
    }
  }
  return null;
}

export default {
  name: 'VSwipeAction',
  data () {
    return {
      openedLeft: false,
      openedRight: false,
      content: null,
      cover: null,
      l: null,
      r: null,
      btnsLeftWidth: 0,
      btnsRightWidth: 0,
      swiping: false,
      needShowLeft: false,
      needShowRight: false,
      directs: ['left', 'right']
    }
  },
  props: {
    left: Array,
    right: Array,
    autoclose: {
      type: Boolean,
      default: false
    },
    onopen: Function,
    onclose: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    prefixCls: {
      type: String,
      default: 'vm-swipeout'
    }
  },
  computed: {
    cls () {
      return this.swiping ? `${this.prefixCls} ${this.prefixCls}-swiping` : `${this.prefixCls}`
    }
  },
  methods: {
    onCloseSwipe (ev) {
      if (!(this.openedLeft || this.openedRight)) {
        return;
      }
      const pNode = closest(ev.target, `.${this.prefixCls}-actions`);
      if (!pNode) {
        ev.preventDefault();
        this.close();
      }
    },
    onPanStart (e) {
      const { direction, moveStatus } = e;
      const { x: deltaX } = moveStatus;
      // http://hammerjs.github.io/api/#directions
      const isLeft = direction === 2;
      const isRight = direction === 4;

      if (!isLeft && !isRight) {
        return;
      }
      this.needShowRight = isLeft && this.right && this.right.length > 0;
      this.needShowLeft = isRight && this.left && this.left.length > 0;

      if (this.l) {
        this.l.style.visibility = this.needShowRight ? 'hidden' : 'visible';
      }
      if (this.r) {
        this.r.style.visibility = this.needShowLeft ? 'hidden' : 'visible';
      }
      if (this.needShowLeft || this.needShowRight) {
        this.swiping = true;
        this._setStyle(deltaX);
      }
    },
    onPanMove (e) {
      const { moveStatus } = e;
      const { x: deltaX } = moveStatus;
      if (!this.swiping) {
        return;
      }
      this._setStyle(deltaX);
    },
    onPanEnd (e) {
      if (!this.swiping) {
        return;
      }
      
      const { moveStatus } = e;
      const { x: deltaX } = moveStatus;

      const needOpenRight = this.needShowRight && Math.abs(deltaX) > this.btnsRightWidth / 2;
      const needOpenLeft = this.needShowLeft && Math.abs(deltaX) > this.btnsLeftWidth / 2;

      if (needOpenRight) {
        this.doOpenRight();
      } else if (needOpenLeft) {
        this.doOpenLeft();
      } else {
        this.close();
      }
      this.swiping = false;
      this.needShowLeft = false;
      this.needShowRight = false;
    },
    doOpenLeft () {
      this.open(this.btnsLeftWidth, true, false);
    },
    doOpenRight () {
      this.open(-this.btnsRightWidth, true, false);
    },
    // left & right button click
    onBtnClick (ev, btn) {
      const onPress = btn.onPress;
      if (onPress) {
        onPress(ev);
      }
      if (this.autoclose) {
        this.close();
      }
    },
    _getContentEasing (value, limit) {
      // limit content style left when value > actions width
      const delta = Math.abs(value) - Math.abs(limit);
      const isOverflow = delta > 0;
      const factor = limit > 0 ? 1 : -1;
      if (isOverflow) {
        value = limit + Math.pow(delta, 0.85) * factor;
        return Math.abs(value) > Math.abs(limit) ? limit : value;
      }
      return value;
    },
    // set content & actions style
    _setStyle (value) {
      const limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth;
      const contentLeft = this._getContentEasing(value, limit);
      this.content.style.left = `${contentLeft}px`;
      if (this.cover) {
        this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
        this.cover.style.left = `${contentLeft}px`;
      }
    },
    open (value, openedLeft, openedRight) {
      if (!this.openedLeft && !this.openedRight && this.onopen) {
        this.onopen();
      }

      this.openedLeft = openedLeft;
      this.openedRight = openedRight;
      this._setStyle(value);
    },
    close () {
      if ((this.openedLeft || this.openedRight) && this.onclose) {
        this.onclose();
      }
      this._setStyle(0);
      this.openedLeft = false;
      this.openedRight = false;
    }
  },
  mounted () {
    this.l = this.$refs.leftBtns;
    this.r = this.$refs.rightBtns;
    this.content = this.$refs.content;
    this.cover = this.$refs.cover;

    this.btnsLeftWidth = this.l ? this.l.offsetWidth : 0;
    this.btnsRightWidth = this.r ? this.r.offsetWidth : 0;
    document.body.addEventListener('touchstart', this.onCloseSwipe, true);
  },
  destroyed () {
    document.body.removeEventListener('touchstart', this.onCloseSwipe, true);
  },
  components: {
    VTouch
  }
}
</script>
