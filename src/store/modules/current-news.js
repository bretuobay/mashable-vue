

  import axios from "axios";
  import * as appConstant from "../../constants/appConstants";
  import * as types from "../../constants/mutation-types";
  
  const state = {
    newsArticles : {},
    newsError : {}
  }

  const actions = {
    getNewsBySource  ({commit}, payload) {
      axios.defaults.baseURL = appConstant.NEWS_API_URL_ENDPOINT;
       return axios.get(`/?source=${payload}&sortBy=latest&apiKey=${appConstant.NEWS_API_KEY}`)
       .then(({data}) => {
         commit(types.GET_NEWS_DATA_SUCCESS, data);
       }).catch((error) => {
        commit(types.GET_NEWS_DATA_FAILURE,error);
       })
      }
  }

  const getters = {
    getArticlesBySource : (state) => (source) => {
      return state.newsArticles;
    }
  } 

  const mutations = {
    
    [types.GET_NEWS_DATA] (state) {
      state.newsArticles
    },
  
    [types.GET_NEWS_DATA_FAILURE] (state,error) {
      state.newsError = error
    },
  
    [types.GET_NEWS_DATA_SUCCESS] (state, data) {
      state.newsArticles[data.source] = data.articles
    },
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }