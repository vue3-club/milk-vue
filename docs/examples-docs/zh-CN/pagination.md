<style>
.demo-pagination{
    .vm-pagination{
        padding:0 15px;
    }
}
</style>

<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:1
    }
  },
  methods:{
    consolePage:function(info){
      console.log(info);
    }
  }
}
</script>

## NavBar 抽屉

### 使用指南

```javascript
import { Pagination } from 'milk-vue';
Vue.component(Pagination.name, Pagination);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      modelValue:1
    }
  },
  methods:{
    consolePage:function(info){
      console.log(info);
    }
  }
}
```

#### 默认模式

包含上下页按钮，页码信息

:::demo 基本
```html
<v-pagination :total="10" @change="consolePage"></v-pagination>
```
:::

#### 按钮模式

只包含上下页按钮，可结合`v-model`自定义显示页码信息

:::demo button
```html
<v-pagination mode="button" :total="10" @change="consolePage" v-model="modelValue" prev-text="Prev" next-text="Next">Page: {{modelValue}}</v-pagination>
```
:::

#### 数字模式

只包含页码信息，可结合`v-model`实现翻页操作

:::demo number
```html
<v-pagination mode="number" :total="10" v-model="modelValue"></v-pagination>
```
:::

#### 指示器模式

只包含指示器信息，可结合`v-model`实现翻页操作

:::demo pointer
```html
<v-pagination mode="pointer" :total="10" v-model="modelValue"></v-pagination>
```
:::

#### 自定义

结合不同模式下的`slot`可实现不一样的定制分页器

:::demo custom
```html
<v-pagination mode="number" :total="10" v-model="modelValue">
   <v-icon type="left" slot="prev" :disabled="modelValue<=1" @click="()=>{modelValue-=1}"></v-icon>
   <v-icon type="right" slot="next" :disabled="modelValue>=10" @click="()=>{modelValue+=1}"></v-icon>
</v-pagination>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| mode | 模式 | `String` | `normal` | `normal` `button` `number` `pointer` |
| v-model | 数据绑定页数 | `Number` | - | - |
| current | 数据绑定页数 | `Number` | `1` | - |
| total | 总页数 | `Number` | `0` | - |
| prev-text | 上页按钮文案 | `String` | `上页` | - |
| next-text | 下页按钮文案 | `String` | `下页` | - |

### Slot

| name | 描述 |
|------|------|
| default | 自定义上页按钮，只在`button`下有效 |
| prev | 自定义上页按钮，只在`number`,`pointer`下有效 |
| next | 自定义下页按钮，只在`number`,`pointer`下有效 |

### Event

| 事件名称 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| change | 点击上下页按钮时触发 | `Number` 变化后的页码 |
