# Configuración Multitenant - CAEMP

CAEMP opera en una arquitectura multitenant con 4 dominios distintos pero todas las APIs centralizadas en el dominio principal.

## Arquitectura de Dominios

```
┌─────────────────────────────────────────────────────────────┐
│                     Dominios de CAEMP                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🏠 grupocaemp.cl (Principal)                               │
│     └── Hosts: API Routes (/api/*)                         │
│                                                              │
│  🔵 otec.grupocaemp.cl                                      │
│     └── Consume: API desde grupocaemp.cl                   │
│                                                              │
│  🟣 crecimiento.grupocaemp.cl                               │
│     └── Consume: API desde grupocaemp.cl                   │
│                                                              │
│  🟢 plus.grupocaemp.cl                                      │
│     └── Consume: API desde grupocaemp.cl                   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Problema y Solución

### El Problema

Cuando un usuario está en `otec.grupocaemp.cl` y hace una llamada API a `/api/contact`, por defecto intentaría hacer la request a `otec.grupocaemp.cl/api/contact`, pero las rutas API solo existen en `grupocaemp.cl`.

### La Solución

1. **Variable de Entorno `VITE_PUBLIC_BASE_URL`**
   - Apunta al dominio principal donde están las APIs
   - Se usa en todos los fetch calls

2. **Helper de API (`src/lib/api.ts`)**
   - Construye URLs completas automáticamente
   - Maneja errores consistentemente
   - Incluye credentials para cross-origin

3. **CORS Configurado (`src/lib/cors.ts`)**
   - Permite requests desde subdominios
   - Maneja preflight OPTIONS
   - Headers de seguridad apropiados

## Archivos Importantes

### 1. `.env`

```env
# Development
VITE_PUBLIC_BASE_URL=http://localhost:3000

# Production (grupocaemp.cl)
VITE_PUBLIC_BASE_URL=https://grupocaemp.cl

# Production (subdominios apuntan al principal)
VITE_PUBLIC_BASE_URL=https://grupocaemp.cl
```

### 2. `src/lib/api.ts`

Helper para construir URLs y hacer requests:

```typescript
import { getApiUrl, postApi } from "@/lib/api"

// Construir URL manualmente
const url = getApiUrl("/api/contact")
// → Development: "http://localhost:3000/api/contact"
// → Production: "https://grupocaemp.cl/api/contact"

// O usar directamente postApi
await postApi("/api/contact", { ...data })
```

### 3. `src/lib/cors.ts`

Configuración de CORS para server routes:

```typescript
import { handleCorsPreFlight, addCorsHeaders } from "@/lib/cors"

// En server routes:
export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      // Handle preflight
      OPTIONS: async ({ request }) => {
        return handleCorsPreFlight(request)
      },

      // Add CORS to responses
      POST: async ({ request }) => {
        const response = Response.json({...})
        return addCorsHeaders(response, request)
      }
    }
  }
})
```

## Configuración por Entorno

### Development (localhost)

```env
VITE_PUBLIC_BASE_URL=http://localhost:3000
```

**Dominios permitidos en CORS:**

- `http://localhost:3000`
- `http://localhost:5173`
- `http://127.0.0.1:3000`
- `http://127.0.0.1:5173`

### Production

```env
# En TODOS los despliegues (grupocaemp.cl y subdominios)
VITE_PUBLIC_BASE_URL=https://grupocaemp.cl
```

**Dominios permitidos en CORS:**

- `https://grupocaemp.cl`
- `https://www.grupocaemp.cl`
- `https://otec.grupocaemp.cl`
- `https://crecimiento.grupocaemp.cl`
- `https://plus.grupocaemp.cl`

## Actualizar Dominios

Si agregas o cambias dominios, actualiza:

**`src/lib/cors.ts`:**

```typescript
const ALLOWED_ORIGINS =
  process.env.NODE_ENV === "production"
    ? [
        "https://grupocaemp.cl",
        "https://www.grupocaemp.cl",
        "https://otec.grupocaemp.cl",
        "https://crecimiento.grupocaemp.cl",
        "https://plus.grupocaemp.cl",
        // Agregar nuevos dominios aquí
      ]
    : [
        /* development origins */
      ]
```

## Flow de Request Cross-Origin

