import { IconTruck, IconGift, IconSparkles } from './Icons';

export default function TopBanner() {
  return (
    <aside className="top-banner" aria-label="Avisos y beneficios exclusivos">
      <div className="top-banner-content">
        <span className="banner-item">
          <IconTruck size={14} className="banner-icon" aria-hidden="true" />
          <strong>ENVÍO GRATIS</strong> en pedidos sobre $60 USD
        </span>
        <span className="banner-separator" aria-hidden="true">•</span>
        <span className="banner-item">
          <IconGift size={14} className="banner-icon" aria-hidden="true" />
          <strong>2 Muestras de cortesía</strong> de 2ml en cada orden
        </span>
        <span className="banner-separator" aria-hidden="true">•</span>
        <span className="banner-item">
          <IconSparkles size={14} className="banner-icon" aria-hidden="true" />
          Cupón <span className="banner-coupon">ELIXIR15</span> para <strong>15% OFF</strong>
        </span>
      </div>
    </aside>
  );
}
