## Milk
基于`Vue 2.0`的 Mobile 组件库

### 安装

```shell
npm i milk-vue --save-dev
```

### CDN

[https://unpkg.com/milk-vue/lib/milk-vue.min.js](https://unpkg.com/milk-vue/lib/milk-vue.min.js)

``` shell
https://unpkg.com/milk-vue/lib/milk-vue.min.js
```


我们建议使用 CDN 引入 Milk 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。

### Hello Milk (Example)

通过 CDN 的方式我们可以很容易地使用 Milk 写出一个 Hello Milk 页面

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <div id="app">
    <v-button type="primary">Hello Milk!</v-button>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- 引入组件库 -->
 <script src="https://unpkg.com/milk-vue/lib/milk-vue.min.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</html>
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
{
  "plugins": [
    ["import", { "libraryName": "milk-vue", "style": true }]
  ]
}
```

接着你可以在代码中直接引入 Milk 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'milk-vue';
```

#### 方式二. 按需引入组件

```js
import { Button } from 'milk-vue/lib/button';
import 'milk-vue/lib/milk-vue-css/button.css';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Milk from 'milk-vue';
import 'milk-vue/lib/milk-vue/index.css';

Vue.use(Milk);
```

### vue-cli 模板
可以使用`vue-cli`来初始化`milk-vue`的通用模板：

