<script>
import { Toast } from 'packages';
export default {
  methods:{
    clickToast:function(info){
      Toast.info(info);
    }
  }
}
</script>

## NavBar 抽屉

### 使用指南

```javascript
import { NavBar } from 'milk-vue';
Vue.component(NavBar.name, NavBar);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  methods:{
    clickToast:function(info){
      Toast.info(info);
    }
  }
}
```

:::demo 基本
```html
<v-nav-bar icon="left" title="NavBar" @icon-click="clickToast('left')">
    <v-icon slot="right" type="ellipsis" @click="clickToast('right')"></v-icon>
</v-nav-bar>
<v-nav-bar icon="left" mode="light" @icon-click="clickToast('left')">
    <span slot="left" @click="clickToast('back')">back</span>
    NavBar
    <div slot="right">
        <v-icon type="search" style="margin-right:10px" @click="clickToast('search')"></v-icon>
        <v-icon type="ellipsis" @click="clickToast('ellipsis')"></v-icon>
    </div>
</v-nav-bar>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| mode | 模式 | `String` | `dark` | `dark` `light` |
| title | 标题 | `String` | - | - |
| icon | 左侧图标 | `String` | - | icon type |
| icon-click | 左侧图标点击事件 | `Function` | - | - |

### Slot

| name | 描述 |
|------|------|
| default | 自定义标题内容，如果存在会覆盖 `title` 值 |
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| icon-click | 设置icon后，点击左侧图标时触发 | - |
