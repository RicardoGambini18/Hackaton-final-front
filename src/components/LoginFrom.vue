<template>
  <section class="LoginForm">
      <div class="LoginForm__Content">
          <div class="LoginForm__Switch">
              <div v-if="view == 'iniciar-sesion'" class="Switch__Login is-active">
                  <span class="Title-5">Iniciar Sesión</span>
                  <div class="Switch__Stick"></div>
              </div>
              <div
              v-else
              class="Switch__Login"
              @click="setView('iniciar-sesion')"
              >
                  <span class="Title-5">Iniciar Sesión</span>
                  <div class="Switch__Stick"></div>
              </div>

              <div v-if="view == 'registro'" class="Switch__Register is-active">
                  <span class="Title-5">Registrarse</span>
                  <div class="Switch__Stick"></div>
              </div>
              <div
              v-else
              class="Switch__Register"
              @click="setView('registro')"
              >
                  <span class="Title-5">Registrarse</span>
                  <div class="Switch__Stick"></div>
              </div>
          </div>
          <LoginIn v-if="view == 'iniciar-sesion'" />
          <LoginRegister v-if="view == 'registro'" />
      </div>
  </section>
</template>
<script>
import LoginIn from '@/components/LoginIn.vue';
import LoginRegister from '@/components/LoginRegister.vue'
import router from '@/router'

export default {
    name: 'LoginFrom',
    components:{
      LoginIn,
      LoginRegister
    },
    data(){
        return{
            view: this.$route.params.view
        }
    }, 
    methods:{
        setView(vista){
            this.view = vista;
            router.push(`/acceso/${vista}`);
        }
    }
}
</script>

<style scoped lang="scss">
    .LoginForm{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-color: white;
        &__Content{
            width: 100%;
            height: 100%;
        }
        &__Switch{
            width: 100%;
            height: 60px;
            border-bottom: 3px solid rgb(224, 224, 224);
            padding: 0px 35px;
            display: grid;
            grid-template-columns: 1fr 1fr; 
            div,a{
                display: flex;
                color: black;
                justify-content: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                .Title-5{
                    font-weight: bold;
                }
                .Switch__Stick{
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 0;
                    height: 5px;
                    background-color: black;
                    transition: .3s all;
                }
            }
            div:hover .Switch__Stick,a:hover .Switch__Stick{
                width: 100%;
            }
            .is-active .Switch__Stick{
                width: 100%;
            }
        }
    }
</style>