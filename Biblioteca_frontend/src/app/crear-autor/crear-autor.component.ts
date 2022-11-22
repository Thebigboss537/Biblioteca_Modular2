import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AutorService } from '../autor.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html',
  styleUrls: ['./crear-autor.component.css']
})
export class CrearAutorComponent  {

  constructor(private service: AutorService, private router: Router, private serviceauth: AuthService) { }

  autorForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.autorForm.value);

    this.service.crearAutor(this.autorForm.value).subscribe((data:any) => {
      alert("Autor creado");
      this.router.navigate(['/autor']);
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
