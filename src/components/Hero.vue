<template>
<<<<<<< HEAD
 <section class="hero l-container-pd">
     <img src="/assets/login.png">
     <div class="l-section">
         <div class="hero__content">
             <h1 v-for="subTitle in title" :key="subTitle" class="Title-2">
                 {{subTitle}}
            </h1>
             <p v-if="home == true" class="Title-4">Con nuestros programas de especialización</p>
         </div>
     </div>
=======
 <section class="hero l-container-full"> 
     <img 
     srcset="/assets/hero_desktop.png 1x,
            /assets/hero_movil.png 2x"
     src="/assets/hero_desktop.png"
     
      alt=""  class="hero__img">  


     <h1 class="hero__title ">¡Explota todo tu potencial tecnológico!</h1>
     <p class="hero__desc Title-4">Con nuestros programas de especialización</p>
>>>>>>> cda4a4f4408a947e99e9ef69ceaf5238a3b1c2c1
 </section>
</template>

<script>
export default {
    name: 'Hero',
    props:{
        home: Boolean,
        title: Array
    }
}
</script>

<style lang="scss">
.hero{
<<<<<<< HEAD
    margin-bottom: 0;
    width: 100%;
    position: relative;
    height: calc( ( 100vw * 500 ) / 1366);
    min-height: 300px;
    overflow: hidden;
    img{
=======
   
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

>>>>>>> cda4a4f4408a947e99e9ef69ceaf5238a3b1c2c1
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
<<<<<<< HEAD
    }
    div{
        background: none;
    }
    .l-section{
        position: relative;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    &__content{
        .Title-2{
            color: var(--Light);
        }
        .Title-4{
            color: var(--Light);
            max-width: 90%;
            margin-top: 20px;
        }
    }
}

@media screen and (min-width: 520px) {
    .hero{
        &__content{
            .Title-2{
                font-size: 36px;
            }
            .Title-4{
                font-size: var(--large);
            }
        }
    }
}

@media screen and (min-width: 990px) {
    .hero{
        &__content{
            .Title-2{
                font-size: 42px;
            }
            .Title-4{
                margin-bottom: 40px;
            }
=======
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
>>>>>>> cda4a4f4408a947e99e9ef69ceaf5238a3b1c2c1
        }
    }
}

@media screen and (min-width: 1200px) {
    .hero{
        &__content{
            .Title-2{
                font-size: var(--xx-large);
            }
            .Title-4{
                margin-bottom: 60px;
            }
        }
    }
}

@media screen and (max-width: 819px) {
    .hero{
        img{
            width: 819px;
            left: calc( (819px - 100vw) / -2 );
        }
    }
}
</style>