import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtInterface } from '../interfaces/JwtInterface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    nombre_usuario:'',
    password: ''

  }

  constructor(private service: AuthService, private router: Router) { }

  login(){
    this.service.login(this.loginData).subscribe((data:any)=>{
      sessionStorage.setItem('userName', data.result.userName);
      sessionStorage.setItem('token_value', data.result.token);
      var a = this.service.decoded as JwtInterface;
      /*if(a.role == "1"){
        this.router.navigate(['/funcionarios']);
      }else{
        this.router.navigate(['/induccion']);
      }*/
      this.router.navigate(['/material'])
    },
    (errorData) =>  alert(errorData.error.displayMessage)
    )
  }

  ngOnInit(): void {
    /*if(this.service.isadmin){
      this.router.navigate(['/funcionarios']);
    }else if(this.service.iscliente){
      this.router.navigate(['/induccion']);
    }*/
  }


}
