import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntradaOutput } from '../dtos/outputs/entradaOutput';
import { environment } from 'src/environments/environment';
import { EntradaInput } from '../dtos/inputs/entradaInput';

const URL_API = environment.URL_API + "entradas";

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  buscaTodas(): Observable<EntradaOutput[]>{
    return this.httpClient.get<EntradaOutput[]>(URL_API);
  }

  buscaPeloId(id: number): Observable<EntradaOutput>{
    return this.httpClient.get<EntradaOutput>(URL_API +"/"+ id);
  }

  cadastra(entradaInput: EntradaInput): Observable<EntradaOutput>{
    return this.httpClient.post<EntradaOutput>(URL_API, entradaInput);
  }

  altera(id: number, entradaInput: EntradaInput): Observable<EntradaOutput>{
    return this.httpClient.put<EntradaOutput>(URL_API +"/"+ id, entradaInput);
  }
}
