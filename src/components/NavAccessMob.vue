<template>
  <div class="NavAccessMob">
    <div class="NavAccessMob__Cart">
      <router-link to="/carrito">
        <img src="/assets/shopping_card.svg">
      </router-link>
      <div class="CartNumber" v-if="carrito.length">
        <span class="Parrafo">{{carrito.length}}</span>
      </div>
    </div>
    <div class="NavAccessMob__Menu">
      <input type="checkbox">
      <img src="/assets/close.svg" class="Img__Close">
      <img src="/assets/menu.svg" class="Img__Menu">
      <div class="NavMob">
        <div v-if="usuario">
          <div class="NavMob__Img">
            <img src="/assets/user.svg">
          </div>
          <hr>
          <p class="Title-4">{{usuario.nombre}}</p>
          <p class="Title-4">{{usuario.email}}</p>
          <button @click="logOutAction()" class="Title-5">Cerrar sesión</button>
        </div>
        <div class="NavLog" v-else>
          <p class="Parrafo">Ningún usuario encontrado, inicia sesión para comprar un curso.</p>
          <router-link to="/acceso/iniciar-sesion" class="Title-5">
            Iniciar sesión
          </router-link>
          <router-link to="/acceso/registro" class="Title-5">
            Regístrate
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';

export default {
  name: 'NavAccessMob',
  computed:{
    ...mapState(['usuario','carrito'])
  },
  methods:{
    ...mapActions(['logOutAction'])
  }
}
</script>

<style scoped lang="scss">
  .NavAccessMob{
    height: 100%;
    display: flex;
    &__Cart{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50px;
      position: relative;
      img{
        width: 25px;
        height: 25px;
      }
      .CartNumber{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--Primary);
        top: 7px;
        right: 5px;
        .Parrafo{
            color: white;
        }
      }
    }
    &__Menu{
      height: 100%;
      width: 50px;
      position: relative;
      input,.Img__Close,.Img__Menu{
        position: absolute;
        width: 25px;
        height: 25px;
        top: 12.5px;
        left: 12.5px;
      }
      input{
        z-index: 2;
        opacity: 0;
      }
      .Img__Close{
        z-index: 1;
        opacity: 0;
        transition: .3s all;
      }
      .Img__Menu{
        z-index: 1;
        opacity: 1;
        transition: .3s all;
      }
      input:checked ~ .Img__Close{
        opacity: 1;
        transform: rotate(180deg);
      }
      input:checked ~ .Img__Menu{
        opacity: 0;
        transform: rotate(180deg);
      }
      .NavMob{
        width: 300px;
        height: calc(100vh - 50px);
        position: fixed;
        top: 50px;
        right: -300px;
        transition: .3s all;
        background: var(--Dark);
        overflow: auto;
        padding: 20px;
        .NavLog{
          width: 100%;
          .Parrafo{
            color: white;
            text-align: center;
            margin-top: 20px;
          }
          a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 260px;
            height: 40px;
            margin-top: 20px;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            background: var(--Primary);
          }
        }
        &__Img{
          width: 100px;
          height: 100px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        hr{
          margin: 25px 0;
          border: none;
          height: 1px;
          background: white;
        }
        .Title-4{
          color: white;
          text-align: center;
          margin-bottom: 15px;
        }
        button{
          margin-top: 15px;
          width: 100%;
          height: 40px;
          background: var(--Primary);
          border:none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
        }
      }
      input:checked ~ .NavMob{
        right: 0
      }
    }
  }
  @media screen and (min-width: 990px){
    .NavAccessMob{
      display: none;
    }
  }
</style>