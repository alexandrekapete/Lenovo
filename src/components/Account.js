import React, { useState } from 'react';
import { FaUser, FaHistory, FaHeart, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Account = () => {
    const [activeTab, setActiveTab] = useState('profile');
    
    const tabs = [
        { id: 'profile', icon: <FaUser />, label: 'Meu Perfil' },
        { id: 'orders', icon: <FaHistory />, label: 'Meus Pedidos' },
        { id: 'wishlist', icon: <FaHeart />, label: 'Lista de Desejos' },
        { id: 'settings', icon: <FaCog />, label: 'Configurações' }
    ];

    return (
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '32px 16px',
            display: 'flex',
            gap: '32px'
        }}>
            <div style={{ flex: 1, maxWidth: '250px' }}>
                <div style={{ 
                    background: '#fff', 
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    overflow: 'hidden'
                }}>
                    <div style={{ 
                        background: '#e60012', 
                        color: '#fff', 
                        padding: '24px',
                        textAlign: 'center'
                    }}>
                        <div style={{ 
                            width: '80px', 
                            height: '80px', 
                            background: '#fff', 
                            borderRadius: '50%',
                            margin: '0 auto 16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#e60012',
                            fontSize: '2rem'
                        }}>
                            <FaUser />
                        </div>
                        <h3 style={{ margin: 0 }}>João Silva</h3>
                        <p style={{ margin: '4px 0 0', opacity: 0.8 }}>joao.silva@email.com</p>
                    </div>
                    
                    <nav style={{ padding: '16px 0' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {tabs.map(tab => (
                                <li key={tab.id}>
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{ 
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            width: '100%',
                                            padding: '12px 24px',
                                            background: activeTab === tab.id ? '#f5f5f5' : 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            transition: 'background 0.2s'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
                                        <span>{tab.label}</span>
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    style={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        width: '100%',
                                        padding: '12px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        color: '#e60012',
                                        marginTop: '8px'
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem' }}><FaSignOutAlt /></span>
                                    <span>Sair</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div style={{ flex: 3 }}>
                {activeTab === 'profile' && (
                    <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        padding: '24px'
                    }}>
                        <h2 style={{ marginTop: 0 }}>Meu Perfil</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="firstName" style={{ display: 'block', marginBottom: '4px' }}>Nome</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        defaultValue="João"
                                        style={{ 
                                            width: '100%', 
                                            padding: '10px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px' 
                                        }}
                                        required
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label htmlFor="lastName" style={{ display: 'block', marginBottom: '4px' }}>Sobrenome</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        defaultValue="Silva"
                                        style={{ 
                                            width: '100%', 
                                            padding: '10px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px' 
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '4px' }}>E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    defaultValue="joao.silva@email.com"
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px', 
                                        border: '1px solid #ddd', 
                                        borderRadius: '4px' 
                                    }}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '4px' }}>Telefone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    defaultValue="(11) 99999-9999"
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px', 
                                        border: '1px solid #ddd', 
                                        borderRadius: '4px' 
                                    }}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="cpf" style={{ display: 'block', marginBottom: '4px' }}>CPF</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    defaultValue="123.456.789-00"
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px', 
                                        border: '1px solid #ddd', 
                                        borderRadius: '4px' 
                                    }}
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit"
                                style={{ 
                                    background: '#e60012', 
                                    color: '#fff', 
                                    border: 'none', 
                                    padding: '12px', 
                                    borderRadius: '6px', 
                                    fontWeight: 'bold', 
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    marginTop: '16px',
                                    alignSelf: 'flex-start',
                                    minWidth: '150px'
                                }}
                            >
                                Salvar Alterações
                            </button>
                        </form>
                    </div>
                )}
                
                {activeTab === 'orders' && (
                    <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        padding: '24px'
                    }}>
                        <h2 style={{ marginTop: 0 }}>Meus Pedidos</h2>
                        <p>Você ainda não fez nenhum pedido.</p>
                    </div>
                )}
                
                {activeTab === 'wishlist' && (
                    <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        padding: '24px'
                    }}>
                        <h2 style={{ marginTop: 0 }}>Lista de Desejos</h2>
                        <p>Sua lista de desejos está vazia.</p>
                    </div>
                )}
                
                {activeTab === 'settings' && (
                    <div style={{ 
                        background: '#fff', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        padding: '24px'
                    }}>
                        <h2 style={{ marginTop: 0 }}>Configurações</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <h3 style={{ marginBottom: '16px' }}>Alterar Senha</h3>
                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="currentPassword" style={{ display: 'block', marginBottom: '4px' }}>Senha Atual</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        style={{ 
                                            width: '100%', 
                                            padding: '10px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px' 
                                        }}
                                        required
                                    />
                                </div>
                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '4px' }}>Nova Senha</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        style={{ 
                                            width: '100%', 
                                            padding: '10px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px' 
                                        }}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '4px' }}>Confirmar Nova Senha</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        style={{ 
                                            width: '100%', 
                                            padding: '10px', 
                                            border: '1px solid #ddd', 
                                            borderRadius: '4px' 
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <h3 style={{ marginBottom: '16px' }}>Preferências de Comunicação</h3>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <input type="checkbox" />
                                    <span>Desejo receber ofertas e novidades por e-mail</span>
                                </label>
                            </div>
                            
                            <button 
                                type="submit"
                                style={{ 
                                    background: '#e60012', 
                                    color: '#fff', 
                                    border: 'none', 
                                    padding: '12px', 
                                    borderRadius: '6px', 
                                    fontWeight: 'bold', 
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    marginTop: '16px',
                                    alignSelf: 'flex-start',
                                    minWidth: '150px'
                                }}
                            >
                                Salvar Configurações
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Account;