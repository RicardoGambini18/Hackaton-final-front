<template>
  <div class="slider">
    <div class="slider-boxtitulo" @click="abriacordion">
      <h2 class="slider-titulo Title-4">
        {{ titulo }}
      </h2>
    </div>
    <div :class="clases">
      <img id="slider" :src="'/assets/'+imgSlider" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      contenido: {
       //Por si nos dan array de imagenes
       imgSlider: [
          "/assets/back_end.png",
          "/assets/curso.png",
          "/assets/data.png",
        ],
      },
      clases: {
        sliderboximagenes: true,
        ocultar: true,
      },
    };
  },
  props:{
    titulo: String,
    imgSlider: String
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
  mounted() {
    setInterval(() => {
      this.counter < this.contenido.imgSlider.length - 1
        ? this.counter++
        : (this.counter = 0);
    }, 1500);
  },
};
</script>

<style lang="scss" scoped >
.slider {
  width: 100%;
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

  &boximagenes {
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      width: 90%;
    }
  }
}
.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
</style>