import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsCategory from './components/ProductsCategory';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Account from './components/Account';
import NotFound from './components/NotFound';
import Home from './pages/Home'; 
const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos/:category" element={<ProductsCategory />} />
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/conta" element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;