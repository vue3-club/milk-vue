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
        :key="`checkbox${index}`"
        :value="checkbox.value"
        v-model="modelMenu"
        align="right"
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

  const prefixCls = 'sub-vm-menu';

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
    mounted() {
      this.$nextTick(function() {
        console.log(this.menuData);
      });
    },
    data() {
      return {
        prefixCls: prefixCls,
        modelMenu: [],
        subValue: []
      };
    },
    watch: {
      selMenu() {
        this.modelMenu = this.selMenu;
      }
    },
    computed:{
      itemType(){
        const iType = this.multiSelect?'v-checkbox-item':'v-radio-item';
        console.log(iType);
        return iType;
      }
    },
    methods: {
      getSubMenuData(menuValue) {
        if (this.level === 1) return this.menuData;
        this.menuData.map(item => {
          if (item.children && item.children.length > 0) {
            if (menuValue === undefined
              || menuValue === item.value) {
              return item.children;
            }
          }
        });
        return [];
      },
      onChange() {
        this.$emit('change', this.modelMenu);
      }
    }
  };
</script>
