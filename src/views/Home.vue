<template>
  <div class="home">
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components:{
    Hero,
    Header,
    Footer
  }
}
</script>
