import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import {CartProvider} from './context/CartContext';

const App = () => (
  <CartProvider>
    <AppNavigation />
  </CartProvider>
);

export default App;
