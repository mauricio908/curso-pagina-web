import { useEffect } from 'react';
import { IconClose, IconCrown, IconStar, IconBag } from './Icons';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-perfume-title"
    >
      <div
        className="product-detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-row">
          <span className="hero-pill modal-concentration-pill">
            <IconCrown size={12} aria-hidden="true" />
            <span>{product.concentration}</span>
          </span>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-top-presentation">
          <div className="modal-flacon-preview">
            <div className="flacon-cap-mini"></div>
            <div className="flacon-neck-mini"></div>
            <div className="flacon-body-mini" style={{ width: '80px', height: '110px' }}>
              <div className="flacon-reflection"></div>
              <div className="flacon-liquid" style={{ background: product.colorGradient }}></div>
              <div className="flacon-label-mini">
                <span className="flacon-mini-brand">ÉLIXIR</span>
                <span className="flacon-mini-title">{product.name.split(' ')[0]}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 id="modal-perfume-title" className="modal-product-title">
              {product.name}
            </h2>
            <div className="modal-product-family">
              Familia: <strong>{product.family}</strong> • Para {product.gender}
            </div>
            <div className="product-rating" style={{ marginTop: '4px' }}>
              <IconStar size={14} className="star-gold" aria-hidden="true" />
              <span className="rating-value">{product.rating}</span>
              <span className="rating-count">({product.reviewsCount} reseñas verificadas)</span>
            </div>
          </div>
        </div>

        {/* Pirámide Olfativa */}
        <div className="pyramid-box">
          <h4 className="pyramid-box-title">Pirámide Olfativa (Evolución en Piel)</h4>
          <p className="pyramid-note-line">
            <strong>Salida (Primeros 15 min):</strong> {product.topNotes}
          </p>
          <p className="pyramid-note-line">
            <strong>Corazón (Evolución 2-4h):</strong> {product.heartNotes}
          </p>
          <p className="pyramid-note-line">
            <strong>Fondo (Fijación 8-16h):</strong> {product.baseNotes}
          </p>
        </div>

        {/* Atributos y Rendimiento */}
        <div className="perfume-specs-grid">
          <div className="spec-item">
            <span className="spec-label">Duración en piel</span>
            <span className="spec-value">{product.longevity}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Estela / Proyección</span>
            <span className="spec-value">{product.sillage}</span>
          </div>
          <div className="spec-item spec-span-full">
            <span className="spec-label">Ocasión sugerida</span>
            <span className="spec-value">{product.occasion}</span>
          </div>
        </div>

        {/* Acciones de Compra */}
        <div className="modal-action-buttons">
          <button
            type="button"
            className="btn-gold flex-1 justify-center"
            onClick={() => {
              onAddToCart(product, '100ml');
              onClose();
            }}
          >
            <IconBag size={15} aria-hidden="true" />
            <span>Agregar 100ml (${product.price}.00)</span>
          </button>
          <button
            type="button"
            className="btn-outline-gold justify-center"
            onClick={() => {
              onAddToCart(product, '50ml');
              onClose();
            }}
          >
            Opción 50ml (${Math.round(product.price * 0.65)}.00)
          </button>
        </div>
      </div>
    </div>
  );
}
