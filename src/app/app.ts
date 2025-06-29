import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/layout/navbar/navbar";
import { Footer } from './components/layout/footer/footer';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, Hero, About, Projects],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'ng-portfolio';
}
