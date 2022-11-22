import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserInterface } from '../interfaces/UserInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private fb :FormBuilder, private service: AuthService, private router: Router) { 
  this.registerForm = this.fb.group({
    nombre_usuario: ['',Validators.required],
    password: ['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(30)])]
  })
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe((data: any) =>{
      sessionStorage.setItem('userName',data.result.userName);
      sessionStorage.setItem('token_value', data.result.token);
      alert(data.displayMessage)
      var a = this.service.decoded as UserInterface;
      /*if(a.nombre_usuario == "1"){
        this.router.navigate(['/login']);
      }else{
        this.router.navigate(['/funcionarios']);
      }*/
      
    }, (errodata)=> alert(errodata.error.displayMessage))
  }

  ngOnInit(): void {
    if(this.service.isadmin){
      this.router.navigate(['/funcionarios']);
    }else if(this.service.iscliente){
      this.router.navigate(['/induccion']);
    }
  }


}
