import { useState, useMemo, useEffect } from 'react';
import { PERFUMES_DATA } from './data/perfumes';
import Header from './components/Header';
import HeroEditorial from './components/HeroEditorial';
import CatalogSection from './components/CatalogSection';
import ProductDetailPage from './components/ProductDetailPage';
import WishlistModal from './components/WishlistModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import ConnoisseurReviews from './components/ConnoisseurReviews';
import VipNewsletter from './components/VipNewsletter';
import Footer from './components/Footer';
import ShippingPage from './components/ShippingPage';
import AuthPage from './components/AuthPage';
import PrivateGate from './components/PrivateGate';
import './App.css';

export default function App() {
  // Navegación principal: 'shop', 'pdp', 'shipping', 'auth'
  const [activePage, setActivePage] = useState('shop');
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtros de Catálogo
  const [selectedFamily, setSelectedFamily] = useState('todos');
  const [selectedConcentration, setSelectedConcentration] = useState('todos');
  const [sortBy, setSortBy] = useState('featured');

  // Estado de Usuarios con persistencia en localStorage
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

  // Lista de deseos (Wishlist) con persistencia
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('elixir_wishlist');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('elixir_wishlist', JSON.stringify(wishlist));
    } catch {
      // Ignorar errores
    }
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Guardar usuarios en localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('elixir_current_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('elixir_current_user');
      }
    } catch {
      // Ignorar errores
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem('elixir_registered_users', JSON.stringify(registeredUsers));
    } catch {
      // Ignorar errores
    }
  }, [registeredUsers]);

  const handleLogout = () => {
    setCurrentUser(null);
    if (activePage === 'shipping') {
      setActivePage('shop');
    }
  };

  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setActivePage('auth');
  };

  const handleResetFilters = () => {
    setSelectedFamily('todos');
    setSelectedConcentration('todos');
    setSortBy('featured');
  };

  // Carrito de compras
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Descuentos y promociones
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Modales Checkout
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Formulario de Envío
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingForm, setShippingForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  // Filtrado y ordenamiento reactivo
  const filteredProducts = useMemo(() => {
    const list = PERFUMES_DATA.filter((p) => {
      const matchFamily = selectedFamily === 'todos' || p.familyCategory === selectedFamily;
      const matchConcentration = selectedConcentration === 'todos' || p.concentrationCode === selectedConcentration;
      return matchFamily && matchConcentration;
    });

    if (sortBy === 'price-asc') {
      return [...list].sort((a, b) => a.defaultPrice - b.defaultPrice);
    }
    if (sortBy === 'price-desc') {
      return [...list].sort((a, b) => b.defaultPrice - a.defaultPrice);
    }
    if (sortBy === 'rating') {
      return [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [selectedFamily, selectedConcentration, sortBy]);

  // Manejo de Carrito con soporte de 30ml, 50ml, 100ml
  const addToCart = (perfume, size = '100ml') => {
    const finalPrice = perfume.prices[size] || perfume.defaultPrice;
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
          brand: perfume.brand,
          family: perfume.family,
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

  // Cálculos de Totales
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 9.99;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Cupón
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ELIXIR15') {
      setDiscountPercent(15);
      setPromoMessage('✓ ¡Cupón ELIXIR15 aplicado (-15%)!');
    } else {
      setPromoMessage('✕ Cupón inválido. Prueba ELIXIR15');
    }
  };

  // Pedidos por WhatsApp
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    const itemsList = cart
      .map((item) => `• ${item.quantity}x ${item.name} (${item.size}) - $${item.price * item.quantity}`)
      .join('\n');
    const msg = `¡Hola ÉLIXIR Haute Parfumerie! Deseo encargar el siguiente pedido exclusivo:\n\n${itemsList}\n\nSubtotal: $${subtotal}\nDescuento: -$${discountAmount}\nTotal: $${total} USD\n\n¿Me confirman medios de pago y tiempos de entrega?`;
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

  // Navegar a la Ficha de Producto (PDP)
  const handleViewPDP = (product) => {
    setSelectedProduct(product);
    setActivePage('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Header Minimalista con Buscador Predictivo */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        selectedFamily={selectedFamily}
        onSelectFamily={setSelectedFamily}
        perfumesData={PERFUMES_DATA}
        onSelectProduct={handleViewPDP}
        totalItemsCount={totalItemsCount}
        subtotal={subtotal}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenAuth={handleOpenAuth}
      />

      <main className="main-content" id="main-content">
        {/* VISTA 1: PORTADA EDITORIAL (HOME) */}
        {activePage === 'shop' && (
          <div className="shop-view-wrapper">
            {/* Hero Editorial con Fragancia Destacada y Barra de Confianza */}
            <HeroEditorial
              onExploreCatalog={() => {
                const el = document.getElementById('catalogo');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectProduct={handleViewPDP}
              heroProduct={PERFUMES_DATA[0]}
            />

            {/* Catálogo Filtrable por Familia & Concentración */}
            <CatalogSection
              perfumes={filteredProducts}
              selectedFamily={selectedFamily}
              onSelectFamily={setSelectedFamily}
              selectedConcentration={selectedConcentration}
              onSelectConcentration={setSelectedConcentration}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onSelectProduct={handleViewPDP}
              onAddToCart={addToCart}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
              onResetFilters={handleResetFilters}
            />

            {/* Reseñas y Veredicto de Críticos */}
            <ConnoisseurReviews />

            {/* Suscripción VIP */}
            <VipNewsletter />
          </div>
        )}

        {/* VISTA 2: FICHA DE PRODUCTO EDITORIAL (PDP) */}
        {activePage === 'pdp' && selectedProduct && (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => setActivePage('shop')}
            onAddToCart={addToCart}
            isWishlisted={wishlist.includes(selectedProduct.id)}
            onToggleWishlist={toggleWishlist}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {/* VISTA 3: LOGÍSTICA & ENVÍOS (PRIVADO VIP) */}
        {activePage === 'shipping' && (
          currentUser ? (
            <ShippingPage currentUser={currentUser} />
          ) : (
            <PrivateGate
              onGoLogin={() => handleOpenAuth('login')}
              onGoRegister={() => handleOpenAuth('register')}
              onBackShop={() => setActivePage('shop')}
            />
          )
        )}

        {/* VISTA 4: AUTENTICACIÓN VIP */}
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
      </main>

      {/* Drawer del Carrito Deslizable */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totalItemsCount={totalItemsCount}
        subtotal={subtotal}
        discountPercent={discountPercent}
        discountAmount={discountAmount}
        shipping={shipping}
        total={total}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        promoMessage={promoMessage}
        onApplyPromo={handleApplyPromo}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onOpenCheckout={handleOpenCheckout}
        onCheckoutWhatsApp={handleCheckoutWhatsApp}
      />

      {/* Modal de Lista de Deseos (Wishlist) */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        perfumesData={PERFUMES_DATA}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        onSelectProduct={handleViewPDP}
      />

      {/* Modal de Pasarela de Pago */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        shippingForm={shippingForm}
        setShippingForm={setShippingForm}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        total={total}
        onCompletePayment={handleCompletePayment}
      />

      {/* Modal de Confirmación de Pedido */}
      <OrderConfirmationModal
        isOpen={orderConfirmed}
        total={total}
        onClose={() => {
          setOrderConfirmed(false);
          setCart([]);
        }}
      />

      {/* Pie de Página Minimalista */}
      <Footer
        activePage={activePage}
        setActivePage={setActivePage}
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
      />
    </div>
  );
}
