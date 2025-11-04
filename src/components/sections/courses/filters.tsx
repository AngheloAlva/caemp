import { SearchIcon, FilterIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
} from "@/components/ui/select"

interface FiltersProps {
	totalCourses: number
}

export default function Filters({ totalCourses }: FiltersProps): React.ReactElement {
	return (
		<section className="bg-background w-full border-b py-6">
			<div className="container mx-auto">
				<div className="animate-slide-up flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
					<div className="max-w-md flex-1">
						<div className="relative">
							<SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
							<Input
								placeholder="Buscar cursos..."
								className="hover:border-primary/50 pl-10 transition-colors"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-3 sm:flex-row">
						<Select defaultValue="all">
							<SelectTrigger className="hover:border-primary/50 w-full transition-colors sm:w-[220px]">
								<FilterIcon className="h-4 w-4" />
								<SelectValue placeholder="Categoría" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todas las categorías</SelectItem>
								<SelectItem value="prevencion">Prevención de Riesgos</SelectItem>
								<SelectItem value="altura">Trabajo en Altura</SelectItem>
								<SelectItem value="salud">Salud y Emergencias</SelectItem>
								<SelectItem value="emergencias">Gestión de Emergencias</SelectItem>
								<SelectItem value="operaciones">Operaciones</SelectItem>
							</SelectContent>
						</Select>

						<Select defaultValue="all">
							<SelectTrigger className="hover:border-primary/50 w-full transition-colors sm:w-[180px]">
								<SelectValue placeholder="Nivel" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todos los niveles</SelectItem>
								<SelectItem value="basico">Básico</SelectItem>
								<SelectItem value="intermedio">Intermedio</SelectItem>
								<SelectItem value="avanzado">Avanzado</SelectItem>
							</SelectContent>
						</Select>

						<Select defaultValue="all">
							<SelectTrigger className="hover:border-primary/50 w-full transition-colors sm:w-[180px]">
								<SelectValue placeholder="Modalidad" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todas las modalidades</SelectItem>
								<SelectItem value="presencial">Presencial</SelectItem>
								<SelectItem value="hibrido">Híbrido</SelectItem>
								<SelectItem value="online">Online</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="animate-slide-up animate-delay-100 mt-4 flex items-center justify-between">
					<p className="text-muted-foreground text-sm">Mostrando {totalCourses} cursos</p>
					<Select defaultValue="popular">
						<SelectTrigger className="hover:border-primary/50 w-[180px] transition-colors">
							<SelectValue placeholder="Ordenar por" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="popular">Más populares</SelectItem>
							<SelectItem value="rating">Mejor valorados</SelectItem>
							<SelectItem value="recent">Más recientes</SelectItem>
							<SelectItem value="duration">Duración</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</section>
	)
}
