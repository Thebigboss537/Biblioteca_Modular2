import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MaterialService } from '../material.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialInterface } from '../interfaces/MaterialInterface';
import { MatPaginator } from '@angular/material/paginator';
import { PrestamosService } from '../prestamos.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['titulo','id_autor','id_categoria', 'id_tipo_material', 'isbn','Acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: PrestamosService,
    private dialog: MatDialog, public serviceauth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getDisponibles().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<MaterialInterface>(data.result as MaterialInterface[]);
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

}
