import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacListComponent } from './contac-list/contac-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

const routes: Routes = [
  { path: 'contacts', component: ContacListComponent },
  { path: 'contacts/create', component: ContactCreateComponent },
  { path: 'contacts/:id', component: ContactUpdateComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
