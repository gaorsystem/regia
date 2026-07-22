import { EventCategory, VenueSpace, PackageOption, AddOnOption, Testimonial, FAQItem, GalleryItem } from '../types';

import heroBallroomImg from '../assets/images/regia_hero_ballroom_1784746564893.jpg';
import weddingHallImg from '../assets/images/regia_wedding_hall_1784746580931.jpg';
import gardenTerraceImg from '../assets/images/regia_garden_terrace_1784746595050.jpg';
import partyJoyImg from '../assets/images/regia_party_joy_1784746951411.jpg';
import unionToastImg from '../assets/images/regia_union_toast_1784746967357.jpg';

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: 'boda',
    title: 'Bodas de Ensueño',
    tag: 'Ceremonia & Recepción',
    badgeColor: '#e2c471',
    description: 'Del civil íntimo a la recepción nupcial imperial: arquitectura sofisticada, ambientación floral de autor, suite de novia privada y protocolo integral.',
    includedItems: [
      'Suite nupcial privada con champagne de bienvenida',
      'Mobiliario Imperial (Mesas de espejo y sillas Tiffany/Ghost)',
      'Diseño floral personalizado y centros de mesa altos',
      'Menú gourmet de 3 tiempos + Prueba de degustación para 4 personas',
      'Coordinadora de boda in-situ durante las 8 horas de evento'
    ],
    recommendedGuests: '50 a 300 invitados',
    popularAddon: 'Open Bar Premium + Hora Loca Temática',
    basePricePerGuest: 180
  },
  {
    id: 'quinceanero',
    title: 'Quinceañeros Mágicos',
    tag: 'Fiesta & Show',
    badgeColor: '#d8a79f',
    description: 'Vals de ensueño, escenografía de luces robóticas DMX, pista LED interactiva, lounge de jóvenes y producción artística para su noche inolvidable.',
    includedItems: [
      'Pista de baile con iluminación LED y efectos de humo denso',
      'Lounge exclusivo para jóvenes con mocktails sin alcohol',
      'Estructura de luces robóticas y DJ en vivo profesional',
      'Mesa de dulces Fine Pastry & Cascada de Chocolate / Donas',
      'Fotocall interactivo 360° con accesorios LED'
    ],
    recommendedGuests: '80 a 250 invitados',
    popularAddon: 'Cabina 360 + Robots LED & Hora Loca',
    basePricePerGuest: 160
  },
  {
    id: 'despedida',
    title: 'Despedidas de Soltero/a VIP',
    tag: 'Privado & Exclusivo',
    badgeColor: '#2c4636',
    description: 'Ambientes privados en nuestra Terraza Lounge Botánica, barra libre de coctelería de autor, DJs invitados y absoluta privacidad para ti y tu grupo.',
    includedItems: [
      'Uso exclusivo de Terraza Lounge & Barra Central',
      'Barra Libre de Coctelería de Autor (Margaritas, Gin Tonic, Pisco Sour, Spritz)',
      'Finger Food & Estación de Tapas Gourmet',
      'DJ con playlist personalizada y sistema de sonido High-End',
      'Zona de juegos interactivos & fotógrafo privado'
    ],
    recommendedGuests: '25 a 80 invitados',
    popularAddon: 'Bartender Show Flambé + Saxofonista en Vivo',
    basePricePerGuest: 140
  },
  {
    id: 'cumpleanos',
    title: 'Cumpleaños & Onomásticos',
    tag: 'Celebración Única',
    badgeColor: '#e2c471',
    description: 'De los 18 a los 90 años: adaptamos el montaje, la gastronomía, la música y el ambiente al estilo y personalidad del agasajado.',
    includedItems: [
      'Ambientación temática personalizada (Gatsby, Elegante, Tropical, Retro)',
      'Catering estilo Buffet Gourmet o Plato Servido',
      'Barra de coctelería clásica y cerveza artesanal',
      'Proyector láser 4K para video homenaje',
      'Torta personalizada de diseño exclusivo'
    ],
    recommendedGuests: '30 a 200 invitados',
    popularAddon: 'Banda de Música en Vivo / Mariachis / Orquesta',
    basePricePerGuest: 130
  },
  {
    id: 'aniversario',
    title: 'Aniversarios & Bodas de Oro',
    tag: 'Momentos Eternos',
    badgeColor: '#d8a79f',
    description: 'Reuniones cálidas y distinguidas con música instrumental en vivo, ambiente a la luz de las velas y atención personalizada de primer nivel.',
    includedItems: [
      'Estructura de velas & candelabros de bronce vintage',
      'Violinista o pianista durante el coctel de bienvenida',
      'Menú maridaje con selección de vinos reserva',
      'Libro de firmas en cuero y caja de recuerdos de latón',
      'Estación de café gourmet y digestivos'
    ],
    recommendedGuests: '30 a 150 invitados',
    popularAddon: 'Show de Tango o Danza + Estación de Jamón Ibérico',
    basePricePerGuest: 150
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos & Galas',
    tag: 'Empresa & Networking',
    badgeColor: '#2c4636',
    description: 'Lanzamientos de marca, galas de fin de año y reuniones directivas. Equipamiento audiovisual de punta, red Wi-Fi dedicada y protocolo impecable.',
    includedItems: [
      'Pantalla gigante LED P2.5 + Microfonía inalámbrica Sennheiser',
      'Red Wi-Fi simétrica de alta velocidad para más de 300 dispositivos',
      'Coffee break ejecutivo o Cena de Gala de 4 tiempos',
      'Personal de acreditación y anfitrionaje bilingüe',
      'Planta eléctrica de respaldo de 150 KVA de encendido automático'
    ],
    recommendedGuests: '40 a 350 personas',
    popularAddon: 'Streaming en Directo + Fotografía de Prensa',
    basePricePerGuest: 145
  }
];

