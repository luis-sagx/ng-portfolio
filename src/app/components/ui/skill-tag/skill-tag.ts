import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  imports: [CommonModule],
  templateUrl: './skill-tag.html',
  styleUrl: './skill-tag.css',
})
export class SkillTag {
  @Input() name: string = '';
  @Input() variant: 'default' | 'github' = 'default';
  @Input() link?: string;
}
