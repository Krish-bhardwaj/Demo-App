import { Box, Button, useToast } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { DefaultState } from '../Data';
import LoginModal from './ModalPhNoInput';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const CheckoutBar = () => {
  const { cart, user, setCart } = DefaultState();

  const toast = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  });

  const paymentClick = () => {
    toast({
      title: 'Order Placed Successfully',
      description: 'back to home page',
      duration: 1000,
      position: 'top',
    });
    setCart([]);
    navigate('/');
  };

  return (
    <Box
      height={'60px'}
      bg={'green.500'}
      display={'flex'}
      paddingX={{ base: 5, md: 10 }}
      paddingY={3}
      color={'white'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {user && (
        <Button
        bg={'green.500'}
          rightIcon={<BsArrowRight fontSize={20} />}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          _hover={{ bg: 'green.500' }}
          padding="10px 20px"
          onClick={() => paymentClick()}
        >
          Select Payment
        </Button>
      )}
      {!user && (
        <LoginModal>
          <Button variant={'unstyled'}>Login</Button>
        </LoginModal>
      )}
    </Box>
  );
};

export default CheckoutBar;
