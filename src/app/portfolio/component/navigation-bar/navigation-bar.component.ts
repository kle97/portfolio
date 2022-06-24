import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { ScrollUpService } from "../../../core/service/scroll-up.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  title: string = "Khoa Le";
  @ViewChild("sidenav") sidenav!: MatSidenav;

  constructor(
    private scrollUpService: ScrollUpService,
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidenav.toggle();
  }

  scrollTo(elementId: string) {
    this.scrollUpService.scrollIntoView(elementId, "smooth", true);
  }
}
