import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private materiasUrl = 'https://apiresources-production.up.railway.app/api/materias';
  private actividadesUrl = 'https://apiresources-production.up.railway.app/api/actividades';
  private videosUrl = 'https://apiresources-production.up.railway.app/api/videos';
  private librosUrl='https://apiresources-production.up.railway.app/api/libros';

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

}
