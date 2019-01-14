import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { GeoObject } from '../model/geo-object';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GeoObjectService {
  // Define the routes we are going to interact with
  private publicObjectsUrl = 'http://localhost:3001/api/objects/public';
  private privateObjectsUrl = 'http://localhost:3001/api/objects/private';

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  // Implement a method to get the private deals
  getPrivateObjects() {
    return this.http
      .get<GeoObject[]>(this.privateObjectsUrl, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to get the public geo-object
  getPublicObjects() {
    return this.http
      .get<GeoObject[]>(this.publicObjectsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
