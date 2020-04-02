<template>
  <div class="home">
    <InventorySystem/>
  </div>
</template>

<script>
// @ is an alias to /src
import InventorySystem from '@/components/InventorySystem.vue';

export default {
  name: 'Home',
  components: {
    InventorySystem,
  },
};
</script>
