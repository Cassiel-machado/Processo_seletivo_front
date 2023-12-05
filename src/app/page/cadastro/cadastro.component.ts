import { Component } from '@angular/core';
import { PessoaService } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  dataNascimento: Date;
  cpf: string = '';
  telefone1: string = '';
  telefone2: string = '';

  constructor(private pessoaService: PessoaService) {
    this.dataNascimento = new Date();
  }

  validateNumber(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  salvarPessoa() {
    if (this.nome.trim() === '' || !this.dataNascimento || this.cpf.trim() === '') {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const novaPessoa = {
      nome: this.nome,
      dataNascimento: this.dataNascimento,
      cpf: this.cpf,
      telefone1: this.telefone1,
      telefone2: this.telefone2
    };

    this.pessoaService.adicionarPessoa(novaPessoa);

    // Limpar os campos após salvar
    this.nome = '';
    this.dataNascimento = new Date();
    this.cpf = '';
    this.telefone1 = '';
    this.telefone2 = '';
  }
}