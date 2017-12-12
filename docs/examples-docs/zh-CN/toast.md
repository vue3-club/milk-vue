<style>
.demo-toast{
  .demo-block{
    padding:0 15px;
  }
  .vm-button{
    margin-bottom:10px;
  }
}
</style>

<script>
import { Toast } from 'packages';
export default {
  methods:{
    toast(type,info){
      type==="default"?Toast(info):Toast[type](info);
    },
    toastDiy(){
      let second = 3; //倒计时3秒
      const toast = Toast.loading({
         mask:true, //背景蒙层
         duration: 0,       // 持续展示 toast
         forbidClick: true, // 禁用背景点击
         message: '倒计时 3 秒'
       });
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
}
</script>
## Toast 轻提示

### 使用指南

```javascript
import { Toast } from 'milk-vue';
```

### 代码演示


```javascript
export default {
  methods:{
    toast(type,info){
      Toast[type](info);
    },
    toastDiy(){
      let second = 3; //倒计时3秒
      const toast = Toast.loading({
         mask:true, //背景蒙层
         duration: 0,       // 持续展示 toast
         forbidClick: true, // 禁用背景点击
         message: '倒计时 3 秒'
       });
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
}
```

:::demo 基本
```html
<div class="demo-block">
    <v-button type="default" @click="toast('info','我是提示文案')">default</v-button>
    <v-button type="default" @click="toast('success','成功文案')">success</v-button>
    <v-button type="default" @click="toast('fail','失败文案')">fail</v-button>
    <v-button type="default" @click="toast('loading','加载中提示')">loading</v-button>
</div>
```
:::

:::demo 自定义
```html
<div class="demo-block">
    <v-button @click="toastDiy">toast diy</v-button>
</div>
```
:::

#### 文字提示

```javascript
Toast('我是提示文案，建议不超过十五字~');
```


#### 加载提示

```javascript
Toast.loading({ mask: true });
```


#### 成功/失败提示

```javascript
Toast.success('成功文案');
Toast.fail('失败文案');
```


#### 高级用法

```javascript
const toast = Toast.loading({
  duration: 0,       // 持续展示 toast
  forbidClick: true, // 禁用背景点击
  message: '倒计时 3 秒'
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.message = `倒计时 ${second} 秒`;
  } else {
    clearInterval(timer);
    Toast.clear();
  }
}, 1000);
```


### Function

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.loading | `options | message` | toast 实例 | 展示加载提示 |
| Toast.success | `options | message` | toast 实例 | 展示成功提示 |
| Toast.fail | `options | message` | toast 实例 | 展示失败提示 |
| Toast.clear | - | `void` | 关闭提示 |

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `text` | `loading` `success` `fail` `html` |
| message | 内容 | `String` | `''` | - |
| position | 位置 | `String` | `middle` | `top` `bottom` |
| mask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
| duration | 时长(ms) | `Number` | `3000` | 值为 0 时，toast 不会消失 |
