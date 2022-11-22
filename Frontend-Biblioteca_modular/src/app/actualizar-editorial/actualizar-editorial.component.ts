import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EditorialService } from '../editorial.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-actualizar-editorial',
  templateUrl: './actualizar-editorial.component.html',
  styleUrls: ['./actualizar-editorial.component.css']
})
export class ActualizarEditorialComponent implements OnInit {

  form: FormGroup;
  id_editorial: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarEditorialComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_editorial: number},
    private service: EditorialService, 
    private router: Router, private serviceauth: AuthService) {

      this.id_editorial = data.id_editorial;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })

     }

     cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_editorial = this.id_editorial;
      this.service.actualizarEditorial(this.id_editorial, this.form.value).subscribe((data)=>{
        this.router.navigate(['/editoriales']);
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