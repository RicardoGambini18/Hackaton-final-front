<template>
  <div class="curricula">
    <div class="curricula-boxtitulo" @click="abriacordion">
      <h2 class="curricula-titulo Title-4" >Curricula</h2>
    </div>
    <div :class="clases">
        <ul class="curricula-subtitulo">
           
            <li class="curricula-semanaTitulo Title-4"   
            v-on:click="cambiarcurricula($event)" 
            v-for="(planEst ,index) in planEstudio" 
            :key="index">
                
                {{planEst.titulo}} 
            </li>
        </ul>


        <ul class="curricula-boxSemana"  v-for="(planEst ,index) in planEstudio" :key="index">
            <div class="curricula-condicional" v-if="index==unidad">
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
    unidad:0, 
    
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
      console.log(event)
    }


    },
  props: {
    planEstudio: Array,
  },
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
}
  &Parrafo {
    width: 100%;
    padding: 20px 5px 0 5px;
    text-align: left;
  }
  &-boxSemana{
    width: 100%;
  
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
    margin-bottom: 20px;
    background-color:var(--Primary) ;
    display: flex;
    flex-direction: row;
}
&-semanaTitulo{
    height: 100%;
    width: 100%;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Light);
    font-weight: 800;
}
}

.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
</style>