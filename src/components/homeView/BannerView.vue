<template>
    <div class="hero-slider">
        <Carousel :mouseDrag="false">
        <Slide v-for="slider in HeroBanner" :key="slider" >
                <div class="carousel__item" :style="{backgroundImage:'url('+ slider.image +')'}">
                <div class="container">
                        <div class="carousel-text">
                            <h2> {{ slider.title }}</h2>
                            <p>{{ slider.dec }}</p>
                            <router-link to="/" class="btn btn-forsale">For Sale</router-link>
                            <router-link to="/" class="btn btn-forlease">For Lease</router-link>
                        </div>
                </div>
                </div>
        </Slide>
        <template #addons>
            <Pagination />
        </template>
        </Carousel>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data() {
        return {
            HeroBanner:[{
                image: './../../src/assets/images/background/bg-4.jpg',
                title: 'Uniquely matrix optimal manufactured product',
                dec: 'Intrinsically myocardial out-of-the-box internal or "organic" sources rather than one-to-one channels. Conveniently whiteboard cutting-edge content without economically sound methods of empower'
            },
            {
                image: './../../src/assets/images/background/bg-3.jpg',
                title: 'Real Estate Marketing Ideas You Can Start Implementing Today',
                dec: 'Apart from trust, your marketing efforts also help generate qualified leads that can be the anchor your real estate business needs to survive in the competitive realty arena.'
            }
        ]
        }
    }
  })
  </script>