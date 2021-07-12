<!-- Please remove this file from your project -->
<template>
<section class="bg-gray-50">

  <div class="mx-5 max-w-screen-lg lg:max-w-screen-xl md:mx-auto lg:px-16 pt-28">
    <div class="flex items-center justify-between gap-8 text-blue-800 font-semibold text-md leading-5 tracking-tight ">
      <div class="flex items-center gap-8">
        <ul class="p-4 border border-solid rounded-full" v-for="(bet, index) in bets" :key="index">
          <li class="capitalize cursor-pointer" v-on:click="selectTab(index)">{{bet}}</li>
        </ul>
      </div>
      
        <popper trigger="hover"
              :options="{
                placement: 'bottom',
                modifiers: { offset: { offset: '0,10px' } }
              }"
              :append-to-body="true">
           <div class="pop">
             <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight cursor-pointer" v-on:click="onselect('US')">US</div>
             <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight cursor-pointer" v-on:click="onselect('IN')">IN</div>
           </div>
           <div slot="reference" class="cursor-pointer ">{{countryCode}}</div>
            </popper>
        
    </div>
    <div v-if="noData" class="flex items-center justify-center text-blue-800 font-semibold text-md leading-5 tracking-tight pt-5" >No Data Found</div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-2 text-center pt-5" v-if="tabData">
      <div v-for="(stock, index) in betTabs" :key="index" class=" px-6 py-4 border shadow-md border-solid border-black-100 rounded-lg bg-white font-ibm">
        <div class="mx-auto text-center">
      <div class=" text-blue-800 font-semibold text-md leading-5 tracking-tight">{{stock.ticker}}</div>
      <div class=" text-green-700 font-semibold text-md leading-5 tracking-tight">{{stock.name}}</div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Buy Price</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.buyPrice}}</div>
        </div>
        <div class="">
           <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Target</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.target}}</div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Resistance</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.resistance}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Support</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.support}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">SL</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.sl}}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Recommended Date</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.recommendedDate}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Upside Potential</div>
        <div class="text-blue-900 text-center font-normal text-md">{{stock.upsidePotential}}&#37;</div>
        </div>
      </div>
      </div>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 gap-2 text-center pt-5" v-if="!tabData">
    <div v-for="(stock, index) in stocks" :key="index" class=" px-6 py-4 border shadow-md border-solid border-black-100 rounded-lg bg-white font-ibm">
      <div class="mx-auto text-center">
      <div class=" text-blue-800 font-semibold text-md leading-5 tracking-tight">{{stock.ticker}}</div>
      <div class=" text-green-700 font-semibold text-md leading-5 tracking-tight">{{stock.name}}</div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Buy Price</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.buyPrice}}</div>
        </div>
        <div class="">
           <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Target</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.target}}</div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Resistance</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.resistance}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Support</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.support}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">SL</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.sl}}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Recommended Date</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.recommendedDate}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Upside Potential</div>
        <div class="text-blue-900 text-center font-normal text-md">{{stock.upsidePotential}}&#37;</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
</template>
<script>
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
components: {
      popper: Popper
    },
  data: () => ({
    stocks: [],
    upsidePotentials: [],
    stockPerformance: [],
    bets: [],
    countryCode: String,
    tabData: false,
    betTabs: [],
    noData: false
  }),
  methods: {
    serialisResponse(params){
      params.forEach((itr) => {
        itr['upsidePotential'] = itr['upsidePotential'].substring(0,2);
      })
      return params
    },
    async fetchSomething() {
    const resp = await this.$axios.$get('http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/performance')
    this.stockPerformance = resp.stockPerformance;
    this.stocks = this.serialisResponse(this.stockPerformance)
  },
  async fetchBet() {
    const resp = await this.$axios.$get('http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/query/bets')
    this.bets = resp;
  },
  onselect(params){
    this.countryCode = params
  },
  async selectTab(tabName) {
    
    this.tabData = true;
    this.noData = false;
      const resp = await this.$axios.$get('http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/query?bet='+tabName+'&country='+this.countryCode)
      this.betTabs = resp.stockPerformance;
      if(this.betTabs.length == 0){
        return this.noData = true;
      }
      console.log(this.betTabs)
  }
  },
 mounted() {
   this.fetchSomething();
   this.fetchBet();
   this.countryCode = 'US'
 } 
}
</script>

<style scoped>
.pop {
  @apply absolute px-8 py-3 bg-white rounded-lg shadow-lg border border-solid border-gray-300 z-50;
}
.pop:before,
.pop:after {
  content: '';
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #cfd8e3;
  @apply w-0 h-0 absolute bottom-100tw left-0 right-0 z-10 mx-auto;
}
.pop:after {
  border-bottom-color: #fff;
  transform: translateY(2px);
  @apply z-20;
}
</style>