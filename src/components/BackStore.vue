<template>

<div class="back">



    <img src="assets/back-shop.svg"  class="back__icon " alt="">
    <p class="back__title ">Carrito de compras</p>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.back{

    display: flex;
    cursor: pointer;
    

     &__icon{

         &--white{
             color: var(--Light);
         }

    }
    &__title{
        color: var(--Dark);
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        margin-left: 10px;
        &--white{
             color: var(--Light);
            
            
         }

    }
}

</style>