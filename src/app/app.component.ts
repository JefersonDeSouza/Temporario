import { Component, OnInit } from '@angular/core';
import { ClienteService } from './service/cliente/cliente.service';
import { ClienteModel } from './model/cliente-model';
import { ClienteAssociadoResult } from './model/result/clienteAssociado-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listaClienteAssociadoResult: ClienteAssociadoResult[] = new Array<ClienteAssociadoResult>();
  listaClienteAssociadoModel: ClienteAssociadoResult[] = new Array<ClienteAssociadoResult>();
  listaClienteDesassociadoModel: ClienteAssociadoResult[] = new Array<ClienteAssociadoResult>();

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.listaClienteAssociadoResult = this.clienteService.obterListaCliente();
    this.listaClienteDesassociadoModel = this.listaClienteAssociadoResult;
  }

  public atualizarListaCliente(){
    this.listaClienteDesassociadoModel = this.listaClienteAssociadoResult;
  }
}
