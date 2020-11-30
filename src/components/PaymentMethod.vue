<template>
 <div  class="payment">

     <p class="payment__title">Selecciona tu método de pago</p>

     <ul class="payment__items">
         <li class="payment__item payment__item--active">Tarjeta de crédito</li>
         <li class="payment__item">Tarjeta de débito</li>
         <li class="payment__item">Depósito Pago  Efectivo</li>
     </ul>

 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.payment{
    &__title{
         font-family: 'Poppins', sans-serif;
         font-weight: 700;
         font-size: var(--small);
         text-align: left;
         margin: 10px 0px;
    }
    &__items{
        
        display: flex;
        flex-grow: 2px;
        justify-content: space-between;
    }
    &__item{

        width: 100%;
        color: #555555;
        background: #EFEFEF;
        padding: 20px 10px;
        transition: ease-in-out 0.5s;
        cursor: pointer;
        margin-right: 3px;
        &--active{
            background: var(--Primary);
            color: var(--Light);

        }
        &:hover{

             background: var(--Primary);
            color: var(--Light);
        }
        
        
    }

}

</style>