<template>
  <div class="ShoppingCard">
      <div class="ShoppingCard__Img">
          <img src="/assets/back_end.png">
      </div>
      <div class="ShoppingCard__Content is-resumen" v-if="resumen == 'true'">
          <p class="Title-4 ShoppingCard__Title">{{curso.nombre}}</p>
          <p class="Title-4 ShoppingCard__Price">S/ {{Math.round(curso.precio * ((100 - curso.descuento)/100))}}.00</p>
          <p class="Parrafo ShoppingCard__Discount">Dto. {{curso.descuento}}%</p>
          <p class="Parrafo ShoppingCard__Delete">Eliminar</p>
      </div>
      <div class="ShoppingCard__Content" v-else>
          <p class="Title-4 ShoppingCard__Title">{{curso.nombre}}</p>
          <p class="Title-4 ShoppingCard__Price">S/ {{Math.round(curso.precio * ((100 - curso.descuento)/100))}}.00</p>
          <p class="Parrafo ShoppingCard__Discount">Dto. {{curso.descuento}}%</p>
          <p class="Parrafo ShoppingCard__Delete" @click="deleteCarritoAction(curso.id)">Eliminar</p>
      </div>
  </div>
</template>

<script>
import { mapActions , mapState } from 'vuex';

export default {
    name: 'ShoppingCard',
    props:{
        resumen: String,
        curso: Object
    },
    methods:{
        ...mapActions(['deleteCarritoAction'])
    },
    computed:{
        ...mapState(['carrito'])
    }
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
        .is-resumen{
            .ShoppingCard__Delete{
                display: none;
            }
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
                bottom: auto;
            }
        }
    }
    @media screen and (min-width: 770px) {
        .ShoppingCard{
            .is-resumen{
                padding-right: 0;
                padding-bottom: 0;
                .ShoppingCard__Price{
                    bottom: 0;
                    top: auto; 
                }
            }
        }
    }
</style>