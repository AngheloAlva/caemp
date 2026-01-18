export interface Workshop {
	nombre: string
	slug: string
	tipo: string
	imagen: string
	codigoSence: string
	duracion: {
		minimo: number
		maximo: number
		unidad: string
	}
	modalidad: string[]
	ejecutor: string
	objetivoGeneral: string
	objetivosEspecificos: string[]
	dirigidoA: string
	requisitosIngreso: string[]
	modulos: {
		nombre: string
		contenidos: string[]
	}[]
	competencias: string[]
	metodologia: string
	evaluacion: string[]
}

export const workshops: Record<string, Workshop> = {
	"liderazgo-consciente-gestion-equipos": {
		nombre: "Liderazgo Consciente y Gestión de Equipos",
		slug: "liderazgo-consciente-gestion-equipos",
		tipo: "TALLER",
		imagen: "/images/crecimiento/galery-1.jpg",
		codigoSence: "Por definir",
		duracion: {
			minimo: 100,
			maximo: 120,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer el liderazgo consciente mediante la autogestión emocional, la toma de decisiones ética y la creación de equipos de alto desempeño, promoviendo culturas de confianza, colaboración y responsabilidad compartida.",
		objetivosEspecificos: [
			"Desarrollar autoconciencia y claridad de propósito en el rol de liderazgo.",
			"Implementar estrategias de gestión emocional para mantener equipos estables bajo presión.",
			"Aplicar herramientas para alinear equipos con metas claras, medibles y alcanzables.",
			"Impulsar una cultura de respeto, colaboración y accountability en la organización.",
		],
		dirigidoA:
			"Líderes formales e informales, jefes de área, supervisores, profesionales de RR.HH. y personas que gestionan equipos humanos o aspiran a roles de liderazgo dentro de sus organizaciones.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Fundamentos del Liderazgo Consciente",
				contenidos: [
					"Liderazgo como servicio: del control a la influencia",
					"Coherencia entre pensamiento, palabra y acción",
					"Confianza psicológica en los equipos",
				],
			},
			{
				nombre: "Inteligencia Emocional y Autoliderazgo",
				contenidos: [
					"Autoconocimiento emocional",
					"Gestión de emociones bajo presión",
					"Lenguaje interno y creencias limitantes",
				],
			},
			{
				nombre: "Gestión de Equipos de Alto Desempeño",
				contenidos: [
					"Construcción de equipos autónomos y responsables",
					"Delegación efectiva y empoderamiento",
					"Herramientas para motivar y alinear al equipo",
				],
			},
			{
				nombre: "Plan de Mejora y Transformación Personal",
				contenidos: [
					"Identificación de brechas de liderazgo",
					"Plan de impacto en el propio equipo",
					"Compromisos de seguimiento y mejora continua",
				],
			},
		],
		competencias: [
			"Autogestión emocional.",
			"Liderazgo ético e inspirador.",
			"Capacidad de construir culturas colaborativas y seguras.",
			"Gestión efectiva del desempeño del equipo.",
		],
		metodologia:
			"Clases expositivas con análisis guiado, talleres vivenciales, trabajo grupal aplicado al contexto del participante y coaching reflexivo entre pares. Se fomentará la práctica activa, la retroalimentación continua y la aplicación directa de los contenidos en la realidad laboral.",
		evaluacion: [
			"Pruebas teóricas por módulo.",
			"Evaluaciones prácticas de liderazgo y trabajo en equipo.",
			"Proyecto final de mejora organizacional.",
		],
	},
	"coaching-y-comunicacion-efectiva-para-el-liderazgo": {
		nombre: "Coaching y Comunicación Efectiva para el Liderazgo",
		slug: "coaching-y-comunicacion-efectiva-para-el-liderazgo",
		imagen: "/images/crecimiento/galery-2.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 80,
			maximo: 100,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de liderazgo y comunicación efectiva mediante herramientas de coaching, promoviendo equipos colaborativos, empáticos y orientados a resultados.",
		objetivosEspecificos: [
			"Aplicar técnicas de comunicación efectiva en contextos laborales.",
			"Desarrollar la escucha activa y la retroalimentación constructiva como herramientas de mejora continua.",
			"Fortalecer el liderazgo basado en la confianza, el respeto y la empatía.",
			"Aumentar la claridad conversacional para prevenir conflictos y alinear a los equipos con los objetivos de la organización.",
		],
		dirigidoA:
			"Líderes, jefaturas intermedias, supervisores, encargados de área y profesionales que busquen potenciar su liderazgo y habilidades comunicacionales dentro de su entorno laboral.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Fundamentos del Coaching y la Comunicación Efectiva",
				contenidos: [
					"Principios del coaching aplicado al entorno laboral",
					"Escucha activa y observación consciente",
					"Lenguaje corporal, tono y coherencia emocional",
				],
			},
			{
				nombre: "Liderazgo Comunicacional",
				contenidos: [
					"Estilos de liderazgo y su impacto en el clima laboral",
					"Feedback constructivo y conversaciones de mejora",
					"Rol del líder coach dentro de la organización",
				],
			},
			{
				nombre: "Conversaciones Difíciles y Gestión de Conflictos",
				contenidos: [
					"Comunicación en situaciones de tensión",
					"Negociación colaborativa y búsqueda de acuerdos",
					"Prevención de malos entendidos y rumores internos",
				],
			},
			{
				nombre: "Plan de Desarrollo Personal y Liderazgo",
				contenidos: [
					"Detección de fortalezas y áreas de mejora",
					"Plan de acción individual de liderazgo",
					"Compromisos y seguimiento",
				],
			},
		],
		competencias: [
			"Escucha activa y comunicación empática.",
			"Liderazgo basado en coaching y servicio.",
			"Capacidad de sostener conversaciones difíciles sin dañar el vínculo.",
			"Gestión del clima laboral y de las relaciones interpersonales.",
		],
		metodologia:
			"Clases participativas con apoyo visual, análisis de casos reales, simulaciones de situaciones comunicacionales y ejercicios prácticos de autoevaluación. Se promoverá la práctica conversacional y la aplicación directa de las herramientas en el entorno laboral.",
		evaluacion: [
			"Evaluación diagnóstica inicial.",
			"Ejercicios prácticos aplicados por módulo.",
			"Evaluación final mediante presentación de un plan personal de liderazgo.",
		],
	},
	"mindfulness-y-bienestar-laboral": {
		nombre: "Mindfulness y Bienestar Laboral",
		slug: "mindfulness-y-bienestar-laboral",
		tipo: "TALLER",
		imagen: "/images/crecimiento/galery-3.jpg",
		codigoSence: "Por definir",
		duracion: {
			minimo: 80,
			maximo: 100,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Promover el bienestar integral en el entorno laboral mediante prácticas de atención plena, autocuidado y regulación del estrés, fortaleciendo tanto la salud emocional individual como el clima organizacional.",
		objetivosEspecificos: [
			"Reconocer el impacto del estrés crónico en la salud física, mental y relacional.",
			"Aplicar técnicas simples y breves de atención plena en el trabajo.",
			"Incorporar pausas conscientes y hábitos de recuperación energética durante la jornada.",
			"Contribuir al bienestar colectivo desde la propia conducta y ejemplo.",
		],
		dirigidoA:
			"Personas trabajadoras en contextos de alta demanda emocional, turnos extensos, atención a público o exigencias operativas intensas; áreas de RR.HH., prevención de riesgos y líderes que busquen cuidar equipos.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Estrés Laboral y Bienestar Psicosocial",
				contenidos: [
					"Qué es el estrés y cómo se manifiesta",
					"Relación entre carga emocional y desempeño",
					"Riesgos psicosociales y autocuidado responsable",
				],
			},
			{
				nombre: "Herramientas de Mindfulness en la Jornada",
				contenidos: [
					"Atención plena en tareas repetitivas",
					"Técnicas de respiración consciente",
					"Foco atencional frente a interrupciones",
				],
			},
			{
				nombre: "Regulación Emocional en Situaciones Críticas",
				contenidos: [
					"Claves para enfrentar tensión sin escalar conflicto",
					"Distancia saludable y cuidado de límites internos",
					"Microdescanso emocional y pausas conscientes",
				],
			},
			{
				nombre: "Bienestar Colectivo y Cultura de Cuidado",
				contenidos: [
					"Construcción de equipos que se cuidan mutuamente",
					"Actividades breves de recuperación grupal",
					"Compromisos de bienestar laboral sostenible",
				],
			},
		],
		competencias: [
			"Autocontrol emocional en situaciones exigentes.",
			"Gestión saludable del estrés laboral.",
			"Promoción de una cultura de bienestar y autocuidado.",
			"Capacidad de aplicar pausas conscientes para mejorar el foco y la energía.",
		],
		metodologia:
			"Clases participativas y reflexivas con prácticas guiadas en vivo, análisis de casos reales, ejercicios de respiración y relajación consciente. Se fomentará la incorporación de hábitos diarios de bienestar y espacios de reflexión grupal para promover una cultura de cuidado integral.",
		evaluacion: [
			"Cuestionarios por módulo.",
			"Registro personal de prácticas de mindfulness.",
			"Plan de autocuidado presentado al cierre del curso.",
		],
	},
	"inteligencia-emocional-aplicada-al-trabajo": {
		nombre: "Inteligencia Emocional Aplicada al Trabajo",
		slug: "inteligencia-emocional-aplicada-al-trabajo",
		imagen: "/images/crecimiento/galery-4.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 80,
			maximo: 100,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar competencias emocionales clave para mejorar la comunicación, la toma de decisiones y el bienestar en contextos laborales exigentes, fortaleciendo la convivencia, la empatía y el liderazgo efectivo dentro de los equipos de trabajo.",
		objetivosEspecificos: [
			"Comprender el impacto de las emociones en el rendimiento y las relaciones laborales.",
			"Aplicar técnicas de autorregulación emocional frente a presión, conflicto o fatiga.",
			"Mejorar la empatía y la lectura emocional de otros para fortalecer vínculos laborales.",
			"Incorporar la inteligencia emocional en la comunicación y en la gestión del liderazgo.",
		],
		dirigidoA:
			"Trabajadores, líderes, encargados de equipo, personal administrativo y operativo que desee mejorar su gestión emocional frente a escenarios laborales exigentes, y fortalecer su capacidad de comunicación y colaboración.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Autoconocimiento Emocional",
				contenidos: [
					"Lenguaje emocional básico",
					"Identificación de emociones y activadores personales",
					"Relación entre emoción, pensamiento y acción",
				],
			},
			{
				nombre: "Autorregulación Emocional y Manejo del Estrés",
				contenidos: [
					"Estrategias para reducir la carga emocional en el momento",
					"Control de impulsividad y reactividad",
					"Prevención del agotamiento emocional (burnout)",
				],
			},
			{
				nombre: "Empatía y Relación con Otros",
				contenidos: [
					"Escucha empática y validación emocional",
					"Lectura emocional en conversaciones difíciles",
					"Cómo acompañar sin invalidar al otro",
				],
			},
			{
				nombre: "Inteligencia Emocional en el Entorno Laboral",
				contenidos: [
					"Aplicación en liderazgo y toma de decisiones",
					"Clima laboral y seguridad emocional",
					"Comunicación emocionalmente responsable",
				],
			},
		],
		competencias: [
			"Autoconciencia y regulación emocional.",
			"Empatía aplicada a la gestión laboral.",
			"Comunicación emocionalmente responsable.",
			"Resiliencia frente a contextos de alta demanda.",
		],
		metodologia:
			"Clases participativas con apoyo visual, ejercicios introspectivos individuales, role play de situaciones laborales reales, análisis de casos y reflexiones guiadas. Se promueve la aplicación práctica de la inteligencia emocional en la comunicación y en la gestión cotidiana del trabajo.",
		evaluacion: [
			"Cuestionarios por módulo.",
			"Registro personal de aplicación de técnicas emocionales.",
			"Evaluación final integrada sobre casos prácticos.",
		],
	},
	"comunicacion-asertiva-y-relaciones-laborales-saludables": {
		nombre: "Comunicación Asertiva y Relaciones Laborales Saludables",
		slug: "comunicacion-asertiva-y-relaciones-laborales-saludables",
		imagen: "/images/crecimiento/galery-5.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 60,
			maximo: 80,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer habilidades de comunicación asertiva, escucha activa y gestión de tensiones interpersonales, promoviendo relaciones laborales basadas en el respeto, la claridad y la colaboración, en coherencia con entornos organizacionales saludables y sostenibles.",
		objetivosEspecificos: [
			"Identificar estilos comunicacionales que generan conflicto, pasividad o agresividad.",
			"Aplicar técnicas de comunicación asertiva en conversaciones difíciles.",
			"Reconocer y gestionar tempranamente situaciones de tensión interpersonal.",
			"Contribuir activamente a la construcción de un clima laboral seguro y colaborativo.",
		],
		dirigidoA:
			"Trabajadores, equipos de primera línea, líderes, personal administrativo y áreas de apoyo que mantengan interacción constante con otras personas dentro de la organización y deseen mejorar su comunicación y relaciones interpersonales.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Fundamentos de la Comunicación Asertiva",
				contenidos: [
					"Asertividad vs. pasividad vs. agresividad",
					"Lenguaje claro, directo y respetuoso",
					"Autoconfianza para expresar necesidades y límites",
				],
			},
			{
				nombre: "Escucha Activa y Empatía en el Trabajo",
				contenidos: [
					"Escuchar para comprender, no solo para responder",
					"Validación emocional y comunicación empática",
					"Cuidado del vínculo durante el desacuerdo",
				],
			},
			{
				nombre: "Conversaciones Difíciles y Manejo del Conflicto",
				contenidos: [
					"Cómo comunicar lo incómodo sin escalar el conflicto",
					"Negociación colaborativa y búsqueda de acuerdos",
					"Prevención de escalamiento relacional y quiebres comunicativos",
				],
			},
			{
				nombre: "Construcción de Relaciones Laborales Saludables",
				contenidos: [
					"Respeto mutuo y confianza psicológica",
					"Comunicación transparente como base de la convivencia",
					"Compromisos de convivencia laboral segura",
				],
			},
		],
		competencias: [
			"Comunicación clara, directa y empática.",
			"Escucha activa y validación emocional.",
			"Manejo constructivo de conflictos interpersonal.",
			"Capacidad de contribuir al clima laboral saludable.",
		],
		metodologia:
			"Clases participativas con apoyo visual y dinámicas grupales, role play de conversaciones difíciles, trabajo en duplas y ejercicios prácticos de comunicación. Se promueve la reflexión consciente y la aplicación directa de las herramientas en el contexto laboral del participante.",
		evaluacion: [
			"Ejercicios prácticos aplicados en cada módulo.",
			"Observación del desempeño comunicacional en simulaciones.",
			"Evaluación final integrada sobre habilidades de comunicación.",
		],
	},
	"coaching-para-la-gestion-del-cambio-organizacional": {
		nombre: "Coaching para la Gestión del Cambio Organizacional",
		slug: "coaching-para-la-gestion-del-cambio-organizacional",
		imagen: "/images/crecimiento/galery-6.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 100,
			maximo: 120,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar herramientas de coaching y comunicación que permitan acompañar procesos de cambio cultural, estructural u operativo dentro de la organización, reduciendo la resistencia, fortaleciendo el compromiso y promoviendo una adaptación saludable a los nuevos escenarios laborales.",
		objetivosEspecificos: [
			"Comprender las dinámicas humanas que surgen frente al cambio organizacional.",
			"Desarrollar habilidades comunicacionales para guiar equipos en procesos de transición.",
			"Aplicar metodologías estructuradas de cambio con enfoque en las personas.",
			"Definir e implementar un plan de acompañamiento del cambio en el entorno laboral propio.",
		],
		dirigidoA:
			"Líderes, supervisores, encargados de área, profesionales de RR.HH. y equipos involucrados en proyectos de transformación interna o procesos de cambio cultural dentro de la empresa.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Comprendiendo el Cambio Organizacional",
				contenidos: [
					"Tipos de cambio: cultural, estructural y tecnológico",
					"Reacciones humanas ante la transformación",
					"Costos de no gestionar adecuadamente el cambio",
				],
			},
			{
				nombre: "Comunicación del Cambio",
				contenidos: [
					"Cómo comunicar el 'para qué' del cambio",
					"Escucha activa de inquietudes y resistencias",
					"Gestión de rumores y acompañamiento emocional",
				],
			},
			{
				nombre: "Acompañamiento y Coaching al Equipo",
				contenidos: [
					"Contención emocional sin invalidar",
					"Conversaciones uno a uno en etapas críticas",
					"Refuerzo de compromisos y seguimiento sostenido",
				],
			},
			{
				nombre: "Plan de Implementación del Cambio",
				contenidos: [
					"Identificación de hitos y responsables",
					"Mapeo de riesgos humanos y plan de acción",
					"Aplicación práctica del modelo de cambio en el entorno del participante",
				],
			},
		],
		competencias: [
			"Comunicación efectiva en contextos de incertidumbre.",
			"Gestión del cambio con foco humano y colaborativo.",
			"Contención emocional y acompañamiento de equipos.",
			"Planificación estructurada de procesos de transformación.",
		],
		metodologia:
			"Clases expositivas con ejemplos reales, talleres vivenciales, simulaciones conversacionales, análisis de casos organizacionales y desarrollo de un plan de acción aplicable. Se combina teoría, práctica reflexiva y acompañamiento personalizado para facilitar la internalización de las herramientas.",
		evaluacion: [
			"Pruebas teóricas por módulo.",
			"Evaluaciones prácticas de simulación de conversaciones.",
			"Presentación de un plan de gestión del cambio aplicable al entorno laboral.",
		],
	},
	"autoliderazgo-y-desarrollo-personal": {
		nombre: "Autoliderazgo y Desarrollo Personal",
		slug: "autoliderazgo-y-desarrollo-personal",
		imagen: "/images/crecimiento/galery-6.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 80,
			maximo: 100,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fomentar el autoliderazgo a partir del autoconocimiento, la gestión emocional y la definición de un plan de vida y carrera alineado con valores, propósito y metas personales, promoviendo así el desarrollo integral y la coherencia entre el ser y el hacer.",
		objetivosEspecificos: [
			"Identificar fortalezas personales y áreas de mejora.",
			"Desarrollar pensamiento crítico sobre las propias decisiones y conductas.",
			"Fortalecer la seguridad personal y la autoconfianza en contextos laborales exigentes.",
			"Construir un plan de desarrollo individual y profesional con metas sostenibles.",
		],
		dirigidoA:
			"Personas trabajadoras, técnicos, profesionales y líderes que busquen crecer personal y laboralmente, aumentar su autonomía, claridad y bienestar emocional, sosteniendo procesos de cambio duraderos.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Autoconocimiento y Identidad Personal",
				contenidos: [
					"Valores, creencias y narrativa personal",
					"Reconocimiento de talentos y recursos internos",
					"Identificación de bloqueos y autosabotaje",
				],
			},
			{
				nombre: "Gestión Emocional y Autocuidado",
				contenidos: [
					"Autorregulación en momentos de presión",
					"Gestión del miedo, la frustración y la inseguridad",
					"Estrategias de autocuidado físico, mental y emocional",
				],
			},
			{
				nombre: "Autoconfianza y Toma de Decisiones",
				contenidos: [
					"Lenguaje interno y seguridad personal",
					"Asertividad y establecimiento de límites sanos",
					"Responsabilidad personal sin culpa",
				],
			},
			{
				nombre: "Plan de Vida y Carrera",
				contenidos: [
					"Clarificación de metas personales y profesionales",
					"Construcción de una ruta de acción a corto, mediano y largo plazo",
					"Compromiso personal de seguimiento y evaluación de avances",
				],
			},
		],
		competencias: [
			"Autoconocimiento profundo y autogestión emocional.",
			"Capacidad para tomar decisiones conscientes y asertivas.",
			"Fortalecimiento de la autoconfianza y resiliencia personal.",
			"Planificación estratégica del desarrollo personal y profesional.",
		],
		metodologia:
			"Ejercicios introspectivos guiados, dinámicas individuales y grupales, coaching reflexivo, análisis de casos, bitácora de desarrollo personal y espacios de feedback entre pares. Se promueve la conexión entre el aprendizaje interno y la aplicación práctica en la vida cotidiana.",
		evaluacion: [
			"Evaluación diagnóstica inicial.",
			"Ejercicios prácticos por módulo.",
			"Presentación de un plan de desarrollo personal y profesional final.",
		],
	},
	"motivacion-propósito-y-sentido-del-trabajo": {
		nombre: "Motivación, Propósito y Sentido del Trabajo",
		slug: "motivacion-propósito-y-sentido-del-trabajo",
		imagen: "/images/crecimiento/courses/motivacion-propósito-y-sentido-del-trabajo.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 60,
			maximo: 80,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Potenciar la motivación interna de las personas conectándolas con su propósito, sus valores y el impacto real de su trabajo dentro de la organización, fortaleciendo el compromiso, la pertenencia y la satisfacción laboral.",
		objetivosEspecificos: [
			"Explorar el sentido personal que cada participante le otorga a su trabajo.",
			"Reconocer los factores que fortalecen o debilitan la motivación laboral.",
			"Desarrollar recursos internos para sostener el compromiso en escenarios desafiantes.",
			"Elevar el sentido de contribución y pertenencia dentro del equipo y la organización.",
		],
		dirigidoA:
			"Trabajadores, colaboradores de primera línea, personal operativo y administrativo, mandos medios y líderes que deseen reconectarse con el valor de su labor y promover un entorno laboral con propósito y bienestar",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Propósito Personal y Valor del Trabajo",
				contenidos: [
					"¿Por qué hago lo que hago?",
					"Valores personales y orgullo laboral",
					"Relación entre identidad, propósito y desempeño",
				],
			},
			{
				nombre: "Factores de Motivación y Desgaste",
				contenidos: [
					"Reconocimiento, pertenencia y justicia organizacional",
					"Desgaste emocional y fatiga moral",
					"Estrategias para recuperar la energía emocional",
				],
			},
			{
				nombre: "Compromiso y Responsabilidad Personal",
				contenidos: [
					"Pasar de la queja a la acción",
					"Lenguaje interno potenciador y actitud proactiva",
					"Influencia positiva dentro del entorno laboral",
				],
			},
			{
				nombre: "Plan de Propósito y Proyección",
				contenidos: [
					"Definición de metas significativas",
					"Impacto personal en el equipo y la empresa",
					"Compromisos de contribución consciente",
				],
			},
		],
		competencias: [
			"Autoconciencia de propósito personal.",
			"Capacidad para sostener la motivación intrínseca.",
			"Resiliencia emocional frente a la presión diaria.",
			"Influencia positiva y sentido de contribución en el trabajo.",
		],
		metodologia:
			"Ejercicios reflexivos, dinámicas grupales de reconocimiento, trabajo narrativo de historias personales de orgullo, análisis de casos y espacios de conversación guiada. Se fomenta la conexión emocional con el propósito y el impacto positivo del trabajo en la vida personal y colectiva.",
		evaluacion: [
			"Autoevaluación inicial y final del nivel de motivación.",
			"Ejercicios prácticos por módulo.",
			"Presentación de un plan personal de propósito y compromiso.",
		],
	},
	"trabajo-en-equipo-y-sinergia-organizacional": {
		nombre: "Trabajo en Equipo y Sinergia Organizacional",
		slug: "trabajo-en-equipo-y-sinergia-organizacional",
		imagen: "/images/crecimiento/galery-8.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 80,
			maximo: 100,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer la colaboración entre áreas y personas mediante el desarrollo de habilidades para construir confianza, coordinar acciones y resolver tensiones de forma efectiva, promoviendo una cultura de sinergia y comunicación positiva en los equipos de trabajo.",
		objetivosEspecificos: [
			"Reconocer los factores que favorecen o dificultan el trabajo colaborativo.",
			"Aplicar herramientas de coordinación efectiva y alineamiento de objetivos comunes.",
			"Desarrollar conductas de apoyo mutuo, corresponsabilidad y comunicación transparente.",
			"Prevenir quiebres relacionales que afecten la productividad o el clima laboral.",
		],
		dirigidoA:
			"Equipos de trabajo, cuadrillas operativas, áreas administrativas, supervisores, mandos medios y personal de soporte que requieran mejorar la coordinación, la colaboración y la comunicación interna.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Fundamentos del Trabajo en Equipo",
				contenidos: [
					"Diferencias entre grupo y equipo",
					"Confianza, respeto y acuerdos básicos",
					"Roles individuales dentro del colectivo",
				],
			},
			{
				nombre: "Coordinación y Comunicación Interna",
				contenidos: [
					"Compromisos claros y seguimiento de tareas",
					"Reuniones efectivas de coordinación",
					"Gestión temprana de desalineamientos",
				],
			},
			{
				nombre: "Resolución Colaborativa de Problemas",
				contenidos: [
					"Escucha entre pares y pensamiento conjunto",
					"Herramientas de solución de conflictos",
					"Enfoque en resultados en lugar de culpables",
				],
			},
			{
				nombre: "Cultura de Sinergia y Mejora Continua",
				contenidos: [
					"Buenas prácticas compartidas y aprendizaje colectivo",
					"Reconocimiento interno y sentido de pertenencia",
					"Plan de mejora del equipo y compromisos de acción",
				],
			},
		],
		competencias: [
			"Comunicación colaborativa y escucha activa.",
			"Capacidad de coordinación efectiva y cumplimiento de acuerdos.",
			"Resolución conjunta de problemas y toma de decisiones compartidas.",
			"Contribución activa al clima laboral positivo y cohesión de equipo.",
		],
		metodologia:
			"Dinámicas grupales, simulaciones de coordinación, ejercicios de confianza, análisis de casos reales y sesiones de reflexión colectiva. Se promueve la práctica directa de habilidades colaborativas en entornos simulados y reales para fortalecer la cohesión de los equipos.",
		evaluacion: [
			"Ejercicios prácticos por módulo.",
			"Evaluación de desempeño colaborativo en dinámicas grupales.",
			"Evaluación final integrada sobre el trabajo en equipo y la sinergia alcanzada.",
		],
	},
	"gestion-del-tiempo-y-productividad-personal": {
		nombre: "Gestión del Tiempo y Productividad Personal",
		slug: "gestion-del-tiempo-y-productividad-personal",
		imagen: "/images/crecimiento/galery-9.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 60,
			maximo: 80,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "B-learning", "E-learning sincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Entregar herramientas prácticas de planificación, priorización y enfoque que permitan al participante optimizar su uso del tiempo, reducir la sobrecarga laboral y aumentar la productividad sin sacrificar su bienestar personal.",
		objetivosEspecificos: [
			"Identificar los hábitos y conductas que generan pérdida de tiempo o dispersión.",
			"Aplicar técnicas de priorización y organización diaria o semanal.",
			"Implementar rutinas de foco en tareas críticas y manejo de interrupciones.",
			"Incorporar estrategias de autocuidado y equilibrio entre vida personal y laboral",
		],
		dirigidoA:
			"Colaboradores, administrativos, supervisores, mandos medios y profesionales que gestionen múltiples tareas en plazos exigentes, y deseen mejorar su productividad y bienestar integral.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo de lectoescritura",
			"Cédula de identidad vigente",
			"Salud compatible con la modalidad del curso",
			"Conectividad y dispositivo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Fundamentos de la Gestión del Tiempo",
				contenidos: [
					"Creencias y mitos sobre la productividad",
					"Identificación de 'ladrones del tiempo'",
					"Diferenciación entre lo urgente y lo importante",
				],
			},
			{
				nombre: "Herramientas de Planificación y Priorización",
				contenidos: [
					"Matriz de Eisenhower aplicada a la gestión diaria",
					"Método Pomodoro y bloques de foco",
					"Planificación realista semanal y mensual",
				],
			},
			{
				nombre: "Productividad en Contextos de Alta Demanda",
				contenidos: [
					"Manejo de interrupciones y sobrecarga",
					"Comunicación de límites y gestión de expectativas",
					"Toma de decisiones rápida y enfocada",
				],
			},
			{
				nombre: "Bienestar y Energía Personal",
				contenidos: [
					"Pausas activas y microrecuperación energética",
					"Hábitos saludables para mantener la claridad mental",
					"Plan personal de productividad sostenible",
				],
			},
		],
		competencias: [
			"Capacidad de planificación y organización del tiempo.",
			"Priorización efectiva y toma de decisiones enfocadas.",
			"Comunicación clara para la gestión de carga laboral.",
			"Incorporación del bienestar como parte de la productividad.",
		],
		metodologia:
			"Clases aplicadas con ejercicios prácticos, análisis de casos reales, simulaciones de planificación, dinámicas grupales y desarrollo de un plan de acción personal. Se promueve la implementación inmediata de técnicas para mejorar la eficiencia y el equilibrio personal.",
		evaluacion: [
			"Ejercicios prácticos aplicados por módulo.",
			"Autoevaluación del uso del tiempo y logros alcanzados.",
			"Presentación de un plan personal de mejora de productividad.",
		],
	},
	"liderazgo-y-convivencia-laboral-comunicacion-efectiva-trabajo-en-equipo-y-prevencion-del-acoso-ley-karin":
		{
			nombre:
				"Liderazgo y Convivencia Laboral: Comunicación Efectiva, Trabajo en Equipo y Prevención del Acoso según Ley Karin",
			slug: "liderazgo-y-convivencia-laboral-comunicacion-efectiva-trabajo-en-equipo-y-prevencion-del-acoso-ley-karin",
			imagen: "/images/crecimiento/galery-10.jpg",
			tipo: "TALLER",
			codigoSence: "Por definir",
			duracion: {
				minimo: 8,
				maximo: 8,
				unidad: "horas cronológicas",
			},
			modalidad: ["Presencial", "Online sincrónico"],
			ejecutor: "Empresa Crecimiento",
			objetivoGeneral:
				"Desarrollar competencias de liderazgo, comunicación efectiva y trabajo colaborativo que favorezcan ambientes laborales respetuosos, éticos y seguros, integrando los principios de la Ley Karin para la prevención del acoso laboral y sexual.",
			objetivosEspecificos: [
				"Reconocer los principios del liderazgo positivo y colaborativo en entornos laborales.",
				"Identificar estrategias de comunicación efectiva para fortalecer la convivencia.",
				"Reflexionar sobre las obligaciones que establece la Ley Karin frente al acoso laboral y sexual.",
				"Promover prácticas preventivas y de contención frente a situaciones de acoso.",
			],
			dirigidoA:
				"Líderes de equipo, supervisores, encargados de área, profesionales de RRHH, comités paritarios y trabajadores/as en general que deseen fortalecer sus habilidades de liderazgo y convivencia laboral.",
			requisitosIngreso: [
				"Mayor de 18 años",
				"Manejo básico de lectura y escritura",
				"Salud compatible con la modalidad del curso",
				"Conectividad y dispositivo en caso de modalidad online",
			],
			modulos: [
				{
					nombre: "Liderazgo y Comunicación para la Convivencia Laboral",
					contenidos: [
						"Principios del liderazgo positivo y ético",
						"Comunicación efectiva: escucha activa, feedback y empatía",
						"Trabajo en equipo, confianza y resolución colaborativa de conflictos",
						"Dinámicas prácticas: 'El puente colaborativo', 'El teléfono transparente', 'Misión imposible'",
					],
				},
				{
					nombre: "Prevención del Acoso y Aplicación de la Ley Karin",
					contenidos: [
						"Conceptos clave: acoso laboral, acoso sexual y violencia en el trabajo",
						"Responsabilidades del empleador según la Ley 21.643",
						"Estrategias de prevención, detección y abordaje",
						"Dinámicas prácticas: 'El caso espejo', 'Semáforo de la convivencia', 'Conversaciones difíciles'",
					],
				},
			],
			competencias: [
				"Liderazgo positivo para entornos laborales colaborativos.",
				"Comunicación asertiva, empática y clara.",
				"Detección y abordaje de conductas de acoso.",
				"Promoción de una cultura de respeto y prevención en el trabajo.",
			],
			metodologia:
				"Clases participativas con enfoque experiencial, combinando exposición dialogada, dinámicas grupales, role playing, análisis de casos y reflexión personal. Se promueve el aprendizaje a través de la vivencia y la integración emocional- cognitiva de los contenidos.",
			evaluacion: [
				"Participación activa en dinámicas y actividades grupales.",
				"Análisis de casos y reflexión aplicada a la realidad laboral.",
				"Cuestionario final sobre liderazgo, convivencia y Ley Karin.",
			],
		},
	"facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales": {
		nombre: "Facilitación Creativa y Resolución de Problemas con Bloques Virtuales",
		slug: "facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales",
		imagen:
			"/images/crecimiento/courses/facilitacion-creativa-y-resolucion-de-problemas-con-bloques-virtuales.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 8,
			maximo: 8,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "Online", "Taller vivencial"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de comunicación, creatividad y diseño de soluciones mediante la facilitación con bloques virtuales, aplicados a la formación, el liderazgo y el trabajo en equipo.",
		objetivosEspecificos: [
			"Comprender los fundamentos del aprendizaje creativo y visual basado en objetos digitales.",
			"Utilizar bloques virtuales para representar ideas, procesos y relaciones.",
			"Fortalecer la comunicación y la interpretación de modelos simbólicos.",
			"Diseñar actividades aplicables a procesos de formación, liderazgo y equipos.",
			"Fomentar la creatividad y la resolución de problemas a través de ejercicios prácticos.",
		],
		dirigidoA:
			"Formadores, facilitadores, docentes, coaches, líderes de equipos, supervisores y profesionales que buscan metodologías innovadoras para enseñanza, liderazgo o trabajo en equipo.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Manejo básico de herramientas digitales",
			"Conectividad y computador en caso de modalidad online",
			"Interés en metodologías activas o facilitación",
		],
		modulos: [
			{
				nombre: "Fundamentos del Aprendizaje Creativo",
				contenidos: [
					"Aprendizaje activo y experiencial",
					"Pensamiento visual y simbólico",
					"Facilitación basada en metáforas",
					"Programación neurolingüística (PNL) aplicada a la formación",
				],
			},
			{
				nombre: "Introducción a los Bloques Virtuales",
				contenidos: [
					"Plataformas de modelado 3D",
					"Construcción individual guiada",
					"Representación de ideas y comunicación simbólica",
				],
			},
			{
				nombre: "Dinámicas Colaborativas y Resolución de Problemas",
				contenidos: [
					"Modelado en parejas y equipos",
					"Diagnóstico de desafíos laborales mediante construcción digital",
					"Facilitación de conversaciones profundas a través del modelo",
				],
			},
			{
				nombre: "Diseño de Actividades para Formadores y Líderes",
				contenidos: [
					"Diseño de dinámicas aplicables a equipos o capacitaciones",
					"Desarrollo de actividad final por participante o grupo",
					"Presentación de propuestas aplicables a su contexto",
				],
			},
		],
		competencias: [
			"Comunicación simbólica y visual",
			"Creatividad aplicada a la resolución de problemas",
			"Facilitación creativa de procesos grupales",
			"Diseño de dinámicas activas para equipos y formación",
		],
		metodologia:
			"Taller experiencial, 90% práctico, con uso de plataformas de modelado digital. Enfoque en la facilitación creativa, metáforas visuales, aprendizaje colaborativo y coaching. Acompañamiento constante del relator/a durante la creación y análisis de modelos.",
		evaluacion: [
			"Diagnóstico inicial de expectativas.",
			"Evaluación práctica durante las dinámicas de construcción.",
			"Evaluación final: diseño y presentación de una actividad aplicable.",
			"Requisitos de aprobación: asistencia mínima, participación activa, entrega de actividad final.",
		],
	},
	"autoestima-y-gestion-emocional-para-el-logro-de-objetivos": {
		nombre: "Autoestima y Gestión Emocional para el Logro de Objetivos",
		slug: "autoestima-y-gestion-emocional-para-el-logro-de-objetivos",
		imagen:
			"/images/crecimiento/courses/autoestima-y-gestion-emocional-para-el-logro-de-objetivos.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 8,
			maximo: 8,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "E-learning sincrónico o asincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer la autoestima y la gestión emocional de los participantes mediante técnicas prácticas que permitan mejorar su bienestar personal, sus relaciones interpersonales y su capacidad para alcanzar metas u objetivos.",
		objetivosEspecificos: [
			"Reconocer el concepto de autoestima y su impacto en distintas áreas de la vida.",
			"Identificar creencias limitantes y patrones emocionales que afectan el desempeño.",
			"Aplicar técnicas de regulación emocional frente al estrés y la inseguridad.",
			"Diseñar un plan personal de fortalecimiento de autoestima y logro de objetivos.",
		],
		dirigidoA:
			"Colaboradores, supervisores, estudiantes, equipos de trabajo y público general interesado en fortalecer su autoestima, inteligencia emocional y capacidad de logro.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Conectividad y equipo en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "Comprendiendo la Autoestima",
				contenidos: [
					"Componentes cognitivos, emocionales y conductuales",
					"Autoimagen vs. autoconcepto",
					"Influencia del entorno social y laboral",
					"Diagnóstico personal de autoestima",
				],
			},
			{
				nombre: "Gestión Emocional para el Bienestar",
				contenidos: [
					"Emociones básicas y su función adaptativa",
					"Técnicas de regulación emocional",
					"Influencia de las emociones en la autoestima",
					"Identificación de detonantes emocionales",
				],
			},
			{
				nombre: "Confianza Personal y Relaciones Sanas",
				contenidos: [
					"Comunicación emocionalmente inteligente",
					"Límites personales y autocuidado",
					"Vínculos fortalecedores",
					"Autoeficacia y motivación",
				],
			},
			{
				nombre: "De la Autoestima a la Acción",
				contenidos: [
					"Diseño de objetivos personales (modelo SMART)",
					"Hábitos para fortalecer la autoestima",
					"Plan de desarrollo personal",
					"Ejercicio vivencial: 'Mi mejor versión'",
				],
			},
		],
		competencias: [
			"Autorregulación emocional",
			"Comunicación asertiva",
			"Autoeficacia y motivación",
			"Diseño y cumplimiento de metas personales",
		],
		metodologia:
			"Aprendizaje activo basado en dinámicas vivenciales, ejercicios introspectivos, técnicas de coaching y PNL. Uso de bitácoras personales, cápsulas audiovisuales y actividades guiadas tanto en modalidad presencial como online.",
		evaluacion: [
			"Diagnóstico inicial",
			"Participación activa en actividades",
			"Evaluación final: diseño del plan personal y test de salida",
			"Requisitos: cumplimiento de asistencia y logro mínimo en la evaluación final",
		],
	},
	"hablar-en-publico-y-oratoria-para-presentaciones-exitosas": {
		nombre: "Hablar en Público y Oratoria para Presentaciones Exitosas",
		slug: "hablar-en-publico-y-oratoria-para-presentaciones-exitosas",
		imagen:
			"/images/crecimiento/courses/hablar-en-publico-y-oratoria-para-presentaciones-exitosas.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 8,
			maximo: 8,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "E-learning sincrónico o asincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Desarrollar habilidades de oratoria, comunicación efectiva y manejo de presentaciones que permitan a los participantes exponer con claridad, seguridad y alto impacto en contextos laborales internos y externos.",
		objetivosEspecificos: [
			"Reconocer los elementos clave para preparar una presentación efectiva.",
			"Estructurar discursos y mensajes comprensibles y persuasivos.",
			"Aplicar técnicas verbales, no verbales y emocionales para transmitir seguridad.",
			"Fortalecer la autoconfianza a través de práctica guiada y retroalimentación.",
			"Utilizar herramientas visuales y narrativas que apoyen el mensaje.",
		],
		dirigidoA:
			"Colaboradores, profesionales, supervisores, estudiantes, líderes de equipo y cualquier persona que deba presentar ideas en contextos internos o externos.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"En modalidad online: acceso a equipo con cámara, micrófono y buena conexión",
		],
		modulos: [
			{
				nombre: "Fundamentos de la Oratoria y Presentaciones",
				contenidos: [
					"Mitos y creencias sobre hablar en público",
					"Tipos de presentaciones y perfil de audiencia",
					"Componentes de una presentación efectiva",
					"Diagnóstico inicial: fortalezas y temores personales",
				],
			},
			{
				nombre: "Preparación y Diseño del Mensaje",
				contenidos: [
					"Estructura del discurso: apertura, desarrollo y cierre",
					"Claridad del objetivo (informar, motivar, persuadir)",
					"Argumentación estratégica y storytelling",
					"Diseño visual simple y efectivo",
				],
			},
			{
				nombre: "Ejecución, Comunicación y Manejo Escénico",
				contenidos: [
					"Técnicas de oratoria y respiración",
					"Voz, dicción y lenguaje corporal",
					"Manejo del espacio y relación con el público",
					"Cómo responder preguntas difíciles",
				],
			},
			{
				nombre: "Práctica, Feedback y Autoconfianza",
				contenidos: [
					"Simulación de presentaciones reales",
					"Manejo de ansiedad y bloqueo escénico",
					"Autoevaluación y retroalimentación guiada",
					"Plan personal de mejora continua",
				],
			},
		],
		competencias: [
			"Comunicación verbal y no verbal efectiva",
			"Autoconfianza al exponer ideas",
			"Estructura clara y persuasiva de discursos",
			"Manejo de la audiencia y el escenario",
			"Diseño de presentaciones con impacto",
		],
		metodologia:
			"Enfoque activo y vivencial, con prácticas de oratoria, dinámicas de voz y cuerpo, simulaciones de presentaciones laborales reales y feedback individual. Para modalidad online, se incluyen cápsulas grabadas, foros, ejercicios en video y sesiones de retroalimentación personalizada.",
		evaluacion: [
			"Autoevaluación inicial de nivel y confianza",
			"Participación activa en ejercicios y simulaciones",
			"Evaluación final: presentación breve con criterios definidos",
			"Requisitos: cumplimiento de asistencia y logro mínimo en evaluación",
		],
	},
	"conexión-y-sanación-del-niño-interior-para-el-bienestar-emocional": {
		nombre: "Conexión y Sanación del Niño Interior para el Bienestar Emocional",
		slug: "conexión-y-sanación-del-niño-interior-para-el-bienestar-emocional",
		imagen:
			"/images/crecimiento/courses/conexion-y-sanacion-del-nino-interior-para-el-bienestar-emocional.jpg",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 8,
			maximo: 8,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "E-learning sincrónico o asincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Facilitar el reconocimiento, la expresión y la sanación del niño interior, permitiendo que los participantes mejoren su gestión emocional, fortalezcan su autoestima y desarrollen herramientas de autocuidado consciente.",
		objetivosEspecificos: [
			"Comprender el concepto de niño interior y su influencia en la vida adulta.",
			"Identificar heridas emocionales no resueltas y sus manifestaciones actuales.",
			"Aplicar técnicas de expresión emocional, visualización y autocuidado.",
			"Fortalecer la autocompasión y la integración emocional.",
			"Diseñar un plan personal de sanación y bienestar emocional.",
		],
		dirigidoA:
			"Adultos, colaboradores, profesionales, líderes, equipos de trabajo y toda persona que busque mejorar su autoconocimiento, gestionar sus emociones y sanar vínculos internos para fortalecer su bienestar.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Disposición para la introspección emocional",
			"En modalidad online: conexión estable y espacio personal seguro",
		],
		modulos: [
			{
				nombre: "Comprendiendo al Niño Interior",
				contenidos: [
					"Dimensión emocional, simbólica y psicológica",
					"Cómo la infancia moldea vínculos, emociones y creencias",
					"Necesidades no satisfechas: afecto, validación, seguridad",
					"Diagnóstico personal de memorias y sensaciones de la niñez",
				],
			},
			{
				nombre: "Reconocer Heridas y Emociones No Resueltas",
				contenidos: [
					"Exploración de experiencias críticas de la infancia",
					"Detonantes emocionales en la vida adulta",
					"Diario emocional y validación sin juicio",
					"Comprensión de emociones como miedo, vergüenza e inseguridad",
				],
			},
			{
				nombre: "Expresión Creativa y Reparación Emocional",
				contenidos: [
					"Actividades expresivas: dibujo, juego, visualización",
					"Técnicas de conexión simbólica: sillas vacías, diálogo interno",
					"Autocompasión y lenguaje interno amoroso",
					"Reparación simbólica desde el adulto presente",
				],
			},
			{
				nombre: "Integración, Autocuidado y Acompañamiento",
				contenidos: [
					"Plan personal de sanación emocional",
					"Prácticas cotidianas de conexión y regulación emocional",
					"Construcción de seguridad interna",
					"Cuándo y cómo buscar apoyo terapéutico",
				],
			},
		],
		competencias: [
			"Autoconocimiento profundo y gestión emocional",
			"Reconexión con la historia personal y resignificación",
			"Autocompasión, empatía y cuidado interno",
			"Fortalecimiento del bienestar personal y relacional",
		],
		metodologia:
			"Enfoque vivencial con ejercicios introspectivos, actividades creativas, visualizaciones guiadas, dinámicas de coaching emocional y reflexión personal. Modalidad online con cápsulas grabadas, ejercicios en diario digital y retroalimentación individual.",
		evaluacion: [
			"Cuestionario diagnóstico de autoconocimiento emocional",
			"Participación activa en actividades expresivas",
			"Elaboración de un plan personal de sanación y autocuidado emocional",
			"Requisitos: asistencia y logro mínimo en evaluación final",
		],
	},
	"ser-hacer-ytener-transformacion-personal-para-lograr-metas-con-propósito": {
		nombre: "Ser - Hacer - Tener: Transformación Personal para Lograr Metas con Propósito",
		slug: "ser-hacer-ytener-transformacion-personal-para-lograr-metas-con-propósito",
		imagen: "/images/crecimiento/courses/ser-hacer-y-tener-transformacion-personal.png",
		tipo: "TALLER",
		codigoSence: "Por definir",
		duracion: {
			minimo: 8,
			maximo: 8,
			unidad: "horas cronológicas",
		},
		modalidad: ["Presencial", "E-learning sincrónico o asincrónico"],
		ejecutor: "Empresa Crecimiento",
		objetivoGeneral:
			"Fortalecer el desarrollo personal y profesional mediante la comprensión y aplicación del modelo Ser - Hacer - Tener, promoviendo la alineación entre identidad, propósito, acciones y resultados para alcanzar metas significativas.",
		objetivosEspecificos: [
			"Comprender el modelo Ser - Hacer - Tener y su impacto en la transformación personal.",
			"Identificar valores, propósito personal e identidad futura.",
			"Diseñar acciones y hábitos alineados al 'ser' deseado.",
			"Reconocer los resultados como consecuencia del crecimiento interno.",
			"Elaborar un plan personal de transformación con propósito.",
		],
		dirigidoA:
			"Personas, colaboradores, líderes, emprendedores, coaches y cualquier persona que desee desarrollar claridad, propósito y coherencia entre identidad, acciones y resultados.",
		requisitosIngreso: [
			"Mayor de 18 años",
			"Lectoescritura básica",
			"Disposición al trabajo introspectivo y reflexivo",
			"Conexión estable y equipo adecuado en caso de modalidad online",
		],
		modulos: [
			{
				nombre: "El Modelo Ser - Hacer - Tener",
				contenidos: [
					"¿Qué es y cómo se aplica este modelo?",
					"Identidad → acciones → resultados",
					"Consecuencias de desalineación",
					"Diagnóstico personal: ¿desde dónde estoy actuando hoy?",
				],
			},
			{
				nombre: "SER - Identidad, Propósito y Valores",
				contenidos: [
					"Autoconocimiento y visualización de identidad futura",
					"Definición de valores y propósito personal",
					"Ejercicio vivencial: 'Mi yo presente vs. mi yo que deseo ser'",
					"Fundamentos del ser auténtico",
				],
			},
			{
				nombre: "HACER - Acciones, Hábitos y Enfoque Consciente",
				contenidos: [
					"Accionar desde el propósito",
					"Hábitos de coherencia y alto impacto",
					"Organización personal y disciplina suave",
					"Diseño de hábitos alineados al SER",
				],
			},
			{
				nombre: "TENER - Resultados como Consecuencia Natural",
				contenidos: [
					"Resultados tangibles e intangibles",
					"Cómo sostener el bienestar sin apego",
					"Alineación integral de vida",
					"Plan personal: mapa de transformación con propósito",
				],
			},
		],
		competencias: [
			"Autoconocimiento profundo",
			"Claridad de propósito",
			"Diseño de hábitos conscientes",
			"Coherencia entre identidad, acciones y resultados",
			"Desarrollo personal con impacto sostenible",
		],
		metodologia:
			"Taller vivencial con ejercicios introspectivos, dinámicas de coaching, visualización guiada, bitácora personal y reflexión grupal. En modalidad online se integra con cápsulas audiovisuales, ejercicios digitales y foros de acompañamiento.",
		evaluacion: [
			"Diagnóstico inicial de autoconocimiento",
			"Participación activa en dinámicas y ejercicios",
			"Desarrollo de un plan personal de transformación",
			"Requisitos: cumplimiento de asistencia y logro mínimo en evaluación final",
		],
	},
}
