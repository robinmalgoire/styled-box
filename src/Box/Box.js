import React from 'react';
import styled from 'styled-components';
import * as boxProps from './Box.props';
import { isObject, intersectBoxKeys } from './Box.helpers';
import { media } from './Box.mixins';
import PropTypes from 'prop-types';

const createElement = (originalProps) => {
  const newProps = {};
  const tag = originalProps.as || 'div';
  const privateProps = originalProps.private && Object.assign(...originalProps.private.map(k => ({[k]: null})));
  const filteredProps = { ...Box.propTypes, ...privateProps }

  Object.keys(originalProps).filter(k => !(k in filteredProps)).map(key => {
    newProps[key] = originalProps[key];
  });

  return React.createElement(tag, newProps);
};

const renderCss = (props) => {
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
}

const Box = styled(createElement)`
  ${renderCss}
`;

const objectOr = (other) => PropTypes.oneOfType([].concat([PropTypes.object], other));

Box.propTypes = {
  // BOX CREATE ELEMENT ATTRIBUTES
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
  private: PropTypes.array,

  // BOX MODEL PROPERTIES
  display: objectOr([PropTypes.string]),
  width: objectOr([PropTypes.number, PropTypes.string]),
  minWidth: objectOr([PropTypes.number, PropTypes.string]),
  maxWidth: objectOr([PropTypes.number, PropTypes.string]),
  height: objectOr([PropTypes.number, PropTypes.string]),
  minHeight: objectOr([PropTypes.number, PropTypes.string]),
  maxHeight: objectOr([PropTypes.number, PropTypes.string]),
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
  borderRadius: objectOr([PropTypes.array]),

  // FONT PROPERTIES
  color: objectOr([PropTypes.string]),
  textAlign: objectOr([PropTypes.string]),

  // FLEX PROPERTIES
  flexDirection: objectOr([PropTypes.string]),
  flexWrap: objectOr([PropTypes.string]),
  justifyContent: objectOr([PropTypes.string]),
  alignItems: objectOr([PropTypes.string]),
  alignContent: objectOr([PropTypes.string]),

  // GRID PROPERTIES
  gridTemplateAreas: objectOr([PropTypes.string]),
  gridTemplateColumns: objectOr([PropTypes.string, PropTypes.number]),
  gridTemplateRows: objectOr([PropTypes.string, PropTypes.number]),
  gridArea: objectOr([PropTypes.string]),
  gridColumn: objectOr([PropTypes.string]),
  gridRow: objectOr([PropTypes.string]),
  gridColumnGap: objectOr([PropTypes.number]),
  gridRowGap: objectOr([PropTypes.number]),
  gridGap: objectOr([PropTypes.number]),

  // REQUIRE WORKS
  border: objectOr([PropTypes.array]),
  background: objectOr([PropTypes.string]),
};

export default Box;