<template>
  <div :class="wrapClass">
    <div :class="flexClass" v-for="(file, index) in files">
      <div :class="itemClass"
           @click.self="onClick(index)"
           :style="{ backgroundImage: `url(${file.url})` }">
        <div :class="itemRemoveClass"
             v-if="removeable"
             @click="removeImage(index)">
          <v-icon type="cross-circle-o" color="#f00" size="xs"></v-icon>
        </div>
      </div>
    </div>
    <div :class="flexClass" v-if="selectable">
      <div :class="uploadClass">
        <input type="file" accept="image/*" @change="uploadHandle" v-if="multiple" multiple>
        <input type="file" accept="image/*" @change="uploadHandle" v-else="multiple">
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon';

  const prefixCls = 'vm-image-picker';

  export default {
    name: 'VImagePicker',
    components: { Icon },
    props: {
      files: Array,
      multiple: {
        type: Boolean,
        default: false
      },
      selectable: {
        type: Boolean,
        default: true
      },
      removeable: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      wrapClass() {
        return `${prefixCls}-wrap`;
      },
      flexClass() {
        return `${prefixCls}-flexbox`;
      },
      itemClass() {
        return `${prefixCls}-item`;
      },
      itemRemoveClass() {
        return `${prefixCls}-item-remove`;
      },
      uploadClass() {
        return [
          this.itemClass,
          `${prefixCls}-upload-btn`
        ];
      }
    },
    methods: {
      // 移除图片
      removeImage(index) {
        this.files.splice(index, 1);
        this.$emit('change', this.files, 'remove', index);
      },
      // 回显图片
      uploadHandle(e) {
        try {
          const files = Array.from(e.target.files);
          files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.files.push({
                url: reader.result
              });
            };
          });
          this.$emit('change', this.files, 'append');
          e.currentTarget.value = null // 每次上传重置input的值 便于触发onchange事件
        } catch (e) {
          this.$emit('fail', e);
        }
      },
      // 触发图片点击事件
      onClick(index) {
        this.$emit('image-click', index);
      }
    }
  };
</script>
