import PublicFileCard from '@/components/PublicFileCard';
import { baseAssetsUrl } from '@/util/constants';
import { fn } from 'storybook/test';

const educationItems = [
    // Education
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

const healthItems = [
    // Health
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

const foodItems = [
    // Feeding
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

const housingItems = [
    // Dwelling
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

export default {
  title: 'Components/PublicFileCard',
  component: PublicFileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export const EducationCard = {
  args:{
    title:'Educación',
    icon:"/white_health.svg",
    items:educationItems,
    cardClasses:'bg-orange',
  },
};

export const HealthCard = {
  args: {
    title: 'Salud',
    icon: '/white_health.svg',
    items: healthItems,
    cardClasses: 'bg-green',
  },
};

export const FoodCard = {
  args:{
    title:'Alimentación',
    icon:"/white_health.svg",
    items:foodItems,
    cardClasses:'bg-pink',
  },
};

export const HousingCard = {
  args: {
    title: 'Vivienda',
    icon: "/white_health.svg",
    items: housingItems,
    cardClasses: 'bg-purple',
  },
};