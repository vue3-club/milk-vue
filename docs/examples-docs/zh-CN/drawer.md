<style lang="less">
@btnColor: #108ee9;

  .drawer-content-main {
    text-align:center;
    .vm-button{
      width:90%;
      margin:10px 5%;
    }
  }

  .drawer-sidebar-ul {
    margin: 0;
    list-style: circle;
    & > li {
      padding: 8px 20px 8px 0;
      border-bottom: 1px solid #ddd;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      drawerStyle: {
      },
      contentStyle: {
        'text-align': 'center',
        'padding-top': '80px'
      },
      sidebarStyle: {
        'background-color': '#fff'
      },
      posList: ['left','top', 'right','bottom'],
      position: 0,
      docked: false,
      open: false
    }
  },
  methods: {
    onOpenChange() {
      this.open = !this.open;
    },
    onPositionChange() {
      this.open = false;
      this.position = ++this.position % 4;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    onDockedChange() {
      this.open = false;
      this.docked = !this.docked;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    clickAlert(info) {
      alert(info);
    }
  }
}
</script>
## Toast 轻提示

### 使用指南

```javascript
import {Drawer} from 'milk-vue';
Vue.component(Drawer.name, Drawer);
```

### 代码演示

```javascript
export default {
  data() {
    return {
      drawerStyle: {
      },
      contentStyle: {
        'text-align': 'center',
        'padding-top': '50px'
      },
      sidebarStyle: {
        'background-color': '#fff'
      },
      posList: ['left','top', 'right','bottom'],
      position: 0,
      docked: false,
      open: false
    }
  },
  methods: {
    onOpenChange() {
      this.open = !this.open;
    },
    onPositionChange() {
      this.open = false;
      this.position = ++this.position % 4;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    onDockedChange() {
      this.open = false;
      this.docked = !this.docked;
      setTimeout(function (_this) {
        _this.onOpenChange();
      }, 300, this);
    },
    clickAlert(info) {
      alert(info);
    }
  }
}
```

:::demo 基本
```html
<v-drawer
  :docked="docked"
  :position="posList[position]"
  :open="open"
  :content-style="contentStyle"
  :sidebar-style="sidebarStyle"
  @open-change="onOpenChange">
<div class="drawer-content-main">
  <v-nav-bar :icon="open?'left':'right'" @icon-click="onOpenChange">Basic</v-nav-bar>
  <v-button @click="onPositionChange">Position: {{posList[position]}}</v-button>
  <v-button @click="onDockedChange">Docked: {{docked}}</v-button>
  <p>Click upper button to change</p>
</div>
<v-list slot="sidebar" class="drawer-sidebar-ul">
  <v-list-item v-for="n in 10" :key="n"
      @click="clickAlert(`list-item-${n}`)">
    {{`list-item-${n}`}}
  </v-list-item>
</v-list>
</v-drawer>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| position | 抽屉所在位置 | `String` | `left` | `left` `right` `top` `bottom` |
| open | 抽屉是否展开 | `Boolean` | - |
| docked | 抽屉是否嵌入文档 | `Boolean` | - |
| sidebar-style | 侧边栏样式 | `String` `Object` | - | - |
| overlay-style | 遮罩层样式 | `String` `Object`| - | - |
| content-style | 抽屉内容样式 | `String` `Object`| - | - |
| forbid-click | 禁止背景点击 | `Boolean` | `false` | - |
