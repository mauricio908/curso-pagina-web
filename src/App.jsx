import { useState, useMemo, useEffect } from 'react';
import ShippingPage from './components/ShippingPage';
import AuthPage from './components/AuthPage';
import PrivateGate from './components/PrivateGate';
import './App.css';

// Base de datos de perfumes variados
const PERFUMES_DATA = [
  {
    id: 1,
    name: 'Oud Royale Néctar',
    category: 'Nicho',
    gender: 'Unisex',
    family: 'Oriental Amaderado',
    vibe: 'oriental',
    price: 135,
    rating: 4.9,
    reviewsCount: 184,
    concentration: 'Extrait de Parfum',
    tag: 'Nicho',
    tagClass: 'tag-nicho',
    colorGradient: 'linear-gradient(135deg, #451a03 0%, #d4af37 100%)',
    topNotes: 'Azafrán, Nuez moscada',
    heartNotes: 'Madera de Oud, Rosa de Damasco',
    baseNotes: 'Ámbar gris, Pachulí dulce',
    longevity: '14+ Horas',
    sillage: 'Intensa & Envolvente',
    occasion: 'Eventos de Gala, Noches Frías'
  },
  {
    id: 2,
    name: 'Velvet Vanilla & Tobacco',
    category: 'Unisex',
    gender: 'Unisex',
    family: 'Gourmand Cálido',
    vibe: 'dulce',
    price: 110,
    rating: 4.9,
    reviewsCount: 230,
    concentration: 'Eau de Parfum',
    tag: 'Más Vendido',
    tagClass: 'tag-popular',
    colorGradient: 'linear-gradient(135deg, #78350f 0%, #f59e0b 100%)',
    topNotes: 'Hoja de Tabaco, Especias aromáticas',
    heartNotes: 'Haba Tonka, Flor del tabaco, Cacao',
    baseNotes: 'Vainilla Bourbon, Frutos secos',
    longevity: '12 Horas',
    sillage: 'Moderada a Pesada',
    occasion: 'Citas, Otoño/Invierno'
  },
  {
    id: 3,
    name: 'Aqua Di Capri',
    category: 'Hombre',
    gender: 'Hombre',
    family: 'Cítrico Marino',
    vibe: 'fresco',
    price: 88,
    rating: 4.8,
    reviewsCount: 142,
    concentration: 'Eau de Parfum',
    tag: 'Fresco',
    tagClass: 'tag-fresh',
    colorGradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    topNotes: 'Bergamota de Calabria, Limón siciliano',
    heartNotes: 'Sal Marina, Romero, Calone',
    baseNotes: 'Cedro del Atlas, Almizcle blanco',
    longevity: '8 a 10 Horas',
    sillage: 'Fresco & Radiante',
    occasion: 'Diario, Verano, Oficina'
  },
  {
    id: 4,
    name: 'Rose Sublime & Peony',
    category: 'Mujer',
    gender: 'Mujer',
    family: 'Floral Romántico',
    vibe: 'floral',
    price: 95,
    rating: 4.9,
    reviewsCount: 168,
    concentration: 'Eau de Parfum',
    tag: 'Floral',
    tagClass: 'tag-popular',
    colorGradient: 'linear-gradient(135deg, #be185d 0%, #f472b6 100%)',
    topNotes: 'Mandarina chispeante, Lichi dulce',
    heartNotes: 'Rosa de Grasse, Peonía blanca',
    baseNotes: 'Almizcle cristalino, Madera de cachemira',
    longevity: '9 Horas',
    sillage: 'Elegante & Delicada',
    occasion: 'Bodas, Primavera, Citas'
  },
  {
    id: 5,
    name: 'Noir Intemporel',
    category: 'Hombre',
    gender: 'Hombre',
    family: 'Cuero Especiado',
    vibe: 'amaderado',
    price: 105,
    rating: 4.8,
    reviewsCount: 115,
    concentration: 'Eau de Parfum',
    tag: 'Intenso',
    tagClass: 'tag-nicho',
    colorGradient: 'linear-gradient(135deg, #18181b 0%, #52525b 100%)',
    topNotes: 'Pimienta negra, Cardamomo de Guatemala',
    heartNotes: 'Cuero toscano ahumado, Iris florentino',
    baseNotes: 'Vetiver de Haití, Madera de cedro',
    longevity: '12 Horas',
    sillage: 'Imponente & Sofisticada',
    occasion: 'Reuniones de Negocios, Noche'
  },
  {
    id: 6,
    name: 'Soleil de Santal',
    category: 'Unisex',
    gender: 'Unisex',
    family: 'Amaderado Cremoso',
    vibe: 'amaderado',
    price: 120,
    rating: 4.9,
    reviewsCount: 98,
    concentration: 'Extrait de Parfum',
    tag: 'Elegante',
    tagClass: 'tag-nicho',
    colorGradient: 'linear-gradient(135deg, #854d0e 0%, #eab308 100%)',
    topNotes: 'Cardamomo verde, Papiro egipcio',
    heartNotes: 'Flor de Iris, Violeta silvestre',
    baseNotes: 'Sándalo australiano, Ámbar cálido',
    longevity: '13 Horas',
    sillage: 'Magnética & Cálida',
    occasion: 'Firma Personal, Todo el Año'
  },
  {
    id: 7,
    name: 'Santal Rouge Impérial',
    category: 'Mujer',
    gender: 'Mujer',
    family: 'Frutal Seductor',
    vibe: 'dulce',
    price: 128,
    rating: 5.0,
    reviewsCount: 156,
    concentration: 'Eau de Parfum',
    tag: 'Seductor',
    tagClass: 'tag-popular',
    colorGradient: 'linear-gradient(135deg, #881337 0%, #fb7185 100%)',
    topNotes: 'Cereza negra licorosa, Almendra amarga',
    heartNotes: 'Jazmín Sambac, Rosa turca',
    baseNotes: 'Haba tonka tostada, Pachulí oscuro',
    longevity: '11 Horas',
    sillage: 'Sensual & Duradera',
    occasion: 'Noche, Conquista, Fiestas'
  },
  {
    id: 8,
    name: 'Desert Mirage',
    category: 'Nicho',
    gender: 'Unisex',
    family: 'Ámbar & Especias Árabes',
    vibe: 'oriental',
    price: 145,
    rating: 4.9,
    reviewsCount: 87,
    concentration: 'Extrait de Parfum',
    tag: 'Árabe',
    tagClass: 'tag-nicho',
    colorGradient: 'linear-gradient(135deg, #713f12 0%, #ca8a04 100%)',
    topNotes: 'Azafrán persa, Canela de Ceilán',
    heartNotes: 'Incienso sagrado de Omán, Benjuí',
    baseNotes: 'Cuero dorado, Vainilla ahumada',
    longevity: '16+ Horas',
    sillage: 'Monumental',
    occasion: 'Ocasiones Especiales, Noches'
  }
];

