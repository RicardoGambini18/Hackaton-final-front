<template>
  <div class="programas l-container-full">
      <div class="l-section">
          <h3 class="Title-4">Conoce nuestros Programas de Especialización</h3>
          <div class="l-section programas-cards">
              <div class="CardBox">
                  <Card
                        v-for="curso in cursos"
                        :key="curso.id"
                        :id="curso.id"
                        :subNombres="curso.subNombres"
                        :img="curso.img"
                        :precio="curso.precio"
                        :descuento="curso.descuento"
                    />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { mapActions, mapState } from "vuex";

export default {
    name: 'Programas',
    components:{
        Card
    },
    methods:{
        ...mapActions(["getCursosAction"]),
    },
    computed:{
        ...mapState(["cursos"]),
    },
    created(){
        this.getCursosAction()
    }
}
</script>

<style scoped lang="scss">
    .programas{
        padding-top: 20px;
        margin-bottom: 110px;
        .l-section{
            .Title-4{
                color: var(--Dark);
                margin-bottom: 20px;
            }
        }
        &-cards{
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 40px;
            .CardBox{
                margin: 0 auto;
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;
                grid-row-gap: 40px;
            }
        }
    }
    @media screen and (min-width: 770px){
        .programas{
            &-cards{
                .CardBox{
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 40px;
                }
            }
        }
    }
    @media screen and (min-width: 990px){
        .programas{
            &-cards{
                grid-template-columns: 1fr 1fr 1fr;
                .CardBox{
                    margin: 0;
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
        }
    }
    @media screen and (min-width: 1200px){
        .programas{
            &-cards{
                grid-column-gap: 86px;
            }
        }
    }
</style>