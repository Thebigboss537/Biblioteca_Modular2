import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { TipoMaterialService } from '../tipo-material.service';

@Component({
  selector: 'app-delete-tipo-material',
  templateUrl: './delete-tipo-material.component.html',
  styleUrls: ['./delete-tipo-material.component.css']
})
export class DeleteTipoMaterialComponent implements OnInit {

  id_tipo_material: any;

  tipo_material = {
    nombre: ''
  }
  
  constructor(private service:TipoMaterialService,
    private route: ActivatedRoute,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.id_tipo_material = this.route.snapshot.paramMap.get('id_tipo_material');
    this.service.getTipo_material(this.id_tipo_material).subscribe((data: any)=> {
      console.log(data);
      this.tipo_material.nombre = data.result.nombre;
    })

  }

  cancel(){
    this.router.navigate(['/Tipo_material']);
 }

  confirmar(){
    this.service.deleteTipo_material(this.id_tipo_material).subscribe((data: any)=>{
      this.router.navigate(['/Tipo_material']);
    })
  }

}
