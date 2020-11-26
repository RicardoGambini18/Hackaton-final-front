
<template>
  <div class="beneficio">
    <div class="beneficio-boxImg centradoPerfecto">
      <img :src="conteneido.img" alt="" />
      
    </div>
    <div class="beneficio-boxContenido">
      <p class="beneficio-titulo Title-4">
          {{conteneido.titulo}}
      </p>
      <p class="beneficio-descripcion Parrafo">
        {{conteneido.descrip}}
      </p>
    </div> 
  </div>
</template>

<script>
 
export default {
    props: {
    conteneido: {
        titulo:"",
        descrip:"",
        img:""
        }
  },
  

};
</script>

<style lang="scss" scope>
.centradoPerfecto {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.beneficio {
  max-width: 718px;
  height: 160px;
  display: flex;
  margin: 30px 0;
   @media screen and (max-width: 770px){
         margin: 20px 0;
      }
  &-boxImg {
    width: 20%;
    height: 100%;
     @media screen and (max-width: 770px){
        width: 40%;
      }
    img {
      width: 60px;
    }
  }
  &-boxContenido {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
      @media screen and (max-width: 770px){
        width: 60%;
        justify-content: center;
        align-items: center;
      }
  }
  &-titulo{
      font-weight: bold;
  }
  &-descripcion{
      width: 90%;
      line-height: 19px;
      @media screen and (max-width: 770px){
        display: none;
      }
  }
}
</style>