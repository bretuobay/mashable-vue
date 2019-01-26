<template>
  <div class="container">
    <div class="row">
      <main class="posts-listing col-lg-8">
        <div class="container">
         <news-by-source
            v-for="source in videoSources"
            v-bind:key="source.id"
            v-bind:source="source.id"
          ></news-by-source>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import {VideoSources} from '../helpers/news-sources'
  import NewsBySource from '@/components/NewsBySource'
  export default {
    name: 'CulturePage',
    data() {
      return {
        videoSources: VideoSources,
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
