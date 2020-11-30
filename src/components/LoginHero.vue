<template>



<section class="loginhero">
    <div  class="l-section">
        <div  class="loginhero__logo">
        <img src="/assets/logo.svg"   class="" alt="">
        </div>
    </div>

    <img src="/assets/hero_desktop.png"  class="loginhero__img" alt="">
  
    <div  class="loginhero__titles">
        <h1 class="loginhero__title ">¡Explota todo tu potencial tecnológico!</h1>
        <p class="loginhero__desc">Con nuestros programas de especialización</p>

    </div>
    
   <div  class="l-section">
       <div  class="loginhero__content">

        <p class="loginhero__descs">Con el respaldo de:</p>
        <div  class="loginhero__icons">
            <img src="/assets/blancointercorp.svg" alt=""  class="loginhero__icon">
            <img src="/assets/blancoidad.svg" alt=""   class="loginhero__icon">
            <img src="/assets/blancozegel.svg" alt=""  class="loginhero__icon">
        </div>
    </div>
  </div>

 

</section>

</template>

<script>


export default {

comments:{
   
}
  
}
</script >

<style lang="scss">

.loginhero{

    
    position: relative;
  
   
    &__logo{

        background: transparent;
        display: none;
        @media (min-width:  770px) { 
        display: block;
        position: absolute;
        top: 30px;
    }
    }
    
    &__img{
        display: none;
        @media (min-width:  770px) { 
       
         display: block;
          height: 100vh;
          width: 100%;
          max-width: 100%;
          
        }
       
    }
    &__titles{

        color: var(--Light);
        position: absolute;
        top: 0;
        background: transparent;
        transform:translate(-40%, -50%);
        right:20%;
        top:50%;
        text-align: right;

    }
    &__title{

        font-size: var(--xx-large);
        width: 700px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        
    }
    
    &__content{
        position: absolute;
        bottom: 0;
        background: none;
        color: var(--Light)

    }
    &__descs{
        background: none;
        text-align: left;
         font-family: 'Roboto' sans-serif;
    }
    &__icons{
       
        background: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 250px;
        margin: 10px 0px;
        
    }
   
}


</style>