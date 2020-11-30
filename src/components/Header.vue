<template>
    <header class="header">
        <img src="/assets/logo.svg" alt="logo" class="header__img">



        <div class="header__icons">
            
            <div class="header__shoppings">
                <img src="/assets/shopping_card.svg"  class="header__shopping" alt="">  
                <div class="header__item">
                    3
                </div>    
            </div>
            
            <div class="header__burgers"  >
                <div class="header__burger header__burger--top"></div>
                <div class="header__burger  header__burger--center"></div>
                <div class="header__burger  header__burger--button"></div>
            </div>
        </div>
    </header>
</template>

<script>

    



export default {
    name: 'Header',
    methods: {
       
    },
}
</script>

<style lang="scss">


.header{
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 30px;
    z-index: 10;
    position: fixed;
    top: 20px;
   

    &--scoll{
         background: red;
         top: 0;

    }
   
    
    &__img{
       height: 30px;
    }
    &__icons{
       background: none;
       display: flex;
       flex-direction: row;
       
    }
    &__shoppings{
        background: transparent;
        position: relative;
    }
    &__shopping{

        font-size: 150px;
        width: 30px;
        cursor: pointer;
        
    }
    &__item{
         color: var(--Light);
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        background: var(--Primary);
        width: 17px;
         height: 17px;
        border-radius: 50%;
       
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
    }
    &__icon{
        color: var(--Light);
        font-size: 26px;
        cursor: pointer;
        margin-left: 20px;
    }
    &__burgers{

        cursor: pointer;
        width: 50px;
        background: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 30px;

       
       
    }
    &__burger{
        background: var(--Light);
        border-radius: 5px;
        width: 60%;
        height: 3px;
        margin: 3px 0px;
        
    }
}  
</style>