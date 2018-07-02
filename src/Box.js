import styled from 'styled-components';
import * as boxProps from './Box.props';
import { isObject, intersectedKeys } from './Box.helpers';
import { media } from './Box.mixins';

const Box = styled.div`
  ${props => {
    return intersectedKeys(props, boxProps).map(key => {
      const method = boxProps[key];
      const value = props[key];

      if (!isObject(value)) {
        return method(value);
    
      } else {
        return Object.keys(value).map(mq => {
          return media(mq)`
            ${method(value[mq])}
          `;
        });
      }
    })
  }}
`;

export default Box;