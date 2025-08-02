import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const { getCartCount } = useCart();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="lenovo-header">
                <div className="lenovo-logo">
                    <Link to="/">
                        <div className="lenovo-logo-red">
                            <span>Lenovo</span>
                        </div>
                    </Link>
                </div>
                
                <div className={`lenovo-search ${isSearchFocused ? 'focused' : ''}`}>
                    <input 
                        type="text" 
                        placeholder="Procurar" 
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                    <button>
                        <FaSearch />
                    </button>
                </div>
                
                <div className="lenovo-icons">
                    <div className="lenovo-account">
                        <FaUser />
                        <span className="desktop-text">Iniciar sessão / Criar conta</span>
                    </div>
                    <div className="lenovo-wishlist">
                        <FaHeart />
                    </div>
                    <Link to="/carrinho" className="lenovo-cart">
                        <FaShoppingCart />
                        <span className="desktop-text">Carrinho ({getCartCount()})</span>
                    </Link>
                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </header>
            
            <nav className={`lenovo-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul className="lenovo-nav-main">
                    <li><Link to="/produtos">Produtos <FaChevronDown size={12} /></Link></li>
                    <li><Link to="/solucoes">Soluções <FaChevronDown size={12} /></Link></li>
                    <li><Link to="/servicos">Serviços <FaChevronDown size={12} /></Link></li>
                    <li><Link to="/suporte">Suporte <FaChevronDown size={12} /></Link></li>
                    <li><Link to="/sobre">Sobre Lenovo <FaChevronDown size={12} /></Link></li>
                    <li><Link to="/promocoes" className="nav-promocoes">Promoções</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Header;