<style>
.demo-input {
  .vm-button {
    user-select: none;
    color:rgb(16, 142, 233);
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
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:"",
      phoneError:false,
    }
  },
  methods:{
    setFocus(){
      this.$refs.clickfocus.$refs.input.focus();
    },
    checkValue(value){
      this.phoneError=!!value;
    }
  }
}
</script>

## Input 输入框

### 使用指南
``` javascript
import { Input } from 'vant';
Vue.component(Input.name, Input);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:"",
      phoneError:false,
    }
  },
  methods:{
    setFocus(){
      this.$refs.clickfocus.$refs.input.focus();
    },
    checkValue(value){
      this.phoneError=!!value;
    }
  }
}
```

#### 基本

type 支持`text`、`number`、`date`等类型，默认为`text`

:::demo 基本
```html
<v-input type="number" ref="number" placeholder="number">number</v-input>
<v-input type="password" name="password" placeholder="password" clear>password</v-input>
<v-input type="phone" ref="phone" placeholder="phone">phone</v-input>
<v-input type="bankCard" ref="bankCard" placeholder="bankCard">bankCard</v-input>
<v-input type="text" name="autofocus" autofocus placeholder="auto focus">autofocus</v-input>
<v-input type="text" name="clickfocus" ref="clickfocus" placeholder="click to focus">click to focus</v-input>
<v-button @click="setFocus">click button to focus</v-button>
```
:::

#### 标签

* label-align 支持`left`、`center`、`right`类型，默认为`left`
* label-number 值为1-10，默认为5

:::demo label align
```html
<v-input placeholder="Label align left" label-align="left">left</v-input>
<v-input placeholder="Label align center" label-align="center">center</v-input>
<v-input placeholder="Label align right" label-align="right">right</v-input>
<v-input placeholder="Label number 3" label-number="3">labelNumber 3</v-input>
<v-input click-to-focus placeholder="click label to focus" label-number="7" >click to focus</v-input>
```
:::

#### 输入绑定

输入绑定及 `readonly`，`disabled` 状态

:::demo v-model
```html
<v-input placeholder="input model" v-model="modelValue">v-model</v-input>
<v-input readonly placeholder="value readonly" :value="modelValue">readonly</v-input>
<v-input disabled placeholder="value disabled" :value="modelValue">disabled</v-input>
```
:::

#### 输入验证

设置 error 值，显示错误提示

:::demo error
```html
<v-input type="phone" placeholder="enter to error" @input="checkValue" :error="phoneError">error</v-input>
```
:::

#### 右边注释

extra 设置输入框右侧注释信息

:::demo extra
```html
<v-input type="number" placeholder="input extra" extra="￥">extra</v-input>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 输入框类型 | `String` | `text` | `input默认类型` <br> `bankCard` `phone`|
| id | 输入框的id | `String` | - | - |
| name | 输入框的name | `String` | - | - |
| value | 输入框的值 | `String` | - | - |
| label-number | 输入框标签最大字数 | `Number` | 5 | - |
| label-align | 输入框标签对齐方式 | `String` | `left` | - |
| click-to-focus | 点击标签是否聚焦 | `Boolean` | `false` | - |
| autofocus | 是否自动聚焦 | `Boolean` | `false` | - |
| readonly | 是否只读 | `Boolean` | `false` | - |
| disabled | 是否禁用输入框 | `Boolean` | `false` | - |
| error | 输入框是否有错误 | `Boolean` | `false` | - |
| extra | 右边注释 | `String` | - | - |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| focus | 输入框聚焦时触发 | - |
| blur | 输入框失焦时触发 | - |