export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'gran-salon',
    name: 'Gran Salón Imperial',
    subtitle: 'El corazón de las grandes celebraciones',
    capacity: 'Hasta 320 invitados',
    areaSize: '650 m²',
    description: 'Un majestuoso salón libre de columnas con techos de 6 metros de altura, arañas de cristal fino, aire acondicionado ecológico de alta potencia y acústica insonorizada.',
    image: heroBallroomImg,
    features: [
      'Techos altos de 6m con arañas de cristal Swarovski',
      'Climatización HVAC inteligente ecológica',
      'Pista de baile flotante amortiguada',
      'Iluminación robotizada DMX perimetral regulable',
      'Suite privada anexa con baño completo y espejo Hollywood'
    ],
    idealFor: ['Bodas Imperiales', 'Quinceañeros', 'Galas Corporativas', 'Fiestas de Graduación']
  },
  {
    id: 'jardin-secret',
    name: 'Jardín & Terraza Botánica',
    subtitle: 'Magia al aire libre entre luces y naturaleza',
    capacity: 'Hasta 180 invitados',
    areaSize: '450 m²',
    description: 'Un oasis verde iluminado con cortinas de guirnaldas micro-LED, árboles centenarios, pérgola para ceremonias civiles y barras rústicas de madera noble.',
    image: gardenTerraceImg,
    features: [
      'Pérgola romántica rodeada de jazmines y vegetación natural',
      'Techo retráctil transparente en caso de garúa o lluvia',
      'Barra central de coctelería estilo vintage industrial',
      'Calefactores de patio de llama alta para noches frescas',
      'Iluminación cálida de guirnaldas edison regulables'
    ],
    idealFor: ['Ceremonias Civiles', 'Cocktails de Bienvenida', 'Despedidas de Soltera', 'Aniversarios Intimistas']
  },
  {
    id: 'lounge-vip',
    name: 'Salon Nupcial & Lounge VIP',
    subtitle: 'Privacidad y sofisticación en detalle',
    capacity: 'Hasta 70 invitados',
    areaSize: '200 m²',
    description: 'Espacio cálido y exclusivo pensado para cenas privadas, cocteles de negocios o zonas de descanso VIP dentro del evento principal.',
    image: weddingHallImg,
    features: [
      'Sillones de terciopelo y cristalería de corte fino',
      'Bar privado con coctelería de autor a medida',
      'Sistema de sonido Bose multi-zona independiente',
      'Entrada privada directa desde el estacionamiento VIP',
      'Acceso exclusivo a suite de retoque'
    ],
    idealFor: ['Cenas de Ensayo', 'Cumpleaños VIP', 'Cocktails Corporativos', 'Baby Showers Exclusivos']
  }
];

