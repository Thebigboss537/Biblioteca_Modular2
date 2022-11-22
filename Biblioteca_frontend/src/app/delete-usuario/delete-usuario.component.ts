import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  id_usuario: any;

  usuario = {
    cedula: '',
    nombre: '',
    apellido: '',
    id_programa_academico: '',
    telefono: '',
    semestre: '',
    id_rol: '',
    correo_electronico: '',
    contraseña: '',
    estado: ''
  }

  constructor(private service:UsuarioService,
              private route: ActivatedRoute,
              private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {
  
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }

    this.id_usuario = this.route.snapshot.paramMap.get('id_usuario');
    this.service.getUsuario(this.id_usuario).subscribe((data: any)=> {
      console.log(data);
      this.usuario.cedula = data.result.cedula;
      this.usuario.nombre = data.result.nombre;
      this.usuario.apellido = data.result.cedula;
      this.usuario.id_programa_academico = data.result.id_programa_academico;
      this.usuario.telefono = data.result.telefono;
      this.usuario.semestre = data.result.semestre;
      this.usuario.id_rol = data.result.id_rol;
      this.usuario.correo_electronico = data.result.correo_electronico;
      this.usuario.contraseña = data.result.contraseña;
      this.usuario.estado = data.result.estado;
    })
  }

  cancel(){
    this.router.navigate(['/usuario']);
 }

  confirmar(){
    this.service.deleteUsuario(this.id_usuario).subscribe((data: any)=>{
      this.router.navigate(['/usuario']);
    })
  }

}
