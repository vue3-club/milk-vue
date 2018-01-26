<template>
	<div :class="tabsCls">
		<div ref="wrap" :class="`${prefixCls}-tab-bar-wrap`">
			<div :class="tabBarCls" :style="tabBarStyle">
				<div :class="`${barPrefixCls}-content`" ref="content">
					<div 
						v-for="(tab, index) in tabList"
						:key="index"
						ref="tabs"
						:class="tabCls"
						@click="onClick(index)"
						:style="tabStyle"
					>
						<span>{{tab.label}}</span>
					</div>
					<div 
						:class="`${barPrefixCls}-underline`"
						:style="underlineStyle"
					></div>
				</div>
			</div>
		</div>
		<div :class="contentCls" :style="contentStyle" v-if="$slots.default">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script>
const prefixCls = 'vm-tabs';
const barPrefixCls = 'vm-tabs-default-bar';

export default {
  name: 'VTabs',
  data() {
    return {
      prefixCls: prefixCls,
      barPrefixCls: barPrefixCls,
      curIndex: 0,
      index: 0,
      isMoving: false,
      lineStyle: {},
      tabList: [],
      activeKey: this.value
    };
  },
  props: {
    value: [String, Number],
    activeName: String,
    tabDirection: {
      type: String,
      default: 'horizontal'
    },
    tabBarPosition: {
      type: String,
      default: 'top'
    },
    tabBarStyle: {
      type: String,
      default: 'background-color: #fff;'
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    tabsCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.tabDirection}`]: true,
        [`${prefixCls}-${this.tabBarPosition}`]: true
      };
    },
    tabBarCls() {
      return {
        [`${barPrefixCls}`]: true,
        [`${barPrefixCls}-animated`]: this.animated,
        [`${barPrefixCls}-${this.tabBarPosition}`]: true
      };
    },
    tabCls() {
      return {
        [`${barPrefixCls}-tab`]: true,
        [`${barPrefixCls}-tab-active`]: this.index === this.curIndex
      };
    },
    contentCls() {
      return {
        [`${prefixCls}-content-wrap`]: true,
        [`${prefixCls}-content-wrap-animated`]: this.animated
      };
    },
    contentWrapCls() {
      return {
        [`${prefixCls}-pane-wrap`]: true,
        [`${prefixCls}-pane-active`]: this.index === this.curIndex
      };
    },
    tabStyle() {
      return {
        'width': `${100 / this.tabList.length}%`
      };
    },
    underlineStyle() {
      return {
        'width': `${100 / this.tabList.length}%`,
        'left': `${100 / this.tabList.length * this.curIndex}%`
      };
    },
    contentStyle() {
      const x = this.tabList.findIndex((tab) => {
        return tab.name === this.activeKey;
      });
      const p = x === 0 ? '0%' : `-${x}00%`;

      let style = {};
      if (x > -1) {
        style = {
          transform: `translateX(${p}) translateZ(0px)`
        };
      }
      return style;
    }
  },
  methods: {
    getTabs() {
      return this.$children.filter(item => item.$options.name === 'VTabPane');
    },
    onClick(index) {
      const tab = this.tabList[index];
      this.activeKey = tab.name;
      this.$emit('input', tab.name);
      this.$emit('click', tab.name);
      this.curIndex = index;
      this.index = index;
    },
    updateNav() {
      this.tabList = [];
      this.getTabs().forEach((pane, index) => {
        this.tabList.push({
          labelType: typeof pane.label,
          label: pane.label,
          name: pane.currentName || index
        });
        if (!pane.currentName) pane.currentName = index;
        if (index === 0) {
          if (!this.activeKey) this.activeKey = pane.currentName || index;
        }
      });
    }
  },
  watch: {
    activeKey() {
    }
  }
};
</script>
