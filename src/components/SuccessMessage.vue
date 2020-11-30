<template>


<div  class="Sucess">
    <p class=" Sucess__title">¡Compra exitosa!</p>
    <p class="Sucess__desc">La boleta o factura solicitada será enviada a tu correo en unos momentos.</p>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.Sucess{

    &__title{

    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: var(--dark);
    font-size: var(--x-large);
    margin: 10px 0px;
    text-align: left;
    }
    &__desc{

    font-family: 'Roboto' sans-serif;
     font-size: var(--medium);
     text-align: left;
     width: 350px;
    }
}

</style>