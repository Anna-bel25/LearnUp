import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private materiasUrl = 'https://apiresources-production.up.railway.app/api/materias';
  private actividadesUrl = 'https://apiresources-production.up.railway.app/api/actividades';
  private videosUrl = 'https://apiresources-production.up.railway.app/api/videos';
  private librosUrl='https://apiresources-production.up.railway.app/api/libros';
  private userUrl = 'https://apiresources-production.up.railway.app/api';
  private userInfoChanged$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  getMaterias(): Observable<any> {
    return this.http.get<any>(this.materiasUrl);
  }

  getActividades(): Observable<any> {
    return this.http.get<any>(this.actividadesUrl);
  }

  getVideos(): Observable<any> {
    return this.http.get<any>(this.videosUrl);
  }

  getLibros(): Observable<any>{
    return this.http.get<any>(this.librosUrl);
  }

  postActividades(data: any): Observable<any> {
    return this.http.post<any>(this.actividadesUrl, data);
  }

  postVideos(data: any): Observable<any> {
    return this.http.post<any>(this.videosUrl, data);
  }

  postLibros(data: any): Observable<any> {
    return this.http.post<any>(this.librosUrl, data);
  }

  /*---------------MARIA------------------------*/
  postUsers(userData: any): Observable<any> {
    return this.http.post(`${this.userUrl}/users`, userData);
  }

  postUsersLogin(userData: any): Observable<any> {
    return this.http.post(`${this.userUrl}/login`, userData).pipe(
      tap((response: any) => {
        if (response.error) {
          throw new Error(response.error);
        } else if (response.token) {
          localStorage.setItem('token', response.token);
          this.userInfoChanged$.next(this.getUserInfoFromToken());
        }
      })
    );
  }
  

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userInfoChanged$.next(null);
  }
  getUserInfo(): Observable<any> {
    return this.userInfoChanged$.asObservable();
  }


  getProtectedResource(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`${this.userUrl}/protected`, { headers });
  }


  // Método para obtener la información del usuario desde el token JWT
  getUserInfoFromToken(): { id : number,tipocuenta: string, username: string } | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = JSON.parse(atob(token.split('.')[1]));

        // // Verificar la expiración del token
        // const currentTimestamp = new Date().getTime() / 50000; // Tiempo actual en segundos
        // if (decoded.exp && decoded.exp < currentTimestamp) {
        //   console.warn('El token ha expirado.');
        //   // Realizar acciones de renovación de token o cierre de sesión aquí si es necesario
        //   return null;
        // }

        return {
          id: decoded.id,
          tipocuenta: decoded.tipocuenta,
          username: decoded.username
        };
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
    return null;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  /*Traer datos de la tabla users desde el backend - maria*/
  getUsers(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.userUrl}/datausers`, { headers });
  }
  /*Atualizar datos de la tabla users*/
  postActualizartabla(userData: any): Observable<any> {
    console.log('Sending request to backend:', userData);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`${this.userUrl}/updateusers`, userData);
  }
  /*Eliminar Cuenta de Usuario*/
  deleteCuenta(id: number): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete(`${this.userUrl}/deleteusers/${id}`, { headers });
  }



  /*------------------End Maria-----------------------*/

}
