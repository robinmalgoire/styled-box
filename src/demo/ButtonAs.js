import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box/Box';

/* ----------------------------------------
 *
 * styled(Box).attrs({as: 'button', private: ['isDark']})``
 * 
 * When using the custom createComponent from Box,
 * only the non indentified props will pass through
 *
 * <button type="button" class="sc-bwzfXH gRIXRB sc-bdVaJa...
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

const StyledButton = styled(Box).attrs({
  as: 'button',
  type: 'button',
  ...buttonAttrs
})`
  ${buttonCss}
`;

const StyledLink = styled(Box).attrs({
  as: Link,
  ...buttonAttrs
})`
  ${buttonCss}
`;

const ButtonAs = (props) => (
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

export default ButtonAs;