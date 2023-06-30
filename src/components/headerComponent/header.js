import _ from 'lodash';
import './header.scss';

export default function headerComponent() {
  const header = document.createElement('header');
  const logo = document.createElement('div');
  logo.className = 'logo';
  const heading1 = document.createElement('h1');
  heading1.textContent = 'Freshwater';
  heading1.classList.add('logo-text');

  const logoIcon = new Image();
  const icon = new URL('../../images/logo-icon.svg', import.meta.url);
  logoIcon.alt = 'Freshwater logo';
  logoIcon.className = 'logo-icon';
  logoIcon.src = icon;

  logo.appendChild(logoIcon);
  logo.appendChild(heading1);
  header.append(logo);

  return header;
}
