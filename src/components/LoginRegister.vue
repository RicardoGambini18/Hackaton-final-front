<template>
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
      <div class="LoginRegister__Form">
          <input class="Parrafo" type="text" placeholder="Nombres y Apellidos">
          <input class="Parrafo" type="email" placeholder="Correo electrónico">
          <input class="Parrafo" type="password" placeholder="Contraseña">
          <input class="Parrafo" type="password" placeholder="Repite Contraseña">
          <div class="FormCheck">
              <input type="checkbox" id="registerTerm">
              <label for="registerTerm" class="Parrafo">Acepto <span class="is-term">Términos y condiciones</span></label>
          </div>
          <input type="submit" class="Title-5" value="Registrarse">
      </div>
  </div>
</template>

<script>
export default {
    name: 'LoginRegister'
}
</script>

<style scoped lang="scss">
    .LoginRegister{
        padding: 0 35px;
        width: 100%;
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