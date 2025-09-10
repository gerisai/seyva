# Styling
[Tailwind](https://tailwindcss.com/) se usa como herramienta principal para estilizar el sitio. Se usa de manera amplia en todo el código, tanto componentes como páginas. Tailwind usa clases precreadas que se aplican y estan disponibles globalmente.

Se encuentra listado entre los `devDependencies` del proyecto pues es necesario solo durante el desarrollo.
```json
  "devDependencies": {
    ...
    "tailwindcss": "^4",
  }
```

Adicionalmete el fichero `src/app/globals.css` importa la bibioteca y extiende la funcionalidad con algunas clases personalizadas.

Un ejemplo de como se aplican las cases se puede ver en el componente `DonationForm.jsx`

```html
<div className="rounded-4xl shadow-lg bg-gray xs:w-9/10 lg:w-1/2 md:w-3/4">
```