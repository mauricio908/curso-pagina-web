import { useState, useRef, useEffect } from 'react';
import { IconSearch, IconBag, IconHeart, IconLock, IconUser, IconClose } from './Icons';

export default function Header({
  activePage,
  setActivePage,
  selectedFamily,
  onSelectFamily,
  perfumesData,
  onSelectProduct,
  totalItemsCount,
  subtotal,
  onOpenCart,
  wishlistCount,
  onOpenWishlist,
  currentUser,
  onLogout,
  onOpenAuth
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Búsqueda predictiva por nombre, marca o notas olfativas
  const searchResults = searchQuery.trim().length > 1
    ? perfumesData.filter((p) => {
        const q = searchQuery.toLowerCase().trim();
        const inName = p.name.toLowerCase().includes(q);
        const inBrand = p.brand.toLowerCase().includes(q);
        const inFamily = p.family.toLowerCase().includes(q);
        const inTop = p.pyramid.top.some((note) => note.toLowerCase().includes(q));
        const inHeart = p.pyramid.heart.some((note) => note.toLowerCase().includes(q));
        const inBase = p.pyramid.base.some((note) => note.toLowerCase().includes(q));
        return inName || inBrand || inFamily || inTop || inHeart || inBase;
      }).slice(0, 5)
    : [];

  // Cerrar predictivo al hacer clic afuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header" role="banner">
      {/* Barra de Navegación Principal */}
      <div className="header-primary-row">
        {/* Marca / Logotipo Editorial */}
        <div
          className="brand-logo-container"
          onClick={() => {
            setActivePage('shop');
            onSelectFamily('todos');
          }}
          role="button"
          tabIndex={0}
          aria-label="Ir a la portada de ÉLIXIR"
        >
          <span className="brand-monogram">É</span>
          <div className="brand-titles">
            <span className="brand-main-name">ÉLIXIR</span>
            <span className="brand-sub-tag">HAUTE PARFUMERIE • PARIS</span>
          </div>
        </div>

        {/* Buscador Predictivo */}
        <div className="predictive-search-container" ref={searchRef}>
          <div className="search-input-box">
            <IconSearch size={15} className="search-box-icon" aria-hidden="true" />
            <input
              type="search"
              className="predictive-input"
              placeholder="Buscar por aroma, nota (ej. azafrán, oud) o marca..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              aria-label="Buscar fragancias de autor"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Borrar búsqueda"
              >
                <IconClose size={14} />
              </button>
            )}
          </div>

          {/* Menú Desplegable Predictivo */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="predictive-dropdown" role="listbox">
              <div className="predictive-dropdown-header">
                Sugerencias de fragancias encontradas ({searchResults.length})
              </div>
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  className="predictive-item"
                  onClick={() => {
                    onSelectProduct(item);
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  role="option"
                  tabIndex={0}
                >
                  <div
                    className="predictive-thumbnail"
                    style={{ background: item.colorGradient }}
                  ></div>
                  <div className="predictive-item-info">
                    <span className="predictive-brand">{item.brand}</span>
                    <span className="predictive-title">{item.name}</span>
                    <span className="predictive-family">Familia: {item.family} • {item.concentration}</span>
                  </div>
                  <div className="predictive-item-price">
                    ${item.defaultPrice}.00 USD
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Acciones de Cabecera */}
        <div className="header-actions">
          {/* Navegación Envíos / Privado */}
          <button
            type="button"
            className={`header-nav-btn ${activePage === 'shipping' ? 'active' : ''}`}
            onClick={() => setActivePage('shipping')}
          >
            <span>Logística VIP</span>
            {!currentUser && (
              <span className="header-lock-badge">
                <IconLock size={10} />
                <span>Privado</span>
              </span>
            )}
          </button>

          {/* Botón de Lista de Deseos */}
          <button
            type="button"
            className="header-icon-btn"
            onClick={onOpenWishlist}
            title="Ver favoritos"
            aria-label={`Ver lista de deseos con ${wishlistCount} perfumes`}
          >
            <IconHeart size={18} filled={wishlistCount > 0} className={wishlistCount > 0 ? 'heart-gold' : ''} />
            {wishlistCount > 0 && <span className="header-badge">{wishlistCount}</span>}
          </button>

          {/* Perfil de Usuario */}
          {currentUser ? (
            <div className="header-user-badge">
              <IconUser size={14} aria-hidden="true" />
              <span>{currentUser.name.split(' ')[0]}</span>
              <button
                type="button"
                className="header-logout-btn"
                onClick={onLogout}
                title="Cerrar sesión"
              >
                Salir
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="header-auth-link"
              onClick={() => onOpenAuth('login')}
            >
              Ingresar
            </button>
          )}

          {/* Botón de Carrito con Contador */}
          <button
            type="button"
            className="header-cart-button"
            onClick={onOpenCart}
            aria-label={`Ver bolsa de compras, ${totalItemsCount} productos, subtotal $${subtotal} dólares`}
          >
            <IconBag size={17} aria-hidden="true" />
            <span className="cart-text">Bolsa</span>
            <span className="cart-counter-pill" aria-live="polite">{totalItemsCount}</span>
            {totalItemsCount > 0 && <span className="cart-price-sum">${subtotal}</span>}
          </button>
        </div>
      </div>

      {/* Barra de Filtros Directos por Familia Olfativa */}
      <nav className="header-families-bar" aria-label="Familias olfativas">
        <div className="families-scroll-wrapper">
          <span className="families-label">Familias:</span>
          {[
            { id: 'todos', label: 'Todas las Fragancias' },
            { id: 'amaderado', label: 'Amaderado & Oud' },
            { id: 'floral', label: 'Floral de Grasse' },
            { id: 'citrico', label: 'Cítrico & Salino' },
            { id: 'oriental', label: 'Oriental & Ámbar' }
          ].map((fam) => (
            <button
              key={fam.id}
              type="button"
              className={`family-pill-btn ${selectedFamily === fam.id ? 'active' : ''}`}
              onClick={() => {
                onSelectFamily(fam.id);
                if (activePage !== 'shop') setActivePage('shop');
              }}
            >
              {fam.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
