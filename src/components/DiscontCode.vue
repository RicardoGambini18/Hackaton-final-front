<template>

 <div class="discont">


<div class="discont__content"> 
    <input type="text" class="discont__imput" placeholder="Agrega un código de descuento">
     <img src="assets/imput_send.svg" class="discont__icon" alt="">
</div>
    

 </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">

.discont{
    

   
    &__content{
         position: relative;
         

    }
    &__imput{

        width: 100%;
        font-family: 'Roboto' sans-serif;
        outline: none;
        border: 1px solid #8B9099;
        padding: 20px 0px;
        margin: 10px 0px;
       

    }
    &__icon{
        position: absolute;
        top: 30px;
        right: 20px;
       



    }
}

</style>