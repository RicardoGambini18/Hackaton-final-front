<template>
  <nav class="Nav l-container-full" v-if="(visibility) && (solid)">
      <div class="l-section">
          <router-link to="/" class="Nav__Logo">
            <img src="/assets/logo.svg">
          </router-link>
          <img src="/assets/menu.svg" class="Nav__Menu">
      </div>
  </nav>
  <nav class="Nav l-container-full" id="nav" v-else-if="(visibility) && (solid==false)">
      <div class="l-section">
          <router-link to="/" class="Nav__Logo">
            <img src="/assets/logo.svg">
          </router-link>
          <img src="/assets/menu.svg" class="Nav__Menu">
      </div>
  </nav>
</template>

<script>
export default {
    name: 'Header',
    props:{
        visibility: Boolean,
        solid: Boolean
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
        &__Logo{
            width: 138px;
            height: 22px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &__Menu{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
    #nav{
        background: none;
        transition: .3s all;
    }
    @media screen and (min-width: 770px){
        .Nav{
            height: 70px;
            &__Logo{
                width: 184px;
                height: 33px;
            }
            &__Menu{
                width: 30px;
                height: 30px;
            }
        }
    }
</style>