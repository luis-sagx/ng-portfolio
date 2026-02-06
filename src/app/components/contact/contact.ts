import { Component } from '@angular/core';
import { CONTACT_INFO } from '../../core/constants';
import { ContactInfo } from '../../core/models/portfolio.model';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly contactInfo: ContactInfo = CONTACT_INFO;
}
