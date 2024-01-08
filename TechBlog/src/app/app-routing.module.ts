import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, BlogComponent, AboutComponent, ContactsComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: MainComponent },
  { path: "block", component: BlogComponent },
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
