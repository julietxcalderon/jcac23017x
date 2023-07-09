<template>
  <section id="jurisprudencia" class="jurisprudencia-section">
    <div class="column">
      <h1>Jurisprudencia</h1>
      <p>En esta sección encontrarás casos y fallos judiciales relevantes en Argentina.</p>
      <img src="@/assets/juris.png" alt="Fallos" class="column-image">
      <h2>Resoluciones Judiciales</h2>
      <p>#CSJN #PLENARIOS #SUMARIOS</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JurisprudenciaArg',
};
</script>

<style>
#jurisprudencia {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex: 1 1 100%;
  max-width: 100%;
  margin: 10px;
  padding: 20px;
  background-color: #000000;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
}

.column-image {
  width: 100%;
  height: auto;
}
</style>

  