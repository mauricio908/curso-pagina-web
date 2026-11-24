import { IconStar, IconSparkles } from './Icons';

const REVIEWS = [
  {
    id: 1,
    critic: 'Jean-Luc Moreau',
    role: 'Crítico de Alta Perfumería, París',
    perfume: 'Oud Royale Néctar',
    quote: 'Una obra cumbre del oud contemporáneo. El equilibrio entre el azafrán y la rosa de Damasco crea una estela embriagadora digna de los palacios reales.',
    rating: 5
  },
  {
    id: 2,
    critic: 'Elena Rostova',
    role: 'Sommelier de Aromas, Milán',
    perfume: 'Velvet Vanilla & Tobacco',
    quote: 'La vainilla Bourbon más rica y untuosa que he probado en años. Notas ahumadas de tabaco rubio que evolucionan con calidez irresistible.',
    rating: 5
  },
  {
    id: 3,
    critic: 'Marcus Vance',
    role: 'Coleccionista Nicho VIP, Londres',
    perfume: 'Desert Mirage',
    quote: 'La concentración de resinas y benjuí te transporta a un bazar oriental a medianoche. Dura más de 16 horas en piel con una proyección majestuosa.',
    rating: 5
  }
];

export default function ConnoisseurReviews() {
  return (
    <section className="critics-section" aria-labelledby="critics-heading">
      <div className="critics-header">
        <span className="section-tag">EL VEREDICTO DE LOS EXPERTOS</span>
        <h2 id="critics-heading" className="critics-title">
          Aclamado por <span>Narices & Connoisseurs</span>
        </h2>
      </div>

      <div className="critics-grid">
        {REVIEWS.map((rev) => (
          <article key={rev.id} className="critic-card">
            <div className="critic-rating" aria-label={`Calificación: ${rev.rating} de 5 estrellas`}>
              {[...Array(rev.rating)].map((_, i) => (
                <IconStar key={i} size={15} className="star-gold" />
              ))}
            </div>
            <blockquote className="critic-quote">
              &ldquo;{rev.quote}&rdquo;
            </blockquote>
            <div className="critic-footer">
              <div className="critic-author-name">{rev.critic}</div>
              <div className="critic-author-role">{rev.role}</div>
              <div className="critic-perfume-tag">
                <IconSparkles size={12} aria-hidden="true" />
                <span>Sobre {rev.perfume}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
