import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EditorialInterface } from './interfaces/Editorialnterface';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/Editoriales/';

  constructor(private http: HttpClient) { }

  getEditoriales(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })
      
    return this.http.get(this.baserUrl, { headers: headers});
  }

  getEditorial(id_editorial: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_editorial, { headers: headers})
  }

  crearEditorial(editorial: EditorialInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl, editorial, { headers: headers});
  }

  actualizarEditorial(id_editorial: number, editorial: EditorialInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_editorial, editorial, { headers: headers});
  }

  deleteEditorial(id_editorial: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.delete(this.baserUrl+id_editorial, { headers: headers});
  }

}
