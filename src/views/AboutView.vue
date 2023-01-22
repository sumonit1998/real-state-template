<template>

  <div class="container">
    <div class="about">
      <div class="row">
        <div class="col-md-4 mt-5" v-for=" ( product, index )  in latestPost" :key="index">
          <div class="card">
            <img src="./../assets/images/background/bg-1.jpg" class="card-img-top" :alt="product.title">
            <div class="card-body">
              <h5 class="card-title">{{product.title}} {{ index }}</h5>
              <p class="card-text">{{ product.body }}</p>
            </div>
            <div class="card-body">
              <router-link :to="{ name: 'single', params: { id: index}, props: {product}}">Navigate to Page2</router-link>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example mt-5">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    latestPost: state => state.latestPosts.all
  }),
  mounted() {
    this.$store.dispatch("latestPosts/getAllLatestPosts");
    
  },
}
</script>
<style>
  .about{
    padding: 10px 0px;
  }
</style>