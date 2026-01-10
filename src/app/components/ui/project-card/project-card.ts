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
}
