import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spitter } from '../all-spitters-component/spitters/spitters.component';

@Injectable({
  providedIn: 'root'
})
export class SpitterServiceService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllSpitters(){
    return this.http.get<Spitter[]>('http://localhost:8080/Spitter/all-spitters');
    // console.log("hello world bean service execute")
  }

}
