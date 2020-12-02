<template>
  <div class="l-container-pd carrito">
      <div class="l-section">
          <div class="carrito__back">
              <img src="/assets/back-shop.svg">
              <h3 class="Title-3">Carrito de compras</h3>
          </div>
          <div class="carrito__content">
              <div class="carrito__cardbox">
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
              </div>
              <div class="carrito__subtotal">
                <DiscontCode />
              </div>
          </div>
      </div>
  </div>    
</template>

<script>
import ShoppingCard from '@/components/ShoppingCard.vue';
import DiscontCode from '@/components/DiscontCode.vue';
import { mapActions } from 'vuex'

export default {
    name: 'Carrito',
    components:{
        ShoppingCard,
        DiscontCode
    },
    methods:{
        ...mapActions(['setFooterAction', 'setNavAction'])
    },
    created(){
        this.setFooterAction(true);
        this.setNavAction({
            visibility: true,
            solid: true
        });
        window.scroll(0,0);
    }
}
</script>

<style scoped lang="scss">
    .carrito{
        background-color: var(--Light);
        min-height: calc(100vh - 80px);
        &__back{
            margin-top: 30px;
            width: 100%;
            height: 80px;
            display: none;
            justify-content: flex-start;
            align-items: center;
            img{
                width: 17px;
                height: 20px;
                margin-right: 20px;
                cursor: pointer;
                transition: .3s all;
            }
            img:hover{
                transform: scale(1.5);
            }
        }
        &__content{
            margin-top: 60px;
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 55px;
        }
        &__cardbox{
            display: grid;
            width: 100%;
            grid-row-gap: 20px;
        }
        &__subtotal{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }
    @media screen and (min-width: 770px) {
        .carrito{
            min-height: calc(100vh - 102px);
        }
    }
    @media screen and (min-width: 990px){
        .carrito{
            &__back{
                display: flex;
            }
            &__content{
                margin-top: 0;
                grid-template-columns: 1fr 433px;
                grid-column-gap: 60px;
            }
        }
    }
</style>