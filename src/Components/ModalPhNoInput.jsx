import React from 'react';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  Button,
  InputGroup,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react';
import { DefaultState } from '../Data';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setUser } = DefaultState();
  const navigation = useNavigate();

  const toast = useToast();

  const [phoneNo, setPhoneNo] = React.useState('');

  const submitForm = () => {
    if (phoneNo.length === 0) {
      toast({
        title: 'Error',
        description: 'Phone number is required',
        status: 'error',
        duration: 1000,
        position: 'top',
      });
    } else if (phoneNo.length !== 10) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid phone number',
        status: 'error',
        duration: 1000,
        position: 'top',
      });
    } else {
      setUser(phoneNo);
      setPhoneNo('');
      navigation('/checkout');
      onClose();
    }
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'sm'}>
        <ModalOverlay />
        <ModalContent bg="gray.50" margin={5}>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  placeholder="Enter yout phone number"
                  value={phoneNo}
                  onChange={e => setPhoneNo(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant={'solid'}
              bg={'green.600'}
              _hover={{ bg: 'green.700' }}
              _active={{ bg: 'green.800' }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              color={'white'}
              onClick={() => submitForm()}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
