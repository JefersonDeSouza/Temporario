import { Injectable } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteAssociadoResult } from 'src/app/model/result/clienteAssociado-result';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  public obterListaCliente(): ClienteAssociadoResult[] {
    const listaCliente: ClienteAssociadoResult[] = [
      { CodCliente: '1', CodGerente: '1', Nome: 'Hao Asakura' },
      { CodCliente: '2', CodGerente: '1', Nome: 'Yusuke' },
      { CodCliente: '3', CodGerente: '2', Nome: 'Mario Allan Parra Rodrigues' },
      { CodCliente: '4', CodGerente: null, Nome: 'Raio' },
      { CodCliente: '5', CodGerente: '3', Nome: 'Goku' }];
    return listaCliente;
  }

  public enviarListaCliente(listaCliente: ClienteModel[]): Observable<string> {
    return this.httpClient.post<string>('', listaCliente);
  }
}
