<template>

  <div class="container">
    <div class="about">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="product in products" :key="product.id" :product="product">
          <div class="card">
            <img src="./../assets/images/background/bg-1.jpg" class="card-img-top" :alt="product.title">
            <div class="card-body">
              <h5 class="card-title">{{product.title}}</h5>
              <p class="card-text">{{ product.body }}</p>
            </div>
            <div class="card-body">
              <router-link :to="{ name: 'single', params: { id: 25}, props: {product}}">Navigate to Page2</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style>
  .about{
    padding: 10px 0px;
  }
</style>