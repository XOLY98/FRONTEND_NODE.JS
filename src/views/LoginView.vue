<template>
    <div>

      <h1>This is a login page </h1>
        <!-- <UserProfile/>
        <ForgotPwd/> -->
    </div>
</template>
<script>
import ForgotPwd  from '@/components/ForgotPwd.vue'
import UserProfile from '@/components/UserProfile.vue'
export default {
    name: 'LoginView',
  components: {
    ForgotPwd,
    UserProfile
  }
}

</script>
<style scoped>
    
</style>