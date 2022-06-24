import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {

  githubMouseOver: boolean = false;
  githubMouseOut: boolean = false;

  resumeMouseOver: boolean = false;
  resumeMouseOut: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
