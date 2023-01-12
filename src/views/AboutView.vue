<template>

  <div class="container">
    <div class="about" v-for="item in listItems">
      <h4>Id: {{ item.id }}</h4>
      <h6>{{ item.title }}</h6>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const finalRes = await res.json();
        this.listItems = finalRes;
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>
<style>
  .about{
    padding: 10px 0px;
  }
</style>