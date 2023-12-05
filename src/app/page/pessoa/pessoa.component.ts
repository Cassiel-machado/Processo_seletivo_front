import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaService {
  pessoas: any[] = [];

  constructor() { }

  adicionarPessoa(pessoa: any) {
    this.pessoas.push(pessoa);
  }

  getPessoas() {
    return this.pessoas;
  }
}
export class PessoaComponent {
  
}
