FILIUS — Web V22 redesign

Cambios implementados según el brief de rediseño:
- Eliminada la pantalla splash/intro: el sitio abre directamente en el Home.
- Eliminado por completo el mapa mundial y el selector por países.
- Selector de idioma directo en tres botones: ES / EN / PT, con cambio instantáneo y estado activo.
- Header simplificado a FILIUS / Aceites / Contacto, más acceso al pedido.
- Eliminada la franja superior de notificación.
- Hero de pantalla completa en desktop (100vh), sin pantalla inicial adicional.
- Eliminadas las secciones “Origen” y “Nuestra identidad”.
- Oils/Aceites rediseñado en cards modernas con imágenes más controladas.
- Selector “Por menor / Por mayor” con precios dinámicos:
  * Por menor: $6.000 por botella
  * Por mayor: $18.000 por pack/unidad mayorista
- Total del pedido calculado automáticamente.
- Envío directo del pedido a WhatsApp con variedad, cantidades, modalidad y total.
- CTA “Conviértete en mi distribuidor” / “Become a Distributor” con formulario + WhatsApp.
- Contacto renombrado a “Pedí información”, con campo de teléfono.
- Mapa de Google centrado en Maipú, Mendoza, Argentina.
- Eliminado el logo secundario del pie; se recuperó el logo de creador del layout original (creator-logo.png).
- No quedan referencias visibles a Olivícola Luján, aceitunas de mesa, tambores ni al mapa mundial.

Configuración de WhatsApp:
- Número comercial heredado de la versión original: 542615503895.
- Para cambiarlo, editar WHATSAPP_NUMBER en script.js.

Contenido / activos principales:
- assets/filius-arauco.jpeg
- assets/filius-europeas.jpeg
- assets/filius-logo-cropped.png
- assets/filius-logo-mark.png
- assets/creator-logo.png

La web es HTML + CSS + JavaScript vanilla y no necesita backend para el flujo de cotización a WhatsApp.
