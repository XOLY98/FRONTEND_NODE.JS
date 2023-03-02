<template>
    <div>
    <!-- Button trigger modal -->
  <button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#hair-products"
>
  Add User
</button>

<!--Add Modal -->
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
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col"></th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{hnv}}</td>
      <td>{{jgkll}}</td>
      <td>{{jgjn}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
table{
    background-color: #08172E;
    color:whitesmoke;
    width: 80%;
  }
</style>