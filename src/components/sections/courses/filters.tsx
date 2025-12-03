import { SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

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

					<div className="animate-slide-up animate-delay-100 flex items-center justify-between">
						<p className="text-muted-foreground text-sm">Mostrando {totalCourses} cursos</p>
					</div>
				</div>
			</div>
		</section>
	)
}
