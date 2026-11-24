import { IconCrown, IconSparkles, IconArrowRight } from './Icons';

export default function HeroBanner({ onExploreCatalog, onSelectHeroProduct, heroProduct }) {
  return (
    <section className="hero-sales" aria-labelledby="hero-title">
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="hero-content">
        <div className="hero-pill">
          <IconCrown size={14} aria-hidden="true" />
          <span>Haute Parfumerie • Concentración Extrait al 30%</span>
        </div>
        <h1 id="hero-title" className="hero-title">
          El Arte Sublime de la <span>Distinción</span> Olfativa
        </h1>
        <p className="hero-desc">
          Maceraciones de 6 meses con maderas milenarias de oud, vainilla negra de Madagascar y cítricos de la costa amalfitana. Deja una estela hipnótica e imborrable allá donde vayas.
        </p>
        <div className="hero-cta-group">
          <button
            type="button"
            className="btn-gold"
            onClick={onExploreCatalog}
          >
            <span>Explorar Colección</span>
            <IconArrowRight size={15} aria-hidden="true" />
          </button>
          {heroProduct && (
            <button
              type="button"
              className="btn-outline-gold"
              onClick={() => onSelectHeroProduct(heroProduct)}
            >
              <span>Fragancia Insignia</span>
              <IconSparkles size={14} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Métricas de Excelencia */}
        <div className="hero-trust-row">
          <div className="trust-item">
            <strong className="trust-num">14h+</strong>
            <span className="trust-label">Fijación en piel</span>
          </div>
          <div className="trust-separator" aria-hidden="true"></div>
          <div className="trust-item">
            <strong className="trust-num">30%</strong>
            <span className="trust-label">Aceites puros</span>
          </div>
          <div className="trust-separator" aria-hidden="true"></div>
          <div className="trust-item">
            <strong className="trust-num">100%</strong>
            <span className="trust-label">Cosechas nobles</span>
          </div>
        </div>
      </div>

      {heroProduct && (
        <div className="hero-bottle-card">
          <div className="hero-badge-tag">
            <IconCrown size={12} aria-hidden="true" />
            <span>Edición Destacada</span>
          </div>

          {/* Flacon Escultural de Lujo */}
          <div className="luxury-flacon-wrapper" onClick={() => onSelectHeroProduct(heroProduct)} role="button" tabIndex={0} aria-label={`Ver frasco de ${heroProduct.name}`}>
            <div className="flacon-cap"></div>
            <div className="flacon-neck"></div>
            <div className="flacon-body hero-flacon">
              <div className="flacon-reflection"></div>
              <div className="flacon-liquid" style={{ background: heroProduct.colorGradient }}></div>
              <div className="flacon-label">
                <span className="flacon-brand">ÉLIXIR</span>
                <span className="flacon-name">{heroProduct.name}</span>
                <span className="flacon-conc">EXTRAIT DE PARFUM</span>
                <span className="flacon-vol">100 ML • 3.4 FL.OZ</span>
              </div>
            </div>
            <div className="flacon-base"></div>
          </div>

          <h3 className="hero-bottle-title">{heroProduct.name}</h3>
          <p className="hero-bottle-subtitle">
            {heroProduct.family} • {heroProduct.longevity}
          </p>
          <div className="hero-bottle-price">${heroProduct.price}.00 USD</div>
          <button
            type="button"
            className="btn-gold btn-full justify-center"
            onClick={() => onSelectHeroProduct(heroProduct)}
          >
            Descubrir Pirámide Olfativa
          </button>
        </div>
      )}
    </section>
  );
}
