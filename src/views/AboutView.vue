<template>

  <div class="container">
    <div class="about">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="item in listItems">
          <div class="card">
            <img src="./../assets/images/background/bg-1.jpg" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{ item.body }}</p>
            </div>
            <div class="card-body">
              <a target="_blank" href="#" class="card-link">View More</a>
            </div>
          </div>
        </div>
      </div>
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
        console.log(this.listItems);
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>
<style>
  .about{
    padding: 10px 0px;
  }
</style>