<template>
  <form class="Efectivo">
      <div class="Efectivo__Inicio">
            <img src="/assets/pago.svg">
            <p class="Title-4">Pasos a seguir</p>
            <p class="Parrafo">Enviaremos un código de pago CIP a tu correo electrónico, con el cual podrás pagar de la siguiente manera:</p>
      </div>
      <div class="Efectivo__Banca">
          <p class="Title-4">Banca por internet y móvil</p>
          <p class="Parrafo">Paga por internet vía transferencia desde el aplicativo móvil o web de tu banco de preferencia.</p>
          <div class="BankBox">
              <img src="/assets/presencial-1-bbva.svg">
              <img src="/assets/presencial-2-bcp.svg">
              <img src="/assets/presencial-3-ibk.svg">
              <img src="/assets/presencial-4-scotiabank.svg">
              <img src="/assets/presencial-5-banbif.svg">
              <img src="/assets/presencial-6-arequipa.svg">
          </div>
      </div>
      <div class="Efectivo__Agente">
          <p class="Title-4">Agencias y agentes</p>
          <p class="Parrafo">Realiza depósitos en agencias bancarias, agentes o bodegas a nivel nacional.</p>
          <div class="BankBox">
              <img src="/assets/presencial-1-bbva.svg">
              <img src="/assets/presencial-2-bcp.svg">
              <img src="/assets/presencial-3-ibk.svg">
              <img src="/assets/presencial-4-scotiabank.svg">
              <img src="/assets/presencial-5-banbif.svg">
              <img src="/assets/presencial-6-arequipa.svg">
              <img src="/assets/presencial-7-kasnet.svg">
              <img src="/assets/presencial-8-wester.svg">
              <img src="/assets/presencial-9-fullcarga.svg">
              <img src="/assets/presencial-10-tambo.svg">
              <img src="/assets/presencial-11-money.svg">
              <img src="/assets/presencial-12-disashop.svg">
          </div>
      </div>
      <div class="Efectivo__Factura">
          <label for="SoliFactura" class="Title-4">Solicitar Factura</label>
          <div class="Checkbox">
              <input type="checkbox" id="SoliFactura" required>
              <div class="Checkbox__Bar"></div>
              <div class="Checkbox__Circle"></div>
          </div>
      </div>
      <div class="Efectivo__Submit">
          <input class="Title-5" type="submit" value="Obtener código CIP">
      </div>
  </form>
</template>

<script>
export default {
    name: 'Efectivo'
}
</script>

<style scoped lang="scss">
    .Efectivo{
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        &__Inicio{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            img{
                width: 233px;
                height: 58px;
            }
            .Title-4{
                font-weight: bold;
            }
        }
        &__Banca{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            .Title-4{
                font-weight: bold;
            }
            .BankBox{
                display: grid;
                grid-template-columns: repeat(auto-fill, 90px);
                grid-template-rows: repeat(auto-fill, 30px);
                grid-column-gap: 30px;
                grid-row-gap: 20px;
                img{
                    width: 90px;
                    height: 30px;
                }
            }
        }
        &__Agente{
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
            .Title-4{
                font-weight: bold;
            }
            .BankBox{
                display: grid;
                grid-template-columns: repeat(auto-fill, 90px);
                grid-template-rows: repeat(auto-fill, 30px);
                grid-column-gap: 30px;
                grid-row-gap: 20px;
                img{
                    width: 90px;
                    height: 30px;
                }
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
        .Efectivo{
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