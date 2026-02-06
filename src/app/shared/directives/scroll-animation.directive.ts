import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AnimationType =
  | 'fade-in'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate-in'
  | 'flip-x'
  | 'flip-y';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: AnimationType = 'fade-up';
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 600;
  @Input() threshold: number = 0.1;

  private observer?: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    // Only run animations in browser environment
    if (this.isBrowser) {
      this.setupAnimation();
      this.createObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupAnimation(): void {
    const element = this.el.nativeElement;

    // Set transition properties
    this.renderer.setStyle(
      element,
      'transition',
      `all ${this.animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${this.animationDelay}ms`,
    );

    // Set initial state based on animation type
    this.setInitialState();
  }

  private setInitialState(): void {
    const element = this.el.nativeElement;

    // Common initial state
    this.renderer.setStyle(element, 'opacity', '0');

    switch (this.animationType) {
      case 'fade-in':
        break;

      case 'fade-up':
        this.renderer.setStyle(element, 'transform', 'translateY(30px)');
        break;

      case 'fade-down':
        this.renderer.setStyle(element, 'transform', 'translateY(-30px)');
        break;

      case 'fade-left':
        this.renderer.setStyle(element, 'transform', 'translateX(30px)');
        break;

      case 'fade-right':
        this.renderer.setStyle(element, 'transform', 'translateX(-30px)');
        break;

      case 'scale-in':
        this.renderer.setStyle(element, 'transform', 'scale(0.9)');
        break;

      case 'slide-up':
        this.renderer.setStyle(element, 'transform', 'translateY(50px)');
        break;

      case 'slide-down':
        this.renderer.setStyle(element, 'transform', 'translateY(-50px)');
        break;

      case 'slide-left':
        this.renderer.setStyle(element, 'transform', 'translateX(50px)');
        break;

      case 'slide-right':
        this.renderer.setStyle(element, 'transform', 'translateX(-50px)');
        break;

      case 'zoom-in':
        this.renderer.setStyle(element, 'transform', 'scale(0.5)');
        break;

      case 'zoom-out':
        this.renderer.setStyle(element, 'transform', 'scale(1.2)');
        break;

      case 'rotate-in':
        this.renderer.setStyle(
          element,
          'transform',
          'translateY(30px) rotate(-5deg)',
        );
        break;

      case 'flip-x':
        this.renderer.setStyle(element, 'transform', 'rotateX(90deg)');
        this.renderer.setStyle(element, 'transform-style', 'preserve-3d');
        break;

      case 'flip-y':
        this.renderer.setStyle(element, 'transform', 'rotateY(90deg)');
        this.renderer.setStyle(element, 'transform-style', 'preserve-3d');
        break;
    }
  }

  private createObserver(): void {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px',
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateIn(): void {
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'opacity', '1');
    this.renderer.setStyle(element, 'transform', 'none');
  }

  private animateOut(): void {
    this.setInitialState();
  }
}
