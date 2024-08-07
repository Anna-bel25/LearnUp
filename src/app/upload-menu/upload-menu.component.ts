import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { HomePageComponent } from '../home-page/home-page.component';
import { UploadVideoComponent } from '../upload-video/upload-video.component';
import { UploadLibroComponent } from '../upload-libro/upload-libro.component';
import { UploadActividadComponent } from '../upload-actividad/upload-actividad.component';

@Component({
  selector: 'app-upload-menu',
  standalone: true,
  imports: [ RouterLink, CommonModule, HomePageComponent, UploadVideoComponent, UploadLibroComponent, UploadActividadComponent ],
  templateUrl: './upload-menu.component.html',
  styleUrls: ['./upload-menu.component.css']
})
export class UploadMenuComponent implements AfterViewInit, OnInit {

  swiper!: Swiper;

  mostrarVideos: boolean = false;
  mostrarLibros: boolean = false;
  mostrarActividades: boolean = false;
  resourceToShow: string | undefined;

  constructor(private route: ActivatedRoute, private zone: NgZone) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    new Swiper('.review-slider', {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  toggleResource(resource: string): void {
    if (resource === 'videos') {
      this.mostrarVideos = true;
      this.mostrarLibros = false;
      this.mostrarActividades = false;
      this.resourceToShow = 'videos';
    } else if (resource === 'libros') {
      this.mostrarVideos = false;
      this.mostrarLibros = true;
      this.mostrarActividades = false;
      this.resourceToShow = 'libros';
    } else if (resource === 'actividades') {
      this.mostrarVideos = false;
      this.mostrarLibros = false;
      this.mostrarActividades = true;
      this.resourceToShow = 'actividades';
    }

    setTimeout(() => {
      const tituloSeccion = document.querySelector('.about .title') as HTMLElement;
      if (tituloSeccion) {
        tituloSeccion.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        //window.scrollBy(0, 650, 750);
        window.scrollTo({ top: 700, behavior: 'smooth' });
      } else {
        console.error('Elemento del título de la sección no encontrado');
      }
    }, 100);
  }


  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
