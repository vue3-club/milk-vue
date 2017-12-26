<template>
  <v-col
    v-bind="$attrs"
    role="menuPanel"
    class="vm-menu-select-container-submenu"
  >
    <v-list
      :class="prefixCls">
      <compontent
        :is="itemType"
        v-for="(checkbox,index) in menuData"
        align="right"
        v-model="modelMenu"
        :key="`checkbox${index}`"
        :value="checkbox.value"
        :class="{[`${prefixCls}-item-selected`]:isSelected(checkbox.value)}"
        :disabled="checkbox.disabled"
        @change="onChange(checkbox)"
      >
        {{checkbox.label}}
      </compontent>
    </v-list>
  </v-col>
</template>
<script>
  import VList from '../list';
  import VListItem from '../listItem';
  import VCheckBox from '../checkbox';

  const prefixCls = 'vm-sub-menu';

  export default {
    components: {
      VList,
      VListItem,
      VCheckBox
    },
    name: 'VSubMenu',
    props: {
      menuData: Array,
      selMenu: [Array, String],
      multiSelect: Boolean
    },
    data() {
      return {
        prefixCls: prefixCls,
        modelMenu: [],
        subValue: []
      };
    },
    watch: {
      // 监听checkbox值变化
      selMenu() {
        this.modelMenu = this.selMenu;
      }
    },
    computed: {
      // 动态组件类型
      itemType() {
        return this.multiSelect ? 'v-checkbox-item' : 'v-radio-item';
      }
    },
    methods: {
      // 菜单值变化事件
      onChange() {
        this.$emit('change', this.modelMenu);
      },
      isSelected(value) {
        if (this.multiSelect) return this.modelMenu.indexOf(value) > -1;
        return this.modelMenu === value;
      }
    }
  };
</script>
