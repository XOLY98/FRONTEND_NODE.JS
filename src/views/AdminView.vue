<template>
  <div>
    <table class="table table-dark">
      <thead>
        ...
      </thead>
      <tbody>
        <tr class="table-active">
          ...
        </tr>
        <tr>
          ...
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2" class="table-active">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <!-- <UpdateUser/>
    <AddProduct/> -->
  </div>
</template>
<script>
// import UpdateUser from '@/components/UpdateUser.vue'
// import AddProduct from '@/components/AddProduct.vue'
export default {
  name: 'AdminView',
  components: {
    // AddProduct,
    // UpdateUser
  }
}
</script>
<style scoped>
  
</style>