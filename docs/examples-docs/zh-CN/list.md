<style>
.e-feedback-my{
  background-color:#6abf47 !important;
}
</style>
<script>
import Vue from 'vue';
import { ListItem, Icon } from 'packages';
Vue.component(ListItem.name, ListItem);
Vue.component(Icon.name, Icon);

export default {
  data(){   
    return{
      disabled:false,
      eFeedback:'e-feedback'
    }
  },
  methods:{
    clickToDisabled:function(){
      this.disabled = true;
      this.eFeedback='e-feedback-my';
    }
  }
}
</script>

## List 列表
单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

### 使用指南

```javascript
import { List,ListItem } from 'vant';
Vue.component(List.name, List);
Vue.component(ListItem.name, ListItem);
```

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

### 代码演示

```javascript
export default {
  data(){   
    return{
      disabled:false,
      eFeedback:'e-feedback'
    }
  },
  methods:{
    clickToDisabled:function(){
      this.disabled = true;
    }
  }
}
```

```css
.e-feedback-my{
  background-color:#6abf47 !important;
}
```

:::
#### 基本

:::demo 基本
```html
<v-list>
    <div slot="header">Basic</div>
    <v-list-item>
        <div>Title</div>
        <div slot="extra">extra</div>
    </v-list-item>
</v-list>
<v-list>
    <div slot="header">Subtitle</div>
    <v-list-item brief="Subtitle" arrow="horizontal">
        <div>Title</div>
    </v-list-item>
    <v-list-item brief="Subtitle" arrow="horizontal">
        <v-icon type="check-circle" slot="thumb" color="#6abf47"></v-icon>
        <div>Title</div>
    </v-list-item>
</v-list>
<v-list>
    <div slot="header">Customized Right Side（Empty Content / Text / Element）</div>
    <v-list-item arrow="empty">
        <div>Title</div>
    </v-list-item>
    <v-list-item arrow="horizontal">
        <div>Title</div>
    </v-list-item>
    <v-list-item arrow="horizontal">
        <div>Title</div>
        <div slot="extra">extra</div>
    </v-list-item>
    <v-list-item brief="brief">
        <v-icon type="check-circle" slot="thumb" color="#6abf47"></v-icon>
        <div>Title</div>
        <v-icon type="ellipsis-circle" slot="extra" color="#108ee9"></v-icon>
    </v-list-item>
</v-list>
<v-list>
    <div slot="header">Text Wrapping</div>
    <v-list-item wrap>
        <div>Multiple line,long text will wrap;Long Text Long Text Long Text Long Text Long Text Long Text</div>
    </v-list-item>
    <v-list-item wrap align="top">
        <div>Multiple line and long text will wrap. Long Text Long Text Long Text</div>
        <div slot="extra">Align Vertical Top</div>
    </v-list-item>
    <v-list-item wrap>
        <div>In rare cases, the text of right side will wrap in the single line with long text. long text long text long text</div>
        <div slot="extra">Align Vertical Middle</div>
    </v-list-item>
</v-list>
```
:::

#### 其他

:::demo 其他
```html
<v-list>
    <div slot="header">header</div>
    <v-list-item arrow="horizontal" active-class="e-feedback-my" @click="function(){}">
        <div>Active-class</div>
    </v-list-item>
    <v-list-item arrow="horizontal" error brief="Brief">
        <div>Error</div>
        <span slot="extra">Extra</span>
    </v-list-item>
    <v-list-item @click="clickToDisabled" :disabled="this.disabled" arrow="horizontal" :active-class="eFeedback">
        click to disabled
    </v-list-item>
    <v-list-item>
      <select defaultValue="1">
        <option value="1">Html select element</option>
        <option value="2" disabled>Unable to select</option>
        <option value="3">option 3</option>
      </select>
    </v-list-item>
    <div slot="footer">footer</div>
</v-list>
```
:::

### API

#### List 列表容器

Slot

| name | 描述 |
|------|------|
| default | 列表主内容 |
| header | 自定义头部内容 |
| footer | 自定义底部内容 |

#### ListItem 列表项

Options

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|----|-----|------|------|------|
| arrow      | 箭头方向(右,上,下) | String |   -  | 可选`horizontal`,`up`,`down`,`empty`,如果是`empty`则存在对应的dom,但是不显示 |
| align    |  子元素垂直对齐 | String   | `middle` | 可选`top`,`middle`,`bottom` |
| error    | 报错样式,右侧文字颜色变成橙色 | Boolean  | `false`  | `true`,`false`|
| multiple-line    | 多行 | Boolean  | `false`  | `true`,`false` |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏 | Boolean  | `false`  | `true`,`false`|
| brief    | 辅助文案 | String  | -  | -|
| active-class  | 自定义active的类名 | String  | - | - |

Slot

| name | 描述 |
|------|------|
| default | 自定义列表项主内容 |
| thumb | 自定义缩略图 |
| extra | 自定义右边内容 |
