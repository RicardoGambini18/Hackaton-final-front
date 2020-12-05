<template>
  <div class="Resumen">
      <div class="Resumen__Content">
          <div class="Resumen__CardBox">
              <ShoppingCard
                v-for="curso in carrito"
                :key="curso.id"
                resumen="true"
                :curso="curso"
              />
          </div>
          <div class="Resumen__Price">
              <hr>
              <div>
                  <p class="Title-3">Precio Final</p>
                  <p class="Title-3">S/600.00</p>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ShoppingCard from '@/components/ShoppingCard.vue'

export default {
    name: 'Resumen',
    components:{
        ShoppingCard
    },
    computed:{
        ...mapState(['carrito'])
    }
}
</script>

<style scoped lang="scss">
    .Resumen{
        width: 100%;
        padding: 50px 20px;
        background: white;
        border-radius: 10px;
        &__Content{
            width: 100%;
            margin: 0 auto;
        }
        &__CardBox{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 20px;
        }
        &__Price{
            width: 100%;
            margin-top: 30px;
            hr{
                background-color: #c4c4c4;
                height: 1px;
                border: 0;
                width: 100%;
                margin-bottom: 30px;
            }
            div{
                display: flex;
                justify-content: space-between;
                .Title-3{
                    color: var(--Primary);
                    font-weight: bold;
                }
            }
        }
    }
</style>