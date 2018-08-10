<template>
  <f7-page>
    <f7-navbar title="Cascos" back-link="Back"></f7-navbar>
    <f7-block-title>Eligir Producto</f7-block-title>

    <f7-block-title>Tipos de cascos</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n" :title="'Marca ' + n"></f7-list-item>
    </f7-list>

    <f7-block-title>Modelos de cascos</f7-block-title>
    <f7-list form>
      <f7-list-item v-for="n in 3" :key="n" radio name="my-radio" :checked="n === 1" :value="n" :title="'modelo ' + n"></f7-list-item>
    </f7-list>
    <f7-list-item>
        <f7-label>Agregue una marca si no puede encontrar su marca</f7-label>
        <f7-input type="textarea" placeholder="marca y indicar modelo" resizable></f7-input>
      </f7-list-item>


    <f7-block-title></f7-block-title>
      <f7-button class="col" big fill raised color="red">submit</f7-button>
  </f7-page>
</template>

<script>
export default {}
</script>
