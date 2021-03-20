import { createRouter, createWebHistory } from "vue-router"
import BeersList from "./pages/BeersList.vue"
import BeerDetails from "./pages/BeerDetails.vue"

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: BeersList },
  { path: "/beers/:beer", component: BeerDetails },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
