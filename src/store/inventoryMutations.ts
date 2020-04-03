import { InventoryMutationsTypes } from '@/models/inventoryMutationsTypes';
import { Item } from '@/models/item';

export default {
  [InventoryMutationsTypes.ADD_ITEM]({ inventory }: { inventory: Item[] }, addedItem: Item) {
    const imsItem = inventory
      .find(({ name, value }) => addedItem.name === name && addedItem.value === value);

    if (imsItem) {
      imsItem.quantity += addedItem.quantity;

      return;
    }

    inventory.push(addedItem);
  },
  [InventoryMutationsTypes.PURCHASE_ITEM]({ inventory }: { inventory: Item[] }, purchItem: Item) {
    const imsIndex = inventory
      .findIndex(({ name, value }) => purchItem.name === name && purchItem.value === value);

    const imsItem = inventory[imsIndex];
    imsItem.quantity -= purchItem.quantity;

    if (imsItem.quantity === 0) {
      inventory.splice(imsIndex, 1);
    }
  },
  [InventoryMutationsTypes.RETURN_ITEM]({ inventory }: { inventory: Item[] }, returnedItem: Item) {
    this[InventoryMutationsTypes.ADD_ITEM]({ inventory }, returnedItem);
  },
};
