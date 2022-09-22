import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
    );
  }

  getId(id: any): Observable<any> {
    return this.http.get<any>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  search(name:any) :Observable<any>{
    return this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

  }
}
