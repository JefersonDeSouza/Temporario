import { Component, OnInit } from '@angular/core';
import { ClienteModel } from './model/clienteModel';
import { ClienteService } from './service/clienteService/cliente-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listaClienteModel: ClienteModel[] = new Array<ClienteModel>();

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.listaClienteModel = this.clienteService.buscaListaCliente();
  }

}
