import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/layout/navbar/navbar';
import { Footer } from './components/layout/footer/footer';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Hero, About, Projects, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  protected title = 'ng-portfolio';
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Inicializar AOS solo en el navegador
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 600,
        once: true, // Las animaciones solo ocurren una vez
        easing: 'ease-in-out',
        offset: 50,
        delay: 0,
      });
    }
  }
}
