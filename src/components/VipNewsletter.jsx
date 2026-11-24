import { useState } from 'react';
import { IconSparkles, IconCheck } from './Icons';

export default function VipNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="newsletter-section" aria-label="Suscripción exclusiva VIP">
      <div className="newsletter-card">
        <div className="newsletter-badge">
          <IconSparkles size={14} aria-hidden="true" />
          <span>CÍRCULO PRIVADO ÉLIXIR</span>
        </div>
        <h2 className="newsletter-title">
          Acceso Exclusivo a <span>Lotes Inéditos</span>
        </h2>
        <p className="newsletter-desc">
          Recibe invitaciones a pre-lanzamientos privados de ediciones limitadas y obtén una muestra de cortesía adicional de 5ml en tu próxima orden.
        </p>

        {subscribed ? (
          <div className="newsletter-success">
            <IconCheck size={18} />
            <span>¡Bienvenido al Círculo Privado! Te hemos enviado tu invitación VIP.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              required
              placeholder="Ingresa tu correo electrónico..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              aria-label="Correo electrónico para suscripción VIP"
            />
            <button type="submit" className="btn-gold">
              Unirse al Círculo
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
