export const baseAssetsUrl = 'https://seyva-media-assets.s3.us-west-2.amazonaws.com'
export const headerLinks = [
  { text: 'Inicio', href: '#' },
  { text: 'Experiencias', href: '#' },
  { text: 'Conócenos', href: '#' },
  { text: 'Programas', href: '#' }
]
export const socialMedia = [
  {
    name: 'YouTube',
    icon: '/icons/SEYVA_ICONS_YT.svg',
    link: 'https://www.youtube.com/@fseyva_mx',
    size: 50
  },
  {
    name: 'Facebook',
    icon: '/icons/SEYVA_ICONS_IG.svg',
    link: 'https://www.facebook.com/fseyva.mx',
    size: 36
  },
  {
    name: 'Instagram',
    icon: '/icons/SEYVA_ICONS_FB.svg',
    link: 'https://www.instagram.com/fseyva_mx',
    size: 36
  },
  {
    name: 'X',
    icon: '/icons/SEYVA_ICONS_X.svg',
    link: 'https://x.com/fseyva_mx',
    size: 36
  }
]
export const imageSlides = [
  {
    image: `${baseAssetsUrl}/amamos-la-vida.png`,
    title: "Amamos la vida",
    description: "En la fundación SEYVA tenemos como objetivo contribuir al bienestar integral de personas y comunidades en situación de vulnerabilidad",
    buttonText: "Súmate",
    link: "#"
  },
  {
    image: `${baseAssetsUrl}/nuestra-historia.png`,
    title: "Nuestra historia",
    description: "La fundación comenzó con un grupo de personas que, al ver la necesidad en sus propias comunidades, decidieron no quedarse de brazos cruzados.",
    buttonText: "Conoce más",
    link: "#"
  },
  {
    image: `${baseAssetsUrl}/casos-de-exito.png`,
    title: "Casos de éxito",
    description: "Detrás de cada apoyo hay un rostro, una familia, una vida que cambió.",
    buttonText: "Descubre",
    link: "#"
  }
];
export const headerWords = [
  { text: 'Salud', color: 'green'},
  { text: 'Educación', color: 'orange'},
  { text: 'Vivienda', color: 'purple'},
  { text: 'Alimentación', color: 'pink'}
]
export const jumboSlides = [
  {
    image: `${baseAssetsUrl}/alivio-al-alma.png`,
    icon: '/white_health.svg',
    title: 'Alivio al Alma',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p>
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-green',
    buttonClasses: 'bg-green !text-3xl'
  },
  {
    image: `${baseAssetsUrl}/suenos-que-estudian.png`,
    icon: '/white_education.svg',
    title: 'Sueños que Estudian',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-orange',
    buttonClasses: 'bg-orange !text-3xl'
  },
  {
    image: `${baseAssetsUrl}/un-techo-con-esperanza.png`,
    icon: '/white_house.svg',
    title: 'Un Techo con Esperanza',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-purple',
    buttonClasses: 'bg-purple !text-3xl'
  },
  {
    image: `${baseAssetsUrl}/pan-para-hoy-y-manana.png`,
    icon: '/white_feed.svg',
    title: 'Pan para Hoy y Mañana',
    description: (
    <div>
      <p className="text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-pink',
    buttonClasses: 'bg-pink !text-3xl'
  },
  {
    image: `${baseAssetsUrl}/acopio.png`,
    icon: '/logo_white.svg',
    title: 'Centro de acopio',
    description: (
    <div>
      <p className="text-3xl font-semibold mb-1">Taxco, Guerrero</p>
      <p className="text-xl leading-relaxed">Estamos organizando un pequeño acopio para recaudar fondos y seguir transformando vidas</p> 
    </div>),
    buttonText: 'Súmate',
    cardClasses: 'bg-blue',
    buttonClasses: 'bg-blue border-3 primary-button transition-colors duration-900 ease-in-out !text-3xl px-10 py-4'
  }
]
export const contactFormFields = [
  {
    label: 'Nombre',
    placeholder: 'Escribe tu nombre',
    type: 'text',
    required: true,
  },
  {
    label: 'Correo electrónico',
    placeholder: 'correo@ejemplo.com',
    type: 'email',
    required: true
  },
  {
    label: 'Teléfono',
    placeholder: '(xxx) xxx-xxxx',
    type: 'tel'
  },
  {
    label: 'Localidad o municipio',
    placeholder: 'Nombre de tu localidad',
    type: 'text',
    required: true
  },
  {
    label: 'Tipo de apoyo que solicita o en el que desea colaborar',
    default: '',
    required: true,
    placeholder: 'Selecciona una opción',
    type: 'select',
    options: [
      { value: 'vida-sana', label: 'Vida Sana'},
      { value: 'puertas-abiertas', label: 'Puertas Abiertas'},
      { value: 'techo-firme', label: 'Techo firme'},
      { value: 'mesa-llena', label: 'Mesa llena'}
    ]
  },
  {
    label: 'Breve descripción de su sitación o motivación',
    placeholder: 'Historia...',
    type: 'textarea'
  }
]
export const highlightedNotes = [
  {
    image: `${baseAssetsUrl}/reunion-anual.png`, 
    title: '¡Primera reunión anual de nuestra fundación!',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-blue', 
    buttonText: 'Leer más',
  },
  {
    image: `${baseAssetsUrl}/concurso-dibujo.png`, 
    title: 'Participa en el concurso de dibujo 2025',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-orange', 
    buttonText: 'Leer más',
  },
  {
    image: `${baseAssetsUrl}/entrega-de-viveres.png`, 
    title: 'Entrega de víveres a mas de 20 familias en Guerrero',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-pink', 
    buttonText: 'Leer más',
  },
  {
    image: `${baseAssetsUrl}/programa-mi-hogar.png`, 
    title: 'Programa: Mi hogar, seguro es primero',
    date: '29 de Octubre, 2025',
    lineClasses: 'bg-purple', 
    buttonText: 'Leer más',
  }
]
