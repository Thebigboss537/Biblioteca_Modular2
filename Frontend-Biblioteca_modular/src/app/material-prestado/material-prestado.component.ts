import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ReservasService } from '../reservas.service';
import { ReservadosInterface } from '../interfaces/ReservadosInterface';
import { PrestamosService } from '../prestamos.service';
@Component({
  selector: 'app-material-prestado',
  templateUrl: './material-prestado.component.html',
  styleUrls: ['./material-prestado.component.css']
})
export class MaterialPrestadoComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['titulo','id_autor','cedula', 'id_usuario','Acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: PrestamosService,
    private dialog: MatDialog, public serviceauth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }

    if(this.serviceauth.isadmin || this.serviceauth.isbibliotecario){
      this.service.getprestados().subscribe((data:any) =>{
        this.dataSource = new MatTableDataSource<ReservadosInterface>(data.result as ReservadosInterface[]);
        this.dataSource.paginator = this.paginator;
        console.log(data);
      });
    }else if(this.serviceauth.iscliente){
      this.service.getprestadosid().subscribe((data:any) =>{
        this.dataSource = new MatTableDataSource<ReservadosInterface>(data.result as ReservadosInterface[]);
        this.dataSource.paginator = this.paginator;
        console.log(data);
      });
    }

    

  }

  aplicarFiltro(filtro: any){

    this.dataSource.filterPredicate = (data: ReservadosInterface, filter: string) => {
      return data.material.titulo.toLocaleLowerCase().includes(filter) ||
      data.usuario.cedula.toString().toLocaleLowerCase().includes(filter) ||
      data.usuario.nombre.toLocaleLowerCase().includes(filter) ||
      data.usuario.apellido.toLocaleLowerCase().includes(filter) 
    }
    
    const filterValue = filtro.target.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

  }

}
