// Base de datos de alta perfumería con casas de autor, familias olfativas,
// pirámide olfativa estructurada, concentraciones y métricas sensoriales

export const PERFUMES_DATA = [
  {
    id: 1,
    name: 'Oud Royale Néctar',
    brand: 'Maison ÉLIXIR Paris',
    family: 'Amaderado',
    familyCategory: 'amaderado',
    concentration: 'Extrait de Parfum',
    concentrationCode: 'Extrait',
    gender: 'Unisex',
    prices: {
      '30ml': 75,
      '50ml': 105,
      '100ml': 145
    },
    defaultPrice: 145,
    rating: 4.9,
    reviewsCount: 184,
    tag: 'Edición Limitada',
    colorGradient: 'linear-gradient(135deg, #2b170c 0%, #9a6b42 60%, #c49a70 100%)',
    liquidTone: '#9a6b42',
    shortDesc: 'Un extracto monumental de maderas milenarias de oud de Trat y azafrán persa envuelto en miel y rosa de Damasco.',
    fullDesc: 'Oud Royale Néctar personifica la nobleza del oud silvestre envejecido durante diez años en barricas de roble francés. La salida despliega un azafrán ardiente y nuez moscada que da paso a un corazón aterciopelado de rosas búlgaras y absoluto de miel blanca. El secado reposa sobre un lecho infinito de oud, ámbar gris y pachulí oscuro.',
    pyramid: {
      top: ['Azafrán persa', 'Nuez moscada', 'Cardamomo negro'],
      heart: ['Madera de Oud silvestre', 'Rosa de Damasco', 'Miel blanca'],
      base: ['Ámbar gris', 'Pachulí añejado', 'Almizcle de Cachemira']
    },
    intensity: 5, // Escala de 1 a 5
    longevityHours: '16+ horas',
    sillage: 'Monumental (estela pesada)',
    occasion: 'Noches de Gala, Invierno & Ocasiones Memorables'
  },
  {
    id: 2,
    name: 'Velvet Vanilla & Tobacco',
    brand: 'Atelier Gourmand',
    family: 'Oriental',
    familyCategory: 'oriental',
    concentration: 'Eau de Parfum',
    concentrationCode: 'EDP',
    gender: 'Unisex',
    prices: {
      '30ml': 65,
      '50ml': 90,
      '100ml': 120
    },
    defaultPrice: 120,
    rating: 4.9,
    reviewsCount: 230,
    tag: 'Más Deseado',
    colorGradient: 'linear-gradient(135deg, #3d1c06 0%, #8c4a16 60%, #d99a4e 100%)',
    liquidTone: '#b56d2b',
    shortDesc: 'Hojas de tabaco aromático infusionadas en vainas de vainilla Bourbon de Madagascar y cacao puro.',
    fullDesc: 'Inspirado en los clubes privados londinenses y salones literarios victorianos. Velvet Vanilla & Tobacco contrasta la sequedad especiada del tabaco rubio con la suntuosidad licorosa de la vainilla de Madagascar macerada con haba tonka y notas de frutos secos tostados.',
    pyramid: {
      top: ['Hoja de Tabaco rubio', 'Clavo de olor', 'Especias cálidas'],
      heart: ['Haba Tonka tostada', 'Flor del tabaco', 'Cacao puro'],
      base: ['Vainilla Bourbon', 'Frutos secos caramelizados', 'Maderas ambaradas']
    },
    intensity: 4,
    longevityHours: '12 a 14 horas',
    sillage: 'Envolvente & Cálida',
    occasion: 'Citas íntimas, Otoño e Invierno'
  },
  {
    id: 3,
    name: 'Aqua Di Capri Solare',
    brand: 'Mediterraneo Profumi',
    family: 'Cítrico',
    familyCategory: 'citrico',
    concentration: 'Eau de Toilette',
    concentrationCode: 'EDT',
    gender: 'Hombre',
    prices: {
      '30ml': 55,
      '50ml': 75,
      '100ml': 95
    },
    defaultPrice: 95,
    rating: 4.8,
    reviewsCount: 142,
    tag: 'Fresco & Radiante',
    colorGradient: 'linear-gradient(135deg, #0e4860 0%, #20849e 60%, #8ddbe6 100%)',
    liquidTone: '#4a95a8',
    shortDesc: 'Brisa salina del mar Tirreno, bergamota de Calabria recién cortada y cedro blanco del Atlas.',
    fullDesc: 'Una bocanada de aire luminoso en los acantilados de Capri. Cítricos efervescentes macerados con sal marina cristalina, romero silvestre y un fondo crujiente de madera de cedro y almizcle blanco puro.',
    pyramid: {
      top: ['Bergamota de Calabria', 'Limón de Amalfi', 'Mandarina verde'],
      heart: ['Sal marina de roca', 'Romero toscano', 'Calone marino'],
      base: ['Cedro del Atlas', 'Almizcle blanco', 'Vetiver haitiano']
    },
    intensity: 3,
    longevityHours: '8 a 10 horas',
    sillage: 'Fresca & Radiante',
    occasion: 'Uso Diario, Primavera y Verano'
  },
  {
    id: 4,
    name: 'Rose Sublime & Peony',
    brand: 'Maison de Grasse',
    family: 'Floral',
    familyCategory: 'floral',
    concentration: 'Eau de Parfum',
    concentrationCode: 'EDP',
    gender: 'Mujer',
    prices: {
      '30ml': 60,
      '50ml': 85,
      '100ml': 110
    },
    defaultPrice: 110,
    rating: 4.9,
    reviewsCount: 168,
    tag: 'Firma Romántica',
    colorGradient: 'linear-gradient(135deg, #591b2e 0%, #9e3957 60%, #e07e99 100%)',
    liquidTone: '#9e3957',
    shortDesc: 'Pétalos de rosa Centifolia cosechados al amanecer en Grasse combinados con peonía blanca y lichi.',
    fullDesc: 'Una oda contemporánea a la feminidad refinada. Rosas de mayo recogidas a mano antes de que el sol evapore su rocío matutino, facetadas con la frescura acuosa del lichi rosado y una base de almizcle de seda.',
    pyramid: {
      top: ['Lichi rosado', 'Mandarina italiana', 'Grosella negra'],
      heart: ['Rosa Centifolia de Grasse', 'Peonía blanca', 'Magnolia'],
      base: ['Almizcle de seda', 'Madera de cachemira', 'Ámbar blanco']
    },
    intensity: 3,
    longevityHours: '9 a 11 horas',
    sillage: 'Elegante & Delicada',
    occasion: 'Bodas, Eventos de Primavera & Citas'
  },
  {
    id: 5,
    name: 'Cuir & Vetiver Nocture',
    brand: 'Éditions ÉLIXIR',
    family: 'Amaderado',
    familyCategory: 'amaderado',
    concentration: 'Extrait de Parfum',
    concentrationCode: 'Extrait',
    gender: 'Hombre',
    prices: {
      '30ml': 70,
      '50ml': 100,
      '100ml': 135
    },
    defaultPrice: 135,
    rating: 4.9,
    reviewsCount: 115,
    tag: 'Nicho Oscuro',
    colorGradient: 'linear-gradient(135deg, #1f1b18 0%, #4a4138 60%, #877665 100%)',
    liquidTone: '#574d42',
    shortDesc: 'Cuero toscano ahumado, vetiver de raíces profundas y pimienta de Sichuan.',
    fullDesc: 'La elegancia sobria y magnética de una chaqueta de cuero a medida en Milán. Notas terrosas de vetiver de Java entrelazadas con pimienta negra recién molida y una nota de gamuza flexible inconfundible.',
    pyramid: {
      top: ['Pimienta de Sichuan', 'Cardamomo de Guatemala', 'Bergamota ahumada'],
      heart: ['Cuero toscano', 'Iris florentino', 'Hojas de violeta'],
      base: ['Vetiver de Java', 'Madera de abedul', 'Resina de benjuí']
    },
    intensity: 5,
    longevityHours: '14+ horas',
    sillage: 'Imponente & Sofisticada',
    occasion: 'Reuniones de Negocios, Noches de Invierno'
  },
  {
    id: 6,
    name: 'Santal Blanc & Cardamome',
    brand: 'Maison ÉLIXIR Paris',
    family: 'Amaderado',
    familyCategory: 'amaderado',
    concentration: 'Eau de Parfum',
    concentrationCode: 'EDP',
    gender: 'Unisex',
    prices: {
      '30ml': 65,
      '50ml': 95,
      '100ml': 125
    },
    defaultPrice: 125,
    rating: 4.9,
    reviewsCount: 98,
    tag: 'Piel Sensorial',
    colorGradient: 'linear-gradient(135deg, #47321e 0%, #7d5937 60%, #c49d74 100%)',
    liquidTone: '#8c643e',
    shortDesc: 'Sándalo cremoso australiano infusionado con semillas de cardamomo verde y flor de iris.',
    fullDesc: 'Un aroma íntimo que se funde con la calidez de la piel como una prenda de cachemira. Sándalo lechoso, papiro egipcio y toques minerales de ámbar gris.',
    pyramid: {
      top: ['Cardamomo verde de la India', 'Semillas de cilantro', 'Violeta'],
      heart: ['Iris florentino', 'Papiro egipcio', 'Leche de higo'],
      base: ['Sándalo de Mysore', 'Cedro de Virginia', 'Ámbar cristal']
    },
    intensity: 3,
    longevityHours: '12 horas',
    sillage: 'Magnética & Cercana a la Piel',
    occasion: 'Aroma Firma Diario & Oficina Elegante'
  },
  {
    id: 7,
    name: 'Cerise Noire & Amande',
    brand: 'Atelier Gourmand',
    family: 'Oriental',
    familyCategory: 'oriental',
    concentration: 'Eau de Parfum',
    concentrationCode: 'EDP',
    gender: 'Mujer',
    prices: {
      '30ml': 68,
      '50ml': 98,
      '100ml': 130
    },
    defaultPrice: 130,
    rating: 5.0,
    reviewsCount: 156,
    tag: 'Seducción Pura',
    colorGradient: 'linear-gradient(135deg, #420f1a 0%, #7a1e32 60%, #bd4b66 100%)',
    liquidTone: '#7a1e32',
    shortDesc: 'Cereza negra licorosa con gotas de almendra amarga, licor de marrasquino y jazmín sambac.',
    fullDesc: 'Un néctar carnal y tentador. La cereza negra madura se funde en licor con almendra amarga tostada, evolucionando hacia un corazón floral opulento de rosa turca y jazmín, reposando sobre bálsamo del Perú y tonka.',
    pyramid: {
      top: ['Cereza negra licorosa', 'Almendra amarga', 'Licor de marrasquino'],
      heart: ['Rosa turca', 'Jazmín Sambac', 'Ciruela damascena'],
      base: ['Haba Tonka tostada', 'Bálsamo del Perú', 'Sándalo oscuro']
    },
    intensity: 4,
    longevityHours: '12 horas',
    sillage: 'Sensual & Duradera',
    occasion: 'Noche, Fiestas & Ocasiones Especiales'
  },
  {
    id: 8,
    name: 'Desert Mirage Al-Zafaran',
    brand: 'Oman Royal Reserve',
    family: 'Oriental',
    familyCategory: 'oriental',
    concentration: 'Extrait de Parfum',
    concentrationCode: 'Extrait',
    gender: 'Unisex',
    prices: {
      '30ml': 80,
      '50ml': 115,
      '100ml': 155
    },
    defaultPrice: 155,
    rating: 4.9,
    reviewsCount: 87,
    tag: 'Joya Árabe',
    colorGradient: 'linear-gradient(135deg, #3d2305 0%, #855013 60%, #d4984f 100%)',
    liquidTone: '#945c1a',
    shortDesc: 'Incienso sagrado de Omán, azafrán persa, canela de Ceilán y cuero dorado.',
    fullDesc: 'Una travesía olfativa por las dunas desérticas al caer el crepúsculo. Resinas sagradas de olíbano recolectadas en el sur de Omán, especias milenarias y un velo de vainilla ahumada con ámbar seco.',
    pyramid: {
      top: ['Azafrán persa', 'Canela de Ceilán', 'Coriandro'],
      heart: ['Incienso sagrado de Omán', 'Mirra de Yemen', 'Benjuí'],
      base: ['Cuero dorado', 'Vainilla ahumada', 'Ámbar seco']
    },
    intensity: 5,
    longevityHours: '16+ horas',
    sillage: 'Monumental (estela legendaria)',
    occasion: 'Climas Fríos, Gala & Colección de Lujo'
  }
];

export const OLFACTORY_FAMILIES = [
  { id: 'todos', name: 'Todas las Familias' },
  { id: 'amaderado', name: 'Amaderado' },
  { id: 'floral', name: 'Floral' },
  { id: 'citrico', name: 'Cítrico' },
  { id: 'oriental', name: 'Oriental' }
];

export const CONCENTRATIONS = [
  { id: 'todos', name: 'Todas las Concentraciones' },
  { id: 'Extrait', name: 'Extrait de Parfum' },
  { id: 'EDP', name: 'Eau de Parfum' },
  { id: 'EDT', name: 'Eau de Toilette' }
];
