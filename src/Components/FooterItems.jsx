import { Box, Text, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { DefaultState } from '../Data';
import CheckoutBar from './Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartCard';

const Checkout = () => {
  const { cart } = DefaultState();

  const navigate = useNavigate();

  return (
    <Box bg="gray.50">
      <Box
        h={'calc(100vh - 60px)'}
        width={'95%'}
        marginX="auto"
        paddingBottom="5"
      >
        <Box
          display={'flex'}
          gap={10}
          alignItems={'center'}
          justifyContent={{ base: 'space-between', md: 'flex-start' }}
          marginBottom={5}
          paddingX={3}
          paddingY={5}
          position={'sticky'}
          top={'0px'}
          zIndex={5}
        >
          <Button
            bg={'white'}
            onClick={() => navigate('/')}
          >
            <IoIosArrowBack />
          </Button>
          <Text
            fontWeight={'bold'}
            fontSize={{ base: '30' }}
            position={{ base: 'sticky' }}
            left={{ base: '50%'}}
          >
            checkout
          </Text>
        </Box>

        <Box borderBottom={'2px'} borderColor={'gray.600'} padding={'6px'}>
          <Text color={'gray.600'}>PICKUP POINT</Text>
        </Box>
        <Box padding="2px">
          <Text fontSize={'14px'}>
            Address
          </Text>
          <Text fontSize={'10px'}>
            Daalchini Office Noida Uttar Pradesh, Order expires in 30 minutes
          </Text>
        </Box>

        <Box borderBottom={'2px'} borderColor={'gray.600'} padding={'6px'}>
          <Text color={'gray.600'}>CART DETAILS</Text>
        </Box>
        <Box padding={2}>
          {cart.length > 0 && (
            <Grid
              templateColumns={{
                base: '1.5fr 1fr 1fr',
              }}
              gap={6}
              padding={'10px'}
              position={'sticky'}
              top={'-8px'}
            >
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                gap={'10px'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Items
                </Text>
              </GridItem>
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Quantity
                </Text>
              </GridItem>
              <GridItem
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text fontSize={'16px'} fontWeight={'bold'}>
                  Price
                </Text>
              </GridItem>
            </Grid>
          )}
          {cart.length === 0 && (
            <Box
              height={'100%'}
              width={'100%'}
              display="flex"
              alignItems={'center'}
            >
              <Text fontFamily={'heading'} fontSize={20}>
                Cart is Empty
              </Text>
            </Box>
          )}
          {cart.map(item => (
            <CartProduct key={item.id} data={item} />
          ))}
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={{ base: 'space-between', md: 'space-around' }}
            padding={'20px 10px'}
          >
            <Text fontWeight={'bold'} fontSize={20}>
              Total:
            </Text>
            <Text
              fontWeight={'bold'}
              fontSize={20}
              textAlign={{ base: 'center' }}
            >
              Rs.{' '}
              {cart.reduce((curr, val) => curr + val.quantity * val.price, 0)}{' '}
            </Text>
          </Box>
        </Box>
      </Box>
      <CheckoutBar />
    </Box>
  );
};

export default Checkout;
