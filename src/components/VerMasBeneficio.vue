<template>
  <div class="beneficioVerMas">
      <div class="beneficioVerMas-boxtitulo" @click="abriacordion">
      <h2 class="beneficioVerMas-titulo Title-4">Beneficios</h2>
    </div>
    <ul :class="clases" >
      <li class="beneficioVerMas-boxBeneficio" v-for="beneficio in beneficios" :key="beneficio.id">
        <img :src="beneficio.img" alt="" />
        <h4 class="beneficioVerMas-descrip Title-4">
            {{beneficio.titulo}}
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beneficios:[{
          id:1,
        titulo: "Aprende de Expertos",
        descrip:
          "Aprende directamente de expertos del mercado a través del análisis y solución de problemas de programación. Utilizando los frameworks y herramientas de mayor relevancia dentro del mundo del coding.",
        img: "/assets/expertos.svg",
      },
      {
          id:2,
        titulo: "Clases Virtuales",
        descrip:
          "Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa presencialmente de nuestras hackathones semanales para conocer y participar de la comunidad profesional que liderará la transformación tecnológica del Perú.",
        img: "/assets/virtual.svg",
      },
      {
          id:3,
        titulo: "Empleabilidad",
        descrip:
          "Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas laborales especialmente identificadas para la comunidad PachaQTec, a través de nuestra plataforma de empleabilidad IDAT JOB.",
        img: "/assets/empleabilidad.svg",
      },],
    
    clases: {
        beneficioVerMaslistado: true,
        ocultar: true,
      },

    };
  },

  
  methods: {
    abriacordion() {
      if (this.clases.ocultar == true) {
        this.clases.ocultar = false;
        return;
      }
      this.clases.ocultar = true;
    },
  },
};
</script>

<style lang="scss" scoped >
.beneficioVerMas {
  width: 100%;
  margin-bottom: 20px;
  
 @media screen and (max-width: 770px) {
     width: 100%;
      margin-bottom: 10px;
    }
  &-boxtitulo {
    position: relative;
    @media screen and (max-width: 770px) {
      background-color:  var(--Primary);
      color: var(--Light);
      cursor: pointer;
      padding: 15px 40px 15px 12px;
    }
    &::before {
      content: "";
      background-color: var(--Primary);
      width: 50px;
      height: 2px;
      position: absolute;
      left: 0;
      top: 105%;
      @media screen and (max-width: 770px) {
        display: none;
      }
    }
  }

  &-titulo {
    text-align: left;
  }
  &listado {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  &-boxBeneficio {
      padding-top: 20px;
    width: 134px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 90px;
        height: 90px;
    }
  }
  &-descrip{
      width: 100%;
      margin-bottom: 12px;
  }
}

.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
</style>