export default function App() {
  // Navegación: 'shop', 'shipping', 'auth'
  const [activePage, setActivePage] = useState('shop');
  const [authInitialMode, setAuthInitialMode] = useState('login');

  // Estado de Usuarios y Autenticación con persistencia en localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('elixir_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('elixir_registered_users');
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: 1,
              name: 'Carolina Herrera',
              email: 'carolina@elixir.com',
              password: 'password123',
              preference: 'Nicho & Árabe',
              membership: 'Black Diamond VIP'
            }
          ];
    } catch {
      return [
        {
          id: 1,
          name: 'Carolina Herrera',
          email: 'carolina@elixir.com',
          password: 'password123',
          preference: 'Nicho & Árabe',
          membership: 'Black Diamond VIP'
        }
      ];
    }
  });

  // Guardar en localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('elixir_current_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('elixir_current_user');
      }
    } catch {
      // Ignorar errores de almacenamiento
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('elixir_registered_users', JSON.stringify(registeredUsers));
    } catch {
      // Ignorar errores de almacenamiento
    }
  }, [registeredUsers]);

  const handleLogout = () => {
    setCurrentUser(null);
    if (activePage === 'shipping') {
      setActivePage('shop');
    }
  };

  // Filtros
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedVibe, setSelectedVibe] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Carrito de compras
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Código promocional
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Modal de Detalle / Vista Rápida
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  // Modal de Checkout / Pasarela de Pagos
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingForm, setShippingForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  // Modal de confirmación de pedido
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Filtrado reactivo de productos
  const filteredProducts = useMemo(() => {
    return PERFUMES_DATA.filter((p) => {
      const matchCategory =
        selectedCategory === 'Todos' ||
        p.category === selectedCategory ||
        (selectedCategory === 'Hombre' && (p.gender === 'Hombre' || p.gender === 'Unisex')) ||
        (selectedCategory === 'Mujer' && (p.gender === 'Mujer' || p.gender === 'Unisex'));

      const matchVibe = selectedVibe === 'todos' || p.vibe === selectedVibe;

      const q = searchQuery.toLowerCase();
      const matchSearch =
        p.name.toLowerCase().includes(q) ||
        p.family.toLowerCase().includes(q) ||
        p.topNotes.toLowerCase().includes(q) ||
        p.heartNotes.toLowerCase().includes(q) ||
        p.baseNotes.toLowerCase().includes(q);

      return matchCategory && matchVibe && matchSearch;
    });
  }, [selectedCategory, selectedVibe, searchQuery]);

  // Manejadores del Carrito
  const addToCart = (perfume, size = '100ml') => {
    const finalPrice = size === '50ml' ? Math.round(perfume.price * 0.65) : perfume.price;
    const cartItemId = `${perfume.id}-${size}`;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevCart,
        {
          cartItemId,
          id: perfume.id,
          name: perfume.name,
          category: perfume.category,
          price: finalPrice,
          size,
          quantity: 1,
          colorGradient: perfume.colorGradient
        }
      ];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  // Cálculos del Carrito
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shipping = subtotal > 60 || subtotal === 0 ? 0 : 9.99;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Aplicar cupón de descuento
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ELIXIR15') {
      setDiscountPercent(15);
      setPromoMessage('✓ ¡Cupón ELIXIR15 aplicado (-15%)!');
    } else {
      setPromoMessage('✕ Cupón inválido. Prueba ELIXIR15');
    }
  };

  // Finalizar compra (WhatsApp o Confirmación)
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map((item) => `• ${item.quantity}x ${item.name} (${item.size}) - $${item.price * item.quantity}`)
      .join('\n');
    const msg = `¡Hola ÉLIXIR Parfums! Quiero realizar el siguiente pedido:\n\n${itemsList}\n\nSubtotal: $${subtotal}\nDescuento: -$${discountAmount}\nTotal a pagar: $${total}\n\n¿Cuáles son las opciones de pago y entrega?`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleOpenCheckout = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleCompletePayment = (e) => {
    if (e) e.preventDefault();
    setIsCheckoutModalOpen(false);
    setOrderConfirmed(true);
  };

  return (
    <div className="app-container">
      {/* Barra de Notificaciones Superior */}
      <aside className="top-banner" aria-label="Aviso de promoción">
        <span>✨ <strong>ENVÍO GRATIS</strong> en pedidos sobre $60 USD</span>
        <span>•</span>
        <span>🎁 2 Muestras de cortesía en cada pedido</span>
        <span>•</span>
        <span>Usa el código <strong>ELIXIR15</strong> para un 15% OFF</span>
      </aside>

      {/* Navegación Principal */}
      <header className="navbar">
        <div
          className="brand-wrapper"
          onClick={() => {
            setActivePage('shop');
            setSelectedCategory('Todos');
            setSelectedVibe('todos');
          }}
        >
          <div className="brand-title">ÉLIXIR</div>
          <div className="brand-subtitle">HAUTE PARFUMERIE</div>
        </div>

        {/* Enlaces de Navegación entre Páginas */}
        <nav className="nav-links">
          <button
            type="button"
            className={`nav-link-btn ${activePage === 'shop' ? 'active' : ''}`}
            onClick={() => setActivePage('shop')}
          >
            🛍️ Catálogo
          </button>
          <button
            type="button"
            className={`nav-link-btn ${activePage === 'shipping' ? 'active' : ''}`}
            onClick={() => setActivePage('shipping')}
          >
            <span>🚚 Envíos & Logística</span>
            {!currentUser && (
              <span style={{ fontSize: '10px', background: 'rgba(212, 175, 55, 0.2)', padding: '2px 6px', borderRadius: '4px', color: '#f3e5ab' }}>
                🔒 Privado
              </span>
            )}
          </button>
        </nav>

        <div className="nav-actions">
          {activePage === 'shop' && (
            <div className="search-bar-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Buscar perfume, nota o aroma..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          {/* Autenticación / Perfil */}
          {currentUser ? (
            <div className="user-nav-badge">
              <span>👤 {currentUser.name.split(' ')[0]}</span>
              <button
                type="button"
                className="logout-btn"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                Salir
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="btn-outline-gold"
                style={{ padding: '7px 14px', fontSize: '12px' }}
                onClick={() => {
                  setAuthInitialMode('login');
                  setActivePage('auth');
                }}
              >
                Ingresar
              </button>
              <button
                type="button"
                className="btn-gold"
                style={{ padding: '7px 14px', fontSize: '12px' }}
                onClick={() => {
                  setAuthInitialMode('register');
                  setActivePage('auth');
                }}
              >
                Registrarse
              </button>
            </div>
          )}

          <button
            type="button"
            className="cart-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrito de compras"
          >
            <span>🛍️</span>
            <span>Bolsa ({totalItemsCount})</span>
            {totalItemsCount > 0 && <span className="cart-badge">${subtotal}</span>}
          </button>
        </div>
      </header>

      {/* Vistas según la página activa */}
      {activePage === 'shop' && (
        <>
          {/* Hero Principal de Ventas */}
      <section className="hero-sales">
        <div>
          <div className="hero-pill">
            <span>👑</span> Fragancias de Autor & Concentración Extrait
          </div>
          <h1 className="hero-title">
            El Arte de la <span>Distinción</span> Olfativa
          </h1>
          <p className="hero-desc">
            Explora una selección curada de perfumes de alta gama, maderas preciosas, vainillas exóticas y cítricos del Mediterráneo. Deja una huella imborrable dondequiera que vayas.
          </p>
          <div className="hero-cta-group">
            <a href="#catalogo" className="btn-gold">
              Ver Catálogo Completo ▾
            </a>
            <button
              type="button"
              className="btn-outline-gold"
              onClick={() => setSelectedProductModal(PERFUMES_DATA[0])}
            >
              Conocer Fragancia Insignia
            </button>
          </div>
        </div>

        <div className="hero-bottle-card">
          <div className="bottle-visual">
            <div className="bottle-cap"></div>
            <div className="bottle-badge">OUD ROYALE</div>
          </div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#f3e5ab' }}>
            Oud Royale Néctar
          </div>
          <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>
            Extrait de Parfum • 14h de Longevidad
          </div>
          <div style={{ marginTop: '14px', fontSize: '20px', fontWeight: 800, color: 'white' }}>
            $135.00 USD
          </div>
          <button
            type="button"
            className="btn-gold"
            style={{ marginTop: '12px', padding: '10px 20px', fontSize: '13px' }}
            onClick={() => addToCart(PERFUMES_DATA[0])}
          >
            + Agregar a mi Bolsa
          </button>
        </div>
      </section>

      {/* Asistente Olfativo: Encuentra tu Aroma Ideal */}
      <section className="scent-finder-box">
        <div className="finder-header">
          <div>
            <h3 style={{ fontSize: '22px' }}>¿Qué vibra aromática buscas hoy?</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              Filtra instantáneamente según el perfil sensorial que mejor te identifique.
            </p>
          </div>
          <span style={{ fontSize: '12px', color: '#d4af37', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Asistente de Fragancias
          </span>
        </div>

        <div className="finder-pills">
          {[
            { id: 'todos', label: '✦ Todos los Aromas', icon: '✨' },
            { id: 'oriental', label: 'Maderas & Oud Intenso', icon: '🪵' },
            { id: 'dulce', label: 'Vainilla & Gourmand', icon: '🍦' },
            { id: 'fresco', label: 'Cítricos & Marino', icon: '🌊' },
            { id: 'floral', label: 'Rosas & Flores Blancas', icon: '🌹' },
            { id: 'amaderado', label: 'Cuero & Especias', icon: '🔥' }
          ].map((vibe) => (
            <button
              key={vibe.id}
              type="button"
              className={`finder-pill ${selectedVibe === vibe.id ? 'active' : ''}`}
              onClick={() => setSelectedVibe(vibe.id)}
            >
              <span>{vibe.icon}</span>
              <span>{vibe.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Barra de Categorías */}
      <section id="catalogo">
        <div className="category-filter-bar">
          <div className="category-tabs">
            {['Todos', 'Mujer', 'Hombre', 'Unisex', 'Nicho'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '13px', color: '#94a3b8' }}>
            Mostrando <strong>{filteredProducts.length}</strong> fragancias disponibles
          </div>
        </div>

        {/* Grid de Perfumes */}
        <div className="catalog-grid" style={{ marginTop: '24px' }}>
          {filteredProducts.map((perfume) => (
            <article key={perfume.id} className="product-card">
              <span className={`product-tag ${perfume.tagClass}`}>{perfume.tag}</span>

              <div
                className="product-img-wrapper"
                onClick={() => setSelectedProductModal(perfume)}
                style={{ cursor: 'pointer' }}
                title="Ver detalles olfativos"
              >
                <div
                  className="perfume-illustration"
                  style={{
                    background: perfume.colorGradient,
                    boxShadow: '0 0 25px rgba(212, 175, 55, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      width: '32px',
                      height: '18px',
                      background: '#d4af37',
                      borderRadius: '4px'
                    }}
                  ></div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: 'white',
                      textAlign: 'center',
                      padding: '0 8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    {perfume.name.split(' ')[0]}
                  </span>
                </div>
              </div>

              <div className="product-info">
                <span className="product-category-label">
                  {perfume.gender} • {perfume.concentration}
                </span>
                <h4
                  className="product-title"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProductModal(perfume)}
                >
                  {perfume.name}
                </h4>
                <div className="product-rating">
                  <span>★ {perfume.rating}</span>
                  <span style={{ color: '#64748b' }}>({perfume.reviewsCount} reseñas)</span>
                </div>
                <p className="product-notes">
                  <strong>Notas:</strong> {perfume.heartNotes}, {perfume.baseNotes}
                </p>
              </div>

              <div className="product-footer">
                <div>
                  <div className="product-price">${perfume.price}.00</div>
                  <span className="product-size-label">100ml / 3.4 oz</span>
                </div>
                <button
                  type="button"
                  className="btn-add-cart"
                  onClick={() => addToCart(perfume)}
                >
                  + Agregar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Garantías de Lujo */}
      <section className="guarantees-strip">
        <div className="guarantee-card">
          <div className="guarantee-icon">🛡️</div>
          <div>
            <h4 style={{ fontSize: '16px', color: 'white' }}>100% Originales & Sellados</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>
              Autenticidad garantizada con lote y código batch verificable.
            </p>
          </div>
        </div>

        <div className="guarantee-card">
          <div className="guarantee-icon">✈️</div>
          <div>
            <h4 style={{ fontSize: '16px', color: 'white' }}>Envío Exprés Asegurado</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>
              Embalaje reforzado contra golpes y entrega rápida en 24 a 48h.
            </p>
          </div>
        </div>

        <div className="guarantee-card">
          <div className="guarantee-icon">💎</div>
          <div>
            <h4 style={{ fontSize: '16px', color: 'white' }}>Muestras de Regalo</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>
              Recibe 2 decants de 2ml para descubrir nuevas creaciones.
            </p>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Vista de Envíos y Logística (Privada) */}
      {activePage === 'shipping' && (
        currentUser ? (
          <ShippingPage currentUser={currentUser} />
        ) : (
          <PrivateGate
            onGoLogin={() => {
              setAuthInitialMode('login');
              setActivePage('auth');
            }}
            onGoRegister={() => {
              setAuthInitialMode('register');
              setActivePage('auth');
            }}
            onBackShop={() => setActivePage('shop')}
          />
        )
      )}

      {/* Vista de Autenticación (Login / Registro) */}
      {activePage === 'auth' && (
        <AuthPage
          initialMode={authInitialMode}
          registeredUsers={registeredUsers}
          onLoginSuccess={(user) => {
            setCurrentUser(user);
            setActivePage('shipping');
          }}
          onRegisterUser={(newUser) => {
            setRegisteredUsers((prev) => [...prev, newUser]);
          }}
          onNavigateShop={() => setActivePage('shop')}
        />
      )}

      {/* Drawer del Carrito */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3 style={{ fontSize: '22px' }}>Tu Bolsa de Compras ({totalItemsCount})</h3>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛍️</div>
                <p style={{ fontSize: '16px', color: 'white', fontWeight: 600 }}>Tu bolsa está vacía</p>
                <p style={{ fontSize: '13px', marginTop: '6px' }}>Explora nuestras fragancias y elige tu favorita.</p>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.cartItemId} className="cart-item">
                      <div
                        style={{
                          width: '42px',
                          height: '54px',
                          borderRadius: '6px',
                          background: item.colorGradient,
                          flexShrink: 0
                        }}
                      ></div>
                      <div className="cart-item-info">
                        <div className="cart-item-title">{item.name}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>Presentación: {item.size}</div>
                        <div className="cart-item-price">${item.price * item.quantity}.00</div>
                      </div>
                      <div className="qty-control">
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.cartItemId, -1)}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '13px', fontWeight: 600 }}>{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn"
                          onClick={() => updateQuantity(item.cartItemId, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.cartItemId)}
                        style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '14px' }}
                        title="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="promo-row">
                    <input
                      type="text"
                      className="promo-input"
                      placeholder="Código promocional (ELIXIR15)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn-add-cart"
                      onClick={handleApplyPromo}
                      style={{ padding: '6px 12px' }}
                    >
                      Aplicar
                    </button>
                  </div>
                  {promoMessage && (
                    <div style={{ fontSize: '12px', color: discountPercent > 0 ? '#34d399' : '#f87171' }}>
                      {promoMessage}
                    </div>
                  )}

                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal}.00</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="summary-row" style={{ color: '#34d399' }}>
                      <span>Descuento Especial (-{discountPercent}%)</span>
                      <span>-${discountAmount}.00</span>
                    </div>
                  )}

                  <div className="summary-row">
                    <span>Envío</span>
                    <span>{shipping === 0 ? 'GRATIS' : `$${shipping}`}</span>
                  </div>

                  <div className="summary-row summary-total">
                    <span>Total Estimado</span>
                    <span style={{ color: '#d4af37' }}>${total}.00 USD</span>
                  </div>

                  <button
                    type="button"
                    className="btn-gold"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={handleOpenCheckout}
                  >
                    Proceder al Pago en Línea 🔒
                  </button>

                  <button
                    type="button"
                    className="btn-outline-gold"
                    style={{ width: '100%', justifyContent: 'center', borderColor: '#25d366', color: '#25d366' }}
                    onClick={handleCheckoutWhatsApp}
                  >
                    Pedir por WhatsApp 💬
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal de Detalle Olfativo */}
      {selectedProductModal && (
        <div className="modal-overlay" onClick={() => setSelectedProductModal(null)}>
          <div className="confirmation-card" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'left', maxWidth: '540px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="hero-pill" style={{ margin: 0 }}>
                {selectedProductModal.concentration}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '20px', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '28px', color: 'white', marginBottom: '4px' }}>
              {selectedProductModal.name}
            </h3>
            <div style={{ color: '#d4af37', fontSize: '14px', marginBottom: '16px' }}>
              Familia: {selectedProductModal.family} • Para {selectedProductModal.gender}
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
              <h5 style={{ color: '#f3e5ab', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                Pirámide Olfativa
              </h5>
              <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '6px' }}>
                <strong>Salida (Primeros 15 min):</strong> {selectedProductModal.topNotes}
              </p>
              <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '6px' }}>
                <strong>Corazón (Evolución 2-4h):</strong> {selectedProductModal.heartNotes}
              </p>
              <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                <strong>Fondo (Fijación 8-14h):</strong> {selectedProductModal.baseNotes}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
              <div>
                <strong>Duración en piel:</strong> {selectedProductModal.longevity}
              </div>
              <div>
                <strong>Estela / Proyección:</strong> {selectedProductModal.sillage}
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <strong>Ocasión sugerida:</strong> {selectedProductModal.occasion}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                type="button"
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  addToCart(selectedProductModal);
                  setSelectedProductModal(null);
                }}
              >
                Agregar a la Bolsa (${selectedProductModal.price}.00)
              </button>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={() => {
                  addToCart(selectedProductModal, '50ml');
                  setSelectedProductModal(null);
                }}
              >
                Opción 50ml (${Math.round(selectedProductModal.price * 0.65)}.00)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Checkout / Pasarela de Pago */}
      {isCheckoutModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCheckoutModalOpen(false)}>
          <div className="confirmation-card" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'left', maxWidth: '520px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '24px', color: 'white' }}>Finalizar Compra</h3>
              <button
                type="button"
                onClick={() => setIsCheckoutModalOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '20px', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCompletePayment} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carolina Herrera"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={shippingForm.name}
                  onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11..."
                    className="search-input"
                    style={{ width: '100%', paddingLeft: '14px' }}
                    value={shippingForm.phone}
                    onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                    Ciudad
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu Ciudad"
                    className="search-input"
                    style={{ width: '100%', paddingLeft: '14px' }}
                    value={shippingForm.city}
                    onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Dirección de Entrega
                </label>
                <input
                  type="text"
                  required
                  placeholder="Calle, número, depto / piso"
                  className="search-input"
                  style={{ width: '100%', paddingLeft: '14px' }}
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
                  Método de Pago
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'card', label: '💳 Tarjeta' },
                    { id: 'mercadopago', label: '💙 Mercado Pago' },
                    { id: 'transfer', label: '🏦 Transferencia' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      className={`finder-pill ${paymentMethod === m.id ? 'active' : ''}`}
                      style={{ justifyContent: 'center', padding: '8px 4px', fontSize: '12px' }}
                      onClick={() => setPaymentMethod(m.id)}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-gold)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#cbd5e1' }}>Total a pagar:</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: '#f3e5ab' }}>${total}.00 USD</span>
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
              >
                Confirmar y Pagar Pedido 🔒
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Pedido Confirmado */}
      {orderConfirmed && (
        <div className="modal-overlay" onClick={() => setOrderConfirmed(false)}>
          <div className="confirmation-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: '48px', marginBottom: '14px' }}>✨</div>
            <h3 style={{ fontSize: '26px', color: 'white', marginBottom: '8px' }}>
              ¡Orden Registrada con Éxito!
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
              Gracias por tu compra en <strong>ÉLIXIR Parfums</strong>. Tu paquete exclusivo ya está en preparación con sus muestras de regalo.
            </p>
            <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '14px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px', color: '#f3e5ab' }}>
              Total procesado: <strong>${total}.00 USD</strong>
            </div>
            <button
              type="button"
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                setOrderConfirmed(false);
                setCart([]);
              }}
            >
              Continuar Explorando
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div>
          © 2026 <strong>ÉLIXIR Parfums</strong> • Alta Perfumería & Fragancias de Autor. Todos los derechos reservados.
        </div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            type="button"
            className="link-button"
            onClick={() => setActivePage('shop')}
            style={{ color: activePage === 'shop' ? '#d4af37' : '#94a3b8', fontSize: '13px' }}
          >
            Catálogo
          </button>
          <span>•</span>
          <button
            type="button"
            className="link-button"
            onClick={() => setActivePage('shipping')}
            style={{ color: activePage === 'shipping' ? '#d4af37' : '#94a3b8', fontSize: '13px' }}
          >
            Envíos Privados 🔒
          </button>
          <span>•</span>
          <button
            type="button"
            className="link-button"
            onClick={() => {
              if (currentUser) {
                setActivePage('shipping');
              } else {
                setAuthInitialMode('login');
                setActivePage('auth');
              }
            }}
            style={{ color: activePage === 'auth' ? '#d4af37' : '#94a3b8', fontSize: '13px' }}
          >
            {currentUser ? `Mi Cuenta (${currentUser.name.split(' ')[0]})` : 'Iniciar Sesión'}
          </button>
        </div>
      </footer>
    </div>
  );
}
