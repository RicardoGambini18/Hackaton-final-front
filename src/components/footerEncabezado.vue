<template>
  <div class="footerencabezado">
    <img
      class="footerencabezado-img"
      srcset="/assets/Chinita_pacha.png 1x, 
      /assets/Chinita_pacha@2x.png 2x"   alt=""
    />

    <div class="footerencabezado-descrip">
        <h2 class="Title-2">Sé parte de la comunidad</h2>
      <p class="Parrafo">
        Programas semi-presenciales para el desarrollo de habilidades de
        programación a lo largo de todo el Stack tecnológico.
      </p>
      <p class="Parrafo">
        Al finalizar sabrás cómo crear una página web y desarrollar la lógica
        detrás del funcionamiento de una aplicación, así como formar parte de
        una gran comunidad de desarrolladores.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.footerencabezado {
  width: 100%;
  height: 282px;
  position: relative;
  background: linear-gradient(90deg, #3015fd, #5640ff);
  display: flex;
  align-items: center;
  margin-bottom: 140px;

   @media screen and (max-width: 770px){
        padding: 0 42px 36px 10px;
        height: 516px;
         margin-bottom: 40px;
          align-items: flex-end;
      }
  &-img {
    height: 418.89px;
    position: absolute;
    top: -72px;
    left: -100px;
    z-index: 3;
    @media screen and (max-width: 770px){
        width: 241px;
        height: 311.89px;
        left: 50%;
        transform:translateX(-50%);
        top:-95px;
      }
  }
  &-descrip{
      color: var(--Light);
      background-color: inherit;
      width: 563px;
      min-height: 162px;
      text-align: justify;
      margin-left: 243px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
       @media screen and (max-width: 770px){
        height: 40%;
        line-height: 19px;
        margin-left: 0;
      }
  }
}
</style>