<template>


<form action="" class="formpayment">
     
    
         <label  class="formpayment__title">Datos Personales</label>
    <div class="formpayment__items">
        <input type="text"  class="formpayment__input formpayment__input--transparent" placeholder="Documento de indentidad">
        <input type="text"  class="formpayment__input formpayment__input--transparent" placeholder="Correo electrónico">
    </div>

         <label  class="formpayment__title">Ingresa la información de tu tarjeta</label>
    <div class="formpayment__items formpayment__items--width">
        <input type="text"  class="formpayment__input formpayment__input--bold" placeholder="Franco Torres">
        <div class="formpayment__date">
            <input type="text"  class="formpayment__input formpayment__input--date" placeholder="Mes">
            <input type="text"  class="formpayment__input formpayment__input--date" placeholder="año">
            <input type="text"  class="formpayment__input formpayment__input--date" placeholder="cvc/cvv">

        </div>
        <input type="text"  class="formpayment__input formpayment__input--alert" placeholder="7567    4342    3423    5523">
        <img src="assets/001-american-express.svg" alt="" class="formpayment__img">
    </div>

   
      <label  class="formpayment__title">N° de Cuotas</label>
     <div class="formpayment__items formpayment__items--dues">
       
        <button class="formpayment__input formpayment__input--due" placeholder="01">01</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">02</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">03</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">04</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">05</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">06</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">12</button>
        <button class="formpayment__input formpayment__input--due" placeholder="01">24</button>
        

    </div>



</form>


</template>

<script>
export default {

}
</script>

<style lang="scss">
.formpayment{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &__items{
        display: flex;
        flex-direction: column;
        position: relative;
        &--dues{ 
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }
        &--width{
             @media (min-width:  770px) { 
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
        }
        }
    }
    &__date{
            display: flex;
            @media (min-width:  770px) { 
                order: 3;
        }
    }
    &__title{

    font-size: var(--medium);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: var(--Dark);
    text-align: left;
    margin: 10px 0px;
    }
    &__input{
        outline: none;
        border: 1px solid #8B9099;
        padding: 20px 0px 20px 20px;
        margin: 10px 0px;
        &--transparent{

            color: #C4C4C4;
        }
        &--alert{

            color: red;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            
            @media (min-width:  770px) { 

                width: 50%;
        }
        }
         &--bold{

            color: var(--Dark);
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            @media (min-width:  770px) { 

                width: 40%;
                margin-right: 10px;
        }
        }
        &--date{

        margin-right: 10px;
        text-align: center;
        width: 150px;
        }
       
        &--due{

          width: 100px;
          cursor: pointer;
          border-radius: 5px;
           color: var(--Dark);
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            padding: 20px;
             &:hover{
                 background: var(--Primary);
            color: var(--Light);
            }
        }
    }
    &__img{

       
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 20px;
        right: 20px;
        @media (min-width:  770px) { 
            top: 20px;
        right: 150px;
               
        }
    }

}

</style>