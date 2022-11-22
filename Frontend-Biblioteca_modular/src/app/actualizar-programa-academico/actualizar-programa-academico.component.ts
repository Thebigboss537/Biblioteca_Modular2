import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ProgramaAcademicoService } from '../programa-academico.service';

@Component({
  selector: 'app-actualizar-programa-academico',
  templateUrl: './actualizar-programa-academico.component.html',
  styleUrls: ['./actualizar-programa-academico.component.css']
})
export class ActualizarProgramaAcademicoComponent implements OnInit {

  form: FormGroup;
  id_programa_academico: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarProgramaAcademicoComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_programa_academico: number},
    private service: ProgramaAcademicoService, 
    private router: Router, private serviceauth: AuthService) { 

      this.id_programa_academico = data.id_programa_academico;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })

    }

    cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_programa_academico = this.id_programa_academico;
      this.service.actualizarPrograma_academico(this.id_programa_academico, this.form.value).subscribe((data)=>{
        this.router.navigate(['/programa-academico']);
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
  }

}
