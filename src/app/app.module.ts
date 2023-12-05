import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './page/pessoa/pessoa.component';
import { ListaPessoasComponent } from './page/lista-pessoas/lista-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    //PessoaComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
