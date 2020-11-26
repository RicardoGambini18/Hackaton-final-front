<template>
  <div class="Card">
      <img 
        class="Card-Img" 
        :srcset="`
            /assets/${img}.png 1x,
            /assets/${img}@2x.png 2x
        `">
      <h3 class="Title-3">{{nombre}}</h3>

      <div class="Card-Bg"></div>

      <div v-if="descCurso" class="Card-Discount">
          <p class="Title-2">{{descuento}}% DCTO</p>
      </div>

      <div v-if="precio">
        <div class="Card-Cart">
            <img src="/assets/shopping_card.svg">
            <p v-if="descCurso" class="Title-5">S/ <span class="DiscountPrice">{{precio}}</span> {{Math.round(precio * ((100 - descuento)/100))}}</p>
            <p v-else class="Title-5">S/ {{precio}}</p>
        </div>

        <div class="Card-More">
            <img src="/assets/mas.svg">
            <p class="Title-5">Ver más</p>
        </div>
      </div>

        <div v-else class="Card-Prox">
            <p class="Title-5">Proximamente</p>
        </div>
      
  </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        id: String,
        nombre: String,
        img: String,
        precio: Number,
        descuento: Number
    }
}
</script>

<style scoped lang="scss">
    $padding-mob: 20px;

    .Card{
        width: 100%;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        max-width: 400px;
        margin: 0 auto;
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
            top: 10px;
            right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 130px;
            background-color: var(--Warning);
            height: 30px;
            border-radius: 20px;
            .Title-2{
                color: var(--Light);
                font-size: var(--large);
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
        .Title-3{
            color: var(--Light);
            position: absolute;
            bottom: 45px;
            left: 20px;
            z-index: 3;
            max-width: 70%;
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
            bottom: 15px;
            right: 130px;
            transition: .3s all;
            z-index: 3;
            cursor: pointer;
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