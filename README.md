## 工作区划分

- packages 组件位置
- /docs/examples-docs/zh-CN  文档位置
- /docs/examples-dist/zh-CN  根据.md文档生成.vue文件 (目前要手动新建一个对应的空.vue文件, 如你在docs/examples-docs/zh-CN下有一个button.md 文件， 那么需要手动在/docs/examples-dist/zh-CN 新建一个空的button.vue)
- /docs/src/doc.config.js 文档基本配置,如添加一个组件，需先在config.js 增加对应的配置
