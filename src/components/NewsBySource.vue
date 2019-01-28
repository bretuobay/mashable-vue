<template>
  <div class="row">
    <div v-bind:key="article.title" v-for="article in newsArticles" class="post col-xl-6">
      <div class="post-thumbnail">
        <a :href=article.url class="animsition-link">
          <img :src=article.urlToImage alt="..." class="img-fluid" />
        </a>
      </div>
      <div class="post-details">
        <div class="date meta-last">
          {{article.publishedAt}}
        </div>
      </div>
      <a :href=article.url class="animsition-link">
        <h3 class="h4 w-100">{{article.title}}</h3>
      </a>
      <p class="text-muted">{{article.description}}</p>
      <footer class="post-footer d-flex align-items-center">
        <a href="#" class="author d-flex align-items-center flex-wrap">
          <div class="title">{{article.author}} </div>
        </a>
      </footer>
    </div>
  </div>
</template>

<script>
  
  import { mapActions, mapState, mapGetters} from 'vuex'
  export default {
    name: 'NewsBySource',
    props: ['source'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.getNewsBySource(this.$props.source)
    },
    computed: {
      ...mapState({
        // currentNews is the name of the module, so we can destructure from the state
        newsArticles: function ({currentNews}) {
          // Can also use a getter like below:
          // this.$store.getters.getArticlesBySource(this.$props.source)
          return currentNews.newsArticles[this.$props.source]
        }
      }) 
    },
    methods: {
      ...mapActions(['getNewsBySource'])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
