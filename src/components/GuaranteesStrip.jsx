import { IconShield, IconTruck, IconGift } from './Icons';

export default function GuaranteesStrip() {
  const GUARANTEES = [
    {
      icon: <IconShield size={24} />,
      title: '100% Originales & Sellados',
      description: 'Certificado de autenticidad con código batch oficial y trazabilidad de lote de la Maison.'
    },
    {
      icon: <IconTruck size={24} />,
      title: 'Envío Isotérmico Asegurado',
      description: 'Embalaje con amortiguación de impacto y control de temperatura de 24 a 48h hábiles.'
    },
    {
      icon: <IconGift size={24} />,
      title: '2 Decants de Muestra de Cortesía',
      description: 'Recibe 2 viales de 2ml con cada pedido para descubrir próximas creaciones sin cargo.'
    }
  ];

  return (
    <section className="guarantees-strip" aria-label="Compromisos y garantías de calidad">
      {GUARANTEES.map((item, idx) => (
        <div key={idx} className="guarantee-card">
          <div className="guarantee-icon" aria-hidden="true">{item.icon}</div>
          <div className="guarantee-info">
            <h3 className="guarantee-title">{item.title}</h3>
            <p className="guarantee-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
