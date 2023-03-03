<template>

    <div> 
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <img alt="logo" src="https://i.postimg.cc/PxjSL4FC/logo-SYTLETTOS-removebg-preview.png" height="125" width="200">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item mx-3">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/admin">Admin</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/products">Products</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/contact" class="contact">Contact</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/login" class="login">Login</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/register" class="register">Register</router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
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
      letter-spacing: 0.2rem;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    text-transform: uppercase;
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
  color: #198754;
  word-spacing: 0.5rem;
  text-decoration: none;

}

</style>