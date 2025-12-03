import { Link } from "@tanstack/react-router"
import { Image } from "@unpic/react"

import { OtecCourse } from "@/data/otec/courses"

import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { HoverScale } from "@/components/animations/hover-scale"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CourseGridProps {
	courses: OtecCourse[]
}

export default function CourseGrid({ courses }: CourseGridProps): React.ReactElement {
	return (
		<section className="py-12">
			<div className="container">
				<StaggerContainer staggerDelay={0.08}>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{courses.map((course) => (
							<StaggerItem key={course.id}>
								<HoverScale scale={1.02} className="h-full">
									<Card className="group h-full gap-0 overflow-hidden py-0 transition-all">
										<Link
											to="/otec/cursos/$courseSlug"
											params={{ courseSlug: course.slug }}
											className="flex h-full flex-col justify-between"
										>
											<div>
												<div className="bg-muted relative aspect-video overflow-hidden">
													<Image
														layout="fullWidth"
														alt={course.title}
														src={`/images/otec/courses/${course.images[0] || "placeholder.jpg"}`}
														className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
													/>
												</div>

												<div className="flex flex-col gap-3 p-5">
													<div className="space-y-2">
														<h3 className="group-hover:text-primary line-clamp-2 text-lg leading-tight font-semibold transition-colors">
															{course.title}
														</h3>
													</div>

													<ul className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
														{course.competencies.map((competency, index) => (
															<li key={index}>{competency}</li>
														))}
													</ul>
												</div>
											</div>

											<div className="px-5 pb-5">
												<Button className="w-full" asChild>
													<span>Ver Detalles</span>
												</Button>
											</div>
										</Link>
									</Card>
								</HoverScale>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>

				{/* <FadeIn delay={0.3}>
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
				</FadeIn> */}
			</div>
		</section>
	)
}
