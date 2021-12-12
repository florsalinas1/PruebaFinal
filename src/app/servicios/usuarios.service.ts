import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url_backend = environment.url_backend+"/usuario"

  constructor(private http:HttpClient) { }

  crear_datosUsuarios(datos_Usuario:any){
    return this.http.post(`${this.url_backend}/crear`,datos_Usuario);
    console.log(datos_Usuario);
  }

  obtener_usuarioPorCorreo(datos_Usuario:any){
    return this.http.post(`${this.url_backend}/obtener-usuario-correo`,datos_Usuario);
    console.log(datos_Usuario);
  }

  obtener_todosLosUsuarios(){
    return this.http.get(`${this.url_backend}/obtener-usuarios`);
  }
}
