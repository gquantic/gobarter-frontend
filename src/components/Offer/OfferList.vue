<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-4 col-md-4 mb-3" v-for="(item, id) in offers" v-bind:key="id">
        <OfferListItem :item="item" :key="id" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OfferListItem from "@/components/Offer/OfferListItem.vue";

export default {
  components: {OfferListItem},
  data() {
    return {
      offers: [],
    }
  },
  mounted() {
    this.loadAllOffers();
  },
  methods: {
    loadAllOffers() {
      axios.get("https://gobarter.ru/api/v1/offers")
          .then(response => {
            this.offers = response.data
          });
    }
  }
}
</script>