<template>
 <section class="hero l-container-full"> 
     <img 
     srcset="/assets/hero_desktop.png 1x,
            /assets/hero_movil.png 2x"
     src="/assets/hero_desktop.png"
     
      alt=""  class="hero__img">  


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
   
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start ;
    padding: 0px 30px;
    position: relative;
    
    
     
    @media (min-width:  770px) { 
       
        height: 80vh;
    }
    @media (min-width:  990px) { 
        height: 100vh;
    }
    &__img{

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: 100%;
       
        
    
        
    }
    &__title{
        color: var(--Light);
        font-family:   'Poppins', sans-serif;
        font-size: 26px;
        font-weight: 700;
        margin-top: 190px;
        margin-bottom: 25px;
        
        z-index: 1;
        text-align: left;
      
        @media (min-width:  770px) { 
            font-size: var(--xx-large);
            width: 700px;
             margin-top: 230px;
        }
        
         @media (min-width:  990px) { 
        font-size: var(--xx-large);
        width: 800px;   
         margin-top: 350px;
        }
        
    }
    &__desc{
        color: var(--Light);
        font-weight: 400;
        z-index: 1;
        text-align: left;
        width: 250px;
        @media (min-width:  770px) { 
            width: 100%;
            font-size: var(--medium);
        }
        @media (min-width:  990px) { 
            font-size: var(--large);
        }
    }
}
</style>