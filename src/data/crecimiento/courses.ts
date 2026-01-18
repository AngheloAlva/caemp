export interface CrecimientoCourse {
	id: number
	slug: string
	title: string
	image: string
	tendenciaActual: string
	codigoSENCE: string
	duracion: string
	modalidad: string[]
	ejecucion: string
	objetivoGeneral: string
	objetivosEspecificos: string[]
	dirigidoA: string
	requisitosIngreso: string[]
	contenidos: {
		modulo1: {
			titulo: string
			items: string[]
		}
		modulo2: {
			titulo: string
			items: string[]
		}
		modulo3?: {
			titulo: string
			items: string[]
		}
		modulo4?: {
			titulo: string
			items: string[]
		}
	}
	competencias: string[]
	metodologia: string[]
	evaluacion: string[]
}

export const courses: Record<string, CrecimientoCourse> = {
	"tecnicas-de-gestion-financiera": {
		id: 1,
		slug: "tecnicas-de-gestion-financiera",
		title: "Técnicas de Gestión Financiera",
		image: "/images/crecimiento/courses/tecnicas-de-gestion-financiera.jpg",
		tendenciaActual:
			"La gestión financiera empresarial se posiciona como clave para la sostenibilidad y el crecimiento, impulsando profesionales que optimizan recursos, anticipan riesgos y fortalecen la toma de decisiones en entornos dinámicos.",
		codigoSENCE: "1238080390",
		duracion: "80 a 120 horas cronológicas",
		modalidad: ["Presencial", "E-learning sincrónico", "B-learning"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar conocimientos y herramientas prácticas de micro y macroeconomía, finanzas personales y productos financieros que permitan a los participantes desarrollar habilidades para una toma de decisiones financieras informada y responsable, tanto en su vida personal como laboral.",
		objetivosEspecificos: [
			"Reconocer conceptos básicos de microeconomía y macroeconomía y su impacto en la vida diaria.",
			"Identificar el funcionamiento del sistema financiero y los principales medios de pago actuales.",
			"Aplicar técnicas de planificación financiera personal, considerando ahorro, inversión y endeudamiento responsable.",
			"Evaluar productos y servicios financieros según necesidades y contextos reales.",
		],
		dirigidoA:
			"Personas mayores de 18 años, trabajadores, colaboradores o usuarios que deseen fortalecer su educación financiera.",
		requisitosIngreso: [
			"Manejo de lectoescritura",
			"Mayor de 18 años",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos de Microeconomía",
				items: [
					"Qué es la microeconomía",
					"Oferta y demanda",
					"Equilibrio de mercado",
					"Tipos de mercado",
				],
			},
			modulo2: {
				titulo: "Introducción a la Macroeconomía",
				items: [
					"Qué es la macroeconomía",
					"Producto Interno Bruto (PIB)",
					"Inflación e Índice de Precios al Consumidor (IPC)",
					"Ciclo económico y mercado laboral",
				],
			},
			modulo3: {
				titulo: "Dinero y Sistema Financiero",
				items: [
					"Concepto de dinero",
					"Funciones del sistema bancario",
					"Sistemas de pago actuales",
					"Productos digitales y bancarización",
				],
			},
			modulo4: {
				titulo: "Finanzas Personales y Planificación Financiera",
				items: [
					"Administración del ingreso y presupuesto",
					"Ahorro e inversión",
					"Endeudamiento responsable",
					"Crédito, seguros y protección de datos",
				],
			},
		},
		competencias: [
			"Analizar decisiones financieras básicas con criterios de economía personal.",
			"Planificar y controlar ingresos, egresos y ahorro.",
			"Evaluar riesgos financieros y gestionar endeudamiento.",
			"Utilizar herramientas y productos financieros digitales de forma segura.",
		],
		metodologia: [
			"Clases expositivas con apoyo visual",
			"Análisis de casos prácticos y simulaciones",
			"Ejercicios aplicados de planificación financiera personal",
			"Actividades individuales y grupales",
			"Evaluación diagnóstica, formativa y sumativa",
		],
		evaluacion: [
			"Pruebas teóricas por módulo",
			"Ejercicios prácticos aplicados",
			"Evaluación final integrada",
		],
	},
	"tecnicas-efectivas-de-autocontrol-y-prevencion-de-estres": {
		id: 2,
		slug: "tecnicas-efectivas-de-autocontrol-y-prevencion-de-estres",
		title: "Técnicas Efectivas de Autocontrol y Prevención de Estrés",
		image:
			"/images/crecimiento/courses/tecnicas-efectivas-de-autocontrol-y-prevencion-de-estres.jpg",
		tendenciaActual:
			"El autocontrol emocional y la prevención del estrés son pilares del bienestar laboral...",
		codigoSENCE: "1238080391",
		duracion: "80 a 120 horas cronológicas",
		modalidad: ["Presencial", "E-learning sincrónico", "B-learning"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar herramientas prácticas para promover el bienestar integral en el entorno laboral...",
		objetivosEspecificos: [
			"Reconocer la importancia de la calidad de vida en el entorno laboral.",
			"Aplicar estrategias para fortalecer las relaciones interpersonales.",
			"Utilizar técnicas para prevenir, gestionar y reducir el estrés laboral.",
			"Desarrollar una metodología de autocuidado orientada al bienestar físico, emocional y social.",
		],
		dirigidoA:
			"Trabajadores, equipos de trabajo, profesionales de recursos humanos, líderes y colaboradores...",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Salud compatible",
			"Dispositivo para modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Calidad de Vida en el Trabajo",
				items: [
					"Definición y dimensiones de la calidad de vida",
					"Calidad de vida laboral y su impacto",
					"Automatismos vs. hábitos saludables",
					"Responsabilidad personal y organizacional",
					"Estrategias para elevar la calidad de vida",
				],
			},
			modulo2: {
				titulo: "Relaciones Interpersonales en el Entorno Laboral",
				items: [
					"Tipos de relaciones interpersonales",
					"Habilidades comunicativas",
					"Relaciones laborales saludables",
					"Trabajo en equipo y colaboración",
					"Barreras culturales y resolución",
				],
			},
			modulo3: {
				titulo: "Estrés Laboral y Bienestar Psicosocial",
				items: [
					"Causas y consecuencias del estrés",
					"Burnout y factores de riesgo",
					"Prevención de accidentes desde el autocuidado",
					"Buenas prácticas frente al estrés",
					"Actividades inclusivas",
				],
			},
			modulo4: {
				titulo: "Técnicas de Autocuidado y Recreación",
				items: [
					"Metodologías de autocuidado",
					"Recreación y ocio saludable",
					"Actividades extralaborales",
					"Dinámicas para fortalecer pertenencia",
					"Aportes del ocio",
				],
			},
		},
		competencias: [
			"Promoción del bienestar laboral",
			"Autocuidado emocional",
			"Gestión del estrés",
			"Fortalecimiento relacional",
		],
		metodologia: ["Clases expositivas", "Casos prácticos", "Simulaciones", "Actividades grupales"],
		evaluacion: ["Pruebas por módulo", "Ejercicios prácticos", "Evaluación final integrada"],
	},
	"estrategias-prevencion-acoso-trabajo": {
		id: 3,
		slug: "estrategias-prevencion-acoso-trabajo",
		title: "Estrategias de Prevención del Acoso en el Trabajo",
		image: "/images/crecimiento/courses/estrategias-prevencion-acoso-trabajo.jpg",
		tendenciaActual:
			"La prevención del acoso laboral promueve el respeto, la comunicación segura y la convivencia...",
		codigoSENCE: "1238080377",
		duracion: "80 a 120 horas cronológicas",
		modalidad: ["Presencial", "Online sincrónico", "B-learning"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer una cultura organizacional basada en el respeto, la equidad y la prevención del acoso...",
		objetivosEspecificos: [
			"Comprender el marco legal y fundamentos de la Ley Karin.",
			"Reconocer situaciones de acoso laboral y sexual.",
			"Aplicar medidas preventivas y protocolos institucionales.",
			"Gestionar denuncias y procedimientos internos.",
			"Promover ambientes laborales seguros.",
		],
		dirigidoA: "Colaboradores, líderes de equipo, profesionales de RRHH, comités paritarios...",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Salud compatible",
			"Dispositivo y conectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Introducción y Marco Legal",
				items: [
					"Conceptos clave: acoso, abuso, violencia laboral",
					"Fundamentos de la Ley Karin",
					"Derechos y deberes de empleadores y trabajadores",
				],
			},
			modulo2: {
				titulo: "Identificación y Prevención",
				items: [
					"Tipificación de conductas",
					"Medidas preventivas",
					"Protocolos de actuación",
					"Fomento de cultura organizacional respetuosa",
				],
			},
			modulo3: {
				titulo: "Procedimientos de Denuncia y Actuación",
				items: [
					"Canales formales e informales",
					"Procesos de investigación interna",
					"Medidas de protección",
				],
			},
			modulo4: {
				titulo: "Rol Organizacional y Gestión de Casos",
				items: [
					"Responsabilidades del empleador",
					"Gestión ética y legal de casos de acoso",
					"Políticas de no tolerancia y sanciones",
				],
			},
		},
		competencias: [
			"Comprensión legal en temas de acoso",
			"Detección y prevención de riesgos",
			"Manejo de protocolos institucionales",
			"Promoción de ambientes seguros",
		],
		metodologia: [
			"Clases expositivas",
			"Casos reales",
			"Simulaciones",
			"Trabajo grupal",
			"Evaluación diagnóstica y sumativa",
		],
		evaluacion: ["Pruebas por módulo", "Ejercicios prácticos", "Evaluación final integradora"],
	},
	"tecnicas-efectivas-resolucion-conflictos": {
		id: 4,
		slug: "tecnicas-efectivas-resolucion-conflictos",
		title: "Técnicas Efectivas de Resolución de Conflictos",
		image: "/images/crecimiento/courses/tecnicas-efectivas-resolucion-conflictos.jpg",
		tendenciaActual:
			"La resolución de conflictos es hoy una habilidad esencial para mantener relaciones laborales saludables. Crecimiento promueve herramientas comunicacionales y emocionales que transforman las diferencias en oportunidades de aprendizaje y colaboración.",
		codigoSENCE: "1238080423",
		duracion: "40 a 60 horas cronológicas",
		modalidad: ["Presencial", "Online sincrónico", "B-learning"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de comunicación, negociación y mediación para enfrentar y resolver conflictos en contextos laborales, aplicando estrategias efectivas y respetuosas de los protocolos establecidos, con foco en el bienestar organizacional y las relaciones saludables.",
		objetivosEspecificos: [
			"Identificar las fuentes y tipos de conflicto dentro de una organización.",
			"Aplicar herramientas comunicacionales efectivas para la mediación.",
			"Reconocer el valor de los métodos estructurados de resolución de conflictos.",
			"Diseñar estrategias situacionales para el manejo de conflictos interpersonales y grupales.",
		],
		dirigidoA:
			"Trabajadores, supervisores, líderes de equipo, encargados de RRHH y toda persona que desee mejorar sus competencias para abordar conflictos de manera constructiva dentro de su entorno laboral.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Salud compatible con la modalidad",
			"Conectividad y dispositivo para modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Estrategias de Comunicación y Mediación de Conflictos",
				items: [
					"Herramientas de comunicación para la resolución efectiva de conflictos",
					"Técnicas de manejo comunicacional: El Banco de Niebla, Aserción negativa, Pregunta asertiva",
					"Fundamentos de negociación y acuerdos colaborativos",
					"Protocolo y ética en la mediación",
				],
			},
			modulo2: {
				titulo: "Aplicación Situacional y Gestión de Conflictos",
				items: [
					"El conflicto en las organizaciones: causas y consecuencias",
					"Estrategias de gestión para contextos de conflicto",
					"Fuentes frecuentes de conflicto laboral",
					"Métodos de resolución según tipo de conflicto",
					"Rol del liderazgo en la dirección del conflicto",
				],
			},
		},
		competencias: [
			"Manejo de herramientas de comunicación asertiva",
			"Capacidad para mediar conflictos",
			"Identificación de causas estructurales y emocionales",
			"Aplicación de técnicas de negociación",
			"Diseño de estrategias preventivas",
		],
		metodologia: [
			"Clases expositivas participativas",
			"Simulación de casos reales",
			"Role playing",
			"Análisis grupal",
			"Evaluación formativa continua",
		],
		evaluacion: [
			"Prueba teórica por capítulo",
			"Evaluación práctica de simulación",
			"Diagnóstico inicial y evaluación final",
		],
	},
	"liderazgo-consciente-gestion-equipos": {
		id: 5,
		slug: "liderazgo-consciente-gestion-equipos",
		title: "Liderazgo Consciente y Gestión de Equipos",
		image: "/images/crecimiento/courses/liderazgo-consciente-gestion-equipos.jpg",
		tendenciaActual:
			"El liderazgo consciente representa una nueva forma de dirigir basada en la empatía, la confianza y la autenticidad.",
		codigoSENCE: "Por definir",
		duracion: "100 a 120 horas cronológicas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer el liderazgo consciente mediante la autogestión emocional, la toma de decisiones ética y la creación de equipos de alto desempeño.",
		objetivosEspecificos: [
			"Desarrollar autoconciencia y claridad de propósito.",
			"Implementar estrategias de gestión emocional para mantener equipos estables.",
			"Aplicar herramientas para alinear equipos con metas claras.",
			"Impulsar culturas colaborativas y responsables.",
		],
		dirigidoA: "Líderes formales e informales, jefes de área, supervisores, profesionales de RRHH.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible",
			"Conectividad para modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos del Liderazgo Consciente",
				items: [
					"Liderazgo como servicio",
					"Coherencia entre pensamiento, palabra y acción",
					"Confianza psicológica",
				],
			},
			modulo2: {
				titulo: "Inteligencia Emocional y Autoliderazgo",
				items: [
					"Autoconocimiento emocional",
					"Gestión emocional bajo presión",
					"Creencias limitantes",
				],
			},
			modulo3: {
				titulo: "Gestión de Equipos de Alto Desempeño",
				items: ["Equipos autónomos", "Delegación efectiva", "Herramientas de motivación"],
			},
			modulo4: {
				titulo: "Plan de Mejora y Transformación Personal",
				items: [
					"Identificación de brechas",
					"Plan de impacto en el equipo",
					"Seguimiento y mejora continua",
				],
			},
		},
		competencias: [
			"Autogestión emocional",
			"Liderazgo ético",
			"Construcción de culturas colaborativas",
			"Gestión de desempeño",
		],
		metodologia: [
			"Talleres vivenciales",
			"Análisis guiado",
			"Trabajo grupal",
			"Coaching reflexivo",
		],
		evaluacion: [
			"Pruebas teóricas por módulo",
			"Evaluaciones prácticas",
			"Proyecto final de mejora",
		],
	},
	"coaching-y-comunicacion-efectiva-para-el-liderazgo": {
		id: 6,
		slug: "coaching-y-comunicacion-efectiva-para-el-liderazgo",
		title: "Coaching y Comunicación Efectiva para el Liderazgo",
		image: "/images/crecimiento/courses/coaching-y-comunicacion-efectiva-para-el-liderazgo.jpg",
		tendenciaActual:
			"El coaching aplicado al liderazgo impulsa una gestión más humana y colaborativa.",
		codigoSENCE: "Por definir",
		duracion: "80 a 100 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de liderazgo y comunicación efectiva mediante herramientas de coaching.",
		objetivosEspecificos: [
			"Aplicar técnicas de comunicación efectiva.",
			"Desarrollar escucha activa y feedback constructivo.",
			"Fortalecer liderazgo basado en empatía.",
			"Aumentar la claridad conversacional.",
		],
		dirigidoA: "Líderes, supervisores, jefaturas intermedias, encargados de área.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible",
			"Conectividad en caso de modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos del Coaching y Comunicación",
				items: ["Principios del coaching laboral", "Escucha activa", "Lenguaje corporal"],
			},
			modulo2: {
				titulo: "Liderazgo Comunicacional",
				items: ["Estilos de liderazgo", "Feedback constructivo", "Rol del líder coach"],
			},
			modulo3: {
				titulo: "Conversaciones Difíciles y Gestión de Conflictos",
				items: [
					"Comunicación en tensión",
					"Negociación colaborativa",
					"Prevención de malos entendidos",
				],
			},
			modulo4: {
				titulo: "Plan de Desarrollo Personal",
				items: [
					"Detección de áreas de mejora",
					"Plan de acción individual",
					"Compromisos y seguimiento",
				],
			},
		},
		competencias: [
			"Escucha activa",
			"Comunicación empática",
			"Liderazgo basado en coaching",
			"Manejo de conversaciones difíciles",
		],
		metodologia: [
			"Clases participativas",
			"Casos reales",
			"Simulaciones",
			"Autoevaluación práctica",
		],
		evaluacion: [
			"Evaluación diagnóstica",
			"Ejercicios prácticos por módulo",
			"Evaluación final con plan personal",
		],
	},
	"mindfulness-y-bienestar-laboral": {
		id: 7,
		slug: "mindfulness-y-bienestar-laboral",
		title: "Mindfulness y Bienestar Laboral",
		image: "/images/crecimiento/courses/mindfulness-y-bienestar-laboral.jpg",
		tendenciaActual:
			"El mindfulness laboral se consolida como una práctica clave para mejorar el bienestar y la productividad.",
		codigoSENCE: "Por definir",
		duracion: "80 a 100 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Promover el bienestar integral en el entorno laboral mediante prácticas de atención plena.",
		objetivosEspecificos: [
			"Reconocer impacto del estrés crónico.",
			"Aplicar técnicas simples de mindfulness.",
			"Incorporar pausas conscientes.",
			"Contribuir al bienestar colectivo.",
		],
		dirigidoA: "Personas trabajadoras en contextos de alta demanda emocional.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Estrés Laboral y Bienestar Psicosocial",
				items: ["Qué es el estrés", "Riesgos psicosociales", "Autocuidado responsable"],
			},
			modulo2: {
				titulo: "Herramientas de Mindfulness",
				items: ["Atención plena", "Respiración consciente", "Foco atencional"],
			},
			modulo3: {
				titulo: "Regulación Emocional",
				items: ["Enfrentar tensión", "Distancia saludable", "Pausas conscientes"],
			},
			modulo4: {
				titulo: "Bienestar Colectivo",
				items: ["Equipos que se cuidan", "Recuperación grupal", "Compromisos de bienestar"],
			},
		},
		competencias: [
			"Autocontrol emocional",
			"Gestión del estrés",
			"Promoción del bienestar",
			"Aplicación de pausas conscientes",
		],
		metodologia: [
			"Prácticas guiadas",
			"Ejercicios de respiración",
			"Reflexión grupal",
			"Casos reales",
		],
		evaluacion: [
			"Cuestionarios por módulo",
			"Registro personal de prácticas",
			"Plan de autocuidado final",
		],
	},
	"inteligencia-emocional-aplicada-al-trabajo": {
		id: 8,
		slug: "inteligencia-emocional-aplicada-al-trabajo",
		title: "Inteligencia Emocional Aplicada al Trabajo",
		image: "/images/crecimiento/courses/inteligencia-emocional-aplicada-al-trabajo.jpg",
		tendenciaActual:
			"El desarrollo de la inteligencia emocional es una de las competencias más valoradas en el entorno laboral moderno.",
		codigoSENCE: "Por definir",
		duracion: "80 a 100 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar competencias emocionales clave para mejorar la comunicación, toma de decisiones y bienestar laboral.",
		objetivosEspecificos: [
			"Comprender impacto de emociones.",
			"Aplicar autorregulación.",
			"Mejorar empatía y lectura emocional.",
			"Integrar IE en comunicación y liderazgo.",
		],
		dirigidoA: "Trabajadores, líderes, personal administrativo y operativo.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad en caso online",
		],
		contenidos: {
			modulo1: {
				titulo: "Autoconocimiento Emocional",
				items: [
					"Lenguaje emocional",
					"Identificación de emociones",
					"Relación emoción-pensamiento–acción",
				],
			},
			modulo2: {
				titulo: "Autorregulación Emocional y Manejo del Estrés",
				items: [
					"Reducción de carga emocional",
					"Control de impulsividad",
					"Prevención del burnout",
				],
			},
			modulo3: {
				titulo: "Empatía y Relación con Otros",
				items: ["Escucha empática", "Lectura emocional", "Acompañamiento sin invalidación"],
			},
			modulo4: {
				titulo: "IE en el Entorno Laboral",
				items: [
					"Aplicación en liderazgo",
					"Clima laboral",
					"Comunicación emocionalmente responsable",
				],
			},
		},
		competencias: [
			"Autoconciencia emocional",
			"Empatía aplicada",
			"Comunicación emocional responsable",
			"Resiliencia",
		],
		metodologia: [
			"Ejercicios introspectivos",
			"Role play",
			"Análisis de casos",
			"Reflexiones guiadas",
		],
		evaluacion: ["Cuestionarios", "Registro personal", "Evaluación final sobre casos prácticos"],
	},
	"comunicacion-asertiva-y-relaciones-laborales-saludables": {
		id: 9,
		slug: "comunicacion-asertiva-y-relaciones-laborales-saludables",
		title: "Comunicación Asertiva y Relaciones Laborales Saludables",
		image:
			"/images/crecimiento/courses/comunicacion-asertiva-y-relaciones-laborales-saludables.jpg",
		tendenciaActual:
			"Las empresas están enfocándose en desarrollar comunicación asertiva y relaciones laborales saludables, impulsadas por la Ley Karin y nuevas políticas de convivencia laboral.",
		codigoSENCE: "Por definir",
		duracion: "60 a 80 horas cronológicas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer habilidades de comunicación asertiva, escucha activa y gestión de tensiones interpersonales.",
		objetivosEspecificos: [
			"Identificar estilos comunicacionales que generan conflicto.",
			"Aplicar técnicas de comunicación asertiva.",
			"Reconocer y gestionar tensiones interpersonales.",
			"Contribuir al clima laboral seguro y colaborativo.",
		],
		dirigidoA:
			"Trabajadores, equipos de primera línea, líderes, personal administrativo y áreas de apoyo.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos de la Comunicación Asertiva",
				items: [
					"Asertividad vs pasividad vs agresividad",
					"Lenguaje claro y respetuoso",
					"Autoconfianza para expresar necesidades",
				],
			},
			modulo2: {
				titulo: "Escucha Activa y Empatía en el Trabajo",
				items: [
					"Escuchar para comprender",
					"Validación emocional",
					"Cuidado del vínculo en desacuerdos",
				],
			},
			modulo3: {
				titulo: "Conversaciones Difíciles y Manejo del Conflicto",
				items: [
					"Comunicar lo incómodo sin escalar conflicto",
					"Negociación colaborativa",
					"Prevención de quiebres comunicativos",
				],
			},
			modulo4: {
				titulo: "Construcción de Relaciones Laborales Saludables",
				items: [
					"Respeto mutuo y confianza psicológica",
					"Transparencia en la convivencia",
					"Compromisos de convivencia laboral segura",
				],
			},
		},
		competencias: [
			"Comunicación clara y empática",
			"Escucha activa",
			"Gestión constructiva de conflictos",
			"Contribución al clima laboral",
		],
		metodologia: [
			"Clases participativas",
			"Dinámicas grupales",
			"Role play",
			"Ejercicios prácticos",
		],
		evaluacion: [
			"Ejercicios por módulo",
			"Observación en simulaciones",
			"Evaluación final integrada",
		],
	},
	"coaching-para-la-gestion-del-cambio-organizacional": {
		id: 10,
		slug: "coaching-para-la-gestion-del-cambio-organizacional",
		title: "Coaching para la Gestión del Cambio Organizacional",
		image: "/images/crecimiento/courses/coaching-para-la-gestion-del-cambio-organizacional.jpg",
		tendenciaActual:
			"El coaching organizacional se consolida como herramienta clave para liderar la transformación empresarial.",
		codigoSENCE: "Por definir",
		duracion: "100 a 120 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar herramientas de coaching y comunicación para acompañar procesos de cambio cultural, estructural u operativo.",
		objetivosEspecificos: [
			"Comprender dinámicas humanas frente al cambio.",
			"Desarrollar habilidades comunicacionales para guiar equipos.",
			"Aplicar metodologías de cambio con enfoque en personas.",
			"Definir e implementar planes de acompañamiento.",
		],
		dirigidoA: "Líderes, supervisores, encargados de área, profesionales de RRHH.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Comprendiendo el Cambio Organizacional",
				items: [
					"Tipos de cambio: cultural, estructural, tecnológico",
					"Reacciones humanas ante la transformación",
					"Costos de no gestionar adecuadamente el cambio",
				],
			},
			modulo2: {
				titulo: "Comunicación del Cambio",
				items: [
					"Comunicar el para qué del cambio",
					"Escucha activa de resistencias",
					"Gestión de rumores y acompañamiento emocional",
				],
			},
			modulo3: {
				titulo: "Acompañamiento y Coaching al Equipo",
				items: [
					"Contención emocional sin invalidar",
					"Conversaciones uno a uno",
					"Refuerzo de compromisos",
				],
			},
			modulo4: {
				titulo: "Plan de Implementación del Cambio",
				items: [
					"Identificación de hitos",
					"Mapeo de riesgos humanos",
					"Aplicación de modelos de cambio",
				],
			},
		},
		competencias: [
			"Comunicación efectiva en incertidumbre",
			"Gestión del cambio con foco humano",
			"Acompañamiento emocional",
			"Planificación de procesos de transformación",
		],
		metodologia: [
			"Clases expositivas",
			"Talleres vivenciales",
			"Simulaciones conversacionales",
			"Análisis de casos",
		],
		evaluacion: ["Pruebas teóricas por módulo", "Simulaciones", "Plan de gestión del cambio final"],
	},
	"autoliderazgo-y-desarrollo-personal": {
		id: 11,
		slug: "autoliderazgo-y-desarrollo-personal",
		title: "Autoliderazgo y Desarrollo Personal",
		image: "/images/crecimiento/courses/autoliderazgo-y-desarrollo-personal.jpg",
		tendenciaActual:
			"El autoliderazgo se consolida como habilidad clave en entornos que valoran autonomía e inteligencia emocional.",
		codigoSENCE: "Por definir",
		duracion: "80 a 100 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fomentar el autoliderazgo a partir del autoconocimiento, gestión emocional y planificación personal.",
		objetivosEspecificos: [
			"Identificar fortalezas y áreas de mejora.",
			"Desarrollar pensamiento crítico sobre decisiones.",
			"Fortalecer seguridad personal y autoconfianza.",
			"Construir plan de desarrollo personal y profesional.",
		],
		dirigidoA:
			"Personas trabajadoras, técnicos, profesionales y líderes que busquen crecer personal y laboralmente.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Autoconocimiento e Identidad Personal",
				items: [
					"Valores y narrativa personal",
					"Reconocimiento de talentos",
					"Identificación de bloqueos",
				],
			},
			modulo2: {
				titulo: "Gestión Emocional y Autocuidado",
				items: [
					"Autorregulación frente a presión",
					"Gestión del miedo y frustración",
					"Estrategias de autocuidado",
				],
			},
			modulo3: {
				titulo: "Autoconfianza y Toma de Decisiones",
				items: ["Lenguaje interno", "Límites sanos", "Responsabilidad personal"],
			},
			modulo4: {
				titulo: "Plan de Vida y Carrera",
				items: ["Clarificación de metas", "Ruta de acción", "Compromiso de seguimiento"],
			},
		},
		competencias: [
			"Autogestión emocional",
			"Toma de decisiones conscientes",
			"Autoconfianza",
			"Planificación estratégica personal",
		],
		metodologia: [
			"Ejercicios introspectivos",
			"Dinámicas grupales",
			"Coaching reflexivo",
			"Bitácora personal",
		],
		evaluacion: ["Evaluación inicial", "Ejercicios prácticos", "Plan de desarrollo final"],
	},
	"motivacion-propósito-y-sentido-del-trabajo": {
		id: 12,
		slug: "motivacion-propósito-y-sentido-del-trabajo",
		title: "Motivación, Propósito y Sentido del Trabajo",
		image: "/images/crecimiento/courses/motivacion-propósito-y-sentido-del-trabajo.jpg",
		tendenciaActual:
			"Las organizaciones priorizan bienestar emocional y conexión con propósito como ejes para retención de talento.",
		codigoSENCE: "Por definir",
		duracion: "60 a 80 horas",
		modalidad: ["Presencial", "B-learning"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Potenciar motivación interna conectando a las personas con su propósito, valores e impacto laboral.",
		objetivosEspecificos: [
			"Explorar sentido personal del trabajo.",
			"Reconocer factores que fortalecen o debilitan motivación.",
			"Desarrollar recursos internos para sostener compromiso.",
			"Elevar sentido de pertenencia e impacto.",
		],
		dirigidoA: "Trabajadores, colaboradores, personal operativo y mandos medios.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad si es online",
		],
		contenidos: {
			modulo1: {
				titulo: "Propósito Personal y Valor del Trabajo",
				items: ["¿Por qué hago lo que hago?", "Valores personales", "Identidad y desempeño"],
			},
			modulo2: {
				titulo: "Factores de Motivación y Desgaste",
				items: ["Reconocimiento y pertenencia", "Desgaste emocional", "Recuperación energética"],
			},
			modulo3: {
				titulo: "Compromiso y Responsabilidad Personal",
				items: ["De la queja a la acción", "Lenguaje interno potenciador", "Influencia positiva"],
			},
			modulo4: {
				titulo: "Plan de Propósito y Proyección",
				items: ["Metas significativas", "Impacto personal", "Compromisos conscientes"],
			},
		},
		competencias: [
			"Autoconciencia de propósito",
			"Motivación intrínseca",
			"Resiliencia emocional",
			"Influencia positiva",
		],
		metodologia: [
			"Ejercicios reflexivos",
			"Dinámicas grupales",
			"Trabajo narrativo",
			"Conversación guiada",
		],
		evaluacion: [
			"Autoevaluación inicial y final",
			"Ejercicios prácticos",
			"Plan personal de propósito",
		],
	},
	"trabajo-en-equipo-y-sinergia-organizacional": {
		id: 13,
		slug: "trabajo-en-equipo-y-sinergia-organizacional",
		title: "Trabajo en Equipo y Sinergia Organizacional",
		image: "/images/crecimiento/courses/trabajo-en-equipo-y-sinergia-organizacional.jpg",
		tendenciaActual:
			"Las empresas promueven equipos colaborativos y cohesionados como clave para la productividad.",
		codigoSENCE: "Por definir",
		duracion: "80 a 100 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer la colaboración mediante habilidades de confianza, coordinación y resolución conjunta.",
		objetivosEspecificos: [
			"Reconocer factores que favorecen o dificultan trabajo colaborativo.",
			"Aplicar herramientas de coordinación efectiva.",
			"Desarrollar comunicación transparente y apoyo mutuo.",
			"Prevenir quiebres relacionales.",
		],
		dirigidoA: "Equipos de trabajo, cuadrillas, áreas administrativas, supervisores.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad si es online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos del Trabajo en Equipo",
				items: ["Diferencias entre grupo y equipo", "Confianza y respeto", "Roles individuales"],
			},
			modulo2: {
				titulo: "Coordinación y Comunicación Interna",
				items: [
					"Compromisos claros",
					"Reuniones efectivas",
					"Gestión temprana de desalineamientos",
				],
			},
			modulo3: {
				titulo: "Resolución Colaborativa de Problemas",
				items: ["Escucha entre pares", "Solución colaborativa", "Enfoque en resultados"],
			},
			modulo4: {
				titulo: "Cultura de Sinergia y Mejora Continua",
				items: ["Buenas prácticas", "Reconocimiento interno", "Plan de mejora del equipo"],
			},
		},
		competencias: [
			"Comunicación colaborativa",
			"Coordinación efectiva",
			"Resolución conjunta",
			"Aporte al clima laboral",
		],
		metodologia: [
			"Dinámicas grupales",
			"Simulaciones",
			"Ejercicios de confianza",
			"Reflexión colectiva",
		],
		evaluacion: ["Ejercicios prácticos", "Evaluación grupal", "Evaluación final integrada"],
	},
	"gestion-del-tiempo-y-productividad-personal": {
		id: 14,
		slug: "gestion-del-tiempo-y-productividad-personal",
		title: "Gestión del Tiempo y Productividad Personal",
		image: "/images/crecimiento/courses/gestion-del-tiempo-y-productividad-personal.jpg",
		tendenciaActual: "La productividad consciente busca equilibrar eficiencia y bienestar.",
		codigoSENCE: "Por definir",
		duracion: "60 a 80 horas",
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar herramientas de planificación, priorización y enfoque para aumentar la productividad sin sacrificar bienestar.",
		objetivosEspecificos: [
			"Identificar hábitos que generan pérdida de tiempo.",
			"Aplicar técnicas de priorización.",
			"Implementar rutinas de foco.",
			"Incorporar estrategias de autocuidado.",
		],
		dirigidoA: "Colaboradores, administrativos, supervisores, mandos medios.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura",
			"Cédula vigente",
			"Salud compatible",
			"Conectividad para modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos de la Gestión del Tiempo",
				items: ["Mitos sobre productividad", "Ladrones del tiempo", "Urgente vs importante"],
			},
			modulo2: {
				titulo: "Planificación y Priorización",
				items: ["Matriz de Eisenhower", "Método Pomodoro", "Planificación semanal y mensual"],
			},
			modulo3: {
				titulo: "Productividad en Alta Demanda",
				items: [
					"Manejo de interrupciones",
					"Gestión de expectativas",
					"Decisiones rápidas y enfocadas",
				],
			},
			modulo4: {
				titulo: "Bienestar y Energía Personal",
				items: ["Pausas activas", "Hábitos saludables", "Plan de productividad sostenible"],
			},
		},
		competencias: [
			"Planificación del tiempo",
			"Priorización efectiva",
			"Comunicación clara",
			"Productividad sostenible",
		],
		metodologia: [
			"Ejercicios prácticos",
			"Casos reales",
			"Simulaciones",
			"Plan de acción personal",
		],
		evaluacion: ["Ejercicios por módulo", "Autoevaluación", "Plan personal final"],
	},
	"liderazgo-y-convivencia-laboral": {
		id: 15,
		slug: "liderazgo-y-convivencia-laboral",
		title:
			"Liderazgo y Convivencia Laboral: Comunicación Efectiva, Trabajo en Equipo y Prevención del Acoso según Ley Karin",
		image: "/images/crecimiento/courses/liderazgo-y-convivencia-laboral.jpg",
		tendenciaActual:
			"Las organizaciones priorizan culturas laborales basadas en liderazgo positivo, comunicación efectiva y relaciones respetuosas. La Ley Karin impulsa entornos seguros e inclusivos.",
		codigoSENCE: "Por definir",
		duracion: "8 horas (2 jornadas de 4 horas)",
		modalidad: ["Presencial", "Online sincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar competencias de liderazgo, comunicación efectiva y colaboración, integrando principios de la Ley Karin para prevenir el acoso laboral y sexual.",
		objetivosEspecificos: [
			"Reconocer principios del liderazgo positivo.",
			"Identificar estrategias de comunicación efectiva.",
			"Reflexionar sobre obligaciones de la Ley Karin.",
			"Promover prácticas preventivas frente al acoso.",
		],
		dirigidoA:
			"Líderes de equipo, supervisores, RRHH, comités paritarios y trabajadores en general.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Salud compatible",
			"Conectividad en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Liderazgo y Comunicación para la Convivencia Laboral",
				items: [
					"Principios del liderazgo positivo y ético",
					"Comunicación efectiva: escucha activa, feedback, empatía",
					"Trabajo en equipo, confianza y resolución colaborativa",
					"Dinámicas: El puente colaborativo, teléfono transparente, misión imposible",
				],
			},
			modulo2: {
				titulo: "Prevención del Acoso y Aplicación de la Ley Karin",
				items: [
					"Conceptos clave: acoso laboral, sexual y violencia",
					"Responsabilidades del empleador según Ley 21.643",
					"Prevención, detección y abordaje",
					"Dinámicas: caso espejo, semáforo de convivencia, conversaciones difíciles",
				],
			},
		},
		competencias: [
			"Liderazgo positivo",
			"Comunicación asertiva",
			"Detección de conductas de acoso",
			"Promoción de ambientes respetuosos",
		],
		metodologia: ["Clases participativas", "Dinámicas grupales", "Role play", "Análisis de casos"],
		evaluacion: ["Participación activa", "Análisis de casos", "Cuestionario final"],
	},
	"facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales": {
		id: 16,
		slug: "facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales",
		title: "Facilitación Creativa y Resolución de Problemas con Bloques Virtuales",
		image:
			"/images/crecimiento/courses/facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales.jpg",
		tendenciaActual:
			"Las organizaciones buscan metodologías innovadoras que fomenten creatividad, pensamiento visual y comunicación clara.",
		codigoSENCE: "Por definir",
		duracion: "8 horas",
		modalidad: ["Presencial", "Online", "Taller vivencial"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de comunicación, creatividad y diseño de soluciones mediante facilitación con bloques virtuales.",
		objetivosEspecificos: [
			"Comprender fundamentos del aprendizaje visual.",
			"Utilizar bloques virtuales para representar ideas y procesos.",
			"Fortalecer interpretación simbólica.",
			"Diseñar actividades aplicadas a equipos y formación.",
			"Fomentar creatividad y resolución de problemas.",
		],
		dirigidoA:
			"Formadores, docentes, coaches, líderes y profesionales que buscan metodologías innovadoras.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo básico de herramientas digitales",
			"Conectividad en modalidad online",
			"Interés en metodologías activas",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos del Aprendizaje Creativo",
				items: [
					"Aprendizaje activo y experiencial",
					"Pensamiento visual",
					"Metáforas",
					"PNL aplicada a formación",
				],
			},
			modulo2: {
				titulo: "Introducción a los Bloques Virtuales",
				items: [
					"Plataformas de modelado 3D",
					"Construcción individual",
					"Representación simbólica",
				],
			},
			modulo3: {
				titulo: "Dinámicas Colaborativas",
				items: [
					"Modelado en equipos",
					"Diagnóstico de desafíos",
					"Conversaciones profundas mediante modelos",
				],
			},
			modulo4: {
				titulo: "Diseño de Actividades",
				items: [
					"Diseño de dinámicas aplicables",
					"Desarrollo de actividad final",
					"Presentación de propuestas aplicables",
				],
			},
		},
		competencias: [
			"Comunicación visual",
			"Creatividad aplicada",
			"Facilitación creativa",
			"Diseño de dinámicas",
		],
		metodologia: [
			"Taller experiencial 90% práctico",
			"Modelado digital",
			"Coaching",
			"Acompañamiento del relator",
		],
		evaluacion: ["Diagnóstico inicial", "Evaluación práctica", "Actividad final"],
	},
	"autoestima-y-gestion-emocional-para-el-logro-de-objetivos": {
		id: 17,
		slug: "autoestima-y-gestion-emocional-para-el-logro-de-objetivos",
		title: "Autoestima y Gestión Emocional para el Logro de Objetivos",
		image:
			"/images/crecimiento/courses/autoestima-y-gestion-emocional-para-el-logro-de-objetivos.jpg",
		tendenciaActual: "El bienestar emocional es clave en el desarrollo personal y organizacional.",
		codigoSENCE: "Por definir",
		duracion: "8 horas",
		modalidad: ["Presencial", "E-learning sincrónico", "E-learning asincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer autoestima y gestión emocional mediante técnicas prácticas que mejoren bienestar, relaciones y capacidad de logro.",
		objetivosEspecificos: [
			"Reconocer concepto de autoestima.",
			"Identificar creencias limitantes.",
			"Aplicar técnicas de regulación emocional.",
			"Diseñar un plan personal de fortalecimiento.",
		],
		dirigidoA: "Colaboradores, estudiantes, equipos de trabajo y público general.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Conectividad y equipo para modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Comprendiendo la Autoestima",
				items: [
					"Componentes cognitivos, emocionales y conductuales",
					"Autoimagen vs autoconcepto",
					"Influencia del entorno",
					"Diagnóstico personal",
				],
			},
			modulo2: {
				titulo: "Gestión Emocional para el Bienestar",
				items: [
					"Emociones básicas",
					"Técnicas de regulación emocional",
					"Influencia en autoestima",
					"Identificación de detonantes",
				],
			},
			modulo3: {
				titulo: "Confianza Personal y Relaciones Sanas",
				items: [
					"Comunicación emocional inteligente",
					"Límites personales",
					"Vínculos fortalecedores",
					"Autoeficacia",
				],
			},
			modulo4: {
				titulo: "De la Autoestima a la Acción",
				items: [
					"Objetivos modelo SMART",
					"Hábitos para fortalecer autoestima",
					"Plan de desarrollo personal",
					"Ejercicio: Mi mejor versión",
				],
			},
		},
		competencias: [
			"Autorregulación emocional",
			"Comunicación asertiva",
			"Autoeficacia",
			"Diseño de metas",
		],
		metodologia: [
			"Dinámicas vivenciales",
			"Ejercicios introspectivos",
			"Técnicas de coaching",
			"Bitácoras personales",
		],
		evaluacion: ["Diagnóstico inicial", "Participación", "Plan personal final"],
	},
	"hablar-en-publico-y-oratoria-para-presentaciones-exitosas": {
		id: 18,
		slug: "hablar-en-publico-y-oratoria-para-presentaciones-exitosas",
		title: "Hablar en Público y Oratoria para Presentaciones Exitosas",
		image:
			"/images/crecimiento/courses/hablar-en-publico-y-oratoria-para-presentaciones-exitosas.jpg",
		tendenciaActual: "Hablar en público es hoy una habilidad esencial para cualquier profesional.",
		codigoSENCE: "Por definir",
		duracion: "8 horas",
		modalidad: ["Presencial", "E-learning sincrónico", "E-learning asincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de oratoria, comunicación efectiva y manejo de presentaciones para exponer con claridad y seguridad.",
		objetivosEspecificos: [
			"Reconocer elementos clave de una presentación efectiva.",
			"Estructurar discursos persuasivos.",
			"Aplicar técnicas verbales y no verbales.",
			"Utilizar herramientas visuales efectivas.",
		],
		dirigidoA: "Colaboradores, profesionales, líderes, estudiantes.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Equipo con cámara y micrófono en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Fundamentos de la Oratoria",
				items: [
					"Mitos sobre hablar en público",
					"Tipos de presentaciones",
					"Componentes de presentación efectiva",
					"Diagnóstico inicial",
				],
			},
			modulo2: {
				titulo: "Preparación y Diseño del Mensaje",
				items: [
					"Estructura del discurso",
					"Claridad del objetivo",
					"Storytelling",
					"Diseño visual",
				],
			},
			modulo3: {
				titulo: "Ejecución, Comunicación y Manejo Escénico",
				items: [
					"Técnicas de oratoria",
					"Dicción y lenguaje corporal",
					"Manejo del espacio",
					"Responder preguntas difíciles",
				],
			},
			modulo4: {
				titulo: "Práctica y Autoconfianza",
				items: [
					"Simulación de presentaciones",
					"Manejo de ansiedad",
					"Feedback guiado",
					"Plan de mejora continua",
				],
			},
		},
		competencias: [
			"Comunicación verbal y no verbal",
			"Autoconfianza al presentar",
			"Estructura clara de discursos",
			"Manejo de audiencia",
		],
		metodologia: [
			"Prácticas de oratoria",
			"Simulaciones",
			"Dinámicas de voz y cuerpo",
			"Feedback individual",
		],
		evaluacion: ["Autoevaluación inicial", "Participación activa", "Presentación final"],
	},
	"conexion-y-sanacion-del-nino-interior-para-el-bienestar-emocional": {
		id: 19,
		slug: "conexion-y-sanacion-del-nino-interior-para-el-bienestar-emocional",
		title: "Conexión y Sanación del Niño Interior para el Bienestar Emocional",
		image:
			"/images/crecimiento/courses/conexion-y-sanacion-del-nino-interior-para-el-bienestar-emocional.jpg",
		tendenciaActual:
			"El autoconocimiento profundo es clave para la salud emocional en entornos de alta demanda.",
		codigoSENCE: "Por definir",
		duracion: "8 horas",
		modalidad: ["Presencial", "E-learning sincrónico", "E-learning asincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Facilitar el reconocimiento, expresión y sanación del niño interior para fortalecer autoestima y gestión emocional.",
		objetivosEspecificos: [
			"Comprender el concepto del niño interior.",
			"Identificar heridas emocionales.",
			"Aplicar técnicas de expresión emocional.",
			"Desarrollar autocompasión.",
			"Diseñar un plan personal de sanación.",
		],
		dirigidoA:
			"Adultos, colaboradores, profesionales y toda persona que busque mejorar su bienestar emocional.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Espacio seguro en modalidad online",
		],
		contenidos: {
			modulo1: {
				titulo: "Comprendiendo al Niño Interior",
				items: [
					"Dimensión simbólica y emocional",
					"Influencia de la infancia",
					"Necesidades no satisfechas",
					"Diagnóstico personal",
				],
			},
			modulo2: {
				titulo: "Heridas y Emociones No Resueltas",
				items: [
					"Exploración de experiencias críticas",
					"Detonantes actuales",
					"Diario emocional",
					"Comprender miedo y vergüenza",
				],
			},
			modulo3: {
				titulo: "Expresión Creativa y Reparación",
				items: [
					"Actividades expresivas: dibujo, visualización",
					"Técnicas simbólicas: sillas vacías",
					"Autocompasión",
					"Reparación simbólica",
				],
			},
			modulo4: {
				titulo: "Integración y Autocuidado",
				items: [
					"Plan personal de sanación",
					"Prácticas diarias",
					"Construcción de seguridad interna",
					"Cuándo buscar apoyo terapéutico",
				],
			},
		},
		competencias: [
			"Autoconocimiento profundo",
			"Gestión emocional",
			"Autocompasión",
			"Bienestar relacional",
		],
		metodologia: [
			"Ejercicios introspectivos",
			"Visualizaciones guiadas",
			"Dinámicas creativas",
			"Reflexión personal",
		],
		evaluacion: [
			"Diagnóstico emocional",
			"Participación en actividades",
			"Plan personal de sanación",
		],
	},
	"ser-hacer-y-tener-transformacion-personal": {
		id: 20,
		slug: "ser-hacer-y-tener-transformacion-personal",
		title: "Ser - Hacer - Tener: Transformación Personal para Lograr Metas con Propósito",
		image: "/images/crecimiento/courses/ser-hacer-y-tener-transformacion-personal.png",
		tendenciaActual: "Personas y organizaciones valoran coherencia entre ser, hacer y tener.",
		codigoSENCE: "Por definir",
		duracion: "8 horas",
		modalidad: ["Presencial", "E-learning sincrónico", "E-learning asincrónico"],
		ejecucion: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer desarrollo personal mediante el modelo Ser-Hacer-Tener, promoviendo alineación entre identidad, acciones y resultados.",
		objetivosEspecificos: [
			"Comprender el modelo Ser-Hacer-Tener.",
			"Identificar valores, propósito e identidad futura.",
			"Diseñar acciones y hábitos alineados al Ser.",
			"Reconocer los resultados como consecuencia.",
			"Crear un plan de transformación personal.",
		],
		dirigidoA:
			"Personas, líderes, emprendedores, coaches y quienes deseen trabajar propósito y coherencia personal.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Disposición al trabajo introspectivo",
		],
		contenidos: {
			modulo1: {
				titulo: "El Modelo Ser - Hacer - Tener",
				items: [
					"Identidad → acciones → resultados",
					"Consecuencias de la desalineación",
					"Diagnóstico: ¿desde dónde actúo?",
				],
			},
			modulo2: {
				titulo: "SER - Identidad, Propósito y Valores",
				items: [
					"Visualización de identidad futura",
					"Definición de valores",
					"Ejercicio: Yo presente vs yo deseado",
					"Ser auténtico",
				],
			},
			modulo3: {
				titulo: "HACER - Acciones y Hábitos",
				items: [
					"Accionar desde propósito",
					"Hábitos de coherencia",
					"Organización personal",
					"Diseño de hábitos alineados",
				],
			},
			modulo4: {
				titulo: "TENER - Resultados y Alineación",
				items: [
					"Resultados tangibles e intangibles",
					"Bienestar sin apego",
					"Alineación integral",
					"Mapa de transformación",
				],
			},
		},
		competencias: [
			"Autoconocimiento profundo",
			"Claridad de propósito",
			"Diseño de hábitos conscientes",
			"Coherencia personal",
		],
		metodologia: ["Taller vivencial", "Visualización guiada", "Coaching", "Bitácora personal"],
		evaluacion: ["Diagnóstico inicial", "Participación activa", "Plan personal de transformación"],
	},
}
