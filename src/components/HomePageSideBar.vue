<template>
<aside class="col-lg-4">
            <div class="widget search">
              <header>
                <h3 class="h6">Search weather</h3>
              </header>
              <form action="#" class="search-form">
                <div class="form-group">
                  <input type="search" placeholder="Search for City" v-model="currentCity" @change="debounceSearchInput">
                  <button type="submit" class="submit"><i class="icon-search"></i></button>
                </div>
              </form>

              <div class="pt-5">
                <div class="h6"> Currently displaying </div> <br />
                <div class="h6 alert alert-warning"> City : {{weatherProps.name}}</div>
                <br />
                <div class="h6 alert alert-success">
                Temperature : {{convertedTemp(weatherProps)}}
                </div>
                <br />
                <div class="h6 alert alert-info">
                Humidity :{{getHumidity(weatherProps)}}
                </div>
                <div class="pt-5">
                </div>
            </div>
            </div>
           
            <div class="widget categories">
              <header>
                <h3 class="h6">Exchange Rates</h3>
              </header>
              <div class="item d-flex justify-content-between" v-bind:key="curr.symbol" v-for="curr in exchangeRatesList">
                <ul class="list-group">
                    <li class="list-group-item"> Symbol : {{curr.symbol}} </li>
                    <li class="list-group-item"> Price : {{curr.price}} </li>
                    <li class="list-group-item"> Bid : {{curr.bid}} </li>
                    <li class="list-group-item"> Ask : {{curr.ask}} </li>
                </ul>
            </div>
            </div>
          </aside>
</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'
import { get, debounce } from 'lodash'
import { roundN } from '../helpers/weather-helper'
export default {
    name: 'HomePageSideBar',
    props: {
        currencies: {
            type: String,
            default: "EURUSD,GBPJPY,AUDUSD"
        }
    },
    data() {
      return {
       currentCity: "Kumasi"
      }
    },

    created(){
       this.getExchangeRatesList(this.$props.currencies)
       this.getWeatherData(this.currentCity)
    },

    computed : {
          ...mapState({
        exchangeRates: (state) => state.exchangeRates,
        weatherData: (state) => state.currentWeather
      }),
      
      exchangeRatesList() {
        const exRates = this.$store.getters.getExchangeRates()
        return exRates;
      },

      weatherProps() {
        const weather = this.$store.getters.getWeatherState()
        return weather;
      },
    },
    methods: {
      ...mapActions(['getExchangeRatesList', 'getWeatherData']),

      convertedTemp : (weatherProps) => (roundN(get(weatherProps, 'main.temp', 0), 2) - 273.15).toFixed(2),

      getHumidity : (weatherProps) => get(weatherProps,'main.humidity', null),

      debounceSearchInput: debounce(function(event) {
          this.currentCity = event.target.value;
          this.$store.dispatch('getWeatherData', this.currentCity);
      }, 500)
    },
  }
</script>

<style scoped>
.list-group-item {
    font-weight: "bold";
    border: 0;
}
</style>