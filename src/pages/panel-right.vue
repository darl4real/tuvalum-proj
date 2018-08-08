<template>
  <f7-page>
    <f7-navbar title="Right Panel"></f7-navbar>
    <f7-block strong>
      <p></p>
    </f7-block>
    <f7-block-title>Panel Derecha</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/bicicleta/" title="bicicleta"></f7-list-item>
      <f7-list-item link="/cascos/" title="cascos"></f7-list-item>
    </f7-list>
    <f7-block-title></f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/bicicleta/" title="bicicleta" view="#main-view" panel-close></f7-list-item>
      <f7-list-item link="/cascos/" title="cascos" view="#main-view" panel-close></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
</script>
