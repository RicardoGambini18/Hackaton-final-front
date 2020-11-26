<template>
  <div class="horario">
    <div class="horario-boxtitulo" @click="abriacordion">
      <h2 class="horario-titulo Title-4">Horarios</h2>
    </div>
    <div v-bind:class="clases">
      <table class="tabla egt">
        <tr class="tabla-fila">
          <th class="tabla-celda tabla-colInicio" rowspan="4">
            Incio de clases: 7 de diciembre
          </th>
          <th class="tabla-encabezado tabla-celda">Frecuencia</th>
          <th class="tabla-encabezado tabla-celda">Horario</th>
        </tr>
        <tr class="tabla-fila">
          <td class="tabla-celda">Lunes, martes y miércoles</td>
          <td class="tabla-celda">7:30 p.m a 9:30 p.m</td>
        </tr>

        <tr class="tabla-fila">
          <td class="tabla-celda">Jueves (Asesoria)</td>
          <td class="tabla-celda">7:30 p.m a 9:30 p.m</td>
        </tr>

        <tr class="tabla-fila">
          <td class="tabla-celda">Sábado</td>
          <td class="tabla-celda">8:00 a.m a 2:00 p.m</td>
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

      inicioClases: "",
      horario: [
        {
          frecuencia: "",
          hora: "",
        },
      ],
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
.horario {
  width: 670px;
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