import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-actualizar-sede',
  templateUrl: './actualizar-sede.component.html',
  styleUrls: ['./actualizar-sede.component.css']
})
export class ActualizarSedeComponent implements OnInit {

  form: FormGroup;
  id_sede: number;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarSedeComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id_sede: number},
    private service: SedeService, 
    private router: Router, private serviceauth: AuthService) {

      this.id_sede = data.id_sede;
      this.form = fb.group({
        nombre: [data.nombre, Validators.required],
      })

     }

     cerrar(){
      this.dialogRef.close();
     }
     guardar(){
      this.form.value.id_sede = this.id_sede;
      this.service.actualizarSede(this.id_sede, this.form.value).subscribe((data)=>{
        this.router.navigate(['/sede']);
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
