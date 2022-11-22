import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditorialInterface } from '../interfaces/Editorialnterface';
import { EditorialService } from '../editorial.service';
import { ActualizarEditorialComponent } from '../actualizar-editorial/actualizar-editorial.component';
import { MatPaginator } from '@angular/material/paginator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtInterface } from '../interfaces/JwtInterface';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit {

  dataSource: any=[];
  displayedColumns: string[] = ['id_editorial','nombre', 'Acciones']
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private service: EditorialService,
              private dialog: MatDialog, private serviceauth: AuthService, private router: Router) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.service.getEditoriales().subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<EditorialInterface>(data.result as EditorialInterface[]);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });

  }

  aplicarFiltro(filtro: any){
    this.dataSource.filter = filtro.target.value.trim().toLowerCase();
  }

  actualizarEditorial(editorial: EditorialInterface){
    console.log(editorial);

    this.dialog.open(ActualizarEditorialComponent,{
      data: {
        nombre: editorial.nombre,
        id_editorial: editorial.id_editorial
      }
    })
  }

}
