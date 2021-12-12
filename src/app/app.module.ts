import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { ListaRegistroUsuariosComponent } from './lista-registro-usuarios/lista-registro-usuarios.component';
import { ListaRegistroLeDeboComponent } from './lista-registro-le-debo/lista-registro-le-debo.component';
import { ListaRegistroMeDebeComponent } from './lista-registro-me-debe/lista-registro-me-debe.component';
import { RegistroDeudaComponent } from './registro-deuda/registro-deuda.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    ListaRegistroUsuariosComponent,
    ListaRegistroLeDeboComponent,
    ListaRegistroMeDebeComponent,
    RegistroDeudaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
