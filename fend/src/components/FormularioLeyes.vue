<template>
  <div class="formulario-leyes">
    <h1>Formulario de Leyes</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="codigo">Código de la Ley:</label>
        <input type="text" id="codigo" v-model="ley.codigo" required>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción de la Ley:</label>
        <input type="text" id="descripcion" v-model="ley.descripcion" required>
      </div>
      <div class="form-buttons">
        <button type="button" @click="leerLeyes">Consultar</button>
        <button type="button" @click="agregarLey">Guardar</button>
        <button type="button" @click="eliminarLey">Eliminar</button>
        <button type="button" @click="actualizarLey">Actualizar</button>
      </div>
    </form>
    <div v-if="leyes.length > 0">
      <h2>Leyes Registradas</h2>
      <ul>
        <li v-for="ley in leyes" :key="ley.codigo">
          {{ ley.codigo }} - {{ ley.descripcion }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Inventario, Carrito } from './models';
export default {
  name: 'FormularioLeyes',
  data() {
    return {
      ley: {
        codigo: '',
        descripcion: '',
      },
      leyes: [],
      inventario: new Inventario(),
      carrito: new Carrito(),
    };
  },
  methods: {
    agregarLey() {
      axios
        .post('http://127.0.0.1:5000/leyes', this.ley)
        .then(() => {
          console.log('Ley guardada correctamente');
          this.leerLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al guardar la ley:', error);
      });
    },
    resetForm() {
      this.ley.codigo = '';
      this.ley.descripcion = '';
    },
    leerLeyes() {
      axios
        .get('http://127.0.0.1:5000/leyes')
        .then(response => {
          this.leyes = response.data;
          console.log('Leyes:', this.leyes);
        })
        .catch(error => {
          console.error('Error al obtener las leyes:', error);
      });
    },
    actualizarLey() {
      const url = ('http://127.0.0.1:5000/leyes/${this.ley.codigo}');
      axios
        .put(url, { descripcion: this.ley.descripcion })
        .then(() => {
          console.log('Ley actualizada correctamente');
          this.carrito.actualizar_ley(this.ley.codigo, this.ley.descripcion);
          this.leerLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al actualizar la ley:', error);
      });
    },
    eliminarLey() {
      const url = ('http://127.0.0.1:5000/leyes/${this.ley.codigo}');
      axios
        .delete(url)
        .then(() => {
          console.log('Ley eliminada correctamente');
          this.carrito.eliminar_ley(this.ley.codigo);
          this.leerLeyes();
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al eliminar la ley:', error);
      });
    },
  },
};
</script>
<style scoped>
.formulario-leyes {
  background-color: #000000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.formulario-leyes h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
  margin-top: 0px;
  display: auto;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin-left: 200px;
  margin-right: 200px;
}
label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 14px;
}
button {
  padding: 10px;
  background-color: #afa54cd8;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  margin-right:10px;
  margin-top: 10px;
}
button:hover {
  background-color: #a07845;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.form-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
}
</style>