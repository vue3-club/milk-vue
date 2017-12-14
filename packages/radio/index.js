import VRadio from './radio';
import VRadioItem from './item.vue';
import Vue from 'vue';

Vue.component(VRadioItem.name, VRadioItem);

VRadio.item = VRadioItem;

export default VRadio;
