export default function OrderConfirmationModal({
  isOpen,
  total,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
    >
      <div className="confirmation-card" onClick={(e) => e.stopPropagation()}>
        <div className="order-success-icon" aria-hidden="true">✨</div>
        <h2 id="order-success-title" className="order-success-title">
          ¡Orden Registrada con Éxito!
        </h2>
        <p className="order-success-desc">
          Gracias por tu compra en <strong>ÉLIXIR Haute Parfumerie</strong>. Tu paquete exclusivo con sello térmico y muestras de regalo ya se encuentra en fase de acondicionamiento logístico.
        </p>
        <div className="order-summary-box">
          Total procesado: <strong>${total}.00 USD</strong>
        </div>
        <button
          type="button"
          className="btn-gold btn-full justify-center"
          onClick={onClose}
        >
          Continuar Explorando Catálogo
        </button>
      </div>
    </div>
  );
}
