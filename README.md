​En este proyecto aplicaremos todo lo aprendido hasta ahora para hacer la Parte visual de la aplicación. Debe ser responsive, mobile-first. Usaremos React funcional para diseñar el front

Requisitos
Se deben tener en cuenta las siguientes consideraciones:

Respetar los principios y técnicas de lo que hemos aprendido durante el curso sobre HTML5, CSS3/SASS, ES6
Frontend: Utilizar react FUNCIONAL.
JS: manipulación del DOM, asincronía, promesas, fetch/axios, async/await... Utilizar el lenguaje JS con los principios utilizados en clase.
Se permite el uso de cualquier recurso de terceros (librerías, paquetes npm, etc.) que nos pueda facilitar el desarrollo.
Gestión del control de versiones con GitHub desde el principio del proyecto. Rama main, develop y ramas feature correspondientes.
Se prestará especial atención a un código limpio, legible, bien documentado, correctamente versionado y fácil de mantener, así como a la aplicación sobre el mismo de los principios SOLID​​
Respecto a la parte WEB
Home:

GET http://localhost:3000/​

En la vista home aparecerá:

Usar la API de la NASA para obtener la APOD(Astronomy Picture Of the Day) y dibujarla en el front.
Barra de navegación: Home, Asteroides, NEAs
Sobre Landings:

GET http://localhost:3000/landing

Pintar en un mapa con Leaflet las localizaciones de los asteroides.
Añadir algún filtro para seleccionar lo que quiero visualizar en el mapa. Ejemplo:
Input + botón de filtro por peso
Input + botón de filtro por clase
Select para filtrar algún campo
Pintar en el mapa labels con los detalles del meteorito
[
  {
    "name": "Aachen",
    "id": "1",
    "nametype": "Valid",
    "recclass": "L5",
    "mass": "21",
    "fall": "Fell",
    "year": "1880-01-01T00:00:00.000",
    "reclat": "50.775000",
    "reclong": "6.083330",
    "geolocation": { "latitude": "50.775", "longitude": "6.08333" }
  },
  ...
]
Sobre panel de control de Landings:

GET http://localhost:3000/landing/list Deberá aparecer en pantalla:

Formulario de alta de nuevos landings
Listado de todos los landings
Cada landing tendrá botones editar, borrar
Se valorará que se use alguna librería para hacer paginación(ejemplo, mostrar de 10 en 10).
Sobre NEAs

GET http://localhost:3000/neas

Pintar en unas tarjetas el detalle de cada NEA con los datos traídos de nuestra API creada anteriormente
[
  {
    "designation": "419880 (2011 AH37)",
    "discovery_date": "2011-01-07T00:00:00.000",
    "h_mag": "19.7",
    "moid_au": "0.035",
    "q_au_1": "0.84",
    "q_au_2": "4.26",
    "period_yr": "4.06",
    "i_deg": "9.65",
    "pha": "Y",
    "orbit_class": "Apollo"
  },
  ...
]
Sobre panel de control de NEAs:

GET http://localhost:3000/landing/list Deberá aparecer en pantalla:

Formulario de alta de nuevos NEAs
Listado de todos los NEAs
Cada NEA tendrá botones editar,`borrar
Se valorará que se use alguna librería para hacer paginación (ejemplo, mostrar de 10 en 10).
Respecto a la parte Back
Utilizar el backend hecho hasta ahora. Si hay funcionalidades que no te ha dado tiempo a implementar del Backend, las dejamos para desarrollar en el futuro

Juntar todo para tener una APP MERN
Al final debemos tener una app MERN integrada y funcionando. Desplegar en Heroku para probar que todo funcione.
