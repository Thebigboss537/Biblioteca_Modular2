import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MaterialInterface } from './interfaces/MaterialInterface';
import { UsuarioInterface } from './interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  baserUrl: string = 'https://bm-modulo-catalogo.azurewebsites.net/api/materiales/';

  constructor(private http: HttpClient) { }


  getMateriales(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl, { headers: headers});
  }

  getMaterial(id_material: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+id_material, { headers: headers})
  }

  crearMaterialarchivo(material: any){

    let auth_token = sessionStorage.getItem('token_value');

    const headers2 = new HttpHeaders({
      'Authorization': `Bearer ${auth_token}`
    })

    //return this.http.post("https://localhost:7045/api/materiales/crearmaterialarchivo/", material,{ headers: headers2});
    
    return this.http.post(this.baserUrl+"crearmaterialarchivo/", material, { headers: headers2});
  }


  crearMaterial(material: any){

    let auth_token = sessionStorage.getItem('token_value');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    
    //return this.http.post("https://localhost:7076/api/materiales/crearmaterial/", material, { headers: headers});

    return this.http.post(this.baserUrl+"crearmaterial/", material, { headers: headers});
  }

  

  /*prestarMaterial(prestamo: any){
    let auth_token = sessionStorage.getItem('token_value');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post('https://modprueba.azurewebsites.net/api/crearprestamo/', prestamo , { headers: headers});
  }*/

  actualizarMaterial(id_material: number, material: MaterialInterface){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.put(this.baserUrl+id_material, material, { headers: headers} );
  }

  deleteMaterial(id_material: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      
    //return this.http.delete("https://localhost:7045/api/materiales/"+id_material, { headers: headers});
    return this.http.delete(this.baserUrl+id_material, { headers: headers});
  }

  deletepdfMaterial(id_material: number){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      
    //return this.http.delete("https://localhost:7045/api/materiales/"+id_material, { headers: headers});
    return this.http.delete(this.baserUrl+"eliminarpdf/"+id_material, { headers: headers});
  }


  getAutores(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

    return this.http.get(this.baserUrl+"crearmaterial/", { headers: headers});
  }

  getTipos_materiales(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      return this.http.get(this.baserUrl+"crearmaterial/", { headers: headers});
  }

  getEditoriales(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      return this.http.get(this.baserUrl+"crearmaterial/", { headers: headers});
  }

  getSedes(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      return this.http.get(this.baserUrl+"crearmaterial/", { headers: headers});
  }

  getCategorias(){

    let auth_token = sessionStorage.getItem('token_value');
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      })

      return this.http.get(this.baserUrl+"crearmaterial/", { headers: headers});
  }
}