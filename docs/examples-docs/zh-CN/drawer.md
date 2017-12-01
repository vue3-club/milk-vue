<style>
.demo-drawer{
  .zan-doc-demo-block {
    padding: 0 15px;
  }
  .vm-button{
    margin-bottom:10px;
  }
}
</style>

<script>
import { Toast } from 'packages';
export default {
  methods:{
  }
}
</script>
## Toast 轻提示

### 使用指南

```javascript
import { Drawer } from 'vant';
Vue.component(Drawer.name, Drawer);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  methods:{
  }
}
```

:::demo 基本
```html
<v-drawer>drawer</v-drawer>
```
:::

### Options

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `text` | `loading` `success` `fail` `html` |
| message | 内容 | `String` | `''` | - |
| position | 位置 | `String` | `middle` | `top` `bottom` |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
| duration | 时长(ms) | `Number` | `3000` | 值为 0 时，toast 不会消失 |
