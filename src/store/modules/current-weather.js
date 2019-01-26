import axios from "axios";
import * as appConstant from "../../constants/appConstants";
import { GET_WEATHER_FAILURE, GET_WEATHER_SUCCESS, GET_WEATHER_DATA } from '../mutation-types'

const state = {
  currentWeather: [],
  weatherError: {}
}

// mutations
const mutations = {
  // set key in array
  [GET_WEATHER_DATA](state, source) {
    state.currentWeather = state.currentWeather // TO check how this is done
  },

  [GET_WEATHER_FAILURE](state, error) {
    state.weatherError = error
  },

  [GET_WEATHER_SUCCESS](state, data) {
    state.currentWeather = {...state, ...data }
  },
}

const actions = {
  getWeatherData  ({commit}, city) {
    axios.defaults.baseURL = appConstant.WEATHER_API_URL_ENDPOINT;
     return axios.get(`/weather?q=${city}&appid=${appConstant.WEATHER_API_KEY}`)
     .then(({data}) => {
       commit(GET_WEATHER_SUCCESS, data);
     }).catch((error) => {
      commit(GET_WEATHER_FAILURE, error);
     })
    }
}

const getters = {
  getWeatherState : (state) => (source) => {
    return state.currentWeather;
  }
} 

export default {
  state,
  actions,
  getters,
  mutations
}