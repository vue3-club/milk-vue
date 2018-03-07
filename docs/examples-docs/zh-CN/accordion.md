<style>
.demo-button {
  .vm-button {
    margin: 10px 0;
    user-select: none;
    
    &-inline{
      margin-right:10px;
    }

    &--large,
    &--bottom-action {
      margin-bottom: 15px;
    }

    &--small,
    &--normal {
      margin-right: 10px;
    }
  }
  .demo-block{
    padding:0 15px;
  }
}
.zan-doc-demo-block .demo-block{
  padding: 0;
}
.demo-block .demo-content{
  padding: 15px;
}
</style>
<script>
export default {
  methods: {
    handleClick(e) {
        console.log(e);
    }
  }
}
</script>

## Accordion 手风琴

### 使用指南
``` javascript
import { Accordion, AccordionItem } from 'milk-vue';
Vue.component(Accordion.name, Accordion);
Vue.component(AccordionItem.name, AccordionItem);
```

### 代码演示

#### 基本样式

:::demo 基本样式
```html
<div class="demo-block">
    <v-accordion>
        <v-accordion-item label="Title1" active="true">
            <div slot="content" name="content">
                <v-list>
                    <v-list-item>
                        <div>Content1</div>
                    </v-list-item>
                    <v-list-item>
                        <div>Content2</div>
                    </v-list-item>
                    <v-list-item>
                        <div>Content3</div>
                    </v-list-item>
                </v-list>
            </div>
        </v-accordion-item>
        <v-accordion-item label="Title2">
            <div slot="content" name="content" class="demo-content">This is a content</div>
        </v-accordion-item>
        <v-accordion-item label="Title3">
            <div slot="content" name="content" class="demo-content">This is a content</div>
        </v-accordion-item>
    </v-accordion>
</div>
```
:::

#### 手风琴样式

:::demo 手风琴样式
```html
<div class="demo-block">
    <v-accordion accordion="true" @click="handleClick">
        <v-accordion-item label="Title1">
            <div slot="content" name="content">
                <v-list>
                    <v-list-item>
                        <div>Content1</div>
                    </v-list-item>
                    <v-list-item>
                        <div>Content2</div>
                    </v-list-item>
                    <v-list-item>
                        <div>Content3</div>
                    </v-list-item>
                </v-list>
            </div>
        </v-accordion-item>
        <v-accordion-item label="Title2">
            <div slot="content" name="content" class="demo-content">This is a content</div>
        </v-accordion-item>
        <v-accordion-item label="Title3">
            <div slot="content" name="content" class="demo-content">This is a content</div>
        </v-accordion-item>
    </v-accordion>
</div>
<script>
export default {
    methods: {
        handleClick(e) {
            console.log(e);
        }
    }
}
</script>
```
:::

### API

#### Accordion props

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| accordion | 手风琴模式 | `Boolean` | `false` | `false` `true` |

#### Accordion events 

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| click | 点击面板的回调 | 对应的item |

#### Accordion-item props

| 属性 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| label | 列表标题 | `String` | - | - |
| active | 是否展示面板 | `Boolean` | `false` | `false` `true` |