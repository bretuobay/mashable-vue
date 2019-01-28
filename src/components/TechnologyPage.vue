<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
         <news-by-source
            v-for="source in technologySources"
            v-bind:key="source.id"
            v-bind:source="source.id"
          ></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import {TechnologySources} from '../helpers/news-sources'
 import NewsBySource from '../widgets/NewsBySource'
  export default {
    name: 'TechnologyPage',
    data() {
      return {
        technologySources: TechnologySources,
        msg: 'Welcome to Science Page'
      }
    },
    components: {
      'news-by-source': NewsBySource
    }
  
  }
</script>

<style scoped>
</style>