export const PACKAGE_OPTIONS: PackageOption[] = [
  {
    id: 'pack-intimo',
    name: 'Élite Íntimo',
    subtitle: 'Elegancia refinada para grupos selectos',
    priceEstimate: 'Propuesta Personalizada en Cita',
    pricePerGuest: 135,
    features: [
      'Uso del espacio por 6 horas',
      'Mobiliario elegante a elección',
      'Catering Gourmet (Entrada + Plato Principal + Postre)',
      'Brindis con espumante importado',
      'Música ambiental y luces de ambiente',
      'Coordinador de protocolo'
    ],
    ctaText: 'Solicitar Asesoría Élite'
  },
  {
    id: 'pack-celebracion',
    name: 'Gran Celebración REGIA',
    subtitle: 'El equilibrio perfecto entre show, gastronomía y fiesta',
    priceEstimate: 'Propuesta Personalizada en Cita',
    pricePerGuest: 175,
    isPopular: true,
    features: [
      'Uso del espacio por 8 horas de fiesta',
      'Mobiliario Imperial (Mesa de espejo / Sillones VIP)',
      'Menú Servido de 3 tiempos + Degustación previa',
      'Barra Libre de Coctelería de Autor (4 horas)',
      'DJ Profesional + Iluminación Robótica DMX',
      'Mesa de Dulces Fine Pastry de 100 porciones',
      'Suite Privada de descanso & Personal de seguridad'
    ],
    ctaText: 'Solicitar Asesoría Gran Celebración'
  },
  {
    id: 'pack-imperial',
    name: 'Regia Platinum Imperial',
    subtitle: 'Experiencia Todo Incluido Luxe sin preocupaciones',
    priceEstimate: 'Propuesta Personalizada en Cita',
    pricePerGuest: 220,
    features: [
      'Uso exclusivo del Local Completo (Salón + Jardín + Lounge)',
      '9 horas de evento sin límite de horario',
      'Catering Gourmet de Alta Cocina + Estación de Trasnochadores',
      'Barra Libre Ultra Premium (Whiskies 12 años, Gin, Pisco, Cocktails)',
      'Pista de Baile LED Interactiva + Efectos de Humo Denso / Chispas Frías',
      'Hora Loca Temática con 4 Personajes + Cotillón Importado',
      'Fotografía y Video 4K con Dron durante todo el evento',
      'Coordinación Integral con 2 Wedding / Event Planners dedicados'
    ],
    ctaText: 'Solicitar Asesoría Platinum Imperial'
  }
];

