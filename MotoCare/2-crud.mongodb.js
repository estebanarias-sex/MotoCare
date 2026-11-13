// ================================================
// SISTEMA: MotoCare
// Archivo 2: operaciones CRUD
// Ejecutar despues de 1-datos.mongodb.js
// ================================================

use("motocare");

// Preparar el archivo para poder ejecutarlo nuevamente:
// contar y eliminar registros de prueba anteriores, si existen.
const idsPrueba = ["MOTO013", "MOTO014", "MOTO015"];
const cantidadAnterior = db.motocicletas.countDocuments({ _id: { $in: idsPrueba } });
print("Registros de prueba anteriores encontrados: " + cantidadAnterior);
if (cantidadAnterior > 0) {
  db.motocicletas.deleteMany({ _id: { $in: idsPrueba } });
}

// 1. INSERT ONE: registrar una motocicleta nueva.
db.motocicletas.insertOne({
  _id: "MOTO013",
  marca: "Royal Enfield",
  modelo: "Himalayan",
  cilindraje: 411,
  anio: 2024,
  ciudad: "Medellin",
  estado: "Activa",
  propietario: { nombre: "Mateo Sanchez", telefono: "3013334455", correo: "mateo@email.com" },
  mantenimientos: [
    { tipo: "Cambio de aceite", fecha: ISODate("2026-10-20"), costo: 95000 }
  ],
  garantia: { vigente: true, meses: 24 },
  fecha_registro: ISODate("2026-10-20")
});

// 2. INSERT MANY: registrar dos motocicletas adicionales.
db.motocicletas.insertMany([
  {
    _id: "MOTO014",
    marca: "Suzuki",
    modelo: "V-Strom 250",
    cilindraje: 248,
    anio: 2024,
    ciudad: "Envigado",
    estado: "Activa",
    propietario: { nombre: "Camila Rios", telefono: "3014445566", correo: "camila@email.com" },
    mantenimientos: [
      { tipo: "Cambio de filtros", fecha: ISODate("2026-10-21"), costo: 70000 },
      { tipo: "Revision general", fecha: ISODate("2026-10-25"), costo: 140000 }
    ],
    garantia: { vigente: true, meses: 24 },
    fecha_registro: ISODate("2026-10-21")
  },
  {
    _id: "MOTO015",
    marca: "Bajaj",
    modelo: "Pulsar NS200",
    cilindraje: 199,
    anio: 2023,
    ciudad: "Sabaneta",
    estado: "Activa",
    propietario: { nombre: "Nicolas Perez", telefono: "3015556677", correo: "nicolas@email.com" },
    mantenimientos: [
      { tipo: "Cambio de aceite", fecha: ISODate("2026-10-22"), costo: 80000 },
      { tipo: "Revision de frenos", fecha: ISODate("2026-10-26"), costo: 115000 }
    ],
    garantia: { vigente: false, meses: 12 },
    fecha_registro: ISODate("2026-10-22")
  }
]);

// 3. UPDATE ONE con $set: cambiar el estado de una motocicleta.
db.motocicletas.updateOne(
  { _id: "MOTO013" },
  { $set: { estado: "En mantenimiento" } }
);

// 4. UPDATE MANY con $set: marcar con prioridad alta
// todas las motocicletas que estén en mantenimiento.
db.motocicletas.updateMany(
  { estado: "En mantenimiento" },
  { $set: { prioridad_revision: "Alta" } }
);

// 5. PUSH: agregar un mantenimiento al arreglo de MOTO013.
db.motocicletas.updateOne(
  { _id: "MOTO013" },
  {
    $push: {
      mantenimientos: {
        tipo: "Revision de frenos",
        fecha: ISODate("2026-11-01"),
        costo: 135000
      }
    }
  }
);

// 6. DELETE ONE: primero contar el documento que se va a eliminar.
const cantidadAntesEliminar = db.motocicletas.countDocuments({ _id: "MOTO015" });
print("Documentos MOTO015 antes de eliminar: " + cantidadAntesEliminar);

// Eliminar el documento después de verificar el conteo.
db.motocicletas.deleteOne({ _id: "MOTO015" });

// Mostrar el total final de documentos.
print("Total de motocicletas al finalizar CRUD: " + db.motocicletas.countDocuments());
