<template>
  <div class="horario">
    <div class="horario-boxtitulo" @click="abriacordion">
      <h2 class="horario-titulo Title-4">Horarios</h2>
    </div>
    <div v-bind:class="clases">
      <table class="tabla egt">
        <tr class="tabla-fila">
          <th class="tabla-celda tabla-colInicio Title-5" :rowspan="tamanoHor">
            {{inicioClases}}
          </th>
          <th class="tabla-encabezado tabla-celda Title-5">Frecuencia</th>
          <th class="tabla-encabezado tabla-celda Title-5">Horario</th>
        </tr>
        <tr class="tabla-fila" v-for="(item,index) in horario" :key="index">
          <td class="tabla-celda Parrafo">
            {{item.frecuencia}}
          </td>
          <td class="tabla-celda Parrafo">
            {{item.hora}}
          </td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clases: {
        horarioboxTabla: true,
        ocultar: true,
      },
    };
  },
  props:{
    inicioClases: String,
    horario: Array,
    tamanoHor:Number
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
.horario {
  width: 100%;
  margin-bottom: 20px;
 @media screen and (max-width: 770px) {
     width: 100%;
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
      background-color:  var(--Primary);
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

  &boxTabla {
    padding-top: 20px;
    width: 100%;
    height: 100%;
  }
}
.tabla {
  width: 100%;
  margin-bottom: 11.2px;

  &-encabezado {
    background-color: var(--Dark);
    color: var(--Light);
  }
  &-celda {
    width: 40%;
    text-align: center;
  }
  &-colInicio {
    background-color: var(--Primary);
    color: var(--Light);
    width: 20%;
    padding: 0 20px;
  }
  &-fila {
    height: 44.8px;
  }
}
.ocultar {
  @media screen and (max-width: 770px) {
    display: none;
  }
}
</style>