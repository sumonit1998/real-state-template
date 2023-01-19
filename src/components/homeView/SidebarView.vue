<template>
    <div class="sidebar">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-sm-12">
                    <div class="work-faq">
                        <div class="heading">
                            <h4>Why work with us?</h4>
                        </div>
                        <div class="accordion" id="accordionFaq">
                            <div class="accrdion-sidebar">
                                <div class="accordion-header" :id="'heading'+item.id" v-for="(item, index) in accListItem" :key="item.id">
                                    <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+item.id" aria-expanded="true" :aria-controls="'collapse'+item.id">
                                        {{ item.title }}
                                    </button>
                                </div>
                            </div>
                            <div class="accrdion-content">
                                <div class="accordion-item" v-for="(item, index) in accListItem" :key="item.id">
                                    <div :id="'collapse'+item.id" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading'+item.id" data-bs-parent="#accordionFaq">
                                        <div class="d-flex align-items-center">
                                            <div class="icon"><font-awesome-icon :icon="item.icon" /></div>
                                            <div class="title">
                                                <h2>{{ item.title }}</h2>
                                                <h4>{{ item.subtitle }}</h4>
                                            </div>
                                        </div>
                                        <p>{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                   <div class="client-testimonials">
                        <div class="heading">
                            <h4>Client Testimonials</h4>
                        </div>
                        <div class="client-review">
                            <Carousel :mouseDrag="false">
                                <Slide v-for="slide in 5" :key="slide">
                                    <div class="carousel__item">
                                        <div class="review">
                                            <p>"Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est."</p>
                                            <div class="d-flex align-items-center p-2">
                                                <img src="./../../assets/images/user-pic/4.jpg" alt="">
                                                <div class="client">
                                                    <h4>Jayonto Sarkar</h4>
                                                    <p>Project manager</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <template #addons>
                                <Navigation />
                                </template>
                            </Carousel>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
export default {
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data () {
        return {
            accListItem: [{
                id: 'one',
                title: 'Extended Documentatioin',
                subtitle: 'Webpages can and will look pretty different from one another.',
                desc: 'With all of the user-friendly website-building tools available in today’s market, almost anybody who wants to build a website can do so with relative ease. ',
                icon: 'fa-solid fa-book'
            },
            {
                id: 'two',
                title: 'Cross Browser',
                subtitle: 'This article gives an overview of cross-browser testing.',
                desc: 'Cross-browser testing is the practice of ensuring that a website works across various browsers and devices. Web developers should consider',
                icon: 'fa-brands fa-safari'
            },
            {
                id: 'three',
                title: 'Ongoing Support ',
                subtitle: 'We don’t have a one-size-fits-all approach to client support.',
                desc: 'We will tailor a support arrangement for you that meets your specific needs and budget. We offer two different support models',
                icon: 'fa-solid fa-headset'
            }],
            clientReview: []
        }
    }
}
</script>