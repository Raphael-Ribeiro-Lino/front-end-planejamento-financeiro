import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustoFixoInput } from '../dtos/inputs/custoFixoInput';
import { CustoFixoOutput } from '../dtos/outputs/custoFixoOutput';

const URL_API = environment.URL_API + "custos-fixos"

@Injectable({
  providedIn: 'root'
})
export class CustoFixoService {

  constructor(private httpClient: HttpClient) { }

  listaTodos(): Observable<CustoFixoOutput[]>{
    return this.httpClient.get<CustoFixoOutput[]>(URL_API);
  }

  buscaPeloId(id: number): Observable<CustoFixoOutput>{
    return this.httpClient.get<CustoFixoOutput>(URL_API + "/" + id);
  }

  cadastra(custoFixoInput: CustoFixoInput): Observable<CustoFixoOutput>{
    return this.httpClient.post<CustoFixoOutput>(URL_API, custoFixoInput);
  }

  altera(id: number, custoFixoInput: CustoFixoInput): Observable<CustoFixoOutput>{
    return this.httpClient.put<CustoFixoOutput>(URL_API + "/" + id, custoFixoInput);
  }
}
