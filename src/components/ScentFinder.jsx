import { IconFlame, IconDrop, IconLeaf, IconSparkles, IconCrown } from './Icons';

export default function ScentFinder({ vibeCategories, selectedVibe, onSelectVibe }) {
  const getVibeIcon = (id) => {
    switch (id) {
      case 'oriental': return <IconCrown size={15} />;
      case 'dulce': return <IconFlame size={15} />;
      case 'fresco': return <IconDrop size={15} />;
      case 'floral': return <IconLeaf size={15} />;
      case 'amaderado': return <IconFlame size={15} />;
      default: return <IconSparkles size={15} />;
    }
  };

  return (
    <section className="scent-finder-box" aria-labelledby="finder-title">
      <div className="finder-header">
        <div>
          <span className="section-tag">ASISTENTE SENSORIAL DE NOTAS</span>
          <h2 id="finder-title" className="finder-title">¿Qué impronta olfativa deseas transmitir hoy?</h2>
          <p className="finder-subtitle">
            Selecciona la atmósfera que mejor resuene con tu presencia o momento especial.
          </p>
        </div>
      </div>

      <div className="finder-pills" role="radiogroup" aria-label="Filtro sensorial por acorde olfativo">
        {vibeCategories.map((vibe) => (
          <button
            key={vibe.id}
            type="button"
            role="radio"
            aria-checked={selectedVibe === vibe.id}
            className={`finder-pill ${selectedVibe === vibe.id ? 'active' : ''}`}
            onClick={() => onSelectVibe(vibe.id)}
          >
            <span className="vibe-icon-glyph" aria-hidden="true">{getVibeIcon(vibe.id)}</span>
            <span>{vibe.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
