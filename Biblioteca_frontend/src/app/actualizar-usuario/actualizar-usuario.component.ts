import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Programa_academicoInterface } from '../interfaces/Programa_academicoInterface';
import { RolInterface } from '../interfaces/RolInterface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  form: FormGroup;
  id_usuario: number;

  dataSource: any=[];
  dataSourceRol: any=[];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarUsuarioComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {id_usuario: number, cedula: number, nombre: string, 
                                            apellido: string, id_programa_academico: number, 
                                            telefono: string, semestre: string, id_rol: number, 
                                            correo_electronico: string, estado: string, id_usuario_autenticacion: number },
    private service: UsuarioService, 
    private router: Router, private serviceauth: AuthService) {

      this.id_usuario = data.id_usuario;
      this.form = fb.group({
        id_usuario: [data.id_usuario, Validators.required],
        cedula: [data.cedula, Validators.required],
        nombre: [data.nombre, Validators.required],
        apellido: [data.apellido, Validators.required],
        id_programa_academico: [data.id_programa_academico, Validators.required],
        telefono: [data.telefono, Validators.required],
        semestre: [data.semestre, Validators.required],
        id_rol: [data.id_rol, Validators.required],
        correo_electronico: [data.correo_electronico, Validators.required],
        estado: [data.estado, Validators.required],
        id_usuario_autenticacion: [data.id_usuario_autenticacion, Validators.required]
      })

     }

     cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_usuario = this.id_usuario;
      console.log(this.form.value);
      this.service.actualizarUsuario(this.id_usuario, this.form.value).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/usuario']);
        window.location.reload();
        
      })
      
      this.dialogRef.close();
     }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }

    this.service.getProgramas_academicos().subscribe((data:any) =>{
      this.dataSource=data.result.programas_academicos as Programa_academicoInterface[];
      console.log(data);
    
    });

    /*this.service.getRoles().subscribe((data:any) =>{
      this.dataSourceRol=data.result.rol as RolInterface[];
      console.log(data);
    
    });*/

  }

  

}