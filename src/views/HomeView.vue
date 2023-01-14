<template>
  <main>
    <BannerView />
    <section class="service-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="d-flex">
              <div class="item-img">
                <img src="@/assets/images/icon/modern.png" alt="modern">
              </div>
              <div class="item-content">
                <h4>Clean & Modern Design</h4>
                <p>Eum accusantium sint a! Vero, dolor voluptatum.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex">
              <div class="item-img">
                <img src="@/assets/images/icon/customization.png" alt="modern">
              </div>
              <div class="item-content">
                <h4>Easy Customization</h4>
                <p>Lorem ipsum dolor sit consectetur amet adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-flex">
              <div class="item-img">
                <img src="@/assets/images/icon/responsive.png" alt="modern">
              </div>
              <div class="item-content">
                <h4>Responsive Design</h4>
                <p> Voluptates assumenda recusandae sequi pariatur eos illo!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import BannerView from '../components/homeView/BannerView.vue';
export default {
  components: {
    BannerView
  }
}
</script>