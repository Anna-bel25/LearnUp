import { Component, ElementRef, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryMateriaComponent } from '../category-materia/category-materia.component';


@Component({
  selector: 'app-category-nivel',
  standalone: true,
  imports: [ RouterLink, CategoryMateriaComponent, CommonModule ],
  templateUrl: './category-nivel.component.html',
  styleUrls: ['./category-nivel.component.css']
})
export class CategoryNivelComponent {

  niveles = [
    { nombre: 'Preescolar', imagen: '/assets/img/preescolar.png', id: 'preescolar', alt: 'Preescolar' },
    { nombre: 'Primaria', imagen: '/assets/img/primaria.png', id: 'primaria', alt: 'Primaria' },
    { nombre: 'Secundaria', imagen: '/assets/img/secundaria.png', id: 'secundaria', alt: 'Secundaria' },
    { nombre: 'Bachillerato', imagen: '/assets/img/bachillerato.png', id: 'bachillerato', alt: 'Bachillerato' }
  ];


  mostrarPreescolar: boolean = false;
  mostrarPrimaria: boolean = false;
  mostrarSecundaria: boolean = false;
  mostrarBachillerato: boolean = false;

  constructor(private zone: NgZone) {}

  mostrarMaterias(nivel: string): void {
    this.resetMostrarFlags();

    switch (nivel) {
      case 'preescolar':
        this.mostrarPreescolar = true;
        break;
      case 'primaria':
        this.mostrarPrimaria = true;
        break;
      case 'secundaria':
        this.mostrarSecundaria = true;
        break;
      case 'bachillerato':
        this.mostrarBachillerato = true;
        break;
    }

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        const sectionElement = document.getElementById(`${nivel}-section`);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 45;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 0);
    });
  }

  resetMostrarFlags(): void {
    this.mostrarPreescolar = false;
    this.mostrarPrimaria = false;
    this.mostrarSecundaria = false;
    this.mostrarBachillerato = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
