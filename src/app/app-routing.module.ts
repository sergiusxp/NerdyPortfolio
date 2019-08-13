import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/custom/contact/contact.component';
import { MainclassComponent } from './components/mainclass/mainclass.component';
import { ProjectsComponent } from './components/custom/projects/projects.component';
import { WhoAmIComponent } from './components/custom/who-am-i/who-am-i.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainclassComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'whois', component: WhoAmIComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
