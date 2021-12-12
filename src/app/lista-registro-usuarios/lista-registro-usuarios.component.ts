import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-lista-registro-usuarios',
  templateUrl: './lista-registro-usuarios.component.html',
  styleUrls: ['./lista-registro-usuarios.component.css']
})
export class ListaRegistroUsuariosComponent implements OnInit {
  datos_Usuario:any;

  constructor(private servicioUsuarios:UsuariosService) { }

  ngOnInit(): void {
    this.obtener_todosLosUsuarios();
  }

  obtener_todosLosUsuarios(){
    this.servicioUsuarios.obtener_todosLosUsuarios().subscribe(
      (response:any) => {
        this.datos_Usuario = response.usuarios;
        console.log(this.datos_Usuario)
        console.log("Usuarios obtenidos correctamente")
      },
      error => {
        alert("Hay errores");
      }
    )
  }

}
