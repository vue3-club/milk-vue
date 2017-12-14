<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:true
    }
  },
  methods:{
    toastInfo:function(info){
      Toast.info(info.toString());
    }
  }
}
</script>

## Switch 滑动开关

### 使用指南

```javascript
import { Switch } from 'milk-vue';
Vue.component(Switch.name, Switch);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:true
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

可结合`List`组件，作为extra插槽使用；

:::demo 基本
```html
<v-list>
    <v-list-item>
        Default off
        <v-switch
          ref="switchOn"
          slot="extra"
          @change="toastInfo"
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Default on
        <v-switch
          ref="switchOff"
          slot="extra"
          checked
          @change="toastInfo"
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Disabled
        <v-switch
          slot="extra"
          checked
          disabled
        ></v-switch>
    </v-list-item>
</v-list>

```
:::

#### 自定义样式

* platform 设置组件风格，可选`android`,`ios`，默认`ios`
* color 设置组件打开后背景色

:::demo 自定义样式
```html
<v-list>
    <v-list-item>
        Android
        <v-switch
          ref="switchOn"
          slot="extra"
          platform="android"
          @change="toastInfo"
          checked
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Android disabled
        <v-switch
          ref="switchOn"
          slot="extra"
          platform="android"
          @change="toastInfo"
          checked
          disabled
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Red background
        <v-switch
          ref="switchOff"
          slot="extra"
          color="red"
          platform="android"
          checked
          @change="toastInfo"
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Red background disabled
        <v-switch
          ref="switchOff"
          slot="extra"
          color="red"
          platform="android"
          checked
          disabled
          @change="toastInfo"
        ></v-switch>
    </v-list-item>
</v-list>

```
:::

#### 绑定数据

通过`v-model`进行数据绑定，可以更方便操作`switch`；

:::demo 绑定数据
```html
<v-list>
    <v-list-item>
        Model {{modelValue}}
        <v-switch
          slot="extra"
          v-model="modelValue"
          checked
        ></v-switch>
    </v-list-item>
    <v-list-item>
        Model disabled {{modelValue}}
        <v-switch
          slot="extra"
          v-model="modelValue"
          disabled
        ></v-switch>
    </v-list-item>
</v-list>

```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| platform | 风格 | `String` | `ios` | `ios` `android` |
| checked | 是否打开 | `Boolean` | - | - |
| disabled | 是否禁用 | `Boolean` | - | - |
| color | 开关打开时背景色 | `String` | - | - |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 开关值改变时触发 | `Boolean` 是否选中 |
| click | 点击事件 | - |
