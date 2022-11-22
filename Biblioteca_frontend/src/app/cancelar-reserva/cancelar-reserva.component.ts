import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-cancelar-reserva',
  templateUrl: './cancelar-reserva.component.html',
  styleUrls: ['./cancelar-reserva.component.css']
})
export class CancelarReservaComponent implements OnInit {

  id_reserva: any;
  
  reserva = {
    id_reserva: '',
    material: {
      id_material: '',
      titulo: '',
      nombresdeautores: ''
    },
    usuario: {
      id_usuario: '',
      cedula: '',
      nombre: '',
      apellido: ''
    }
    /*id_reserva: '',
    id_usuario: '',
    id_material: '',
    fecha_reserva: '',
    esta_reservado: ''*/
  }

  constructor(private service:ReservasService,
    private route: ActivatedRoute,
    private router: Router, private serviceauth: AuthService) { }

  ngOnInit(): void {

    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }/*else if (a.role == "2"){
      this.router.navigate(['/material']);
    }*/

    this.id_reserva = this.route.snapshot.paramMap.get('id_reserva');
    this.service.getReservasid(this.id_reserva).subscribe((data: any)=> {
      console.log(data);
      this.reserva.material.titulo = data.result.material.titulo;
      this.reserva.material.nombresdeautores = data.result.material.nombresdeautores;
      this.reserva.usuario.cedula = data.result.usuario.cedula;
      this.reserva.usuario.nombre = data.result.usuario.nombre;
      this.reserva.usuario.apellido = data.result.usuario.apellido;
    })


  }

  cancel(){
    this.router.navigate(['/materiales_reservados']);
  }

  confirmar(){
    this.service.getcancelar(this.id_reserva).subscribe((data: any)=>{
      this.router.navigate(['/materiales_reservados']);
    },
    (errorData) =>  alert(errorData.error.displayMessage))
  }

}
