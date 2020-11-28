<template>
  <div class="footer">
    <Footerencabezado />
    <div class="l-container-pd">
      <div class="l-section footer-beneficios">
        <p class="Title-3 footer-subTitulo">Beneficios</p>
        <Beneficios :contenido="contenidoA"/>
        <Beneficios :contenido="contenidoB"/>
        <Beneficios :contenido="contenidoC"/>
      </div>
    </div>
    <div class="l-container-full">
      <Formdesmov />
    </div>
  </div>
</template>

<script>
import Beneficios from "@/components/Beneficios";
import Footerencabezado from "@/components/Footerencabezado";
import Formdesmov from '@/components/Formdesmov.vue';

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
    Footerencabezado,
    Beneficios,
    Formdesmov
  },
  
};
</script>

<style lang="scss" scope>
.footer {
  &-subTitulo {
    text-align: left;
    margin-bottom: 30px;
    font-weight: bold;
  }
  &-beneficios{
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
  }
}



@media screen and(min-width: 990px) {
  .footer{
    &-beneficios{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

@media screen and(min-width: 1200px){
  .footer{
    &-beneficios{
      grid-column-gap: 86px;
    }
  }
}
</style>