<style lang="less">
.demo-menu{
  .vm-menu{
  }
  .menu-active{
    .vm-nav-bar,
    .vm-menu{
      position:relative;
      z-index:100 !important;
    }
    .menu-mask{
      display:block;
      z-index:99;
    }
  }
  .menu-mask{
      display:none;
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.4;
  }
}
</style>
<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      itemList:[
        {
          label:'menu1',
          value:'m1',
          children:[
            {
              label:'child1',
              value:'c1'
            },
            {
              label:'child2',
              value:'c2'
            },
            {
              label:'child3',
              value:'c3'
            },
            {
              label:'child4',
              value:'c4'
            },
            {
              label:'child5',
              value:'c5'
            },
            {
              label:'child6',
              value:'c6'
            },
            {
              label:'child7',
              value:'c7'
            },
            {
              label:'child8',
              value:'c8'
            },
            {
              label:'child9',
              value:'c9'
            }
          ]
        },
        {
          label:'menu2',
          value:'m2',
          children:[
            {
              label:'child21',
              value:'c21'
            },
            {
              label:'child22',
              value:'c22',
              disabled:true
            },
            {
              label:'child23',
              value:'c23'
            }
          ]
        },
        {
          label:'menu3',
          value:'m3'
        }
      ],
      selectItem:[1],
      oneShow:false,
      twoShow:false,
      threeShow:false
    }
  },
  methods:{
    toastInfo:function(info){
      console.log(info);
    },
    changeMenu:function(menu){
      this[menu]=!this[menu];
    }
  }
}
</script>
## Toast 菜单

### 使用指南

```javascript
import { Menu } from 'milk-vue';
Vue.component(Menu.name, Menu);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      itemList:[
        {
          label:'menu1',
          value:'m1',
          children:[
            {
              label:'child1',
              value:'c1'
            },
            {
              label:'child2',
              value:'c2'
            },
            {
              label:'child3',
              value:'c3'
            },
            {
              label:'child1',
              value:'c4'
            },
            {
              label:'child2',
              value:'c5'
            },
            {
              label:'child3',
              value:'c6'
            },
            {
              label:'child1',
              value:'c7'
            },
            {
              label:'child2',
              value:'c8'
            },
            {
              label:'child3',
              value:'c9'
            }
          ]
        },
        {
          label:'menu2',
          value:'m2'
        }
      ],
      selectItem:[1],
      oneShow:false
    }
  },
  methods:{
    toastInfo:function(info){
      console.log(info);
    },
    changeMenu:function(menu){
      this[menu]=!this[menu];
    }
  }
}
```

### 基本用法

默认菜单，`menu-data`传入菜单数据，`change`回调选中菜单值

:::demo 基本

```html
<div :class="oneShow?'menu-active':''">
    <div class="menu-mask"></div>
    <v-nav-bar
      :icon="oneShow?'left':'right'"
      title="Normal menu"
      @icon-click="changeMenu('oneShow')"
    >
    </v-nav-bar>
    <v-menu
      v-show="oneShow"
      :menu-data="itemList"
      @change="toastInfo"
    >
    </v-menu>
<div>
```
:::

### 单极菜单

`level`设置菜单层级

:::demo 单极菜单

```html
<div :class="twoShow?'menu-active':''">
    <div class="menu-mask"></div>
    <v-nav-bar
      :icon="twoShow?'left':'right'"
      title="Single menu"
      @icon-click="changeMenu('twoShow')"
    >
    </v-nav-bar>
    <v-menu
      v-show="twoShow"
      :menu-data="itemList"
      :level="1"
      @change="toastInfo"
    >
    </v-menu>
<div>
```
:::

### 复选菜单

`multi-select`设置菜单为多选

:::demo 多选菜单

```html
<div :class="threeShow?'menu-active':''">
    <div class="menu-mask"></div>
    <v-nav-bar
      :icon="threeShow?'left':'right'"
      title="Multi-select menu"
      @icon-click="changeMenu('threeShow')"
    >
    </v-nav-bar>
    <v-menu
      v-show="threeShow"
      :menu-data="itemList"
      multi-select
      @change="toastInfo"
      @ensure="toastInfo"
      @cancel="changeMenu('threeShow')"
    >
    </v-menu>
<div>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| menu-data | 菜单数据 | `Array<{label: String, value, disabled?, children<data>?}>` | [] | - |
| multi-select | 是否多选模式 | `Boolean` | `false` | `false`,`true` |
| level | 菜单层级 | `Number` | `2` | `1`,`2` |
| height | 菜单高度 | `Number` | `document.documentElement.clientHeight / 2` | - |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 菜单项选值发生变化时触发 | 菜单选中值【1级单选:String，1级多选:Array，2级:Object<1级菜单value: 2级菜单value>】 |
| ensure | 多选模式下，点击`确定`按钮时触发 | 菜单选中值【1级单选:String，1级多选:Array，2级:Object<1级菜单value: 2级菜单value>】 |
| cancel | 多选模式下，点击`取消`按钮时触发 | - |
