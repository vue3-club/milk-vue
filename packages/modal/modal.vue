<template>
  <transition name="vm-modal-fade">
    <div class="vm-modal" v-if="value">
      <div class="vm-modal-wrapper">
        <div class="vm-modal-mask" v-if="mask" @click="!forbidClick && handleAction('cancle')"></div>
        <div class="vm-modal-content">
          <div class="vm-modal-header">
            <div class="vm-modal-title" v-html="title"></div>
            <!-- type="basic" -->
            <template v-if="type === 'basic'">
              <div class="vm-modal-close" @click="handleAction('cancle')">
                <v-icon type="cross" size="lg" />
              </div>
            </template>
          </div>
          <div :class="['vm-modal-body', `vm-modal-body-${type}`]">
            <div class="vm-modal-message" v-html="message"></div>
            <!-- prompt -->
            <template v-if="promptRender">
              <div class="vm-modal-propmt">
                <render :render="promptRender"></render>
              </div>
            </template>

          </div>
          <!-- 多个按钮 -->
          <template v-if="btns && btns.length > 0">
            <div class="vm-modal-footer-btns">
              <v-button v-for="(btn, index) in btns" :key="index" :class="['vm-modal-btn', `vm-modal-btn-mult`,'btn-confirm']" @click="handleMultipleBtns(btn)">{{btn.text}}</v-button>
            </div>
          </template>

          <template v-else>
            <div :class="['vm-modal-footer', `vm-modal-footer-${type}`]">
              <v-button v-if="type !== 'basic'" :class="['vm-modal-btn', `vm-modal-btn-${type}`,'btn-close']" @click="handleAction('cancle')">{{cancleText || '取消' }}</v-button>
              <v-button :class="['vm-modal-btn', `vm-modal-btn-${type}`,'btn-confirm']" @click="handleAction('confirm')">{{confirmText || '确定'}}</v-button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import render from './render';
  import Icon from '../icon';
  import Button from '../button';

  export default {
    name: 'VModal',
    props: {
      title: String,
      value: Boolean,
      mask: {
        type: Boolean,
        default: true
      },
      forbidClick: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'basic'
      },
      message: {
        type: String
      },
      callback: {
        type: Function
      },
      promptRender: null,
      confirmText: String,
      cancleText: String,
      btns: Array
    },
    methods: {
      handleAction(action) {
        this.$emit('input', false);
        this.$emit(action);
        this.callback && this.callback(action);
      },
      handleMultipleBtns(btn) {
        btn.click();
        this.handleAction('confirm');
      }
    },
    components: {
      render,
      [Icon.name]: Icon,
      [Button.name]: Button
    }
  };
</script>