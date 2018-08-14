import React from 'react';
import Box from '../Box/Box';

const GridTemplateAreas = (props) => (
  <Box
    display='grid'
    gridTemplateAreas={{
      mobile: `'A B C'`,
      desktop: `'A C''B C'`
    }}
    gridGap={1}
    padding={[1]}
    background='light-400'
    minHeight={5}
    {...props}
  >
    <Box gridArea='A' background='primary-200' padding={[1]} />
    <Box gridArea='B' background='primary-300' padding={[1]} />
    <Box gridArea='C' background='primary-400' padding={[1]} />
  </Box>
);

export default GridTemplateAreas;