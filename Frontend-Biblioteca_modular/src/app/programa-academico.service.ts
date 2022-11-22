import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Programa_academicoInterface } from './interfaces/Programa_academicoInterface';

@Injectable({
  providedIn: 'root'
})
export class ProgramaAcademicoService {

  baserUrl: string = 'https://bm-modulo-usuario.azurewebsites.net/api/Programas_academicos/';

  constructor(private http: HttpClient) { }


  getProgramas_academicos(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      
    return this.http.get(this.baserUrl, { headers: headers});
  }

  getPrograma_academico(id_programa_academico: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_programa_academico, { headers: headers})
  }

  crearPrograma_academico(programa_academico: Programa_academicoInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl, programa_academico, { headers: headers});
  }

  actualizarPrograma_academico(id_programa_academico: number, programa_academico: Programa_academicoInterface){
    
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_programa_academico, programa_academico , { headers: headers});
  }

  deletePrograma_academico(id_programa_academico: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      
    return this.http.delete(this.baserUrl+id_programa_academico, { headers: headers});
  }

}
