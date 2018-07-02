
import { css } from 'styled-components';
import { toVUnit, backgroundPairing } from 'utils/mixins.styles';
import { parseCSSArray } from 'utils/helpers';

export const padding = (arr) => {
  const values = parseCSSArray(arr);
  return [
    'top',
    'right',
    'bottom',
    'left'
  ].map((suffix, i) => values[i] !== null && css`
    padding-${suffix}: ${values[i] === 'auto' ?'auto': toVUnit(values[i])};
  `);
}

export const margin = (arr) => {
  const values = parseCSSArray(arr);
  return [
    'top',
    'right',
    'bottom',
    'left'
  ].map((suffix, i) => values[i] !== null && css`
    margin-${suffix}: ${values[i] === 'auto' ?'auto': toVUnit(values[i])};
  `);
}

export const border = (arr) => {
  const values = parseCSSArray(arr);
  return css` 
    box-shadow: ${
      [
        'inset 0 var(--border-width) 0 0 var(--border-color)',
        'inset calc(-1 * var(--border-width)) 0 0 var(--border-color)',
        'inset 0 calc(-1 * var(--border-width)) 0 0 var(--border-color)',
        'inset var(--border-width) 0 0 var(--border-color)'
      ]
      .filter((border, i) => values[i])
      .join(', ')};
  `;
}

export const radius = (arr) => {
  const values = parseCSSArray(arr);
  return [
    'top-left',
    'top-right',
    'bottom-right',
    'bottom-left'
  ].map((suffix, i) => {
    if (values[i] === null) return null;

    const radiusValue = typeof values[i] === 'string' ? 
      values[i]
      : `calc(var(--border-radius) * ${values[i]})`

    return css`
      border-${suffix}-radius: ${radiusValue};
    `;
  });
}

export const background = (value) => backgroundPairing(value);

export const color = (value) => css`color: var(--${value});`;

export const textAlign = (value) => css`text-align: ${value};`;

export const templates = (value) => css`grid-template-areas: ${value};`;

export const columns = (value) => css`grid-template-columns: repeat(${value}, 1fr);`;

export const column = (value) => css`grid-column: ${value};`;

export const row = (value) => css`grid-row: ${value};`;
