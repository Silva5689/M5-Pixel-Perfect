# Misión 5 - Pixel Perfect

## Descripción

Landing page de FocusDesk, un producto ficticio para organizar tareas y sesiones de estudio.

El objetivo de la práctica es utilizar Tailwind CSS v4 para desarrollar una página responsive, con un sistema de diseño personalizado y modo oscuro.

## Lenguajes y tecnologías utilizados

- HTML
- CSS
- JavaScript
- JSX
- React
- Vite
- Tailwind CSS v4

## Funcionalidades

- **Responsive:** adaptar la página a diferentes tamaños de pantalla mediante breakpoints.
- **Flexbox:** organizar los elementos de la barra de navegación.
- **Grid:** mostrar las tarjetas en una, dos o tres columnas dependiendo del tamaño de pantalla.
- **Sistema de diseño:** utilizar tokens personalizados mediante `@theme`.
- **Modo oscuro:** permitir cambiar entre el tema claro y oscuro mediante un botón.
- **Animación:** mostrar una animación de entrada utilizando `@keyframes`.
- **Componentes reutilizables:** utilizar un mismo componente para mostrar las diferentes tarjetas.

## Cómo ejecutar el proyecto

Instalar las dependencias con `npm install`.

Iniciar React con `npm run dev`.

La aplicación estará disponible en la dirección local que indique Vite.

## Uso de IA

He utilizado ChatGPT como herramienta de apoyo para entender mejor tailwind, y separar mejor las responsabilidades.

### Prompt 1

"Divido el app mejor? para las responsabilidades?"

### Resultado 1
La IA explicó las ventajas de dividir el componente principal en diferentes componentes. A partir de esta explicación, se organizaron las responsabilidades entre `App`, `Navbar`, `Hero`, `Ventajas`, `Tarjeta` y `Footer`.

## Autopsia

### Decisión 1: Utilizar un sistema de diseño personalizado

He utilizado `@theme` en el archivo `index.css` para definir colores, tipografía y espaciado propios.

Esto permite reutilizar los mismos valores en diferentes componentes y mantener un diseño coherente.

### Decisión 2: Utilizar Flexbox y Grid

He utilizado Flexbox para organizar los elementos de la barra de navegación y Grid para distribuir las tarjetas.

Mediante los breakpoints `md:` y `lg:` puedo modificar el número de columnas dependiendo del tamaño de pantalla.

### Decisión 3: Implementar el modo oscuro mediante una clase

He utilizado `@custom-variant` para activar el modo oscuro mediante la clase `dark`.

Al pulsar el botón, utilizo `classList.toggle()` para añadir o eliminar esta clase del elemento HTML. Las utilidades `dark:` permiten modificar los colores de la página sin necesidad de utilizar un estado de React.