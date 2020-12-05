<template>
    <div>
        <Hero
            :title="curso.subNombres"
            :home="false" 
        />
        <Formdescuento />
        <div class="l-container-pd">
            <div class="l-section Especialidad">
                <div class="Especialidad-layout">
                    <VerMasSlider
                        :titulo="curso.frase"
                        :imgSlider="curso.imgSlider"
                    />
                    <VerMasAcercaPrograma
                        :programa="curso.nombre"
                        :textoAcercaDe="curso.descripcion"
                    />
                    <VerMasBeneficio />    
                    <VerMasHorario
                        :inicioClases="curso.inicioClases"
                        :horario="curso.horario"
                        :tamanoHor="curso.tamanohorario"
                    />
                    <VerMasCurricula
                        :planEstudio="curso.planEstudio"
                    />
                    <Formdesmov />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Formdescuento from '@/components/Formdescuento.vue';
import Formdesmov from '@/components/Formdesmov.vue';
import VerMasHorario from '@/components/VerMasHorario'
import VerMasBeneficio from '@/components/VerMasBeneficio';
import VerMasSlider from '@/components/VerMasSlider';
import VerMasAcercaPrograma from '@/components/VerMasAcercaPrograma';
import VerMasCurricula from '@/components/VerMasCurricula.vue';

import { mapState , mapActions } from 'vuex'; 

export default {
    name: 'Especialidad',
    components:{
        Hero,
        Formdescuento,
        Formdesmov,
        VerMasHorario,
        VerMasBeneficio,
        VerMasSlider,
        VerMasAcercaPrograma,
        VerMasCurricula,
    },
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['getCursoAction', 'setFooterAction', 'setNavAction'])
    },
    computed:{
        ...mapState(['curso'])
    },
    created(){
        this.getCursoAction(this.id);
        this.setFooterAction(true);
        this.setNavAction({
            visibility: true,
            solid: false,
            vista:{
                view: "",
                back: ""
            }
        });
        window.scroll(0,0);
    },
    updated(){
        window.scroll(0,0);
    }
}
</script>

<style scoped lang="scss">
    .Especialidad{
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 40px;
        &-layout{
            width: 100%;
        }
    }
    @media screen and (min-width: 990px) {
        .Especialidad{
            grid-template-columns: 1fr 1fr 1fr;
            &-layout{
                grid-column-start: 1;
                grid-column-end: 3;
            }
        }
    }
    @media screen and (min-width: 1200px) {
        .Especialidad{
            grid-column-gap: 86px;
        }
    }
</style>