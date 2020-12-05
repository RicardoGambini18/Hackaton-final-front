<template>
  <div class="NavAccess">
      <router-link
      v-if="!usuario"
      :to="{
            name: 'Acceso',
            params: {
                view: 'iniciar-sesion'
            }
        }"
      class="NavItem"
      >
          <p class="Title-4">Iniciar sesión</p>
      </router-link>

      <router-link
      v-if="!usuario"
      class="NavItem"
      :to="{
            name: 'Acceso',
            params: {
                view: 'registro'
            }
        }"
      >
          <p class="Title-4">Regístrate</p>
      </router-link>

      <div class="NavAccess__User" v-else>
          <div class="User__Img">
              <img src="/assets/user.svg">
          </div>
          <p class="Title-4">{{usuario.nombre}}</p>
          <div class="UserBox">
              <div class="UserBox__Img">
                  <img src="/assets/user.svg">
              </div>
              <hr>
              <p class="Parrafo">{{usuario.nombre}}</p>
              <p class="Parrafo">{{usuario.email}}</p>
              <button class="Title-5" @click="logOutAction()">Cerrar sesión</button>
          </div>
      </div>

      <router-link to="/carrito" class="NavAccess__Carrito NavItem">
          <img src="/assets/shopping_card.svg">
          <div class="CartNumber" v-if="number">
              <span class="Parrafo">{{number}}</span>
          </div>
      </router-link>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';
import router from '@/router'

export default {
    name: 'NavAccess',
    props:{
        number: Number
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods:{
        ...mapActions(['logOutAction'])
    }
}
</script>

<style scoped lang="scss">
    .NavAccess{
        display: none;
        height: 100%;
        .NavItem{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            cursor:pointer;
            transition: .3s all;
            .Title-4{
                font-weight: bold;
                color: white;
            }
        }
        .NavItem:hover{
            background-color: rgba(255, 255, 255, 0.158);
        }
        &__User{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 0 20px;
            color: white;
            transition: .3s all;
            position: relative;
            .User__Img{
                width: 20px;
                height: 20px;
                border-radius: 10px;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .Title-4{
                color: white;
            }
            .UserBox{
                position: absolute;
                top: 100%;
                left: 0;
                width: 250px;
                max-height: 0;
                padding: 0;
                transition: .3s all;
                background: var(--Dark);
                overflow: hidden;
                &__Img{
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                    margin: 0 auto;
                    background-color: var(--Dark);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                hr{
                    width: 100%;
                    margin: 15px 0;
                    height: 1px;
                    background: white;
                    border: none;
                }
                .Parrafo{
                    text-align: center;
                    color: white;
                    margin-bottom: 15px;
                }
                button{
                    width: 100%;
                    height: 40px;
                    background: var(--Primary);
                    color: white;
                    font-weight: bold;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
        &__User:hover{
            background-color: rgba(255, 255, 255, 0.158);
        }
        &__User:hover .UserBox{
            max-height: 700px;
            padding: 20px;
        }
        &__Carrito{
            position: relative;
            img{
                width: 25px;
                height: 25px;
            }
            .CartNumber{
                position: absolute;
                top: 12px;
                right: 9px;
                width: 20px;
                height: 20px;
                border-radius: 10px;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--Primary);
                .Parrafo{
                    color: white;
                }
            }
        }
    }
    @media screen and (min-width: 990px){
        .NavAccess{
            display: flex;
        }
    }
</style>