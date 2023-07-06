export class Ley {
    constructor(codigo, descripcion) {
      this.codigo = codigo;
      this.descripcion = descripcion;
    }
  }
  export class Inventario {
    constructor() {
      this.leyes = [];
    }
    agregar_ley(ley) {
      this.leyes.push(ley);
    }
    obtener_leyes() {
      return this.leyes;
    }
    actualizar_ley(codigo, nueva_descripcion) {
      for (let ley of this.leyes) {
        if (ley.codigo === codigo) {
          ley.descripcion = nueva_descripcion;
          break;
        }
      }
    }
    eliminar_ley(codigo) {
      for (let ley of this.leyes) {
        if (ley.codigo === codigo) {
          this.leyes.splice(this.leyes.indexOf(ley), 1);
          break;
        }
      }
    }
  }
  export class Carrito {
    constructor() {
      this.leyes = [];
    }
    agregar_ley(ley) {
      this.leyes.push(ley);
    }
    obtener_leyes() {
      return this.leyes;
    }
    actualizar_ley(codigo, nueva_descripcion) {
      for (let ley of this.leyes) {
        if (ley.codigo === codigo) {
          ley.descripcion = nueva_descripcion;
          break;
        }
      }
    }
    eliminar_ley(codigo) {
      for (let ley of this.leyes) {
        if (ley.codigo === codigo) {
          this.leyes.splice(this.leyes.indexOf(ley), 1);
          break;
        }
      }
    }
  }