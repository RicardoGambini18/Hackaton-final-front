<template>

<div class="social">

    <p class="social__desc">Puedes iniciar sesión con:</p>

    <div class="social__icons">

        <img src="/assets/facebok-icon.svg" alt=""  class="social__icon">
        <img src="/assets/linkdint-icon.svg" alt="" class="social__icon">

    </div>

    <p class="social__desc">También puedes iniciar sesión con tu correo</p>

</div>


</template>

<script>
export default {

}
</script>

<style lang="scss">

.social{

    margin: 20px 0px;
   
    &__desc{
        
         font-family: 'Roboto' sans-serif;
         font-weight: 400;
         color: var(--Dark);
         margin: 20px 0px;
         text-align: center;
         font-size: var(--small);
    }
    &__icon{
      margin: 0px 10px;
      cursor: pointer;

      

      &:hover{
         
      }
    }
}

</style>