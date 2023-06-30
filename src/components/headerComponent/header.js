import _ from 'lodash';
import './header.scss';

export default function headerComponent() {
  const header = document.createElement('header');
  const heading1 = document.createElement('h1');
  heading1.textContent = 'Freshwater';
  heading1.classList.add('logo-text');

  // const myIcon = new Image();
  // myIcon.src = Icon;
  //   const icon = new URL('./water_desktop.svg', import.meta.url);
  //   myIcon.src = icon;

  header.appendChild(heading1);

  return header;
}
