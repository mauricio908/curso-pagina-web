import { IconClose, IconHeart, IconBag } from './Icons';

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistIds,
  perfumesData,
  onAddToCart,
  onToggleWishlist,
  onSelectProduct
}) {
  if (!isOpen) return null;

  const wishlistedPerfumes = perfumesData.filter((p) => wishlistIds.includes(p.id));

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="wishlist-modal-title"
    >
      <div
        className="product-detail-modal wishlist-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <IconHeart size={20} filled className="heart-active" aria-hidden="true" />
            <h2 id="wishlist-modal-title" style={{ fontSize: '22px', color: 'white' }}>
              Tus Fragancias Favoritas ({wishlistedPerfumes.length})
            </h2>
          </div>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Cerrar favoritos"
          >
            <IconClose size={20} />
          </button>
        </div>

        {wishlistedPerfumes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 16px' }}>
            <div style={{ opacity: 0.3, marginBottom: '12px' }}>
              <IconHeart size={48} />
            </div>
            <h3 style={{ fontSize: '18px', color: 'white', marginBottom: '6px' }}>Tu lista de deseos está vacía</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Haz clic en el icono de corazón en cualquier fragancia para guardarla aquí.
            </p>
          </div>
        ) : (
          <div className="wishlist-items-grid" role="list">
            {wishlistedPerfumes.map((perfume) => (
              <div key={perfume.id} className="wishlist-item-card" role="listitem">
                <div
                  className="wishlist-item-preview"
                  style={{ background: perfume.colorGradient }}
                  onClick={() => {
                    onSelectProduct(perfume);
                    onClose();
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver ${perfume.name}`}
                ></div>
                <div className="wishlist-item-info">
                  <h4
                    className="wishlist-item-name"
                    onClick={() => {
                      onSelectProduct(perfume);
                      onClose();
                    }}
                  >
                    {perfume.name}
                  </h4>
                  <div className="wishlist-item-meta">{perfume.family} • ${perfume.price}.00 USD</div>
                </div>
                <div className="wishlist-item-actions">
                  <button
                    type="button"
                    className="btn-add-cart"
                    onClick={() => onAddToCart(perfume)}
                    aria-label={`Agregar ${perfume.name} a la bolsa`}
                  >
                    <IconBag size={14} aria-hidden="true" />
                    <span>Agregar</span>
                  </button>
                  <button
                    type="button"
                    className="wishlist-remove-btn"
                    onClick={() => onToggleWishlist(perfume.id)}
                    title="Eliminar de favoritos"
                    aria-label={`Eliminar ${perfume.name} de favoritos`}
                  >
                    <IconClose size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
