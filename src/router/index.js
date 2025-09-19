import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Menu from "../components/Menu.vue";
import ShowProduct from "../views/ShowProducts.vue";
import About from "../views/AboutView.vue";
import Customer from "../views/customer.vue";
import addCustomer from "../views/add_customer.vue";
import addProduct from "../views/add_product.vue";
import Product from "../views/product.vue";



const routes = [
  { path: "/", name: "Home", component:  Home },
  { path: "/showproduct", name: "ShowProduct", component: ShowProduct },
  { path: "/about", name: "about", component: About},
  { path: "/menu", name: "menu", component: Menu},
  { path: "/customer", name: "customer", component: Customer},
  { path: "/add_customer", name: "add_customers", component: addCustomer},
  { path: "/product", name: "product", component: Product},
  { path: "/add_product", name: "add_product", component: addProduct}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
