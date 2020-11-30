<template>


<div  class="cash">

   <img src="assets/pago.svg" alt=""  class="cash__logo">
   <div  class="cash__content">

       <p class="cash__title">Pasos a seguir:</p>
       <p class="cash__desc">Enviaremos un código de pago CIP a tu correo electrónico, con el cual podrás pagar de la siguiente manera:</p>

       <p class="cash__title">Banca por internet y móvil:</p>
       <p class="cash__desc">Paga por internet vía tranferencia desde el aplicativo  móvil o web de tu banco de preferencia.</p>

       <div class="cash__imgs">
           <img src="assets/presencial-1-bbva.svg" class="cash__img "  alt="">
           <img src="assets/presencial-2-bcp.svg"  class="cash__img " alt="">
           <img src="assets/presencial-3-ibk.svg"  class="cash__img  " alt="">
           <img src="assets/presencial-4-scotiabank.svg"  class="cash__img  " alt="">
           <img src="assets/presencial-5-banbif.svg" class="cash__img "  alt="">
           <img src="assets/presencial-6-arequipa.svg" class="cash__img "  alt="">

       </div>

        <p class="cash__title">Banca por internet y móvil:</p>
       <p class="cash__desc">Paga por internet vía tranferencia desde el aplicativo  móvil o web de tu banco de preferencia.</p>

        <div class="cash__imgs">
           <img src="assets/presencial-1-bbva.svg" class="cash__img "  alt="">
           <img src="assets/presencial-2-bcp.svg"  class="cash__img " alt="">
           <img src="assets/presencial-3-ibk.svg"  class="cash__img  " alt="">
           <img src="assets/presencial-4-scotiabank.svg"  class="cash__img  " alt="">
           <img src="assets/presencial-5-banbif.svg" class="cash__img "  alt="">
           <img src="assets/presencial-6-arequipa.svg" class="cash__img "  alt="">

           <img src="assets/presencial-7-kasnet.svg" class="cash__img "  alt="">
           <img src="assets/presencial-8-wester.svg" class="cash__img "  alt="">
           <img src="assets/presencial-9-fullcarga.svg" class="cash__img "  alt="">
           <img src="assets/presencial-10-tambo.svg" class="cash__img "  alt="">
           <img src="assets/presencial-11-money.svg" class="cash__img "  alt="">
           <img src="assets/presencial-12-disashop.svg" class="cash__img "  alt="">


       </div>

   </div>

</div>


</template>

<script>
export default {

}
</script>

<style lang="scss">
.cash{

    &__logo{

        display: block;
        margin: 30px 0px;
        
    }
    &__title{
     font-size: var(--medium);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: left;
    margin: 20px 0px;
    color: var(--Darck);
    }
    &__desc{

    font-family: 'Roboto' sans-serif;
    font-weight: lighter;
    line-height: 30px;
    font-size: var(--medium);
    text-align: left;
    margin: 20px 0px;
    color: #000425;
    }
    &__imgs{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
         @media (min-width:  770px) { 
            
            width: 600px;
           
        }
         @media (min-width:  990px) { 
            
            width: 700px;
         
        }

    }
    &__img{
       margin: 10px 10px 0px 0px;
       width: 120px;

    }

}

</style>