 required<template>
  <div class="LoginRegister">
      <div class="LoginRegister__Social">
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
      <form @submit.prevent="registrarUsuarioAction(registro)" class="LoginRegister__Form">
          <input class="Parrafo" type="text" placeholder="Nombres y Apellidos" v-model="registro.nombre" required>
          <input class="Parrafo" type="email" placeholder="Correo electrónico" v-model="registro.email" required>
          <input class="Parrafo" type="password" placeholder="Contraseña" v-model="registro.pass1" required>
          <input class="Parrafo" type="password" placeholder="Repite Contraseña" v-model="registro.pass2" required>
          <div class="FormCheck">
              <input type="checkbox" id="registerTerm" v-model="registro.term" required>
              <label for="registerTerm" class="Parrafo">Acepto <span class="is-term">Términos y condiciones</span></label>
          </div>
          <p class="error Parrafo" v-if="error">
              {{error}}
          </p>
          <input type="submit" class="Title-5" value="Registrarse">
      </form>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex';

export default {
    name: 'LoginRegister',
    data(){
        return{
            registro:{
                nombre: "",
                email: "",
                pass1: "",
                pass2: "",
                term: ""
            }
        }
    },
    methods:{
        ...mapActions(['registrarUsuarioAction'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>

<style scoped lang="scss">
    .LoginRegister{
        padding: 0 35px;
        width: 100%;
        .error{
            color: white;
            background: rgb(252, 53, 53);
            text-align: center;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 20px;
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
            input[type="text"],input[type="email"],input[type="password"]{
                border: 1px solid gray;
                padding: 0px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            .FormCheck{
                display: flex;
                align-items: center;
                input[type="checkbox"]{
                    width: 20px;
                    height: 20px;
                    margin-right: 15px;
                }
                .is-term{
                    font-weight: bold;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            input[type="submit"]{
                margin-top: 40px;
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