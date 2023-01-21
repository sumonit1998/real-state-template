<template>
   <section class="recent-project">
    <div class="container">
      <div class="heading">
         <h4>Latest Project</h4>
      </div>
      <div class="latest-project">
         <Carousel :settings="settings" :breakpoints="breakpoints" :mouseDrag="false">
            <Slide v-for="item in projects" :key="item">
               <div class="carousel__item">
                  <div class="project-item">
                    <div class="item-img">
                        <div class="item-overlay">
                           <router-link :to="{ name: 'single', params: { id: item.id }}"><i class="fa-solid fa-eye"></i> See Details</router-link>
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
import { mapState } from 'vuex';


export default ({
   data() {
      return {
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
   computed: mapState({
        projects: state => state.projects.allProjects
    }),
    created () {
        this.$store.dispatch('projects/getAllProjects')
    }

})
</script>