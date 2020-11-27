<template>
  <div class="acercaDe">
    <div class="acercaDe-boxtitulo" @click="abriacordion">
      <h2 class="acercaDe-titulo Title-4">
        ¿En qué consiste el programa de {{ contenido.programa }}?
      </h2>
    </div>
    <div :class="clases"  v-for="(parrafo,index) in textoAcercaDe" :key="index">
      <p class="Title-5">
          {{parrafo}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textoAcercaDe: [],
      contenido: {
        programa: "desarrollo back end",
        acercaDe:
          "Programas virtuales para el desarrollo de habilidades de programación a lo largo de todo el Stack tecnológico.\n Al finalizar sabrás cómo crear una página web y desarrollar la lógica detrás del funcionamiento de una aplicación, así como formar parte de una gran comunidad de desarrolladores.",
      },
      clases: {
        acercaDeParrafo: true,
        ocultar: true,
      },
    };
  },
   props: {
    contenidoProps : {
        programa: "",
        acercaDe: "",
      
        }
  },
  methods: {
    abriacordion() {
      if (this.clases.ocultar == true) {
        this.clases.ocultar = false;
        return;
      }
      this.clases.ocultar = true;
    },

    separarTexto() {
        console.log("HOla")
      let textoSeparado = [];
      textoSeparado = this.contenido.acercaDe.split("\n");
      
      this.textoAcercaDe=textoSeparado;

      console.log(this.textoAcercaDe);
    },
  },
  created() {
      this.separarTexto()
      
  },
 
}
 
</script>

<style lang="scss" scoped >
.acercaDe {
  width: 670px;
  margin-bottom: 20px;
  @media screen and (max-width: 770px) {
    width: 100%;
    margin-bottom: 10px;
  }
  &-boxtitulo {
    position: relative;
    @media screen and (max-width: 770px) {
      background-color: var(--Primary);
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

  &Parrafo {
    width: 100%;
    padding: 20px 5px 0 5px;
    text-align: left;
  }
}
.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
</style>