<template>
  <div class="ShoppingCard">
      <div class="ShoppingCard__Img">
          <img src="/assets/back_end.png">
      </div>
      <div class="ShoppingCard__Content">
          <p class="Title-4 ShoppingCard__Title">Diseño de Experiencia de Usuario</p>
          <p class="Title-4 ShoppingCard__Price">S/ 269.00</p>
          <p class="Parrafo ShoppingCard__Discount">Dto. 25%</p>
          <p class="Parrafo ShoppingCard__Delete">Eliminar</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ShoppingCard'
}
</script>

<style scoped lang="scss">
    .ShoppingCard{
        width: 100%;
        min-height: 100px;
        display: grid;
        grid-template-columns: 133px 1fr;
        grid-column-gap: 20px;
        &__Img{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &__Content{
            width: 100%;
            height: 100%;
            position: relative;
            padding-bottom: 25px;
        }
        &__Title{
            font-weight: bold;
        }
        &__Price{
            font-weight: bold;
            position: absolute;
            bottom: 0;
            right: 0;
        }
        &__Discount{
            font-weight: bold;
            color: var(--Primary);
            margin-top: 5px;
        }
        &__Delete{
            color: var(--Primary);
            text-decoration: underline;
            position: absolute;
            bottom: 0;
            left: 0;
            cursor: pointer;
        }
    }
    @media screen and (min-width: 770px){
        .ShoppingCard{
            &__Content{
                padding-right: 90px;
                padding-bottom: 0;
            }
            &__Price{
                top: 0;
            }
        }
    }
</style>