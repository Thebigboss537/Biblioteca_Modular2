import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SedeComponent } from './sede/sede.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { SedeService } from './sede.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CrearSedeComponent } from './crear-sede/crear-sede.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ActualizarSedeComponent } from './actualizar-sede/actualizar-sede.component';
import { DeleteSedeComponent } from './delete-sede/delete-sede.component';
import { MatListModule } from '@angular/material/list';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { EditorialService } from './editorial.service';
import { CrearEditorialComponent } from './crear-editorial/crear-editorial.component';
import { ActualizarEditorialComponent } from './actualizar-editorial/actualizar-editorial.component';
import { DeleteEditorialComponent } from './delete-editorial/delete-editorial.component';
import { TipoMaterialesComponent } from './tipo-materiales/tipo-materiales.component';
import { TipoMaterialService } from './tipo-material.service';
import { ProgramaAcademicoComponent } from './programa-academico/programa-academico.component';
import { ProgramaAcademicoService } from './programa-academico.service';
import { CrearProgramaAcademicoComponent } from './crear-programa-academico/crear-programa-academico.component';
import { ActualizarProgramaAcademicoComponent } from './actualizar-programa-academico/actualizar-programa-academico.component';
import { DeleteProgramaAcademicoComponent } from './delete-programa-academico/delete-programa-academico.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuario.service';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import {MatSelectModule} from '@angular/material/select';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { LoginComponent } from './login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ActualizarTipoMaterialComponent } from './actualizar-tipo-material/actualizar-tipo-material.component';
import { CrearTipoMaterialComponent } from './crear-tipo-material/crear-tipo-material.component';
import { DeleteTipoMaterialComponent } from './delete-tipo-material/delete-tipo-material.component';
import { AutoresComponent } from './autores/autores.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ActualizarAutorComponent } from './actualizar-autor/actualizar-autor.component';
import { DeleteAutorComponent } from './delete-autor/delete-autor.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { ActualizarCategoriaComponent } from './actualizar-categoria/actualizar-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { CrearMaterialComponent } from './crear-material/crear-material.component';
import { ActualizarMaterialComponent } from './actualizar-material/actualizar-material.component';
import { DeleteMaterialComponent } from './delete-material/delete-material.component';
import { VerLibroComponent } from './ver-libro/ver-libro.component';
import { PrestarMaterialComponent } from './prestar-material/prestar-material.component';
import { MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { MaterialPrestadoComponent } from './material-prestado/material-prestado.component';
import { MaterialReservadoComponent } from './material-reservado/material-reservado.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReservarComponent } from './reservar/reservar.component';
import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { DevolverMaterialComponent } from './devolver-material/devolver-material.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    HeaderComponent,
    FooterComponent,
    CrearSedeComponent,
    ActualizarSedeComponent,
    DeleteSedeComponent,
    EditorialesComponent,
    CrearEditorialComponent,
    ActualizarEditorialComponent,
    DeleteEditorialComponent,
    TipoMaterialesComponent,
    ProgramaAcademicoComponent,
    CrearProgramaAcademicoComponent,
    ActualizarProgramaAcademicoComponent,
    DeleteProgramaAcademicoComponent,
    UsuariosComponent,
    CrearUsuarioComponent,
    ActualizarUsuarioComponent,
    DeleteUsuarioComponent,
    LoginComponent,
    ActualizarTipoMaterialComponent,
    CrearTipoMaterialComponent,
    DeleteTipoMaterialComponent,
    AutoresComponent,
    CrearAutorComponent,
    ActualizarAutorComponent,
    DeleteAutorComponent,
    CategoriasComponent,
    CrearCategoriaComponent,
    ActualizarCategoriaComponent,
    DeleteCategoriaComponent,
    MaterialesComponent,
    CrearMaterialComponent,
    ActualizarMaterialComponent,
    DeleteMaterialComponent,
    VerLibroComponent,
    PrestarMaterialComponent,
    RegisterComponent,
    PrestamosComponent,
    ReservasComponent,
    MaterialPrestadoComponent,
    MaterialReservadoComponent,
    ReservarComponent,
    CancelarReservaComponent,
    DevolverMaterialComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, HttpClientModule, BrowserAnimationsModule,
    MatButtonModule, MatTableModule, ReactiveFormsModule, MatInputModule, MatCardModule, 
    MatToolbarModule, MatDialogModule, MatListModule, MatSelectModule, FormsModule, MatPaginatorModule,
    MatIconModule, MatMenuModule, MatSidenavModule, MatProgressBarModule
  ],
  entryComponents: [ActualizarSedeComponent, ActualizarEditorialComponent, 
    ActualizarProgramaAcademicoComponent, ActualizarUsuarioComponent, ActualizarAutorComponent,
  ActualizarCategoriaComponent],
  providers: [SedeService, EditorialService, TipoMaterialService, ProgramaAcademicoService, UsuarioService,  { provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
