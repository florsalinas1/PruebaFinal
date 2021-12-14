import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:any;

  constructor(private fb:FormBuilder, private serviceUsuarios:UsuariosService) { }

  ngOnInit(): void {
    this.usuario = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(3), Validators.max(15)]],
      apellido: ['',[Validators.required, Validators.minLength(4)]],
      telefono: [ ,[Validators.required]],
      correo: ['',[Validators.required, Validators.maxLength(25)]],
      tipo: [ ,[Validators.required]],
      estado: [ ,[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    })
  }

  get formularioReactivo() {
    return this.usuario.controls;
  }

 

  enviarDatos(){
    this.serviceUsuarios.crear_datosUsuarios(this.usuario.value).subscribe(
      
      (response:any)=>{
        
        if(response.usuario){
          alert("Usuario creado correctamente");
          console.log(response)
        }else{
          alert("Usuario no creado")
        }
        
      },
      error=>{
        console.log(error)
        alert("error al registrar")

      }
      
    )
  }
    

}
