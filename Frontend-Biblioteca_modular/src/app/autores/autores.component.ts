import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActualizarAutorComponent } from '../actualizar-autor/actualizar-autor.component';
import { AuthService } from '../auth.service';
import { AutorService } from '../autor.service';
import { AutorInterface } from '../interfaces/AutorInterface';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_autor','nombre', 'Acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: AutorService,
    private dialog: MatDialog, private serviceauth: AuthService, private router: Router) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getAutores().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<AutorInterface>(data.result as AutorInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarAutor(autor: AutorInterface){
    console.log(autor);

    this.dialog.open(ActualizarAutorComponent,{
      data: {
        nombre: autor.nombre,
        id_autor: autor.id_autor
      }
    })
  }

}
