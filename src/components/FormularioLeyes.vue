<template>
  <div class="formulario-leyes">
    <h1>Formulario de Leyes</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" v-model="ley.codigo" required>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <input type="text" id="descripcion" v-model="ley.descripcion" required>
      </div>
      <div class="form-buttons">
        <button type="button" @click="consultarLeyes">Consultar leyes</button>
        <button type="button" @click="agregarLey">Agregar</button>
        <button type="button" @click="eliminarLey">Eliminar</button>
        <button type="button" @click="actualizarLey">Actualizar</button>
      </div>
    </form>
    <div v-if="mostrarLeyesRegistradas">
      <h2>#LeyesRegistradas</h2>
      <ul class="leyes-list">
        <li v-for="ley in leyesRegistradas" :key="ley.codigo">
          {{ ley.codigo }} - {{ ley.descripcion }}
          <button v-if="!esLeyEnCarrito(ley)" type="button" @click="agregarAlCarrito(ley)">
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button v-if="esLeyEnCarrito(ley)" type="button" @click="quitarDelCarrito(ley)">
            <i class="fas fa-times"></i>
          </button>
        </li>
      </ul>
    </div>
    <div v-if="mostrarCarrito">
      <h2>Carrito</h2>
      <ul class="carrito-list">
        <li v-for="ley in carrito.obtenerLeyes()" :key="ley.codigo">
          {{ ley.codigo }} - {{ ley.descripcion }}
        </li>
      </ul>
      <button type="button" @click="confirmarCarrito">Confirmar</button>
    </div>
    <div v-if="mostrarInventario">
      <h2>Inventario</h2>
      <ul class="inventario-list">
        <li v-for="ley in inventario.obtenerLeyes()" :key="ley.codigo">
          {{ ley.codigo }} - {{ ley.descripcion }}
        </li>
      </ul>
      <button type="button" @click="descargarInventario">Descargar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

class Ley {
  constructor(codigo, descripcion) {
    this.codigo = codigo;
    this.descripcion = descripcion;
  }
}

class Inventario {
  constructor() {
    this.leyes = [];
  }

  agregarLey(ley) {
    this.leyes.push(ley);
  }

  obtenerLeyes() {
    return this.leyes;
  }

  actualizarLey(codigo, nuevaDescripcion) {
    for (let ley of this.leyes) {
      if (ley.codigo === codigo) {
        ley.descripcion = nuevaDescripcion;
        break;
      }
    }
  }

  eliminarLey(codigo) {
    for (let ley of this.leyes) {
      if (ley.codigo === codigo) {
        this.leyes.splice(this.leyes.indexOf(ley), 1);
        break;
      }
    }
  }
}

class Carrito {
  constructor() {
    this.leyes = [];
  }

  agregarLey(ley) {
    this.leyes.push(ley);
  }

  quitarLey(codigo) {
    for (let ley of this.leyes) {
      if (ley.codigo === codigo) {
        this.leyes.splice(this.leyes.indexOf(ley), 1);
        break;
      }
    }
  }

  obtenerLeyes() {
    return this.leyes;
  }
}

export default {
  name: 'FormularioLeyes',
  data() {
    return {
      ley: {
        codigo: '',
        descripcion: '',
      },
      leyesRegistradas: [],
      inventario: new Inventario(),
      carrito: new Carrito(),
      mostrarLeyesRegistradas: false,
      mostrarCarrito: false,
      mostrarInventario: false,
      apiUrl: 'https://julietxcalderon.pythonanywhere.com/leyes', // URL de la API
    };
  },
  methods: {
    agregarLey() {
      const nuevaLey = new Ley(this.ley.codigo, this.ley.descripcion);
      axios
        .post(this.apiUrl, nuevaLey)
        .then(() => {
          console.log('Ley agregada correctamente');
          this.consultarLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al agregar la ley:', error);
        });
    },
    resetForm() {
      this.ley.codigo = '';
      this.ley.descripcion = '';
    },
    consultarLeyes() {
      axios
        .get(this.apiUrl)
        .then(response => {
          this.leyesRegistradas = response.data;
          this.mostrarLeyesRegistradas = true;
          console.log('Leyes consultadas correctamente');
        })
        .catch(error => {
          console.error('Error al consultar las leyes:', error);
        });
    },
    actualizarLey() {
      const { codigo, descripcion } = this.ley;
      const url = `${this.apiUrl}/${codigo}`;
      axios
        .put(url, { descripcion: descripcion })
        .then(() => {
          console.log('Ley actualizada correctamente');
          this.consultarLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al actualizar la ley:', error);
        });
    },
    eliminarLey() {
      const { codigo } = this.ley;
      const url = `${this.apiUrl}/${codigo}`;
      axios
        .delete(url)
        .then(() => {
          console.log('Ley eliminada correctamente');
          this.consultarLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al eliminar la ley:', error);
        });
    },
    confirmarCarrito() {
      const leyesCarrito = [...this.carrito.obtenerLeyes()];
      for (let ley of leyesCarrito) {
        this.inventario.agregarLey(ley);
        this.carrito.quitarLey(ley.codigo);
      }
      this.mostrarCarrito = false;
      this.mostrarLeyesRegistradas = false;
      this.mostrarInventario = true;
    },
    agregarAlCarrito(ley) {
      this.carrito.agregarLey(ley);
      this.mostrarCarrito = true;
    },
    quitarDelCarrito(ley) {
      this.carrito.quitarLey(ley.codigo);
    },
    esLeyEnCarrito(ley) {
      return this.carrito.obtenerLeyes().some(item => item.codigo === ley.codigo);
    },
    descargarInventario() {
      const data = JSON.stringify(this.inventario.obtenerLeyes());
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'inventario.json');
      link.click();
    },
    leerLeyes() {
      axios
        .get(this.apiUrl)
        .then(response => {
          this.leyesRegistradas = response.data;
          console.log('Leyes obtenidas correctamente');
        })
        .catch(error => {
          console.error('Error al obtener las leyes:', error);
        });
    },
  },
  created() {
    this.leerLeyes();
  },
};
</script>



<style scoped>
.formulario-leyes {
  background-color: #00000041;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.formulario-leyes h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 40px;
}

label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgba(135, 206, 250, 0.438);
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc8c;
  border-radius: 3px;
  font-size: 14px;
}

button {
  padding: 10px;
  background-color: #5fbbc27c;
  color: #ffffffe3;
  font-family: monospace;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #d699678e;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.form-buttons {
  display: flex;
  justify-content: center;
}

.formulario-leyes ul {
  margin-top: 20px;
  list-style-type: none;
}

.formulario-leyes li {
  margin-bottom: 10px;
}

.leyes-list {
  margin-top: 50px;
  list-style-type: none;
  background-color: #00000041;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: right;
}

.leyes-list li {
  margin-bottom: 10px;
}

.inventario-list {
  margin-top: 20px;
  list-style-type: none;
  background-color: #00000041;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: right;
}

.inventario-list li {
  margin-bottom: 20px;
}

.carrito-list {
  margin-top: 50px;
  background-color: #00000041;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: right;
}

.carrito-list li {
  margin-bottom: 20px;
}
</style>
