import { NgModule } from "@angular/core";

import { PortfolioRoutingModule } from "./portfolio-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PortfolioComponent } from "./portfolio.component";
import { NavigationBarComponent } from "./component/navigation-bar/navigation-bar.component";
import { CoreModule } from "../core/core.module";
import { HomeComponent } from "./component/home/home.component";
import { ProjectComponent } from "./component/project/project.component";
import { SkillComponent } from "./component/skill/skill.component";
import { IntroductionComponent } from "./component/introduction/introduction.component";
import { AboutComponent } from "./component/about/about.component";
import { ContactComponent } from "./component/contact/contact.component";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha14";
import { environment } from "../../environments/environment";
import { ResumeComponent } from "./component/resume/resume.component";


@NgModule({
  declarations: [
    PortfolioComponent,
    NavigationBarComponent,
    HomeComponent,
    ProjectComponent,
    SkillComponent,
    IntroductionComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    PortfolioRoutingModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.recaptchaSiteKey } as RecaptchaSettings,
    },
  ],
})
export class PortfolioModule {
}
