<style>
.demo-checkbox{
  a{
    color:#66c6f2;
    margin-left:5px;
  }
  .vm-list-body>.vm-checkbox-wrapper{
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
      modelValue:['two']
    }
  },
  methods:{
    toastInfo:function(info){
      Toast.info(info===undefined?"undefined":info.toString());
    }
  }
}
</script>
## Checkbox 复选框

### 使用指南

```javascript
import { Checkbox } from 'milk-vue';
Vue.component(Checkbox.name, Checkbox);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:['two']
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

通过v-model绑定 checkbox 的勾选状态

:::demo 基本

```html
<v-list>
  <v-checkbox
    @change="toastInfo"
  >
    Normal
  </v-checkbox>
  <v-checkbox
    disabled
  >
    Disabled unchecked
  </v-checkbox>
  <v-checkbox
    checked
    disabled
  >
    Disabled checked
  </v-checkbox>
</v-list>
```
:::

#### Checkbox 组

v-model 需绑定一个数组，数组值为选中复选框 value 值的集合

:::demo Checkbox 组
```html
<v-list>
  <v-checkbox
    value="one"
    v-model="modelValue"
    @change="toastInfo"
  >
    One
  </v-checkbox>
  <v-checkbox
    value="two"
    v-model="modelValue"
    @change="toastInfo"
  >
    Two
    <span slot="extra">It's extra</span>
  </v-checkbox>
  <v-checkbox
    value="three"
    v-model="modelValue"
    @change="toastInfo"
  >
    Three
  </v-checkbox>
</v-list>
```
:::

#### Checkbox 列表项

结合 v-list 使用

:::demo v-checkbox-item
```html
<v-list>
  <v-checkbox-item
    value="one"
    align="right"
    v-model="modelValue"
    @change="toastInfo"
  >
    One normal right
  </v-checkbox-item>
  <v-checkbox-item
    value="two"
    v-model="modelValue"
    @change="toastInfo"
  >
    Two extra
    <span slot="extra">It's extra</span>
  </v-checkbox-item>
  <v-checkbox-item
    brief="It's brief"
    value="three"
    v-model="modelValue"
    @change="toastInfo"
    disabled
  >
    Three brief
  </v-checkbox-item>
</v-list>
```
:::

#### Agreement 协议

:::demo v-agreement

```html
<v-agreement>
  Agree <a @click="toastInfo('agreement')">agreement</a>
</v-agreement>
```
:::

### Checkbox

#### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| v-model | 绑定数据源<br/>当单个时为`Boolean`<br/>当成组时为`Array` | `Boolean`,`Array` | - | - |
| disabled | 是否禁用 | `Boolean` | `false` | `true`,`false` |
| checked | 是否默认选中 | `Boolean` | `false` | `true`,`false` |
| value | 复选框值 | `String` | - | - |
| align | 复选框位置 | `String` | `left` | `left`,`right` |

#### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | checkbox值改变时触发 | `Boolean`是否选中,`Array`选中值 |
| click | 点击事件 | - |

### Agreement

基于 `Checkbox` 的样式封装，API同 `Checkbox`

### CheckboxItem

基于 `ListItem` 进行封装<br/>
当`align`值为`left`时`checkbox` 作为 `thumb` slot 传入<br/>
当`align`值为`right`时`checkbox` 作为 `extra` slot 传入<br/>
其他属性及API参考 `Checkbox`与 `ListItem`

