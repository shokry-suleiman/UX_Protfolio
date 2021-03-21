import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtfolioRoutingModule } from './protfolio-routing.module';
import { ProtfolioComponent } from './protfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ResumComponent } from './resum/resum.component';


@NgModule({
  declarations: [ProtfolioComponent, HomeComponent, AboutComponent, ProjectsComponent, CaseStudiesComponent, ResumComponent],
  imports: [
    CommonModule,
    ProtfolioRoutingModule
  ]
})
export class ProtfolioModule { }
