export const baseAssetsUrl = 'https://seyva-media-assets.s3.us-west-2.amazonaws.com'
export const headerLinks = [
  { text: 'Inicio', href: '/' },
  { text: 'Experiencias', href: '/experiences' },
  { text: 'Conócenos', href: '/knowus' },
  { text: 'Programas', href: '/programs' }
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
    icon: '/icons/SEYVA_ICONS_FB.svg',
    link: 'https://www.facebook.com/fseyva.mx',
    size: 36
  },
  {
    name: 'Instagram',
    icon: '/icons/SEYVA_ICONS_IG.svg',
    link: 'https://www.instagram.com/fseyva_mx',
    size: 36
  },
  {
    name: 'X',
    icon: '/icons/SEYVA_ICONS_X.svg',
    link: 'https://x.com/fseyva_mx',
    size: 36
  },
  {
    name: 'Threads',
    icon: '/icons/SEYVA_ICONS_THREADS.svg',
    link: 'https://www.threads.com/@fseyva_mx?igshid=NTc4MTIwNjQ2YQ==',
    size: 36
  },
  {
    name: 'TikTok',
    icon: '/icons/SEYVA_ICONS_TT.svg',
    link: 'https://www.tiktok.com/@fseyva_mx?iis_from_webapp1&sender_device=pc',
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
    name: 'alivio-al-alma',
    image: `${baseAssetsUrl}/alivio-al-alma.png`,
    icon: '/white_health.svg',
    title: 'Alivio al Alma',
    description: (
    <div>
      <p className="md:text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p>
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-green',
    buttonClasses: 'bg-green md:text-3xl xs:text-xl'
  },
  {
    name: 'suenos-que-estudian',
    image: `${baseAssetsUrl}/suenos-que-estudian.png`,
    icon: '/white_education.svg',
    title: 'Sueños que Estudian',
    description: (
    <div>
      <p className="md:text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-orange',
    buttonClasses: 'bg-orange md:text-3xl xs:text-xl'
  },
  {
    name: 'techo-con-esperanza',
    image: `${baseAssetsUrl}/un-techo-con-esperanza.png`,
    icon: '/white_house.svg',
    title: 'Un Techo con Esperanza',
    description: (
    <div>
      <p className="md:text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-purple',
    buttonClasses: 'bg-purple md:text-3xl xs:text-xl'
  },
  {
    name: 'pan-para-hoy-y-manana',
    image: `${baseAssetsUrl}/pan-para-hoy-y-manana.png`,
    icon: '/white_feed.svg',
    title: 'Pan para Hoy y Mañana',
    description: (
    <div>
      <p className="md:text-xl leading-relaxed">Obtener apoyo para la cirugía para la remover lipomas; uno en región pectoral izquierda y dos más en reglón dorsal</p> 
    </div>),
    buttonText: 'Conoce más',
    cardClasses: 'bg-pink',
    buttonClasses: 'bg-pink md:text-3xl xs:text-xl'
  },
  {
    name: 'acopio',
    image: `${baseAssetsUrl}/acopio.png`,
    icon: '/logo_white.svg',
    title: 'Centro de acopio',
    description: (
    <div>
      <p className="lg:text-3xl md:text-2xl sm:text-xl font-semibold mb-1">Taxco, Guerrero</p>
      <p className="md:text-xl leading-relaxed">Estamos organizando un pequeño acopio para recaudar fondos y seguir transformando vidas</p> 
    </div>),
    buttonText: 'Súmate',
    cardClasses: 'bg-blue',
    buttonClasses: 'bg-blue border-3 primary-button transition-colors duration-900 ease-in-out md:text-3xl xs:text-xl px-10 py-4'
  }
]
export const contactFormFields = [
  {
    label: 'Nombre completo',
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
export const donationFormFields = [
  {
    label: 'Nombre completo',
    placeholder: '',
    type: 'text',
    required: false,
  },
  {
    label: 'Correo electrónico',
    placeholder: '',
    type: 'text',
    required: false,
  },
  {
    label: 'RFC',
    placeholder: '',
    type: 'text',
    required: false,
  },
  {
    label: 'Código Postal',
    placeholder: '',
    type: 'number',
    required: false,
  },
  {
    label: 'Regimen Fiscal',
    placeholder: '',
    type: 'text',
    required: false,
  }
]
export const predefinedDonationAmounts = ['$20','$50','$100','$500','Otra cantidad']
export const horizontalCards = [
  {
    image: `${baseAssetsUrl}/vida-sana.png`,
    title: 'Salud',
    description: 'Todas y todos merecemos la oportunidad de los servicios básicos para llevar una calidad de vida digna.',
    colorClass: 'text-green',
    reverseLayout: false,
  },
  {
    image: `${baseAssetsUrl}/concurso-dibujo.png`,
    title: 'Educación',
    description: 'El talento que tienen los niños y jóvenes de nuestro país es herencia de un pueblo brillante y con creatividad.',
    colorClass: 'text-orange',
    reverseLayout: true,
  },
  {
    image: `${baseAssetsUrl}/techo-firme.png`,
    title: 'Vivienda',
    description: 'Un techo en donde alimentarse, estudiar y como espacio de recreación.',
    colorClass: 'text-purple',
    reverseLayout: false,
  },
  {
    image: `${baseAssetsUrl}/mesa-llena.png`,
    title: 'Alimentación',
    description: 'Un trozo de pan puede alimentar a un futuro artista sin saberlo.',
    colorClass: 'text-pink',
    reverseLayout: true,
  }
]
export const programs = [
  {
    image: `${baseAssetsUrl}/vida-sana.png`, 
    title: 'Programa "Vida Sana"',
    description: "Objetivo: Brindar atención médica integral y gratuita a personas con enfermedades crónicas en comunidades vulnerables.",
    lineClasses: 'bg-green', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-green'
  },
  {
    image: `${baseAssetsUrl}/puertas-abiertas.png`, 
    title: 'Programa "Puertas Abiertas"',
    description: "Garantizar el acceso a la educación secundaria y superior para jóvenes en situación de pobreza.",
    lineClasses: 'bg-orange', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-orange'
  },
  {
    image: `${baseAssetsUrl}/techo-firme.png`, 
    title: 'Programa "Techo Firme"',
    description: "Mejorar las condiciones de vivienda de familias en zonas marginadas.",
    lineClasses: 'bg-purple', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-purple'
  },
  {
    image: `${baseAssetsUrl}/mesa-llena.png`, 
    title: 'Programa "Mesa Llena"',
    description: "Combatir la desnutrición infantil y la inseguridad alimentaria en comunidades rurales.",
    lineClasses: 'bg-pink', 
    buttonText: 'Leer más',
    buttonClasses: 'bg-pink'
  }
]
export const stories = [
  {
    name: 'alivio-al-alma',
    image: `${baseAssetsUrl}/story-green.png`,
    header: "Alivio al Alma",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle: "Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-green font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-green font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="px-10">
        <p className="text-green font-semibold text-4xl mb-8 mt-16">Testimonio</p>
        <p className="text-black font-normal text-xl text-center">
          &quot;Antes, cuando llovía, teníamos que poner cubetas por todo el cuarto. El techo<br />
          se estaba cayendo, y el piso era pura tierra. Mis hijos se enfermaban seguido por<br />
          la humedad. Ahora gracias al apoyo de la fundación, tenemos un techo seguro <br />
          y un piso firme. Ya no tenemos miedo cuando llueve. Dormimos tranquilos.<br />
          Nos devolvieron la paz en nuestra casa&quot;
        </p>
      </div>
    </>
    ),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-green',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-green',
    textClass: 'text-green'
  },
  {
    name: 'suenos-que-estudian',
    image: `${baseAssetsUrl}/story-orange.png`,
    header: "Sueños que estudian",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-orange font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-orange font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="px-10">
        <p className="text-orange font-semibold text-4xl mb-8 mt-16">Testimonio</p>
        <p className="text-black font-normal text-xl text-center">
          &quot;Antes, cuando llovía, teníamos que poner cubetas por todo el cuarto. El techo<br />
          se estaba cayendo, y el piso era pura tierra. Mis hijos se enfermaban seguido por<br />
          la humedad. Ahora gracias al apoyo de la fundación, tenemos un techo seguro <br />
          y un piso firme. Ya no tenemos miedo cuando llueve. Dormimos tranquilos.<br />
          Nos devolvieron la paz en nuestra casa&quot;
        </p>
      </div>
    </>
    ),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-orange',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-orange',
    textClass: 'text-orange'
  },
  {
    name: 'techo-con-esperanza',
    image: `${baseAssetsUrl}/story-purple.png`,
    header: "Un techo con Esperanza",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-10">
        <p className="text-purple font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-10">
        <p className="text-purple font-semibold text-4xl mb-2">Renovación de espacios en la vivienda</p>
        <p className="text-black font-normal text-xl ">Se realizaron trabajos de obra en el hogar, en techo y piso.</p>
      </div>
      <div className="px-10">
        <p className="text-purple font-semibold text-4xl mb-8 mt-16">Testimonio</p>
        <p className="text-black font-normal text-xl text-center">
          &quot;Antes, cuando llovía, teníamos que poner cubetas por todo el cuarto. El techo<br />
          se estaba cayendo, y el piso era pura tierra. Mis hijos se enfermaban seguido por<br />
          la humedad. Ahora gracias al apoyo de la fundación, tenemos un techo seguro <br />
          y un piso firme. Ya no tenemos miedo cuando llueve. Dormimos tranquilos.<br />
          Nos devolvieron la paz en nuestra casa&quot;
        </p>
      </div>
      </>
    ),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-purple',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-purple',
    textClass: 'text-purple'
  },
  {
    name: 'pan-para-hoy-y-manana',
    image: `${baseAssetsUrl}/story-pink.png`,
    header: "Pan para Hoy y Mañana",
    date: "Ciudad de México a 25 de marzo de 2025.",
    caseTitle:"Historia del Caso",
    caseDescription:"Adolfo es un joven Ingeniero Civil del Instituto Politécnico Nacional, el cual presenta el crecimiento de un abseso de grasa en el pectoral izquierdo asi como el crecimiento de dos absesos en la parte dorsal de su espalda, el cual ha ido creciendo y con ello sus complicaciones.",
    supportDetails: (
    <>
      <div className="mb-4">
        <p className="text-pink font-semibold text-4xl mb-2">Solicitud</p>
        <p className="text-black font-normal text-xl ">Obtener apoyo para la cirugía para la remover los lipomas</p>
      </div>
      <div className="mb-4">
        <p className="text-pink font-semibold text-4xl mb-2">Cotización Quirurjica</p>
        <p className="text-black font-normal text-xl ">La cotización quedo a cargo de la Medica Ginecoobstreticia</p>
      </div>
      <div className="px-10">
        <p className="text-pink font-semibold text-4xl mb-8 mt-16">Testimonio</p>
        <p className="text-black font-normal text-xl text-center">
          &quot;Antes, cuando llovía, teníamos que poner cubetas por todo el cuarto. El techo<br />
          se estaba cayendo, y el piso era pura tierra. Mis hijos se enfermaban seguido por<br />
          la humedad. Ahora gracias al apoyo de la fundación, tenemos un techo seguro <br />
          y un piso firme. Ya no tenemos miedo cuando llueve. Dormimos tranquilos.<br />
          Nos devolvieron la paz en nuestra casa&quot;
        </p>
      </div>
    </>
    ),
    buttonText: 'Conoce todo el caso',
    themeColorClass: 'bg-pink',
    cardClasses: 'bg-white',
    buttonClasses: 'bg-pink',
    textClass: 'text-pink'
  }
]
export const educationItems = [
    "Becas para Niñas en Secundaria Rural",
    "Apoyo Escolar para Niños con Discapacidad Intelectual",
    "Clases de Regularización en Matemáticas",
    "Talleres de Alfabetización para Adultos Mayores",
    "Equipamiento Tecnológico para Estudiantes de Preparatoria",
    "Becas Universitarias para Jóvenes Indígenas",
    "Cirugías Reconstructivas por Labio y Paladar Hendido",
    "Cursos de Robótica para Escuelas Públicas",
    "Capacitación Docente en Educación Inclusiva",
    "Apoyo Psicoeducativo para Estudiantes con Trastornos de Aprendizaje",
    "Material Escolar para Zonas Marginadas",
    "Becas para Niñas en Secundaria Rural",
    "Apoyo Escolar para Niños con Discapacidad Intelectual",
    "Clases de Regularización en Matemáticas",
    "Talleres de Alfabetización para Adultos Mayores",
    "Equipamiento Tecnológico para Estudiantes de Preparatoria",
    "Becas Universitarias para Jóvenes Indígenas",
    "Cirugías Reconstructivas por Labio y Paladar Hendido",
    "Cursos de Robótica para Escuelas Públicas",
    "Capacitación Docente en Educación Inclusiva",
    "Apoyo Psicoeducativo para Estudiantes con Trastornos de Aprendizaje",
];
export const healthItems = [
    "Quimioterapia para Cáncer de Mama",
    "Tratamiento Integral para Diabetes Tipo 2",
    "Cirugía de Cataratas para Adultos Mayores",
    "Apoyo Psicológico para Víctimas de Violencia",
    "Rehabilitación Post-Accidente Cerebrovascular",
    "Tratamiento Antirretroviral para VIH",
    "Cirugías Reconstructivas por Labio y Paladar Hendido",
    "Terapias Respiratorias para Niños con Asma Crónica",
    "Apoyo en Salud Mental para Jóvenes con Depresión",
    "Cobertura de Hemodiálisis para Pacientes Renales Crónicos",
    "Control Prenatal y Parto Humanizado para Mujeres en Zonas Rurales",
    "Cirugía de Cataratas para Adultos Mayores",
    "Apoyo Psicológico para Víctimas de Violencia",
    "Rehabilitación Post-Accidente Cerebrovascular",
    "Tratamiento Antirretroviral para VIH",
    "Cirugías Reconstructivas por Labio y Paladar Hendido",
    "Terapias Respiratorias para Niños con Asma Crónica",
    "Apoyo en Salud Mental para Jóvenes con Depresión",
    "Cobertura de Hemodiálisis para Pacientes Renales Crónicos",
    "Control Prenatal y Parto Humanizado para Mujeres en Zonas Rurales"    
];
export const foodItems = [
    "Desayunos Escolares Nutritivos",
    "Canastas Básicas para Familias en Inseguridad Alimentaria",
    "Comedores Comunitarios en Zonas Marginadas",
    "Suplementos Nutricionales para Niños con Desnutrición",
    "Alimentos Fortificados para Mujeres Embarazadas",
    "Entrega de Paquetes Alimentarios para Adultos Mayores",
    "Talleres de Educación Alimentaria y Nutricional",
    "Huertos Urbanos en Escuelas y Colonias Populares",
    "Apoyo Alimentario para Personas en Situación de Calle",
    "Comidas Calientes para Pacientes Hospitalizados sin Recursos",
    "Distribución de Leche y Cereales en Comunidades Indígenas",
    "Desayunos Escolares Nutritivos",
    "Canastas Básicas para Familias en Inseguridad Alimentaria",
    "Comedores Comunitarios en Zonas Marginadas",
    "Suplementos Nutricionales para Niños con Desnutrición",
    "Alimentos Fortificados para Mujeres Embarazadas",
    "Entrega de Paquetes Alimentarios para Adultos Mayores",
    "Talleres de Educación Alimentaria y Nutricional",
    "Huertos Urbanos en Escuelas y Colonias Populares",
    "Apoyo Alimentario para Personas en Situación de Calle",
    "Comidas Calientes para Pacientes Hospitalizados sin Recursos",
];
export const housingItems = [
    "Construcción de Vivienda para Familias en Extrema Pobreza",
    "Mejoramiento de Techos y Pisos de Tierra",
    "Rehabilitación de Viviendas Afectadas por Desastres Naturales",
    "Acceso a Materiales de Construcción Subsidiados",
    "Instalación de Baños y Sistemas Sanitarios Dignos",
    "Regularización Legal de la Tenencia de Vivienda",
    "Electrificación para Viviendas en Comunidades Rurales",
    "Acceso a Agua Potable en Zonas Marginadas",
    "Adaptación de Viviendas para Personas con Discapacidad",
    "Apoyo en Renta Temporal para Desplazados",
    "Asesoría Técnica para Autoconstrucción Segura",
    "Construcción de Vivienda para Familias en Extrema Pobreza",
    "Mejoramiento de Techos y Pisos de Tierra",
    "Rehabilitación de Viviendas Afectadas por Desastres Naturales",
    "Acceso a Materiales de Construcción Subsidiados",
    "Instalación de Baños y Sistemas Sanitarios Dignos",
    "Regularización Legal de la Tenencia de Vivienda",
    "Electrificación para Viviendas en Comunidades Rurales",
    "Acceso a Agua Potable en Zonas Marginadas",
    "Adaptación de Viviendas para Personas con Discapacidad",
    "Apoyo en Renta Temporal para Desplazados",
];
export const publicFileCards = [
  {
    title:'Educación',
    icon:"/white_health.svg",
    items: educationItems,
    color:'orange',
  },
  {
    title: 'Salud',
    icon: '/white_health.svg',
    items: healthItems,
    color: 'green',
  },
  {
    title:'Alimentación',
    icon:"/white_health.svg",
    items:foodItems,
    color:'pink',
  },
  {
    title: 'Vivienda',
    icon: "/white_health.svg",
    items: housingItems,
    color: 'purple',
  }
]
export const quotes = {
  nelsonMandela: {
    quote:(
        <>
        La superación de la pobreza no es un<br />
        gesto de caridad, es un acto de justicia.
        </>
    ),
    author:"Nelson Mandela"
  }
};
