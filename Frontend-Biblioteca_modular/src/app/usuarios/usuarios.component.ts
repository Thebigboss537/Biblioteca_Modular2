import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ActualizarUsuarioComponent } from '../actualizar-usuario/actualizar-usuario.component';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = [
    'id_usuario',
    'cedula','nombre',
    'apellido',
    'id_programa_academico',
    'telefono',
    'semestre'/*,'id_rol'*/,
    'correo_electronico',
     'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: UsuarioService,
    private dialog: MatDialog, public serviceauth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }

    this.service.getUsuarios().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<UsuarioInterface>(data.result as UsuarioInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    },
    (errorData) => (alert ("Usuario no autorizado"), this.router.navigate(['/login']))
    );
    
  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarUsuario(usuario: UsuarioInterface){
    console.log(usuario);

    this.dialog.open(ActualizarUsuarioComponent,{
      data: {
        id_usuario: usuario.id_usuario,
        cedula: usuario.cedula,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        id_programa_academico: usuario.id_programa_academico,
        telefono: usuario.telefono,
        semestre: usuario.semestre,
        id_rol: usuario.id_rol,
        correo_electronico: usuario.correo_electronico,
        contraseña: usuario.contraseña,
        estado: usuario.estado,
        id_usuario_autenticacion: usuario.id_usuario_autenticacion
      }
    })
  }

}
