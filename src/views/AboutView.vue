<template>

  <div class="container">
    <div class="about">
      <div class="row">
        <div class="col-md-4 mt-5" v-for="item in listItems">
          <div class="card">
            <img v-if="item.urlToImage" :src="item.urlToImage" class="card-img-top" :alt="item.title">
            <img v-else src="./../assets/images/bg-1.jpg" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-body">
              <a target="_blank" :href="item.url" class="card-link">View More</a>
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
        const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-12-13&sortBy=publishedAt&apiKey=dd29379b24b146158f657cbdbceb0dac");
        
        const finalRes = await res.json();
        
        this.listItems = finalRes.articles;
        //console.log(this.listItems);
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