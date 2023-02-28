<template>
  <div>
    <UpdateUser/>
    <AddProduct/>
  </div>
</template>
<script>
import UpdateUser from '@/components/UpdateUser.vue'
import AddProduct from '@/components/AddProduct.vue'
export default {
  name: 'AdminView',
  components: {
    AddProduct,
    UpdateUser
  }
}
</script>
<style scoped>
  
</style>