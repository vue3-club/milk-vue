<style>
	.demo-gap {
		height: 15px;
		width: 100%;
	}
</style>
<script>
	import { Toast } from 'packages';
	export default {
		data() {
			return {
				paneStyle: "display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);",
				style: "background-color: pink;"
			}
		},
		methods: {
			handleTabClick(tab, event) {
				Toast.info(tab);
			}
		}
	}
</script>
## Tabs 标签页

### 使用指南

```javascript
import { VTabs } from 'milk-vue';
import { VTabPane } from 'milk-vue';
Vue.component(VTabs.name, VTabs);
Vue.component(VTabPane.name, VTabPane)
```

### 代码演示

```javascript
import { Toast } from 'packages';
```

#### 基本用法

默认情况下启用第一个 tab，可以通过value属性激活对应特定索引的 tab,
value 与 TabPane 的 name 对应, 默认激活第一项。

:::demo 基本用法
```html
<v-tabs value="first">
  <v-tab-pane label="first page" name="first" :pane-style="paneStyle">First</v-tab-pane>
  <v-tab-pane label="second page" name="second" :pane-style="paneStyle">Second</v-tab-pane>
  <v-tab-pane label="third page" name="third" :pane-style="paneStyle">Third</v-tab-pane>
</v-tabs>

<script>
  export default {
    data() {
      return {
        paneStyle: "display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);"
      }
    }
  }
</script>
```
:::
#### 无动画
通过设置属性 animated 为 false 可以禁用动画

:::demo 无动画
```html
<v-tabs value="first" :animated="false">
  <v-tab-pane label="first page" name="first" :pane-style="paneStyle">First</v-tab-pane>
  <v-tab-pane label="second page" name="second" :pane-style="paneStyle">Second</v-tab-pane>
  <v-tab-pane label="third page" name="third" :pane-style="paneStyle">Third</v-tab-pane>
</v-tabs>
```
:::
#### 设置样式

:::demo 设置样式
```html
<v-tabs value="first" :tab-bar-style="style" @click="handleTabClick">
  <v-tab-pane label="first page" name="first" :pane-style="paneStyle">First</v-tab-pane>
  <v-tab-pane label="second page" name="second" :pane-style="paneStyle">Second</v-tab-pane>
  <v-tab-pane label="third page" name="third" :pane-style="paneStyle">Third</v-tab-pane>
</v-tabs>
<script>
  export default {
    data() {
      return {
        paneStyle: "display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);"，
        style: 'background-color: pink;'
      }
    },
    methods: {
      handleTabClick(tab, event) {
        Toast.info(tab);
      }
    }
  }
</script>
```
:::

### API
#### Tabs props 

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| value | 绑定值，选中选项卡的 name | `String` | 默认为第一项的 name | - |
| tab-bar-style | 选项卡样式 | `String` | - | - |
| animated | 是否使用 CSS3 动画 | `Boolean` | true | - |

#### Tabs events 

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | tab点击事件 | tab: 点击的tab的name|

#### Tab-pane Attributes

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| label | 选项卡标题 | `String` | - | - |
| name | 绑定值，表示选项卡别名 | `String` | - | - |
| pane-style | 选项卡样式 | `String` | - | - |