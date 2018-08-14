import React from 'react';
import ReactDOM from 'react-dom';
import './demo/injectGlobal';

import { ThemeProvider } from 'styled-components';
import Box from './Box/Box';

import ButtonAs from './demo/ButtonAs';
import ButtonWithComponent from './demo/ButtonWithComponent';
import DisplayFlex from './demo/DisplayFlex';
import GridTemplateColumns from './demo/GridTemplateColumns';
import GridTemplateAreas from './demo/GridTemplateAreas';


const theme = {
  breakpoints: { desktop: 500 }
};

const MainWrapper = (props) => (
  <Box
    maxWidth={{mobile: '360px', desktop: '800px'}}
    margin={[null, 'auto']}
    {...props}
  />
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MainWrapper>

      <ButtonAs marginTop={1} />

      <ButtonWithComponent marginTop={1} />

      <DisplayFlex marginTop={1} />

      <GridTemplateColumns marginTop={1} />

      <GridTemplateAreas marginTop={1} />
  
    </MainWrapper>
  </ThemeProvider>
  , document.getElementById('app')
);
