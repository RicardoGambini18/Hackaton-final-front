<template>


<div class="switch">
    <p class="switch__title">Solicitar factura</p>
    <div class="switch__content"> 
        <input  class="switch__input" type="checkbox"  id="switch">
        <label class="switch__span" for="switch"></label>

    </div>


</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">


.switch{
    display: flex;
    align-items: center;
    &__title{

    font-size: var(--x-large);
    font-family: 'Poppins', sans-serif;
    color:var(--Dark) ;
    font-weight: bold;
    }
    &__content{

        margin-left: 20px;
    }
    &__input{
        display: none;
         transition: all 0.3s;   
    }
    &__span{
        display: inline-block;
        width: 75px;
        height: 28px;
        background: #7665f3c4;
        border-radius: 20px;
        cursor: pointer;
        position: relative;
        :checked + &::after{
            left: 0;
             background: #6857ee;
          
        }
        
        &::after{
            content: '';
            width: 35px;
            height: 35px;
            border-radius: 100px;
            position: absolute;
            background: var(--Primary);
            top: -3px;
            right: 0px;
             transition: all 0.3s;           
        }

    }
}
</style>