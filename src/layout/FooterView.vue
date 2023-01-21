<template>
   <section class="footer">
        <div class="main-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="about">
                                    <div class="heading">
                                        <h4>About Us</h4>
                                    </div>
                                    <img src="./../assets/images/logo.png" alt="">
                                    <p class="text-night">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, et? Ex ea ipsa dolores voluptatum maxime laudantium soluta eum excepturi!</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-post">
                                    <div class="heading">
                                        <h4>Latest Post</h4>
                                    </div>

                                    <div v-for="item in latestPosts.slice(0, 2)" class="d-flex m-1 align-items-start mb-2">
                                        <img v-if="item.urlToImage" :src="item.urlToImage" :alt="item.title">
                                        <img v-else :src="defaultImg" :alt="item.title">
                                        <div class="content ps-2">
                                            <router-link class="text-night" to="/">{{ item.title }}</router-link>
                                            <span>{{ moment(item.publishedAt).format("DD/MM/YYYY") }}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="quick-link">
                                    <div class="heading">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div class="d-flex align-items-start mb-4">
                                        <span class="me-2 color-primary"><i class="fa-solid fa-location-dot"></i></span>
                                        <span class="text-night">Sabalia, Tangail, 1900, <br />Dhaka, Bangladesh</span>
                                    </div>
                                    <div class="d-flex align-items-start mb-4">
                                        <span class="me-2 color-primary"><i class="fa-solid fa-phone"></i></span>
                                        <span class="text-night">+880 1724-209859</span>
                                    </div>
                                    <div class="d-flex align-items-start">
                                        <span class="me-2 color-primary"><i class="fa-solid fa-envelope"></i></span>
                                        <span class="text-night">info@yourdomain.com</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="latest-post">
                                    <div class="heading">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <p class="mb-4 text-night">Be the first to know about releases and industry news and insights.</p>
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter email to subscribe">
                                        <span class="input-group-btn">
                                        <button class="btn" type="submit">Submit</button>
                                        </span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right text-night">
            Copyright © 2023, All Right Reserved <router-link to="/" class="color-primary">Shumon</router-link>
        </div>
   </section>
</template>

<script>
import defaultImg from './../assets/images/latest-project/2.jpg';
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