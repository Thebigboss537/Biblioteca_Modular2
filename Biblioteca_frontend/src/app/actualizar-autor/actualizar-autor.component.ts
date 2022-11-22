import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AutorService } from '../autor.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-actualizar-autor',
  templateUrl: './actualizar-autor.component.html',
  styleUrls: ['./actualizar-autor.component.css']
})
export class ActualizarAutorComponent implements OnInit {

  form: FormGroup;
  id_autor: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarAutorComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_autor: number},
    private service: AutorService, 
    private router: Router,private serviceauth: AuthService) { 

      this.id_autor = data.id_autor;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })

    }

    cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_autor = this.id_autor;
      this.service.actualizarAutor(this.id_autor, this.form.value).subscribe((data)=>{
        this.router.navigate(['/autor']);
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
