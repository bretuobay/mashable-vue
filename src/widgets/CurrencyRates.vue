<template>
   <div class="widget categories">
      <header>
         <h3 class="h6">Exchange Rates</h3>
      </header>
      <div class="item d-flex justify-content-between" v-bind:key="curr.symbol" v-for="curr in exchangeRates">
         <ul class="list-group">
            <li class="list-group-item"> Symbol : {{curr.symbol}} </li>
            <li class="list-group-item"> Price : {{curr.price}} </li>
            <li class="list-group-item"> Bid : {{curr.bid}} </li>
            <li class="list-group-item"> Ask : {{curr.ask}} </li>
         </ul>
      </div>
   </div>
</template>
<script>

import { mapActions, mapState, mapGetters} from 'vuex'

export default {
   name: 'CurrencyRates',
   props: { currencies: { type: String, default: "EURUSD,GBPJPY,AUDUSD" } },
    created(){
      this.getExchangeRatesList(this.$props.currencies)
    },
   computed : {
      ...mapState({
        exchangeRates: ({currency}) => currency.exchangeRates
      })
    },
   methods: {
      ...mapActions(['getExchangeRatesList'])
    },
  }
</script>

<style scoped>
.list-group-item {
    font-weight: "bold";
    border: 0;
}
</style>