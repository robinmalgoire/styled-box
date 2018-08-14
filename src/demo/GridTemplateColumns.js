import React from 'react';
import Box from '../Box/Box';

const GridTemplateColumns = (props) => (
  <Box
    display='grid'
    gridTemplateColumns={{
      mobile: 3,
      desktop: '1fr 3fr 1fr'
    }}
    gridGap={1}
    padding={[1]}
    background='light-400'
    minHeight={5}
    {...props}
    >
    <Box background='primary-200' padding={[1]} />
    <Box background='primary-300' padding={[1]} />
    <Box background='primary-400' padding={[1]} />
  </Box>
);

export default GridTemplateColumns;