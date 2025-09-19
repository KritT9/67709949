<template>
  <section id="menu" class="py-5">
     <div class="container mb-3">
      <a class="btn btn-primary" href="/add_product" role="button">Add+</a>
    </div>
    <div class="container">
      <h2 class="text-center mb-4 fw-bold">ของแนะนำ</h2>
      <div class="row g-4">
        <div class="col-md-4" v-for="item in menu" :key="item.id">
          <div class="card h-100 shadow-sm">
            <img :src="item.image" class="card-img-top" :alt="item.name" />
            <div class="card-body text-center">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text text-muted">{{ item.description }}</p>
              <p class="fw-bold text-danger">{{ item.price }} บาท</p>
              <button class="btn btn-outline-danger btn-sm">สั่งเลย</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        { id: 1, name: "เตา", description: "-", price: 199, image: "https://down-th.img.susercontent.com/file/f6be4b6742343613510d032d4479cdcc" },
        { id: 2, name: "ตู้", description: "-", price: 299, image: "https://tse4.mm.bing.net/th/id/OIP.vahvlvOpB_HI2R0SwU6o4gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 3, name: "นํ้า", description: "-", price: 249, image: "https://tse3.mm.bing.net/th/id/OIP.aIS0vXt6QSvnrcNMYHqclQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { id: 1, name: "เต้าหู", description: "-", price: 199, image: "https://www.gourmetandcuisine.com/Images/editor_upload/_editor20211005010859_original.jpg" },
        { id: 2, name: "ชุดซ้อนส้อม", description: "-", price: 299, image: "https://down-th.img.susercontent.com/file/9636d750b6989c874ffdc0259f52ea08" },
        { id: 3, name: "ป่า", description: "-", price: 249, image: "https://tse2.mm.bing.net/th/id/OIP.wRdyTWpmfLmasSDscvpCOwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
      ]
    };
  }
};
</script>
