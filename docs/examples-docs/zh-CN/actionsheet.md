<script>
export default {
  data() {
    return {
      show: false,
      message: 'I am description, description, description',
      options: ['Operation1', 'Operation2', 'Operation2'],
      cancelText: '取消',
      maskClosable: true
    }
  },
  methods: {
    showActionSheet() {
      this.show = true
    }
  }
}
</script>

## Actionsheet 动作面板

### 使用指南

```javascript
import { Actionsheet } from 'milk-vue';
Vue.component(Actionsheet);
```

### 代码演示

```javascript
export default {
  data() {
    return {
      show: false,
      message: 'I am description, description, description',
      options: ['Operation1', 'Operation2', 'Operation2'],
      cancelText: '取消',
      maskClosable: true
    }
  },
  methods: {
    showActionSheet() {
      this.show = true
    }
  }
}
```

:::demo 基本
```html
<v-button @click="showActionSheet">showActionSheet</v-button>
<v-actionsheet :show.sync="show" :options="options" :message="message" :cancel-text="cancelText" :mask-closable="maskClosable" />
```

:::

### API

| 参数       | 说明      | 类型       | 默认值      | 可选值      |
|------------|-----------|-----------|-------------|-------------|
| show | 是否显示actionsheet | `Boolean` | `false` |  `true` `false` |
| message | 顶部标题下的简要消息 | `String` | - |  - |
| options | 按钮标题列表 | `Array` | - |  - |
| cancel-text | 取消按钮文案 | `String` | - |  - |
| mask-closable | 点击遮罩是否关闭 | `Boolean` | `true` | `true` `false` |

