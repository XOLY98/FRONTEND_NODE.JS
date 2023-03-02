<template>
    <div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">UserId</th>
                <th scope="col">firstName</th>
                <th scope="col">lastName</th>
                <th scope="col">gender</th>
                <th scope="col">emailAdd</th>
                <th scope="col">cellphone</th>
                <th scope="col">conPass</th>
                <th scope="col">conRole</th>
                <th scope="col">conProf</th>
                <th scope="col">loginDate</th>
              </tr>
            </thead>
            <tbody v-for="user in Consumers" :key="user.conID">
              <tr> 
                <td>{{user.conID}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.emailAdd}}</td>
                <td>{{user.cellphoneNumber}}</td>
                <td>{{user.conPass}}</td>
                <td>{{user.conRole}}</td>
                <td>{{user.conProf}}</td>
                <td>{{user.loginDate}}</td>
              </tr>
            </tbody>
          </table>
          
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup(){
    const store=useStore();
    store.dispatch("fetchConsumers");
    let consumers=computed(()=>store.state.consumers)
    return{
      consumers
    }
  }, 
}
</script>

<style>
    
</style>