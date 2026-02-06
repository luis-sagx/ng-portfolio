import { Component } from '@angular/core';
import { ProjectCard } from '../ui/project-card/project-card';
import { PROJECTS } from '../../core/constants';
import { Project } from '../../core/models/portfolio.model';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, ScrollAnimationDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects: Project[] = PROJECTS;
}
