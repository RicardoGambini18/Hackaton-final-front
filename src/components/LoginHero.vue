<template>
  <section class="loginhero l-container-full">
    <div class="loginhero__bg">
        <img src="/assets/hero_desktop.png">
    </div>
    <div class="loginhero__contain l-section">
        <div class="loginhero__nav">
            <img src="/assets/logo.svg">
        </div>
        <div class="loginhero__text">
            <h1 class="Title-2">¡Explota todo tu potencial<br>tecnológico!</h1>
            <p class="Title-4">Con nuestros programas<br>de especialización</p>
        </div>
        <div class="loginhero__foot">
            <Respaldo white="true"/>
        </div>
    </div>
  </section>
</template>

<script>
import Respaldo from '@/components/Respaldo.vue';

export default {
    name: 'LoginHero',
    components:{
        Respaldo
    }
}
</script>

<style scoped lang="scss">
    .loginhero{
        width: 100%;
        height: 100%;
        position: relative;
        &__bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw ;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: -1;
            img{
                min-width: 100%;
                min-height: 100%;
            }
        }
        &__contain{
            height: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 120px 1fr 120px;
        }
        &__nav{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        &__text{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            .Title-2{
                color: white;
                margin-bottom: 20px;
                text-align: right;
            }
            .Title-4{
                color: white;
                text-align: right;
            }
        }
        &__foot{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
</style>