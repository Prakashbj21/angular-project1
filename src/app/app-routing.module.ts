import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {path:"",redirectTo:'login', pathMatch:'full'},
  { path: 'posts',component: PostsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'firstpage',component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
    path: 'posts',
    component: PostsComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
