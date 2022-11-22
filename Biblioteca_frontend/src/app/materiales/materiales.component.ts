import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActualizarMaterialComponent } from '../actualizar-material/actualizar-material.component';
import { AuthService } from '../auth.service';
import { AutorInterface } from '../interfaces/AutorInterface';
import { MaterialInterface } from '../interfaces/MaterialInterface';
import { MaterialService } from '../material.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  dataSource: any=[];
  //dataSource2: any=[];
  displayedColumns: string[] = ['titulo','id_autor','id_categoria', 'id_tipo_material', 'isbn','Acciones']
  //displayedColumns2: string[] = ['nombre','id_autor']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: MaterialService,
    private dialog: MatDialog, public serviceauth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }

    this.service.getMateriales().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<MaterialInterface>(data.result as MaterialInterface[]);
      
      /*this.dataSource.autores = new MatTableDataSource<AutorInterface>(data.result[0].autores[0].nombre);
      
      this.dataSource2 = new MatTableDataSource<AutorInterface>(data.result[0].autores as AutorInterface[]);*/
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });



  }

  aplicarFiltro(filtro: any){
    this.dataSource.filterPredicate = (data: MaterialInterface, filter: string) => {
      return data.titulo.toLocaleLowerCase().includes(filter) ||
      data.nombresdeautores.toLocaleLowerCase().includes(filter) ||
      data.nombresdecategorias.toLocaleLowerCase().includes(filter) ||
      data.tipo_material.nombre.toLocaleLowerCase().includes(filter) ||
      data.isbn.toLocaleLowerCase().includes(filter) 
    }
    
    const filterValue = filtro.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  actualizarMaterial(material: MaterialInterface){
    console.log(material);

    this.dialog.open(ActualizarMaterialComponent,{
      data: {
        id_material: material.id_material,
        titulo: material.titulo,
        //id_autor: material.autores.id_autor,
        id_tipo_material: material.id_tipo_material,
        id_editorial: material.id_editorial,
        descripcion: material.descripcion,
        año: material.año,
        formato: material.formato,
        idioma: material.idioma,
        id_sede: material.id_sede,
        isbn: material.isbn,
        observacion: material.observacion,
        archivo: material.archivo
        //id_categoria: material.categorias.id_categoria
      }
    })
  }

}
