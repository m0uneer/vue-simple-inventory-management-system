import { shallowMount } from '@vue/test-utils';

import InventorySystem from '@/components/InventorySystem.vue';

describe('InventorySystem', () => {
  it('works', () => {
    const wrapper = shallowMount(InventorySystem);
    expect(wrapper.exists()).toBeTruthy();
  });
});
