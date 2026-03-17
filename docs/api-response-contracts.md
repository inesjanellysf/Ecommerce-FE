# API response contracts

Mocks iniciales para las funcionalidades activas o ya visibles en el frontend.

## Ubicacion

Los archivos JSON quedaron en `public/MockApi/`.

## Cobertura

- `public/MockApi/products/`
  Casos para listado, listado vacio, detalle y producto no encontrado.
- `public/MockApi/auth/`
  Casos para login, registro y recuperacion de contrasena, tanto exitosos como con error.
- `public/MockApi/cart/`
  Casos para carrito con items, carrito vacio, agregar producto, falta de stock y checkout.
- `public/MockApi/wishlist/`
  Casos para wishlist con items, vacia, agregado correcto y duplicado.
- `public/MockApi/layout/`
  Casos para navbar y secciones de home.

## Forma base sugerida

Usa esta estructura comun en backend o mocks:

```json
{
  "success": true,
  "message": "Operacion completada.",
  "data": {}
}
```

Para errores:

```json
{
  "success": false,
  "message": "Descripcion legible del error.",
  "error": {
    "code": "ERROR_CODE",
    "status": 400,
    "details": "Detalle tecnico opcional",
    "fields": {}
  }
}
```

## Nota de integracion

El frontend actual consume productos con campos como `id`, `title`, `imageUrl`, `category`, `rating`, `reviews`, `currentPrice`, `oldPrice` y, en carrito, `quantity`. Si luego conectas estos mocks a la UI actual, probablemente convendra adaptar `src/pages/Libros.jsx` para leer `response.data.items` en lugar de un arreglo plano.
