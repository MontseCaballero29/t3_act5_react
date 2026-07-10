# t3_act5_react

**Tecnológico Nacional de México /**
**Instituto Tecnológico de Oaxaca**

**Estudiante:** Dalia Montserrat Caballero Silva


**Materia:** Programación Web


**Docente:** Adelina Martínez Nieto


**Actividad:** React - App de clicks

---

## Descripción del proyecto

Este proyecto es una mini aplicación creada con React y Vite que consiste en un contador de clicks, la cual permite aumentar el contador de uno en uno, disminuirlo y reiniciarlo para que vuelva a cero.

Para realizar el proyecto utilicé diferentes conceptos de React, como componentes funcionales, props, estado con `useState`, eventos con `onClick` y el método `.map()` para mostrar una lista de elementos de forma dinámica.

El proyecto está dividido en diferentes componentes, el `Encabezado` se encarga de mostrar el título de la aplicación, `Mensaje` recibe un texto mediante props y lo muestra arriba del contador, `Contador` utiliza `useState` para guardar y modificar el valor del contador y el componente `ListaFunciones` utiliza `.map()` para mostrar dinámicamente las funciones disponibles en la aplicación.

Los botones permiten interactuar con el contador, con `+1`, el valor aumenta; al presionar `-1`, disminuye; y con `Reiniciar`, el contador vuelve a cero.

---

---

---

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente recibe desde otro componente; un componente padre envía información a un componente hijo para que este pueda utilizarla o mostrarla.

El state, se utiliza para guardar datos que pueden cambiar mientras se está utilizando la aplicación y cuando el estado cambia, React actualiza automáticamente la información que aparece en pantalla.



### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

Es importante utilizar una `key` porque permite que React identifique cada elemento de una lista de manera individual, ayuda a React a reconocer qué elementos cambiaron, fueron agregados o eliminados, gracias a eso React puede actualizar la lista de una forma más eficiente sin tener que volver a modificar todos los elementos.


### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

useState es una función de React que permite guardar un valor dentro de un componente y modificarlo cuando sea necesario y cuando ese valor cambia, React actualiza automáticamente la parte de la pantalla donde se está utilizando.


###  d) Pega el enlace de tu repositorio de GitHub.

https://github.com/MontseCaballero29/t3_act5_react


###  e) Pega el enlace de tu proyecto ya desplegado en GitHub Pages.

aún no
