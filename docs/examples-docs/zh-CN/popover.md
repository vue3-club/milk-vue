<script>
import { Toast } from 'packages';
export default {
  data(){
    return {
      open:false,
      listData:["search","info-circle","question-circle"]
    }
  },
  methods:{
    clickToast:function(info){
      Toast.info(info);
      this.open=false;
    }
  }
}
</script>

## Popover 气泡

### 使用指南

```javascript
import { Popover } from 'milk-vue';
Vue.component(Popover.name, Popover);
```

### 代码演示

```javascript
import { Toast } from 'packages';
export default {
  data(){
    return {
      open:false,
      listData:["search","info-circle","question-circle"]
    }
  },
  methods:{
    clickToast:function(info){
      Toast.info(info);
      this.open=false;
    }
  }
}
```

:::demo 基本
```html
<v-nav-bar title="Popover">
    <v-popover slot="right" offset="10" :open="open">
        <v-icon type="ellipsis"></v-icon>
        <v-list slot="popover">
            <v-list-item
                v-for="(item,index) in listData"
                :key="index"
                :icon="item"
                v-close-popover
                @click="clickToast(item)"
            >
            {{item}}
            </v-list-item>
        </v-list>
    </v-popover>
</v-nav-bar>

<v-nav-bar title="Disabled" mode="light">
    <v-popover slot="right" offset="10" :open="open" disabled>
        <v-icon type="ellipsis"></v-icon>
        <v-list slot="popover">
            <v-list-item
                v-for="(item,index) in listData"
                :key="index"
                :icon="item"
                v-close-popover
                @click="clickToast(item)"
            >
            {{item}}
            </v-list-item>
        </v-list>
    </v-popover>
</v-nav-bar>
```
:::

### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| open | 是否默认显示气泡 | `Boolean` | `false` | `false` `true` |
| disable | 是否禁用 | `Boolean` | `false` | `false` `true` |
| offset | 偏移距离,单位px | `Number` | - | - |

更多 API 可查看 [v-tooltip](https://www.npmjs.com/package/v-tooltip)
