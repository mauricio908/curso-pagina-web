import { IconCrown, IconArrowRight, IconTruck, IconShield, IconSparkles } from './Icons';

export default function HeroEditorial({ onExploreCatalog, onSelectProduct, heroProduct }) {
  return (
    <section className="hero-editorial-section" aria-labelledby="editorial-hero-title">
      <div className="hero-editorial-grid">
        {/* Columna Editorial de Texto con Espacio Negativo */}
        <div className="hero-editorial-copy">
          <div className="hero-editorial-tag">
            <IconCrown size={13} aria-hidden="true" />
            <span>Maison ÉLIXIR • Creación Insignia 2026</span>
          </div>

          <h1 id="editorial-hero-title" className="hero-editorial-title">
            El Silencio de las <span>Maderas Nobles</span>
          </h1>

          <p className="hero-editorial-quote">
            &ldquo;Una fragancia no debería anunciar tu llegada a los gritos, sino dejar un recuerdo magnético que permanezca en la estancia mucho después de que te hayas marchado.&rdquo;
          </p>

          <p className="hero-editorial-desc">
            Presentamos <strong>{heroProduct.name}</strong>, una composición de {heroProduct.concentration.toLowerCase()} macerada durante 6 meses con oud silvestre de Trat, infundida con azafrán persa y resinas sagradas de Omán.
          </p>

          <div className="hero-editorial-actions">
            <button
              type="button"
              className="btn-charcoal"
              onClick={() => onSelectProduct(heroProduct)}
            >
              <span>Descubrir Fragancia</span>
              <IconArrowRight size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn-outline-charcoal"
              onClick={onExploreCatalog}
            >
              Ver Catálogo Completo
            </button>
          </div>

          {/* Micro-especificaciones de la fragancia insignia */}
          <div className="hero-notes-preview">
            <div className="note-spec">
              <span className="spec-title">Familia</span>
              <span className="spec-val">{heroProduct.family}</span>
            </div>
            <div className="spec-divider" aria-hidden="true"></div>
            <div className="note-spec">
              <span className="spec-title">Concentración</span>
              <span className="spec-val">Extrait al 30%</span>
            </div>
            <div className="spec-divider" aria-hidden="true"></div>
            <div className="note-spec">
              <span className="spec-title">Fijación en Piel</span>
              <span className="spec-val">16+ Horas</span>
            </div>
          </div>
        </div>

        {/* Columna Visual Protagonista con el Frasco de Cristal */}
        <div className="hero-editorial-visual">
          <div
            className="editorial-flacon-stage"
            onClick={() => onSelectProduct(heroProduct)}
            role="button"
            tabIndex={0}
            aria-label={`Ver ficha de ${heroProduct.name}`}
          >
            {/* Halo Suave de Luz Bronce/Ámbar */}
            <div className="editorial-stage-halo" aria-hidden="true"></div>

            {/* Frasco Escultural Minimalista */}
            <div className="flacon-editorial-item">
              <div className="flacon-cap-editorial"></div>
              <div className="flacon-neck-editorial"></div>
              <div className="flacon-body-editorial">
                <div className="flacon-glass-sheen"></div>
                <div className="flacon-liquid-editorial" style={{ background: heroProduct.colorGradient }}></div>
                <div className="flacon-label-editorial">
                  <span className="flacon-lbl-maison">ÉLIXIR</span>
                  <span className="flacon-lbl-title">{heroProduct.name}</span>
                  <span className="flacon-lbl-sub">PARIS • EXTRAIT DE PARFUM</span>
                  <span className="flacon-lbl-vol">100 ML • 3.4 FL.OZ</span>
                </div>
              </div>
              <div className="flacon-pedestal"></div>
            </div>

            <div className="editorial-bottle-caption">
              <span className="caption-brand">{heroProduct.brand}</span>
              <span className="caption-name">{heroProduct.name}</span>
              <span className="caption-price">Desde ${heroProduct.prices['30ml']} USD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Confianza Editorial: Envíos, Cuotas, Autenticidad */}
      <div className="editorial-trust-bar" aria-label="Garantías y servicios de compra">
        <div className="trust-pillar">
          <div className="trust-pillar-icon" aria-hidden="true">
            <IconTruck size={20} />
          </div>
          <div className="trust-pillar-text">
            <h4>Envíos Express Asegurados</h4>
            <p>Transporte isotérmico a 18°C con entrega en 24 a 48 hs hábiles.</p>
          </div>
        </div>

        <div className="trust-pillar">
          <div className="trust-pillar-icon" aria-hidden="true">
            <IconSparkles size={20} />
          </div>
          <div className="trust-pillar-text">
            <h4>Hasta 3 y 6 Cuotas sin Interés</h4>
            <p>Financiación con tarjetas bancarias y beneficios con Mercado Pago.</p>
          </div>
        </div>

        <div className="trust-pillar">
          <div className="trust-pillar-icon" aria-hidden="true">
            <IconShield size={20} />
          </div>
          <div className="trust-pillar-text">
            <h4>100% Autenticidad & Batch Code</h4>
            <p>Importaciones oficiales y trazabilidad garantizada de lote de fábrica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
