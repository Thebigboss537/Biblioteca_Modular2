import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipo_materialInterface } from './interfaces/Tipo_materialInterface';

@Injectable({
  providedIn: 'root'
})
export class TipoMaterialService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/Tipo_materiales/';

  constructor(private http: HttpClient) { }

  getTipo_materiales(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl, { headers: headers});
  }

  getTipo_material(id_tipo_material: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_tipo_material, { headers: headers})
  }

  crearTipo_material(tipo_material: Tipo_materialInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl, tipo_material, { headers: headers});
  }

  actualizarTipo_material(id_tipo_material: number, tipo_material: Tipo_materialInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_tipo_material, tipo_material, { headers: headers} );
  }

  deleteTipo_material(id_tipo_material: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.delete(this.baserUrl+id_tipo_material, { headers: headers});
  }

  
}
