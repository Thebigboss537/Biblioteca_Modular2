import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { TipoMaterialService } from '../tipo-material.service';

@Component({
  selector: 'app-actualizar-tipo-material',
  templateUrl: './actualizar-tipo-material.component.html',
  styleUrls: ['./actualizar-tipo-material.component.css']
})
export class ActualizarTipoMaterialComponent implements OnInit {

  form: FormGroup;
  id_tipo_material: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarTipoMaterialComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_tipo_material: number},
    private service: TipoMaterialService, 
    private router: Router, private serviceauth: AuthService) { 

      this.id_tipo_material = data.id_tipo_material;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })

    }

    cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_tipo_material = this.id_tipo_material;
      this.service.actualizarTipo_material(this.id_tipo_material, this.form.value).subscribe((data)=>{
        this.router.navigate(['/tipo-material']);
        window.location.reload();
      })
      this.dialogRef.close();
     }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }
  }

}
