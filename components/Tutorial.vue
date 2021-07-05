<!-- Please remove this file from your project -->
<template>
<section class="max-h-screen">

  <div class="bg-gray-100 mx-5 max-w-screen-lg lg:max-w-screen-xl md:mx-auto lg:px-16 pt-28">
    <div class="grid md:grid-cols-3 grid-cols-1 gap-8">
    <div v-for="(stock, index) in stocks.stockPerformance" :key="index" class="border border-solid border-black-100 rounded">
      <div>{{stock.ticker}}</div>
      <div>{{stock.name}}</div>
      <div>{{stock.timeframe}}</div>
      <div>{{stock.buyPrice}}</div>
      <div>{{stock.recommendedDate}}</div>
      <div>{{stock.resistance}}</div>
      <div>{{stock.sl}}</div>
      <div>{{stock.support}}</div>
      <div>{{stock.target}}</div>
      <div>{{stock.upsidePotential}}</div>
      <div>{{stock.bet}}</div>
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
