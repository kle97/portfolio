import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";
import { PageNotFoundComponent } from "../core/component/page-not-found/page-not-found.component";
import { HomeComponent } from "./component/home/home.component";
import { ResumeComponent } from "./component/resume/resume.component";

const routes: Routes = [
  { path: "resume", component: ResumeComponent, pathMatch: "full" },
  {
    path: "",
    component: PortfolioComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {
}
