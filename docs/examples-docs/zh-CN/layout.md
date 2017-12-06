<style>
.demo-layout {
  .vm-flexbox {
    padding: 0 15px;
  }
  .vm-flexbox-item {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
    
    &.small{
      height:20px !imporatnt;
      line-height:20px !important;
    }
  }
}
</style>

## Layout 布局

提供了`v-row`和`v-col`两个组件来进行行列布局

### 使用指南
``` javascript
import { Row, Col } from 'milk-vue';
const { Col } from Row;
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
```

### 代码演示

#### 基本用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比    
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

:::demo 基本
```html
<v-row>
  <v-col span="8">span: 8</v-col>
  <v-col span="8">span: 8</v-col>
  <v-col span="8">span: 8</v-col>
</v-row>

<v-row>
  <v-col span="4">span: 4</v-col>
  <v-col span="10" offset="4">offset: 4, span: 10</v-col>
</v-row>

<v-row>
  <v-col offset="12" span="12">offset: 12, span: 12</v-col>
</v-row>
```
:::

#### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

:::demo 在列元素之间增加间距
```html
<v-row gutter="20">
  <v-col span="8">span: 8</v-col>
  <v-col span="8">span: 8</v-col>
  <v-col span="8">span: 8</v-col>
</v-row>
```
:::

#### flex

通过`warp`属性可以设置子元素换行方式

:::demo 设置子元素换行方式
```html
<v-row wrap="wrap">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row wrap="wrap-reverse">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
```
:::

通过`align`属性可以设置子元素交叉轴对齐方式

:::demo 设置子元素交叉轴对齐方式
```html
<v-row align="start">
  <v-col span="6">span: 6</v-col>
  <v-col span="6" class="small">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row align="center">
  <v-col span="6">span: 6</v-col>
  <v-col span="6" class="small">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row align="end">
  <v-col span="6">span: 6</v-col>
  <v-col span="6" class="small">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
```
:::

通过`justify`属性可以设置子元素主轴对齐方式

:::demo 设置子元素主轴对齐方式
```html
<v-row justify="start">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row justify="center">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row justify="end">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row justify="between">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
<v-row justify="around">
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
  <v-col span="6">span: 6</v-col>
</v-row>
```
:::

### API

#### Row 行元素
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| direction | 子元素定位方向 | `String` | `row` | 可选 `row`,`row-reverse`,`column`,`column-reverse`, RN 仅支持`row`,`column` |
| wrap | 子元素换行方式 | `String` | `nowrap` | 可选`nowrap`,`wrap`,`wrap-reverse`, RN 仅支持`nowrap`,`wrap` |
| justify  | 子元素主轴对齐方式 | `String` | `start` | 可选`start`,`end`,`center`,`between`,`around` |
| align    | 子元素交叉轴对齐方式 | `String` | `center` | 可选`start`,`center`,`end`,`baseline`,`stretch` RN仅支持`start`,`end`,`center`,`stretch` |
| alignContent | 多根轴线时对齐方式(`web only`) | `String`  | `stretch` | 可选`start`,`end`,`center`,`between`,`around`,`stretch` |
| gutter | 子元素间距（单位为px） | `String | Number` | 0 | - |

#### Column 列元素
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| span | 列元素宽度 | `String | Number` | - | - |
| offset | 列元素偏移距离 | `String | Number` | - | - |
