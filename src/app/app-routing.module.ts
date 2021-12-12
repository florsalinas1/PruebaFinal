import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaRegistroLeDeboComponent } from './lista-registro-le-debo/lista-registro-le-debo.component';
import { ListaRegistroMeDebeComponent } from './lista-registro-me-debe/lista-registro-me-debe.component';
import { ListaRegistroUsuariosComponent } from './lista-registro-usuarios/lista-registro-usuarios.component';
import { RegistroDeudaComponent } from './registro-deuda/registro-deuda.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: "inicio",
    component:InicioComponent
  },

  {
    path: "registro",
    component: RegistroComponent
  },

  {
    path: "registro_Deuda",
    component: RegistroDeudaComponent
  },

  {
    path: "lista_Usuarios",
    component: ListaRegistroUsuariosComponent
  },

  {
    path: "lista_LeDebo",
    component: ListaRegistroLeDeboComponent
  },

  {
    path: "lista_MeDebe",
    component: ListaRegistroMeDebeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
