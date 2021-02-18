import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

/** server url **/
apiUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

/** To get enrollee list **/
  getEnrolles() {
    return this.http.get(`${this.apiUrl}/enrollees`);
  }

/** To get enrollee list bby id **/
  getEnrollesById(id: string) {
    return this.http.get(`${this.apiUrl}/enrollees/${id}`);
  }

/** To update enrollee list by id **/
  updateEnrolleDetails(id: string, updateData: any) {
    return this.http.put(`${this.apiUrl}/enrollees/${id}`, updateData);
  }
}
