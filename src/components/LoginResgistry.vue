<template>

<div class="loginin">

    <div  class="loginin__items">
        <input type="text" class="loginin__input loginin__input--transparent "  placeholder="nombre y apellido" required>
       
    </div>
    <div  class="loginin__items">
        <input type="email" class="loginin__input loginin__input--bold"  placeholder="nombre y apellido" required>
        <label for="" class="loginin__label">Correo electrónico</label>

    </div>

    <div  class="loginin__items">
        <input type="password" class="loginin__input loginin__input--transparent" placeholder="contraseña" required>
       

    </div>
    <div  class="loginin__items">
        <input type="password" class="loginin__input loginin__input--transparent" placeholder=" Repita contraseña" required>
       

    </div>

    <div class="loginin__checkboxs">

        <input type="checkbox"  class="loginin__checkbox" name="" id=""> 
        <span class="loginin__checket"></span>
        <label for="loginin__Terms" class="">Acepto <span class="loginin__Terms--bold">Términos y Condiciones</span></label>
    </div>

</div>
  
</template>

<script>
export default {

}
</script>

<style  lang="scss">
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
    &__checkbox{

       margin-right: 10px;
       outline: none;
      
      
      

    }
    &__checkboxs{

        text-align: left;
        font-size: var(--small);
        cursor: pointer;
       
     
       
    }
    &__checket{

       
        width: 5px;
        height: 20px;
        padding: 2px 8px;
        position: absolute;
        z-index: 22222;
        top: 0;
        left: 0;
        border: 1px solid var(--Primary);
        border-radius: 2px;


    }
    &__Terms{
         font-family: 'Roboto' sans-serif;
         color: var(--Primary);
         

        &--bold{

            font-family: 'Poppins', sans-serif;
            font-weight: bold;
            text-decoration: underline;
            
        }
    }
}
</style>>

