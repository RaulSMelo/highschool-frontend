import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroBasicoFormComponent } from '../../pages/cadastro-basico/cadastro-basico-form/cadastro-basico-form.component';

const routes: Routes = [
  { path: 'cursos', component: CadastroBasicoFormComponent},
  { path: 'idiomas', component: CadastroBasicoFormComponent},
  { path: 'midias', component: CadastroBasicoFormComponent},
  { path: 'niveis', component: CadastroBasicoFormComponent},
  { path: 'resultados', component: CadastroBasicoFormComponent},
  { path: 'revisoes', component: CadastroBasicoFormComponent},
  { path: 'tipos-de-contatos', component: CadastroBasicoFormComponent},
  { path: 'traducoes', component: CadastroBasicoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroBasicoRoutingModule { }
