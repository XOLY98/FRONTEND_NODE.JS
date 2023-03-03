<template>
<div class="A-div">

  <h1>Admin</h1>
  
  <AddUser/>
  <AddProduct/>
  <UserComp/>

</div>
</template>
<script>
import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import UserComp from '@/components/UserComp.vue'
export default {
  components: {
    AddProduct,
    AddUser,
    UserComp
  }
}

</script>

<style scoped>

.A-div{
  margin-top: 195px;
}

h1{
  align-items: center;
  font-weight: 700;
  color: #08172E;
  margin-left: 40%;
  text-transform: uppercase;
}
  
</style>