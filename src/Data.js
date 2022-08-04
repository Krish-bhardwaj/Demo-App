import { createContext, useContext, useState, useEffect } from 'react';

const Data = createContext();

const DefaultProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [products, setProducts] = useState([
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '1',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '2',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '3',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '4',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '5',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '6',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '7',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '8',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '9',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '10',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '12',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '13',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '14',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '15',
    },
    {
      name: "Title 1",
      image:
        'https://dummyimage.com/100x100',
      description: "Descripion 1",
      price: '1',
      id: '16',
    }
  ]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  useEffect(() => {
    if (user.length !== 0) {
      localStorage.setItem('user', user);
    }
  }, [user]);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <Data.Provider
      value={{ user, setUser, products, setProducts, cart, setCart }}
    >
      {children}
    </Data.Provider>
  );
};

export const DefaultState = () => {
  return useContext(Data);
};

export default DefaultProvider;
