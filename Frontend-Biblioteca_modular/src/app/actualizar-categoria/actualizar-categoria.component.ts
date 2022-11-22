import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CategoriaService } from '../categoria.service';
import { JwtInterface } from '../interfaces/JwtInterface';


@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {

  form: FormGroup;
  id_categoria: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarCategoriaComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_categoria: number},
    private service: CategoriaService, 
    private router: Router, private serviceauth: AuthService) {
      this.id_categoria = data.id_categoria;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })
     }

     cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_categoria = this.id_categoria;
      this.service.actualizarCategoria(this.id_categoria, this.form.value).subscribe((data)=>{
        this.router.navigate(['/categoria']);
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
