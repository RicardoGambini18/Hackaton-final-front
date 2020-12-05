<template>
  <div class="Card">
      <img 
        class="Card-Img" 
        :srcset="`
            /assets/${img}.png 1x,
            /assets/${img}@2x.png 2x
        `">
        <div class="Card-Name">
            <h3
                v-for="subNombre in subNombres"
                :key="subNombre"
                class="Title-3"
            >
                {{subNombre}}
            </h3>
        </div>
      <div class="Card-Bg"></div>

      <div v-if="descuento" class="Card-Discount">
          <p class="Title-2">{{descuento}}% DCTO</p>
      </div>

        <div v-if="precio">
            <div v-if="carrito.some( curso => { return curso.id == id } )" class="Card-Cart">
                <p class="Title-5">Agregado &#10004;</p>
            </div>
            <div class="Card-Cart" @click="addCarritoAction(id)" v-else>
                <img src="/assets/shopping_card.svg">
                <p v-if="descuento" class="Title-5">S/ <span class="DiscountPrice">{{precio}}</span> {{Math.round(precio * ((100 - descuento)/100))}}</p>
                <p v-else class="Title-5">S/ {{precio}}</p>
            </div>
            
            <router-link 
                :to="{
                    name: 'Especialidad',
                    params: {
                        id: id
                    }
                }"
                class="Card-More"
            >
                <img src="/assets/mas.svg">
                <p class="Title-5">Ver más</p>
            </router-link>
        </div>
        <div v-else class="Card-Prox">
            <p class="Title-5">Proximamente</p>
        </div>
  </div>
</template>

<script>
import { mapActions , mapState } from 'vuex';

export default {
    name: 'Card',
    props:{
        id: String,
        subNombres: Array,
        img: String,
        precio: Number,
        descuento: Number
    },
    methods:{
        ...mapActions(['addCarritoAction'])
    },
    computed:{
        ...mapState(['carrito'])
    }
}
</script>

<style scoped lang="scss">
    .Card{
        width: 100%;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        max-width: 400px;
        margin: 0 auto;
        z-index: 4;
        &-Img{
            position: relative;
            z-index: 1;
            width: 100%;
        }
        &-Prox{
            position: absolute;
            bottom: 15px;
            right: 15px;
            z-index: 3;
            color: rgb(139,144,153)
        }
        &-Discount{
            position: absolute;
            z-index: 3;
            top: 25px;
            right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 130px;
            background-color: var(--Warning);
            height: 30px;
            border-radius: 20px;
            transform: rotate(20deg);
            .Title-2{
                color: var(--Light);
                font-size: var(--large);
                font-weight: bold;
            }
        }
        &-Bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            background: linear-gradient(0deg, rgba(0,4,37,1) 0%, rgba(1,5,39,0) 100%);
        }
        &-Name{
            position: absolute;
            bottom: 45px;
            left: 20px;
            z-index: 3;
            .Title-3{
                color: var(--Light);
            }
        }
        &-More{
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 15px;
            right: 15px;
            cursor: pointer;
            transition: .3s all;
            z-index: 3;
            .Title-5{
                color: var(--Light);   
            }
            img{
                width: 24px;
                height: 24px;
                margin-right: 8px;
            }
        }
        &-More:hover{
            transform: scale(1.2) rotate(1deg);
        }
        &-Cart{
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 13px;
            right: 130px;
            transition: .3s all;
            z-index: 3;
            background: none;
            cursor: pointer;
            border: 1px solid var(--Light);
            padding: 2px 5px;
            border-radius: 5px;
            .Title-5{
                color: var(--Light);
            }
            img{
                width: 24px;
                height: 24px;
                margin-right: 8px;
            }
            .DiscountPrice{
                color: var(--Warning);
                text-decoration: line-through;
            }
            
        }
        &-Cart:hover{
            transform: scale(1.2) rotate(1deg);
        }
    }
</style>