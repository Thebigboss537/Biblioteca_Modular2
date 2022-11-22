import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ReservasService } from '../reservas.service';
import { PrestamosService } from '../prestamos.service';

@Component({
  selector: 'app-devolver-material',
  templateUrl: './devolver-material.component.html',
  styleUrls: ['./devolver-material.component.css']
})
export class DevolverMaterialComponent implements OnInit {

  id_prestamo: any;

  devolucion = {
    id_prestamo: '',
    observacion: ''
  }

  devolucionForm = new FormGroup({
    observacion: new FormControl('', Validators.required)
  })

  constructor(private service: PrestamosService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceauth: AuthService) {}


  ngOnInit(): void {
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }

    this.id_prestamo = this.route.snapshot.paramMap.get('id_prestamo');
  }

  cancel(){
    this.router.navigate(['/materiales_prestados']);
  }

  onSubmit(){
    
    this.devolucion.observacion = this.devolucionForm.value.observacion;
    this.devolucion.id_prestamo = this.id_prestamo;
    console.log(this.devolucion);
    this.service.devolverMaterial(this.devolucion).subscribe((data:any) => {
      alert("devolucion exitosa");
      this.router.navigate(['/materiales_prestados']);
    })
  }

}
