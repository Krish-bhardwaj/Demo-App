import {
  Grid,
  GridItem,
  ButtonGroup,
  IconButton,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';
import { DefaultState } from '../Data';

const CartProduct = ({ data }) => {
  const { cart, setCart } = DefaultState();

  const incrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    const newCart = cart;
    newCart[newCart.indexOf(product)].quantity++;
    setCart([...newCart]);
  };

  const decrementCount = () => {
    const product = cart.find(item => item.id === data.id);
    if (product.quantity > 1) {
      const newCart = cart;
      newCart[newCart.indexOf(product)].quantity--;
      setCart([...newCart]);
    } else {
      const newCart = cart.filter(e => e.id !== data.id);
      setCart(newCart);
    }
  };

  return (
    <Grid
      templateColumns={{ base: '1.5fr 1fr 1fr', md: 'repeat(3, 1fr)' }}
      gap={6}
      borderTop="1px"
      borderBottom={'1px'}
      borderColor={'gray.200'}
      padding={'10px'}
    >
      <GridItem
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        gap={'15px'}
      >
        <Text fontSize={{ base: '15' }}>{data.name}</Text>
      </GridItem>
      <GridItem
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <ButtonGroup size="sm" isAttached border='2px' varient='outlined' borderRadius="md" borderColor='green.700'>
          <IconButton icon={<IoMdAdd />} onClick={incrementCount} />
          <Button>{cart.find(item => item.id === data.id).quantity}</Button>
          <IconButton icon={<RiSubtractLine />}onClick={decrementCount}/>
        </ButtonGroup>
      </GridItem>
      <GridItem
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text fontSize={'14px'}>₹ {data.quantity * data.price}</Text>
      </GridItem>
    </Grid>
  );
};

export default CartProduct;
