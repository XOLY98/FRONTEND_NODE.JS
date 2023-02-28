<template>
    <div> 
        <nav class="navbar sticky-top ">
        <div class="container-fluid">
          <img alt="logo" src="https://i.postimg.cc/PxjSL4FC/logo-SYTLETTOS-removebg-preview.png" height="125" width="200">
          <router-link to="navbar-brand "  href="#">Home</router-link>
          <router-link to="navbar-brand" href="#">Admin</router-link>
          <router-link to="navbar-brand" href="#">Products</router-link>
          <router-link to="">Contact</router-link>

        </div>
      </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .navbar{
      background-color:#08172E;
    }

    .navbar{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid .router-link {
  padding: 10px;
}

.navbar a {
  font-weight: bold;
  color: white;
}

.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>