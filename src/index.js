import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Box from './Box';


injectGlobal`
  /* --------------------------------
  * Required CSS variables
  * ------------------------------ */
  :root {
    --line-height        : 2rem;

    --primary-600        : #453C77;
    --primary-500        : #5C509E;
    --primary-400        : #7364C6;
    --primary-300        : #8F83D1;
    --primary-200        : #ABA2DD;

    --secondary-600      : #994C45;
    --secondary-500      : #CC655C;
    --secondary-400      : #FF7E73;
    --secondary-300      : #FF988F;
    --secondary-200      : #FFB2AB;

    --dark-600           : #2C2932;
    --dark-500           : #3A3743;
    --dark-400           : #494554;
    --dark-300           : #6D6A76;
    --dark-200           : #928F98;

    --light-600          : #939496;
    --light-500          : #C4C5C8;
    --light-400          : #F5F6FA;
    --light-300          : #F7F8FB;
    --light-200          : #F9FAFC;

    --white              : #FFF;

    --font-light         : #F7F8FB;
    --font-dark          : #3A3743;

    --border-width       : 2px;
    --border-color       : currentColor;
    --border-radius      : 3px;
  }

  /* --------------------------------
   * Default styles
   * ------------------------------ */

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-image: linear-gradient(var(--light) 1px, transparent 1px);
    background-size: 100% var(--line-height);
  }
`;

const Button = styled(Box).attrs({
  as: 'button',
  type: 'button'
})`
  font-size: ${props => props.isBig ? '24px' : '12px'};
`

ReactDOM.render(
  <ThemeProvider theme={{
    breakpoints: {
      desktop: 500,
    }
  }}>
    <Box
      maxWidth={{mobile: '360px', desktop: '800px'}}
      margin={[null, 'auto']}
    >
      <Box 
        type='text'
        margin={[2, null]}
        height={5}
        background='primary-400'
      />
      <Button
        padding={[.5, 1]}
        marginTop={1}
        background='primary-400'
        color='light-400'
        radius={[1]}
        isBig
      >
        Button
      </Button>
    </Box>
  </ThemeProvider>
  , document.getElementById('app')
);
