import { NgModule } from "@angular/core";
import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatchMediaPipe } from "./pipe/match-media.pipe";
import { PageNotFoundComponent } from "./component/page-not-found/page-not-found.component";
import { ScrollUpButtonComponent } from "./component/scroll-up-button/scroll-up-button.component";
import { VarDirective } from "./directive/var.directive";
import { FooterComponent } from "./component/footer/footer.component";
import { IsInViewPipe } from "./pipe/is-in-view.pipe";

@NgModule({
  declarations: [
    MatchMediaPipe,
    IsInViewPipe,
    PageNotFoundComponent,
    ScrollUpButtonComponent,
    VarDirective,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  exports: [
    MatchMediaPipe,
    IsInViewPipe,
    VarDirective,
    PageNotFoundComponent,
    ScrollUpButtonComponent,
    FooterComponent,
  ],
})

export class CoreModule {
}
