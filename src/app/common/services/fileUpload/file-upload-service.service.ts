import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CONFIG } from 'app/env'
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(
    private http: HttpClient
  ) { }


  create(params: any): Observable<any> {
    return this.http.post(CONFIG.server_url + "/api/fileupload/", params,{ responseType: 'blob'});
  }
}


