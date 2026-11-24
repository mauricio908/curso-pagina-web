import { useEffect } from 'react';

export default function CheckoutModal({
  isOpen,
  onClose,
  shippingForm,
  setShippingForm,
  paymentMethod,
  setPaymentMethod,
  total,
  onCompletePayment
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="confirmation-card modal-checkout" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <h2 id="checkout-modal-title" className="checkout-title">
            Finalizar Compra Segura
          </h2>
          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Cerrar pasarela de pago"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onCompletePayment} className="checkout-form">
          <div className="form-group">
            <label htmlFor="checkout-name" className="form-label">
              Nombre y Apellido
            </label>
            <input
              id="checkout-name"
              type="text"
              required
              placeholder="Ej. Carolina Herrera"
              className="form-input"
              value={shippingForm.name}
              onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
            />
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="checkout-phone" className="form-label">
                Teléfono / WhatsApp
              </label>
              <input
                id="checkout-phone"
                type="tel"
                required
                placeholder="+54 9 11 5555-0199"
                className="form-input"
                value={shippingForm.phone}
                onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkout-city" className="form-label">
                Ciudad / Provincia
              </label>
              <input
                id="checkout-city"
                type="text"
                required
                placeholder="Buenos Aires"
                className="form-input"
                value={shippingForm.city}
                onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="checkout-address" className="form-label">
              Dirección de Entrega
            </label>
            <input
              id="checkout-address"
              type="text"
              required
              placeholder="Av. Alvear 1850, Piso 4 B"
              className="form-input"
              value={shippingForm.address}
              onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Método de Pago Preferido</label>
            <div className="payment-methods-grid" role="radiogroup" aria-label="Métodos de pago">
              {[
                { id: 'card', label: '💳 Tarjeta' },
                { id: 'mercadopago', label: '💙 Mercado Pago' },
                { id: 'transfer', label: '🏦 Transferencia' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={paymentMethod === m.id}
                  className={`payment-pill ${paymentMethod === m.id ? 'active' : ''}`}
                  onClick={() => setPaymentMethod(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div className="checkout-total-box">
            <span className="checkout-total-label">Total a pagar:</span>
            <span className="checkout-total-value">${total}.00 USD</span>
          </div>

          <button
            type="submit"
            className="btn-gold btn-full justify-center"
          >
            Confirmar y Pagar Pedido 🔒
          </button>
        </form>
      </div>
    </div>
  );
}
