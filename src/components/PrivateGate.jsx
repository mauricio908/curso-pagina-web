export default function PrivateGate({ onGoLogin, onGoRegister, onBackShop }) {
  return (
    <div className="private-gate-container">
      <div className="private-gate-card">
        <div className="gate-lock-icon" aria-hidden="true">🔒</div>
        <div className="hero-pill">
          CONTENIDO RESTRINGIDO • SÓLO MIEMBROS
        </div>

        <h2 className="hero-title" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginTop: '16px' }}>
          Portal Privado de Logística & Envíos
        </h2>

        <p className="hero-desc" style={{ maxWidth: '500px', margin: '14px auto 28px' }}>
          Por razones de seguridad y acuerdos arancelarios exclusivos con nuestras empresas de transporte, la información detallada de tardanza, transportistas y seguimiento satelital solo está disponible para clientes registrados.
        </p>

        <div className="gate-benefits-list" role="list">
          <div className="gate-benefit-item" role="listitem">
            <span style={{ color: 'var(--gold-primary)' }}>✓</span> Consulta de empresas de envío (Élixir Chrono, Veloce, ScentPost)
          </div>
          <div className="gate-benefit-item" role="listitem">
            <span style={{ color: 'var(--gold-primary)' }}>✓</span> Tiempos de entrega exactos y rastreo en tiempo real
          </div>
          <div className="gate-benefit-item" role="listitem">
            <span style={{ color: 'var(--gold-primary)' }}>✓</span> Tarifas preferenciales y seguro de rotura 100% bonificado
          </div>
        </div>

        <div className="gate-actions">
          <button
            type="button"
            className="btn-gold"
            onClick={onGoLogin}
          >
            Iniciar Sesión 🔐
          </button>
          <button
            type="button"
            className="btn-outline-gold"
            onClick={onGoRegister}
          >
            Crear Cuenta Gratis ✦
          </button>
        </div>

        <div style={{ marginTop: '24px' }}>
          <button
            type="button"
            className="link-button"
            onClick={onBackShop}
          >
            ← Regresar al catálogo de fragancias
          </button>
        </div>
      </div>
    </div>
  );
}
