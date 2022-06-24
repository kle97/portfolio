import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: [
    "../../../../../node_modules/keen-slider/keen-slider.min.css",
    "./project.component.scss",
  ],
})
export class ProjectComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("sliderRef1") sliderRef1!: ElementRef<HTMLElement>;
  slider1!: KeenSliderInstance;
  currentSlide1: number = 0;
  dotHelper1: Array<Number> = [];
  autoSlide1: boolean = false;
  timeout1!: NodeJS.Timeout;

  @ViewChild("sliderRef2") sliderRef2!: ElementRef<HTMLElement>;
  slider2!: KeenSliderInstance;
  currentSlide2: number = 0;
  dotHelper2: Array<Number> = [];
  autoSlide2: boolean = false;
  timeout2!: NodeJS.Timeout;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.slider1 = new KeenSlider(this.sliderRef1.nativeElement, {
        initial: this.currentSlide1,
        drag: true,
        loop: true,
        created: () => {
          this.nextTimeout1();
        },
        dragStarted: () => {
          this.clearNextTimeOut1();
        },
        animationEnded: () => {
          this.nextTimeout1();
        },
        updated: () => {
          this.nextTimeout1();
        },
        slideChanged: (s) => {
          this.currentSlide1 = s.track.details.rel;
        },
      });
      this.dotHelper1 = [
        ...Array(this.slider1.track.details.slides.length).keys(),
      ];
    });

    setTimeout(() => {
      this.slider2 = new KeenSlider(this.sliderRef2.nativeElement, {
        initial: this.currentSlide2,
        drag: true,
        loop: true,
        created: () => {
          this.nextTimeout2();
        },
        dragStarted: () => {
          this.clearNextTimeOut2();
        },
        animationEnded: () => {
          this.nextTimeout2();
        },
        updated: () => {
          this.nextTimeout2();
        },
        slideChanged: (s) => {
          this.currentSlide2 = s.track.details.rel;
        },
      });
      this.dotHelper2 = [
        ...Array(this.slider2.track.details.slides.length).keys(),
      ];
    });
  }

  clearNextTimeOut1() {
    clearTimeout(this.timeout1);
  }

  nextTimeout1() {
    clearTimeout(this.timeout1);
    if (this.autoSlide1) {
      this.timeout1 = setTimeout(() => {
        this.slider1.next();
      }, 5000);
    }
  }

  toggleAutoSlide1() {
    this.autoSlide1 = !this.autoSlide1;
    if (this.autoSlide1) {
      this.nextTimeout1();
    } else {
      this.clearNextTimeOut1();
    }
  }

  clearNextTimeOut2() {
    clearTimeout(this.timeout2);
  }

  nextTimeout2() {
    clearTimeout(this.timeout2);
    if (this.autoSlide2) {
      this.timeout2 = setTimeout(() => {
        this.slider2.next();
      }, 5000);
    }
  }

  toggleAutoSlide2() {
    this.autoSlide2 = !this.autoSlide2;
    if (this.autoSlide2) {
      this.nextTimeout2();
    } else {
      this.clearNextTimeOut2();
    }
  }

  ngOnDestroy(): void {
    if (this.slider1) {
      this.slider1.destroy();
    }
    if (this.slider2) {
      this.slider2.destroy();
    }
  }

}
