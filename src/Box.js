import React from 'react';
import styled from 'styled-components';
import * as boxProps from './Box.props';
import { isObject, intersectBoxKeys } from './Box.helpers';
import { media } from './Box.mixins';
import PropTypes from 'prop-types';

const createElement = (originalProps) => {
  const newProps = {...originalProps};

  Object.keys(Box.propTypes).map(key => {
    delete newProps[key];
  })

  return React.createElement(originalProps.as || 'div', newProps);
};


const Box = styled(createElement)`
  ${props => {
    return intersectBoxKeys(props).map(key => {
      const method = boxProps[key];
      const value = props[key];

      if (!isObject(value)) {
        return value !== null && method(value);
    
      } else {
        return Object.keys(value).map(mq => {
          return value[mq] !== null && media(mq)`
            ${method(value[mq])}
          `;
        });
      }
    })
  }}
`;

const objectOr = (other) => {
  return PropTypes.oneOfType([].concat(
    [PropTypes.object],
    other
  ));
}

Box.propTypes = {
  as: PropTypes.string,
  padding: objectOr([PropTypes.array]),
  paddingTop: objectOr([PropTypes.number, PropTypes.string]),
  paddingRight: objectOr([PropTypes.number, PropTypes.string]),
  paddingBottom: objectOr([PropTypes.number, PropTypes.string]),
  paddingLeft: objectOr([PropTypes.number, PropTypes.string]),
  margin: objectOr([PropTypes.array]),
  marginTop: objectOr([PropTypes.number, PropTypes.string]),
  marginRight: objectOr([PropTypes.number, PropTypes.string]),
  marginBottom: objectOr([PropTypes.number, PropTypes.string]),
  marginLeft: objectOr([PropTypes.number, PropTypes.string]),
  border: objectOr([PropTypes.array]),
  radius: objectOr([PropTypes.array]),
  background: objectOr([PropTypes.string]),
  color: objectOr([PropTypes.string]),
  textAlign: objectOr([PropTypes.string]),
  templates: objectOr([PropTypes.string]),
  columns: objectOr([PropTypes.number]),
  column: objectOr([PropTypes.number]),
  row: objectOr([PropTypes.number]),
  width: objectOr([PropTypes.number, PropTypes.string]),
  minWidth: objectOr([PropTypes.number, PropTypes.string]),
  maxWidth: objectOr([PropTypes.number, PropTypes.string]),
  height: objectOr([PropTypes.number, PropTypes.string]),
  minHeight: objectOr([PropTypes.number, PropTypes.string]),
  maxHeight: objectOr([PropTypes.number, PropTypes.string]),
};

export default Box;