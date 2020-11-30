<template>

<ul class="loginnav">
    <li class="loginnav__item loginnav__item--active">Iniciar Sesión</li>
    <li class="loginnav__item">Registro</li>
</ul>


</template>

<script>
export default {

}
</script>

<style lang="scss">

.loginnav{

    
    width: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #70707083;

    &__item{

        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        padding: 20px 10px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover{
             border-bottom: 3px solid var(--Dark);
        }
        &--active{
            border-bottom: 3px solid var(--Dark);
        }

    }
}

</style>