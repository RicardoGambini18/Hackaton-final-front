<template>
  <div class="LoginIn">
      <div class="LoginIn__Social">
          <p class="Parrafo">Puedes registrarte con:</p>
          <div class="IconBox">
              <div>
                  <img src="/assets/facebok-icon.svg">
              </div>
              <div>
                  <img src="/assets/linkdint-icon.svg">
              </div>
          </div>
          <p class="Parrafo">También puedes registrarte con tu correo</p>
      </div>
      <form class="LoginIn__Form" @submit.prevent="logInUsuarioAction(usuario)">
            <input class="Parrafo" type="email" placeholder="Correo electrónico" v-model="usuario.email" required> 
            <input class="Parrafo" type="password" placeholder="Contraseña" v-model="usuario.password" required>
            <p class="error Parrafo" v-if="error">{{error}}</p>
            <input class="Title-5" type="submit" value="Ingresar">
      </form>
  </div>
</template>

<script>
import { mapActions , mapState } from 'vuex'

export default {
    name: 'LoginIn',
    data(){
        return {
            usuario:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        ...mapActions(['logInUsuarioAction'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>

<style scoped lang="scss">
    .LoginIn{
        padding: 0 35px;
        width: 100%;
        .error{
            color: white;
            background: rgb(252, 53, 53);
            text-align: center;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 15px;
            margin-bottom: -15px;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
        }
        &__Social{
            margin-top: 35px;
            display: grid;
            grid-row-gap: 15px;
            .Parrafo{
                text-align: center;
            }
            .IconBox{
                display: flex;
                justify-content: center;
                img{
                    margin: 0 5px;
                    cursor: pointer;
                }
            }
        }
        &__Form{
            margin-top: 40px;
            input{
                width: 100%;
                height: 50px;
            }
            input[type="email"],input[type="password"]{
                border: 1px solid gray;
                padding: 0px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            input[type="submit"]{
                margin-top: 50px;
                border-radius: 10px;
                border: none;
                background-color: var(--Primary);
                color: white;
                font-weight: bold;
                cursor: pointer;
                transition: .3s all;
                margin-bottom: 30px;
            }
            input[type="submit"]:hover{
                background-color: var(--Dark);
            }
        }
    }
</style>