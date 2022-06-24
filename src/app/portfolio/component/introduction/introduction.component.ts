import { Component, OnInit } from "@angular/core";
import { ScrollUpService } from "../../../core/service/scroll-up.service";

@Component({
  selector: "app-introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.scss"],
})
export class IntroductionComponent implements OnInit {

  constructor(
    private scrollUpService: ScrollUpService,
  ) {
  }

  ngOnInit(): void {
  }

  scrollDown() {
    this.scrollUpService.scrollIntoView("about", "smooth", true);
  }

}
