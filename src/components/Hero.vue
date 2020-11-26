<template>
 <section class="hero">   
     <h1 class="hero__title ">¡Explota todo tu potencial tecnológico!</h1>
     <p class="hero__desc Title-4">Con nuestros programas de especialización</p>
 </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style lang="scss">

.hero{
    background: url(../assets/hero__movil.png) no-repeat;
    background-size: cover;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 30px;
    @media (min-width:  770px) { 
        background: url(../assets/hero_desktop.png) no-repeat;
        background-size: cover;
        height: 70vh;
    }
    @media (min-width:  990px) { 
        height: 80vh;
    }
    &__title{
        color: var(--Light);
        font-family:   'Poppins', sans-serif;
        font-size: 26px;
        font-weight: 700;
        margin-top: 80px;
        margin-bottom: 20px;
        @media (min-width:  770px) { 
            font-size: var(--x-large);
            width: 600px;
        }
    }
    @media (min-width:  990px) { 

        font-size: var(--xx-large);
        width: 800px;
        margin-top: 130px;
    }
    &__desc{
        color: var(--Light);
        font-weight: 400;
        @media (min-width:  770px) { 
            font-size: var(--medium);
        }
        @media (min-width:  990px) { 
            font-size: var(--large);
        }
    }
}
</style>