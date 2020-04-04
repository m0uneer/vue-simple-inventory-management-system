import inventoryMutations from '@/store/inventoryMutations';
import demoData from '@/store/demoData';
import { InventoryMutationsTypes } from '@/models/inventoryMutationsTypes';
import { Item } from '@/models/item';

let state: { inventory: Item[] };
beforeEach(() => {
  state = {
    inventory: JSON.parse(JSON.stringify(demoData)),
  };
});

describe('Adding items to the inventory / Returning items to the inventory', () => {
  it('should add items as the last one if no items with same name and value exist', () => {
    const newItem = {
      name: 'Item F',
      value: 2,
      quantity: 2,
    };

    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, newItem);

    expect(state.inventory.pop()).toBe(newItem);
  });

  it('should combine quantities if the value of the added item equals value of an item with same name', () => {
    const newItem = {
      name: 'Item A',
      value: 2,
      quantity: 3,
    };

    const oldLength = state.inventory.length;
    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, newItem);

    expect(state.inventory.length).toBe(oldLength);
    expect(state.inventory).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: newItem.name,
          value: newItem.value,
          quantity: 5,
        }),
      ]),
    );
  });

  it('should add new item as the last one if the value of the added item does not equals value of an item with same name', () => {
    const newItem = {
      name: 'Item A',
      value: 3,
      quantity: 2,
    };

    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, newItem);

    expect(state.inventory.pop()).toBe(newItem);
  });
});

describe('Removing items from the inventory (Customer Purchases)', () => {
  it('should remove the item if the whole quantity of the item is purchased', () => {
    const purchasedItem = {
      name: 'Item C',
      value: 4,
      quantity: 3,
    };

    inventoryMutations[InventoryMutationsTypes.PURCHASE_ITEM](state, purchasedItem);

    expect(state.inventory).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: purchasedItem.name,
          value: purchasedItem.value,
        }),
      ]),
    );
  });

  it('should update the quantity of the existing item if the whole quantity of the item is not purchased', () => {
    const purchasedItem = {
      name: 'Item C',
      value: 4,
      quantity: 1,
    };

    inventoryMutations[InventoryMutationsTypes.PURCHASE_ITEM](state, purchasedItem);

    expect(state.inventory).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: purchasedItem.name,
          value: purchasedItem.value,
          quantity: 2,
        }),
      ]),
    );
  });

  it(`should run the following scenarios and update state successfully:
            Add Item F with Value 2 and Quantity 2
            Add Item A with Value 2 and Quantity 3
            Add Item A with Value 1 and Quantity 2
            Remove Item B with Quantity 2
            Remove Item B with Quantity 3
            Remove Item A with Quantity 5
            Return Item A with Value 2 and Quantity 2
            Return Item A with Value 1 and Quantity 2
            Return Item B with Value 2 and Quantity 2`, () => {
    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, { name: 'Item F', value: 2, quantity: 2 });
    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, { name: 'Item A', value: 2, quantity: 3 });
    inventoryMutations[InventoryMutationsTypes.ADD_ITEM](state, { name: 'Item A', value: 1, quantity: 2 });
    inventoryMutations[InventoryMutationsTypes.PURCHASE_ITEM](state, { name: 'Item B', value: 3, quantity: 2 });
    inventoryMutations[InventoryMutationsTypes.PURCHASE_ITEM](state, { name: 'Item B', value: 3, quantity: 3 });
    inventoryMutations[InventoryMutationsTypes.PURCHASE_ITEM](state, { name: 'Item A', value: 2, quantity: 5 });
    inventoryMutations[InventoryMutationsTypes.RETURN_ITEM](state, { name: 'Item A', value: 2, quantity: 2 });
    inventoryMutations[InventoryMutationsTypes.RETURN_ITEM](state, { name: 'Item A', value: 1, quantity: 2 });
    inventoryMutations[InventoryMutationsTypes.RETURN_ITEM](state, { name: 'Item B', value: 2, quantity: 2 });

    const newInventoryState = [
      { name: 'Item A', value: 1, quantity: 7 },
      { name: 'Item C', value: 4, quantity: 3 },
      { name: 'Item D', value: 1, quantity: 3 },
      { name: 'Item F', value: 2, quantity: 2 },
      { name: 'Item A', value: 2, quantity: 2 },
      { name: 'Item B', value: 2, quantity: 2 },
    ];

    expect(state.inventory).toEqual(newInventoryState);
  });
});
