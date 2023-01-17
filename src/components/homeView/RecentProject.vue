<template>
   <section class="recent-project">
    <div class="container">
      <div class="heading">
         <h4>Latest Project</h4>
      </div>
      <div class="latest-project">
         <Carousel :settings="settings" :breakpoints="breakpoints" :mouseDrag="false">
            <Slide v-for="item in listItems.slice(0, 10)" :key="item">
               <div class="carousel__item">
                  <div class="project-item">
                    <div class="item-img">
                        <div class="item-overlay">
                           <router-link to="/about/latest-project"><font-awesome-icon icon="fa-solid fa-eye" /> See Details</router-link>
                        </div>
                        <img :src="item.image" :alt="item.title">
                    </div>
                     <h4>{{ item.title }}</h4>
                     <p>{{ item.desc}}</p>
                  </div>
               </div>
            </Slide>
            <template #addons>
               <Navigation />
            </template>
         </Carousel>
      </div>
    </div>
   </section>
</template>
<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default ({
   data() {
      return {
        listItems: [{
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure.',
         desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at natus ducimus maiores quam sint doloremque culpa a dignissimos recusandae!',
         image: './../src/assets/images/latest-project/1.jpg'
        },
        {
         title: 'Nesciunt, natus sapiente eum aperiam aspernatur aliquam, minima cumque.',
         desc: 'Nesciunt, natus sapiente eum aperiam aspernatur aliquam, minima cumque inventore numquam fuga maxime autem eius sequi reprehenderit iste quasi doloremque quam labore,',
         image: './../src/assets/images/latest-project/2.jpg'
        },
        {
         title: 'Tempora iure accusantium delectus ratione reiciendis saepe numquam quos.',
         desc: 'Tempora iure accusantium delectus ratione reiciendis saepe numquam quos possimus fuga et quam pariatur optio eos aut commodi, dolorum eveniet! Consequatur nam molestias odio!',
         image: './../src/assets/images/latest-project/3.jpg'
        },
        {
         title: 'Tempora dolorem tempore atque maiores in deleniti officiis, animi rerum.',
         desc: 'Tempora dolorem tempore atque maiores in deleniti officiis, animi rerum. Delectus esse totam ducimus distinctio necessitatibus placeat accusantium quo explicabo repellat.',
         image: './../src/assets/images/latest-project/4.jpg'
        },
        {
         title: 'Sit adipisci dignissimos dolor eum, quisquam est recusandae velit.',
         desc: 'Sit adipisci dignissimos dolor eum, quisquam est recusandae velit. Hic aliquid quasi dolorum minima nobis quod rerum, doloremque cum eos quidem ullam ut.',
         image: './../src/assets/images/latest-project/5.jpg'
        }],
         settings: {
            itemsToShow: 1,
            snapAlign: 'center',
         },
         breakpoints: {
            400: {
            itemsToShow: 1,
            snapAlign: 'center',
            },
            700: {
            itemsToShow: 2,
            snapAlign: 'center',
            },
            1024: {
            itemsToShow: 3,
            snapAlign: 'center',
            },
         }
      }
   },
   components: {
      Carousel,
      Slide,
      Navigation,
   },

})
</script>