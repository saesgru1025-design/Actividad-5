# ServiPlus — Rediseño de Experiencia de Usuario (Actividad 5)

Este repositorio contiene la solución completa de la **Fase 2: Diseño Práctico** para el rediseño del portal de servicios digitales de la empresa **ServiPlus** (Pagos digitales, Gestión de citas y Mesa de soporte).

La solución implementa **3 prototipos diferentes de la MISMA interfaz**, abordando tres paradigmas clave de la interacción humano-computador (HCI) y el diseño de experiencia de usuario (UX/UI):

---

## 🚀 Prototipos Desarrollados

### 1. Prototipo 1: Minimalismo / Flat Design
* **Enfoque**: Bidimensional puro (2D), sin sombras tridimensionales artificiales ni texturas ornamentales.
* **Aspectos clave**:
  * Énfasis en la tipografía sans-serif neutral (*Inter*) y el contraste visual directo.
  * Uso prioritario del espacio negativo (*whitespace*) para disminuir el tiempo de decisión del usuario (Ley de Hick-Hyman).
  * Paleta sólida y sobria: blanco puro, pizarra `#0f172a` y azul cobalto `#2563eb`.

### 2. Prototipo 2: Material Design / Neumorfismo
* **Enfoque**: Metáforas físicas del mundo real con superficies táctiles y elevaciones.
* **Variantes interactivas incluidas**:
  * **Material Design 3 (Google M3)**: Capas físicas con elevación *dp*, contenedores tonales, chips de filtrado y Botón de Acción Flotante (*FAB*).
  * **Neumorfismo (Soft UI)**: Superficie táctil extruida y rehundida (*inset/outset*) con sombras duales sobre un fondo suave `#e8ecf2`.

### 3. Prototipo 3: Diseño Centrado en el Usuario + Inclusivo & Emocional
* **Enfoque**: Accesibilidad universal (**WCAG 2.1 AAA**) y conexión empática humana (**Don Norman**).
* **Aspectos clave**:
  * **Panel de accesibilidad interactivo**: escalador tipográfico (A, A+, A++), modo Alto Contraste Oscuro WCAG AAA, fuente adaptada para dislexia (*Lexend*) y lector de audio por síntesis de voz en vivo.
  * **Diseño emocional**: bienvenida cálida, asistente humana virtual *"Sofía"*, microcopia sin tecnicismos y feedback positivo con confeti suave al liquidar obligaciones.

---

## 🛠️ Módulos de ServiPlus Implementados

1. **Módulo de Pagos Digitales**:
   * Liquidación inmediata de facturas de servicios públicos y suscripciones (energía, acueducto, internet, gas).
   * Pasarela simulada con selección de medio de pago (PSE, tarjeta crédito/débito y billeteras digitales).
   * Actualización instantánea del saldo total y estado de comprobantes.

2. **Módulo de Citas**:
   * Reserva de citas presenciales (por sedes) y virtuales (enlace de videollamada).
   * Asignación de profesional, fecha y hora con opción de reprogramación o cancelación.

3. **Módulo de Soporte**:
   * Radicación de tickets con prioridad y categoría.
   * Acordeón de preguntas frecuentes (FAQ) explicadas de forma clara y accesible.

---

## 💻 Instalación y Ejecución Local

### Prerrequisitos
* Node.js (v18 o superior)
* npm

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/saesgru1025-design/Actividad-5.git

# 2. Entrar a la carpeta del proyecto
cd Actividad-5

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Compilar para producción
npm run build
```

Abre en tu navegador: [http://localhost:5173/](http://localhost:5173/) para explorar los 3 prototipos y la comparativa técnica.
