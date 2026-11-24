import { useState } from 'react';

// Empresas de envío inventadas
const SHIPPING_COMPANIES = [
  {
    id: 'elixir-chrono',
    name: 'Élixir Chrono Logistics',
    badge: 'Servicio Ultra-Rápido',
    badgeClass: 'tag-nicho',
    timeframe: '24 Horas Hábiles',
    coverage: 'Capital y Principales Ciudades',
    description: 'Transporte express con furgones climatizados a 18°C para preservar intactas las moléculas y notas de cada fragancia.',
    icon: '⚡',
    rating: '5.0 ★★★★★',
    specialFeature: 'Despacho garantizado el mismo día para compras antes de las 13:00 hs.'
  },
  {
    id: 'veloce-cargo',
    name: 'Veloce Aroma Cargo',
    badge: 'Más Utilizado',
    badgeClass: 'tag-popular',
    timeframe: '48 a 72 Horas Hábiles',
    coverage: 'Nacional Puerta a Puerta',
    description: 'Flota equipada con suspensión neumática y compartimentos acolchados contra impactos de frascos de cristal fino.',
    icon: '🚚',
    rating: '4.9 ★★★★★',
    specialFeature: 'Seguimiento por GPS en tiempo real con notificaciones por SMS y WhatsApp.'
  },
  {
    id: 'scentpost-global',
    name: 'ScentPost Global Air',
    badge: 'Internacional VIP',
    badgeClass: 'tag-fresh',
    timeframe: '3 a 5 Días Hábiles',
    coverage: 'Envíos Internacionales y Regiones Extremas',
    description: 'Línea de carga aérea especializada en líquidos de perfumería fina con gestión aduanera simplificada.',
    icon: '✈️',
    rating: '4.8 ★★★★★',
    specialFeature: 'Póliza de seguro total ante extravío, rotura o demoras imprevistas.'
  },
  {
    id: 'aura-courier',
    name: 'Aura Eco-Courier Express',
    badge: 'Ecológico & Urbano',
    badgeClass: 'tag-fresh',
    timeframe: 'Mismo Día (4 a 6 Horas)',
    coverage: 'Zonas Metropolitanas',
    description: 'Entregas en vehículos 100% eléctricos y mensajería en mano con presentación de lujo para obsequios inmediatos.',
    icon: '🌿',
    rating: '4.9 ★★★★★',
    specialFeature: 'Entrega confidencial y con firma digital de recepción.'
  }
];

