import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { TipoMaterialService } from '../tipo-material.service';

@Component({
  selector: 'app-crear-tipo-material',
  templateUrl: './crear-tipo-material.component.html',
  styleUrls: ['./crear-tipo-material.component.css']
})
export class CrearTipoMaterialComponent {

  constructor(private service: TipoMaterialService, private router: Router, private serviceauth: AuthService) { }

  tipo_materialForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.tipo_materialForm.value);

    this.service.crearTipo_material(this.tipo_materialForm.value).subscribe((data:any) => {
      alert("Tipo de material creado");
      this.router.navigate(['/Tipo_material']);
    })
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
