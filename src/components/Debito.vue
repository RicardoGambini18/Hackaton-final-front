<template>
  <form class="Debito">
      <div class="Debito__Personal">
          <p class="Title-4">Datos personales</p>
          <input class="Parrafo" type="number" placeholder="Documento de identidad" required>
          <input class="Parrafo" type="email" placeholder="Correo electrónico" required>
      </div>
      <div class="Debito__Tarjeta">
          <p class="Title-4">Ingresa la información de tu tarjeta</p>
          <input type="text" placeholder="Nombre del titular" required>
          <input type="number" placeholder="Número de tarjeta" required>
          <div class="InputBox">
              <input type="number" placeholder="Mes" required>
              <input type="number" placeholder="Año" required>
              <input type="number" placeholder="CVC/CVV" required>
          </div>
      </div>
      <div class="Debito__Factura">
          <label for="SolFactura" class="Title-4">Solicitar Factura</label>
          <div class="Checkbox">
              <input type="checkbox" id="SolFactura" required>
              <div class="Checkbox__Bar"></div>
              <div class="Checkbox__Circle"></div>
          </div>
      </div>
      <div class="Debito__Submit">
          <input class="Title-5" type="submit" value="Finalizar compra">
      </div>
  </form>
</template>

<script>
export default {
    name: 'Debito'
}
</script>

<style scoped lang="scss">
    .Debito{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 30px;
        &__Personal{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            .Title-4{
                font-weight: bold;
            }
            input{
                width: 100%;
                height: 50px;
                padding: 0 20px;
                border: 1px solid #c4c4c4;
                border-radius: 5px;
            }
        }
        &__Tarjeta{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            .Title-4{
                font-weight: bold;
            }
            input{
                width: 100%;
                height: 50px;
                padding: 0 20px;
                border: 1px solid #c4c4c4;
                border-radius: 5px;
            }
            .InputBox{
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 25px;
            }
        }
        &__Factura{
            display: flex;
            align-items: center;
            .Title-4{
                font-weight: bold;
                margin-right: 20px;
            }
            .Checkbox{
                width: 40px;
                height: 24px;
                position: relative;
                &__Bar{
                    position: absolute;
                    top: 5px;
                    left: 0;
                    width: 100%;
                    height: 14px;
                    background: #d4d4d4;
                    border: none;
                    border-radius: 7px;
                    z-index: 1;
                    transition: .3s all;
                }
                &__Circle{
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 2px;
                    left: 0;
                    border-radius: 100%;
                    background-color: #a8a8a8;
                    z-index: 2;
                    transition: .3s all;
                }
                input{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 3;
                    opacity: 0;
                }
                input:checked ~ .Checkbox__Circle{
                    left: 20px;
                    background-color: #5640FF;
                }
                input:checked ~ .Checkbox__Bar{
                    background: #C7C1FC;
                }
            }
        }
        &__Submit{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            input{
                width: 100%;
                height: 50px;
                border: none;
                background: var(--Primary);
                color: white;
                font-weight: bold;
                border-radius: 10px;
            }
        }
    }
    @media screen and (min-width: 770px){
        .Debito{
            &__Personal{
                grid-template-columns: 1fr 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
            &__Tarjeta{
                grid-template-columns: 1fr 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
            &__Submit{
                grid-template-columns: 1fr 1fr;
                grid-column-gap: 30px;
                input{
                    grid-column-start: 2;
                    grid-column-end: 3;
                }
            }   
        }
    }
    @media screen and (min-width: 990px){
        .Debito{
            &__Personal{
                grid-template-columns: 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
            }
            &__Tarjeta{
                grid-template-columns: 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
            }
            &__Submit{
                grid-template-columns: 1fr;
                input{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
            }
        }
    }
    @media screen and (min-width: 1200px){
        .Debito{
            &__Personal{
                grid-template-columns: 1fr 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
            &__Tarjeta{
                grid-template-columns: 1fr 1fr;
                grid-row-gap: 20px;
                grid-column-gap: 30px;
                .Title-4{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
            &__Submit{
                grid-template-columns: 1fr 1fr;
                input{
                    grid-column-start: 2;
                    grid-column-end: 3;
                }
            } 
        }
    }
</style>