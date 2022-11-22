import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ProgramaAcademicoService } from '../programa-academico.service';

@Component({
  selector: 'app-crear-programa-academico',
  templateUrl: './crear-programa-academico.component.html',
  styleUrls: ['./crear-programa-academico.component.css']
})
export class CrearProgramaAcademicoComponent {

  constructor(private service: ProgramaAcademicoService, private router: Router, private serviceauth: AuthService) { }

  programa_academicoForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.programa_academicoForm.value);

    this.service.crearPrograma_academico(this.programa_academicoForm.value).subscribe((data:any) => {
      alert("Programa académico creado");
      this.router.navigate(['/programa_academico']);
    })
  }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }
  }

  
}