import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('textElement', { static: true }) textElement?: ElementRef;
  animateText: boolean = false;

  constructor() { }

  ngOnInit(): void {

    const options = {
      rootMargin: '100px',
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
  }

}
