import Vue from 'vue';
import Vuex from 'vuex';

import inventoryMutations from '@/store/inventoryMutations';
import demoData from '@/store/demoData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Clone the data to avoid updating its item references an to be able to reset
    inventory: JSON.parse(JSON.stringify(demoData)),
  },
  mutations: inventoryMutations,
  getters: {
    inventory(state) {
      return state.inventory;
    },
  },
});
