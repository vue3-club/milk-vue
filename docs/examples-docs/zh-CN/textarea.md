<style>
.demo-textarea {
  .vm-button {
    user-select: none;
    color:#66c6f2;
    border:none;

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }
  }
  
  h2{
    padding-bottom:15px;
    margin-left:15px;
  }

  .zan-doc-demo-block__subtitle {
    padding-left: 0;
  }
}
</style>
<script>
import {Toast} from "packages"
export default {
  data(){
    return {
      modelValue:"",
      phoneError:false,
    }
  },
  methods:{
    setFocus(){
      this.$refs.clickfocus.$refs.textarea.focus();
    },
    checkValue(value){
      this.phoneError=!!value;
    },
    errorClick(){
      Toast.fail('Error');
    }
  }
}
</script>

## Textarea 多行输入

### 使用指南
``` javascript
import { Textarea } from 'milk-vue';
Vue.component(Textarea.name, Textarea);
```

### 代码演示

```javascript
import {Toast} from "packages"
export default {
  data(){
    return {
      modelValue:"",
      phoneError:false,
    }
  },
  methods:{
    setFocus(){
      this.$refs.clickfocus.$refs.textarea.focus();
    },
    checkValue(value){
      this.phoneError=!!value;
    },
    errorClick(){
      Toast.fail('Error');
    }
  }
}
```

#### 基本

type 支持`text`、`number`、`date`等类型，默认为`text`

:::demo 基本
```html
<v-list>
    <v-textarea ref="autoHeight" placeholder="autoHeight" auto-height>autoHeight</v-textarea>
    <v-textarea placeholder="multi-rows" :rows="3"></v-textarea>
    <v-textarea autofocus placeholder="auto focus">autofocus</v-textarea>
    <v-textarea ref="clickfocus" placeholder="click to focus">click focus</v-textarea>
    <v-button @click="setFocus">click button to focus</v-button>
</v-list>
```
:::

#### 标题

* 空值
* label-align 支持`left`、`center`、`right`类型，默认为`left`
* label-number 值为1-10，默认为5
* click-to-focus 点击标题聚焦

:::demo Custom title
```html
<v-list>
    <v-textarea placeholder="label empty" label-align="left"></v-textarea>
    <v-textarea placeholder="label icon" label-align="left">
        <div style="display: inline-flex;vertical-align: middle;">
            <v-icon type="search" color="#66c6f2"></v-icon>
        </div>
    </v-textarea>
    <v-textarea placeholder="label align left" label-align="left">left</v-textarea>
    <v-textarea placeholder="label align center" label-align="center">center</v-textarea>
    <v-textarea placeholder="label align right" label-align="right">right</v-textarea>
    <v-textarea placeholder="label number 3" label-number="3">labelNumber 3</v-textarea>
    <v-textarea click-to-focus placeholder="click label to focus" label-number="7" >click to focus</v-textarea>
</v-list>
```
:::

#### 计数

count: 计数功能,兼具最大长度,默认为0,代表不开启计数功能

:::demo count
```html
<v-list>
    <v-textarea placeholder="limited value length 10" :count="10">count</v-textarea>
    <v-textarea placeholder="limited value length 100" value="Limited value length 100" rows="3" :count="100"></v-textarea>
</v-list>
```
:::

#### 输入绑定

输入绑定及 `readonly`，`disabled` 状态

:::demo v-model
```html
<v-list>
    <v-textarea placeholder="textarea model" v-model="modelValue" auto-height>v-model</v-textarea>
    <v-textarea readonly placeholder="value readonly" :value="modelValue">readonly</v-textarea>
    <v-textarea disabled placeholder="value disabled" :value="modelValue">disabled</v-textarea>
</v-list>
```
:::

#### 输入验证

* 添加 error 属性，显示错误提示
* 添加 clear 属性，显示清除标识

:::demo error & clear
```html
<v-list>
    <v-textarea placeholder="enter show error" @change="checkValue" :error="phoneError" @error-click="errorClick">error</v-textarea>
    <v-textarea placeholder="enter show clear" clear>clear</v-textarea>
</v-list>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| id | 输入框的id | `String` | - | - |
| name | 输入框的name | `String` | - | - |
| value | 输入框的值 | `String` | - | - |
| label-number | 输入框标签最大字数 | `Number` | 5 | - |
| label-align | 输入框标签对齐方式 | `String` | `left` | - |
| click-to-focus | 点击标签是否聚焦 | `Boolean` | `false` | - |
| autofocus | 是否自动聚焦 | `Boolean` | `false` | - |
| auto-height | 是否自动聚焦 | `Boolean` | `false` | - |
| readonly | 是否只读 | `Boolean` | `false` | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| clear | 显示清除 | `Boolean` | `false` |  |
| count | 计数功能,兼具最大长度<br>默认为0,代表不开启计数功能  | `Number` | `0` |  |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - |
| error-click | 点击错误提示时触发 | - |
