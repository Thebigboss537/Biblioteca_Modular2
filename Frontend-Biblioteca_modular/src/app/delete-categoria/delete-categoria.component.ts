import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CategoriaService } from '../categoria.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  id_categoria: any;

  categoria = {
    nombre: ''
  }


  constructor(private service:CategoriaService,
    private route: ActivatedRoute,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }
    
    this.id_categoria = this.route.snapshot.paramMap.get('id_categoria');
    this.service.getCategoria(this.id_categoria).subscribe((data: any)=> {
      console.log(data);
      this.categoria.nombre = data.result.nombre;
    })

    
  }

  cancel(){
    this.router.navigate(['/categoria']);
 }

  confirmar(){
    this.service.deleteCategoria(this.id_categoria).subscribe((data: any)=>{
      this.router.navigate(['/categoria']);
    })
  }

}
