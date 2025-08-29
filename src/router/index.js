import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Menu from "../components/Menu.vue";
import ShowProduct from "../views/ShowProducts.vue";
import About from "../views/AboutView.vue";


const routes = [
  { path: "/", name: "Home", component:  Home },
  { path: "/showproduct", name: "ShowProduct", component: ShowProduct },
  { path: "/about", name: "about", component: About},
  { path: "/menu", name: "menu", component: Menu}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
