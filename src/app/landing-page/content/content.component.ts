import { Component } from '@angular/core';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { SecureMessagesComponent } from './secure-messages/secure-messages.component';
import { TeamComponent } from './team/team.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { FeaturesComponent } from './features/features.component';
import { MainSlideComponent } from './main-slide/main-slide.component';
import { OurAppComponent } from './our-app/our-app.component';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    imports: [OurAppComponent, MainSlideComponent, FeaturesComponent, TeamworkComponent, ExclusiveComponent, TeamComponent, SecureMessagesComponent, PricingPlanComponent, SubscribeComponent]
})
export class ContentComponent {

  constructor(){
    
  }
}
