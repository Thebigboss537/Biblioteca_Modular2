import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Programa_academicoInterface } from '../interfaces/Programa_academicoInterface';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',                                    
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  dataSource: any=[];
  usuarioForm: FormGroup;
  tipoform: FormGroup;
  disableSelect = false;

  constructor(public service: UsuarioService, 
              private router: Router,
              private fb: FormBuilder, private serviceauth: AuthService) { 

    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),                 
      apellido: new FormControl('', Validators.required),
      id_programa_academico: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      semestre: new FormControl('', Validators.required),
      correo_electronico: new FormControl('', Validators.required)
    }),this.tipoform = new FormGroup({
      tipo: new FormControl('usuario', Validators.required)
     })
    }
  
  

  onSubmit(){
    
    console.log(this.usuarioForm.value);
    this.service.crearUsuario(this.usuarioForm.value).subscribe((data: any) => {
      alert("Usuario Creado");
      this.router.navigate(['/usuario']);
    })
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


  }

  Tipo_usuario(tipoform: any) {
    if(tipoform.value.tipo == "bibliotecario"){
      this.disableSelect = true;
      this.usuarioForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        cedula: new FormControl('', Validators.required),                 
        apellido: new FormControl('', Validators.required),
        id_programa_academico: new FormControl({value: '', disabled: true}),
        telefono: new FormControl('', Validators.required),
        semestre: new FormControl({value: '', disabled: true}),
        correo_electronico: new FormControl('', Validators.required)
       })
    }else if (tipoform.value.tipo == "usuario"){
      this.disableSelect = false;
      this.usuarioForm = new FormGroup({
        nombre: new FormControl('', Validators.required),
        cedula: new FormControl('', Validators.required),                 
        apellido: new FormControl('', Validators.required),
        id_programa_academico: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
        semestre: new FormControl('', Validators.required),
        correo_electronico: new FormControl('', Validators.required)
      })
    }

    
  }


}