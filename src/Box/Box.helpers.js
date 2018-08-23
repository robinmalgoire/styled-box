import Box from './Box';
import * as boxProps from './Box.props';

export const extractBoxProps = (props) => {
  const boxProps = {};
  Object.keys(props).filter(k => k in Box.propTypes).map(key => {
    boxProps[key] = props[key];
  });
  return boxProps;
}

export const extractOtherProps = (props, privateProps) => {
  const otherProps = {};
  Object.keys(props).filter(k => !(k in Box.propTypes)).map(key => {
    otherProps[key] = props[key];
  });
  return otherProps;
}

export const isObject = (variable) => {
  return variable && typeof variable === 'object' && variable.constructor === Object;
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