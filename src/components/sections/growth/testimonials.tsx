"use client"

import { FadeIn } from "@/components/animations/fade-in"
import { InfiniteMovingCards } from "@/components/ui/infinity-moving-cards"

const testimonials = [
	{
		name: "Stephane Dauba",
		title: "Gerente Técnico",
		quote:
			"Súper interesante, superó lo que tenía previsto. Escuchar al equipo y ver cómo comunicarse fue revelador. Observé que algunos estaban más abiertos de lo habitual y vi la apertura de los equipos. Todo esto nos aporta, ya que facilita la interacción entre nosotros, algo que ocurre en contadas ocasiones. Lo que estamos aprendiendo hoy es transversal y lo utilizaremos para siempre. Definitivamente, lo voy a recomendar a amigos de otras empresas.",
	},
	{
		name: "Néstor Paz",
		title: "Planificador de compras",
		quote:
			"Excelente experiencia. Al ser una habilidad blanda, no solo sirve para el trabajo, sino también para interactuar con la familia y amigos.",
	},
	{
		name: "Liz Barahona",
		title: "Asistente de gerencia Administración y finanzas",
		quote:
			"Es importante la parte no verbal, ya que afecta mucho. Muchas veces te preguntan algo y, sin querer, pones una cara; creo que es fundamental reconocer este defecto, aprender a controlarlo y mejorar en ese aspecto.",
	},
	{
		name: "Jorge Vera",
		title: "Sub Gerente de sistemas",
		quote:
			"Creo que necesitábamos esta dinámica. Practicar estos juegos y sentirnos menos rígidos que en la oficina nos permitió soltarnos. Personalmente, vi a personas que en el día a día no se muestran como en esta ocasión, con mucha personalidad. Esto es muy importante porque nuestro trabajo se basa en la interacción con instrucciones que a veces son muy precisas y deben ser ejecutadas tal como se definen.",
	},
	{
		name: "Arturo Farías",
		title: "Asesor seguridad y salud ocupacional",
		quote:
			"Me pareció una experiencia muy buena, integradora y didáctica. Aprendí a responder a nuevos desafíos junto a compañeros de diferentes áreas. Con esta herramienta, podemos decir con certeza: ¡sí, se puede!",
	},
	{
		name: "Rodrigo Olguín",
		title: "Coordinador SSTO obras",
		quote:
			"Llegué con expectativas menores de las que se desarrollaron durante la actividad. Se generó la oportunidad de expresar mis sentimientos y dejar fluir mi verdadera esencia. Recomiendo este taller al 100%.",
	},
	{
		name: "Claudia López",
		title: "Gerencia de Mantenimiento",
		quote:
			"He hecho varios cursos de coaching y, en especial, este me parece muy dinámico. Se aprende mucho sobre cómo debes relacionarte y aporta positivamente a la comunicación en las áreas.",
	},
	{
		name: "Juan Espinoza",
		title: "Jefe área Proyectos e Ingeniería",
		quote:
			"Los coaches te enseñan herramientas importantes de comunicación que se traducen en buenos resultados. Aprovechad esto, sacadle provecho, seguid buscando cursos de este tipo, seguid interactuando y enseñando a los demás la importancia de comunicarnos bien y de manera efectiva. De esta forma, podremos entendernos y evitar malentendidos en nuestra comunicación.",
	},
	{
		name: "Carol Berríos",
		title: "Prevención de Riesgos",
		quote:
			"Todos salimos asombrados y felices de la actividad. Me quedo con la capacidad que tenemos todos para trabajar en equipo, a pesar de venir de áreas distintas.",
	},
]

export default function Testimonials() {
	return (
		<section className="w-full bg-white py-16 md:py-24">
			<div className="container mx-auto max-w-7xl px-4">
				<FadeIn>
					<div className="mb-12 text-center">
						<h2 className="text-primary-purple mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
							Testimonios
						</h2>
						<p className="mx-auto mb-2 max-w-2xl text-xl font-semibold text-gray-900">
							Experiencias que inspiran
						</p>
						<p className="mx-auto max-w-2xl text-lg text-gray-700">
							Descubre cómo nuestros programas han transformado vidas y carreras
						</p>
					</div>
				</FadeIn>

				<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
			</div>
		</section>
	)
}
