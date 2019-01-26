

  import axios from "axios";
  import * as appConstant from "../../constants/appConstants";
  import * as types from "../../constants/mutation-types";
  
  const state = {
    exchangeRates : {},
    exchangeRatesError : {}
  }

  const actions = {
    getExchangeRatesList  ({commit}, exchangeRates) {
      axios.defaults.baseURL = appConstant.CURRENCY_API_URL_ENDPOINT;
       return axios.get(`/quotes?pairs=${exchangeRates}&api_key=${appConstant.CURRENCY_API_KEY}`,)
       .then(({data}) => {
         commit(types.GET_CURRENCY_DATA_SUCCESS, data);
       }).catch((error) => {
        commit(types.GET_CURRENCY_DATA_FAILURE,error);
       })
      }
  }

  const getters = {
    getExchangeRates : (state) => (source) => {
      return state.exchangeRates;
    }
  } 

  const mutations = {
    [types.GET_CURRENCY_DATA] (state) {
      state.exchangeRates
    },
  
    [types.GET_CURRENCY_DATA_FAILURE] (state, error) {
      state.newsError = error
    },
  
    [types.GET_CURRENCY_DATA_SUCCESS] (state, data) {
      state.exchangeRates = data
    }
  };
  
  export default {
    state,
    getters,
    actions,
    mutations
  }