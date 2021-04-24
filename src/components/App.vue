<template>
  <div>
    <Header v-if="$route.meta.header1"/>
    <router-view></router-view>
    <Footer v-if="$route.meta.header1"/>
    <LoginRegisterHeader v-if="$route.meta.header2"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer';
import LoginRegisterHeader from './components/LoginRegisterHeader.vue'
export default {
  name: "App",
  components: {LoginRegisterHeader, Header, Footer},
}; 
</script>
<style>
  @import './assets/css/style.css';
</style>