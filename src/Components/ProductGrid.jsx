import { Box, Grid } from '@chakra-ui/layout';
import React from 'react';
import AppBar from './Navigator';
import { DefaultState } from '../Data';
import Product from './ProductCard';

const Products = () => {
  const { products } = DefaultState();

  return (
    <Box bg="gray.50">
      <Box
        h={'calc(100vh - 60px)'}
        width={'95%'}
        marginX="auto"
        paddingY="5"
        overflow={'auto'}
      >
        <Grid
          gap={5}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          marginTop={5}
        >
          {products.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </Grid>
      </Box>
      <AppBar />
    </Box>
  );
};

export default Products;
