import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearSedeComponent } from "./crear-sede/crear-sede.component";
import { DeleteSedeComponent } from "./delete-sede/delete-sede.component";
import { EditorialesComponent } from "./editoriales/editoriales.component";
import { SedeComponent } from "./sede/sede.component";
import { CrearEditorialComponent } from "./crear-editorial/crear-editorial.component";
import { DeleteEditorialComponent } from "./delete-editorial/delete-editorial.component";
import { TipoMaterialesComponent } from "./tipo-materiales/tipo-materiales.component";
import { ProgramaAcademicoComponent } from "./programa-academico/programa-academico.component";
import { CrearProgramaAcademicoComponent } from "./crear-programa-academico/crear-programa-academico.component";
import { DeleteProgramaAcademicoComponent } from "./delete-programa-academico/delete-programa-academico.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { CrearUsuarioComponent } from "./crear-usuario/crear-usuario.component";
import { DeleteUsuarioComponent } from "./delete-usuario/delete-usuario.component";
import { LoginComponent } from "./login/login.component";
import { CrearTipoMaterialComponent } from "./crear-tipo-material/crear-tipo-material.component";
import { DeleteTipoMaterialComponent } from "./delete-tipo-material/delete-tipo-material.component";
import { AutoresComponent } from "./autores/autores.component";
import { CrearAutorComponent } from "./crear-autor/crear-autor.component";
import { DeleteAutorComponent } from "./delete-autor/delete-autor.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { CrearCategoriaComponent } from "./crear-categoria/crear-categoria.component";
import { DeleteCategoriaComponent } from "./delete-categoria/delete-categoria.component";
import { MaterialesComponent } from "./materiales/materiales.component";
import { CrearMaterialComponent } from "./crear-material/crear-material.component";
import { DeleteMaterialComponent } from "./delete-material/delete-material.component";
import { VerLibroComponent } from "./ver-libro/ver-libro.component";
import { PrestarMaterialComponent } from "./prestar-material/prestar-material.component";
import { RegisterComponent } from "./register/register.component";
import { PrestamosComponent } from "./prestamos/prestamos.component";
import { ReservasComponent } from "./reservas/reservas.component";
import { MaterialPrestadoComponent } from "./material-prestado/material-prestado.component";
import { MaterialReservadoComponent } from "./material-reservado/material-reservado.component";
import { ReservarComponent } from "./reservar/reservar.component";
import { CancelarReservaComponent } from "./cancelar-reserva/cancelar-reserva.component";
import { DevolverMaterialComponent } from "./devolver-material/devolver-material.component";


//route
const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'sede', component: SedeComponent},
    {path: 'crear-sede', component: CrearSedeComponent},
    {path: 'sede/delete-sede/:id_sede', component: DeleteSedeComponent},
    {path: 'editorial', component: EditorialesComponent},
    {path: 'crear-editorial', component: CrearEditorialComponent},
    {path: 'editorial/delete-editorial/:id_editorial', component: DeleteEditorialComponent},
    {path: 'Tipo_material', component: TipoMaterialesComponent},
    {path: 'crear-Tipo_material', component: CrearTipoMaterialComponent},
    {path: 'Tipo_material/delete-tipo_material/:id_tipo_material', component: DeleteTipoMaterialComponent},
    {path: 'programa_academico', component: ProgramaAcademicoComponent},
    {path: 'crear-programa_academico', component: CrearProgramaAcademicoComponent},
    {path: 'programa_academico/delete-programa_academico/:id_programa_academico', component: DeleteProgramaAcademicoComponent},
    {path: 'usuario', component: UsuariosComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'usuario/delete-usuario/:id_usuario', component: DeleteUsuarioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'autor', component: AutoresComponent},
    {path: 'crear-autor', component: CrearAutorComponent},
    {path: 'autor/delete-autor/:id_autor', component: DeleteAutorComponent},
    {path: 'categoria', component: CategoriasComponent},
    {path: 'crear-categoria', component: CrearCategoriaComponent},
    {path: 'categoria/delete-categoria/:id_categoria', component: DeleteCategoriaComponent},
    {path: 'material', component: MaterialesComponent},
    {path: 'crear-material', component: CrearMaterialComponent},
    {path: 'material/delete-material/:id_material', component: DeleteMaterialComponent},
    {path: 'reservar/:id_material', component: ReservarComponent},
    {path: 'detalles/:id_material', component: VerLibroComponent},
    {path: 'prestar/:id_material', component: PrestarMaterialComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'prestamos', component: PrestamosComponent},
    {path: 'reservas', component: ReservasComponent},
    {path: 'materiales_prestados', component: MaterialPrestadoComponent},
    {path: 'materiales_reservados', component: MaterialReservadoComponent},
    {path: 'cancelar-reserva/:id_reserva', component: CancelarReservaComponent},
    {path: 'devolver-material/:id_prestamo', component: DevolverMaterialComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}

