<template>
  <div class="vm-share">
    <div class="vm-share-btn" @click="handleClick">分享</div>
    <ul class="vm-share-list" v-if="shareVisible">
      <li class="vm-share-item" v-if="item.key !== 'wx'" :style="generateAnimation(index)" v-for="(item, index) in shareList">
        <a :href="formatterLink(item)" target="_blank">{{item.title}}</a>
      </li>
      <li class="vm-share-item" v-if="item.key === 'wx'" :style="generateAnimation(index)" v-for="(item, index) in shareList" @click="handlerWXShow">
        <a :href="formatterLink(item)" target="_blank">{{item.title}}</a>
      </li>
    </ul>
    <div class="vm-share-qrcode" @click="handlerWXHide" v-if="qrcodeVisible">
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
    var x = 120 * Math.cos(radius);
    var y = 120 * Math.sin(radius);
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
import QrcodeVue from 'qrcode.vue';
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
    }
  },
  data() {
    return {
      isOpen: false,
      shareVisible: false,
      wxUrl: '',
      qrcodeVisible: false
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
      switch (item.key) {
        case 'wb':
          return `http://service.weibo.com/share/share.php?url=${url}&title=${title}&pic=${image}`;
          break;
        case 'douban':
          return `http://shuo.douban.com/!service/share?href=${url}&name=${title}&text=${description}&image=${image}&starid=0&aid=0&style=11`;
          break;
        break;
        case 'qq':
        return `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${site}&desc=${description}&pics=${image}`;
        default: return 'javascript:;';
      }
    },
    handlerWXShow() {
      this.qrcodeVisible = true;
    },
    handlerWXHide() {
      this.qrcodeVisible = false;
    }
  },
  mounted() {
    setTimeout(() => {
      generateKeyFrames(this.shareList.length);
      this.wxUrl = window.location.href;
    }, 0);
  },
  components: {
    QrcodeVue
  }
};
</script>
