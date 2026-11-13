// ================================================
// SISTEMA: MotoCare
// Archivo 3: cinco consultas avanzadas
// Ejecutar despues de 1-datos.mongodb.js y 2-crud.mongodb.js
// ================================================

use("motocare");

// CONSULTA 1:
// ¿Cuáles motocicletas tienen un cilindraje superior a 200 cc?
db.motocicletas.find({ cilindraje: { $gt: 200 } });

// CONSULTA 2:
// ¿Cuáles motocicletas están registradas en Medellín o Envigado?
db.motocicletas.find({
  ciudad: { $in: ["Medellin", "Envigado"] }
});

// CONSULTA 3:
// ¿Cuáles motocicletas están activas y tienen más de 200 cc?
db.motocicletas.find({
  $and: [
    { estado: "Activa" },
    { cilindraje: { $gt: 200 } }
  ]
});

// CONSULTA 4:
// ¿Qué motocicletas tienen registrado el campo de garantía?
db.motocicletas.find({
  garantia: { $exists: true }
});

// CONSULTA 5:
// ¿Qué motocicletas tienen al menos un mantenimiento cuyo costo supera los $100.000?
db.motocicletas.find({
  mantenimientos: {
    $elemMatch: { costo: { $gt: 100000 } }
  }
});
