<template>
  <main>
    <BannerView />
    <Servicebanner />
    <section class="ads-banner">
      <div class="container">
        <div class="heading">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam amet, eius fuga eligendi vel!</h2>
        </div>
        <div class="ads-button">
          <router-link class="btn btn-forsale" to="/">Learn More</router-link>
          <span>or</span>
          <router-link class="btn btn-forlease" to="/">Buy Theme</router-link>
        </div>
      </div>
    </section>
    <RecentProject />
    <SidebarView />
    <BlogView />
  </main>
</template>
<script>
import BannerView from '../components/homeView/BannerView.vue';
import Servicebanner from '../components/homeView/Servicebanner.vue';
import RecentProject from '../components/homeView/RecentProject.vue';
import SidebarView from '../components/homeView/SidebarView.vue';
import BlogView from '../components/homeView/BlogView.vue';
import './../assets/styles/Sass/homeView.scss';
export default {
  components: {
    BannerView,
    Servicebanner,
    RecentProject,
    SidebarView,
    BlogView
  }
}
</script>