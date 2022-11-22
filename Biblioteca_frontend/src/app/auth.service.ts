import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { JwtInterface } from './interfaces/JwtInterface';
import { UserInterface } from './interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //baseUrl: string = 'https://localhost:4443/Auth/';
  baseUrl: string = 'https://autorizacionmod.azurewebsites.net/Auth/';
  
  constructor(private http: HttpClient, private router: Router) { }

  register(user: UserInterface){
    return this.http.post(this.baseUrl+'register',user);
  }

  login(user: UserInterface){
    return this.http.post(this.baseUrl+'login',user);
  }

  logout(){
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('token_value');
    this.router.navigate(['/login']);
    //window.location.reload();
  }

  get getUsername(){
    return sessionStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!sessionStorage.getItem('token_value');
  }

  get decoded(){
    var a = sessionStorage.getItem('token_value');
    if(a != null){
      return jwt_decode(a);
    }
    return null;
  }

  get isadmin(){
    var a = this.decoded as JwtInterface;
    if(!this.isAutenticado){
      return false
    }else{
    if(a.role == "1"){
      return true;
    }
    return false;
    }
  }

  get iscliente(){
    var a = this.decoded as JwtInterface;
    if(!this.isAutenticado){
      return false
    }else{
      if(a.role == "2"){
        return true;
      }
      return false;
    }
  }


  get isbibliotecario(){
    var a = this.decoded as JwtInterface;
    if(!this.isAutenticado){
      return false
    }else{
      if(a.role == "4"){
        return true;
      }
      return false;
    }
  }
}
