

  import axios from "axios";
  import * as appConstant from "../../constants/appConstants";
  import * as types from "../mutation-types";
  
 
  const state = {
    newsArticles : {},
    newsError : {}
  }

  const actions = {
    getNewsBySource  ({commit,dispatch},payload) {
      axios.defaults.baseURL = appConstant.NEWS_API_URL_ENDPOINT;
      
        const Config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        };
       return axios.get(`/?source=${payload}&sortBy=latest&apiKey=${appConstant.NEWS_API_KEY}`)
       .then((response) => {
         //this.articles[resp.data.source] = resp.data.articles
         commit(types.GET_NEWS_DATA_SUCCESS,response.data);
       }).catch((error) => {
        commit(types.GET_NEWS_DATA_FAILURE,error);
       })
      }
  }

  const getters = {
    getArticlesBySource : (state, getters) => (source) => {
      return state.newsArticles
    }

  } 

  
  // mutations
  const mutations = {
      // set key in array
    [types.GET_NEWS_DATA] (state, source) {
      state.newsArticles[source] = []
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