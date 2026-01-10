import { Component } from '@angular/core';
import { ProjectCard } from '../ui/project-card/project-card';
import { PROJECTS } from '../../core/constants';
import { Project } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects: Project[] = PROJECTS;
}
