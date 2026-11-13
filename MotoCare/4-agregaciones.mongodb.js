// ================================================
// SISTEMA: MotoCare
// Archivo 4: dos pipelines de agregacion
// Ejecutar despues de 1-datos.mongodb.js y 2-crud.mongodb.js
// ================================================

use("motocare");

// AGREGACION 1:
// ¿Cuántas motocicletas activas hay registradas en cada ciudad?
// $match filtra las motocicletas activas.
// $group agrupa por ciudad y $sum cuenta los documentos.
// $sort ordena de mayor a menor cantidad.
db.motocicletas.aggregate([
  { $match: { estado: "Activa" } },
  {
    $group: {
      _id: "$ciudad",
      totalMotocicletas: { $sum: 1 }
    }
  },
  { $sort: { totalMotocicletas: -1 } }
]);

// AGREGACION 2:
// ¿Cuáles son los tres tipos de mantenimiento más frecuentes?
// Primero se muestra el resultado parcial de $unwind.
// $unwind separa cada elemento del arreglo mantenimientos
// y genera un documento por cada mantenimiento.
db.motocicletas.aggregate([
  { $unwind: "$mantenimientos" }
]);

// Pipeline completo:
// $unwind separa los mantenimientos.
// $group agrupa por tipo y cuenta cuántas veces aparece.
// $project cambia el formato de salida.
// $sort ordena de mayor a menor.
// $limit conserva solamente los tres primeros resultados.
db.motocicletas.aggregate([
  { $unwind: "$mantenimientos" },
  {
    $group: {
      _id: "$mantenimientos.tipo",
      cantidad: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      cantidad: 1
    }
  },
  { $sort: { cantidad: -1 } },
  { $limit: 3 }
]);
