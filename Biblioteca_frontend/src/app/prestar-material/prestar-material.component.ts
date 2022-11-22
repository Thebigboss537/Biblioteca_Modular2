import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ReservasService } from '../reservas.service';
import { PrestamosService } from '../prestamos.service';

@Component({
  selector: 'app-prestar-material',
  templateUrl: './prestar-material.component.html',
  styleUrls: ['./prestar-material.component.css']
})
export class PrestarMaterialComponent implements OnInit {

  id_material: any;

  prestamo = {
    id_material: '',
    cedula: ''
  }

  UsuarioForm = new FormGroup({
    cedula: new FormControl('', Validators.required),
    dias: new FormControl('', Validators.required)
  })

  constructor(private service:PrestamosService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private serviceauth: AuthService) {}


  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.id_material = this.route.snapshot.paramMap.get('id_material');
  }

  cancel(){
    this.router.navigate(['/prestamos']);
  }

  onSubmit(){
    
    this.prestamo.cedula = this.UsuarioForm.value.cedula;
    this.prestamo.id_material = this.id_material;
    console.log(this.prestamo);
    this.service.prestarMaterial(this.prestamo).subscribe((data:any) => {
      alert("prestamo hecho");
      this.router.navigate(['/prestamos']);
    },
    (errorData) =>  alert(errorData.error.displayMessage))
  }

}
