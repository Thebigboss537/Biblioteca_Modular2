import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  baserUrl: string = 'https://bm-modulo-prestamos.azurewebsites.net/api/prestamos/';
  
  baserUrl2: string = 'https://bm-modulo-prestamos.azurewebsites.net/api/Devoluciones/';

  constructor(private http: HttpClient) { }

  getDisponibles(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"disponibles", { headers: headers});
  }

  getprestados(){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"prestados", { headers: headers});
  }

  getprestadosid(){
    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"prestadosid", { headers: headers});
  }


  prestarMaterial(prestamo: any){
    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(this.baserUrl+'crearprestamo', prestamo , { headers: headers});
  }

  devolverMaterial(devolucion: any){
    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(this.baserUrl2, devolucion , { headers: headers});
  }

}
