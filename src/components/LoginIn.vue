
<template>

<div class="loginin">

    <div  class="loginin__items">
        <input type="email" class="loginin__input loginin__input--bold"  placeholder="roberta@gmail.com" required>
        <label for="" class="loginin__label">Correo electrónico</label>

    </div>

    <div  class="loginin__items">
        <input type="password" class="loginin__input loginin__input--transparent" placeholder="contraseña" required>
       

    </div>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
.loginin{
    

    &__items{
        display: flex;
        flex-direction: column;
        position: relative;

    }
    &__input{

        border-radius: 10px;
        border: 1px solid #8B9099;
        padding: 10px 0px;
        margin: 10px 0px;
        font-family: 'Poppins', sans-serif;
        &:focus{

            color: #C4C4C4;
        }
        &--bold{
            color: var(--Dark);
            font-weight: bold;
            font-size: var(--x-small);
            padding: 15px 0px 15px 20px;

        }
        &--transparent{
             color: #C4C4C4;
              
              padding: 15px 0px 15px 20px;
            
        }

    }
    &__label{
        position: absolute;
        font-size: 10px;
        padding: 10px 0px 10px 20px;
        top: 4px;
        color: #C4C4C4;
        font-family: 'Poppins', sans-serif; 
        
    }
}

</style>