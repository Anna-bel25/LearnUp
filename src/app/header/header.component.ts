import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
// import { ApiService } from '../api.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // userInfo: { tipocuenta: string, username: string } | null = null;
  // private destroy$ = new Subject<void>();
  // showOptions = false;


  activeLinkIndex = 0;
  links = [
    { path: '/home', label: 'Inicio', active: true },
    { path: '/colecciones', label: 'Colecciones', active: false },
    { path: '/nivel', label: 'Categoria', active: false },
    { path: '/recursos', label: 'Recursos', active: false },
    { path: '/menu-subir', label: 'Subir Recursos', active: false },
    { path: '/privadasColecciones', label: 'Mis colecciones', active: false },
    { path: '/login', label: 'Usuario', active: false },
    { path: '/cuenta-usuario',label:'Cuenta',active:false},
    { path: '/cuenta-usuario',label:'Cuenta',active:false},
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // this.apiService.getUserInfo().subscribe(userInfo => {
    //   this.userInfo = userInfo;
    // });

    // this.getUserInfo();
  }
  // ngOnDestroy(): void {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
  // getUserInfo() {
  //   this.userInfo = this.apiService.getUserInfoFromToken();
  //   console.log('UserInfo:', this.userInfo); // Verificar en la consola
  //   //this.cd.detectChanges();
  // }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
    this.links.forEach((link, i) => link.active = i === index);
  }

  isActiveLink(index: number): boolean {
    return this.activeLinkIndex === index;
  }


}
