# Trabajos Prácticos III cuatri Cepit

En este repositorio estan todos los prácticos solicitados por la carrera de Desarrollador Web Full Stack dictado por la Cepit


## II Entregable

**Actividad:**  
Generar backend con nest  
Debe responder con un json, con una estructura definida:  
Utilizar método get en controlador  
Mostrar que ingresando en localhost:port nos responde la apiAgregar en main, para poder conectarse con frontend -> app.enableCors();  
Agregar prefijo /api -> app.setGlobalPrefix('api')

### Instrucciones para correr el codigo

1.  Sobre la carpeta **backend** abrir una terminal de Git y escribir el comando

> `$ npm  run  start:dev` 
 
Este comando queda en modo vigilia, así se logra ver cada cambio que se hace al codigo en tiempo real.

2.  Sobre la carpeta **frontend** abrir el cmd y escribir

> `$ npm run dev`

El proyecto es visible sobre el navegador en el puerto **http://localhost:5173/** y para que se vean las 'cards' el front se comunica con el back mediante el puerto **http://localhost:3000/api**
