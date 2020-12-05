<template>
  <div class="accede">
      <div class="accede-hero">
          <LoginHero />
      </div>
      <div class="accede-log">
          <LoginFrom />
      </div>
  </div>
</template>

<script>
import LoginHero from '@/components/LoginHero.vue';
import LoginFrom from '@/components/LoginFrom.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Acceso',
    components:{
        LoginHero,
        LoginFrom
    },
    methods:{
        ...mapActions(['setFooterAction','setNavAction'])
    },
    created(){
        this.setFooterAction(false);
        this.setNavAction({
            visibility: false,
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

<style scoped lang="scss">
    .accede{
        width: 100vw;
        min-height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "log";
        &-hero{
            grid-area: hero;
            display: none;
        }
        &-log{
            grid-area: log;
        }
    }
    @media screen and (min-width: 990px){
        .accede{
            grid-template-columns: 1fr 420px;
            grid-template-rows: 1fr;
            grid-template-areas: "hero log";
            &-hero{
                display: block;
            }
        }
    }
    @media (orientation: portrait) {
        .accede{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "log";
            &-hero{
                display: none;
            }
        }
    }
</style>