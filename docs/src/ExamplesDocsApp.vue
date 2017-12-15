<template>
  <div class="app">
    <zan-doc :simulator="simulator" :config="config" :base="base">
      <router-view></router-view>
    </zan-doc>
  </div>
</template>

<script>
  import docConfig from './doc.config';
  import { getLang } from './utils/lang';

  export default {
    data() {
      if (window.location.host === 'www.youzanyun.com') {
        const group = docConfig['zh-CN'].nav[0].groups[0];
        group.list = group.list.filter(item => item.title !== '业务组件');
      }

      const hash = window.location.hash;

      return {
        simulator: `${window.location.pathname}examples.html/examples.html${hash}`,
        lang: getLang()
      };
    },
    mounted() {
      document.querySelector('.zan-doc-header__logo').innerHTML = ''; 
    },
    computed: {
      base() {
        return `/${this.lang}/component`;
      },

      config() {
        return docConfig[this.lang];
      }
    },

    watch: {
      '$route'(to) {
        this.lang = to.meta.lang;
      }
    }
  };
</script>

<style lang="less">
  .zan-doc {
    background-image: linear-gradient(0deg, #061a2a, #fff);
    .zan-doc-header__logo{
      background-image: url(http://ooaa8syjw.bkt.clouddn.com/FgNkalCgxgLkf5-9M8hqW0AXg9SA)
    }
    .zan-doc-content--quickstart {
      h3:not(:first-of-type) {
        margin-top: 35px;
      }
    }

    code {
      word-break: normal;
    }
  }

</style>
