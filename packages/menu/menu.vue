<template>
  <v-row
    align="stretch"
    direction="column"
    :class="prefixCls"
    :style="{height:`${menuHeight}px`}"
  >
    <v-row
      align="start"
      class="vm-menu-select-container"
    >
      <v-col
        v-if="level===2"
        :style="{height:`${subMenuHeight}px`}"
        role="menuList"
      >
        <v-list>
          <v-list-item
            v-for="(item,index) in menuData"
            :key="index"
            :disabled="item.disabled"
            :class="{
              [`${prefixCls}-selected`]:curMenu===item.value
            }"
            @click="onClickMenu(item.value)"
          >
            {{item.label}}
          </v-list-item>
        </v-list>
      </v-col>
      <v-sub-menu
        :style="{height:`${subMenuHeight}px`}"
        :multi-select="this.multiSelect"
        :menu-data="this.subMenuData"
        :sel-menu="subSelMenu"
        @change="onChange"
      >
      </v-sub-menu>
    </v-row>
    <v-row v-if="this.multiSelect" :class="multiSelectMenuBtnsCls">
      <v-col>
        <v-button type="danger" :style="btnStyle" @click="onCancel">取消</v-button>
      </v-col>
      <v-col>
        <v-button type="primary" :style="btnStyle" @click="onEnsure">确定</v-button>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
  import VList from '../list';
  import VListItem from '../listItem';
  import VCheckBox from '../checkbox';
  import VSubMenu from './subMenu.vue';
  import VButton from '../button';

  const prefixCls = 'vm-menu';
  const multiSelectMenuBtnsCls = 'vm-multi-select-btns';

  export default {
    components: {
      VButton,
      VSubMenu,
      VList,
      VListItem,
      VCheckBox
    },
    name: 'VMenu',
    props: {
      menuData: Array,
      level: {
        type: Number,
        default: 2
      },
      height: Number,
      multiSelect: Boolean
    },
    mounted: function() {
      this.$nextTick(function() {
        this.docHeight = document.documentElement.clientHeight / 2; // 获取页面文档高度
        this.subMenuData = this.getSubMenuData(); // 初始化菜单项
        console.log('this.subMenuData');
        console.log(this.subMenuData);
      });
    },
    data() {
      return {
        prefixCls: prefixCls,
        subMenuData: [],
        curMenu: '',
        selMenu: this.getInitSelMenu(),
        docHeight: 0,
        multiSelectMenuBtnsCls: multiSelectMenuBtnsCls
      };
    },
    computed: {
      // 元素类集合
      menuHeight() {
        return this.height || this.docHeight;
      },
      // 次级菜单高度
      subMenuHeight() {
        return this.multiSelect ? this.menuHeight - 47 : this.menuHeight;
      },
      // 多选模式下按钮样式
      btnStyle() {
        return {
          border: 'none',
          borderRadius: 0
        };
      },
      // 次级菜单已选值
      subSelMenu() {
        return this.level === 2 ? (this.selMenu[this.curMenu] || []) : this.selMenu;
      }
    },
    methods: {
      // 获取次级菜单数据
      getSubMenuData(menuValue) {
        if (this.level === 1) return this.menuData;
        let menuItem;
        for (menuItem of this.menuData) {
          if (menuValue === undefined
            || menuValue === menuItem.value) {
            this.curMenu = menuItem.value;
            return menuItem.children || [];
          }
        }
        return [];
      },
      // 获取初始已选菜单值
      getInitSelMenu() {
        return this.level === 2 ? {} : this.multiSelect ? [] : '';
      },
      // 点击菜单事件
      onClickMenu(value) {
        this.subMenuData = this.getSubMenuData(value);
      },
      // 菜单值变化事件
      onChange(item) {
        if (this.level === 2) {
          if (!this.multiSelect) this.selMenu = {};
          this.selMenu[this.curMenu] = item;
        } else {
          this.selMenu = item;
        }
        this.$emit('change', this.selMenu);
      },
      // 点击确定按钮事件
      onEnsure() {
        this.$emit('ensure', this.selMenu);
      },
      // 点击取消按钮事件
      onCancel() {
        this.selMenu = this.getInitSelMenu();
        this.$emit('cancel');
      }
    }
  };
</script>
