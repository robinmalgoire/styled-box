import React from 'react';
import Box from '../Box/Box';

const DisplayFlex = (props) => (
  <Box
    display={{mobile: 'block', desktop: 'flex'}}
    justifyContent='center'
    alignItems='center'
    background='light-400'
    minHeight={5}
    {...props}
  >
    <Box background='primary-200' padding={[1]} />
    <Box background='primary-300' padding={[1]} />
    <Box background='primary-400' padding={[1]} />
  </Box>
);

export default DisplayFlex;