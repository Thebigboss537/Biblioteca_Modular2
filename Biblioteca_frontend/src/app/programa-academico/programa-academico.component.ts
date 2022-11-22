import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProgramaAcademicoService } from '../programa-academico.service';
import {Programa_academicoInterface} from '../interfaces/Programa_academicoInterface';
import { ActualizarProgramaAcademicoComponent } from '../actualizar-programa-academico/actualizar-programa-academico.component';
import { MatPaginator } from '@angular/material/paginator';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programa-academico',
  templateUrl: './programa-academico.component.html',
  styleUrls: ['./programa-academico.component.css']
})
export class ProgramaAcademicoComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_programa_academico','nombre', 'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: ProgramaAcademicoService,
    private dialog: MatDialog, private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }

    this.service.getProgramas_academicos().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<Programa_academicoInterface>(data.result as Programa_academicoInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarPrograma_academico(programa_academico: Programa_academicoInterface){
    console.log(programa_academico);

    this.dialog.open(ActualizarProgramaAcademicoComponent,{
      data: {
        nombre: programa_academico.nombre,
        id_programa_academico: programa_academico.id_programa_academico
      }
    })
  }

}
