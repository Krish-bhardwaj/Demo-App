import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import DefaultProvider from './Data';
import './styles.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <DefaultProvider>
          <App />
        </DefaultProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
