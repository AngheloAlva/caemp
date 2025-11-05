import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/otec/contacto')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contacto"!</div>
}
