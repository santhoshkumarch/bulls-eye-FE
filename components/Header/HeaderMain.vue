<template>
    <div class=" bg-red-400 p-5 flex items-center justify-between">
        <div class="font-bold text-white text-5xl filter drop-shadow-xl stroke-current">Bulls Eye</div>
        <div class="font-bold text-white text-2xl filter drop-shadow-xl stroke-current float-right cursor-pointer" v-on:click="reload">Performance</div>
    </div>
</template>

<script>
export default {
methods:{
reload(){
    window.location.reload()
}}}
</script>
