<style>
  .wrap{
    background-color: #ececec;
  }
</style>
<script>
export default {
  data(){
    return {
      value: '',
      showCancelButton: true,
      autofocus: true     
    }
  },
  methods:{
    onSubmit:function(e) {
      console.log(e);
    },
    onChange:function(e) {
      console.log(e);
    },
    onCancel:function(e) {
      console.log(e);
    },
    onClear:function(e) {
      console.log(e);
    }
  }
}
</script>
## SearchBar 搜索栏
一般用于导航栏下方，点击『取消按钮』退出激活状态

### 使用指南
``` javascript
import { SearchBar } from 'milk-vue';
Vue.component(SearchBar.name, SearchBar);
```

### 代码演示
``` javascript
export default {
  data(){
    return {
      value: '',
      showCancelButton: true,
      autofocus: true     
    }
  },
  methods:{
    onSubmit:function(e) {
      console.log(e);
    },
    onChange:function(e) {
      console.log(e);
    },
    onCancel:function(e) {
      console.log(e);
    },
    onClear:function(e) {
      console.log(e);
    }
  }
}
```


#### normal
::: demo normal
```html
    <div class="wrap">
      <v-search-bar 
        @submit='onSubmit'
        @onchange='onChange'
        @cancel='onCancel'
        @clear="onClear"
        placeholder='Search'
        v-model='value'>
      </v-search-bar>
    </div>
:::

#### 自动获取焦点
::: demo 自动获取焦点
```html
    <div class="wrap">
      <v-search-bar 
        placeholder='自动获取焦点'
        :autofocus='autofocus'>
      </v-search-bar>
    </div>
:::

#### 显示取消按钮
::: demo 显示取消按钮
```html
    <div class="wrap">
      <v-search-bar
        default-value='好吃的'  
        :show-cancel-button='showCancelButton'
        placeholder='Search'>
      </v-search-bar>
    </div>
:::

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| defaultValue | 搜索框当前默认值 | `String` |  |
| value | 绑定值 | `String` |  |
| placeholder | placeholder | `String` ||
| cancelText | 取消按钮的文字 | `String` | `取消` |
| showCancelButton | 是否一直显示取消按钮 | `Boolean` | `false` |
| disabled | 禁用搜索框 | `Boolean` | `false` |
| maxLength | 最多允许输入的字符个数 | `Number` |  |


### Events
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| submit | submit 事件回调 (点击键盘的 enter) | `(val: string): void`，如果绑定值为空，就返回默认值 `defaultValue` |  |
| change | change 事件回调 | `(val: string): void` |  |
| focus | focus 事件回调 |  |  |
| blur | blur 事件回调 |  |  |
| clear | clear 事件回调 | `(val: string): void` |  |
| cancel | cancel 事件回调 | `(val: string): void` |  |
