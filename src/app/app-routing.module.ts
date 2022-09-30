import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileBrowserComponent } from './file-browser/file-browser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: FileBrowserComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
