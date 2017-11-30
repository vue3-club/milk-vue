<style>
.demo-input {
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
      this.$refs.clickfocus.$refs.input.focus();
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

## Input 输入框

### 使用指南
``` javascript
import { Input } from 'vant';
Vue.component(Input.name, Input);
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
      this.$refs.clickfocus.$refs.input.focus();
    },
    checkValue(value){
      this.phoneError=!!value;
    },
    errorClick(){
      Toast.error('Error');
    }
  }
}
```

#### 基本

type 支持`text`、`number`、`date`等类型，默认为`text`

:::demo 基本
```html
<v-list>
<v-input type="number" ref="number" placeholder="number">number</v-input>
<v-input type="password" name="password" placeholder="password" clear>password</v-input>
<v-input type="phone" ref="phone" placeholder="phone">phone</v-input>
<v-input type="bankCard" ref="bankCard" placeholder="bankCard">bankCard</v-input>
<v-input type="text" name="autofocus" autofocus placeholder="auto focus">autofocus</v-input>
<v-input type="text" name="clickfocus" ref="clickfocus" placeholder="click to focus">click to focus</v-input>
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
<v-input placeholder="label empty" label-align="left"></v-input>
<v-input placeholder="label icon" label-align="left">
    <div style="display: inline-flex;vertical-align: middle;">
        <v-icon type="search" color="#66c6f2"></v-icon>
    </div>
</v-input>
<v-input placeholder="label align left" label-align="left">left</v-input>
<v-input placeholder="label align center" label-align="center">center</v-input>
<v-input placeholder="label align right" label-align="right">right</v-input>
<v-input placeholder="label number 3" label-number="3">labelNumber 3</v-input>
<v-input click-to-focus placeholder="click label to focus" label-number="7" >click to focus</v-input>
</v-list>
```
:::

#### 输入绑定

输入绑定及 `readonly`，`disabled` 状态

:::demo v-model
```html
<v-list>
<v-input placeholder="input model" v-model="modelValue">v-model</v-input>
<v-input readonly placeholder="value readonly" :value="modelValue">readonly</v-input>
<v-input disabled placeholder="value disabled" :value="modelValue">disabled</v-input>
</v-list>
```
:::


#### 输入验证

* 添加 error 属性，显示错误提示
* 添加 clear 属性，显示清除标识

:::demo error & clear
```html
<v-list>
<v-input placeholder="enter show error" @change="checkValue" :error="phoneError" :error-click="errorClick">error</v-input>
<v-input placeholder="enter show clear" clear>clear</v-input>
</v-list>
```
:::

#### 右边注释

extra 设置输入框右侧注释信息

:::demo extra
```html
<v-list>
<v-input type="number" placeholder="input extra">
    extra
    <span slot="extra">￥</span>
</v-input>
</v-list>
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
