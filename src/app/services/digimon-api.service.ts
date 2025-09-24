import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { APIResponse, APIResponseNew } from '../interfaces/apiresponse';
import { ApiPost } from '../interfaces/apipost';


@Injectable({
  providedIn: 'root'
})
export class DigimonApiService {

  private _siteURL= "https://digimon-api.vercel.app/api/digimon/name/"
  private _mongoURL = "http://localhost:5050/digimon"
  constructor(private _http:HttpClient) { }

  getDigimonData(digimonName: string): Observable<any> {
  return this._http.get<APIResponse[]>(this._siteURL + digimonName).pipe(
    tap(data => console.log('Digimon data:', data)),
     catchError(this.handleError)
  );
}
getDigimonDatabase():Observable<any> {

    return this._http.get<APIResponse>(this._mongoURL)
    .pipe(
      tap(data => console.log('digimon data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

    sendDigimonDetails(digimon:ApiPost):Observable<any> {
   return this._http.post<ApiPost>(this._mongoURL, digimon)
   .pipe(
    tap(data => console.log('add digimon message/error' + JSON.stringify(data))
    ),
   catchError(this.handleError)
    );
   }

   delDigimonDetails(digimonId:string):Observable<any> {
    let deleteURL=this._mongoURL+"/"+digimonId;
    return this._http.delete(deleteURL)
    .pipe(
      tap(data => console.log('del digimon message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
 
  }


   private handleError (err:HttpErrorResponse) {
    console.log('DigimonApiService: ' + err.message);
    return err.message;
  }

}
