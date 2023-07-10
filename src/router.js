import { createRouter, createWebHistory } from 'vue-router';
import InicioBot from './components/InicioBot.vue';
import LegislacionArg from './components/LegislacionArg.vue';
import JurisprudenciaArg from './components/JurisprudenciaArg.vue';
import DoctrinaArg from './components/DoctrinaArg.vue';
import ProximaCont from './components/ProximaCont.vue';
import FormularioLeyes from './components/FormularioLeyes.vue';

const routes = [
  { path: '/', component: InicioBot },
  { path: '/inicio', component: InicioBot },
  { path: '/legislacion', component: LegislacionArg },
  { path: '/jurisprudencia', component: JurisprudenciaArg },
  { path: '/doctrina', component: DoctrinaArg },
  { path: '/proximamente', component: ProximaCont },
  { path: '/formulario-leyes', component: FormularioLeyes },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

