<style>
.demo-radio{
  a{
    color:#66c6f2;
    margin-left:5px;
  }
  .vm-list-body>.vm-radio-wrapper{
    display:block;
    margin:15px;
  }
}
</style>
<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValues:'two',
      modelValue:false,
      agreeValue:false
    }
  },
  methods:{
    clickToast:function(info){
      Toast.info(info&&info.toString()||"none");
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
      modelValues:'two',
      modelValue:false,
      modelTrue:true,
      modelFalse:false,
      agreeValue:false
    }
  },
  methods:{
    clickToast:function(info){
      Toast.info(info.toString());
    }
  }
}
```


#### 基本用法

通过v-model绑定 radio 的勾选状态

:::demo 基本

```html
<v-list>
  <v-radio
    v-model="modelValue"
    @click="clickToast(modelValue)"
  >
    Normal
  </v-radio>
  <v-radio
    @click="clickToast(modelFalse)"
    disabled
  >
    Disabled unchecked
  </v-radio>
  <v-radio
    checked
    @click="clickToast(modelTrue)"
    disabled
  >
    Disabled checked
  </v-radio>
</v-list>
```
:::

#### radio 组

v-model 需绑定一个数组，数组值为选中复选框 value 值的集合

:::demo radio 组
```html
<v-list>
  <v-radio
    value="one"
    v-model="modelValues"
    @change="clickToast(modelValues)"
  >
    One
  </v-radio>
  <v-radio
    value="two"
    checked
    v-model="modelValues"
    @change="clickToast(modelValues)"
  >
    Two
    <span slot="extra">It's extra</span>
  </v-radio>
  <v-radio
    value="three"
    v-model="modelValues"
    @change="clickToast(modelValues)"
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
    v-model="modelValues"
    @change="clickToast(modelValues)"
  >
    One normal
  </v-radio-item>
  <v-radio-item
    value="two"
    v-model="modelValues"
    @change="clickToast(modelValues)"
  >
    Two extra
    <span slot="extra">It's extra</span>
  </v-radio-item>
  <v-radio-item
    brief="It's brief"
    value="three"
    v-model="modelValues"
    @change="clickToast(modelValues)"
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
| v-model | 绑定数据源 | `Boolean`,`Array` | - | - |
| disabled | 是否禁用 | `Boolean` | `false` | `true`,`false` |
| value | 复选框值 | `String` | - | - |

#### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | radio值改变时触发 | - |
| click | 点击事件 | - |

### radioItem

基于 `ListItem` 进行封装，`radio` 作为 `thumb` slot 传入，其他属性及API参考 `radio` 与 `ListItem`
