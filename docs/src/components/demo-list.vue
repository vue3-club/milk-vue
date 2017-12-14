<template>
  <div class="side-nav">
    <h1 class="zanui-title">Zan UI</h1>
    <h2 class="zanui-desc">Vue中文社区 MILk-UI</h2>
    <div class="mobile-navs">
      <div class="mobile-nav-item" v-for="(item, index) in navList" v-if="item.showInMobile" :key="index">
        <mobile-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import docConfig from '../doc.config';
  import MobileNav from './mobile-nav';
  import {getLang} from '../utils/lang';

  export default {
    data() {
      return {
        docConfig,
        lang: getLang()
      };
    },

    beforeRouteEnter(to, from, next) {
      next(vm => vm.lang = to.meta.lang);
    },

    beforeRouteUpdate(to, from, next) {
      this.lang = to.meta.lang;
    },

    components: {
      MobileNav
    },

    computed: {
      base() {
        return `${this.lang}/component`;
      },

      navList() {
        return this.docConfig[this.lang].nav || [];
      }
    }
  };
</script>

<style lang="less">
  .side-nav {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 15px 20px;
    position: relative;
    z-index: 1;

    .zanui-title,
    .zanui-desc {
      text-align: center;
      font-weight: normal;
      user-select: none;
    }

    .zanui-title {
      padding-top: 40px;
      height: 0;
      overflow: hidden;
      background: url(http://ooaa8syjw.bkt.clouddn.com/FgNkalCgxgLkf5-9M8hqW0AXg9SA) center center no-repeat;
      background-size: 50%;
      margin: 0 0 10px;
    }

    .zanui-desc {
      font-size: 14px;
      color: #666;
      margin: 0 0 30px;
    }
  }
</style>
