
<template>
  <div class="beneficio">
    <div class="beneficio-boxImg centradoPerfecto">
      <img :src="contenido.img" />
      
    </div>
    <div class="beneficio-boxContenido">
      <p class="beneficio-titulo Title-4">
          {{contenido.titulo}}
      </p>
      <p class="beneficio-descripcion Parrafo">
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

<style lang="scss" scope>
.centradoPerfecto {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.beneficio {
  width: 100%;
  height: 160px;
  display: flex;
  margin: 30px 0;
  background-color:#f2f3f5;
  border-radius: 10px;
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
    background: none;
  }
  &-boxContenido {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: justify;
    background: none;
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

@media screen and(min-width: 990px) {
  .beneficio{
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>