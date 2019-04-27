import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { EdComponent } from './ed/ed.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '',  component: SplashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ed', component: EdComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'splash', component: SplashComponent },
  { path: '**', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
