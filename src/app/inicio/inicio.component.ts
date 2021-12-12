import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario:any;
    

  constructor(private fb:FormBuilder, private serviceAutenticacion:AutenticacionService) {

   }

  ngOnInit(): void {
    this.usuario = this.fb.group ({
      correo:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    
  }

  get formularioReactivo() {
    return this.usuario.controls;
  }

  inicioSesion(){
    this.serviceAutenticacion.crear_datosAutenticacion(this.usuario).subscribe(
      
      (response:any)=>{
        
        if(response.inicio_sesion){
          alert("Inicio de sesión correcto");
          console.log(response)
          
        }else{
          alert("Inicio se sesión incorrecto")
        }
        
      },
      error=>{
        console.log(error)
        alert("Error al iniciar sesión")

      }
      
    )
  }




}
