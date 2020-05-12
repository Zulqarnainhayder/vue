<template>
  <div id="app">
    <Header />
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
body{
  background-color: #222831;
}
.container{
  margin-top: 30px;
  max-width: 1000px !important;
}
.card{
  background-color: #1a1d24;
}
.card-body{
  color: #f9ffee;
}
.card-body a{
  color: #efbb35;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  import Header from "./components/Header";
  export default {
    components: {Header}
  }
</script>