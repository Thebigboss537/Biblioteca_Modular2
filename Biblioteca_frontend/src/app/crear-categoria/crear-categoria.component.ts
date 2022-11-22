import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CategoriaService } from '../categoria.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

  constructor(private service: CategoriaService, private router: Router, private serviceauth: AuthService) { }

  categoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.categoriaForm.value);

    this.service.crearCategoria(this.categoriaForm.value).subscribe((data:any) => {
      alert("Categoria creada");
      this.router.navigate(['/categoria']);
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
