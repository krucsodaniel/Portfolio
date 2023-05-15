import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('textElement', { static: true }) textElement?: ElementRef;
  @ViewChild('textElementSecond', { static: true }) textElementSecond?: ElementRef;
  animateText: boolean = false;
  animateTextSecond: boolean = false;

  showToTopButton: boolean = false;

  constructor() { }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showToTopButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 800;
  }

  scrollToTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  }

  ngOnInit(): void {

    const options = {
      rootMargin: '0px',
      threshold: 0.7 // Adjust this threshold value to trigger the animation at the desired point
    };

    const optionsSecond = {
      rootMargin: '0px',
      threshold: 1 // Adjust this threshold value to trigger the animation at the desired point
    };


    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateText = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.textElement?.nativeElement);

    const observerSecond = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateTextSecond = true;
          observer.unobserve(entry.target);
        }
      });
    }, optionsSecond);

    observerSecond.observe(this.textElementSecond?.nativeElement);

  }

}
