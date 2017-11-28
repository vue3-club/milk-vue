<style>
.demo-button {
  .vm-button {
    margin: 10px 0;
    user-select: none;
    
    &-inline{
      margin-right:10px;
    }

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }
  }

  .zan-doc-demo-block {
    padding: 0 15px;
  }

  .zan-doc-demo-block__subtitle {
    padding-left: 0;
  }
}
</style>

## Button 按钮

### 使用指南
``` javascript
import { Button } from 'vant';
Vue.component(Button.name, Button);
```

### 代码演示

#### 按钮类型

支持`default`、`primary`、`danger`三种类型，默认为`default`

:::demo 按钮类型
```html
<v-button type="default">default</v-button>
<v-button type="primary">Primary</v-button>
<v-button type="danger">Danger</v-button>
<v-button type="ghost">Ghost</v-button>
```
:::

#### 按钮尺寸

默认为`normal`，可选`small`

:::demo 按钮尺寸
```html 
<v-button inline>inline normal</v-button>
<v-button inline type="primary">inline normal</v-button>
<v-button inline size="small">inline small</v-button>
<v-button inline size="small" type="primary">inline small</v-button>
```
:::


#### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

:::demo 禁用状态
```html
<v-button disabled>Diabled</v-button>
```
:::

#### 加载状态

:::demo 加载状态
```html 
<v-button tag="a" loading type="primary" href="#">loading</v-button>
```
:::

#### 自定义按钮标签

按钮标签默认为`button`，可以使用`tag`属性来修改按钮标签


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| type | 按钮类型 | `String`  | `default` | `primary` `danger` |
| size | 按钮尺寸 | `String`  | `normal` | `normal` `small` |
| tag | 按钮标签 | `String`  | `button` | 任意`HTML`标签 |
| diabled | 是否禁用 | `Boolean`  |  `false`  | - |
| loading | 是否显示为加载状态 | `Boolean`  |  `false`  | - |
