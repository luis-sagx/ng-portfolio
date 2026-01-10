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
  darkMode = signal(true); // Dark mode por defecto

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('theme');
      // Si el usuario nunca ha configurado el tema, usar oscuro por defecto
      if (saved === 'light') {
        this.darkMode.set(false);
        document.documentElement.classList.remove('dark');
      } else {
        // Por defecto o si es 'dark', activar modo oscuro
        this.darkMode.set(true);
        document.documentElement.classList.add('dark');
        if (!saved) {
          localStorage.setItem('theme', 'dark');
        }
      }
    } else {
      // Para SSR, activar modo oscuro por defecto
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('dark');
      }
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
