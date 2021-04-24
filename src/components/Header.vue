<template>
  <header id="header-background-color">
    <nav class="navbar navbar-expand-md container navbar-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.svg"/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link nav-link-colors" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-colors" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-colors" to="/Halls">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
export default {};
</script>

<style scoped>
</style>