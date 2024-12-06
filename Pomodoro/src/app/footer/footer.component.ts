import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  private scrollThreshold = 300; // Threshold in pixels
  private isScrollTriggered = false;
  scrollY: number = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollY = window.scrollY;
    console.log('Scroll Position:', this.scrollY);
  }

  ngOnInit(): void {
    this.onWindowScroll(); // Initialize scroll position on load
  }
  scrollToNextPage() {
    console.log('Scrolled past threshold, navigating...');

    // Navigate to settings page
    this.router.navigate(['/settings']);

    // Smooth scroll to next page
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth'
    });

    // Reset trigger after a short delay to allow re-triggering
    setTimeout(() => {
      this.isScrollTriggered = false;
    }, 1000);
  }
}
