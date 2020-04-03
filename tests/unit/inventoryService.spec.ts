describe('InventoryService', () => {
  describe('Adding items to the inventory', () => {
    it('should add items as the last one if not exist', () => {

    });

    it('should combine items if the value of the added item equals value of an item with same name', () => {

    });

    it('should add new item as the last one if the value of the added item does not equals value of an item with same name', () => {

    });
  });

  describe('Removing items from the inventory (Customer Purchases)', () => {
    it('should remove the item if the whole quantity of the item is purchased', () => {

    });

    it('should update the quantity of the existing item if the whole quantity of the item is not purchased', () => {

    });
  });

  describe('Returning items to the inventory', () => {
    it('should update the quantity of the existing item if the value of the returned item equals the value of an item with same name', () => {

    });

    it('should add new item as the last one if the value of the returned item does not equal the value of an item with same name', () => {

    });
  });
});
