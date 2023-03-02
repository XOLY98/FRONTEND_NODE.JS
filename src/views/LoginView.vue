<template>
   <div class="login-form">
    <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3 container fluid">
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Username</label>
        <input type="text" class="form-control" id="validationDefault02" name="name" required>
      </div>
      <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label">Email</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required>
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div class="row col-md-4">
        <button class="btn-s btn-primary" type="submit">Submit form</button>
      </div>
    </form>
   </div>
</template>
<script>
// import ForgotPwd  from '@/components/ForgotPwd.vue'
// import UserProfile from '@/components/UserProfile.vue'
export default {
    name: 'LoginView',
  components: {
    // ForgotPwd,
    // UserProfile
  }
}

</script>
<style scoped>

label.form-check-label{
 color: white;
}

    .login-form{
      background-color: #08172E;
      width: 40vw; 
    height: 50vh;
    margin-top: 50px;
    transform: translateX(55%);
    box-shadow: #08172E 5px 5px 5px 5px;
    border-radius: 10px;
    }
    span{
      color:#08172E;
      font-size: 1rem;
    }
    .form-check-label{
      color:whitesmoke;
      text-align: center;
    }
    label{
      color: whitesmoke;
    }
    form{
      justify-content: center;
    }
    button.btn{
      text-align:  center;
      justify-content: center;
      margin-right: 25px;
    }
</style>