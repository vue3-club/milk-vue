<style>
.demo-block {
  padding: 0 15px;
}
</style>

<script>
export default {
  data () {
    return {
      shareList: [{
          key: 'wx',
          title: '微信'
        }, {
          key: 'wb',
          title: '微博'
        }, {
          key: 'douban',
          title: '豆瓣'
        }]
    }
  }
}
</script>


## share 第三方分享

目前只支持微信、微博、QQ、知乎四个平台

### 使用指南
``` javascript
import { Share } from 'milk-vue';
Vue.component(Share.name, Share);
```

:::demo
```html
<div class="demo-block">
  <v-share></v-share>
</div>
```
:::

### 启用部分

:::demo
```html
<div class="demo-block">
    <v-share :share-list="shareList" type="bloom"></v-share>
</div>
```
:::

### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| shareList | 第三方列表 | Array  | - | - |
| type | 样式类型，bloom类型下建议分享按钮不超过4个 | String  | default | default/bloom |
| btntext | bloom类型下按钮文字，可以使用图标 | String  | 分享 | - |

shareList 默认值为 [{key: 'wx',title: '微信'}, {key: 'wb',title: '微博'}, {key: 'qq',title: 'QQ'}, {key: 'douban',title: '豆瓣'}]

可以根据需求启用相应的第三方分享

