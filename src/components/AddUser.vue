<template>
<div>

<div
  class="modal fade"
  id="hair-products"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Admin</h5>
        <button
          type="button"
          class="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input
          id="id"
          class="form-control"
          type="text"
          placeholder="ID"
          aria-label="default input example"
        />
        <input
          id="type"
          class="form-control"
          type="text"
          placeholder="Type"
          aria-label="default input example"
        />
        <input
          id="color"
          class="form-control"
          type="text"
          placeholder="Color "
          aria-label="default input example"
        />
        <input
          id="price"
          class="form-control"
          type="text"
          placeholder=" Price"
          aria-label="default input example"
        />
        <input
          id="size"
          class="form-control"
          type="text"
          placeholder=" Size"
          aria-label="default input example"
        />
        <input
          id="image"
          class="form-control"
          type="url"
          placeholder=" Image URL"
          aria-label="default input example"
        />
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          data-bs-dismiss="modal"
          type="button"
          class="btn btn-primary"
          onclick="addProduct()"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Profile</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Email Address</th>
      <th scope="col">Role</th>
      <th scope="col">Cellphone Number</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      <th scope="col">Add User</th>
    </tr>
  </thead>
  <tbody v-for="item in Consumers" :key="item.conID">
    <img :src="item.conProf" class="card-img-top" alt="...">
    <tr>
      <th scope="row"></th>
      <td> {{item.firstName}}</td>
      <td>{{item.lastName}}</td>
      <td>{{item.gender}}</td>
      <td>{{item.emailAdd}}</td>
      <td>{{item.conRole}}</td>
      <td>{{item.cellphoneNumber}}</td>
      <td><button
        type="button"
        class="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#hair-products"
      >
        Edit
      </button></td>
      <td><button
        type="button"
        class="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#hair-products"
      >
        Delete
      </button></td>
      <td><button
        type="button"
        class="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#hair-products"
      >
        Add Product
      </button></td>
      
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchConsumers");
    const Consumers = computed(() => store.state.consumers);
    return {
      Consumers,
    };
  },

};
</script>

<style scoped>
.table{
    background-color: #08172E;
    color:whitesmoke;
    width: 80%;
    margin-left: 9%;
  }

  img{
    width: 3vw;
    height: 5vh;
  }

</style>