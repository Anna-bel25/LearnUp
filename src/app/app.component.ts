import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

import { CategoryMateriaComponent } from './category-materia/category-materia.component';
import { CategoryNivelComponent } from './category-nivel/category-nivel.component';
import { ResourceActividadComponent } from './resource-actividad/resource-actividad.component';
import { ResourceLibroComponent } from './resource-libro/resource-libro.component';
import { ResourceVideoComponent } from './resource-video/resource-video.component';
import { ResourceFullComponent } from './resource-full/resource-full.component';
import { ResourceMenuComponent } from './resource-menu/resource-menu.component';
import { UploadActividadComponent } from './upload-actividad/upload-actividad.component';
import { UploadLibroComponent } from './upload-libro/upload-libro.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { UploadMenuComponent } from './upload-menu/upload-menu.component';

import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import { CuentaUsuarioComponent } from './cuenta-Usuario-Scree/cuenta-usuario/cuenta-usuario.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatDialogModule,

    HeaderComponent,
    FooterComponent,
    HomePageComponent,

    LoginComponent,
    RegisterComponent,
    CuentaUsuarioComponent,

    CategoryMateriaComponent,
    CategoryNivelComponent,
    ResourceActividadComponent,
    ResourceLibroComponent,
    ResourceVideoComponent,
    ResourceFullComponent,
    ResourceMenuComponent,

    UploadActividadComponent,
    UploadLibroComponent,
    UploadVideoComponent,
    UploadMenuComponent,


  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'LearnUp';
}
