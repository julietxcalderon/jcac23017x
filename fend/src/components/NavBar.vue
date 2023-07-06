<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/inicio">
        <img src="@/assets/logo.png" alt="logo">
      </router-link>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/legislacion">Legislación</router-link>
      </li>
      <li>
        <router-link to="/jurisprudencia">Jurisprudencia</router-link>
      </li>
      <li>
        <router-link to="/doctrina">Doctrina</router-link>
      </li>
      <li>
        <router-link to="/proximamente">Próximamente</router-link>
      </li>
      <li>
        <form class="search-form" @submit.prevent="search">
          <input type="text" v-model="searchQuery" placeholder="...">
          <button type="submit" title="Buscar">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </li>
      <li>
        <i class="fas fa-question-circle"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    closeNav() {
      this.isNavOpen = false;
    },
    search() {
      const searchQuery = this.searchQuery;
      console.log('Realizando búsqueda:', searchQuery);
    }
  },
  data() {
    return {
      isNavOpen: true,
      searchQuery: ''
    };
  }
};
</script>

