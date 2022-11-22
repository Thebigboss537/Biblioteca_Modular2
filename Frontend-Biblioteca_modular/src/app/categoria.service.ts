import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriaInterface } from './interfaces/CategoriaInterface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/Categorias/';

  constructor(private http: HttpClient) { }


  getCategorias(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      
    return this.http.get(this.baserUrl, { headers: headers});
  }

  getCategoria(id_categoria: number){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_categoria, { headers: headers})
  }

  crearCategoria(categoria: CategoriaInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl, categoria, { headers: headers});
  }

  actualizarCategoria(id_categoria: number, categoria: CategoriaInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_categoria, categoria, { headers: headers} );
  }

  deleteCategoria(id_categoria: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.delete(this.baserUrl+id_categoria, { headers: headers});
  }

}