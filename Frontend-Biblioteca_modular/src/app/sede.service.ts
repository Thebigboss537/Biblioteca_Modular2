import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SedeInterface } from './interfaces/SedeInterface';




@Injectable({
  providedIn: 'root'
})
export class SedeService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/Sedes/';

  constructor(private http: HttpClient) { }


  getSedes(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl, { headers: headers});
  }

  getSede(id_sede: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_sede, { headers: headers})
  }

  crearSede(sede: SedeInterface){

    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.post(this.baserUrl, sede, { headers: headers});
  }

  actualizarSede(id_sede: number, sede: SedeInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_sede, sede, { headers: headers} );
  }

  deleteSede(id_sede: number){

    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.delete(this.baserUrl+id_sede, { headers: headers});
  }

}
