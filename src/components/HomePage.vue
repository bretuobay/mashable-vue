<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
         <news-by-source
            v-for="source in mainSources"
            v-bind:key="source.id"
            v-bind:source="source.id"
          ></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import {MainSources} from '../helpers/news-sources'
  import NewsBySource from '@/components/NewsBySource'
  export default {
    name: 'HomePage',
    data() {
      return {
        mainSources: MainSources,
        msg: 'Welcome to Home Page'
      }
    },
    components: {
      'news-by-source': NewsBySource
    }
  
  }
</script>

<style scoped>
</style>
