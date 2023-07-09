<template>
  <section id="doctrina" class="doctrina-section">
    <div class="column">
      <h1>Doctrina</h1>
      <p>En esta sección encontrarás artículos y análisis de destacadxs juristas argentinxs.</p>
      <img src="@/assets/doctri.png" alt="Doctrina" class="column-image">
      <h2>Ciencia Jurídica</h2>
      <p>#DEBATES #PARADIGMAS #TENDENCIAS</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DoctrinaArg',
};
</script>

<style>
#doctrina {
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
