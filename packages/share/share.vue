<template>
  <div :class="[className, `${prefixCls}`]">
    <div :class="`${className}-btn`" class="vm-share-btn"  @click="handleClick" v-if="type === 'bloom'">分享</div>
    <ul :class="`${className}-list`" v-if="shareVisible">
      <li :class="`${className}-item`" v-if="item.key !== 'wx'" :style="generateAnimation(index)" v-for="(item, index) in shareList">
        <a :class="`${prefixCls}-link`" :href="formatterLink(item)" :style="borderColor(item.key)" target="_blank"><v-icon :type="item.key" :color="colorMap[item.key]"></v-icon></a>
      </li>
      <li :class="`${className}-item`" v-if="item.key === 'wx'" :style="generateAnimation(index)" v-for="(item, index) in shareList" @click="handlerWXShow">
        <a :class="`${prefixCls}-link`" :href="formatterLink(item)" :style="borderColor(item.key)" target="_blank"><v-icon :type="item.key" :color="colorMap[item.key]"></v-icon></a>
      </li>
    </ul>
    <div :class="`${className}-qrcode`" @click="handlerWXHide" v-if="qrcodeVisible">
      <div class="qrcode">
        <div class="qrcode-title">
          <h3>打开微信扫一扫</h3>
          <h3>分享到朋友圈</h3>
        </div>
        <QrcodeVue :value="wxUrl" />
      </div>
    </div>
  </div>
</template>
<script>

function generateKeyFrames(len) {
  const startAngle = 180;
  const endAngle = 270;
  const anguleStep = (endAngle - startAngle) / (len - 1);
  let keyFrames = '';
  for (var i = 0; i < len; i++) {
    var angleCur = startAngle + anguleStep * i;
    var radius = angleCur * (Math.PI / 180);
    var x = 80 * Math.cos(radius);
    var y = 80 * Math.sin(radius);
    var x2 = Number(x.toFixed(2));
    var y2 = Number(y.toFixed(2));
    var x1 = x2 * 1.2;
    var y1 = y2 * 1.2;
    keyFrames += `@keyframes show-${i} {
      0% {
        transform: translate(0px, 0px)
      }
      70% {
        transform: translate(${x1}px, ${y1}px)
      }
      100% {
        transform: translate(${x2}px, ${y2}px)
      }
    }\n@keyFrames hide-${i} {
      from {
        transform: translate(${x2}px, ${y2}px)
      }
      to {
        transform: translate(0px, 0px)
      }
    }\n`;
  }
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = keyFrames;
  document.head.appendChild(style);
}

function getMetaContentByName(name) {
  return (document.getElementsByName(name)[0] || 0).content;
}

const prefixCls = 'vm-share';

import QrcodeVue from 'qrcode.vue';
import Icon from '../icon';
export default {
  name: 'VShare',
  props: {
    shareList: {
      type: Array,
      default() {
        return [{
          key: 'wx',
          title: '微信'
        }, {
          key: 'wb',
          title: '微博'
        }, {
          key: 'qq',
          title: 'QQ'
        }, {
          key: 'douban',
          title: '豆瓣'
        }];
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefixCls,
      isOpen: false,
      shareVisible: false,
      wxUrl: '',
      qrcodeVisible: false,
      isInit: true,
      colorMap: {
        'wx': '#7bc549',
        'wb': '#ff763b',
        'qq': '#56b6e7',
        'twb': '#56b6e7',
        'facebook': '#44619D',
        'google': '#db4437',
        'linked': '#0077B5',
        'twitter': '#55acee',
        'douban': '#33b045',
        'qzone': '#FDBE3D'
      }
    };
  },
  methods: {
    handleClick() {
      if (!this.shareVisible && !this.isOpen) {
        this.shareVisible = true;
      }
      this.isOpen = !this.isOpen;
    },
    generateAnimation(index) {
      const delay = 0.04 * index;
      if (this.type !== 'bloom') {
        return ''
      }
      return {
        'animation-name': this.isOpen ? `show-${index}` : `hide-${index}`,
        'animation-delay': `${delay}s`,
        'animation-fill-mode': this.isOpen ? 'forwards' : 'backwards'
      };
    },
    formatterLink(item) {
      const image = (document.images[0] || 0).src || '';
      const title = getMetaContentByName('title') || getMetaContentByName('Title') || document.title;
      const description = getMetaContentByName('description') || getMetaContentByName('Description') || '';
      const site = getMetaContentByName('site') || getMetaContentByName('Site') || document.title;
      const url = window.location.href;
      const defaultOptions = {
        'wb': `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${image}`,
        'douban': `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`,
        'qq': `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${site}&desc=${description}&pics=${image}`,
        'wx': 'javascript:;'
      }
      return defaultOptions[item.key]
    },
    handlerWXShow() {
      this.qrcodeVisible = true;
    },
    handlerWXHide() {
      this.qrcodeVisible = false;
    },
    borderColor (key) {
      return{
        'border-color': this.colorMap[key]
      }
    }
  },
  mounted() {
    if (this.type !== 'bloom') {
      this.shareVisible = true
    }
    setTimeout(() => {
      if (this.shareList.length <= 4 && this.type === 'bloom') {
        generateKeyFrames(this.shareList.length);
      }
      this.wxUrl = window.location.href;
    }, 0);
  },
  computed: {
    className () {
      return this.type === 'bloom' ? `${prefixCls}-bloom` : `${prefixCls}-default`
    }
  },
  components: {
    QrcodeVue,
    [Icon.name]: Icon
  }
};
</script>
