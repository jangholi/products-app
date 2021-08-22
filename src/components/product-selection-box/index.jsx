import React, { useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Select from '../atoms/select';
import getProducts from '../../services/products';
import filterListByKey from '../../helper/filterListByKey';

function ProductSelectionBox({ changeSelectedType, changeSelectedName, changeSelectedColor }) {
  const [products, setProducts] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [nameList, setNamesList] = useState([]);
  const [colorList, setColorList] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const createSelectsOptions = (productList, filter) => {
    const types = [];
    const names = [];
    const colors = [];
    productList.forEach((e) => {
      types.push(e.type);
      names.push(e.name);
      colors.push(...e.colors);
    });

    if (filter) {
      if (filter === 'type') {
        setNamesList([...new Set(names)]);
        setColorList([...new Set(colors)]);
      } else if (filter === 'name') {
        setTypeList([...new Set(types)]);
        setColorList([...new Set(colors)]);
      } else if (filter === 'color') {
        setTypeList([...new Set(types)]);
        setNamesList([...new Set(names)]);
      }
    } else {
      setTypeList([...new Set(types)]);
      setNamesList([...new Set(names)]);
      setColorList([...new Set(colors)]);
    }
  };

  React.useEffect(() => {
    getProducts()
      .then((productList) => {
        createSelectsOptions(productList);
        setProducts(productList);
        setIsDataLoaded(true);
      });
  }, []);

  const handleSelectChange = (value, key) => {
    const productList = [...products];
    const filteredProduct = filterListByKey(productList, key, value);
    createSelectsOptions(filteredProduct, key);
  };

  const handleTypeChange = (value) => {
    handleSelectChange(value, 'type');
    changeSelectedType(value);
  };
  const handleNameChange = (value) => {
    handleSelectChange(value, 'name');
    changeSelectedName(value);
  };
  const handleColorChange = (value) => {
    handleSelectChange(value, 'colors');
    changeSelectedColor(value);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Select Items</Typography>
        <Grid container>
          <Grid item xs={12}>
            <Box mt={2}>
              <Select
                label="type"
                options={typeList}
                handleChange={handleTypeChange}
                disabled={!isDataLoaded}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Select
                label="name"
                options={nameList}
                handleChange={handleNameChange}
                disabled={!isDataLoaded}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2} mb={3}>
              <Select
                label="color"
                options={colorList}
                handleChange={handleColorChange}
                disabled={!isDataLoaded}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProductSelectionBox;
