import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTag } from '../ui/skill-tag/skill-tag';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SkillTag],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
