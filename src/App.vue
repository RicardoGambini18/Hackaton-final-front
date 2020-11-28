<template>
  <div id="app">
    <router-view/>
    <div class="footer-final l-container-full">
        <Respaldo white="true"/>
    </div>
  </div>
</template>

<script>
import Respaldo from '@/components/Respaldo.vue';

export default {
  components:{
    Respaldo
  }
}
</script>

<style lang="scss">
  .footer{
    &-final{
      background-color: #000D29;
      margin-top: 0;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
  @media screen and (min-width: 770px) {
  .footer{
    &-final{
      height: 102px;
    }
  }
}
</style>
