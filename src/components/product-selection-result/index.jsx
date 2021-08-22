import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function ProductSelectionResult({ type, name, color }) {
  return (
    <>
      <Typography variant="h6" color="primary" m={5}>
        YOUR SELECTION:
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">
          Type:
          {' '}
          {type}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">
          Name:
          {' '}
          {name}
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">
          Color:
          {' '}
          {color}
        </Typography>
      </Box>
    </>
  );
}

export default ProductSelectionResult;