export default function ShippingPage({ currentUser }) {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackedOrder, setTrackedOrder] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Simulación de seguimiento de pedido
  const handleTrackOrder = (e) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTrackedOrder({
        code: trackingCode.toUpperCase(),
        company: 'Élixir Chrono Logistics',
        status: 'En Tránsito Prioritario',
        eta: 'Mañana antes de las 14:00 hs',
        origin: 'Depósito Central ÉLIXIR (Cámara Fría)',
        destination: 'Dirección Registrada del Miembro VIP',
        steps: [
          { title: 'Pedido Verificado & Lote Empacado', time: 'Hoy, 09:15 hs', done: true },
          { title: 'Sello de Seguridad Térmico Aplicado', time: 'Hoy, 11:30 hs', done: true },
          { title: 'En Custodia de Élixir Chrono Logistics', time: 'Hoy, 14:45 hs', done: true },
          { title: 'En Camino a tu Domicilio', time: 'Estimado mañana 10:00 - 14:00 hs', done: false }
        ]
      });
    }, 600);
  };

  return (
    <div className="shipping-page-container">
      {/* Encabezado Exclusivo para Miembros */}
      <div className="shipping-hero">
        <div className="hero-pill" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-emerald)' }}>
          <span aria-hidden="true">🔒</span> Área Privada • Miembro Autorizado: {currentUser?.name || 'Cliente VIP'}
        </div>
        <h1 className="hero-title" style={{ fontSize: 'clamp(28px, 4vw, 46px)' }}>
          Logística de Envíos & <span>Tiempos de Entrega</span>
        </h1>
        <p className="hero-desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
          En <strong>ÉLIXIR Parfums</strong> cada fragancia es un tesoro olfativo. Por eso trabajamos exclusivamente con transportistas certificados en manipulación de perfumería fina, garantizando temperatura controlada y protección antichoque.
        </p>
      </div>

      {/* Resumen de Tiempos de Tardanza */}
      <section className="delivery-summary-card" aria-labelledby="shipping-policy-title">
        <div className="card-title-row">
          <div>
            <span className="section-tag">POLÍTICA DE ENTREGAS</span>
            <h2 id="shipping-policy-title" style={{ fontSize: '22px', marginTop: '4px' }}>¿Cuánto tarda en llegar mi pedido?</h2>
          </div>
          <span style={{ fontSize: '28px' }} aria-hidden="true">⏱️</span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.7' }}>
          El tiempo estimado de entrega depende del tipo de servicio contratado y tu ubicación geográfica. Todos los pedidos cuentan con <strong>preparación en cámara fría de 2 a 4 horas</strong> para asegurar el reposo de las notas aromáticas antes de iniciar su trayecto.
        </p>

        <div className="times-grid">
          <div className="time-metric-box">
            <div className="time-number">24h</div>
            <div className="time-title">Envío Express Priority</div>
            <div className="time-desc">Para capital y zonas metropolitanas solicitadas antes de las 13:00 hs.</div>
          </div>
          <div className="time-metric-box">
            <div className="time-number">48 - 72h</div>
            <div className="time-title">Envío Estándar Nacional</div>
            <div className="time-desc">Cobertura puerta a puerta en todo el territorio con flete seguro.</div>
          </div>
          <div className="time-metric-box">
            <div className="time-number">3 - 5 Días</div>
            <div className="time-title">Internacional & Regional</div>
            <div className="time-desc">Rutas aéreas aduaneras con entrega final a domicilio.</div>
          </div>
        </div>
      </section>

      {/* Directorio de Empresas de Envío Asociadas */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} aria-labelledby="couriers-heading">
        <div>
          <span className="section-tag">CONVENIOS LOGÍSTICOS</span>
          <h2 id="couriers-heading" style={{ fontSize: '28px', marginTop: '4px' }}>Nuestras Empresas de Envío Certificadas</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Operadores seleccionados por sus altos estándares de cuidado y velocidad en el transporte de líquidos delicados.
          </p>
        </div>

        <div className="couriers-grid">
          {SHIPPING_COMPANIES.map((company) => (
            <article key={company.id} className="courier-card" aria-label={`Empresa de envío ${company.name}`}>
              <div className="courier-header">
                <span className="courier-icon" aria-hidden="true">{company.icon}</span>
                <span className={`product-tag ${company.badgeClass}`} style={{ position: 'static' }}>
                  {company.badge}
                </span>
              </div>

              <h3 className="courier-name">{company.name}</h3>
              <div className="courier-timeframe">⏱️ Tiempo promedio: <strong>{company.timeframe}</strong></div>
              <div className="courier-coverage">📍 Cobertura: {company.coverage}</div>

              <p className="courier-desc">{company.description}</p>

              <div className="courier-feature">
                <span style={{ color: 'var(--gold-primary)' }} aria-hidden="true">✦</span> {company.specialFeature}
              </div>

              <div className="courier-rating">{company.rating} Calificación de Miembros</div>
            </article>
          ))}
        </div>
      </section>

      {/* Widget Interactivo: Rastreo de Guía para Miembros */}
      <section className="tracking-section" aria-labelledby="tracker-heading">
        <div className="card-title-row">
          <div>
            <span className="section-tag">HERRAMIENTA PRIVADA</span>
            <h2 id="tracker-heading" style={{ fontSize: '22px', marginTop: '4px' }}>Rastreador de Guía en Vivo</h2>
          </div>
          <span style={{ fontSize: '24px' }} aria-hidden="true">📦</span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          Ingresa el número de seguimiento provisto al confirmar tu compra (ej: <code>ELX-9942</code> o <code>VEL-2026</code>) para conocer la ubicación satelital de tu paquete.
        </p>

        <form onSubmit={handleTrackOrder} className="tracking-form">
          <input
            type="search"
            className="search-input"
            style={{ flex: 1, paddingLeft: '16px', fontSize: '14px' }}
            placeholder="Ingresa tu código de guía (Ej: ELX-9942)..."
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            aria-label="Número de guía a rastrear"
          />
          <button type="submit" className="btn-gold" disabled={isSearching}>
            {isSearching ? 'Consultando...' : '🔍 Rastrear Envío'}
          </button>
        </form>

        {trackedOrder && (
          <div className="tracking-result-card" role="region" aria-live="polite">
            <div className="result-header">
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Código de Guía</span>
                <h4 style={{ fontSize: '18px', color: 'var(--gold-light)' }}>{trackedOrder.code}</h4>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span className="hero-pill" style={{ margin: 0, background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald)' }}>
                  ● {trackedOrder.status}
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', margin: '16px 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <div><strong>Transportista:</strong> {trackedOrder.company}</div>
              <div><strong>Llegada estimada:</strong> {trackedOrder.eta}</div>
              <div><strong>Origen:</strong> {trackedOrder.origin}</div>
            </div>

            <div className="timeline-wrapper" role="list">
              {trackedOrder.steps.map((step, idx) => (
                <div key={idx} className={`timeline-step ${step.done ? 'completed' : 'pending'}`} role="listitem">
                  <div className="timeline-marker" aria-hidden="true">{step.done ? '✓' : '○'}</div>
                  <div className="timeline-info">
                    <div className="timeline-title">{step.title}</div>
                    <div className="timeline-time">{step.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Protocolo de Embalaje Térmico */}
      <section className="packaging-protocol-card">
        <div style={{ fontSize: '36px' }} aria-hidden="true">🛡️</div>
        <div>
          <h3 style={{ fontSize: '18px', color: 'var(--gold-light)', marginBottom: '6px' }}>
            Protocolo de Seguridad Térmica y Fragilidad ÉLIXIR
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Todos los pedidos son despachados en cajas reforzadas con acolchado biodegradable de nido de abeja, cápsulas de aire presurizado y cinta de inviolabilidad holográfica. Si tu paquete llega con el precinto roto o dañado, nuestro seguro cubre el reenvío inmediato sin ningún costo adicional.
          </p>
        </div>
      </section>
    </div>
  );
}
