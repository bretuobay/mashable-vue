import {
    GET_NEWS_DATA,
    GET_NEWS_DATA_FAILURE,
    GET_NEWS_DATA_SUCCESS,
  } from '../mutation-types'
  
 
  const state = {
    newsArticles : [],
    newsError : {}
  }
  
  // mutations
  const mutations = {
      // set key in array
    [GET_NEWS_DATA] (state, source) {
     state.newsArticles[source] =[]
    },
  
    [GET_NEWS_DATA_FAILURE] (state,error) {
      state.newsError = error
    },
  
    [GET_NEWS_DATA_SUCCESS] (state, data) {
      state.newsArticles = [...state, data]
    },
  
  }
  
  export default {
    state,
    mutations
  }