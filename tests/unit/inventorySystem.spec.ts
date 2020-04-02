import { shallowMount } from '@vue/test-utils';
import InventorySystem from '@/components/InventorySystem.vue';

describe('InventorySystem.vue', () => {
  it('works', () => {
    const wrapper = shallowMount(InventorySystem);
    expect(wrapper.exists()).toBeTruthy();
  });
});
