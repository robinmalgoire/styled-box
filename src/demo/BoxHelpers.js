import React from 'react';
import Box from '../Box/Box';
import { extractBoxProps, extractOtherProps } from '../Box/Box.helpers';

const DemoBox = (props) => {
  const boxProps = extractBoxProps(props);
  const otherProps = extractOtherProps(props);

  return (
    <Box {...boxProps}>
      { Object.keys(otherProps).toString().replace(/,/, ', ') }
    </Box>
  )
}

const BoxHelpers = (props) => (
  <Box {...props}>
    <DemoBox
      background='light-400'
      padding={[1]}
      isFoo
      isBar='bar'
    />
  </Box>
)

export default BoxHelpers;