import { ElementRef, Pipe, PipeTransform } from "@angular/core";
import { combineLatest, delay, fromEvent, Observable, of, startWith, switchMap } from "rxjs";

@Pipe({
  name: "isInView",
})
export class IsInViewPipe implements PipeTransform {

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  transform(value: boolean, offset: number = 150): Observable<boolean> {
    let isInView = !value;
    return combineLatest([
      fromEvent(window, "scroll").pipe(startWith(null)),
      fromEvent(window, "resize").pipe(startWith(null)),
    ]).pipe(
      delay(0),
      switchMap(() => {
        if (isInView !== value) {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const elementPosition = this.getOffsetTop(this.elementRef.nativeElement);
          let elementHeight = this.elementRef.nativeElement.offsetHeight;
          if (elementHeight > offset) {
            elementHeight = offset;
          }
          isInView = scrollPosition >= elementPosition
            || (scrollPosition + windowHeight) >= (elementPosition + elementHeight);
        }
        return of(isInView);
      }),
      // takeWhile(isInView => isInView !== value),
    );
  }

  getOffsetTop(nativeElement: any) {
    let offsetTop = nativeElement.offsetTop || 0;
    if (nativeElement.offsetParent) {
      offsetTop += this.getOffsetTop(nativeElement.offsetParent);
    }
    return offsetTop;
  }

}
