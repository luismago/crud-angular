import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngFLIP]',
})
export class FlipDirective implements OnInit {
  @Input('appFlipOptions') options = {
    duration: 700,
    easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)',
  };

  private state = new Map<Element, any>();

  private observer: MutationObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.observer = new MutationObserver(this.animate);
    this.observer.observe(this.host.nativeElement, { childList: true });
  }

  get elements() {
    return Array.from(this.host.nativeElement.children);
  }

  private read() {
    this.elements.forEach(elem => {
      const { left, top, width, height } = elem.getBoundingClientRect();

      this.state.set(elem, { left, top, width, height });
    });
  }

  private animate = () => {
    this.elements.forEach(elem => {
      const { left, top, width, height } = elem.getBoundingClientRect();

      if (!this.state.has(elem)) {
        this.state.set(elem, { left, top, width, height });
        return;
      }
      const cache = this.state.get(elem);

      const deltaX = cache.left - left;
      const deltaY = cache.top - top;
      const deltaW = cache.width / width;
      const deltaH = cache.height / height;

      this.state.set(elem, { left, top, width, height });

      const { duration, easing } = this.options;

      elem.animate(
        [
          {
            transformOrigin: 'top left',
            transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `,
            opacity: cache.opacity,
          },
          {
            transformOrigin: 'top left',
            transform: 'none',
          },
        ],
        {
          duration,
          easing,
        }
      );
    });
  };

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
