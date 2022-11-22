import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ProgramaAcademicoService } from '../programa-academico.service';

@Component({
  selector: 'app-delete-programa-academico',
  templateUrl: './delete-programa-academico.component.html',
  styleUrls: ['./delete-programa-academico.component.css']
})
export class DeleteProgramaAcademicoComponent implements OnInit {

id_programa_academico: any;

programa_academico = {
  nombre:''
}


  constructor(private service: ProgramaAcademicoService,
              private route: ActivatedRoute,
              private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2" || a.role == "4"){
      this.router.navigate(['/material']);
    }

    this.id_programa_academico = this.route.snapshot.paramMap.get('id_programa_academico');
    this.service.getPrograma_academico(this.id_programa_academico).subscribe((data: any) => {
      console.log(data);
      this.programa_academico.nombre = data.result.nombre;
    })
  }

  cancel(){
    this.router.navigate(['/programa_academico']);
  }

confirmar(){
  this.service.deletePrograma_academico(this.id_programa_academico).subscribe((data: any)=>{
    this.router.navigate(['/programa_academico']);

})

}

}
