<!-- Please remove this file from your project -->
<template>
<section class="bg-gray-50">

  <div class="mx-5 max-w-screen-lg lg:max-w-screen-xl md:mx-auto lg:px-16 pt-28">
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
    <div v-for="(stock, index) in stocks.stockPerformance" :key="index" class=" px-6 py-4 border shadow-md border-solid border-black-100 rounded-lg bg-white font-ibm">
      <div class="mx-auto text-center">
      <div class=" text-blue-800 font-semibold text-md leading-5 tracking-tight">{{stock.ticker}}</div>
      <div class=" text-green-700 font-semibold text-md leading-5 tracking-tight">{{stock.name}}</div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Time Frame</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.timeframe}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Buy Price</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.buyPrice}}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Recommended Date</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.recommendedDate}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Resistance</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.resistance}}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Cut Loss</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.sl}}</div>
        </div>
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Support</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.support}}</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 pt-5">
        <div class="">
          <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Target</div>
          <div class="text-blue-900 text-center font-normal text-md">{{stock.target}}</div>
        </div>
        <div class="">
        <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Upside Potential</div>
        <div class="text-blue-900 text-center font-normal text-md">{{stock.upsidePotential}}</div>
        </div>
      </div>
      <div class="">
        <div class="text-blue-800 font-semibold text-md leading-5 tracking-tight border-b border-solid border-gray-300 text-center">Bet</div>
        <div class="text-blue-900 text-center font-normal text-md">{{stock.bet}}</div>
      </div>
    </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  data: () => ({
    stocks: []
  }),
  methods: {
    async fetchSomething() {
    const ip = await this.$axios.$get('http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/performance')
    this.stocks = ip
    console.log("respo", this.stocks.stockPerformance)
  }
  },
 mounted() {
   this.fetchSomething()
 } 
}
</script>
