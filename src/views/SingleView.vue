<template>
    <div>
        <template v-for="item in products">
            <div v-if=" item.id == id " class="list">
                <h1>{{ item.title }}</h1>
                <h1>{{ item.body }}</h1>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created () {
    this.$store.dispatch('products/getAllProducts');
    this.id = this.$route.params.id;
  }
}
</script>