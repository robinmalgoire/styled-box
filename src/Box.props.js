
import { css } from 'styled-components';
import { toVUnit, backgroundPairing } from './Box.mixins';
import { parseCSSArray } from './Box.helpers';

export const padding = (arr) => {
  const values = parseCSSArray(arr);
  return [
    'top',
    'right',
    'bottom',
    'left'
  ].map((suffix, i) => values[i] !== null && css`
    padding-${suffix}: ${toVUnit(values[i])};
  `);
}

export const paddingTop = (value) => css`padding-top: ${toVUnit(value)};`;
export const paddingRight = (value) => css`padding-right: ${toVUnit(value)};`;
export const paddingBottom = (value) => css`padding-bottom: ${toVUnit(value)};`;
export const paddingLeft = (value) => css`padding-left: ${toVUnit(value)};`;

export const margin = (arr) => {
  const values = parseCSSArray(arr);
  return [
    'top',
    'right',
    'bottom',
    'left'
  ].map((suffix, i) => values[i] !== null && css`
    margin-${suffix}: ${toVUnit(values[i])};
  `);
}

export const marginTop = (value) => css`margin-top: ${toVUnit(value)};`;
export const marginRight = (value) => css`margin-right: ${toVUnit(value)};`;
export const marginBottom = (value) => css`margin-bottom: ${toVUnit(value)};`;
export const marginLeft = (value) => css`margin-left: ${toVUnit(value)};`;

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

export const width = (value) => css`width: ${toVUnit(value)};`;

export const minWidth = (value) => css`min-width: ${toVUnit(value)};`;

export const maxWidth = (value) => css`max-width: ${toVUnit(value)};`;

export const height = (value) => css`height: ${toVUnit(value)};`;

export const minHeight = (value) => css`min-height: ${toVUnit(value)};`;

export const maxHeight = (value) => css`max-height: ${toVUnit(value)};`;