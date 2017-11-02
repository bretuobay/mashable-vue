import {
    GET_WEATHER_FAILURE,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_DATA
  } from '../mutation-types'
  
 
  const state = {
    currentWeather : [],
    weatherError : {}
  }
  
  // mutations
  const mutations = {
      // set key in array
    [GET_WEATHER_DATA] (state, source) {
     state.currentWeather[source] =[]
    },
  
    [GET_WEATHER_FAILURE] (state,error) {
      state.weatherError = error
    },
  
    [GET_WEATHER_SUCCESS] (state, data) {
      state.currentWeather = [...state, data]
    },
  
  }
  
  export default {
    state,
    mutations
  }