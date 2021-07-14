<!-- Please remove this file from your project -->
<template>
  <section class="bg-gray-50">
    <div
      class="mx-5 max-w-screen-lg lg:max-w-screen-xl md:mx-auto lg:px-16 pt-28"
    >
      <div
        class="
          flex
          items-center
          justify-between
          gap-8
          text-blue-800
          font-semibold
          text-md
          leading-5
          tracking-tight
        "
      >
        <div class="flex items-center gap-8">
          <ul
            class="p-4 border border-solid rounded-full"
            v-for="(bet, index) in bets"
            :key="index"
          >
            <li class="capitalize cursor-pointer" v-on:click="selectTab(index)">
              {{ bet }}
            </li>
          </ul>
        </div>

        <popper
          trigger="hover"
          :options="{
            placement: 'bottom',
            modifiers: { offset: { offset: '0,10px' } },
          }"
          :append-to-body="true"
        >
          <div class="pop">
            <div
              class="
                text-blue-800
                font-semibold
                text-md
                leading-5
                tracking-tight
                cursor-pointer
              "
              v-on:click="onselect('US')"
            >
              US
            </div>
            <div
              class="
                text-blue-800
                font-semibold
                text-md
                leading-5
                tracking-tight
                cursor-pointer
              "
              v-on:click="onselect('IND')"
            >
              IN
            </div>
          </div>
          <div slot="reference" class="cursor-pointer">{{ countryCode }}</div>
        </popper>
      </div>
      <div
        v-if="noData"
        class="
          flex
          items-center
          justify-center
          text-blue-800
          font-semibold
          text-md
          leading-5
          tracking-tight
          pt-5
        "
      >
        No Data Found
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="">
          <div v-for="(sectorName, index) in sectorNames" :key="index">
            <div class="" v-on:click="selectSector(index)">
              {{ sectorName }}
            </div>
          </div>
        </div>
        <div class="">data</div>
      </div>
    </div>
  </section>
</template>
<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { getSectors } from "@/api/FetchApis/fetchapis";
import { getSectorsName } from "@/api/FetchApis/fetchapis";

export default {
  components: {
    popper: Popper,
  },
  data: () => ({
    stocks: [],
    upsidePotentials: [],
    stockPerformance: [],
    bets: [],
    countryCode: String,
    tabData: false,
    betTabs: [],
    noData: false,
    sectorNames: [],
    sectorCodes: String,
  }),
  methods: {
    selectSector(sectorCode) {
      this.sectorCodes = sectorCode;
      this.fetchSectors();
    },
    serialisResponse(params) {
      params.forEach((itr) => {
        itr["upsidePotential"] = itr["upsidePotential"].substring(0, 2);
      });
      return params;
    },
    async fetchSectors() {
      let sectorCountry = this.countryCode;
      let sectorName = this.sectorCodes;

      getSectors(sectorCountry, sectorName).then((response) => {
        console.log("data", response.output);
      });
    },
    async fetchSectorNames() {
      let countrycode = this.countryCode;
      getSectorsName(countrycode).then((resp) => {
        this.sectorNames = resp.output;
        console.log(this.sectorNames);
      });
    },
    onselect(params) {
      this.countryCode = params;
    },
  },
  mounted() {
    this.fetchSectorNames();
    this.countryCode = "IND";
  },
};
</script>
