# Componentization

### React

Seguiremos el patrón atomic desing para los componentes de react

#### Atomic
Los componentes atomicos se utilizaran para objetos muy puntuales como pueden ser un botón, un label o un input, donde cada componente tendrá su hoja de estilos espejada en la carpeta `styles/` (para más información lea `styles.md`)

Estos no tendrán lógica más que la interna del componente para poder mostrarse

#### Molecules

Las Moleculas son conjuntos de atomos que tienen lógica basica de vista pero no pueden utilizar redux o actions dentro de ellos, para poder ser reutilizados

#### Organism

Los organismos son conjuntos de moleculas y atomos que contienen lógica y pueden importar los redux y actions, estos pueden ser utilizados únicamente por los containers, tienen lógica de secciones

#### Containers

Estos tienen la estructura completa de la vista y son los que se utilizan las comunicaciones asincronas con la api