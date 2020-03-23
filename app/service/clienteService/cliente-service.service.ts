import { Injectable } from '@angular/core';
import { ClienteModel } from '../../model/clienteModel';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public buscaListaCliente(): ClienteModel[] {
    const listaCliente: ClienteModel[] = [{ CodCliente: '', Documento: '', Nome: '' }];
    return listaCliente;
  }
}
