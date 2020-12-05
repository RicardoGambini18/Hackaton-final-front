<template>
  <div id="app">
    <Header 
      :visibility="nav.visibility"
      :solid="nav.solid"
      :vista="nav.vista"
    />
    <router-view/>
    <div class="footer-final l-container-full" v-if="footer">
        <Respaldo white="true"/>
    </div>
  </div>
</template>

<script>
import Respaldo from '@/components/Respaldo.vue';
import Header from '@/components/Header.vue';
import { mapState } from 'vuex'

export default {
  components:{
    Respaldo,
    Header
  },
  computed:{
    ...mapState(['footer', 'nav'])
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
