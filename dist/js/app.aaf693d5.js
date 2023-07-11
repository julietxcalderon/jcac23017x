(function(){"use strict";var e={4078:function(e,r,t){var n=t(9242),o=t(3396);const i={id:"app"},a=(0,o._)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"},null,-1),s=(0,o._)("link",{rel:"preconnect",href:"https://fonts.googleapis.com",crossorigin:""},null,-1),c=(0,o._)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),l=(0,o._)("link",{href:"https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",rel:"stylesheet"},null,-1),u=(0,o._)("section",{id:"encabezado"},[(0,o._)("div",{class:"text-container"},[(0,o._)("h1",{class:"animated-heading"},"CONTENIDO-JURÍDICO.ARG")])],-1),d={class:"column-container"};function g(e,r,t,g,p,m){const h=(0,o.up)("NavBar"),y=(0,o.up)("router-view"),f=(0,o.up)("LegislacionArg"),v=(0,o.up)("JurisprudenciaArg"),_=(0,o.up)("DoctrinaArg"),b=(0,o.up)("ProximaCont"),L=(0,o.up)("FooterCont");return(0,o.wg)(),(0,o.iD)("div",i,[a,s,c,l,(0,o._)("header",null,[(0,o.Wm)(h),u]),(0,o._)("main",null,[(0,o.Wm)(y,null,{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(n.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1}),(0,o.wy)((0,o._)("section",d,[(0,o.Wm)(f),(0,o.Wm)(v),(0,o.Wm)(_),(0,o.Wm)(b)],512),[[n.F8,"columnas"===p.rutaActual]]),(0,o._)("section",null,[(0,o._)("footer",null,[(0,o.Wm)(L)])])])])}var p=t.p+"img/logo.93681e8d.png";const m={class:"navbar"},h={class:"logo"},y=(0,o._)("img",{src:p,alt:"logo"},null,-1),f={class:"nav-links"},v=(0,o._)("button",{type:"submit",title:"Buscar"},[(0,o._)("i",{class:"fas fa-search"})],-1),_=(0,o._)("li",null,[(0,o._)("i",{class:"fas fa-question-circle"})],-1);function b(e,r,t,i,a,s){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",m,[(0,o._)("div",h,[(0,o.Wm)(c,{to:"/inicio"},{default:(0,o.w5)((()=>[y])),_:1})]),(0,o._)("ul",f,[(0,o._)("li",null,[(0,o.Wm)(c,{to:"/legislacion"},{default:(0,o.w5)((()=>[(0,o.Uk)("Legislación")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(c,{to:"/jurisprudencia"},{default:(0,o.w5)((()=>[(0,o.Uk)("Jurisprudencia")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(c,{to:"/doctrina"},{default:(0,o.w5)((()=>[(0,o.Uk)("Doctrina")])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(c,{to:"/proximamente"},{default:(0,o.w5)((()=>[(0,o.Uk)("Próximamente")])),_:1})]),(0,o._)("li",null,[(0,o._)("form",{class:"search-form",onSubmit:r[1]||(r[1]=(0,n.iM)(((...e)=>s.search&&s.search(...e)),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>a.searchQuery=e),placeholder:"..."},null,512),[[n.nr,a.searchQuery]]),v],32)]),_])])}var L={methods:{closeNav(){this.isNavOpen=!1},search(){const e=this.searchQuery;console.log("Realizando búsqueda:",e)}},data(){return{isNavOpen:!0,searchQuery:""}}},w=t(89);const k=(0,w.Z)(L,[["render",b]]);var C=k,A=t.p+"img/legis.188cdb30.png";const D={id:"legislacion",class:"legislacion-section"},E={class:"column"},O=(0,o._)("h1",null,"Legislación",-1),x=(0,o._)("p",null,"Aquí encontrarás información sobre la legislación vigente en Argentina.",-1),j=(0,o._)("img",{src:A,alt:"Leyes",class:"column-image"},null,-1),R=(0,o._)("h2",null,"Legislación Argentina",-1),I=(0,o._)("p",null,"#LOCALES #NACIONALES #INTERNACIONALES",-1);function S(e,r,t,n,i,a){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",D,[(0,o._)("div",E,[O,x,(0,o.Wm)(s,{to:"/formulario-leyes"},{default:(0,o.w5)((()=>[j])),_:1}),R,I])])}var q={name:"LegislacionArg"};const N=(0,w.Z)(q,[["render",S]]);var U=N,W=t.p+"img/juris.2d7acccc.png";const z={id:"jurisprudencia",class:"jurisprudencia-section"},F=(0,o._)("div",{class:"column"},[(0,o._)("h1",null,"Jurisprudencia"),(0,o._)("p",null,"En esta sección encontrarás casos y fallos judiciales relevantes en Argentina."),(0,o._)("img",{src:W,alt:"Fallos",class:"column-image"}),(0,o._)("h2",null,"Resoluciones Judiciales"),(0,o._)("p",null,"#CSJN #PLENARIOS #SUMARIOS")],-1),Z=[F];function P(e,r,t,n,i,a){return(0,o.wg)(),(0,o.iD)("section",z,Z)}var T={name:"JurisprudenciaArg"};const J=(0,w.Z)(T,[["render",P]]);var M=J,B=t.p+"img/doctri.6cc57a9c.png";const $={id:"doctrina",class:"doctrina-section"},Q=(0,o._)("div",{class:"column"},[(0,o._)("h1",null,"Doctrina"),(0,o._)("p",null,"En esta sección encontrarás artículos y análisis de destacadxs juristas argentinxs."),(0,o._)("img",{src:B,alt:"Doctrina",class:"column-image"}),(0,o._)("h2",null,"Ciencia Jurídica"),(0,o._)("p",null,"#DEBATES #PARADIGMAS #TENDENCIAS")],-1),V=[Q];function Y(e,r,t,n,i,a){return(0,o.wg)(),(0,o.iD)("section",$,V)}var H={name:"DoctrinaArg"};const K=(0,w.Z)(H,[["render",Y]]);var G=K;const X={id:"proximamente",class:"proximamente-section"},ee=(0,o._)("h1",null,"Próximamente",-1),re=(0,o._)("p",null,"Próximamente agregaremos más contenido relacionado con el ámbito jurídico en Argentina.",-1),te=(0,o._)("h2",null,"Se Vienen Cositass",-1),ne=(0,o._)("p",null," #DICTÁMENES #ESCRITOS #PROYECTOS ",-1),oe=[ee,re,te,ne];function ie(e,r,t,n,i,a){return(0,o.wg)(),(0,o.iD)("section",X,oe)}var ae={name:"ProximaCont"};const se=(0,w.Z)(ae,[["render",ie]]);var ce=se;const le={class:"footer"},ue=(0,o.uE)('<div class="footer-content"><a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a><a href="https://t.me/..." target="_blank" rel="noopener noreferrer"><i class="bi bi-telegram"></i></a><a href="https://www.linkedin.com/in/..." target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a><a href="https://docs.google.com/forms/..." target="_blank" rel="noopener noreferrer"><i class="bi bi-envelope"></i></a><p>Todos los derechos reservados</p></div>',1),de=[ue];function ge(e,r,t,n,i,a){return(0,o.wg)(),(0,o.iD)("footer",le,de)}var pe={name:"FooterCont"};const me=(0,w.Z)(pe,[["render",ge]]);var he=me,ye={name:"App",components:{NavBar:C,LegislacionArg:U,JurisprudenciaArg:M,DoctrinaArg:G,ProximaCont:ce,FooterCont:he},data(){return{rutaActual:""}},watch:{$route(e){this.rutaActual=e.name}},mounted(){this.animateEncabezado()},methods:{animateEncabezado(){const e=document.querySelector(".animated-heading"),r=document.querySelector(".text-container");let t=r.offsetWidth;function n(){t-=5,e.style.transform=`translateX(${t}px)`,t<=-e.offsetWidth&&(t=r.offsetWidth),requestAnimationFrame(n)}n()}}};const fe=(0,w.Z)(ye,[["render",g]]);var ve=fe,_e=t(2483);function be(e,r,t,n,i,a){const s=(0,o.up)("LegislacionArg");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s)])}var Le={name:"InicioBot",components:{LegislacionArg:U}};const we=(0,w.Z)(Le,[["render",be]]);var ke=we,Ce=t(7139);const Ae=e=>((0,o.dD)("data-v-26c30207"),e=e(),(0,o.Cn)(),e),De={class:"formulario-leyes"},Ee=Ae((()=>(0,o._)("h1",null,"Formulario de Leyes",-1))),Oe={class:"form-group"},xe=Ae((()=>(0,o._)("label",{for:"codigo"},"Código:",-1))),je={class:"form-group"},Re=Ae((()=>(0,o._)("label",{for:"descripcion"},"Descripción:",-1))),Ie={class:"form-buttons"},Se={key:0},qe=Ae((()=>(0,o._)("h2",null,"#LeyesRegistradas",-1))),Ne={class:"leyes-list"},Ue=["onClick"],We=Ae((()=>(0,o._)("i",{class:"fas fa-shopping-cart"},null,-1))),ze=[We],Fe=["onClick"],Ze=Ae((()=>(0,o._)("i",{class:"fas fa-times"},null,-1))),Pe=[Ze],Te={key:1},Je=Ae((()=>(0,o._)("h2",null,"Carrito",-1))),Me={class:"carrito-list"},Be={key:2},$e=Ae((()=>(0,o._)("h2",null,"Inventario",-1))),Qe={class:"inventario-list"};function Ve(e,r,t,i,a,s){return(0,o.wg)(),(0,o.iD)("div",De,[Ee,(0,o._)("form",{onSubmit:r[6]||(r[6]=(0,n.iM)(((...r)=>e.submitForm&&e.submitForm(...r)),["prevent"]))},[(0,o._)("div",Oe,[xe,(0,o.wy)((0,o._)("input",{type:"text",id:"codigo","onUpdate:modelValue":r[0]||(r[0]=e=>a.ley.codigo=e),required:""},null,512),[[n.nr,a.ley.codigo]])]),(0,o._)("div",je,[Re,(0,o.wy)((0,o._)("input",{type:"text",id:"descripcion","onUpdate:modelValue":r[1]||(r[1]=e=>a.ley.descripcion=e),required:""},null,512),[[n.nr,a.ley.descripcion]])]),(0,o._)("div",Ie,[(0,o._)("button",{type:"button",onClick:r[2]||(r[2]=(...e)=>s.consultarLeyes&&s.consultarLeyes(...e))},"Consultar leyes"),(0,o._)("button",{type:"button",onClick:r[3]||(r[3]=(...e)=>s.agregarLey&&s.agregarLey(...e))},"Agregar"),(0,o._)("button",{type:"button",onClick:r[4]||(r[4]=(...e)=>s.eliminarLey&&s.eliminarLey(...e))},"Eliminar"),(0,o._)("button",{type:"button",onClick:r[5]||(r[5]=(...e)=>s.actualizarLey&&s.actualizarLey(...e))},"Actualizar")])],32),a.mostrarLeyesRegistradas?((0,o.wg)(),(0,o.iD)("div",Se,[qe,(0,o._)("ul",Ne,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.leyesRegistradas,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.codigo},[(0,o.Uk)((0,Ce.zw)(e.codigo)+" - "+(0,Ce.zw)(e.descripcion)+" ",1),s.esLeyEnCarrito(e)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",onClick:r=>s.agregarAlCarrito(e)},ze,8,Ue)),s.esLeyEnCarrito(e)?((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",onClick:r=>s.quitarDelCarrito(e)},Pe,8,Fe)):(0,o.kq)("",!0)])))),128))])])):(0,o.kq)("",!0),a.mostrarCarrito?((0,o.wg)(),(0,o.iD)("div",Te,[Je,(0,o._)("ul",Me,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.carrito.obtenerLeyes(),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.codigo},(0,Ce.zw)(e.codigo)+" - "+(0,Ce.zw)(e.descripcion),1)))),128))]),(0,o._)("button",{type:"button",onClick:r[7]||(r[7]=(...e)=>s.confirmarCarrito&&s.confirmarCarrito(...e))},"Confirmar")])):(0,o.kq)("",!0),a.mostrarInventario?((0,o.wg)(),(0,o.iD)("div",Be,[$e,(0,o._)("ul",Qe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.inventario.obtenerLeyes(),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.codigo},(0,Ce.zw)(e.codigo)+" - "+(0,Ce.zw)(e.descripcion),1)))),128))]),(0,o._)("button",{type:"button",onClick:r[8]||(r[8]=(...e)=>s.descargarInventario&&s.descargarInventario(...e))},"Descargar")])):(0,o.kq)("",!0)])}t(7658),t(2062);var Ye=t(4161);class He{constructor(e,r){this.codigo=e,this.descripcion=r}}class Ke{constructor(){this.leyes=[]}agregarLey(e){this.leyes.push(e)}obtenerLeyes(){return this.leyes}actualizarLey(e,r){for(let t of this.leyes)if(t.codigo===e){t.descripcion=r;break}}eliminarLey(e){for(let r of this.leyes)if(r.codigo===e){this.leyes.splice(this.leyes.indexOf(r),1);break}}}class Ge{constructor(){this.leyes=[]}agregarLey(e){this.leyes.push(e)}quitarLey(e){for(let r of this.leyes)if(r.codigo===e){this.leyes.splice(this.leyes.indexOf(r),1);break}}obtenerLeyes(){return this.leyes}}var Xe={name:"FormularioLeyes",data(){return{ley:{codigo:"",descripcion:""},leyesRegistradas:[],inventario:new Ke,carrito:new Ge,mostrarLeyesRegistradas:!1,mostrarCarrito:!1,mostrarInventario:!1,apiUrl:"https://julietxcalderon.pythonanywhere.com/leyes"}},methods:{agregarLey(){const e=new He(this.ley.codigo,this.ley.descripcion);Ye.Z.post(this.apiUrl,e).then((()=>{console.log("Ley agregada correctamente"),this.consultarLeyes(),this.resetForm()})).catch((e=>{console.error("Error al agregar la ley:",e)}))},resetForm(){this.ley.codigo="",this.ley.descripcion=""},consultarLeyes(){Ye.Z.get(this.apiUrl).then((e=>{this.leyesRegistradas=e.data,this.mostrarLeyesRegistradas=!0,console.log("Leyes consultadas correctamente")})).catch((e=>{console.error("Error al consultar las leyes:",e)}))},actualizarLey(){const{codigo:e,descripcion:r}=this.ley,t=`${this.apiUrl}/${e}`;Ye.Z.put(t,{descripcion:r}).then((()=>{console.log("Ley actualizada correctamente"),this.consultarLeyes(),this.resetForm()})).catch((e=>{console.error("Error al actualizar la ley:",e)}))},eliminarLey(){const{codigo:e}=this.ley,r=`${this.apiUrl}/${e}`;Ye.Z["delete"](r).then((()=>{console.log("Ley eliminada correctamente"),this.consultarLeyes(),this.resetForm()})).catch((e=>{console.error("Error al eliminar la ley:",e)}))},confirmarCarrito(){const e=[...this.carrito.obtenerLeyes()];for(let r of e)this.inventario.agregarLey(r),this.carrito.quitarLey(r.codigo);this.mostrarCarrito=!1,this.mostrarLeyesRegistradas=!1,this.mostrarInventario=!0},agregarAlCarrito(e){this.carrito.agregarLey(e),this.mostrarCarrito=!0},quitarDelCarrito(e){this.carrito.quitarLey(e.codigo)},esLeyEnCarrito(e){return this.carrito.obtenerLeyes().some((r=>r.codigo===e.codigo))},descargarInventario(){const e=JSON.stringify(this.inventario.obtenerLeyes()),r=new Blob([e],{type:"application/json"}),t=URL.createObjectURL(r),n=document.createElement("a");n.href=t,n.setAttribute("download","inventario.json"),n.click()},leerLeyes(){Ye.Z.get(this.apiUrl).then((e=>{this.leyesRegistradas=e.data,console.log("Leyes obtenidas correctamente")})).catch((e=>{console.error("Error al obtener las leyes:",e)}))}},created(){this.leerLeyes()}};const er=(0,w.Z)(Xe,[["render",Ve],["__scopeId","data-v-26c30207"]]);var rr=er;const tr=[{path:"/",component:ke},{path:"/inicio",component:ke},{path:"/legislacion",component:U},{path:"/jurisprudencia",component:M},{path:"/doctrina",component:G},{path:"/proximamente",component:ce},{path:"/formulario-leyes",component:rr}],nr=(0,_e.p7)({history:(0,_e.PO)(),routes:tr});var or=nr;const ir=(0,n.ri)(ve);ir.use(or),ir.mount("#app")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(r,n,o,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,i,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(r){return 0!==e[r]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var u=c(t)}for(r&&r(n);l<a.length;l++)i=a[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self["webpackChunkjcac23017"]=self["webpackChunkjcac23017"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(4078)}));n=t.O(n)})();
//# sourceMappingURL=app.aaf693d5.js.map