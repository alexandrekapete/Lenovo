// Dados dos banners do HeroBanner
export const bannerData = [
    {
        id: 0,
        image: "/images/banner1.jpg",
        logo: "/images/logo.svg",
        subhead: "TECNOLOGIA INOVADORA",
        headline: "Descubra os produtos mais avançados da Lenovo para transformar sua experiência digital.",
        ctaText: "Explorar Produtos",
        ctaLink: "/products",
        alt: "Banner principal Lenovo"
    },
    {
        id: 1,
        image: "/images/banner2.jpg",
        logo: "/images/logo.svg",
        subhead: "IA MAIS INTELIGENTE PARA TODOS",
        headline: "A Lenovo libera o poder da IA pessoal e empresarial para construir um futuro mais inteligente.",
        ctaText: "Saiba Mais",
        ctaLink: "/ai-solutions",
        alt: "Soluções de IA Lenovo"
    },
    {
        id: 2,
        image: "/images/banner1.jpg",
        logo: "/images/logo.svg",
        subhead: "PRODUTIVIDADE SEM LIMITES",
        headline: "Equipamentos que acompanham seu ritmo e potencializam seus resultados.",
        ctaText: "Ver Ofertas",
        ctaLink: "/offers",
        alt: "Ofertas especiais Lenovo"
    }
];

// Funções utilitárias para banners
export const getBannerById = (id) => {
    return bannerData.find(banner => banner.id === id);
};

export const getActiveBanners = () => {
    // Aqui você pode adicionar lógica para filtrar banners ativos
    // Por exemplo, baseado em datas ou status
    return bannerData;
};

export const getBannersByCategory = (category) => {
    // Aqui você pode filtrar banners por categoria
    return bannerData.filter(banner =>
        banner.subhead.toLowerCase().includes(category.toLowerCase())
    );
}; 