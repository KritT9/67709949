import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Menu from "../components/Menu.vue";
import ShowProduct from "../views/ShowProducts.vue";
import About from "../views/AboutView.vue";
import Customer from "../views/customer.vue";
import addCustomer from "../views/add_customer.vue";
import addProduct from "../views/add_product.vue";
import Product from "../views/product.vue";
import Student from "../views/Student.vue";
import addStudent from "../views/add_student.vue";
import CustomerEdit from "../views/customer_edit.vue";
import ProductEdit from "../views/product_edit.vue";
import StudentEdit from "../views/Student_edit.vue";
import Emp from "../views/employee.vue";
import addEmp from "../views/add_Emp.vue";
import editEmp from "../views/employee_edit.vue";


const routes = [
  { path: "/", name: "Home", component:  Home },
  { path: "/showproduct", name: "ShowProduct", component: ShowProduct },
  { path: "/about", name: "about", component: About},
  { path: "/menu", name: "menu", component: Menu},
  { path: "/customer", name: "customer", component: Customer},
  { path: "/add_customer", name: "add_customers", component: addCustomer},
  { path: "/product", name: "product", component: Product},
  { path: "/add_product", name: "add_product", component: addProduct},
  { path: "/Stud", name: "Stud", component: Student},
  { path: "/add_Stud", name: "add_Stud", component: addStudent},
  { path: "/customer_edit", name: "customer_edit", component: CustomerEdit},
  { path: "/product_edit", name: "product_edit", component: ProductEdit},
  {path: "/student_edit", name: "student_edit", component: StudentEdit},
  { path: "/Emp", name: "Emp", component: Emp},
  { path: "/add_Emp", name: "add_Emp", component: addEmp},
  { path: "/Emp_edit", name: "Emp_edit", component: editEmp}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
