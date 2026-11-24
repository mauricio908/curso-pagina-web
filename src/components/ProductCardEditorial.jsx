import { IconHeart, IconBag } from './Icons';

export default function ProductCardEditorial({
  perfume,
  onSelectProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  return (
    <article
      className="editorial-card"
      aria-label={`Fragancia ${perfume.name} de ${perfume.brand}`}
    >
      {/* Cabecera de la tarjeta: Badges y Botón de Favoritos */}
      <div className="card-editorial-top">
        <span className="concentration-chip">
          {perfume.concentrationCode}
        </span>
        <button
          type="button"
          className={`wishlist-card-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(perfume.id);
          }}
          aria-label={isWishlisted ? `Quitar ${perfume.name} de favoritos` : `Guardar ${perfume.name} en favoritos`}
        >
          <IconHeart size={16} filled={isWishlisted} />
        </button>
      </div>

      {/* Escenario de Frasco con Espacio Negativo */}
      <div
        className="editorial-card-visual"
        onClick={() => onSelectProduct(perfume)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onSelectProduct(perfume);
          }
        }}
        title={`Ver ficha completa de ${perfume.name}`}
      >
        <div className="card-flacon-wrapper">
          <div className="mini-cap"></div>
          <div className="mini-neck"></div>
          <div className="mini-body">
            <div className="mini-sheen"></div>
            <div className="mini-liquid" style={{ background: perfume.colorGradient }}></div>
            <div className="mini-label">
              <span className="mini-brand-txt">ÉLIXIR</span>
              <span className="mini-title-txt">{perfume.name.split(' ')[0]}</span>
              <span className="mini-code-txt">{perfume.concentrationCode}</span>
            </div>
          </div>
          <div className="mini-pedestal"></div>
        </div>
      </div>

      {/* Información Editorial */}
      <div className="editorial-card-content">
        <div className="editorial-card-meta">
          <span className="card-brand-name">{perfume.brand}</span>
          <span className="card-family-name">{perfume.family}</span>
        </div>

        <h3
          className="card-perfume-name"
          onClick={() => onSelectProduct(perfume)}
        >
          {perfume.name}
        </h3>

        <p className="card-sensory-summary">
          {perfume.shortDesc}
        </p>

        {/* Acordes de la Pirámide en Chips Delicados */}
        <div className="card-notes-chips">
          <span className="note-chip">{perfume.pyramid.top[0]}</span>
          <span className="note-chip">{perfume.pyramid.heart[0]}</span>
          <span className="note-chip">{perfume.pyramid.base[0]}</span>
        </div>

        {/* Pie de Tarjeta: Precios y Acciones */}
        <div className="card-editorial-footer">
          <div className="price-tag-block">
            <span className="price-label">Desde</span>
            <span className="price-amount">${perfume.prices['30ml']}.00 USD</span>
          </div>

          <div className="card-actions-group">
            <button
              type="button"
              className="btn-pdp-view"
              onClick={() => onSelectProduct(perfume)}
            >
              Ficha
            </button>
            <button
              type="button"
              className="btn-quick-add"
              onClick={() => onAddToCart(perfume, '100ml')}
              title={`Agregar 100ml de ${perfume.name} al carrito`}
              aria-label={`Agregar ${perfume.name} al carrito`}
            >
              <IconBag size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
