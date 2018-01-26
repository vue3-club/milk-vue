<style>

</style>
<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      height: document.documentElement.clientHeight,
      refreshing: false,
      down: true
    }
  },
  methods: {
    toggle () {
      this.down = !this.down;
    }
  }
}
</script>
## PullToRefresh 拉动刷新

### 使用指南
```javascript
import { Pulltorefresh } from 'milk-vue';
Vue.component(Pulltorefresh.name, Pulltorefresh);
```

### 代码演示

:::demo
```html
<v-button @click="toggle">{{ down ? 'down' : 'up' }}</v-button>
<v-pull-to-refresh
  :style="{ height: height, overflow: 'auto' }"
  :refreshing="refreshing"
  :direction="down ? 'down' : 'up'"
  :indicator="down ? {} : { deactivate: '上拉可以刷新' }"
>
  <div 
    v-for="(item, index) in list" 
    :style="{ textAlign: 'center', padding: '20px' }" 
    :key="item"
  >
    {{ down ? 'pull down' : 'pull up' }} {{index}}
  </div>
</v-pull-to-refresh>
```
:::

### API

| 属性       | 说明      | 类型       | 默认值       |
|-----------|-----------|-----------|-------------|
| direction | 拉动方向可以是`up`或`down` | `String`  | `down` |
| distanceToRefresh | 刷新距离 | `number`  | 25 |
| refreshing | 是否显示刷新状态 | `bool`  | `false` |
| onRefresh | 刷新回调函数 | `(): void`  |    |
| indicator | 指示器配置 | `Object`  |    |