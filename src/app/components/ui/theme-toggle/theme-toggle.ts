import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css'
})
export class ThemeToggle {
  darkMode = signal(false);

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        this.darkMode.set(true);
        document.documentElement.classList.add('dark');
      }
    }
  }

  toggleTheme() {
    this.darkMode.update(v => !v);
    if (typeof window !== 'undefined' && window.localStorage) {
      const root = document.documentElement;
      if (this.darkMode()) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
