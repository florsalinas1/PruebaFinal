import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url_backend = environment.url_backend+"/login";

  constructor(private http:HttpClient) { }

  crear_datosAutenticacion(datosAutenticacion:any){
    return this.http.post(`${this.url_backend}/inicio-sesion`,datosAutenticacion);
    console.log(datosAutenticacion);
  }
}
