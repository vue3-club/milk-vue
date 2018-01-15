<style>

</style>
<script>
export default {
  methods:{
    cancelBtn () {
      console.log('cancel');
    },
    replyBtn () {
      console.log('reply');
    },
    deleteBtn () {
      console.log('delete');
    },
    openCb () {
      console.log('open');
    },
    closeCb () {
      console.log('close');
    }
  }
}
</script>
## SwipeAction 滑动操作

### 使用指南
``` javascript
import { Swipeaction } from 'milk-vue';
Vue.component(Swipeaction.name, Swipeaction);
```

### 代码演示

:::demo 基本
```html
<v-list>
  <v-swipe-action
    auto-Close
    :style="{ backgroundColor: 'gray' }"
    :left="[
      {
        text: 'Reply',
        onPress: replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ]"
    :right="[
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ]"
    :on-Open="openCb"
    :on-Close="closeCb"
  >
    <v-list-item arrow="horizontal">
      <div>Have left and right buttons</div>
      <div slot="extra">More</div>
    </v-list-item>
  </v-swipe-action>
  <v-swipe-action
    :auto-Close="false"
    :style="{ backgroundColor: 'gray' }"
    :left="[
      {
        text: 'Reply',
        onPress: replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ]"
    :right="[
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ]"
    :on-Open="openCb"
    :on-Close="closeCb"
  >
    <v-list-item arrow="horizontal">
      <div>Disable auto close</div>
      <div slot="extra">More</div>
    </v-list-item>
  </v-swipe-action>
  <v-swipe-action
    auto-Close
    :style="{ backgroundColor: 'gray' }"
    :left="[
      {
        text: 'Reply',
        onPress: replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ]"
    :on-Open="openCb"
    :on-Close="closeCb"
  >
    <v-list-item arrow="horizontal">
      <div>Only left buttons</div>
      <div slot="extra">More</div>
    </v-list-item>
  </v-swipe-action>
  <v-swipe-action
    auto-Close
    :style="{ backgroundColor: 'gray' }"
    :right="[
      {
        text: 'Cancel',
        onPress: cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ]"
    :on-Open="openCb"
    :on-Close="closeCb"
  >
    <v-list-item arrow="horizontal">
      <div>Only right buttons</div>
      <div slot="extra">More</div>
    </v-list-item>
  </v-swipe-action>
</v-list>
```
:::

### SwipeAction

| 属性       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| style | swipeout样式 | `Object`  |  |
| left | 左侧按钮组 | `Array`  | `null` |
| right | 右侧按钮组 | `Array`  | `null` |
| autoClose | 点击按钮后自动隐藏按钮 | `Boolean`  |  `false`  |
| onOpen | 打开时回调函数 | `(): void`  |  `function() {}`  |
| onClose | 关闭时回调函数 | `(): void`  |  `function() {}`  |

### Button

| 参数       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| text | 按钮文案 | `String`  |  |
| style | 按钮样式 | `Object`  |  |
| onPress | 按钮点击事件 | `(): void`  | `function() {}` |