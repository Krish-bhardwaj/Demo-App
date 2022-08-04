import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { IoMdArrowDropup } from 'react-icons/io';
import React from 'react';
import Cart from './Cart';
import { DefaultState } from '../Data';
import LoginModal from './ModalPhNoInput';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
  const { cart, user } = DefaultState();

  const navigate = useNavigate();

  return (
    <Box
      height={'60px'}
      bg={'green.500'}
      display={'flex'}
      paddingX={{ base: 5, md: 10 }}
      paddingY={3}
      color={'white'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      {
        <Cart>
          <Button
            variant={'solid'}
            bg={'green.700'}
            _hover={{ bg: 'green.700' }}
            rightIcon={<IoMdArrowDropup fontSize={20} />}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            {cart.reduce((acc, value) => acc + value.quantity, 0)} Items
          </Button>
        </Cart>
      }
      {user && (
        <Button
          variant={'unstyled'}
          rightIcon={<BsArrowRight fontSize={25} />}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          padding="10px 20px"
          onClick={() => navigate('/checkout')}
          disabled={cart.length === 0}
        >
          Continue
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

export default AppBar;
