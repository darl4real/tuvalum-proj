<template>
  <f7-page>
    <f7-navbar title="Cascos" back-link="Back"></f7-navbar>
    <f7-block-title>Eligir Producto</f7-block-title>

   <f7-block-title>Tipos de Cascos</f7-block-title>
    <b-form-select v-model="selected" class="mb-3">
      <option :value="null">Eligir una marca</option>
      <option value="a">Marca1</option>
      <option value="b" disabled>Marca2 (disabled)</option>
      <optgroup label="Grupo de Modelos">
        <option :value="{'C':'3PO'}">Modelo1</option>
        <option :value="{'R':'2D2'}">Modelo2</option>
      </optgroup>
    </b-form-select>
    <div>Selected: <strong>{{ selected }}</strong></div>
  </div>
        <f7-label>Agregue una marca si no puede encontrar su marca</f7-label>
        <f7-input type="textarea" placeholder="marca y indicar modelo" resizable></f7-input>



    <f7-block-title></f7-block-title>
      <f7-button class="col" big fill raised color="red" @click="submit">submit</f7-button>
  </f7-page>
</template>

<script>
import eventHub from '../eventHub.js'
export default {
  data () {
    return {
      selected: null
    }
  },

  methods: {
    submit() {
      console.log( this.selected )
      eventHub.$emit('submitB1', this.selected);
    }
  }
}
</script>
