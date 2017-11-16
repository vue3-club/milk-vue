<style>
.demo-icon {
  font-size: 0;

  .examples {
    max-height: none;
  }

  .vm-flexbox-item {
    text-align: center;
    height: 100px;
    .vm-icon {
      display: inline-block;
    }
  }

  .vm-icon {
    display: none;
    font-size: 32px;
    margin: 15px 0;
    color: rgba(69, 90, 100, .8);
  }

  span {
    display:block;
    font-size: 14px;
  }
} 
</style>

<script>
import Vue from 'vue';

const icons = [
   'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading'
];

const IconListConstructor = Vue.extend({
  render(h) {
    return (
      <v-row justify="around" wrap="wrap">
        {icons.map(icon => (
          <v-col span="8">
            <v-icon type={icon}></v-icon>
            <span>{icon}</span>
          </v-col>
        ))}
      </v-row>
    )
  }
});

export default {
  mounted() {
    const IconList = new IconListConstructor({
      el: document.createElement('div')  
    });
    const block = document.querySelector('.zan-doc-demo-block');
    if (block) {
      block.appendChild(IconList.$el);
    }
  }
};
</script>

## Icon 图标

### 使用指南
``` javascript
import { Icon } from 'vant';

Vue.component(Icon.name, Icon);
```

### 提示

现在，我们只支持内置的 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up', 'down', 'left', 'right', 'ellipsis', 'loading' 这些 icon 类型，**不再默认支持其他自定义类型的 icon**。你如果需要用你自定义的 icon 类型，有这几种方法：

1. 查看 [/docs/react/upgrade-notes](/docs/react/upgrade-notes#1.x-=>-2.0) 中 1.x => 2.0 的 svg icon 文档介绍
2. 使用自己的 iconfont 文件
3. 其他方法，可以复用我们已经提供的 `.vm-icon` 样式名

### 代码演示

#### 基础用法

设置`name`属性为对应的图标名称即可，所有可用的图标名称见右侧列表
:::demo 列表
```html
<v-icon type="success" />
```
:::

#### 大小

设置`size`属性为对应参数即可，所有可用的图标名称见右侧列表
:::demo 大小
```html
<v-row justify="around" align="center">
    <v-col span="4">
        <v-icon type="search" size="xxs"></v-icon>
        <span>xxs</span>
    </v-col>
    <v-col span="4">
        <v-icon type="search" size="xs"></v-icon>
        <span>xs</span>
    </v-col>
    <v-col span="4">
        <v-icon type="search" size="sm"></v-icon>
        <span>sm</span>
    </v-col>
    <v-col span="4">
        <v-icon type="search" size="md"></v-icon>
        <span>md</span>
    </v-col>
    <v-col span="4">
        <v-icon type="search" size="lg"></v-icon>
        <span>lg</span>
    </v-col>
</v-row>
```
:::

### API


| 属性        | 说明           | 类型            | 默认值       | 可选值 |
|------------|----------------|----------------|--------------|-----------|
| type    |   内置 icon 名称  | String  | - | - |
| size    |   图标大小    | String | `md` | `xxs`,`xs`,`sm`,`md`,`lg`|
| color   | 图标颜色  | Color | '#000' | - |
