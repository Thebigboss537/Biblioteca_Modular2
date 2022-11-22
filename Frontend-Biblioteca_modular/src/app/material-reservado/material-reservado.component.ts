import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtInterface } from '../interfaces/JwtInterface';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialInterface } from '../interfaces/MaterialInterface';
import { MatPaginator } from '@angular/material/paginator';
import { ReservasService } from '../reservas.service';
import { ReservadosInterface } from '../interfaces/ReservadosInterface';

@Component({
  selector: 'app-material-reservado',
  templateUrl: './material-reservado.component.html',
  styleUrls: ['./material-reservado.component.css']
})
export class MaterialReservadoComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['titulo','id_autor','cedula', 'id_usuario','Acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: ReservasService,
    private dialog: MatDialog, public serviceauth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }

    if(this.serviceauth.isadmin || this.serviceauth.isbibliotecario){
      this.service.getReservados().subscribe((data:any) =>{
        this.dataSource = new MatTableDataSource<ReservadosInterface>(data.result as ReservadosInterface[]);
        this.dataSource.paginator = this.paginator;
        console.log(data);
      });
    }else if(this.serviceauth.iscliente){
      this.service.getReservadosid().subscribe((data:any) =>{
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
