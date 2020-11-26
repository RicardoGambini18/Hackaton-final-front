<template>
  <div class="footer">
    <footerencabezado />
    <p class="Title-3 footer-subTitulo">Beneficios</p>
    <div class="footer-beneficios">
      <beneficios :conteneido="contenidoA"/>
      <beneficios :conteneido="contenidoB"/>
      <beneficios :conteneido="contenidoC"/>
    </div>
    <div class="footer-final">
        <respaldo/>
    </div>
  </div>
</template>

<script>
import Beneficios from "./beneficios";
import footerencabezado from "./footerEncabezado";
import respaldo from "./respaldo";

export default {
  name: "Footer",
  data(){
      return{
          contenidoA:{
            titulo:"Aprende de Expertos",
            descrip:"Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.",
            img:"/assets/expertos.svg"
          },
          contenidoB:{
            titulo:"Clases Virtuales",
            descrip:"Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú.",
            img:"/assets/virtual.svg"
            
          },
          contenidoC:{
            titulo:"Empleabilidad",
            descrip:"Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas laborales especialmente identificadas para la comunidad PachaQTec, a través de nuestra plataforma de empleabilidad IDAT JOB.",
            img:"/assets/empleabilidad.svg"
          }
      }
  },
  components: {
    footerencabezado,
    Beneficios,
    respaldo,
  },
  
};
</script>

<style lang="scss" scope>
.footer {


  &-beneficios{
    width: 100%;
    padding: 0 86px;
      @media screen and (max-width: 770px){
        padding: 0 10px;
      }
  }
  &-subTitulo {
      text-align: left;
      margin-left: 86px;
      
  }
  &-final{
          background-color: #000D29;
          width: 100%;
          height: 102px;
          margin-top: 80px;
          display: flex;
          align-items: center;
          padding-left: 86px;
          @media screen and (max-width: 770px){
        margin-top: 20px;
      }
      }
}
</style>