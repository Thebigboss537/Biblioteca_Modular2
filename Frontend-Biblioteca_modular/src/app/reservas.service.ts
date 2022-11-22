import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  baserUrl: string = 'https://bm-modulo-reservas.azurewebsites.net/api/reservas/';
  //baserUrl: string = 'https://localhost:7076/api/reservas/';

  constructor(private http: HttpClient) { }

  getDisponibles(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"disponibles", { headers: headers});
  }

  getReservados(){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"reservados", { headers: headers});
  }

  getReservadosid(){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"reservadosid", { headers: headers});
  }

  getReservasid(id: number){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id, { headers: headers});
  }

  getcancelar(id: number){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
    return this.http.get(this.baserUrl+"cancelar/"+id, { headers: headers});
  }

  reservarMaterial(reserva: any){
    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    //return this.http.post('https://localhost:7076/api/crearreserva/', reserva , { headers: headers});
    return this.http.post(this.baserUrl+'crearreserva', reserva , { headers: headers});
  }

}
