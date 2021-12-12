import { Component, OnInit } from '@angular/core';
import { DeudaService } from '../servicios/deuda.service';

@Component({
  selector: 'app-lista-registro-me-debe',
  templateUrl: './lista-registro-me-debe.component.html',
  styleUrls: ['./lista-registro-me-debe.component.css']
})
export class ListaRegistroMeDebeComponent implements OnInit {
  datos_MeDebe:any;

  constructor(private servicioDeuda:DeudaService) { }

  ngOnInit(): void {
    this.obtenerDatosMeDebe();
  }

  obtenerDatosMeDebe(){
    this.servicioDeuda.obtener_RegistroMeDebe().subscribe(
      (response:any) =>{
        this.datos_MeDebe = response.registro_deudas;
        console.log(this.datos_MeDebe)
      },
      error => {
        alert("Hay errores")
      }
    )
  }

}
