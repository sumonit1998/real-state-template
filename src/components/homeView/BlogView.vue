<template>
   <section class="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-12" v-for="item in allBlog.slice(0, 3)">
                    <div class="blog-item">
                        <img v-if="item.urlToImage" :src="item.urlToImage" :alt="item.title">
                        <img v-else :src="defaultImg" :alt="item.title">
                        <div class="content">
                            <router-link :to="{naem: 'single', params:{id: 20}}"> {{ item.title }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>
<script>
import defaultImg from './../../assets/images/latest-project/2.jpg';
export default {
    data() {
      return {
        allBlog: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dd29379b24b146158f657cbdbceb0dac");
        const finalRes = await res.json();
        this.allBlog = finalRes.articles;
        console.log(this.allBlog);
      }
    },
    mounted() {
      this.getData();
    },
  }
</script>
