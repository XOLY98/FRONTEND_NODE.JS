<template>
    <div> 
        <nav class="navbar sticky-top ">
        <div class="d2 container-fluid">
          <img alt="logo" src="https://i.postimg.cc/PxjSL4FC/logo-SYTLETTOS-removebg-preview.png" height="125" width="200">
          <router-link to="/">Home</router-link>
          <router-link to="/admin">Admin</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/contact" class="contact">Contact</router-link>
          <router-link to="/login" class="login">Login</router-link>
          <router-link to="/register" class="register">Register</router-link>

        </div>
      </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.contact{
  margin-right: 60px;
}

.d2{
  padding: 0px 0px;
}
    .navbar{
      background-color:#08172E;
      letter-spacing: 0.2rem;

    }

    .navbar{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.container-fluid .router-link {
  padding: 1px;
}

.navbar a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  color: yellow;
  text-decoration: none;

}
</style>