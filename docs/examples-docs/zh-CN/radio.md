<style>
.demo-radio{
  a{
    color:#66c6f2;
    margin-left:5px;
  }
  .vm-list-body>.vm-radio-wrapper{
    display:inline-block;
    margin:15px;
  }
}
</style>
<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:'two'
    }
  },
  methods:{
    toastInfo:function(info){
      Toast.info(info===undefined?"undefined":info.toString());
    }
  }
}
</script>
## radio 复选框

### 使用指南

```javascript
import { Radio } from 'milk-vue';
Vue.component(Radio.name, Radio);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:'two'
    }
  },
  methods:{
    toastInfo:function(info){
      Toast.info(info.toString());
    }
  }
}
```


#### 基本用法

默认为未勾选状态，设置`checked`属性默认勾选，设置`disabled`属性禁用

:::demo 基本

```html
<v-list>
  <v-radio
    @change="toastInfo"
  >
    Normal
  </v-radio>
  <v-radio
    disabled
  >
    Disabled unchecked
  </v-radio>
  <v-radio
    checked
    disabled
  >
    Disabled checked
  </v-radio>
</v-list>
```
:::

#### radio 组

v-model 可绑定一个变量

:::demo radio 组
```html
<v-list>
  <v-radio
    value="one"
    v-model="modelValue"
    @change="toastInfo"
  >
    One
  </v-radio>
  <v-radio
    value="two"
    checked
    v-model="modelValue"
    @change="toastInfo"
  >
    Two
    <span slot="extra">It's extra</span>
  </v-radio>
  <v-radio
    value="three"
    v-model="modelValue"
    @change="toastInfo"
  >
    Three
  </v-radio>
</v-list>
```
:::

#### radio 列表项

结合 v-list 使用

:::demo v-radio-item
```html
<v-list>
  <v-radio-item
    value="one"
    v-model="modelValue"
    @change="toastInfo"
  >
    One normal
  </v-radio-item>
  <v-radio-item
    value="two"
    v-model="modelValue"
    @change="toastInfo"
  >
    Two extra
    <span slot="extra">It's extra</span>
  </v-radio-item>
  <v-radio-item
    brief="It's brief"
    value="three"
    v-model="modelValue"
    @change="toastInfo"
    disabled
  >
    Three brief
  </v-radio-item>
</v-list>
```
:::

### Radio

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 绑定数据源 | `Boolean`,`String` | - | - |
| disabled | 是否禁用 | `Boolean` | `false` | `true`,`false` |
| checked | 是否默认选中 | `Boolean` | `false` | `true`,`false` |
| value | 复选框值 | `String` | - | - |
| align | 复选框位置 | `String` | `left` | `left`,`right` |


#### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | radio值改变时触发 | `Boolean|String` 是否选中|选中值 |
| click | 点击事件 | - |

### radioItem

基于 `ListItem` 进行封装<br/>
当`align`值为`left`时`radio` 作为 `thumb` slot 传入<br/>
当`align`值为`right`时`radio` 作为 `extra` slot 传入<br/>
其他属性及API参考 `radio`与 `ListItem`
