import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective implements OnInit {
  @HostListener("mouseenter", ["$event"]) private surligne(e: MouseEvent) {
    console.log(e);
    this.el.nativeElement.style.color = "red";
  }

  @HostListener("mouseleave") private normal() {
    this.el.nativeElement.style.color = "black";
  }

  @HostListener("window:click", ["$event"]) private test(e: MouseEvent) {
    console.log(e);
  }

  @Input() @HostBinding("class") private class: string;

  @HostBinding("attr.role") private role: string;

  @HostBinding("style.backgroundColor") private color: string;

  constructor(private el: ElementRef<HTMLLIElement>) {}

  ngOnInit() {
    console.log(this.class);
    this.role = "admin";
    this.color = "orange";
  }
}
