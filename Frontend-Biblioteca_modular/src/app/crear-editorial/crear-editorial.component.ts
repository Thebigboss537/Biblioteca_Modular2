import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EditorialService } from '../editorial.service';
import { JwtInterface } from '../interfaces/JwtInterface';


@Component({
  selector: 'app-crear-editorial',
  templateUrl: './crear-editorial.component.html',
  styleUrls: ['./crear-editorial.component.css']
})
export class CrearEditorialComponent {

  constructor(private service: EditorialService, private router: Router, private serviceauth: AuthService) { }

  editorialForm = new FormGroup({
    nombre: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log(this.editorialForm.value);
    this.service.crearEditorial(this.editorialForm.value).subscribe((data:any) => {
      alert("Editorial creada");
      this.router.navigate(['/editorial']);
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
