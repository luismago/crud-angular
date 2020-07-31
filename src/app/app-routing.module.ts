import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CasesComponent} from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { CasesStatComponent} from './cases-stat/cases-stat.component';
import { EditCasesComponent} from './edit-cases/edit-cases.component';
import { AddCasesComponent} from './add-cases/add-cases.component';


const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'List of Cases' }
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Cases Details' }
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: { title: 'Cases Statistic' }
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Add Cases' }
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: { title: 'Edit Cases' }
  },
  { path: '',
    redirectTo: '/cases',
    pathMatch: 'full'
  }
];





@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
