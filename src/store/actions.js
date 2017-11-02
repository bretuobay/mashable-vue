import axios from "axios";
import * as appConstant from "../constants/appConstants";
import * as types from "./mutation-types";

export const fetchSingleSourceNews = ({ dispatch }, source) => {
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
      dispatch(types.GET_NEWS_DATA_SUCCESS,response.data);
    })
    .catch(error => {
        dispatch(types.GET_NEWS_DATA_FAILURE,response.error);
    });
}
