import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import SelectionBox from '../../components/product-selection-box';
import SelectionResult from '../../components/product-selection-result';

function Home() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item sm={6} xs={12}>
          <SelectionBox
            changeSelectedType={(value) => setSelectedType(value)}
            changeSelectedName={(value) => setSelectedName(value)}
            changeSelectedColor={(value) => setSelectedColor(value)}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectionResult
            type={selectedType}
            name={selectedName}
            color={selectedColor}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
