<template>
   <section class="blog">
        <div class="container">
            <div class="heading">
                <h4>Recent Post</h4>
                <router-link :to="{name: 'blog-list'}">View ALl Posts <i class="fa-solid fa-angles-right"></i></router-link>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(item, index) in latestPosts.slice(0, 4)" :key="index">
                    <div class="blog-item">
                        <div class="item-image">
                           <router-link :to="{name: 'single', params:{id: index}}">
                            <img v-if="item.urlToImage" :src="item.urlToImage" :alt="item.title">
                            <img v-else :src="defaultImg" :alt="item.title">
                           </router-link>
                            <!-- <date-format :date="item.publishedAt"  short-month :no-days="false" :no-year="true" /> -->
                            <span class="date-time"> 
                                <span class="day">{{ moment(item.publishedAt).format("DD") }}</span>
                                <span class="month">{{ moment(item.publishedAt).format("MMM") }}</span>
                            </span> 
                        </div>
                        <div class="content">
                            <router-link :to="{name: 'single', params:{id: index}}"> {{ item.title }} </router-link>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>
<script>
import defaultImg from './../../assets/images/latest-project/2.jpg';
import { mapState } from 'vuex';
import moment from 'moment';
export default {
    computed: mapState({
        latestPosts: state => state.latestPosts.all
    }),
    created () {
        this.$store.dispatch('latestPosts/getAllLatestPosts');
        this.moment = moment;
    },
  }
</script>
