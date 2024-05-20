import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollspyDirective } from './scrollspy.directive';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ServicesComponent, PricingComponent, FeaturesComponent, TeamComponent, BlogComponent, ContactComponent, ScrollspyDirective, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [ServicesComponent, PricingComponent, FeaturesComponent, TeamComponent, BlogComponent, ContactComponent, ScrollspyDirective, FooterComponent]
})
export class SharedModule { }
