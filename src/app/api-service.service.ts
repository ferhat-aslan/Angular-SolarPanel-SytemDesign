import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //https://jsonplaceholder.typicode.com/posts
//https://developer.nrel.gov/api/pvwatts/v6.json?api_key=5erEArJwNiDsaUOVeuLj2tv2aksPieXnchISHrBY&lat=${lat}&lon=${long}&system_capacity=${cap}&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10
  constructor(private http:HttpClient) { }
getdata():Observable<any>{
  return this.http.get("https://jsonplaceholder.typicode.com/posts")


}

}
