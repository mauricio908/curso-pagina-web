import { useState } from 'react';
import { IconBag, IconHeart, IconTruck, IconShield, IconSparkles, IconStar } from './Icons';

export default function ProductDetailPage({
  product,
  onBack,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) {
  const [selectedSize, setSelectedSize] = useState('100ml');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const currentPrice = product.prices[selectedSize] || product.defaultPrice;

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <article className="pdp-container" aria-labelledby="pdp-title">
      {/* Botón de Regreso & Migas de Pan */}
      <nav className="pdp-breadcrumbs" aria-label="Ruta de navegación">
        <button
          type="button"
          className="pdp-back-btn"
          onClick={onBack}
        >
          ← Regresar al catálogo
        </button>
        <span className="breadcrumb-sep" aria-hidden="true">/</span>
        <span className="breadcrumb-brand">{product.brand}</span>
        <span className="breadcrumb-sep" aria-hidden="true">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </nav>

      <div className="pdp-layout-grid">
        {/* Columna Izquierda: Fotografía & Escenario Visual del Frasco */}
        <div className="pdp-gallery-column">
          <div className="pdp-flacon-stage">
            <div className="pdp-halo-glow" aria-hidden="true"></div>

            <div className="flacon-pdp-display">
              <div className="flacon-pdp-cap"></div>
              <div className="flacon-pdp-neck"></div>
              <div className="flacon-pdp-body">
                <div className="flacon-pdp-reflection"></div>
                <div className="flacon-pdp-liquid" style={{ background: product.colorGradient }}></div>
                <div className="flacon-pdp-label">
                  <span className="flacon-pdp-maison">ÉLIXIR</span>
                  <span className="flacon-pdp-perfume">{product.name}</span>
                  <span className="flacon-pdp-conc">{product.concentration.toUpperCase()}</span>
                  <span className="flacon-pdp-size">{selectedSize} • {selectedSize === '30ml' ? '1.0' : selectedSize === '50ml' ? '1.7' : '3.4'} FL.OZ</span>
                </div>
              </div>
              <div className="flacon-pdp-pedestal"></div>
            </div>

            <button
              type="button"
              className={`pdp-wishlist-toggle ${isWishlisted ? 'active' : ''}`}
              onClick={() => onToggleWishlist(product.id)}
              aria-label={isWishlisted ? `Quitar ${product.name} de favoritos` : `Guardar ${product.name} en favoritos`}
            >
              <IconHeart size={20} filled={isWishlisted} />
            </button>
          </div>

          {/* Garantías Directas al Pie de la Imagen */}
          <div className="pdp-trust-signals">
            <div className="pdp-signal">
              <IconShield size={16} />
              <span>Autenticidad con Batch Code oficial</span>
            </div>
            <div className="pdp-signal">
              <IconTruck size={16} />
              <span>Envío express con seguro total incluido</span>
            </div>
            <div className="pdp-signal">
              <IconSparkles size={16} />
              <span>Incluye 2 decants de cortesía de 2ml</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información Editorial, Selector y Pirámide Olfativa */}
        <div className="pdp-details-column">
          <div className="pdp-header">
            <span className="pdp-brand-tag">{product.brand}</span>
            <h1 id="pdp-title" className="pdp-title">{product.name}</h1>
            <div className="pdp-concentration-row">
              <span className="pdp-conc-badge">{product.concentration}</span>
              <span className="pdp-family-label">Familia: {product.family}</span>
              <div className="pdp-rating">
                <IconStar size={14} className="star-gold" aria-hidden="true" />
                <span className="pdp-rating-num">{product.rating}</span>
                <span className="pdp-rating-count">({product.reviewsCount} reseñas verificadas)</span>
              </div>
            </div>
          </div>

          {/* Precio Dinámico según el tamaño */}
          <div className="pdp-price-box" aria-live="polite">
            <div className="pdp-price-amount">${currentPrice}.00 USD</div>
            <span className="pdp-installments">o 3 cuotas sin interés de ${(currentPrice / 3).toFixed(2)} USD</span>
          </div>

          <p className="pdp-description-text">
            {product.fullDesc}
          </p>

          {/* Selector de Mililitros (30ml, 50ml, 100ml) */}
          <div className="pdp-size-selector-section">
            <div className="size-selector-header">
              <span className="size-label">Seleccionar Presentación:</span>
              <span className="size-current-val">{selectedSize} ({selectedSize === '30ml' ? 'Viaje / Colección' : selectedSize === '50ml' ? 'Uso Frecuente' : 'Edición Completa'})</span>
            </div>
            <div className="size-buttons-group" role="radiogroup" aria-label="Tamaño de frasco">
              {[
                { size: '30ml', oz: '1.0 FL.OZ', price: product.prices['30ml'] },
                { size: '50ml', oz: '1.7 FL.OZ', price: product.prices['50ml'] },
                { size: '100ml', oz: '3.4 FL.OZ', price: product.prices['100ml'] }
              ].map((item) => (
                <button
                  key={item.size}
                  type="button"
                  role="radio"
                  aria-checked={selectedSize === item.size}
                  className={`size-button ${selectedSize === item.size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(item.size)}
                >
                  <span className="size-btn-vol">{item.size}</span>
                  <span className="size-btn-oz">{item.oz}</span>
                  <span className="size-btn-price">${item.price}.00</span>
                </button>
              ))}
            </div>
          </div>

          {/* Barra de Intensidad / Duración en Piel */}
          <div className="pdp-metrics-card">
            <div className="metric-row">
              <span className="metric-name">Intensidad Olfativa & Proyección:</span>
              <div className="intensity-meter" aria-label={`Intensidad: ${product.intensity} de 5`}>
                {[1, 2, 3, 4, 5].map((level) => (
                  <span
                    key={level}
                    className={`intensity-bar ${level <= product.intensity ? 'filled' : ''}`}
                  ></span>
                ))}
              </div>
              <span className="metric-score">{product.intensity}/5 ({product.sillage})</span>
            </div>

            <div className="metric-row">
              <span className="metric-name">Duración en Piel:</span>
              <span className="metric-highlight">{product.longevityHours}</span>
            </div>

            <div className="metric-row">
              <span className="metric-name">Ocasión de Uso:</span>
              <span className="metric-text">{product.occasion}</span>
            </div>
          </div>

          {/* GRÁFICO VISUAL DE PIRÁMIDE OLFATIVA */}
          <section className="pyramid-visual-section" aria-labelledby="pyramid-title">
            <h3 id="pyramid-title" className="pyramid-section-title">
              Pirámide Olfativa & Evolución en Piel
            </h3>

            <div className="pyramid-diagram">
              {/* Nivel 1: Notas de Salida */}
              <div className="pyramid-tier tier-top">
                <div className="tier-header">
                  <span className="tier-phase">1. NOTAS DE SALIDA (Primeros 15-30 minutos)</span>
                  <span className="tier-timing">Impacto inicial chispeante</span>
                </div>
                <div className="tier-notes-list">
                  {product.pyramid.top.map((note, i) => (
                    <span key={i} className="pyramid-note-pill top-pill">{note}</span>
                  ))}
                </div>
              </div>

              {/* Nivel 2: Notas de Corazón */}
              <div className="pyramid-tier tier-heart">
                <div className="tier-header">
                  <span className="tier-phase">2. NOTAS DE CORAZÓN (Evolución de 2 a 4 horas)</span>
                  <span className="tier-timing">Alma y carácter de la fragancia</span>
                </div>
                <div className="tier-notes-list">
                  {product.pyramid.heart.map((note, i) => (
                    <span key={i} className="pyramid-note-pill heart-pill">{note}</span>
                  ))}
                </div>
              </div>

              {/* Nivel 3: Notas de Fondo */}
              <div className="pyramid-tier tier-base">
                <div className="tier-header">
                  <span className="tier-phase">3. NOTAS DE FONDO (Fijación de 8 a 16+ horas)</span>
                  <span className="tier-timing">La huella imborrable que perdura</span>
                </div>
                <div className="tier-notes-list">
                  {product.pyramid.base.map((note, i) => (
                    <span key={i} className="pyramid-note-pill base-pill">{note}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* BOTÓN DESTACADO / FIJO DE AGREGAR AL CARRITO */}
          <div className="pdp-sticky-action-bar">
            <button
              type="button"
              className={`btn-charcoal btn-pdp-add ${addedAnimation ? 'added-pulse' : ''}`}
              onClick={handleAdd}
            >
              <IconBag size={18} />
              <span>
                {addedAnimation
                  ? `✓ Agregado a la Bolsa (${selectedSize})`
                  : `Agregar a la Bolsa • $${currentPrice}.00 USD`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
