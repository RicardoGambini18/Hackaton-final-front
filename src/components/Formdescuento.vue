<template>
  <div class="Formdescuento l-container-pd">
      <div class="l-section Formdescuento-grid">
          <div class="Formdescuento-form">
              <form class="FormCel">
                  <img src="/assets/movil_mukup.svg" class="FormCel-Img">
                  <div  class="FormCel-box">
                      <div class="FormCel-form">
                          <h3 class="Title-4">Postula y obtén un 10% de descuento en el programa</h3>
                          <div>
                              <input class="f-Small" type="text" placeholder="NOMBRE">
                          </div>
                          <div>
                              <input class="f-Small" type="text" placeholder="CELULAR">
                          </div>
                          <div>
                              <input class="f-Small" type="text" placeholder="CORREO ELECTRÓNICO">
                          </div>
                          <div>
                              <input class="f-Small" type="text" placeholder="PROGRAMA">
                          </div>
                          <div class="check-politica">
                              <input type="checkbox" id="check-condiciones">
                              <label class="f-Small" for="check-condiciones">Acepto las políticas de privacidad.</label>
                          </div>
                          <div>
                              <button type="submit" class="Title-5">Quiero postular</button>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Formdescuento'
}
</script>

<style scoped lang="scss">
    .Formdescuento{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 3;
        &-grid{
            height: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 40px;
        }
        &-form{
            grid-column-start: 3;
            grid-column-end: 4;
            height: 100%;
            display: flex;
            justify-content: center;
        }
    }
    .FormCel{
        position: relative;
        width: 100%;
        max-width: 370px;
        margin-top: 50px;
        &-Img{
            width: 100%;
        }
        &-box{
            position: absolute;
            top: 0; 
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-form{
            width: 60%;
            height: 100%;
            padding-top: 23%;
            input{
                width: 100%;
                padding: 10px 5px;
                border: 1px solid #8B9099;
                border-radius: 5px;
                font-size: 12px;
            }
            .Title-4{
                margin-bottom: 10px;
            }
            .check-politica{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                margin-top: 10px;
                input{
                    width: 24px;
                    height: 24px;
                    margin-right: 10px;
                }
            }
            button{
                padding: 10px 5px;
                width: 100%;
                border: none;
                border-radius: 5px;
                background-color: var(--Primary);
                color: var(--Light);
                font-weight: bold;
            }
            div{
                margin-bottom: 5px;
            }
        }
    }
    @media screen and (min-width: 1050px) {
        .FormCel{
            &-form{
                div{
                    margin-bottom: 8px;
                }
                .check-politica{
                    margin-bottom: 19px;
                    margin-top: 12px;
                }
                .Title-4{
                    margin-bottom: 12px;
                }
            }
        }
    }
    @media screen and (min-width: 1120px) {
        .FormCel{
            &-form{
                div{
                    margin-bottom: 15px;
                }
                .check-politica{
                    margin-bottom: 20px;
                    margin-top: 15px;
                }
                .Title-4{
                    margin-bottom: 12px;
                }
            }
        }
    }
    @media screen and (min-width: 1200px) {
        .FormCel{
            &-form{
                input{
                    padding: 15px 8px;
                }
            }
        }
    }
    @media screen and (min-width: 1265px) {
        .FormCel{
            &-form{
                input{
                    padding: 20px 10px;
                }
                div{
                    margin-bottom: 15px;
                }
                .check-politica{
                    margin-bottom: 20px;
                    margin-top: 15px;
                }
                .Title-4{
                    margin-bottom: 20px;
                }
            }
        }
    }
    @media screen and (max-width: 990px) {
        .Formdescuento{
            display: none;
        }
    }
</style>