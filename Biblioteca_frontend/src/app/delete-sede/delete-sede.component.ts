import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { SedeService } from '../sede.service';

@Component({
  selector: 'app-delete-sede',
  templateUrl: './delete-sede.component.html',
  styleUrls: ['./delete-sede.component.css']
})
export class DeleteSedeComponent implements OnInit {

  id_sede: any;

  sede = {
    nombre: ''
  }

  constructor(private service:SedeService,
              private route: ActivatedRoute,
              private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }
  
    this.id_sede = this.route.snapshot.paramMap.get('id_sede');
    this.service.getSede(this.id_sede).subscribe((data: any)=> {
      console.log(data);
      this.sede.nombre = data.result.nombre;
    })
  }

  cancel(){
    this.router.navigate(['/sede']);
 }

  confirmar(){
    this.service.deleteSede(this.id_sede).subscribe((data: any)=>{
      this.router.navigate(['/sede']);
    })
  }

}
