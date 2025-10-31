<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #86bfe7ff;">
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="/">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- ✅ แสดงเฉพาะยังไม่ล็อกอิน -->
          <template v-if="!isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login_customer">Login</router-link>
            </li>
          </template>

          <!-- ✅ แสดงเฉพาะเมื่อเข้าสู่ระบบแล้ว -->
          <template v-else>

            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <!-- Customer Dropdown -->
            <li class="nav-item dropdown" @click="toggleDropdown('customer')">
              <a class="nav-link dropdown-toggle" href="#" role="button">
                Customer
              </a>
              <ul class="dropdown-menu" :class="{'show': dropdowns.customer}">
                <li><a class="dropdown-item" href="/customer">Customer</a></li>
                <li><a class="dropdown-item" href="/customer_edit">Customer Edit</a></li>
              </ul>
            </li>

            <!-- Product Dropdown -->
            <li class="nav-item dropdown" @click="toggleDropdown('product')">
              <a class="nav-link dropdown-toggle" href="#" role="button">
                Product
              </a>
              <ul class="dropdown-menu" :class="{'show': dropdowns.product}">
                <li><a class="dropdown-item" href="/product">Product</a></li>
                <li><a class="dropdown-item" href="/product_edit">Product Edit</a></li>
              </ul>
            </li>

            <!-- Student Dropdown -->
            <li class="nav-item dropdown" @click="toggleDropdown('student')">
              <a class="nav-link dropdown-toggle" href="#" role="button">
                Student
              </a>
              <ul class="dropdown-menu" :class="{'show': dropdowns.student}">
                <li><a class="dropdown-item" href="/stud">Student</a></li>
                <li><a class="dropdown-item" href="/student_edit">Student Edit</a></li>
              </ul>
            </li>

            <!-- Employee Dropdown -->
            <li class="nav-item dropdown" @click="toggleDropdown('employee')">
              <a class="nav-link dropdown-toggle" href="#" role="button">
                Employee
              </a>
              <ul class="dropdown-menu" :class="{'show': dropdowns.employee}">
                <li><a class="dropdown-item" href="/Emp">Employee</a></li>
                <li><a class="dropdown-item" href="/Emp_edit">Employee Edit</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-danger" href="#" @click="logout">Logout</a>
            </li>
          </template>

        </ul>

        <!-- ✅ Search แสดงเมื่อ Login แล้ว -->
        <form class="d-flex" role="search" v-if="isLoggedIn">
          <input class="form-control me-2" type="search" placeholder="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLoggedIn: false,
      dropdowns: {
        customer: false,
        product: false,
        student: false,
        employee: false,
      }
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.isLoggedIn = localStorage.getItem("customerLogin") === "true";
    },
    logout() {
      if (confirm("ต้องการออกจากระบบหรือไม่?")) {
        localStorage.removeItem("customerLogin");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        this.$router.push("/login");
      }
    },
    toggleDropdown(menu) {
      for (let key in this.dropdowns) {
        this.dropdowns[key] = false;
      }
      this.dropdowns[menu] = !this.dropdowns[menu];
    }
  },
  watch: {
    $route() {
      this.checkLogin();
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #86bfe7ff !important;
}
.nav-link {
  color: white !important;
  font-weight: 500;
}
.nav-link:hover {
  text-decoration: underline;
}
.dropdown-menu {
  background-color: #ffffff;
}
.show {
  display: block;
}
</style>
