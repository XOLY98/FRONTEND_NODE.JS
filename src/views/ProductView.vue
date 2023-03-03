<template>
<div class="products">

    <h1>Products</h1>

    <div class="row gap-3">

        <div v-if="SpinnerComp">
            <SpinnerComp/>
        </div>

            
        <div class="card" style="width: 18rem ;" v-else  v-for="item in Catalogue" :key="item.prodID" >
             <img :src="item.imgURL" class="card-img-top" alt="...">
             <div class="row card-body">
               <h5 class="card-title">{{item.prodName}}</h5>
               <p class="card-text">R {{item.price}}</p>
               <p class="card-text">{{item.prodDes}}</p>
               <router-link to="/SingleProd"><a class="btn btn-outline-success" >See more</a></router-link>
             </div>
           
        </div>

    </div>

</div>
</template>

<script>

import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchCatalogue");
        const Catalogue = computed(() => store.state.catalogues);
        const SpinnerComp = computed(() => store.getters.showSpinner);
        return {
            Catalogue,
            SpinnerComp
        };
    },
    components: SpinnerComp
};

</script>

<style scoped>

    div.row{
        margin-left: 12px;
    }
    .products{
    margin-top: 195px;
    margin-bottom: 50px;
    }
    .card{
        background-color: #08172E;
        opacity: 1;
        box-shadow:  #198754 5px 5px 5px;
        height: 28rem;
        margin-bottom:25px;
        margin-top: 25px;
    }
    .card-text{
        color:white;
    
    }
    .card-title{
        color: white;
        font-size: x-large;
    }

    img{
        height: 50%;
    }

    h1{
        color: #08172E;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
    }

    @media (max-with: 768px) {
        div.row {
            transform: translateX(60%);
        }
    }

</style>