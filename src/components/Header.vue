<template>
    <header class="header">
        <img src="/assets/logo.svg" alt="logo" class="header__img">
        <div class="header__icons">
            <i class="fas fa-shopping-cart header__icon"></i>
            <i class="fas fa-bars header__icon"></i>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
.header{
    height: 55px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    padding: 0px 30px;
    &__img{
       height: 30px;
    }
    &__icon{
        color: var(--Light);
        font-size: 26px;
        cursor: pointer;
        margin-left: 20px;
    }
}  
</style>