import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioInterface } from './interfaces/UsuarioInterface';
import { LoginInterface } from './interfaces/LoginInterface';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baserUrl: string = "https://bm-modulo-usuario.azurewebsites.net/api/Usuarios/";

  constructor(private http: HttpClient) { }

  getUsuarios(){

      let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl, { headers: headers});
  }

  getUsuario(id_usuario: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_usuario, { headers: headers});
  }

  crearUsuario(usuario: UsuarioInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.post(this.baserUrl+"crearusuario/", usuario, { headers: headers});
  }

  actualizarUsuario(id_usuario: number, usuario: UsuarioInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_usuario, usuario, { headers: headers} );
  }

  deleteUsuario(id_usuario: number){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.delete(this.baserUrl+id_usuario, { headers: headers});
  }

  getProgramas_academicos(){
    return this.http.get(this.baserUrl+"crearusuario/");
  }


  
  getRoles(){
    return this.http.get(this.baserUrl+"crearusuario/");
  }

}
