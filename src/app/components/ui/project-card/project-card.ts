import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() tags: string[] = [];
  @Input() link: string = '';
  @Input() github?: string;
  @Input() highlights?: string[];

  /**
   * Obtiene la ruta de la imagen en el formato especificado
   * @param format - Formato de imagen deseado (avif, webp, png, jpg)
   * @returns Ruta de la imagen en el formato especificado
   */
  getImagePath(format: 'avif' | 'webp' | 'png' | 'jpg'): string {
    if (!this.image) return '';

    // Si la imagen ya es webp, convertir al formato solicitado
    if (this.image.endsWith('.webp')) {
      return this.image.replace('.webp', `.${format}`);
    }

    // Para otros formatos, reemplazar la extensión
    return this.image.replace(/\.(png|jpg|jpeg)$/i, `.${format}`);
  }
}
