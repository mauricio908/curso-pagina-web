import { IconStar, IconHeart, IconBag } from './Icons';

export default function ProductCard({
  perfume,
  onSelectProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  return (
    <article className="product-card" aria-label={`Fragancia ${perfume.name}`}>
      <div className="card-top-badges">
        <span className={`product-tag ${perfume.tagClass}`}>{perfume.tag}</span>
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

      {/* Frasco Escultural de Cristal de Lujo */}
      <div
        className="product-img-wrapper"
        onClick={() => onSelectProduct(perfume)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onSelectProduct(perfume);
          }
        }}
        title={`Ver notas olfativas de ${perfume.name}`}
        aria-label={`Ver notas de ${perfume.name}`}
      >
        <div className="mini-flacon-container">
          <div className="flacon-cap-mini"></div>
          <div className="flacon-neck-mini"></div>
          <div className="flacon-body-mini">
            <div className="flacon-reflection"></div>
            <div className="flacon-liquid" style={{ background: perfume.colorGradient }}></div>
            <div className="flacon-label-mini">
              <span className="flacon-mini-brand">ÉLIXIR</span>
              <span className="flacon-mini-title">{perfume.name.split(' ')[0]}</span>
              <span className="flacon-mini-sub">{perfume.concentration.includes('Extrait') ? 'EXTRAIT' : 'EDP'}</span>
            </div>
          </div>
          <div className="flacon-base-mini"></div>
        </div>
      </div>

      <div className="product-info">
        <div className="product-header-row">
          <span className="product-category-label">
            {perfume.gender} • {perfume.concentration}
          </span>
          <div className="product-rating">
            <IconStar size={13} className="star-gold" aria-hidden="true" />
            <span className="rating-value">{perfume.rating}</span>
            <span className="rating-count">({perfume.reviewsCount})</span>
          </div>
        </div>

        <h3
          className="product-title"
          onClick={() => onSelectProduct(perfume)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectProduct(perfume);
            }
          }}
        >
          {perfume.name}
        </h3>

        <div className="product-family-tag">
          {perfume.family}
        </div>

        <p className="product-notes">
          <strong>Notas:</strong> {perfume.heartNotes}, {perfume.baseNotes}
        </p>
      </div>

      <div className="product-footer">
        <div className="price-block">
          <div className="product-price">${perfume.price}.00</div>
          <span className="product-size-label">100ml • Extrait</span>
        </div>
        <button
          type="button"
          className="btn-add-cart"
          onClick={() => onAddToCart(perfume)}
          aria-label={`Agregar ${perfume.name} a la bolsa`}
        >
          <IconBag size={14} aria-hidden="true" />
          <span>Agregar</span>
        </button>
      </div>
    </article>
  );
}
