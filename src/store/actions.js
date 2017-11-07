import axios from "axios";
import * as appConstant from "../constants/appConstants";
import * as types from "./mutation-types";

export const fetchSingleSourceNews = ( {commit} , payload) => {
  axios.defaults.baseURL = appConstant.NEWS_API_URL_ENDPOINT;

  const Config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  };
  axios
    .get(
      `/?source=${source}&sortBy=latest&apiKey=${appConstant.NEWS_API_KEY}`,
      Config
    )
    .then(response => {
      commit(types.GET_NEWS_DATA_SUCCESS,response.data);
    })
    .catch(error => {
        commit(types.GET_NEWS_DATA_FAILURE,response.error);
    });
}

export const getNewsBySource = ({commit},payload)  => {
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
    commit(types.GET_NEWS_DATA_SUCCESS,response.error);
   })
  }
