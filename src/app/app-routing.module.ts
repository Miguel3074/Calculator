import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { CientificaComponent } from './components/pages/cientifica/cientifica.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: SobreComponent },
  { path: 'cientifica', component: CientificaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
