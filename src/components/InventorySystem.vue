<template>
  <div class="container ">
    <div class="row justify-content-center">
      <div class="row col-lg-8 justify-content-center">
        <div class="col-lg-12 col-xl-12 error-wrapper">
          <div v-if="hasError" class="alert alert-danger"> Please Purchase a valid item </div>
        </div>

        <div class="row col-lg-10 col-xl-10 text-center justify-content-center">
          <form class="col-xl-12 row my-1 justify-content-center">
            <div class="row col-xl-12 justify-content-center my-1">
              <label class="col-xl-3">Select Action:</label>
              <div class="col-9 col-lg-9 col-xl-9">
                <!--suppress HtmlFormInputWithoutLabel -->
                <select v-model="action" class="custom-select border">
                  <option selected> select Action</option>
                  <option :value="mutationTypes.ADD_ITEM">Add Item</option>
                  <option :value="mutationTypes.PURCHASE_ITEM">Purchase</option>
                  <option :value="mutationTypes.RETURN_ITEM" >Return</option>
                </select>
              </div>
            </div>
            <div class="row col-xl-12 justify-content-center">
              <label class="col-xl-3">
                Name:
              </label>
              <div class="col-9 col-lg-9 col-xl-9">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input v-model="name" type="text" class="border rounded col-xl-12" >
              </div>
            </div>

            <div class="row col-xl-12 justify-content-center">
              <label class="col-xl-3">
                Value:
              </label>
              <div class="col-9 col-lg-9 col-xl-9">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input v-model="value" type="number" min="1" class="border rounded col-xl-12" >
              </div>
            </div>

            <div class="row col-xl-12 justify-content-center">
              <label class="col-xl-3">
                Quantity:
              </label>
              <div class="col-9 col-lg-9 col-xl-9">
                <!--suppress HtmlFormInputWithoutLabel -->
                <input v-model="quantity" type="number" min="1" class="border rounded col-xl-12" >
              </div>
            </div>

            <div class="row col-xl-12 justify-content-center">
              <div class="col-9 col-lg-9 col-xl-9"></div>
              <div class="row col-3 col-lg-3 col-xl-3 justify-content-end">
                <input @click="submit" type="submit" class="btn btn-success">
              </div>
            </div>
          </form>
        </div>

        <div class="row col-lg-12 col-xl-12 border mt-3">
          <div v-for="(item, i) in inventory" v-bind:key="i"
               class="col-xl-2 border rounded-pill inventory-item m-2 fadeIn">
            <div class="badge badge-pill badge-success item-badge"> {{ i }} </div>
            <div> Name: {{ item.name }} </div>
            <div> Value: {{ item.value }}</div>
            <div> Quantity: {{ item.quantity }}</div>
          </div>
        </div>

        <div class="row col-lg-3 col-xl-3 text-center mt-3">
          <input @click="resetInventory" type="button" class="form-control btn btn-danger"
                 value="Reset Inventory">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { InventoryMutationsTypes } from '@/models/inventoryMutationsTypes';
// eslint-disable-next-line no-unused-vars
import { Item } from '@/models/item';

@Component
export default class InventorySystem extends Vue {
  name = 'Item X';

  value = 1;

  quantity = 1;

  action = InventoryMutationsTypes.ADD_ITEM;

  mutationTypes = InventoryMutationsTypes;

  // Clone data to be able to reset
  inventory: Item[] = this.$store.getters.inventory;

  hasError = false;

  submit() {
    const item = {
      name: this.name,
      value: Number(this.value),
      quantity: Number(this.quantity),
    };

    if (this.action !== this.mutationTypes.PURCHASE_ITEM) {
      this.$store.commit(this.action, item);
      this.hasError = false;

      return false;
    }

    const isExist = this.inventory
      .some(({ name, value }: Item) => item.name === name && item.value === value);

    if (isExist) {
      this.$store.commit(this.action, item);
      this.hasError = false;

      return false;
    }

    this.hasError = true;

    return false;
  }

  resetInventory() {
    this.$store.commit(this.mutationTypes.RESET_INVENTORY);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.inventory-item {
  position: relative;
  font-size: 12px;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.item-badge {
  position: absolute;
  right: 0
}

.error-wrapper {
  min-height: 66px;
}
</style>