export const ADDON_OPTIONS: AddOnOption[] = [
  {
    id: 'addon-openbar',
    name: 'Barra Libre de Autor Premium',
    category: 'bar',
    price: 35,
    description: 'Pisco Sour, Chilcanos de maracuyá, Gin Tonic, Mojitos, Aperol Spritz y mocktails sin límite.',
    iconName: 'Wine',
    popular: true
  },
  {
    id: 'addon-pista-led',
    name: 'Pista de Baile LED Interactiva',
    category: 'show',
    price: 1200,
    description: 'Modulo de cristal templado con patrones de luz sincronizados a la música.',
    iconName: 'Sparkles',
    popular: true
  },
  {
    id: 'addon-dj-luces',
    name: 'DJ en Vivo + Cabezales Robóticos',
    category: 'show',
    price: 1500,
    description: 'DJs residentes con consola Pioneer NEXUS2, efectos visuales y luces DMX.',
    iconName: 'Music'
  },
  {
    id: 'addon-hora-loca',
    name: 'Hora Loca Temática & Cotillón LED',
    category: 'show',
    price: 1400,
    description: '4 arlequines/bailarines temáticos, zanqueros, cabezas gigantes y cotillón neón.',
    iconName: 'PartyPopper',
    popular: true
  },
  {
    id: 'addon-photo360',
    name: 'Plataforma Giratoria Video 360°',
    category: 'photo',
    price: 900,
    description: 'Videos en cámara lenta en HD transmitidos al instante a los celulares de los invitados.',
    iconName: 'Camera'
  },
  {
    id: 'addon-mesa-dulces',
    name: 'Mesa de Dulces Fine Pastry (120 pcs)',
    category: 'catering',
    price: 850,
    description: 'Macarons franceses, shots de maracuyá, trufas belgas y mini tartaletas de frutos rojos.',
    iconName: 'Cake'
  },
  {
    id: 'addon-estacion-trasnocho',
    name: 'Estación de Trasnochadores (Snacks)',
    category: 'catering',
    price: 18,
    description: 'Mini hamburguesas gourmet, churros calientes con manjar blanco y tacos criollos a medianoche.',
    iconName: 'Utensils'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Celebrar nuestra boda en REGIA fue la mejor decisión. No tuvimos que estresarnos con 20 proveedores distintos: ellos coordinaron la decoración, las luces, la comida exquisita y el protocolo a la perfección.',
    author: 'Lucía & Rodrigo V.',
    eventType: 'Boda Nupcial',
    date: 'Febrero 2026',
    rating: 5,
    location: 'Miraflores, Lima'
  },
  {
    id: 't2',
    quote: 'El quinceañero de mi hija pareció sacado de una revista. La pista LED, la mesa de dulces y la atención del personal hicieron que todos los invitados quedaran fascinados. ¡100% recomendado!',
    author: 'Dra. Carmen Alarcón',
    eventType: 'Quinceañero Imperial',
    date: 'Enero 2026',
    rating: 5,
    location: 'Surco, Lima'
  },
  {
    id: 't3',
    quote: 'Organizamos nuestra gala corporativa anual para 200 ejecutivos. La infraestructura técnica, la comida de autor y la puntualidad fueron impecables. Sin duda volveremos.',
    author: 'Ing. Fernando Mendoza',
    eventType: 'Gala Corporativa Tech',
    date: 'Diciembre 2025',
    rating: 5,
    location: 'San Isidro, Lima'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Qué incluye la reserva del local?',
    answer: 'Nuestra reserva incluye el uso exclusivo del espacio elegido (Salón Imperial, Jardín Botánico o Lounge), mobiliario base, sistema de climatización, planta eléctrica de respaldo, personal de limpieza continuo, seguridad privada en la puerta y el acompañamiento de un coordinador de evento dedicado.',
    category: 'reserva'
  },
  {
    id: 'faq-2',
    question: '¿Puedo llevar mi propio catering o bebidas?',
    answer: 'Contamos con una propuesta gastronómica y barra de autor interna de altísimo nivel. Sin embargo, si deseas contratar un catering externo o llevar tu propio licor, ofrecemos la modalidad de alquiler de espacio con tarifa de descorche preferencial.',
    category: 'catering'
  },
  {
    id: 'faq-3',
    question: '¿Hasta qué hora podemos celebrar?',
    answer: 'Contamos con licencia de funcionamiento nocturna y aislamiento acústico profesional, lo que nos permite ofrecer eventos hasta las 4:00 am o 5:00 am según el paquete contratado.',
    category: 'instalaciones'
  },
  {
    id: 'faq-4',
    question: '¿Cuenta el local con estacionamiento y seguridad?',
    answer: 'Sí, disponemos de zona de estacionamiento privado vigilado con capacidad para más de 40 vehículos, además de servicio opcional de Valet Parking y personal de seguridad calificado durante toda la duración del evento.',
    category: 'instalaciones'
  },
  {
    id: 'faq-5',
    question: '¿Con cuánto dinero se separa la fecha?',
    answer: 'Puedes congelar la fecha y el precio congelado de tu evento con solo el 20% de adelanto. El saldo restante se liquida en cómodas cuotas hasta 7 días antes del evento.',
    category: 'pagos'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-party',
    title: 'Fiesta, Euforia & Alegría en Pista',
    category: 'luces',
    image: partyJoyImg,
    caption: 'Pista de baile a plena energía con lluvia de confeti, DJ en vivo e iluminación de discoteca.'
  },
  {
    id: 'g-union',
    title: 'Brindis de Unión, Familia & Amigos',
    category: 'catering',
    image: unionToastImg,
    caption: 'Momentos emotivos de felicidad compartida, abrazos y risas genuinas entre seres queridos.'
  },
  {
    id: 'g1',
    title: 'Gran Salón Imperial en Noche de Boda',
    category: 'salon',
    image: heroBallroomImg,
    caption: 'Montaje imperial con centros de mesa altos de orquídeas y candelabros.'
  },
  {
    id: 'g2',
    title: 'Mesa de Honor & Banquete Nupcial',
    category: 'catering',
    image: weddingHallImg,
    caption: 'Diseño de mesa de espejo con cristalería fina e iluminación cálida.'
  },
  {
    id: 'g3',
    title: 'Jardín Botánico & Pérgola Nocturna',
    category: 'jardin',
    image: gardenTerraceImg,
    caption: 'Espacio al aire libre con luces colgantes ideal para cocteles y ceremonias.'
  },
  {
    id: 'g4',
    title: 'Iluminación Robótica & Pista de Baile',
    category: 'luces',
    image: heroBallroomImg,
    caption: 'Cabezales móviles DMX y efectos de humo denso para el vals.'
  }
];
