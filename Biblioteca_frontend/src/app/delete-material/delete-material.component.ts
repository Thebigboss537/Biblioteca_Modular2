import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { MaterialService } from '../material.service';



@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.css']
})
export class DeleteMaterialComponent implements OnInit {

  id_material: any;
  
  material = {
    id_material: '',
    titulo: '',
    id_autor: '',
    id_tipo_material: '',
    id_editorial: '',
    descripcion: '',
    año: '',
    formato: '',
    idioma: '',
    isbn: '',
    id_sede: '',
    observacion: '', 
    id_categoria: '',
    nombresdeautores: '',
    nombresdecategorias: ''
  }

  constructor(private service:MaterialService,
    private route: ActivatedRoute,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.id_material = this.route.snapshot.paramMap.get('id_material');
    this.service.getMaterial(this.id_material).subscribe((data: any)=> {
      console.log(data);
      this.material.titulo = data.result.titulo;
      this.material.id_autor = data.result.id_autor;
      this.material.id_tipo_material = data.result.id_tipo_material;
      this.material.id_editorial = data.result.id_editorial;
      this.material.descripcion = data.result.descripcion;
      this.material.año = data.result.año;
      this.material.formato = data.result.formato;
      this.material.idioma = data.result.idioma;
      this.material.isbn = data.result.isbn;
      this.material.id_sede = data.result.id_sede;
      this.material.observacion = data.result.observacion;
      this.material.id_categoria = data.result.id_categoria;
      this.material.nombresdeautores = data.result.nombresdeautores;
      this.material.nombresdecategorias = data.result.nombresdecategorias;
    })


  }

  cancel(){
    this.router.navigate(['/material']);
 }

  confirmar(){
    this.service.deleteMaterial(this.id_material).subscribe((data: any)=>{
      this.router.navigate(['/material']);
    })
  }

}
