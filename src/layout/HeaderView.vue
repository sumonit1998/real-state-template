<template>
    <header class="header">
        <section id="header">
            <div class="top-bar">
                <div class="container">
                    <div class="header-top">
                        <div class="brand-name me-auto">
                            <RouterLink to="/" ><img src="@/assets/images/logo.png" alt="Brand Name" /></RouterLink>
                        </div>
                        <div class="social-icon">
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <a href=""><i class="fa-brands fa-twitter" ></i></a>
                            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href=""><i class="fa-brands fa-vimeo-v" ></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="main-menu" :class="{ 'sticky': scrolled }" v-show="handleScroll">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="container">
                    <!-- <a href="#" class="navbar-brand">Brand</a> -->
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <i class="fa-solid fa-bars" ></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav me-auto">
                            <template v-for="item in mainMenu">
                                <template v-if="item.items">
                                    <div class="nav-item dropdown">
                                        <a :href="item.path" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ item.label }} <i class="fa-solid fa-chevron-down" ></i></a>
                                        <div class="dropdown-menu">
                                            <RouterLink v-for="childItem in item.items" :to="childItem.path" class="dropdown-item">{{ childItem.label }} </RouterLink>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <RouterLink  :to="item.path" class="nav-item nav-link" tabindex="-1">{{ item.label }}</RouterLink>
                                </template>
                            </template>
                        </div>
                    </div>
                    <form class="d-flex search-box">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn" ><i class="fa-solid fa-magnifying-glass" ></i></button>
                    </form>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return{
            mainMenu:[{
                label: 'Home', path: 'javascript:;',
                items: [
                    {label: 'Home Version 1', path: '/'},
                    {label: 'Home Version 2', path: '/'},
                    {label: 'Home Version 3', path: '/'}
                ]
            },
            {
                label: 'Blog', path: 'javascript:;',
                items: [
                    { label: 'Blog grid', path: '/'},
                    { label: 'Blog list', path: '/'}
                ]
            },
            {
                label: 'Portfolio', path: 'javascript:;',
                items: [
                    {label: 'portfolio list', path: '/'},
                    {label: 'portfolio gird', path: '/'}
                ]
            },
            {
                label: 'Features', path: 'javascript:;',
                items: [
                    { label: 'Features about', path: '/about'},
                    { label: 'Features service', path: '/'},
                    { label: 'Features FAQ', path: '/'},
                ]
            },
            {
                label: 'Contact', path: '/'
            }],
            limitPosition: 200,
            scrolled: false,
            lastPosition: 80
        }
    },
    methods: {
    handleScroll() {
      if (
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>