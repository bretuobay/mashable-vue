<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
         <news-by-source
            v-for="source in businessSources"
            v-bind:key="source.id"
            v-bind:source="source.id"
          ></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import {BusinessSources} from '../helpers/news-sources'
  import NewsBySource from '../widgets/NewsBySource'
  export default {
    name: 'BusinessPage',
    data() {
      return {
        businessSources: BusinessSources,
        msg: 'Welcome to Business Page'
      }
    },
    components: {
      'news-by-source': NewsBySource
    }
  
  }
</script>

<style scoped>
</style>
