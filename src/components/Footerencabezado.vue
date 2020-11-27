<template>
  <div class="footerencabezado l-container-pd">
      <div class="l-section">
          <div class="footerencabezado-content">
              <div class="footerencabezado-img">
                  <img
                        srcset="/assets/Chinita_pacha.png 1x, 
                        /assets/Chinita_pacha@2x.png 2x" 
                    />
              </div>
              <div class="footerencabezado-descrip">
                    <h2 class="Title-3">Sé parte de la comunidad</h2>
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
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footerencabezado'
};
</script>

<style scoped lang="scss">
    .footerencabezado{
        position: relative;
        background: linear-gradient(90deg, #3015fd, #5640ff);
        margin-bottom: 20px;
        .l-section{
            background: none;
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
        }
        &-content{
            width: 100%;
            background: none;
        }
        &-img{
            width: 241px;
            height: 311.89px;
            margin: -115px auto 0;
            background: none;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &-descrip{
            background: none;
            .Title-3, .Parrafo{
                text-align: left;
                color: var(--Light);
                max-width: 550px;
                margin-left: auto;
                margin-right: auto;
            }
            .Title-3{
                margin-bottom: 30px;
            }
            .Parrafo{
                margin-bottom: 20px;
            }
        }
    }
    @media screen and (min-width: 770px) {
        .footerencabezado{
            height: 282px;
            margin-bottom: 70px;
            &-img{
                width: 373px;
                height: auto;
                position: absolute;
                margin: 0;
                top: -122px;
                left: -150px;
                img: {
                    width: 100%;
                    height: auto;
                }
            }
            .l-section{
                height: 100%
            }
            &-descrip{
                padding-left: 220px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .Title-3,.Parrafo{
                    width: 100%;
                    margin-left: 0;
                }
            }
        }
    }
    @media screen and (min-width: 990px) {
        .footerencabezado{
            .l-section{
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 40px;
            }
            &-content{
                grid-column-start: 1;
                grid-column-end: 3;
            }
            &-img{
                top: -132px;
                left: -160px;
            }
        }
    }
    @media screen and (min-width: 1200px) {
        .footerencabezado{
            .l-section{
                grid-column-gap: 86px;
            }
        }
    }
</style>