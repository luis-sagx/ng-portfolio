import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SKILL_CATEGORIES,
  EDUCATION,
  COURSES,
  LANGUAGES,
} from '../../core/constants';
import {
  SkillCategory,
  Education,
  Course,
  Language,
} from '../../core/models/portfolio.model';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly skillCategories: SkillCategory[] = SKILL_CATEGORIES;
  readonly education: Education[] = EDUCATION;
  readonly courses: Course[] = COURSES;
  readonly languages: Language[] = LANGUAGES;
}