```
┌────────────────────────────────────────────────────────────────┐
│ Usuario visita: otec.grupocaemp.cl                            │
└────────────────────────────────────────────────────────────────┘
                          │
                          │ Llena formulario y envía
                          ▼
┌────────────────────────────────────────────────────────────────┐
│ Frontend llama: postApi("/api/contact", data)                 │
│ → Construye URL: "https://grupocaemp.cl/api/contact"         │
└────────────────────────────────────────────────────────────────┘
                          │
                          │ Preflight OPTIONS request
                          ▼
┌────────────────────────────────────────────────────────────────┐
│ Server en grupocaemp.cl                                        │
│ → Verifica origen: "otec.grupocaemp.cl" está permitido? ✓    │
│ → Responde con CORS headers                                   │
└────────────────────────────────────────────────────────────────┘
                          │
                          │ POST request real
                          ▼
┌────────────────────────────────────────────────────────────────┐
│ Server procesa request                                         │
│ → Valida datos                                                │
│ → Envía email                                                 │
│ → Responde con CORS headers                                  │
└────────────────────────────────────────────────────────────────┘
                          │
                          │ Response
                          ▼
┌────────────────────────────────────────────────────────────────┐
│ Frontend en otec.grupocaemp.cl                                │
│ → Recibe respuesta                                            │
│ → Muestra mensaje de éxito                                   │
└────────────────────────────────────────────────────────────────┘
```

## Headers CORS Enviados

En cada response, el servidor envía:

```http
Access-Control-Allow-Origin: https://otec.grupocaemp.cl
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400
```

## Testing Cross-Origin

### 1. Development Local

```bash
# Terminal 1: Server principal
npm run dev

# Terminal 2: Simular subdominio (opcional)
# Edita /etc/hosts:
# 127.0.0.1 otec.local.dev
```

### 2. Production Testing

Probar desde cada dominio:

```bash
# Desde grupocaemp.cl
curl -X POST https://grupocaemp.cl/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@test.com","phone":"+56912345678","message":"Test message","businessLine":"otec"}'

# Desde subdominio (simular con Origin header)
curl -X POST https://grupocaemp.cl/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://otec.grupocaemp.cl" \
  -d '{"fullName":"Test","email":"test@test.com","phone":"+56912345678","message":"Test message","businessLine":"otec"}'
```

Verifica que la response incluya los headers CORS.

## Troubleshooting

### Error: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Causa:** El dominio de origen no está en la lista de ALLOWED_ORIGINS.

**Solución:** Agrega el dominio en `src/lib/cors.ts`.

### Error: "Request has been blocked by CORS policy"

**Causa:** Falta el handler OPTIONS en la ruta.

**Solución:** Verifica que el server route tenga:

```typescript
handlers: {
  OPTIONS: async ({ request }) => handleCorsPreFlight(request),
  POST: async ({ request }) => { /* ... */ }
}
```

### Requests funcionan en localhost pero no en producción

**Causa:** Variable `VITE_PUBLIC_BASE_URL` incorrecta.

**Solución:** Verifica que en producción apunte a `https://grupocaemp.cl`.

### Emails no se envían desde subdominios

**Causa:** CORS bloqueando la request.

**Solución:**

1. Verifica que `addCorsHeaders()` se llame en TODAS las responses
2. Revisa que el dominio esté en ALLOWED_ORIGINS
3. Chequea Network tab en DevTools para ver headers

## Seguridad

### ✅ Implementado

- Lista explícita de orígenes permitidos
- Validación de origin header
- Credentials incluidos solo para dominios permitidos
- Métodos HTTP limitados (POST, OPTIONS)
- Headers permitidos limitados

### ⚠️ Consideraciones

- **No usar `Access-Control-Allow-Origin: *`** en producción
- **Mantener ALLOWED_ORIGINS actualizado** al agregar dominios
- **Validar datos en backend** - CORS no es seguridad, es control de acceso
- **Rate limiting** - Considerar implementar para prevenir abuse

## Checklist de Deployment

Antes de desplegar a producción:

- [ ] Variable `VITE_PUBLIC_BASE_URL` configurada correctamente
- [ ] Todos los dominios en `ALLOWED_ORIGINS` (src/lib/cors.ts)
- [ ] Todos los server routes tienen handler OPTIONS
- [ ] Todas las responses usan `addCorsHeaders()`
- [ ] Testing desde cada subdominio
- [ ] DNS configurado para subdominios
- [ ] SSL/TLS activo en todos los dominios
- [ ] Monitoring de errores CORS en producción

## Más Información

- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Tanstack Start: Server Routes](https://tanstack.com/router/latest/docs/framework/react/start/server-routes)
- Documentación interna: `EMAILS_README.md`
