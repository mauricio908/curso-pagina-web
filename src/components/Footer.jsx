export default function Footer({ activePage, setActivePage, currentUser, onOpenAuth }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-copyright">
        © 2026 <strong>ÉLIXIR Parfums</strong> • Alta Perfumería & Fragancias de Autor. Todos los derechos reservados.
      </div>
      <nav className="footer-links" aria-label="Enlaces secundarios del pie de página">
        <button
          type="button"
          className={`link-button ${activePage === 'shop' ? 'active' : ''}`}
          onClick={() => setActivePage('shop')}
        >
          Catálogo
        </button>
        <span className="footer-sep" aria-hidden="true">•</span>
        <button
          type="button"
          className={`link-button ${activePage === 'shipping' ? 'active' : ''}`}
          onClick={() => setActivePage('shipping')}
        >
          Envíos Privados 🔒
        </button>
        <span className="footer-sep" aria-hidden="true">•</span>
        <button
          type="button"
          className={`link-button ${activePage === 'auth' ? 'active' : ''}`}
          onClick={() => {
            if (currentUser) {
              setActivePage('shipping');
            } else {
              onOpenAuth('login');
            }
          }}
        >
          {currentUser ? `Mi Cuenta (${currentUser.name.split(' ')[0]})` : 'Iniciar Sesión'}
        </button>
      </nav>
    </footer>
  );
}
