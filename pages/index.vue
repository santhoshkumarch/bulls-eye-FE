<template>
  <Tutorial/>
</template>

<script>
export default {
  methods: {
    fetchSomething: function() {
      console.log("Output");
    const ip = this.$axios.$get('http://bullseyealerts-env.eba-mtqxphmq.us-east-1.elasticbeanstalk.com/api/stocks/performance')
    // this.ip = ip
    console.log("Output", ip)
  },
  mounted() {
    console.log("update")
  }
  }
}
</script>
