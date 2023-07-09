<template>
  <div id="app">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
    <header>
      <NavBar></NavBar>
      <section id="encabezado">
        <div class="text-container">
          <h1 class="animated-heading">CONTENIDO-JURÍDICO.ARG</h1>
        </div>
      </section>
    </header>
    <main>
      <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
      <component :is="Component" />
      </transition>
      </router-view>
      <section class="column-container" v-show="rutaActual === 'columnas'">
        <LegislacionArg></LegislacionArg>
        <JurisprudenciaArg></JurisprudenciaArg>
        <DoctrinaArg></DoctrinaArg>
        <ProximaCont></ProximaCont>
      </section>
    <section>
      <footer>
      <FooterCont></FooterCont>
    </footer>
  </section>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LegislacionArg from './components/LegislacionArg.vue';
import JurisprudenciaArg from './components/JurisprudenciaArg.vue';
import DoctrinaArg from './components/DoctrinaArg.vue';
import ProximaCont from './components/ProximaCont.vue';
import FooterCont from './components/FooterCont.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    LegislacionArg,
    JurisprudenciaArg,
    DoctrinaArg,
    ProximaCont,
    FooterCont,
  },
  data() {
    return {
      rutaActual: '',
    };
  },
  watch: {
    $route(to) {
      this.rutaActual = to.name;
    },
  },
mounted() {
    this.animateEncabezado();
  },
  methods: {
    animateEncabezado() {
      const heading = document.querySelector('.animated-heading');
      const container = document.querySelector('.text-container');
      let posX = container.offsetWidth;

      function animate() {
        posX -= 5;
        heading.style.transform = `translateX(${posX}px)`;

        if (posX <= -heading.offsetWidth) {
          posX = container.offsetWidth;
        }

        requestAnimationFrame(animate);
      }

      animate();
    },
  },
};
</script>

<style>
#encabezado {
  overflow: hidden;
}

.text-container {
  white-space: nowrap;
}

.animated-heading {
  position: relative;
}
</style>