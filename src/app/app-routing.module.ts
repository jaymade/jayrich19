import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { EdComponent } from './skills/ed/ed.component';
import { CandoComponent } from './skills/cando/cando.component';
import { ResumeComponent } from './skills/resume/resume.component';
import { SummaryComponent } from './skills/summary/summary.component';

const routes: Routes = [
  { path: '',  component: SplashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home',  component: SplashComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'skills', component: SkillsComponent, children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component: SummaryComponent },
      { path: 'do', component: CandoComponent },
      { path: 'do', component: CandoComponent },
      { path: 'ed', component: EdComponent },
      { path: 'resume', component: ResumeComponent }
    ]},
  { path: '**', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
