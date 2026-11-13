# MotoCare - Sistema de gestion de motocicletas

## Descripcion
MotoCare es un sistema de base de datos NoSQL desarrollado en MongoDB para administrar motocicletas, sus propietarios, su estado y el historial de mantenimientos realizados.

## Base de datos y coleccion
- Base de datos: `motocare`
- Coleccion principal: `motocicletas`

Cada documento representa una motocicleta e incluye:
- Identificador manual (`_id`).
- Marca, modelo, cilindraje, anio, ciudad y estado.
- Documento anidado `propietario` con datos del propietario.
- Arreglo de documentos `mantenimientos`, con tipo, fecha y costo.
- Campo de fecha `fecha_registro` almacenado como `ISODate`.
- Campo `garantia`, que no aparece en todos los documentos para representar datos opcionales.

## Archivos del proyecto
1. `1-datos.mongodb.js`: selecciona la base de datos, recrea la coleccion e inserta 12 motocicletas.
2. `2-crud.mongodb.js`: realiza inserciones, actualizaciones, agrega un mantenimiento a un arreglo y elimina un documento despues de contar los registros.
3. `3-consultas.mongodb.js`: contiene cinco consultas avanzadas con sus preguntas comentadas.
4. `4-agregaciones.mongodb.js`: contiene dos pipelines de agregacion. El segundo incluye una consulta parcial con `$unwind` y una consulta completa para obtener los tres mantenimientos mas frecuentes.

## Requisitos
- MongoDB Server instalado y en ejecucion.
- MongoDB Shell (`mongosh`).

## Como ejecutar
Abrir una terminal donde este disponible `mongosh` y ejecutar los archivos en este orden:

```bash
mongosh --file "1-datos.mongodb.js"
mongosh --file "2-crud.mongodb.js"
mongosh --file "3-consultas.mongodb.js"
mongosh --file "4-agregaciones.mongodb.js"
```

Tambien se pueden abrir los archivos en MongoDB Compass o PyCharm y copiar su contenido en una sesion de `mongosh`.

**Importante:** ejecutar primero el archivo de datos. El archivo `1-datos.mongodb.js` elimina y vuelve a crear la coleccion para dejar los 12 documentos iniciales. Si se ejecuta nuevamente, reinicia la coleccion. Los demas archivos deben ejecutarse despues de cargar los datos.
