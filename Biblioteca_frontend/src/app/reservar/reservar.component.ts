import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

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
  }

  reserva = {
    id_material: 0
  }

  


  constructor(private service:MaterialService,
    private servreserva: ReservasService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
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
    }) 
  }

  cancel(){
    this.router.navigate(['/reservas']);
  }

  
  reservarMaterial(){
    this.reserva.id_material = Number(this.material.id_material);
    console.log(this.reserva);
    this.servreserva.reservarMaterial(this.reserva).subscribe((data:any) => {
      alert("Material reservado");
      this.router.navigate(['/reservas']);
    })
  }

}
