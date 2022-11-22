import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutorInterface } from './interfaces/AutorInterface';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/Autores/';

  constructor(private http: HttpClient) { }


  getAutores(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      
    return this.http.get(this.baserUrl, { headers: headers});
  }

  getAutor(id_autor: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_autor, { headers: headers})
  }

  crearAutor(autor: AutorInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl, autor, { headers: headers});
  }

  actualizarAutor(id_autor: number, autor: AutorInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_autor, autor , { headers: headers});
  }

  deleteAutor(id_autor: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.delete(this.baserUrl+id_autor, { headers: headers});
  }

}