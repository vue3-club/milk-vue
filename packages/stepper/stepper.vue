<template>
  <div class="vm-stepper">
    <button class="vm-stepper-handle vm-stepper-handle-minus" :class="{'vm-stepper-minus-disabled': minusDisabled}" @click="onHandle('minus')" />
    <input 
      class="vm-stepper-input"
      :class="{'vm-stepper-input-disabled': disabled}" 
      :value="currentValue"
      :readonly="onlyRead" 
      @input="onInput"
    />
    <button class="vm-stepper-handle vm-stepper-handle-plus" :class="{'vm-stepper-plus-disabled': plusDisabled}" @click="onHandle('plus')" />
  </div>
</template>

<script>
  export default {
    name: 'VStepper',
    props: {
      min: {
        type: Number,
        default: -Infinity
      },
      max: {
        type: Number,
        default: Infinity
      },
      value: {
        type: Number
      },
      step: {
        type: Number,
        default: 1
      },
      defaultValue: {
        type: Number,
        default: 1
      },
      onChange: {
        type: Function
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      let current = this.value !== undefined ? this.value : this.defaultValue; 
      current = this.limit(current);

      if (current !== this.value) {
        this.$emit('input', current);
      }

      return {
        currentValue: current
      }
    },
    computed: {
      plusDisabled() {
        return this.disabled || (this.currentValue + this.step > this.max);    
      },
      minusDisabled() {
        return this.disabled || (this.currentValue - this.step < this.min);        
      },
      onlyRead() {
        return this.disabled || this.readonly;
      }
    },
    watch: {
      currentValue(newValue) {
        this.$emit('input', newValue);
        this.onChange && this.onChange(newValue);
      }
    },
    methods: {
      limit(value) {
        value = Math.max(value, this.min);
        value = Math.min(value, this.max);
        return value;
      },
      onInput(ev) {
        let value = Number(ev.target.value);
        this.currentValue= this.limit(value);
      },
      onHandle(flag) {
        if (flag === 'plus' && !this.plusDisabled) this.currentValue+= this.step;
        if (flag === 'minus' && !this.minusDisabled) this.currentValue-= this.step;
      }
    }
  };
</script>
