import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { AutorInterface } from '../interfaces/AutorInterface';
import { Tipo_materialInterface } from '../interfaces/Tipo_materialInterface';
import { EditorialInterface } from '../interfaces/Editorialnterface';
import { SedeInterface } from '../interfaces/SedeInterface';
import { CategoriaInterface } from '../interfaces/CategoriaInterface';
import { JwtInterface } from '../interfaces/JwtInterface';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-actualizar-material',
  templateUrl: './actualizar-material.component.html',
  styleUrls: ['./actualizar-material.component.css']
})
export class ActualizarMaterialComponent implements OnInit {

  form: FormGroup;
  id_material: number;

  dataSource: any=[];
  autor: any=[];
  tipomaterial: any=[];
  editorial: any=[];
  sede: any=[];
  categoria: any=[];

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<ActualizarMaterialComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: {id_material: number, titulo: string, id_autor: number,
                                            id_tipo_material: number, id_editorial: number,
                                            descripcion: string, año: string, formato: string,
                                            idioma: string, isbn: string, id_sede: number, 
                                            observacion: string, id_categoria: number, archivo: string },
    private service: MaterialService, 
    private router: Router, private serviceauth: AuthService) { 

      this.id_material = data.id_material;
      this.form = fb.group({
        id_material: [data.id_material, Validators.required],
        titulo: [data.titulo, Validators.required],
        id_autor: [data.id_autor, Validators.required],
        id_tipo_material: [data.id_tipo_material, Validators.required],
        id_editorial: [data.id_editorial, Validators.required],
        descripcion: [data.descripcion, Validators.required],
        año: [data.año, Validators.required],
        formato: [data.formato, Validators.required],
        idioma: [data.idioma, Validators.required],
        isbn: [data.isbn, Validators.required],
        id_sede: [data.id_sede, Validators.required],
        observacion: [data.observacion, Validators.required],
        id_categoria: [data.id_categoria, Validators.required]
      })
  }

  formData = new FormData();
  fileName = '';
  upload: boolean = false;

  cerrar(){
    this.dialogRef.close();
  }

  guardar(){
    this.form.value.id_material = this.id_material;
    this.service.actualizarMaterial(this.id_material, this.form.value).subscribe((data)=>{
      console.log(data);
      if(this.formData.get('archivo')!=null){
        this.formData.append("id_material", this.form.value.id_material);
        this.service.crearMaterialarchivo(this.formData).subscribe((data:any) => {
          this.router.navigate(['/material']);
          window.location.reload();
        });
      }else{
        this.router.navigate(['/material']);
        window.location.reload();
      }
    })
    this.dialogRef.close();
  }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.formData.append("archivo", file);
      this.upload = true;
    }
  }

  cancelUpload() {
    this.fileName = '';
    this.formData.delete("archivo");
    this.upload = false;
  }

  eliminarpdf() {
    this.service.deletepdfMaterial(this.id_material).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/material']);
      window.location.reload();
    })
  }

  hayarchivo(){
    if(this.data.archivo){
      return true;
    }
    return false;
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
