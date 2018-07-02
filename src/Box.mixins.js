import { css } from 'styled-components'

export const toEm = (value) => {
  return typeof value !== null && value !== 0 ?
    `${value/16}em`
    : value;
}

export const toVUnit = (value) => {
  return typeof value !== null && value !== 0 ?
    `calc(var(--line-height) * ${value})`
    : value;
}

export const media = (arg) => {
  return function(...styles) {
    return function(props) {
      return arg in props.theme.breakpoints ?
        css`@media (min-width: ${toEm(props.theme.breakpoints[arg])}) {
          ${css(...styles)}
        }`
        : css(...styles);
    }
  }
}

export const backgroundPairing = (type) => {
  switch(type) {
    case 'primary-600':
    case 'primary-500':
    case 'primary-400':
    case 'primary-300':
    case 'primary-200':

    case 'secondary-600':
    case 'secondary-500':
    case 'secondary-400':
    case 'secondary-300':
    case 'secondary-200':

    case 'dark-600':
    case 'dark-500':
    case 'dark-400':
    case 'dark-300':
    case 'dark-200':
      return css`
        background: var(--${type});
        color: var(--font-light);
      `;

    case 'light-600': 
    case 'light-500': 
    case 'light-400': 
    case 'light-300': 
    case 'light-200': 
      return css`
        background: var(--${type});
        color: var(--font-dark);
      `;

    default:
      return css`
        background: var(--primary-400);
        color: var(--font-light);
      `;
  }
}