<template>
  <div>
    <ul>
      <li v-for="beer in beers" :key="beer._id" class="mb-4 text-xl">
        <router-link :to="`/beers/${beer.number}`" class="underline"
          >{{ beer.number }}: {{ beer.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { sanity } from "../sanity"

export default {
  name: "BeersList",
  data() {
    return {
      beers: [],
    }
  },
  async created() {
    this.beers = await sanity.fetch("*[_type == 'beer'] | order(number asc)")
  },
}
</script>
