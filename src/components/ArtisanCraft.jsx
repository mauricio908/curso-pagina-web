import { IconCrown, IconSparkles, IconDrop } from './Icons';

export default function ArtisanCraft() {
  const PILLARS = [
    {
      icon: <IconDrop size={22} />,
      title: 'Concentración Extrait al 30%',
      desc: 'Formulaciones puras con hasta un 30% de aceites esenciales sin dilución artificial, brindando una longevidad que supera las 14 horas continuas en piel.'
    },
    {
      icon: <IconCrown size={22} />,
      title: 'Cosechas Nobles de Grasse & Omán',
      desc: 'Azafrán persa, oud envejecido de Trat, rosas centifolias de Grasse y vainilla Bourbon seleccionada a mano bajo cosechas botánicas de comercio ético.'
    },
    {
      icon: <IconSparkles size={22} />,
      title: 'Frascos de Cristal Pesado',
      desc: 'Cada flacon es soplado con vidrio de alta densidad, cuello con baño de oro pulido y tapón magnético pesado tallado para preservar la fórmula de la luz solar.'
    }
  ];

  return (
    <section className="artisan-section" aria-labelledby="artisan-heading">
      <div className="artisan-header">
        <span className="section-tag">MAISON ÉLIXIR • MANIFIESTO</span>
        <h2 id="artisan-heading" className="artisan-title">
          El Arte Sublime de la <span>Alquimia Olfativa</span>
        </h2>
        <p className="artisan-desc">
          En un mundo saturado de fragancias efímeras, diseñamos elixires con paciencia, tiempo de maceración de 6 meses y materias primas extraordinarias.
        </p>
      </div>

      <div className="artisan-grid">
        {PILLARS.map((pillar, idx) => (
          <div key={idx} className="artisan-card">
            <div className="artisan-icon-wrap" aria-hidden="true">
              {pillar.icon}
            </div>
            <h3 className="artisan-card-title">{pillar.title}</h3>
            <p className="artisan-card-desc">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
