<template>
  <div v-if="white == 'true'" class="respaldo l-section">
    <p class="f-Small respaldo-Titulo">Con el respaldo de:</p>
    <div class="respaldo-boximg">
      <img src="/assets/blancointercorp.svg" alt="" />
      <img src="/assets/blancoidad.svg" alt="" />
      <img src="/assets/blancozegel.svg" alt="" />
    </div>
  </div>
  <div v-else class="respaldoBlack l-section">
    <p class="f-Small respaldo-Titulo">Con el respaldo de:</p>
    <div class="respaldo-boximg">
      <img src="/assets/intercorp.svg" alt="" />
      <img src="/assets/idad.svg" alt="" />
      <img src="/assets/zegel.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Respaldo',
  props: ['white']
};
</script>

<style lang="scss" scoped >
.respaldo {
  height: 63.08px;
  color: var(--Light);
  background-color: inherit;
  &-Titulo{
    text-align: left;
  }
  &-boximg{
    width: 233px;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.respaldoBlack{
  height: 63.08px;
  color: var(--Dark);
  background-color: inherit;
  &-Titulo{
    text-align: left;
  }
  &-boximg{
    width: 233px;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>