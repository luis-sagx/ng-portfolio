import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillTag } from '../skill-tag/skill-tag';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, SkillTag],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() image : string = '';
  @Input() title : string = '';
  @Input() description : string = '';
  @Input() technologies : string[] = [];
  @Input() link : string = '';
}
