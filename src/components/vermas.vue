<template>
  <div class="vermas">
    <VerMasSlider/>
    <VerMasAcercaPrograma/>
    <VerMasBeneficio/>    
    <VerMasHorario/>
    
  </div>
</template>

<script>
import VerMasHorario from './VerMasHorario'
import VerMasBeneficio from './VerMasBeneficio'
import VerMasSlider from './VerMasSlider'
import VerMasAcercaPrograma from './VerMasAcercaPrograma'
export default {
  name: 'vermas',
  components:{
    VerMasHorario,
    VerMasBeneficio,
    VerMasSlider,
    VerMasAcercaPrograma
  }
}
</script>

<style lang="scss" scoped >

.vermas{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
}


</style>