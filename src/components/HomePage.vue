<template>
<ul>
  <li v-bind:key="article.title" v-for="article in mashableList">
    {{article.title}}
   
  </li>
</ul>
   <!-- <news-by-source></news-by-source> -->
</template>

<script>

import NewsBySource from '@/components/NewsBySource'
import { mapActions, mapState, mapGetters  } from 'vuex'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created (){
      this.getNewsBySource('mashable')
      this.getNewsBySource('daily-mail')
    
  },
  computed :  { 
     ...mapState({newsArticles : (aticlesState)=> aticlesState.newsArticles}) ,
      mashableList(){
    let articles = this.$store.getters.getArticlesBySource('mashabble')
    console.log(articles)
        return articles
      }
      },
  methods : { 
    ...mapActions(['getNewsBySource']) 
    },
  components :{
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
