<template>

<div  class="precie">

    <p class="precie__title">Subtotal</p>
    <p class="precie__money">600</p>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.precie{

    color: var( --Primary);
     font-family: 'Poppins', sans-serif;
     font-weight: bold;
     font-size: var( --large);
     display: flex;
     justify-content: space-between;
     margin: 10px 0px;
    &__money{

        &::before{
            content: 'S/.';
        }
        &::after{
            content: '.00';

        }

    }
}

</style>