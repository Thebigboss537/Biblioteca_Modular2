import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EditorialService } from '../editorial.service';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-delete-editorial',
  templateUrl: './delete-editorial.component.html',
  styleUrls: ['./delete-editorial.component.css']
})
export class DeleteEditorialComponent implements OnInit {

  id_editorial: any;

  editorial = {
    nombre: ''
  }

  constructor(private service:EditorialService,
              private route: ActivatedRoute,
              private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }
    
  
    this.id_editorial = this.route.snapshot.paramMap.get('id_editorial');
    this.service.getEditorial(this.id_editorial).subscribe((data: any)=> {
      console.log(data);
      this.editorial.nombre = data.result.nombre;
    })
  }

  cancel(){
    this.router.navigate(['/editorial']);
  }

  confirmar(){
    this.service.deleteEditorial(this.id_editorial).subscribe((data: any)=>{
      this.router.navigate(['/editorial']);
    })
  }

}