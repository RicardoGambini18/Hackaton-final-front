<template>
  <div class="home">
    <Hero 
      :home="true"
      :title="['¡Explota todo tu potencial', 'tecnológico!']"
    />
    <Formdescuento />
    <div class="l-container-full home-respaldo">
      <div class="l-section">
        <Respaldo white="false" />
      </div>
    </div>
    <Programas />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';
import Respaldo from '@/components/Respaldo.vue';
import Programas from '@/components/Programas.vue';
import Formdescuento from '@/components/Formdescuento.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components:{
    Hero,
    Footer,
    Respaldo,
    Programas,
    Formdescuento
  },
  methods:{
      ...mapActions(['setFooterAction', 'setNavAction'])
  },
  created(){
      this.setFooterAction(true);
      this.setNavAction({
        visibility: true,
        solid: false,
        vista:{
          view: "",
          back: ""
        }
      });
      window.scroll(0,0);
  }
}
</script>

<style lang="scss" scoped>
  .home{
    &-respaldo{
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
</style>
