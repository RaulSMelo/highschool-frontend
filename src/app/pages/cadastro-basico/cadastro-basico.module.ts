import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroBasicoRoutingModule } from './cadastro-basico-routing.module';
import { CadastroBasicoFormComponent } from './cadastro-basico-form/cadastro-basico-form.component';
import { CadastroBasicoListComponent } from './cadastro-basico-list/cadastro-basico-list.component';


@NgModule({
  declarations: [
    CadastroBasicoFormComponent,
    CadastroBasicoListComponent
  ],
  imports: [
    CommonModule,
    CadastroBasicoRoutingModule
  ]
})
export class CadastroBasicoModule { }
