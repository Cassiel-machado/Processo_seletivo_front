import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: any[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoas = this.pessoaService.getPessoas();
  }
}
