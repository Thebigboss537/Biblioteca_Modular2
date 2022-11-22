import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PrestarMaterialComponent } from '../prestar-material/prestar-material.component';

@Component({
  selector: 'app-ver-libro',
  templateUrl: './ver-libro.component.html',
  styleUrls: ['./ver-libro.component.css']
})
export class VerLibroComponent implements OnInit {

  id_material: any;

  material = {
    id_material: 0,
    titulo: '',
    id_autor: '',
    id_tipo_material: '',
    editorial: '',
    descripcion: '',
    ano: '',
    formato: '',
    idioma: '',
    isbn: '',
    sede: '',
    observacion: '', 
    id_categoria: '',
    nombresdeautores: '',
    nombresdecategorias: '',
    archivo: ''
  }

  

  


  constructor(private service:MaterialService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public auth: MaterialService,
    private dialog: MatDialog) {}

    


  ngOnInit(): void {

    this.id_material = this.route.snapshot.paramMap.get('id_material');
    this.service.getMaterial(this.id_material).subscribe((data: any)=> {
      console.log(data);
      this.material.id_material = data.result.id_material;
      this.material.titulo = data.result.titulo;
      this.material.id_autor = data.result.id_autor;
      this.material.id_tipo_material = data.result.id_tipo_material;
      this.material.editorial = data.result.editorial.nombre;
      this.material.descripcion = data.result.descripcion;
      this.material.ano = data.result.año;
      this.material.formato = data.result.formato;
      this.material.idioma = data.result.idioma;
      this.material.isbn = data.result.isbn;
      this.material.sede = data.result.sede.nombre;
      this.material.observacion = data.result.observacion;
      this.material.id_categoria = data.result.id_categoria;
      this.material.nombresdeautores = data.result.nombresdeautores;
      this.material.nombresdecategorias = data.result.nombresdecategorias;
      this.material.archivo = data.result.archivo;
    }) 
  }


  cancel(){
    this.router.navigate(['/material']);
  }

  
  pdf(){
    if(this.material.archivo != null){
      return true;
    }
    return false;
  }

  verpdf(){

  }
  

}

