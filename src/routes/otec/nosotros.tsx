import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/otec/nosotros')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nosotros"!</div>
}
