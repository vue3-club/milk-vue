<style>
  .radio {
    padding: 0 20px;  
  }
  .radio label {
    display: inline-block;
    margin-right: 20px;
  }
</style>
<script>
export default {
  data(){
    return {
      files: [
        {
           url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
        }
      ],
      multiple: true,
      radioValue: false
    }
  },
  methods:{
    onClick:function(index){
      console.log(index);
    },
    onChange:function(files, type, index){
      console.log(files, type, index);
    }
  }
}
</script>

## ImagePicker 图片选择器
注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能

### 使用指南
``` javascript
import { ImagePicker } from 'milk-vue';
Vue.component(ImagePicker.name, ImagePicker);
```

### 代码演示
```javascript
export default {
  data(){
    return {
      files: [
        {
           url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
        }
      ],
      multiple: true,
      radioValue: false
    }
  },
  methods:{
    onClick:function(index){
      console.log(index);
    },
    onChange:function(files, type, index){
      console.log(files, type, index);
    }
  }
}
```

### 图片选择
:::demo
```html
<div class="radio">
  <label><input type="radio" :value="false" v-model="radioValue">切换到单选</label>
  <label><input type="radio" :value="true" v-model="radioValue">切换到多选</label>
</div>
<div class="demo-block">
    <v-image-picker :files="files" @image-click="onClick" @change="onChange" :multiple="radioValue"></v-image-picker>
</div>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| files | 图片文件数组，元素为对象 | `Array` | `[]` |
| selectable | 是否显示选择按钮 | `Boolean` | `true` |
| removeable | 是否显示移除按钮 | `Boolean` | `true` |
| multiple	 | 是否支持多选 | `Boolean` | `false` |


### Events
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| change | files 值发生变化触发的回调函数, type 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 | `(files: Object, operationType: string, index: number): void` ||
| image-click | 图片被点击时的回调， | `(index: number): void` |  |
| fail | 选择图片错误时的回调 | `(error: object): void` |  |
