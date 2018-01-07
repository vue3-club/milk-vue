/* eslint-disable */
module.exports = {
  'zh-CN': {
    header: {
      '首页': 'https://www.vue-js.com',
      '移动端': '#',
      'English': '#/en-US/'
    },
    footer: {
      github: 'https://github.com/vueClub/vmu',
      nav: {
        'VUE官网': 'https://cn.vuejs.org',
        'VUE中文社区': 'https://vue-js.com/',
        '加入我们': 'https://github.com/vueClub/vmu',
        '意见反馈': 'https://github.com/vueClub/vmu/issues'
      }
    },
    logo: 'https://vue-js.com/public/images/vue.png',
    title: 'MILK',
    nav: [{
        'name': '开发指南',
        'groups': [{
          'list': [{
              'path': '/quickstart',
              'title': '快速上手',
              noExample: true
            },
            // {
            //   'title': '业务组件',
            //   'link': '/zanui/captain/component/quickstart'
            // },
            {
              'path': '/changelog',
              'title': '更新日志',
              noExample: true
            }
          ]
        }]
      },
      {
        'name': '组件',
        'showInMobile': true,
        'groups': [{
          'groupName': '基础组件',
          'list': [{
              'path': '/layout',
              'title': 'Layout - 布局'
            },
            {
              'path': '/icon',
              'title': 'Icon - 图标'
            },
            {
              'path': '/button',
              'title': 'Button - 按钮'
            },
            {
              'path': '/list',
              'title': 'List - 列表'
            },
            {
              'path': '/nav-bar',
              'title': 'NavBar - 导航栏'
            },
            {
              'path': '/drawer',
              'title': 'Drawer - 抽屉'
            },
            {
              'path': '/menu',
              'title': 'Menu - 菜单'
            },
            {
              'path': '/switch',
              'title': 'Switch - 滑动开关'
            },
            {
              'path': '/popover',
              'title': 'Popover - 气泡'
            }
          ]
        }, {
          'groupName': '表单',
          'list': [{
              'path': '/input',
              'title': 'Input - 输入框'
            },
            {
              'path': '/textarea',
              'title': 'Textarea - 多行输入'
            },
            {
              'path': '/radio',
              'title': 'Radio - 单选框'
            },
            {
              'path': '/checkbox',
              'title': 'Checkbox - 复选框'
            },
          ]
        }, {
          'groupName': '操作反溃',
          'list': [{
            'path': '/toast',
            'title': 'Toast - 轻提示'
          }, ]
        }, {
          'groupName': '手势',
          'list': [{
            'path': '/swipeaction',
            'title': 'SwipeAction - 滑动操作'
          }, ]
        }]
      }
    ]
  }

};
