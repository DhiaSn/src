import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DefaultFouterComponent } from '../default-fouter/default-fouter.component';
import { DefaultHeaderComponent } from '../default-header/default-header.component';
import { WhatWeDoComponent } from '../../components/what-we-do/what-we-do.component';
import { CaseStudiesComponent } from '../../components/case-studies/case-studies.component';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { PricingComponent } from '../../components/pricing/pricing.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DefaultFouterComponent,
    DefaultHeaderComponent,
    WhatWeDoComponent,
    CaseStudiesComponent,
    WhoWeAreComponent,
    PricingComponent,
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css'
})
export class DefaultLayoutComponent {

}
