<template>
  <router-link to="/" class="inline-block mb-8 underline"
    >👈 Zurück zur Bierliste</router-link
  >
  <article class="font-sans text-gray-800">
    <h1
      class="mb-4 text-4xl font-black tracking-wide md:(text-5xl mb-8) text-gray-900"
    >
      {{ beer.number }}.
      {{ beer.name }}
    </h1>
    <h2
      class="mb-10 text-2xl font-semibold text-blue-600 md:(text-3xl mb-16) text-center"
    >
      {{ beer.description }}
    </h2>
    <p class="mb-6 md:mb-12">
      <span class="text-2xl font-bold">{{ beer.abv }}% </span>
      <span class="text-xl font-semibold">Alc.</span>
    </p>
    <div class="grid gap-6 sm:grid-cols-2 md:gap-12">
      <div>
        <h3>Malz</h3>
        <ul>
          <li v-for="malt in beer.malts" :key="malt._id" class="text-xl">
            {{ malt.name }}
          </li>
        </ul>
      </div>
      <div>
        <h3>Hopfen</h3>
        <ul>
          <li v-for="hop in beer.hops" :key="hop._id" class="text-xl">
            {{ hop.name }}
          </li>
        </ul>
      </div>
      <div>
        <h3>Hefe</h3>
        <ul>
          <li v-for="yeast in beer.yeasts" :key="yeast._id" class="text-xl">
            {{ yeast.name }}
          </li>
        </ul>
      </div>
      <div v-if="beer.ingredients">
        <h3>Andere Zutaten</h3>
        <ul>
          <li
            v-for="ingredient in beer.ingredients"
            :key="ingredient._id"
            class="text-xl"
          >
            {{ ingredient.name }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import { sanity } from "../sanity"
export default {
  name: "BeerDetails",
  data() {
    return {
      beer: {},
    }
  },
  async created() {
    this.beer = await sanity.fetch(
      "*[_type == 'beer' && number == $number][0] { ..., hops[]->, malts[]->, yeasts[]-> }",
      {
        number: this.$route.params.beer,
      }
    )
  },
}
</script>

<style lang="postcss" scoped>
h3 {
  @apply text-2xl font-semibold md:text-3xl;
}
</style>
