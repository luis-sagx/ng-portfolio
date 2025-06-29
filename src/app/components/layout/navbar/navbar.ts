import { Component } from '@angular/core';
import { ThemeToggle } from '../../ui/theme-toggle/theme-toggle';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggle, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  isMenuOpen = false;
}
