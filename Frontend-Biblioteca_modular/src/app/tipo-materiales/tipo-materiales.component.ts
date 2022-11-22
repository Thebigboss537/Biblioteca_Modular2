import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TipoMaterialService } from '../tipo-material.service';
import { Tipo_materialInterface } from '../interfaces/Tipo_materialInterface';
import { ActualizarTipoMaterialComponent } from '../actualizar-tipo-material/actualizar-tipo-material.component';
import { MatPaginator } from '@angular/material/paginator';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tipo-materiales',
  templateUrl: './tipo-materiales.component.html',
  styleUrls: ['./tipo-materiales.component.css']
})
export class TipoMaterialesComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_tipo_material','nombre', 'Acciones']

  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: TipoMaterialService,
    private dialog: MatDialog, private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getTipo_materiales().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<Tipo_materialInterface>(data.result as Tipo_materialInterface[]);
      console.log(data);
    });

  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarTipo_material(tipo_material: Tipo_materialInterface){
    console.log(tipo_material);

    this.dialog.open(ActualizarTipoMaterialComponent,{
      data: {
        nombre: tipo_material.nombre,
        id_tipo_material: tipo_material.id_tipo_material
      }
    })
  }

}
