<style>
.demo-block {
  padding: 0 15px;
}
</style>

<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      value: 5
    }
  },
  methods:{
    toastInfo:function(value){
      Toast.info(`currentValue is ${value}`);
    }
  }
}
</script>

## Button 按钮

### 使用指南
``` javascript
import { Stepper } from 'milk-vue';
Vue.component(Stepper.name, Stepper);
```

### 代码演示

#### 步进范围

默认为`-Infinity`到`Infinity`

:::demo 步进范围
```html
<div class="demo-block">
    <v-stepper :min="1" :max="10" :step="2" v-model="value" />
</div>
```
:::

#### 禁用状态

通过`disabled`属性来禁用步进器

:::demo 禁用状态
```html
<div class="demo-block">
    <v-stepper :disabled="true" />
</div>
```
:::

#### 输入框只读

:::demo 输入框只读
```html
<div class="demo-block">
    <v-stepper :readonly="true" :step="3" :on-change="toastInfo" />
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 
|-----------|-----------|-----------|-------------|
| min | 最小值 | `Number`  |  `-Infinity` |
| max | 最大值 | `Number`  |  `Infinity` | 
| value | 当前值 | `Number`  |  无 |
| step | 每次改变的步数 | `Number`  |  `1`  | 
| defaultValue | 默认初始值 | `Number`  |  `1`  | 
| onChange | 变化时回调函数 | `Function`  |  无  |
| disabled | 禁用 | `Boolean`  |  `false`  | 
| readonly | input只读 | `Boolean`  |  `false`  | 
