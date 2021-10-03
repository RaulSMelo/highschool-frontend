import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'cadastro-basico', 
    loadChildren: () => import('./pages/cadastro-basico/cadastro-basico.module').then(m => m.CadastroBasicoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
