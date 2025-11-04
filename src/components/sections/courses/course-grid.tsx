import { ClockIcon, StarIcon, UsersIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseGridProps {
	courses: {
		id: string
		title: string
		category: string
		description: string
		duration: string
		students: number
		rating: number
		level: string
		modality: string
		image: string
		price: string
	}[]
}

export default function CourseGrid({ courses }: CourseGridProps): React.ReactElement {
	return (
		<section className="py-12">
			<div className="container">
				<StaggerContainer staggerDelay={0.08}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{courses.map((course) => (
							<StaggerItem key={course.id}>
								<HoverScale scale={1.02}>
									<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
										<Link to={`/cursos/$courseSlug`} params={{ courseSlug: course.id }}>
											<div className="bg-muted relative aspect-video overflow-hidden">
												<Image
													layout="fullWidth"
													alt={course.title}
													src={course.image || "/placeholder.svg"}
													className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="absolute top-3 right-3">
													<Badge variant="secondary" className="bg-background/90 backdrop-blur">
														{course.modality}
													</Badge>
												</div>
											</div>
											<CardContent className="space-y-3 p-5">
												<div className="space-y-2">
													<Badge variant="outline" className="text-xs">
														{course.category}
													</Badge>
													<h3 className="group-hover:text-primary line-clamp-2 text-lg leading-tight font-semibold transition-colors">
														{course.title}
													</h3>
												</div>

												<p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
													{course.description}
												</p>

												<div className="text-muted-foreground flex items-center gap-4 pt-2 text-sm">
													<div className="flex items-center gap-1">
														<ClockIcon className="h-4 w-4" />
														<span>{course.duration}</span>
													</div>
													<div className="flex items-center gap-1">
														<UsersIcon className="h-4 w-4" />
														<span>{course.students}</span>
													</div>
												</div>

												<div className="flex items-center justify-between border-t pt-2">
													<div className="flex items-center gap-1">
														<StarIcon className="fill-primary text-primary h-4 w-4" />
														<span className="font-semibold">{course.rating}</span>
														<span className="text-muted-foreground text-sm">
															({course.students})
														</span>
													</div>
													<Badge variant="secondary">{course.level}</Badge>
												</div>

												<Button className="mt-2 w-full" asChild>
													<span>Ver Detalles</span>
												</Button>
											</CardContent>
										</Link>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				<FadeIn delay={0.3}>
					<div className="mt-12 flex justify-center">
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm" disabled className="hover-lift bg-transparent">
								Anterior
							</Button>
							<Button variant="default" size="sm" className="hover-lift">
								1
							</Button>
							<Button variant="outline" size="sm" className="hover-lift bg-transparent">
								2
							</Button>
							<Button variant="outline" size="sm" className="hover-lift bg-transparent">
								3
							</Button>
							<Button variant="outline" size="sm" className="hover-lift bg-transparent">
								Siguiente
							</Button>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	)
}
