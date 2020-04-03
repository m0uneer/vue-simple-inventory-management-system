import Vue from 'vue';
import Vuex from 'vuex';

import inventoryMutations from '@/store/inventoryMutations';
import demoData from '@/store/demoData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: demoData,
  mutations: inventoryMutations,
});
