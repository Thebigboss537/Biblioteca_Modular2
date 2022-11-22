import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { AutorInterface } from '../interfaces/AutorInterface';
import { Tipo_materialInterface } from '../interfaces/Tipo_materialInterface';
import { EditorialInterface } from '../interfaces/Editorialnterface';
import { SedeInterface } from '../interfaces/SedeInterface';
import { CategoriaInterface } from '../interfaces/CategoriaInterface';
import { MaterialInterface } from '../interfaces/MaterialInterface';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';
import { finalize, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ViewChild } from "@angular/core";


@Component({
  selector: 'app-crear-material',
  templateUrl: './crear-material.component.html',
  styleUrls: ['./crear-material.component.css']
})
export class CrearMaterialComponent implements OnInit{

  

  constructor(public service: MaterialService, private router: Router, private fb: FormBuilder, private serviceauth: AuthService) {}

  @ViewChild("fileUpload", {static: false})
  InputVar: ElementRef;
  formData = new FormData();
  fileName = '';
  upload: boolean = false;
  autor: any=[];
  tipomaterial: any=[];
  editorial: any=[];
  sede: any=[];
  categoria: any=[];
  itemsautor! :FormArray;
  itemscategoria! :FormArray;
  

  materialForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    autores: new FormArray([new FormGroup ({
      id_autor : new FormControl ('', Validators.required) 
    })]),
    id_tipo_material: new FormControl('', Validators.required),  
    id_editorial: new FormControl(''),
    descripcion: new FormControl('', Validators.required),
    año: new FormControl('', Validators.required),
    formato: new FormControl('', Validators.required),
    idioma: new FormControl('', Validators.required),
    iSBN: new FormControl('',Validators.required),
    id_sede: new FormControl(''),
    observacion: new FormControl('', Validators.required),
    categorias: new FormArray([new FormGroup({
      id_categoria: new FormControl('', Validators.required)
    })]),
    //archivo: new FormControl('')
  })


  addautor() {
    this.itemsautor = this.materialForm.get("autores") as FormArray;
    this.itemsautor.push(this.idautor());
  }

  get autores(){
    return this.materialForm.get("autores") as FormArray;
  }

  idautor() : FormGroup {
    return new FormGroup ({
      id_autor : new FormControl ('', Validators.required) 
    });
  }



  addcategoria() {
    this.itemscategoria = this.materialForm.get("categorias") as FormArray;
    this.itemscategoria.push(this.idcategoria());
  }

  get categorias(){
    return this.materialForm.get("categorias") as FormArray;
  }

  idcategoria() : FormGroup {
    return new FormGroup({
      id_categoria: new FormControl('', Validators.required)
    })
  }



  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    console.log(event);
    if (file) {
      this.fileName = file.name;
      this.formData.append("archivo", file);
    }
  }

  cancelUpload() {
    this.InputVar.nativeElement.value = "";
    this.fileName = '';
    this.formData.delete("archivo");
  }

  onSubmit(){

    this.formData.append('titulo', this.materialForm.value.titulo);

    
    this.service.crearMaterial(this.materialForm.value).subscribe((data:any) => {
      console.log(this.formData.get('archivo'));
      if(this.formData.get('archivo')!=null){
        this.formData.append("id_material", data.result.id_material);
        this.service.crearMaterialarchivo(this.formData).subscribe((data:any) => {
          alert("Material creado");
          this.router.navigate(['/material']);
        });
      }else{
        alert("Material creado");
        this.router.navigate(['/material']);
      }
    })

    
  }

  

  

  ngOnInit(): void {

    
    var a = this.serviceauth.decoded as JwtInterface;
    if(a == null){
      this.router.navigate(['/login']);
    }else if (a.role == "2"){
      this.router.navigate(['/material']);
    }
    

    this.service.getAutores().subscribe((data:any) =>{
      this.autor=data.result.autor as AutorInterface[];
      console.log(data);
      
    });

    this.service.getTipos_materiales().subscribe((data:any) =>{
      this.tipomaterial=data.result.tipo_material as Tipo_materialInterface[];
      console.log(data);
      
    });

    this.service.getEditoriales().subscribe((data:any) =>{
      this.editorial=data.result.editorial as EditorialInterface[];
      console.log(data);
      
    });

    this.service.getSedes().subscribe((data:any) =>{
      this.sede=data.result.sede as SedeInterface[];
      console.log(data);
      
    });

    this.service.getCategorias().subscribe((data:any) =>{
      this.categoria=data.result.categoria as CategoriaInterface[];
      console.log(data);
      
    });
  
  }

}
