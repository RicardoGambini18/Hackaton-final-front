<template>
  <div class="DiscontCode">
      <div class="DiscontCode__Content">
        <div class="DiscontCode__Title">
            <p class="Title-3">Subtotal</p>
            <p class="Title-3">S/600.00</p>
        </div>
        <div class="DiscontCode__Input">
            <input type="text" class="Parrafo" placeholder="Agrega un código de descuento">
            <img src="/assets/imput_send.svg">
        </div>
        <router-link to="/pasarela" v-if="carrito.length">
             <button class="DiscontCode__Button Title-5">Continuar</button>
        </router-link>
        <router-link to="/" v-else>
             <button class="DiscontCode__Button Title-5" disabled style="cursor: no-drop">Continuar</button>
        </router-link>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'DiscontCode',
    computed:{
        ...mapState(['carrito'])
    }
}
</script>

<style scoped lang="scss">
    .DiscontCode{
        width: 100%;
        max-width: 433px;
        margin: 0 auto;
        padding: 50px 20px;
        background: white;
        border-radius: 10px;
        &__Content{
            max-width: 333px;
            margin: 0 auto;
        }
        &__Title{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            .Title-3{
                color: var(--Primary);
                font-weight: bold;
            }
        }
        &__Input{
            position: relative;
            margin-bottom: 35px;
            input{
                width: 100%;
                height: 50px;
                padding: 0 40px 0 16px;
                border: 1px solid #c4c4c4;
                border-radius: 5px;
            }
            img{
                position: absolute;
                right: 15px;
                top: 19px;
                cursor: pointer;
                transition: .3s all;
            }
            img:hover{
                transform: scale(1.4);
            }
        }
        &__Button{
            font-weight: bold;
            width: 100%;
            height: 50px;
            border: none;
            border-radius: 10px;
            background-color: var(--Primary);
            color: white;
        }
    }
</style>