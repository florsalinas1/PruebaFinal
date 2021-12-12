import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeudaService {
  url_backend = environment.url_backend+"/registro_deuda";

  constructor(private http:HttpClient) { }

  registrar_datosDeuda(registro_deuda:any){
    return this.http.post(`${this.url_backend}/crear`,registro_deuda);
    console.log(registro_deuda);
  }

  obtener_RegistroLeDebo(){
    return this.http.get(`${this.url_backend}/obtener-registro-deuda-deben/:42/:0`)
  }

  obtener_RegistroMeDebe(){
    return this.http.get(`${this.url_backend}/obtener-registro-deuda-pagar/:id_usuario/:tipo`)
  }
}
