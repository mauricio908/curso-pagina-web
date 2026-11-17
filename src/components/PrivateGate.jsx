export default function PrivateGate({ onGoLogin, onGoRegister, onBackShop }) {
  return (
    <div className="private-gate-container">
      <div className="private-gate-card">
        <div className="gate-lock-icon">🔒</div>
        <div className="hero-pill" style={{ borderColor: 'rgba(212, 175, 55, 0.4)', background: 'rgba(212, 175, 55, 0.1)', color: '#f3e5ab' }}>
          CONTENIDO RESTRINGIDO • SÓLO MIEMBROS
        </div>

        <h2 style={{ fontSize: '32px', color: 'white', marginTop: '16px' }}>
          Portal Privado de Logística & Envíos
        </h2>

        <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '500px', margin: '14px auto 28px', lineHeight: '1.6' }}>
          Por razones de seguridad y acuerdos arancelarios exclusivos con nuestras empresas de transporte, la información detallada de tardanza, transportistas y seguimiento satelital solo está disponible para clientes registrados.
        </p>

        <div className="gate-benefits-list">
          <div className="gate-benefit-item">
            <span style={{ color: '#d4af37' }}>✓</span> Consulta de empresas de envío (Élixir Chrono, Veloce, ScentPost)
          </div>
          <div className="gate-benefit-item">
            <span style={{ color: '#d4af37' }}>✓</span> Tiempos de entrega exactos y rastreo en tiempo real
          </div>
          <div className="gate-benefit-item">
            <span style={{ color: '#d4af37' }}>✓</span> Tarifas preferenciales y seguro de rotura 100% bonificado
          </div>
        </div>

        <div className="gate-actions">
          <button
            type="button"
            className="btn-gold"
            onClick={onGoLogin}
            style={{ padding: '12px 24px' }}
          >
            Iniciar Sesión 🔐
          </button>
          <button
            type="button"
            className="btn-outline-gold"
            onClick={onGoRegister}
            style={{ padding: '12px 24px' }}
          >
            Crear Cuenta Gratis ✦
          </button>
        </div>

        <button
          type="button"
          className="link-button"
          onClick={onBackShop}
          style={{ marginTop: '24px', fontSize: '13px', color: '#64748b' }}
        >
          ← Regresar al catálogo de fragancias
        </button>
      </div>
    </div>
  );
}
