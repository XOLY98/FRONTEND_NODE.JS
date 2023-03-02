<template>
    <div class="container-fluid">
        <div class="row">
            <h1>this is a product page </h1>
        </div>
        <div class="row gap-3">
            <div class="card" 
            style="width: 18rem ;"
            v-for="item in Catalogue" :key="item.prodID" >
             <img :src="item.imgURL" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">{{item.prodName}}</h5>
               <p class="card-text">{{item.price}}</p>
               <p class="card-text">{{item.prodDes}}</p>
               <a href="#" class="btn btn-primary">See more</a>
             </div>
           </div>
        </div>
    </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchCatalogue");
    const Catalogue = computed(() => store.state.catalogues);
    // console.log(computed(() => store.state.Catalogue));
    return {
      Catalogue,
    };
  },

};
</script>
<style scoped>
    .card{
        background-color: #08172E;
        opacity: 1;
        box-shadow:  yellow 5px 5px 5px;
        height: 28rem;
        margin-bottom:5%;
    }
    .card-text{
        color:white;
    
    }
    .card-title{
        color: yellow;
        font-size: larger;
    }
    .btn{
        background-color: yellow;
        border:none;
        border-radius:none;
        color: #08172E;
    }
    img{
        height: 50%;
    }
</style>