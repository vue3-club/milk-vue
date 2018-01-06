<style>
.show-info {
  margin-top: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.show-info .progress {
  margin-right: 5px;
  width: 100%;
}

</style>
<script>
export default {
  data(){
    return {
      percent: 40
    }
  },
  methods:{
    add() {
      if(this.percent >= 100) {
        this.percent = 0
      }else {
        this.percent += 10
      }
    }
  }
}
</script>

## Pregress 进度条

### 使用指南

```javascript
import { Progress } from 'milk-vue';
Vue.component(Progress.name, Progress);
```

### 代码演示

```javascript
export default {
  data(){
    return {
      percent: 40
    }
  },
  methods:{
    add() {
      if(this.percent >= 100) {
        this.percent = 0
      }else {
        this.percent += 10
      }
    }
  }
}
```

:::demo 基本
```html
<v-progress :percent="30" :position="'fixed'"></v-progress>

<v-progress :percent="40" :position="'normal'" :unfilled="false"></v-progress>
<div class="show-info">
  <div class="progress">
    <v-progress :percent="percent" :position="'normal'"></v-progress>
  </div>
  <div aria-hidden="true">{{percent}}%</div>
</div>
<v-button @click=add>(+-)10</v-button>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| percent | 进度条百分比 | `Number` | `0` | - |
| position | 进度条的位置，fixed 将浮出固定在最顶层，可选: fixed normal | `String` | `fixed` | `fixed` `normal` |
| unfilled | 是否显示未填充轨道 | `Boolean` | `true` | `true` `false` |
