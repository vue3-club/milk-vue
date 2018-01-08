<style>
.demo-modal {
  .demo-block{
    padding:0 15px;
  }
  .m15{
    margin: 15px 0;
  }
}
</style>

<script>
  import { Modal, Input, List } from 'packages';

  export default {
    data () {
      return {
        visible: false,
        prompt: '123456'
      }
    },
    methods: { 
      modal (title = '', message, type = '') {
        if (!type || type === 'basic') {
          Modal({
            title,
            message,
            forbidClick: false
          }).then(() => {
            console.log('confirm')
          }).catch(() => {
            console.log('cancle')
          })
        } else {
          Modal[type]({
            title,
            message
          }).then(() => {
            console.log('confirm')
          }).catch(() => {
            console.log('cancle')
          })
        }
      },
      modalDiy () {
        Modal.confirm({
          title: '关闭',
          message: '确认关闭？',
          confirmText: '关闭'
        })
      },
      modalPropmt () {
        const vm = this;
        Modal.confirm({
          title: 'Title',
          message: 'Propmt message',
          promptRender: (h) => h('input', {class: 'propmt-input', on: {input: function (e) {vm.prompt = e.target.value}}}),
        }).then(() => {
          console.log(vm.prompt)
        })
      },
      modalBtns () {
        Modal.confirm({
          title: '提示',
          message: '多个按钮',
          btns: [{
            text: '按钮一',
            click: function () {
              console.log('按钮一')
            }
          }, {
            text: '按钮二',
            click: function () {
              console.log('按钮二')
            }
          }, {
            text: '按钮三',
            click: function () {
              console.log('按钮三')
            }
          }]
        })
      },
      popup () {
        Modal.popup({
          title: '详细信息',
          popupRender: h => h('v-list', [
            h('v-list-item', ['名称']),
            h('v-list-item', ['代码']),
            h('v-list-item', ['价格'])
          ])
        }).then(function () {
          console.log('confirm')
        })
      }
    },
    components: {
      Input,
      VModal: Modal
    }
  }
</script>


## Modal 对话框

在用户执行某些动作之后告知用户并承载相关操作

### 使用指南
``` javascript
import { Modal } from 'milk-vue';
```

### 代码演示

:::demo 
``` html
<div class="demo-block">
  <p class="m15">Alert</p>
  <v-button @click="modal('basic Modal', '这是内容')">Alert</v-button>
  <p class="m15">Confirm</p>
  <v-button @click="modal('关闭', '确认关闭？', 'confirm')">Confirm</v-button>
  <p class="m15">propmt</p>
  <v-button @click="modalPropmt">Propmt</v-button>
  <p class="m15">Popup</p>
  <v-button @click="popup">Popup</v-button>
  <p class="m15">自定义按钮文字</p>
  <v-button @click="modalDiy">自定义按钮文字</v-button>
  <p class="m15">多个按钮</p>
  <v-button @click="modalBtns">多个按钮</v-button>
</div>

```
:::

### 基础 Modal

``` js
Modal({
  title: 'Title',
  message: '这是内容'
})
```

### Confirm

``` js
Modal.confirm({
  title: '关闭',
  message: '确认关闭？'
})
```

### Propmt

``` js
const vm = this;
Modal.confirm({
  title: 'Title',
  message: 'Propmt message',
  promptRender: (h) => h('input', {class: 'propmt-input', on: {input: function (e) {vm.prompt = e.target.value}}}),
})
```

### Popup

``` js
Modal.popup({
  title: '详细信息',
  popupRender: h => h('v-list', [
    h('v-list-item', ['名称']),
    h('v-list-item', ['代码']),
    h('v-list-item', ['价格'])
  ])
}).then(function () {
  console.log('confirm')
})
```

### 自定义按钮文字

``` js
Modal.confirm({
  title: '关闭',
  message: '确认关闭？',
  confirmText: '关闭'
})
```

### 多个按钮

``` js
Modal.confirm({
  title: '提示',
  message: '多个按钮',
  btns: [{
    text: '按钮一',
    click: function () {
      console.log('按钮一')
    }
  }, {
    text: '按钮二',
    click: function () {
      console.log('按钮二')
    }
  }, {
    text: '按钮三',
    click: function () {
      console.log(按钮三)
    }
  }]
})
```

### 事件处理

内部使用Promise来处理confirm和cancle事件，confirm事件使用.then捕获，cancle事件使用.catch捕获，如果存在没有捕获的错误，会在控制台中提示。


``` js

Modal.confirm({
  title: '关闭',
  message: '确认关闭？',
  confirmText: '关闭'
}).then(() => {
  console.log('confirm')
}).catch(() => {
  console.log('cancle')
})
```

### Function

| 方法名 | 参数 | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Modal | `options` | Modal 实例 | 展示提示信息 |
| Modal.confirm | `options` | Modal 实例 | 展示confirm提示信息 |
| Modal.popup | `options` | Modal 实例 | 展示popup提示信息 |
| Modal.clear |  |  | 关闭提示 |


### API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `basic` | `basic` `confirm` `popup` |
| title | 标题 | `String` | `''` | - |
| message | 内容 | `String` | `''` | - |
| promptRender | 渲染Propmt对话框，只在Modal.confirm中使用 | `Function` | - | - |
| popupRender | 渲染Popup对话框，只在Modal.popup中使用 | `Function` | - | - |
| confirmText | 确认按钮文字 | `String` | `确定` | - |
| cancleText | 取消按钮文字 | `String` | `取消` | - |
| btns | 按钮组,用来创建多按钮 Modal | `Array` | - | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
