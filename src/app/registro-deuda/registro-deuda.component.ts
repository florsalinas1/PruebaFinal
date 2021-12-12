import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { DeudaService } from '../servicios/deuda.service';

@Component({
  selector: 'app-registro-deuda',
  templateUrl: './registro-deuda.component.html',
  styleUrls: ['./registro-deuda.component.css']
})
export class RegistroDeudaComponent implements OnInit {
  reg_deuda:any;

  constructor(private fb:FormBuilder, private serviceDeuda:DeudaService) { }

  ngOnInit(): void {
    this.reg_deuda = this.fb.group({
        tipo:[ ,[Validators.required]],
        comentario:['',[Validators.required]],
        valor:[ ,[Validators.required]],
        estado:[ ,[Validators.required]] ,
        fecha_creacion:[,[Validators.required]],
        usuarioId:[ ,Validators.required],
        involucradoId:[ ,Validators.required],
    })
  }

  get formularioReactivo() {
    return this.reg_deuda.controls;
  }

  enviarDeuda(){
    this.serviceDeuda.registrar_datosDeuda(this.reg_deuda.value).subscribe(
      (response:any)=>{
        if(response.registro_deuda){
          alert("Registro de deuda creado correctamente");
          console.log(response)
         
        }else{
          alert("Registro no creado")
        }
        
      },
      error=>{
        console.log(error)
        alert("Error al registrar")

      }
      
    )
  }
  
}
