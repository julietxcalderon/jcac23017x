<template>
  <section id="legislacion" class="legislacion-section">
    <div class="column">
      <h1>Legislación</h1>
      <p>Aquí encontrarás información sobre la legislación vigente en Argentina.</p>
      <router-link to="/formulario-leyes">
        <img src="@/assets/legis.png" alt="Leyes" class="column-image">
      </router-link>
      <h2>Legislación Argentina</h2>
      <p>#LOCALES #NACIONALES #INTERNACIONALES</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LegislacionArg',
};
</script>

<style>
#legislacion {
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
