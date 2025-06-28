import { Component } from '@angular/core';
import { ThemeToggle } from '../../ui/theme-toggle/theme-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggle, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
