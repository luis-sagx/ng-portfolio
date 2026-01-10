import { ContactInfo } from '../models/portfolio.model';

export const CONTACT_INFO: ContactInfo = {
  email: 'lesagnay@espe.edu.ec',
  phone: '+593 983172773',
  location: 'Quito, Ecuador',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/luis-sagnay-030b8b361/',
      icon: 'fab fa-linkedin',
      ariaLabel: 'LinkedIn profile of Luis Sagnay',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/luis-sagx',
      icon: 'fab fa-github',
      ariaLabel: 'GitHub profile of Luis Sagnay',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/luis.sagnay.3388/',
      icon: 'fab fa-facebook',
      ariaLabel: 'Facebook profile of Luis Sagnay',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/luis.sagx/',
      icon: 'fab fa-instagram',
      ariaLabel: 'Instagram profile of Luis Sagnay',
    },
  ],
};
