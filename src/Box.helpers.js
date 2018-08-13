import * as boxProps from './Box.props';

export const isObject = (variable) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
}

export const intersectedKeys = (Object1, Object2) => {
  return Object.keys(Object1).filter(k => k in Object2)
}

export const intersectBoxKeys = (props) => intersectedKeys(props, boxProps);

export const intersectBoxProps = (props) => {
  const intersectedBoxProps = {};

  intersectedKeys(props, boxProps).map(key => {
    intersectedBoxProps[key] = props[key];
  });

  return intersectedBoxProps;
}

export const parseCSSArray = (arr) => {
  switch(arr.length) {
    case 1:
      return [arr[0],arr[0],arr[0],arr[0]];

    case 2:
      return [arr[0],arr[1],arr[0],arr[1]];

    case 3:
      return [arr[0],arr[1], arr[2],arr[1]];

    case 4:
      return arr;

    default: 
      return null;
  }
}

export const nonCommonKeys = (Object1, Object2) => {
  return Object.keys(Object1).filter(k => {
    return k in Object2 ? false: true;
  })
}

export const cleanHtmlAttribute = (originalProps, propTypes) => {
  const cleanAttributes = {};

  nonCommonKeys(originalProps, propTypes).map(key => {
    cleanAttributes[key] = originalProps[key];
  });

  return cleanAttributes;
}