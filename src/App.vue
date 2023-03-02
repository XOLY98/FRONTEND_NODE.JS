<template>
  
  <NavbarComp/>
  <SpinnerComp/>
  <router-view/>
  <FooterComp/>
  
</template>

<script>

import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
  components: {

    NavbarComp,
    FooterComp,
    SpinnerComp

  }
}

</script>

<style>

</style>
