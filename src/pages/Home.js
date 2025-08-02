import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTag, FaLaptop, FaMobile, FaServer, FaHeadset, FaCheckCircle, FaUsers, FaGamepad, FaGraduationCap, FaCar, FaWind } from 'react-icons/fa';
import { lenovoData } from '../data/lenovoData';
import HeroBanner from '../components/HeroBanner';
import '../styles/Home.css';

const Home = () => {
    const exploreCategories = [
        { name: "Promoções", icon: FaTag, link: "/promocoes" },
        { name: "PCs & Tablets", icon: FaLaptop, link: "/produtos/notebooks" },
        { name: "Smartphones", icon: FaMobile, link: "/produtos/smartphones" },
        { name: "Servidores e Armazenamento", icon: FaServer, link: "/produtos/servidores" },
        { name: "Serviços", icon: FaHeadset, link: "/servicos" },
        { name: "Suporte", icon: FaCheckCircle, link: "/suporte" }
    ];



    const potentialCards = [
        {
            title: "Parceria Inovadora",
            description: "Redefinindo as possibilidades com nossa tecnologia.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            buttonText: "Saiba Mais",
            link: "/parceria"
        },
        {
            title: "Nosso Impacto",
            description: "Comprometidos com a responsabilidade social.",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            buttonText: "Saiba Mais",
            link: "/impacto"
        }
    ];

    return (
        <div className="home">
            {/* Hero Banner */}
            <HeroBanner />

            {/* Explore Lenovo Section */}
            <section className="explore-lenovo">
                <div className="container">
                    <h2>Explore a Lenovo</h2>
                    <div className="explore-grid">
                        {exploreCategories.map((category, index) => (
                            <Link key={index} to={category.link} className="explore-item">
                                <div className="explore-icon">
                                    <category.icon />
                                </div>
                                <span>{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* Potential Section */}
            <section className="potential-section">
                <div className="container">
                    <h2>Aumente seu potencial por meio da tecnologia</h2>
                    <p className="potential-subtitle">Nossos valores</p>
                    <div className="potential-grid">
                        {potentialCards.map((card, index) => (
                            <div key={index} className="potential-card">
                                <div className="potential-image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="potential-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <Link to={card.link} className="potential-button">
                                        {card.buttonText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;