<template>
  <nav class="Nav l-container-full" v-if="(visibility) && (solid)">
      <div class="l-section">
          <NavLogo
            :view="vista.view"
            :back="vista.back"
          />
          <NavAccess
            :number="carrito.length"
          />
          <NavAccessMob />
      </div>
  </nav>
  <nav class="Nav l-container-full" id="nav" v-else-if="(visibility) && (solid==false)">
      <div class="l-section">
          <NavLogo
            :view="vista.view"
            :back="vista.back"
          />
          <NavAccess
            :number="carrito.length"
          />
          <NavAccessMob />
      </div>
  </nav>
</template>

<script>
import { mapActions , mapState } from 'vuex';
import NavLogo from '@/components/NavLogo.vue';
import NavAccess from '@/components/NavAccess.vue';
import NavAccessMob from '@/components/NavAccessMob.vue';

export default {
    name: 'Header',
    props:{
        visibility: Boolean,
        solid: Boolean,
        vista: Object
    },
    components:{
        NavLogo,
        NavAccess,
        NavAccessMob
    },
    computed:{
        ...mapState(['carrito'])
    },
    methods:{
        ...mapActions(['cargarUsuarioAction'])
    },
    created(){
        window.addEventListener("scroll",()=>{
            const nav = document.getElementById("nav");
            if(nav){
                if(window.scrollY >= 100){
                    nav.style.background = "#000425"
                }
                else{
                    nav.style.background = "none"
                }
            }
        })
        this.cargarUsuarioAction();
    },
    updated(){
        this.cargarUsuarioAction();
    }
}
</script>

<style scoped lang="scss">
    .Nav{
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        background: var(--Dark); 
        z-index: 5;
        .l-section{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
    }
    #nav{
        background: none;
        transition: .3s all;
    }
    @media screen and (min-width: 990px){
        .Nav{
            height: 70px;
        }
    }
</style>