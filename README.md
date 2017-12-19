
<h1 align="center">
  <img src="http://ooaa8syjw.bkt.clouddn.com/FgNkalCgxgLkf5-9M8hqW0AXg9SA" width="150" height="50">
</h1>
<p align="center">
  <img src="https://travis-ci.org/vueClub/milk-vue.svg?branch=master">
  <img alt="logo" src="https://img.shields.io/npm/v/milk-vue.svg">
  <img alt="logo" src="https://img.shields.io/npm/l/milk-vue.svg">
</p>
<p align="center">
  <img src="http://ooaa8syjw.bkt.clouddn.com/Fjz8Y1gtJzT77XyF0mBkYAL75s8l" width="100" height="100">
</p>

## Docs
[中文版](https://vueclub.github.io/milk-vue/#/)

## Install

```shell
npm i milk-vue
```

## Quickstart

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
{
  "plugins": [
    ["import", { "libraryName": "milk-vue", "style": true }]
  ]
}
```

Then you can import components from vant, equivalent to import manually below.

```js
import { Button } from 'milk-vue';
```

#### 2. Manually import

```js
import { Button } from 'milk-vue/lib/button';
```

#### 3. Import all components

```js
import Vue from 'vue';
import Milk from 'milk-vue';
import 'milk-vue/lib/milk-css/index.css';

Vue.use(Milk);
```

## Contribution

Please make sure to read the [Contributing Guide](./.github/CONTRIBUTING.md) before making a pull request.

## Thanks

+ [Vue](https://github.com/vuejs/vue)
+ [WeUI](https://github.com/weui/weui)
+ [Ant Design Mobile](http://github.com/ant-design/ant-design-mobile)


## LICENSE

[MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)


