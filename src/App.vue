<template>
  <div id="app">
  <!-- <ul class="nav__left">

          
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/business">Business</router-link></li>
          <li><router-link to="/culture">Culture</router-link></li>
          <li><router-link to="/Science">Science</router-link></li>
          <li><router-link to="/Technology">Tecghnology</router-link></li>
          <li><router-link to="/videos">Videos</router-link></li>

        </ul> -->
        <site-header></site-header>
  
    
    <img src="./assets/logo.png">
    <router-view/>
     <site-footer></site-footer>
    
  </div>
</template>

<script>
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
export default {
  name: 'app',
  components : {
    'site-header' : SiteHeader,
    'site-footer' : SiteFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
