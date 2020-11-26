<template>
  <div class="respaldo">
    <p class="f-Small respaldo-Titulo">Con el respaldo de:</p>
    <div class="respaldo-boximg">
      <img src="/assets/blancointercorp.svg" alt="" />
        <img src="/assets/blancoidad.svg" alt="" />
      <img src="/assets/blancozegel.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.respaldo {
  width: 233px;
  height: 63.08px;
  color: var(--Light);
   background-color: inherit;
  &-Titulo{
    text-align: left;
  }
  &-boximg{
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>