import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box/Box';

/* ----------------------------------------
 *
 * Box.withComponent('foo')
 * 
 * markup will be generated without the custom createComponent function
 * all props will go through:
 *
 * <button type="button" background="primary-400" height="1" padding=",1" class="sc-bxivhb...
 * 
 * ---------------------------------------- */

const Link = styled.a`
  display: inline-flex;
  vertical-align: top;
  align-items: center;
`;

const buttonAttrs = {
  private: ['isDark'],
  background: 'primary-400',
  height: 1,
  padding: [null, 1]
}

const buttonCss = css`
  font-size: 12px;
  border: none;
  box-shadow: 0px 6px 6px -4px rgba(0, 0, 0, .75);
  background: ${props => props.isDark && css`var(--primary-600);` }
`

const StyledButton = Box.withComponent('button').extend.attrs({
  type: 'button',
  ...buttonAttrs
})`
  ${buttonCss}
`;

const StyledLink = Box.withComponent(Link).extend.attrs(
  buttonAttrs
)`
  ${buttonCss}
`;

const ButtonWithComponent = (props) => (
  <Box 
    background='light-400'
    padding={[1]}
    {...props}
  >
    <StyledButton marginRight={1}>foo</StyledButton>
    <StyledButton marginRight={1} isDark>bar</StyledButton>
    <StyledLink>foo bar</StyledLink>
  </Box>
);

export default ButtonWithComponent;


