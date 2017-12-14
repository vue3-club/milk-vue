import VCheckBox from './checkbox.vue';
import VItem from './item.vue';
import VAgree from './agree.vue';
import Vue from 'vue';

Vue.component(VItem.name, VItem);
Vue.component(VAgree.name, VAgree);

VCheckBox.item = VItem;
VCheckBox.agree = VAgree;

export default VCheckBox;
