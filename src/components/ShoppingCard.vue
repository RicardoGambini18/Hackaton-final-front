<template>


<div class="shoppings">

    <div class="shoppings__card">
        <div class="shoppings__image">
            <img src="assets/shoppingcard.png"  class="shoppings__img" alt="">
        </div>
        <div class="shoppings__content">
            <p  class="shoppings__title">Gestión de Envases, Empaques y Embalajes</p>
            <p  class="shoppings__sale"> 25% </p>
            <a   class="shoppings__delete" href="">Eliminar</a>
            <p class="shoppings__preci">269</p>

        </div>
    </div>
     <div class="shoppings__card">
        <div class="shoppings__image">
            <img src="assets/shoppingcard.png"  class="shoppings__img" alt="">
        </div>
        <div class="shoppings__content">
            <p  class="shoppings__title">Gestión de Envases, Empaques y Embalajes</p>
            <p  class="shoppings__sale"> 25% </p>
            <a   class="shoppings__delete" href="">Eliminar</a>
            <p class="shoppings__preci">269</p>

        </div>
    </div>

</div>


</template>

<script>
export default {

}
</script>

<style lang="scss">

.shoppings{

    
    
   

    &__card{

    width: 100%;
   
    display: flex;
    flex-direction: row;
    margin: 20px 0px;
   
    }
    &__image{
        
        width: 200px;
    }
    &__img{

       width: 100%;
       height: 150px;
        
    }
    &__content{
    width: 100%;
    margin-left: 20px;
    display:  flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    
    

    }
    &__title{

        font-family: 'Roboto' sans-serif;
        font-weight: 700;
        width: 250px;
        text-align: left;
    }
    &__sale{
        font-family: 'Poppins', sans-serif;
        color: var(--Primary);
        font-weight: 400;
        &::before{
        
        content: 'Dto.';
        }

    }
    &__delete{
        text-decoration: underline;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        color: var(--Primary);
        font-weight: bold;

    }
    &__preci{
          font-family: 'Poppins', sans-serif;
         
          font-weight: bold;
          color: var(--Dark);
          position: absolute;
          bottom: 0;
          right: 0;

          &::before{

              content: 'S/.';
          }
          &::after{
              content: '.00';

          }
          @media (min-width:  770px) { 

          top: 0;
          
           
        }

    }
    
}

</style>