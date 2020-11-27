<template>
  <div class="beneficio">
    <div class="beneficio-boxImg">
      <img :src="contenido.img">
    </div>
    <div class="beneficio-boxContenido">
      <p class="Title-4">
        {{contenido.titulo}}
      </p>
      <p class="Parrafo">
        {{contenido.descrip}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Beneficios',
    props: {
    contenido: {
      titulo:"",
      descrip:"",
      img:""
    }
  },
  

};
</script>

<style scoped lang="scss">
  .beneficio{
    width: 100%;
    height: 108px;
    display: grid;
    grid-template-columns: 137px 1fr;
    margin-bottom: 30px;
    background-color: #f2f3f5;
    border-radius: 10px;
    div{
      background: none;
    }
    &-boxImg{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 50px;
      }
    }
    &-boxContenido{
      width: 100%;
      height: 100%;
      display: flex;
      padding-right: 20px;
      flex-direction:column ;
      align-items: flex-start;
      justify-content: center;
      .Parrafo{
        display: none;
        text-align: justify;
      }
      .Title-4{
        font-weight: bold;
      }
    }
  }
  @media screen and (min-width: 500px){
    .beneficio{
      height: 160px;
      &-boxImg{
        img{
          width: 60px;
        }
      }
      &-boxContenido{
        .Parrafo{
          display: block;
          margin-top: 10px;
        }
      }
    }
  }
  @media screen and (min-width: 990px) {
    .beneficio{
      grid-column-start: 1;
      grid-column-end: 3; 
    }
  }
</style>