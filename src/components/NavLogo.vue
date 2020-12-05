<template>
  <div class="NavLogo">
      <router-link to="/" class="NavLogo__Home is-view" v-if="view">
          <img src="/assets/logo.svg">
      </router-link>
      <router-link to="/" class="NavLogo__Home" v-else>
          <img src="/assets/logo.svg">
      </router-link>
      <div class="NavLogo__Back" v-if="view">
            <router-link :to="`/${back}`">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17.012" viewBox="0 0 20 17.012">
                    <path id="Trazado_5025" data-name="Trazado 5025" d="M10,14.294V0H7.016V14.294l-4.91-4.91L0,11.49,8.5,20l8.51-8.51L14.906,9.384Zm0,0" transform="translate(20) rotate(90)" fill="white"/>
                </svg>
            </router-link>
            <p class="Title-5">{{view}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'NavLogo',
    props:{
        view: String,
        back: String
    }
}
</script>

<style scoped lang="scss">
    .NavLogo{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &__Home{
            width: 138px;
            height: 22px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &__Back{
            height: 100%;
            display: flex;
            align-items: center;
            svg{
                width: 13px;
                height: 15px;
                margin-right: 15px;
            }
            .Title-5{
                font-weight: bold;
                color: white;
            }
        }
        .is-view{
            display: none;
        }
    }
    @media screen and (min-width: 990px){
        .NavLogo{
            &__Home{
                width: 184px;
                height: 33px;
            }
        }
    }
    @media screen and (min-width: 990px){
        .NavLogo{
            .is-view{
                display: block;
            }
            .is-view + .NavLogo__Back{
                display: none;
            }
        }
    }
</style>