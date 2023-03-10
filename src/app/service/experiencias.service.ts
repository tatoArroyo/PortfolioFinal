import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias} from '../model/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  URL = 'https://backendarroyo.onrender.com/explab/'
 

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Experiencias[]>{
    return this.httpClient.get<Experiencias[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Experiencias>{
    return this.httpClient.get<Experiencias>(this.URL + 'detail' + `/${id}`);

  }
  public save(Experiencias: Experiencias): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', Experiencias);
  }
  public update(id: number, Experiencias: Experiencias): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}` , Experiencias);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + 'delete' + `/${id}`);
  }
}
