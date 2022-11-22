import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AutorService } from '../autor.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-delete-autor',
  templateUrl: './delete-autor.component.html',
  styleUrls: ['./delete-autor.component.css']
})
export class DeleteAutorComponent implements OnInit {

  id_autor: any;

  autor = {
    nombre: ''
  }

  constructor(private service:AutorService,
    private route: ActivatedRoute,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.id_autor = this.route.snapshot.paramMap.get('id_autor');
    this.service.getAutor(this.id_autor).subscribe((data: any)=> {
      console.log(data);
      this.autor.nombre = data.result.nombre;
    })
  }

  cancel(){
    this.router.navigate(['/autor']);
 }

  confirmar(){
    this.service.deleteAutor(this.id_autor).subscribe((data: any)=>{
      this.router.navigate(['/autor']);
    })
  }

}
