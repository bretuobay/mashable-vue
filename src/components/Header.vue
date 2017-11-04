<template>
    <header class="header">
        <nav class="navbar navbar-toggleable-md">   
        <div class="container"> 
            <div class="navbar-header d-flex align-items-center justify-content-between">
             <router-link  to="/" class="navbar-brand animsition-link">{{siteName}}</router-link>
              <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span></span><span></span><span></span></button>
            </div>
            <div id="navbarcollapse" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link  to="/" class="nav-link animsition-link"  activeStyle={activeStyle}>HOME</router-link></li>
                <li class="nav-item"><router-link  to="/culture" class="nav-link animsition-link"  activeStyle={activeStyle}>CULTURE & POLITICS</router-link></li>
                <li class="nav-item"><router-link  to="/entertainment" class="nav-link animsition-link"  activeStyle={activeStyle}>ENTERTAINMENT</router-link></li>
                <li class="nav-item"><router-link  to="/technology" class="nav-link animsition-link"  activeStyle={activeStyle}>TECH </router-link></li>
                <li class="nav-item"><router-link  to="/science" class="nav-link animsition-link"  activeStyle={activeStyle}>SCIENCE</router-link></li>
                <li class="nav-item"><router-link  to="/business" class="nav-link animsition-link"  activeStyle={activeStyle}>BUSINESS</router-link></li>
                <li class="nav-item"><router-link  to="/videos" class="nav-link animsition-link"  activeStyle={activeStyle}>VIDEOS & MOVIES </router-link></li>
              </ul>
            </div>
            </div>
         
        </nav>
      </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      siteName : 'Vue Mashable Clone'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
