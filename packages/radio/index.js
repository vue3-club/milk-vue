import VRadio from './radio.vue';
import VRadioItem from './item.vue';
import Vue from 'vue';

Vue.component(VRadioItem.name, VRadioItem);

VRadio.item = VRadioItem;

export default VRadio;
