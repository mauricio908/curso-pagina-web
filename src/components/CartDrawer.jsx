import { useEffect } from 'react';
import { IconClose, IconBag, IconCheck, IconTruck } from './Icons';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  totalItemsCount,
  subtotal,
  discountPercent,
  discountAmount,
  shipping,
  total,
  promoCode,
  setPromoCode,
  promoMessage,
  onApplyPromo,
  onUpdateQuantity,
  onRemoveFromCart,
  onOpenCheckout,
  onCheckoutWhatsApp
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 60;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div
      className="cart-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Bolsa de compras"
    >
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div className="cart-header-title-wrap">
            <IconBag size={20} className="gold-icon" aria-hidden="true" />
            <h2 className="cart-header-title">Tu Bolsa ({totalItemsCount})</h2>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Cerrar bolsa de compras"
          >
            <IconClose size={20} />
          </button>
        </div>

        {/* Barra de Progreso de Envío Gratis */}
        <div className="free-shipping-progress-card">
          <div className="shipping-progress-text">
            <IconTruck size={16} aria-hidden="true" />
            {subtotal >= FREE_SHIPPING_THRESHOLD ? (
              <span className="free-shipping-achieved">
                <IconCheck size={14} /> ¡Felicidades! Tienes <strong>Envío Exprés Gratis</strong>
              </span>
            ) : (
              <span>
                Agrega <strong>${remainingForFreeShipping} USD</strong> más para <strong>Envío Gratis</strong>
              </span>
            )}
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-state">
            <div className="empty-icon-wrap" aria-hidden="true">
              <IconBag size={42} />
            </div>
            <p className="empty-title">Tu bolsa está vacía</p>
            <p className="empty-subtitle">Explora nuestras fragancias de autor y elige tu favorita.</p>
          </div>
        ) : (
          <>
            <div className="cart-items-list" role="list">
              {cart.map((item) => (
                <div key={item.cartItemId} className="cart-item" role="listitem">
                  <div
                    className="cart-item-preview"
                    style={{ background: item.colorGradient }}
                    aria-hidden="true"
                  ></div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-size">Volumen: {item.size}</div>
                    <div className="cart-item-price">${item.price * item.quantity}.00</div>
                  </div>
                  <div className="qty-control" aria-label="Control de cantidad">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                      aria-label="Disminuir cantidad"
                    >
                      -
                    </button>
                    <span className="qty-number" aria-live="polite">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-delete-btn"
                    onClick={() => onRemoveFromCart(item.cartItemId)}
                    title="Eliminar producto"
                    aria-label={`Eliminar ${item.name} del carrito`}
                  >
                    <IconClose size={15} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="promo-row">
                <input
                  type="text"
                  className="promo-input"
                  placeholder="Cupón (ELIXIR15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  aria-label="Código de descuento"
                />
                <button
                  type="button"
                  className="btn-add-cart btn-promo"
                  onClick={onApplyPromo}
                >
                  Aplicar
                </button>
              </div>
              {promoMessage && (
                <div className={`promo-alert ${discountPercent > 0 ? 'promo-success' : 'promo-error'}`}>
                  {promoMessage}
                </div>
              )}

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal}.00</span>
              </div>

              {discountAmount > 0 && (
                <div className="summary-row summary-discount">
                  <span>Descuento Especial (-{discountPercent}%)</span>
                  <span>-${discountAmount}.00</span>
                </div>
              )}

              <div className="summary-row">
                <span>Envío</span>
                <span className={shipping === 0 ? 'shipping-free-pill' : ''}>
                  {shipping === 0 ? 'GRATIS' : `$${shipping}.00`}
                </span>
              </div>

              <div className="summary-row summary-total">
                <span>Total Estimado</span>
                <span className="summary-total-amount">${total}.00 USD</span>
              </div>

              <button
                type="button"
                className="btn-gold btn-full justify-center"
                onClick={onOpenCheckout}
              >
                Proceder al Pago en Línea 🔒
              </button>

              <button
                type="button"
                className="btn-whatsapp-outline btn-full justify-center"
                onClick={onCheckoutWhatsApp}
              >
                Pedir por WhatsApp 💬
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
