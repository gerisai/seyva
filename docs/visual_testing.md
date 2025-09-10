# Testing Visual
[Storybook](https://storybook.js.org/) se utilizó como herramienta principal para probar los componentes de manera individual. 
Cada archivo de prueba se encuentra en `src/stories`. Todos los archivos deben terminar en `.stories.js` para que storybook los reconozca como válidos.

Un archivo de testing básico tiene el siguiente aspecto

```js
import { Button } from './Button';

export default {
  component: Button,
};

export const Primary = {
  args: {
    label: 'Button',
    primary: true,
  },
};
```