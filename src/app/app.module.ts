import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './skills/resume/resume.component';
import { EdComponent } from './skills/ed/ed.component';
import { CandoComponent } from './skills/cando/cando.component';
import { SummaryComponent } from './skills/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    SplashComponent,
    ResumeComponent,
    EdComponent,
    FooterComponent,
    ContactComponent,
    SkillsComponent,
    CandoComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
