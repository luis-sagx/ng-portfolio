import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggle {
  darkMode = signal(true);

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Leer el estado actual del DOM (ya aplicado por el script inline)
      const isDark = document.documentElement.classList.contains('dark');
      this.darkMode.set(isDark);
    }
  }

  toggleTheme() {
    this.darkMode.update((v) => !v);
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

  isDarkMode() {
    return this.darkMode();
  }
}
