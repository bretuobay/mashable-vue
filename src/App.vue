<template>
  <div id="app">
  
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
  
}
</style>
