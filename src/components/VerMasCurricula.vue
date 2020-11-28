<template>
  <div class="curricula">
    <div class="curricula-boxtitulo" @click="abriacordion">
      <h2 class="curricula-titulo Title-4" >Curricula</h2>
    </div>
    <div :class="clases">
        <ul class="curricula-subtitulo">
           
            <li class="curricula-semanaTitulo"   
            v-for="(planEst ,index) in planEstudio"
            :key="index"
            >
              <span
                v-if="unidad == planEst.titulo"
                v-on:click="cambiarcurricula($event)"
                class="Title-4 is-active"
                :id="planEst.titulo"
              >
                {{planEst.titulo}} 
              </span>

              <span
                v-else
                v-on:click="cambiarcurricula($event)"
                class="Title-4"
                :id="planEst.titulo"
              >
                {{planEst.titulo}} 
              </span>
                
            </li>

        </ul>


        <ul class="curricula-boxSemana"  v-for="(planEst ,index) in planEstudio" :key="index">
            <div class="curricula-condicional" v-if="unidad == planEst.titulo">
                <li class="curricula-subtema "  v-for="(semana ,index) in planEst.semanas" :key="index">
                  <h3 class="Title-5 "> {{semana.titulo}}</h3>
                  <p class="Parrafo " v-for="(subtema, index) in semana.subtemas" :key="index">
                    {{subtema}}
                  </p>
            </li>
            </div>
           
        </ul>



    </div>
  </div>
</template>

<script>
export default {
  name: "VerMasCurricula",

    data() {
    return {
    unidad: "UNIDAD 1 Y 2", 
    
    clases: {
        curriculalistado: true,
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

    cambiarcurricula(event){
      this.unidad = event.target.id;
    }


    },
  props: {
    planEstudio: Array,
  }
};

</script>

<style scoped lang="scss">
.curricula {
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
    &listado{
        width: 100%;
    padding: 20px 5px 0 5px;
    text-align: left;
    }
  &-titulo {
    text-align: left;
  }
&-condicional{
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}
  &Parrafo {
    width: 100%;
    padding: 20px 5px 0 5px;
    text-align: left;
  }
  &-boxSemana{
    width: 100%;
    background: #f1f1f1;
    
  
}
&-subtema{
    width: 50%;
    padding: 10px;
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 3px;
        padding-left: 20px;
        position: relative;
        &::before {
      content: "";
      background-color: var(--Primary);
      width: 5px;
      height: 2px;
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      
    }

    }
}

&-subtitulo{
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    background-color:var(--Primary) ;
    display: flex;
    flex-direction: row;
}
&-semanaTitulo{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Light);
    font-weight: 800;
    position: relative;
    z-index: 5;
    .Title-4{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .is-active{
      background-color: rgb(9, 18, 105);
    }
}
}

.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
@media screen and (max-width: 770px){
    .curricula{
      &-condicional{
        flex-direction: column;
        flex-wrap: nowrap;
      }
      &-subtema{
        width: 100%;
      }
    }
}
</style>