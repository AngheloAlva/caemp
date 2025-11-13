export const Categories = {
	"equipamiento-de-altura": "Equipamiento de Altura",
	"guantes-de-protección": "Guantes de Protección",
	"calzado-de-seguridad": "Calzado de Seguridad",
	"otras-soluciones": "Otras Soluciones",
}

interface Product {
	slug: string
	name: string
	image: string
	category: string
	description: string
}

export const Products: Record<string, Product> = {
	"amortiguador-eqs-tipo-y-cinta-plana-180mt-escala-dieléctrico": {
		slug: "amortiguador-eqs-tipo-y-cinta-plana-180mt-escala-dieléctrico",
		name: "Amortiguador EQS Tipo Y Cinta Plana 1.80mt - Escala Dieléctrico",
		image: "Amortiguador EQS Tipo Y Cinta Plana 1.80mt – Escala Dieléctrico.png",
		description:
			"El absorbedor de impacto EQS forma parte de un sistema personal de detención de caídas, es un equipo diseñado para mitigar las fuerzas de impacto que experimenta una persona en caso de una caída desde altura. Esta absorción de energía ayuda a prevenir lesiones al desacelerar gradualmente la caída en lugar de detenerla abruptamente. Este dispositivo reduce la fuerza de impacto ampliando la distancia de desaceleración, permitiendo que la fuerza que recibe el usuario se reduzca a menos de 6kN.\n Los ojos en los extremos están protegidos por una cubierta resistente a la abrasión. Esto evita que la cinta se dañe por el contacto metálico del conector.El absorbedor de caída está protegido por una cápsula termo contraíble transparente para una mejor inspección y revisión por parte del usuario.",
		category: Categories["equipamiento-de-altura"],
	},
	"amortiguador-eqs-tipo-y-elásticada-180mt-escala": {
		slug: "amortiguador-eqs-tipo-y-elásticada-180mt-escala",
		name: "Amortiguador EQS Tipo Y Elásticada 1.80mt - Escala",
		image: "Amortiguador EQS Tipo Y Elásticada 1.80mt – Escala.png",
		description:
			"El absorbedor de impacto EQS forma parte de un sistema personal de detención de caídas, es un equipo diseñado para mitigar las fuerzas de impacto que experimenta una persona en caso de una caída desde altura. Esta absorción de energía ayuda a prevenir lesiones al desacelerar gradualmente la caída en lugar de detenerla abruptamente. Este dispositivo reduce la fuerza de impacto ampliando la distancia de desaceleración, permitiendo que la fuerza que recibe el usuario se reduzca a menos de 6kN.\n Los ojos en los extremos están protegidos por una cubierta resistente a la abrasión. Esto evita que la cinta se dañe por el contacto metálico del conector.El absorbedor de caída está protegido por una cápsula termo contraíble transparente para una mejor inspección y revisión por parte del usuario.",
		category: Categories["equipamiento-de-altura"],
	},
	"arnés-eqs-basic-4d-respaldo-lumbar": {
		slug: "arnés-eqs-basic-4d-respaldo-lumbar",
		name: "Arnés EQS Basic 4D Respaldo Lumbar",
		image: "Arnés EQS Basic 4D  Respaldo Lumbar.png",
		description:
			"Arnés de seguridad tipo “X” de cuerpo completo, confeccionado en cinta de poliéster de alta tenacidad, posee una argolla dorsal en “D” para la detención y restricción de caídas, una argolla frontal para ascenso y descenso por escaleras que permite una conexión de no más de 22.cm (9 pulgadas) y dos argollas laterales para posicionamiento de trabajo.\n Cuenta con un cinturón con hebilla autocalzante de acero, con un soporte lumbar acolchado para mejor apoyo y mayor comodidad al usuario. Elemento que forma parte de un sistema personal de detención de caídas, confeccionado de acuerdo a los más altos Estándares de calidad.\n Diseño ergonómico que permite al usuario utilizar este equipo de bajo peso durante toda su jornada de trabajo.Su utilización de forma correcta y debidamente bien ajustado, otorga un altísimo nivel de seguridad y conﬁanza para el usuario, en el evento de sufrir una caída de altura.",
		category: Categories["equipamiento-de-altura"],
	},
	"arnés-fersaf-dieléctrico-4d-std-1-respaldo-lumbar": {
		slug: "arnés-fersaf-dieléctrico-4d-std-1-respaldo-lumbar",
		name: "Arnés Fersaf Dieléctrico 4D-STD 1 Respaldo Lumbar",
		image: "Arnés Fersaf Dieléctrico 4D-STD 1   Respaldo Lumbar.png",
		description:
			"El Arnés FERSF INTEGRAL forma parte de un sistema personal de detención de caídas. Permite unir y sujetar el cuerpo a un punto de anclaje, mediante el uso de una línea de vida. Confeccionado de acuerdo con los más altos estándares de calidad y bajo normativas internacionales ANSI y requerimientos de trabajo OSHA. Diseño ergonómico que permite al usuario utilizar este equipo de bajo peso durante toda su jornada de trabajo, sin incomodidades y debidamente ajustado. Posee un sistema de colocación y ajuste sencillo, y ajustable. Su utilización de forma correcta otorga un altísimo nivel de seguridad y confianza para el usuario, en el evento de sufrir una caída de altura.",
		category: Categories["equipamiento-de-altura"],
	},
	"auto-rescatador-caemp-plus": {
		slug: "auto-rescatador-caemp-plus",
		name: "Auto Rescatador CAEMP PLUS",
		image: "Auto Rescatador  CAEMP PLUS.png",
		description:
			"El sistema de Auto Rescate en Plataforma utilizado en IPAF y ENEL es un sistema que permite la rápida liberación del colaborador desde la altura en que este trabajando, con simples pasos se genera el descenso controlado a través de cuerda.\n \n El equipo contiene:\n - Cinta de anclaje certificada\n - Cuerda de 11 mm de 20 metros (opcional puede contener mas metro o menos según requerimiento)\n - Descendedor con y sin sistema antipánico (solicitud del cliente)\n - Incluye bolso para su cuidado y fácil traslado.",
		category: Categories["otras-soluciones"],
	},
	"calzado-quebec-femme-mujer": {
		slug: "calzado-quebec-femme-mujer",
		name: "Calzado Quebec Femme (MUJER)",
		image: "Calzado Quebec  Femme (MUJER).png",
		description:
			"Calzado Femme es Dieléctrico reconocida línea de calzados de seguridad fabricado en cuero nobuck color verde. Calzado cementado con entresuela de EVA que brinda mayor comodidad. Planta de goma resistente a los hidrocarburos y sus derivados. Producto que proporciona comodidad, confort y estilo durante toda la jornada laboral",
		category: Categories["calzado-de-seguridad"],
	},
	"calzado-quebec-270": {
		slug: "calzado-quebec-270",
		name: "Calzado Quebec 270",
		image: "Calzado Quebec 270.png",
		description:
			"Calzado de seguridad fabricado en cuero estampado con proceso de inyección directa. Entresuela de poliuretano de baja densidad y buen aislamiento térmico. Planta de poliuretano de alta densidad, resistente a los hidrocarburos y aislante eléctrico. Puntera de seguridad de acero ultraliviano. Plantilla de armar: Celulosa aglomerada 2,5 mm. Plantilla antiperforante de acero. Cambrellón: Acero 1,2 mm. de espesor, 2 nervios. Contrafuerte: Termoformado de 1,5mm. de espesor. Fuelle extendido para mayor protección. Forro:Cuero.",
		category: Categories["calzado-de-seguridad"],
	},
	"calzado-quebec-500-antiperforante": {
		slug: "calzado-quebec-500-antiperforante",
		name: "Calzado Quebec 500 Antiperforante",
		image: "Calzado Quebec 500 Antiperforante.png",
		description:
			"Calzado de seguridad fabricado en cuero Full Grain café con proceso de inyección directa al corte. Entresuela de poliuretano de baja densidad y buen aislante térmico. Planta de poliuretano de alta densidad, aislante eléctrico y resistente a los hidrocarburos. Puntera de seguridad de acero ultraliviano. Plantilla de armar: Celulosa aglomerada 2,5mm. Cambrellón: Acero 1,2mm de espesor, 2 nervios. Contrafuerte: Termoformado de 1,5mm de espesor. Forro: Descarne. Plantilla Ortholite. Plantilla antiperforante tipo kevlar Aislante térmico Thinsulate",
		category: Categories["calzado-de-seguridad"],
	},
	"calzado-quebec-670-antiperforante": {
		slug: "calzado-quebec-670-antiperforante",
		name: "Calzado Quebec 670 Antiperforante",
		image: "Calzado Quebec 670 Antiperforante.png",
		description:
			"Calzado de seguridad fabricado en cuero Nobuck verde con proceso de inyección directa al corte. Planta de poliuretano de alta densidad resistente a los hidrocarburos. Puntera de seguridad de acero ultraliviano. Plantilla de armar: Celulosa aglomerada 2,5mm. Cambrellón: Acero 1,2mm de espesor, 2 nervios. Contrafuerte: Termoformado de 1,5mm de espesor. Forro: Descarne. Plantilla Ortholite. Plantilla antiperforante tipo kevlar Aislante térmico Thinsulate",
		category: Categories["calzado-de-seguridad"],
	},
	"calzado-quebec-apollo": {
		slug: "calzado-quebec-apollo",
		name: "Calzado Quebec Apollo",
		image: "Calzado Quebec Apollo.png",
		description:
			"El modelo Apollo ha sido diseñado para enfrentar las tareas desafiantes del trabajo en terreno. Equipado con una plantilla antiperforante y una puntera de seguridad, ambas de acero, este calzado garantiza una protección superior. Además, está certificado con la norma chilena (NCH), asegurando un alto estándar de calidad.",
		category: Categories["calzado-de-seguridad"],
	},
	"calzado-quebec-pro-san-lorenzo-dark": {
		slug: "calzado-quebec-pro-san-lorenzo-dark",
		name: "Calzado Quebec Pro San Lorenzo Dark",
		image: "Calzado Quebec Pro San Lorenzo Dark.png",
		description:
			"El modelo Apollo ha sido diseñado para enfrentar las tareas desafiantes del trabajo en terreno. Equipado con una plantilla antiperforante y una puntera de seguridad, ambas de acero, este calzado garantiza una protección superior. Además, está certificado con la norma chilena (NCH), asegurando un alto estándar de calidad.",
		category: Categories["calzado-de-seguridad"],
	},
	"casco-yako-con-visera": {
		slug: "casco-yako-con-visera",
		name: "Casco Yako con visera",
		image: "Casco Yako  con visera.png",
		description:
			"Casco diseñado para actividades de rescate, deportivas, trabajo en alturas y espacios confinados además entrega alta comodidad y una protección insuperable. El casco posee cuatro ganchos de posicionamiento para el montaje de una lámpara con cinta elástica. Ajuste tipo roller. Arnés de cuatro puntas. Barbiquejo de 3 puntas con enganche al casco y mentonera siliconada. Slots laterales de tamaño universal para complementar con accesorios y protección auditiva.Visor transparente especialmente diseñado para los cascos YAKO Steelpro. La visera ofrece una excelente protección para los ojos frente a salpicaduras. De fácil montaje gracias al sistema de fijación en los laterales, destinados para una conexión fija y segura",
		category: Categories["equipamiento-de-altura"],
	},
	"casco-yako": {
		slug: "casco-yako",
		name: "Casco Yako",
		image: "Casco Yako.png",
		description:
			"Casco diseñado para actividades de rescate, deportivas, trabajo en alturas y espacios confinados además entrega alta comodidad y una protección insuperable. El casco posee cuatro ganchos de posicionamiento para el montaje de una lámpara con cinta elástica. Ajuste tipo roller. Arnés de cuatro puntas. Barbiquejo de 3 puntas con enganche al casco y mentonera siliconada. Slots laterales de tamaño universal para complementar con accesorios y protección auditiva.Visor transparente especialmente diseñado para los cascos YAKO Steelpro. La visera ofrece una excelente protección para los ojos frente a salpicaduras. De fácil montaje gracias al sistema de fijación en los laterales, destinados para una conexión fija y segura",
		category: Categories["equipamiento-de-altura"],
	},
	"chaleco-geólogo-alaska-xpert-amarillo": {
		slug: "chaleco-geólogo-alaska-xpert-amarillo",
		name: "Chaleco Geólogo Alaska Xpert Amarillo",
		image: "Chaleco Geólogo Alaska  Xpert Amarillo.png",
		description:
			"El Chaleco Geólogo Xpert no solo ofrece funcionalidad, sino también comodidad gracias a su diseño ligero y reflectivo de 360°. Incorpora dos bolsillos frontales tipo cargo y un cierre en el pecho que simplifica las tareas en el terreno. Presenta cinta reflectiva de 2’’ en la parte frontal y, a su vez, cinta reflectiva tipo cruz en la espalda. Además, su característica transpirable mejora la respirabilidad gracias a la malla acolchada integrada. Con una banda ajustable en la parte inferior, proporciona un calce personalizado para adaptarse a las necesidades individuales.",
		category: Categories["otras-soluciones"],
	},
	"desfibrilador-externo-automatico-dea-aed-7000-certificado-isp-chile": {
		slug: "desfibrilador-externo-automatico-dea-aed-7000-certificado-isp-chile",
		name: "Desfibrilador Externo Automático DEA AED-7000 Certificado ISP Chile",
		image: "Desfibrilador Externo Automático DEA AED-7000 Certificado ISP Chile.png",
		description:
			"El Desfibrilador externo automático AED-7000, es un dispositivo de desfibrilación sumamente seguro, portable y fácil de utilizar, se puede aplicar a personas de todas las edades y en cualquier lugar, para dar los primeros auxilios para el síntoma de la muerte súbita. Combinado con técnica analítica avanzada de ECG, el desfibrilador puede analizar ECG del paciente, hacer un juicio para la condición cardiaca del paciente e indicar si la desfibrilación es necesaria y la fuerza de la desfibrilación, que no sólo realza el índice de éxito de desfibrilación, sino también reduce daño de la desfibrilación al corazón al grado extremo. El desfibrilador es fácil de operar. El desfibrilador dirigirá al operador para realizar el tratamiento de la desfibrilación vía aviso de la voz gradualmente y totalmente en Español, presenta alarmas de seguridad de ser necesario, permite proteger al operador con control remoto a distancia, siendo muy aplicable al tratamiento de emergencia para el paciente de paro cardiaco repentino en lugares públicos.",
		category: Categories["otras-soluciones"],
	},
	"guante-antivibración-steelpro-poron": {
		slug: "guante-antivibración-steelpro-poron",
		name: "Guante Antivibración Steelpro Poron",
		image: "Guante Antivibración Steelpro Poron.png",
		description:
			"Guante fabricado en cuero sintético y spandex, palma con porón, puño ajustable con velcro. Es la solución para amortiguar el impacto que se produce al usar maquinarias con movimientos oscilantes continuos.",
		category: Categories["guantes-de-protección"],
	},
	"guante-executive-impact-force": {
		slug: "guante-executive-impact-force",
		name: "Guante Executive Impact Force",
		image: "Guante Executive Impact Force.png",
		description:
			"Guante Fabricado en cuero sintético, palma antivibración, dorso en spandex, con protectores de nudillos en TPR diseñados para absorber golpes. Este Guante tiene una excelente resistencia a la abrasión con cierre de velcro, que otorga un buen ajuste a la mano Usos: • Manejo de maquinaria pesada • Manipulación general de cargas • Manejo de herramientas • Trabajos donde exista peligro de golpes en dorso y nudillos. • Trabajos de inspección, viales y actividades deportivas. Instrucciones y Mantenimiento. • Se recomienda Ventilar el guante después de usarlo. • Verificar visualmente que el guante no tenga defectos o problemas. • No sumergir la mano, donde no exista protección de baño aplicado.",
		category: Categories["guantes-de-protección"],
	},
	"guante-multiflex-poliéster-nitrilo-foam": {
		slug: "guante-multiflex-poliéster-nitrilo-foam",
		name: "Guante Multiflex Poliéster Nitrilo FOAM",
		image: "Guante Multiflex Poliéster Nitrilo FOAM.png",
		description:
			"Guante de alta dexteridad para trabajos de alta precisión. Guante hecho de poliéster 13 Gauges con palma de espuma con nitrilo. Proporciona un buen aislamiento y respirabilidad a la mano, buen agarre en superficies mojadas. Buena resistencia a hidrocarburos.",
		category: Categories["guantes-de-protección"],
	},
	"guante-raven-nitrilo-texturizado-negro": {
		slug: "guante-raven-nitrilo-texturizado-negro",
		name: "GUANTE RAVEN NITRILO TEXTURIZADO NEGRO",
		image: "GUANTE RAVEN NITRILO TEXTURIZADO NEGRO.png",
		description:
			"Guante de nitrilo negro texturizado de 8 gramos, diseñado para brindar alta resistencia, durabilidad y excelente agarre. Su color negro oculta manchas de grasa y suciedad. lo que lo hace ideal para aplicaciones industriales y automotrices. Además. cuenta con tecnología touch. permitiendo el uso de pantallas y dispositivos móviles sin necesidad de retirario. Su empaque individual es una caja de 100 unidades (50 pares).",
		category: Categories["guantes-de-protección"],
	},
	"guante-steelpro-antivibración": {
		slug: "guante-steelpro-antivibración",
		name: "Guante Steelpro Antivibración",
		image: "Guante Steelpro Antivibración.png",
		description:
			'Palma de cuero Protech® (material sintético con alta resistencia a la abrasión y performance en el lavado).\nIdeal para absorver la vibración de maquinaria pesada (absorción de impacto por neopreno).\nDedos con sistema "precurder" otorgando un gran agarre y confort.\nAjuste con PVC y velcro, logrando un excelente cierre en el puño.\nLiviano, suave y con prolongada vida útil.\n APLICACIONES Manejo de maquinaria pesada, mantenimientos mecánicos, trabajos de construcción, etc.',
		category: Categories["guantes-de-protección"],
	},
	"guante-supervisor-natural-sin-forro": {
		slug: "guante-supervisor-natural-sin-forro",
		name: "Guante Supervisor Natural Sin Forro",
		image: "Guante Supervisor Natural Sin Forro.png",
		description:
			"Fabricado completamente en cuero natural tipo cabritilla curtido especial. Puño elasticado. Modelo supervisor. Recomendado para uso en labores con bajo nivel de riesgo de abrasión y cortes. Altamente comodo para la manipulación en general.",
		category: Categories["guantes-de-protección"],
	},
	"linea-vida-p-halt-portatil-20mt": {
		slug: "linea-vida-p-halt-portatil-20mt",
		name: "Linea Vida (P) Halt Portatil 20MT",
		image: "Linea Vida (P) Halt Portatil 20MT.png",
		description:
			"Línea de vida portátil para crear un sistema de anclaje horizontal provisorio. Está fabricada con cinta de largo 20 m y un tensor de trinquete, el que permite tensarla fácilmente, entre dos estructuras. Ambos extremos están provistos de mosquetones de acero con bloqueo automático. Cuenta con un bolso que permite transportarla fácilmente. Probado y certificado para uso simultáneo de dos usuarios. Una vez colocada la línea de vida, el usuario puede fijar fácilmente el elemento de amarre de su arnés a la línea de vida mediante un mosquetón. Esto permite el movimiento a lo largo mientras mantiene al usuario seguro y protegido en todo momento. Certificada bajo la norma EN 795:2012 TS 16415:2013 Tipo B & C, IS 3521(Parte 8):2021.",
		category: Categories["otras-soluciones"],
	},
}
