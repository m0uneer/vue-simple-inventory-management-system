<template>
  <h1 class="system-label">Simple Inventory Management System</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InventorySystem extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.system-label {
  color: #42b983;
}
</style>
