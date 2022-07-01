import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

  apiUrl = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';

  
  constructor(private http: HttpClient ) { }

  public getFrase(){
    return this.http.get<any>(this.apiUrl)
  }

  
}

