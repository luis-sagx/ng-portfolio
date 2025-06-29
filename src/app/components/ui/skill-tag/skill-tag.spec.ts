import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTag } from './skill-tag';

describe('SkillTag', () => {
  let component: SkillTag;
  let fixture: ComponentFixture<SkillTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
