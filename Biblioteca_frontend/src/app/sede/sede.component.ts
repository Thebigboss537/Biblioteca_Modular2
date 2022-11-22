import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActualizarSedeComponent } from '../actualizar-sede/actualizar-sede.component';
import { SedeInterface } from '../interfaces/SedeInterface';
import { SedeService } from '../sede.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_sede','nombre', 'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: SedeService,
    private dialog: MatDialog,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getSedes().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<SedeInterface>(data.result as SedeInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    },
    (errorData) => (alert ("Usuario no autorizado"), this.router.navigate(['']))
    );
  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarSede(sede: SedeInterface){
    console.log(sede);

    this.dialog.open(ActualizarSedeComponent,{
      data: {
        nombre: sede.nombre,
        id_sede: sede.id_sede
      }
    })
  }

}
