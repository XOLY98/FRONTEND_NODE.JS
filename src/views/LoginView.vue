<template>
   <div class="login-form text-center">
    <h1>Login</h1>
    <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3 container fluid">
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="validationDefault02" name="name" required>
      </div>
      <div class="col-md-4">
        <label for="validationDefaultPassword" class="form-label">Password</label>
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
        <button class="btn btn-outline-success" type="submit">Submit form</button>
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

h1{
  color: white;
  text-transform: uppercase;
}

label.form-check-label{
 color: white;
}

    .login-form{
      background-color: #08172E;
      width: 60vw; 
      padding: 2%;
    margin-top: 195px;
    transform: translateX(30%);
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