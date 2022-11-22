import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaInterface } from '../interfaces/CategoriaInterface';
import { CategoriaService } from '../categoria.service';
import { ActualizarCategoriaComponent } from '../actualizar-categoria/actualizar-categoria.component';
import { MatPaginator } from '@angular/material/paginator';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_categoria','nombre', 'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: CategoriaService,
    private dialog: MatDialog, private serviceauth: AuthService, private router: Router) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getCategorias().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<CategoriaInterface>(data.result as CategoriaInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }
  
  actualizarCategoria(categoria: CategoriaInterface){
    console.log(categoria);

    this.dialog.open(ActualizarCategoriaComponent,{
     data: {
       nombre: categoria.nombre,
        id_categoria: categoria.id_categoria
     }
    })
  }

}

 
