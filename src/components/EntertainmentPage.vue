<template>
   <news-by-source></news-by-source>
</template>

<script>

import NewsBySource from '@/components/NewsBySource'

export default {
  name: 'EntertainmentPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
     'news-by-source' : NewsBySource
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
