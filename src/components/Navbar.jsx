import { IconSearch, IconBag, IconHeart, IconLock, IconUser } from './Icons';

export default function Navbar({
  activePage,
  setActivePage,
  onResetFilters,
  searchQuery,
  setSearchQuery,
  currentUser,
  onLogout,
  onOpenAuth,
  totalItemsCount,
  subtotal,
  onOpenCart,
  wishlistCount,
  onOpenWishlist
}) {
  return (
    <header className="navbar" role="banner">
      <div
        className="brand-wrapper"
        onClick={() => {
          setActivePage('shop');
          if (onResetFilters) onResetFilters();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setActivePage('shop');
            if (onResetFilters) onResetFilters();
          }
        }}
        aria-label="Ir al inicio de ÉLIXIR Haute Parfumerie"
      >
        <div className="brand-logo-mark" aria-hidden="true">É</div>
        <div className="brand-text-block">
          <span className="brand-title">ÉLIXIR</span>
          <span className="brand-subtitle">HAUTE PARFUMERIE • PARIS</span>
        </div>
      </div>

      {/* Navegación Principal */}
      <nav className="nav-links" aria-label="Navegación principal">
        <button
          type="button"
          className={`nav-link-btn ${activePage === 'shop' ? 'active' : ''}`}
          onClick={() => setActivePage('shop')}
          aria-current={activePage === 'shop' ? 'page' : undefined}
        >
          <span>Colección</span>
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activePage === 'shipping' ? 'active' : ''}`}
          onClick={() => setActivePage('shipping')}
          aria-current={activePage === 'shipping' ? 'page' : undefined}
        >
          <span>Logística & Envíos</span>
          {!currentUser && (
            <span className="private-badge" aria-label="Sección privada VIP">
              <IconLock size={10} aria-hidden="true" />
              <span>Privado</span>
            </span>
          )}
        </button>
      </nav>

      {/* Acciones del Navbar */}
      <div className="nav-actions">
        {activePage === 'shop' && (
          <div className="search-bar-wrapper">
            <span className="search-icon" aria-hidden="true">
              <IconSearch size={14} />
            </span>
            <input
              type="search"
              className="search-input"
              placeholder="Buscar por aroma, notas o familia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar fragancias de autor"
            />
          </div>
        )}

        {/* Botón de Lista de Deseos (Wishlist) */}
        <button
          type="button"
          className="wishlist-nav-btn"
          onClick={onOpenWishlist}
          title="Ver fragancias favoritas"
          aria-label={`Ver lista de deseos con ${wishlistCount} fragancias`}
        >
          <IconHeart size={18} filled={wishlistCount > 0} className={wishlistCount > 0 ? 'heart-active' : ''} />
          {wishlistCount > 0 && <span className="wishlist-badge" aria-live="polite">{wishlistCount}</span>}
        </button>

        {/* Autenticación / Perfil */}
        {currentUser ? (
          <div className="user-nav-badge">
            <IconUser size={14} className="user-avatar" aria-hidden="true" />
            <span className="user-name">{currentUser.name.split(' ')[0]}</span>
            <button
              type="button"
              className="logout-btn"
              onClick={onLogout}
              title="Cerrar sesión"
              aria-label="Cerrar sesión de usuario"
            >
              Salir
            </button>
          </div>
        ) : (
          <div className="auth-buttons-group">
            <button
              type="button"
              className="btn-outline-gold btn-sm"
              onClick={() => onOpenAuth('login')}
            >
              Ingresar
            </button>
            <button
              type="button"
              className="btn-gold btn-sm"
              onClick={() => onOpenAuth('register')}
            >
              VIP Club
            </button>
          </div>
        )}

        {/* Botón Bolsa con aria-live */}
        <button
          type="button"
          className="cart-btn"
          onClick={onOpenCart}
          aria-label={`Ver bolsa de compras, ${totalItemsCount} productos, total $${subtotal} dólares`}
        >
          <IconBag size={17} className="cart-btn-icon" aria-hidden="true" />
          <span className="cart-btn-text">Bolsa</span>
          <span className="cart-count-badge" aria-live="polite">{totalItemsCount}</span>
          {totalItemsCount > 0 && <span className="cart-price-badge">${subtotal}</span>}
        </button>
      </div>
    </header>
  );
}
