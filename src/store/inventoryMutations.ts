import { InventoryMutationsTypes } from '@/models/inventoryMutationsTypes';
import { Item } from '@/models/item';
import demoData from '@/store/demoData';

function addItem({ inventory }: { inventory: Item[] }, addedItem: Item) {
  const imsItem = inventory
    .find(({ name, value }) => addedItem.name === name && addedItem.value === value);

  if (imsItem) {
    imsItem.quantity += addedItem.quantity;

    return;
  }

  inventory.push(addedItem);
}

export default {
  [InventoryMutationsTypes.ADD_ITEM]: addItem,
  [InventoryMutationsTypes.RETURN_ITEM]: addItem,
  [InventoryMutationsTypes.PURCHASE_ITEM]({ inventory }: { inventory: Item[] }, purchItem: Item) {
    const imsIndex = inventory
      .findIndex(({ name, value }) => purchItem.name === name && purchItem.value === value);

    const imsItem = inventory[imsIndex];
    imsItem.quantity -= purchItem.quantity;

    if (imsItem.quantity === 0) {
      inventory.splice(imsIndex, 1);
    }
  },
  [InventoryMutationsTypes.RESET_INVENTORY](store: { inventory: Item[] }) {
    store.inventory.splice(0, store.inventory.length);

    // Clone the data to avoid updating its item references an to be able to reset
    store.inventory.push(...JSON.parse(JSON.stringify(demoData)));
  },
};
