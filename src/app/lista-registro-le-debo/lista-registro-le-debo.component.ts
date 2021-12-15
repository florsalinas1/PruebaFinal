import { Component, OnInit } from '@angular/core';
import { DeudaService } from '../servicios/deuda.service';

@Component({
  selector: 'app-lista-registro-le-debo',
  templateUrl: './lista-registro-le-debo.component.html',
  styleUrls: ['./lista-registro-le-debo.component.css']
})
export class ListaRegistroLeDeboComponent implements OnInit {
  datos_LeDebo:any;
 

  constructor(private servicioDeuda: DeudaService) { }

  ngOnInit(): void {
    this.obtenerDatosLeDebo();
  }

  obtenerDatosLeDebo(){
    
    this.servicioDeuda.obtener_RegistroLeDebo(40,0).subscribe(
      (response:any) =>{
        this.datos_LeDebo = response.registro_deudas;
        console.log(this.datos_LeDebo)
      },
      error => {
        alert("Se encontraron errores")
      }
    )
  }
}
  
  




